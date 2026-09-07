import { ACCOUNTS_STORE, SESSION_STORE, openOfflineDatabase } from './offlineDatabase'

const PBKDF2_ITERATIONS = 150000

async function withStore(storeName, mode, operation) {
  const db = await openOfflineDatabase()
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, mode)
    const request = operation(transaction.objectStore(storeName))
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error || new Error('Local storage is unavailable.'))
    transaction.onabort = () => reject(transaction.error || new Error('Local storage is unavailable.'))
    transaction.oncomplete = () => db.close()
  })
}

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase()
}

function toBase64(bytes) {
  return btoa(String.fromCharCode(...bytes))
}

function fromBase64(value) {
  return Uint8Array.from(atob(value), (character) => character.charCodeAt(0))
}

async function derivePasswordHash(password, salt) {
  const keyMaterial = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits'])
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: PBKDF2_ITERATIONS }, keyMaterial, 256)
  return toBase64(new Uint8Array(bits))
}

function sameValue(left, right) {
  if (left.length !== right.length) return false
  let difference = 0
  for (let index = 0; index < left.length; index += 1) difference |= left.charCodeAt(index) ^ right.charCodeAt(index)
  return difference === 0
}

function publicAccount(account) {
  if (!account) return null
  return { id: account.id, serverId: account.serverId || null, email: account.email, firstName: account.firstName, lastName: account.lastName, roles: account.roles || ['STUDENT'], local: true }
}

async function saveSession(account) {
  await withStore(SESSION_STORE, 'readwrite', (store) => store.put({ key: 'current', accountId: account.id, email: account.email, updatedAt: new Date().toISOString() }))
  return publicAccount(account)
}

export async function createLocalAccount(details) {
  const email = normalizeEmail(details.email)
  if (!email || !details.firstName?.trim() || !details.lastName?.trim() || !details.password) throw new Error('Please provide valid registration details.')
  const existing = await withStore(ACCOUNTS_STORE, 'readonly', (store) => store.get(email))
  if (existing) {
    const error = new Error('An account with this email already exists. Please sign in instead.')
    error.status = 409
    throw error
  }
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const account = {
    id: crypto.randomUUID(), email, firstName: details.firstName.trim(), lastName: details.lastName.trim(), roles: ['STUDENT'],
    passwordSalt: toBase64(salt), passwordHash: await derivePasswordHash(details.password, salt), passwordIterations: PBKDF2_ITERATIONS,
    createdAt: new Date().toISOString(), serverId: null, syncStatus: 'pending'
  }
  await withStore(ACCOUNTS_STORE, 'readwrite', (store) => store.put(account))
  return saveSession(account)
}

export async function authenticateLocally({ email, password }) {
  const account = await withStore(ACCOUNTS_STORE, 'readonly', (store) => store.get(normalizeEmail(email)))
  if (!account || !password) throw new Error('Invalid email or password.')
  const hash = await derivePasswordHash(password, fromBase64(account.passwordSalt))
  if (!sameValue(hash, account.passwordHash)) throw new Error('Invalid email or password.')
  return saveSession(account)
}

export async function initializeLocalCredential(credentials, remoteUser) {
  const email = normalizeEmail(credentials.email)
  let account = await withStore(ACCOUNTS_STORE, 'readonly', (store) => store.get(email))
  if (!account) {
    const salt = crypto.getRandomValues(new Uint8Array(16))
    account = {
      id: crypto.randomUUID(), email, firstName: remoteUser.firstName || '', lastName: remoteUser.lastName || '', roles: remoteUser.roles || ['STUDENT'],
      passwordSalt: toBase64(salt), passwordHash: await derivePasswordHash(credentials.password, salt), passwordIterations: PBKDF2_ITERATIONS,
      createdAt: new Date().toISOString(), serverId: remoteUser.id || null, syncStatus: 'ready'
    }
  } else {
    account = { ...account, firstName: remoteUser.firstName || account.firstName, lastName: remoteUser.lastName || account.lastName, roles: remoteUser.roles || account.roles, serverId: remoteUser.id || account.serverId, syncStatus: 'ready' }
  }
  await withStore(ACCOUNTS_STORE, 'readwrite', (store) => store.put(account))
  return saveSession(account)
}

export async function getLocalSession() {
  const session = await withStore(SESSION_STORE, 'readonly', (store) => store.get('current'))
  if (!session) return null
  const account = await withStore(ACCOUNTS_STORE, 'readonly', (store) => store.get(session.email))
  return account ? publicAccount(account) : null
}

export async function clearLocalSession() {
  await withStore(SESSION_STORE, 'readwrite', (store) => store.delete('current'))
}

export async function updateLocalAccountProfile(remoteUser) {
  const email = normalizeEmail(remoteUser.email)
  const account = await withStore(ACCOUNTS_STORE, 'readonly', (store) => store.get(email))
  if (!account) return null
  const updatedAccount = { ...account, firstName: remoteUser.firstName, lastName: remoteUser.lastName, roles: remoteUser.roles || account.roles, serverId: remoteUser.id || account.serverId, syncStatus: 'ready' }
  await withStore(ACCOUNTS_STORE, 'readwrite', (store) => store.put(updatedAccount))
  return publicAccount(updatedAccount)
}

export const OFFLINE_DB_NAME = 'distem-rwanda-offline'
export const OFFLINE_DB_VERSION = 3
export const ACCOUNTS_STORE = 'accounts'
export const SESSION_STORE = 'session'
export const PROGRESS_STORE = 'progress'
export const LAB_PROGRESS_STORE = 'labProgress'

// One database contract owns all offline stores. Version 3 adds account-scoped
// laboratory progress without deleting existing local data.
export function openOfflineDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(OFFLINE_DB_NAME, OFFLINE_DB_VERSION)
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains(ACCOUNTS_STORE)) db.createObjectStore(ACCOUNTS_STORE, { keyPath: 'email' })
      if (!db.objectStoreNames.contains(SESSION_STORE)) db.createObjectStore(SESSION_STORE, { keyPath: 'key' })
      let progressStore
      if (!db.objectStoreNames.contains(PROGRESS_STORE)) progressStore = db.createObjectStore(PROGRESS_STORE, { keyPath: 'id' })
      else progressStore = request.transaction.objectStore(PROGRESS_STORE)
      if (!progressStore.indexNames.contains('accountId')) progressStore.createIndex('accountId', 'accountId', { unique: false })
      let labProgressStore
      if (!db.objectStoreNames.contains(LAB_PROGRESS_STORE)) labProgressStore = db.createObjectStore(LAB_PROGRESS_STORE, { keyPath: 'id' })
      else labProgressStore = request.transaction.objectStore(LAB_PROGRESS_STORE)
      if (!labProgressStore.indexNames.contains('accountId')) labProgressStore.createIndex('accountId', 'accountId', { unique: false })
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error || new Error('Offline storage is unavailable.'))
  })
}

import { LAB_PROGRESS_STORE, openOfflineDatabase } from './offlineDatabase'

async function transaction(mode, operation) {
  const db = await openOfflineDatabase()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(LAB_PROGRESS_STORE, mode)
    let result
    const request = operation(tx.objectStore(LAB_PROGRESS_STORE))
    request.onsuccess = () => { result = request.result }
    request.onerror = () => { /* the transaction abort handler returns the storage error */ }
    tx.oncomplete = () => { db.close(); resolve(result) }
    tx.onerror = () => { /* onabort below owns the single rejection path */ }
    tx.onabort = () => { db.close(); reject(tx.error || request.error || new Error('Laboratory progress is unavailable.')) }
  })
}

export async function getCompletedExperiments(accountId) {
  if (!accountId) return []
  const records = await transaction('readonly', (store) => store.index('accountId').getAll(accountId))
  return records.filter((record) => record.status === 'completed').map((record) => record.experimentId)
}

export async function getExperimentState(accountId, experimentId) {
  if (!accountId || !experimentId) return null
  return transaction('readonly', (store) => store.get(`${accountId}:${experimentId}`))
}

export async function saveExperimentState(accountId, experimentId, state) {
  if (!accountId || !experimentId) return
  const existing = await getExperimentState(accountId, experimentId)
  const now = new Date().toISOString()
  await transaction('readwrite', (store) => store.put({
    ...existing,
    id: `${accountId}:${experimentId}`,
    accountId,
    experimentId,
    status: existing?.status || 'in-progress',
    startedAt: existing?.startedAt || now,
    updatedAt: now,
    syncStatus: 'pending',
    state,
  }))
}

export async function completeExperiment(accountId, experimentId) {
  if (!accountId || !experimentId) return
  const existing = await getExperimentState(accountId, experimentId)
  const now = new Date().toISOString()
  await transaction('readwrite', (store) => store.put({
    ...existing,
    id: `${accountId}:${experimentId}`,
    accountId,
    experimentId,
    status: 'completed',
    completedAt: now,
    updatedAt: now,
    syncStatus: 'pending',
  }))
}

export async function getPendingLabProgress(accountId) {
  if (!accountId) return []
  const records = await transaction('readonly', (store) => store.index('accountId').getAll(accountId))
  return records.filter((record) => record.syncStatus === 'pending')
}

export async function updateLabSyncStatus(accountId, recordIds, syncStatus, syncError = null) {
  if (!accountId || !recordIds.length) return
  const db = await openOfflineDatabase()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(LAB_PROGRESS_STORE, 'readwrite')
    const request = tx.objectStore(LAB_PROGRESS_STORE).index('accountId').getAll(accountId)
    request.onsuccess = () => {
      for (const record of request.result.filter((entry) => recordIds.includes(entry.id))) {
        tx.objectStore(LAB_PROGRESS_STORE).put({ ...record, syncStatus, syncError, syncedAt: syncStatus === 'synced' ? new Date().toISOString() : record.syncedAt })
      }
    }
    tx.oncomplete = () => { db.close(); resolve() }
    tx.onabort = () => { db.close(); reject(tx.error || new Error('Laboratory progress is unavailable.')) }
  })
}

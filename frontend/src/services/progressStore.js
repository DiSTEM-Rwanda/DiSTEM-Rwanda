import { PROGRESS_STORE, openOfflineDatabase } from './offlineDatabase'

async function transaction(mode, operation) {
  const db = await openOfflineDatabase()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PROGRESS_STORE, mode)
    let result
    const request = operation(tx.objectStore(PROGRESS_STORE))

    request.onsuccess = () => {
      result = request.result
    }
    request.onerror = () => {
      // The transaction's abort handler rejects the operation and closes the DB.
    }
    tx.oncomplete = () => {
      db.close()
      resolve(result)
    }
    tx.onabort = () => {
      db.close()
      reject(tx.error || request.error || new Error('Progress storage is unavailable.'))
    }
    tx.onerror = () => {
      // onabort provides the final transaction error.
    }
  })
}

export async function getCompletedLessons(accountId) {
  if (!accountId) return []
  const records = await transaction('readonly', (store) => store.index('accountId').getAll(accountId))
  return records.filter((record) => record.completed).map((record) => record.lessonId)
}

export async function completeLesson(accountId, lessonId) {
  if (!accountId || !lessonId) return
  const now = new Date().toISOString()
  await transaction('readwrite', (store) => store.put({ id: `${accountId}:${lessonId}`, accountId, lessonId, completed: true, completedAt: now, updatedAt: now, syncStatus: 'pending' }))
}

export async function getPendingLessonProgress(accountId) {
  if (!accountId) return []
  const records = await transaction('readonly', (store) => store.index('accountId').getAll(accountId))
  return records.filter((record) => record.completed && record.syncStatus === 'pending')
}

export async function updateLessonSyncStatus(accountId, recordIds, syncStatus, syncError = null) {
  if (!accountId || !recordIds.length) return
  const db = await openOfflineDatabase()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PROGRESS_STORE, 'readwrite')
    const request = tx.objectStore(PROGRESS_STORE).index('accountId').getAll(accountId)
    request.onsuccess = () => {
      for (const record of request.result.filter((entry) => recordIds.includes(entry.id))) {
        tx.objectStore(PROGRESS_STORE).put({ ...record, syncStatus, syncError, syncedAt: syncStatus === 'synced' ? new Date().toISOString() : record.syncedAt })
      }
    }
    tx.oncomplete = () => { db.close(); resolve() }
    tx.onabort = () => { db.close(); reject(tx.error || new Error('Progress storage is unavailable.')) }
  })
}

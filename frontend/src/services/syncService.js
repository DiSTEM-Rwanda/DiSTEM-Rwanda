import { syncService as api } from './authService'
import { getPendingLessonProgress, updateLessonSyncStatus } from './progressStore'
import { getPendingLabProgress, updateLabSyncStatus } from './labProgressStore'

let activeSync = null
let retryAttempts = 0
let retryTimer = null

function toLessonRecord(record) {
  return { clientRecordId: record.id, kind: 'LESSON', resourceId: record.lessonId, status: 'COMPLETED', occurredAt: record.updatedAt || record.completedAt, source: 'lesson' }
}

function toLabRecord(record) {
  return { clientRecordId: record.id, kind: 'LAB', resourceId: record.experimentId, status: record.status === 'completed' ? 'COMPLETED' : 'IN_PROGRESS', occurredAt: record.updatedAt || record.completedAt || record.startedAt, payload: record.state || undefined, source: 'lab' }
}

async function updateRecords(accountId, records, status, reason = null) {
  const lessonIds = records.filter((record) => record.source === 'lesson').map((record) => record.clientRecordId)
  const labIds = records.filter((record) => record.source === 'lab').map((record) => record.clientRecordId)
  await Promise.all([updateLessonSyncStatus(accountId, lessonIds, status, reason), updateLabSyncStatus(accountId, labIds, status, reason)])
}

export function synchronizePendingProgress(accountId) {
  if (!accountId || !navigator.onLine) return Promise.resolve({ skipped: 'offline' })
  if (activeSync) return activeSync
  activeSync = (async () => {
    const records = [...(await getPendingLessonProgress(accountId)).map(toLessonRecord), ...(await getPendingLabProgress(accountId)).map(toLabRecord)]
    if (!records.length) {
      retryAttempts = 0
      return { accepted: [], rejected: [] }
    }
    try {
      const response = await api.progress(records.map((record) => ({ clientRecordId: record.clientRecordId, kind: record.kind, resourceId: record.resourceId, status: record.status, occurredAt: record.occurredAt, payload: record.payload })))
      const byId = new Map(records.map((record) => [record.clientRecordId, record]))
      const accepted = response.accepted.map((entry) => byId.get(entry.clientRecordId)).filter(Boolean)
      const rejected = response.rejected.map((entry) => ({ ...byId.get(entry.clientRecordId), reason: entry.reason })).filter((entry) => entry.clientRecordId)
      await updateRecords(accountId, accepted, 'synced')
      for (const record of rejected) await updateRecords(accountId, [record], 'failed', record.reason)
      retryAttempts = 0
      return response
    } catch (error) {
      const retryable = ![400, 401, 403].includes(error.status)
      if (!retryable) {
        retryAttempts = 0
        await updateRecords(accountId, records, 'failed', error.message || 'Synchronization was rejected.')
      } else if (retryAttempts < 3) {
        retryAttempts += 1
        window.clearTimeout(retryTimer)
        retryTimer = window.setTimeout(() => { void synchronizePendingProgress(accountId) }, retryAttempts * 5000)
      }
      // Connection failures, timeouts, and 5xx responses remain pending for bounded retry and later online/login triggers.
      return { accepted: [], rejected: [], retryable }
    } finally {
      activeSync = null
    }
  })()
  return activeSync
}

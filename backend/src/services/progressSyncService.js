import biologyLessons from '../../../frontend/src/data/biologyLessons.js'
import chemistryLessons from '../../../frontend/src/data/chemistryLessons.js'
import mathematicsLessons from '../../../frontend/src/data/mathematicsLessons.js'
import physicsLessons from '../../../frontend/src/data/physicsLessons.js'
import stemProjectsLessons from '../../../frontend/src/data/stemProjectsLessons.js'
import technologyLessons from '../../../frontend/src/data/technologyLessons.js'
import experiments from '../../../frontend/src/data/virtualLabExperiments.js'
import { prisma } from '../config/prisma.js'
import { HttpError } from '../utils/httpError.js'

const lessonCatalogues = [biologyLessons, chemistryLessons, mathematicsLessons, physicsLessons, stemProjectsLessons, technologyLessons]
const lessonIds = new Set(lessonCatalogues.flatMap((catalogue) => Object.values(catalogue).flatMap((unit) => unit.lessons || []).map((lesson) => lesson.id)))
const labIds = new Set(experiments.map((experiment) => experiment.id))

function assertKnownResource(record) {
  const known = record.kind === 'LESSON' ? lessonIds.has(record.resourceId) : labIds.has(record.resourceId)
  if (!known) throw new HttpError(400, 'The progress record references unavailable bundled content.')
}

function toStoredRecord(record) {
  return {
    clientRecordId: record.clientRecordId,
    kind: record.kind,
    resourceId: record.resourceId,
    status: record.status,
    occurredAt: new Date(record.occurredAt),
    payload: record.payload ?? undefined,
  }
}

export async function synchronizeProgress(userId, records) {
  const accepted = []
  const rejected = []

  for (const record of records) {
    try {
      assertKnownResource(record)
      const stored = await prisma.learningProgress.findUnique({ where: { userId_clientRecordId: { userId, clientRecordId: record.clientRecordId } } })
      const incoming = toStoredRecord(record)

      if (!stored) {
        await prisma.learningProgress.create({ data: { userId, ...incoming } })
        accepted.push({ clientRecordId: record.clientRecordId, outcome: 'created' })
      } else if (stored.occurredAt >= incoming.occurredAt) {
        accepted.push({ clientRecordId: record.clientRecordId, outcome: 'duplicate' })
      } else {
        await prisma.learningProgress.update({ where: { id: stored.id }, data: incoming })
        accepted.push({ clientRecordId: record.clientRecordId, outcome: 'updated' })
      }
    } catch (error) {
      if (error instanceof HttpError) rejected.push({ clientRecordId: record.clientRecordId, reason: error.message })
      else throw error
    }
  }

  return { accepted, rejected }
}

import { z } from 'zod'
import { HttpError } from '../utils/httpError.js'
import { synchronizeProgress } from '../services/progressSyncService.js'

const timestamp = z.string().datetime({ offset: true }).refine((value) => !Number.isNaN(Date.parse(value)) && Date.parse(value) <= Date.now() + 5 * 60 * 1000, 'Invalid timestamp.')
const progressRecordSchema = z.object({
  clientRecordId: z.string().min(1).max(300),
  kind: z.enum(['LESSON', 'LAB']),
  resourceId: z.string().min(1).max(200),
  status: z.enum(['COMPLETED', 'IN_PROGRESS']),
  occurredAt: timestamp,
  payload: z.record(z.string(), z.unknown()).optional(),
}).strict().superRefine((record, context) => {
  if (record.kind === 'LESSON' && record.status !== 'COMPLETED') context.addIssue({ code: 'custom', message: 'Lesson records must be completed.' })
})
const syncSchema = z.object({ records: z.array(progressRecordSchema).min(1).max(100) }).strict()

export async function progress(req, res, next) {
  try {
    const parsed = syncSchema.safeParse(req.body)
    if (!parsed.success) throw new HttpError(400, 'Please provide valid progress records.')
    const result = await synchronizeProgress(req.auth.user.id, parsed.data.records)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

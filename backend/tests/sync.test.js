import { beforeEach, describe, expect, it, vi } from 'vitest'
import request from 'supertest'

const state = { records: [], sessionUser: null }
const prisma = {
  session: { findUnique: vi.fn() },
  learningProgress: {
    findUnique: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
  },
}

vi.mock('../src/config/prisma.js', () => ({ prisma }))
const { default: app } = await import('../src/app.js')

const timestamp = '2026-09-05T12:00:00.000Z'
const record = (overrides = {}) => ({
  clientRecordId: 'local-account:physics-motion-introduction',
  kind: 'LESSON',
  resourceId: 'physics-motion-introduction',
  status: 'COMPLETED',
  occurredAt: timestamp,
  ...overrides,
})

beforeEach(() => {
  state.records = []
  state.sessionUser = { id: 'server-user', isActive: true, roles: [{ role: { name: 'STUDENT' } }] }
  prisma.session.findUnique.mockReset().mockResolvedValue({ id: 'session-1', expiresAt: new Date(Date.now() + 60000), user: state.sessionUser })
  prisma.learningProgress.findUnique.mockReset().mockImplementation(async ({ where }) => state.records.find((entry) => entry.userId === where.userId_clientRecordId.userId && entry.clientRecordId === where.userId_clientRecordId.clientRecordId) || null)
  prisma.learningProgress.create.mockReset().mockImplementation(async ({ data }) => {
    const saved = { id: `progress-${state.records.length + 1}`, ...data }
    state.records.push(saved)
    return saved
  })
  prisma.learningProgress.update.mockReset().mockImplementation(async ({ where, data }) => {
    const index = state.records.findIndex((entry) => entry.id === where.id)
    state.records[index] = { ...state.records[index], ...data }
    return state.records[index]
  })
})

describe('POST /api/sync/progress', () => {
  it('requires an authenticated session', async () => {
    await expect(request(app).post('/api/sync/progress').send({ records: [record()] })).resolves.toMatchObject({ status: 401 })
  })

  it('persists a valid pending lesson record and reports acceptance', async () => {
    const response = await request(app).post('/api/sync/progress').set('Cookie', 'distem_session=test').send({ records: [record()] })
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ accepted: [{ clientRecordId: record().clientRecordId, outcome: 'created' }], rejected: [] })
    expect(state.records).toHaveLength(1)
    expect(state.records[0]).toMatchObject({ userId: 'server-user', resourceId: 'physics-motion-introduction', kind: 'LESSON', status: 'COMPLETED' })
  })

  it('treats a repeated submission as an idempotent duplicate', async () => {
    await request(app).post('/api/sync/progress').set('Cookie', 'distem_session=test').send({ records: [record()] })
    const response = await request(app).post('/api/sync/progress').set('Cookie', 'distem_session=test').send({ records: [record()] })
    expect(response.status).toBe(200)
    expect(response.body.accepted[0].outcome).toBe('duplicate')
    expect(state.records).toHaveLength(1)
  })

  it('does not allow an older record to overwrite newer stored progress', async () => {
    await request(app).post('/api/sync/progress').set('Cookie', 'distem_session=test').send({ records: [record({ occurredAt: '2026-09-05T12:01:00.000Z' })] })
    const response = await request(app).post('/api/sync/progress').set('Cookie', 'distem_session=test').send({ records: [record()] })
    expect(response.body.accepted[0].outcome).toBe('duplicate')
    expect(state.records[0].occurredAt.toISOString()).toBe('2026-09-05T12:01:00.000Z')
  })

  it('reports invalid bundled content without accepting it', async () => {
    const response = await request(app).post('/api/sync/progress').set('Cookie', 'distem_session=test').send({ records: [record({ resourceId: 'not-a-real-lesson' })] })
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ accepted: [], rejected: [{ clientRecordId: record().clientRecordId, reason: 'The progress record references unavailable bundled content.' }] })
    expect(state.records).toHaveLength(0)
  })

  it('rejects malformed records before persistence', async () => {
    const response = await request(app).post('/api/sync/progress').set('Cookie', 'distem_session=test').send({ records: [{ ...record(), status: 'IN_PROGRESS' }] })
    expect(response.status).toBe(400)
    expect(state.records).toHaveLength(0)
  })
})

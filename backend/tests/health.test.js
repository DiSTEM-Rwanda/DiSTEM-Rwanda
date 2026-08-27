import { describe, expect, it } from 'vitest'
import request from 'supertest'
import app from '../src/app.js'

describe('GET /api/health', () => {
  it('returns a safe health status', async () => {
    const response = await request(app).get('/api/health')
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ status: 'ok' })
  })
})

describe('authentication request guards', () => {
  it('rejects incomplete registration before database access', async () => {
    const response = await request(app).post('/api/auth/register').send({ email: 'test@example.com' })
    expect(response.status).toBe(400)
    expect(response.body).toEqual({ error: 'Please provide valid registration details.' })
  })

  it('rejects unauthenticated current-user requests', async () => {
    const response = await request(app).get('/api/auth/me')
    expect(response.status).toBe(401)
    expect(response.body).toEqual({ error: 'Authentication is required.' })
  })
})

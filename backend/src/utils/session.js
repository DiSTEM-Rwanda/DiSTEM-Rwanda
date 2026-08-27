import { createHash, randomBytes } from 'node:crypto'
export const COOKIE_NAME = 'distem_session'
export const hashToken = (token) => createHash('sha256').update(token).digest('hex')
export const createToken = () => randomBytes(32).toString('base64url')
export const cookieOptions = (production) => ({ httpOnly: true, sameSite: 'lax', secure: production, path: '/' })

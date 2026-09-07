import { createHash, randomBytes } from 'node:crypto'
export const COOKIE_NAME = 'distem_session'
export const hashToken = (token) => createHash('sha256').update(token).digest('hex')
export const createToken = () => randomBytes(32).toString('base64url')
export const cookieOptions = (production, { sameSite = 'lax', domain } = {}) => ({
  httpOnly: true,
  sameSite,
  // Production sessions always require HTTPS. Do not override this with an
  // environment setting: insecure cookies would weaken deployed auth.
  secure: production,
  path: '/',
  ...(domain ? { domain } : {}),
})

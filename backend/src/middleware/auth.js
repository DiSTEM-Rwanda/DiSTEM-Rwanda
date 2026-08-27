import { prisma } from '../config/prisma.js'
import { HttpError } from '../utils/httpError.js'
import { COOKIE_NAME, hashToken } from '../utils/session.js'

export async function requireAuth(req, _res, next) {
  try {
    const token = req.cookies?.[COOKIE_NAME]
    if (!token) throw new HttpError(401, 'Authentication is required.')
    const session = await prisma.session.findUnique({ where: { tokenHash: hashToken(token) }, include: { user: { include: { roles: { include: { role: true } } } } } })
    if (!session || session.expiresAt <= new Date() || !session.user.isActive) throw new HttpError(401, 'Authentication is required.')
    req.auth = { sessionId: session.id, user: session.user, roles: session.user.roles.map(({ role }) => role.name) }
    next()
  } catch (error) { next(error) }
}

export const requireRole = (...roles) => (req, _res, next) => {
  if (!req.auth?.roles.some((role) => roles.includes(role))) return next(new HttpError(403, 'You do not have permission to access this resource.'))
  next()
}

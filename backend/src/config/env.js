import 'dotenv/config'

export const env = {
  port: Number(process.env.PORT || 4000),
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5174',
  frontendOrigin: process.env.FRONTEND_ORIGIN || ['http://localhost:5173', 'http://localhost:5174'],
  isProduction: process.env.NODE_ENV === 'production',
  sessionTtlDays: Number(process.env.SESSION_TTL_DAYS || 7),
  emailVerificationTtlHours: Number(process.env.EMAIL_VERIFICATION_TTL_HOURS || 24),
}

import 'dotenv/config'

const defaultLocalFrontendUrl = 'http://localhost:5173'
const cookieSameSite = String(process.env.SESSION_COOKIE_SAME_SITE || 'lax').toLowerCase()

export const env = {
  port: Number(process.env.PORT || 4000),

  frontendUrl:
    process.env.FRONTEND_URL || defaultLocalFrontendUrl,

  // A comma-separated allow-list keeps credentialed browser requests explicit.
  // Deployment supplies the public frontend URL; local development remains usable.
  frontendOrigins: (process.env.FRONTEND_ORIGIN || defaultLocalFrontendUrl)
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),

  isProduction:
    process.env.NODE_ENV === 'production',

  // Development/demo only: keeps verification infrastructure intact while allowing MVP access.
  mvpOfflineMode: process.env.MVP_OFFLINE_MODE === 'true' || (process.env.NODE_ENV !== 'production' && process.env.MVP_OFFLINE_MODE !== 'false'),

  sessionTtlDays:
    Number(process.env.SESSION_TTL_DAYS || 7),

  sessionCookieOptions: {
    sameSite: ['lax', 'strict', 'none'].includes(cookieSameSite) ? cookieSameSite : 'lax',
    domain: process.env.SESSION_COOKIE_DOMAIN || undefined,
  },

  emailVerificationTtlHours:
    Number(process.env.EMAIL_VERIFICATION_TTL_HOURS || 24),

  resendApiKey:
    process.env.RESEND_API_KEY || '',

  resendFromEmail:
    process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
}

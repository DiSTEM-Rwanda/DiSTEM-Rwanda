import { z } from 'zod'
import { env } from '../config/env.js'
import { HttpError } from '../utils/httpError.js'
import { COOKIE_NAME, cookieOptions } from '../utils/session.js'
import * as auth from '../services/authService.js'

const registerSchema = z.object({ firstName: z.string().trim().min(1).max(80), lastName: z.string().trim().min(1).max(80), email: z.string().trim().email().max(254), password: z.string().min(8).max(128).regex(/[A-Za-z]/).regex(/\d/) })
const loginSchema = z.object({ email: z.string().trim().email().max(254), password: z.string().min(1).max(128) })
const forgotPasswordSchema = z.object({ email: z.string().trim().email().max(254) })
const resetPasswordSchema = z.object({ token: z.string().min(1), password: z.string().min(8).max(128).regex(/[A-Za-z]/).regex(/\d/) })
const verificationSchema = z.object({ email: z.string().trim().email().max(254) })
const validate = (schema, data, message = 'Please provide valid registration details.') => { const parsed = schema.safeParse(data); if (!parsed.success) throw new HttpError(400, message); return parsed.data }

export async function register(req, res, next) { try { const result = await auth.register(validate(registerSchema, req.body)); res.status(201).json({ user: result.user }) } catch (e) { next(e) } }
export async function login(req, res, next) { try { const { email, password } = validate(loginSchema, req.body); const result = await auth.login(email, password, env.sessionTtlDays, { allowUnverified: env.mvpOfflineMode }); res.cookie(COOKIE_NAME, result.token, { ...cookieOptions(env.isProduction, env.sessionCookieOptions), maxAge: env.sessionTtlDays * 86400000 }); res.json({ user: result.user }) } catch (e) { next(e) } }
export async function verifyEmail(req, res, next) { try { await auth.verifyEmail(req.query.token); res.json({ message: 'Email verified successfully!' }) } catch (e) { next(e) } }
export async function resendVerification(req, res, next) { try { const { email } = validate(verificationSchema, req.body); await auth.resendVerification(email, env.emailVerificationTtlHours); res.json({ message: 'If an unverified account exists with that email, a verification link has been sent.' }) } catch (e) { next(e) } }
export async function logout(req, res, next) { try { await auth.revoke(req.cookies?.[COOKIE_NAME]); res.clearCookie(COOKIE_NAME, cookieOptions(env.isProduction, env.sessionCookieOptions)); res.status(204).end() } catch (e) { next(e) } }
export async function me(req, res) { res.json({ user: auth.publicUser(req.auth.user) }) }
export async function forgotPassword(req, res, next) { 
  try { 
    const { email } = validate(forgotPasswordSchema, req.body)
    await auth.forgotPassword(email)
    res.json({ message: 'If an account with that email exists, a password reset link has been sent.' })
  } catch (e) { next(e) } 
}
export async function resetPassword(req, res, next) { 
  try { 
    const input = validate(resetPasswordSchema, req.body)
    await auth.resetPassword(input)
    res.json({ message: 'Your password has been reset successfully.' })
  } catch (e) { next(e) } 
}

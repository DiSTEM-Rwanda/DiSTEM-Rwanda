import { Router } from 'express'
import * as auth from '../controllers/authController.js'
import { requireAuth } from '../middleware/auth.js'
const router = Router()
router.post('/register', auth.register)
router.post('/login', auth.login)
router.get('/verify-email', auth.verifyEmail)
router.post('/resend-verification', auth.resendVerification)
router.post('/logout', auth.logout)
router.get('/me', requireAuth, auth.me)
router.post('/forgot-password', auth.forgotPassword)
router.post('/reset-password', auth.resetPassword)
export default router

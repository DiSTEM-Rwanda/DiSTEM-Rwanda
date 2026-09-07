import { Router } from 'express'
import { requireAuth } from '../middleware/auth.js'
import { progress } from '../controllers/syncController.js'

const router = Router()
router.post('/progress', requireAuth, progress)
export default router

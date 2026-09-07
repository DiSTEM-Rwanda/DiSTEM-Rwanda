import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { env } from './config/env.js'
import authRoutes from './routes/authRoutes.js'
import syncRoutes from './routes/syncRoutes.js'

const app = express()

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like when going through a proxy) or from allowed origins
    if (!origin || env.frontendOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(null, false)
    }
  },
  credentials: true
}
app.use(cors(corsOptions))
app.use(express.json({ limit: '16kb' }))
app.use(cookieParser())
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))
app.use('/api/auth', authRoutes)
app.use('/api/sync', syncRoutes)
app.use((_req, _res, next) => next(Object.assign(new Error('Not found.'), { status: 404 })))
app.use((error, _req, res, _next) => {
  const status = error.status || 500
  const isExpectedHttpError = Boolean(error.status)

  if (status >= 500 && !isExpectedHttpError) {
    console.error(error)
  }

  res.status(status).json({
    error: isExpectedHttpError
      ? error.message
      : 'An unexpected error occurred.'
  })
})
export default app

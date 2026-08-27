import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { env } from './config/env.js'
import authRoutes from './routes/authRoutes.js'

const app = express()

const corsOriginList = Array.isArray(env.frontendOrigin) ? env.frontendOrigin : [env.frontendOrigin]
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like when going through a proxy) or from allowed origins
    if (!origin || corsOriginList.includes(origin)) {
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
app.use((_req, _res, next) => next(Object.assign(new Error('Not found.'), { status: 404 })))
app.use((error, _req, res, _next) => { const status = error.status || 500; if (status >= 500) console.error(error); res.status(status).json({ error: status >= 500 ? 'An unexpected error occurred.' : error.message }) })
export default app

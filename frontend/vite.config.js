import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'

const serviceWorkerTemplate = readFileSync(
  new URL('./service-worker.template.js', import.meta.url),
  'utf8',
)

function pwaServiceWorker() {
  return {
    name: 'distem-pwa-service-worker',
    apply: 'build',
    generateBundle(_, bundle) {
      const precacheUrls = [
        '/',
        '/index.html',
        '/manifest.webmanifest',
        '/icons/distem-icon-192.png',
        '/icons/distem-icon-512.png',
        ...Object.values(bundle).map(({ fileName }) => `/${fileName}`),
      ]
      const cacheVersion = createHash('sha256')
        .update(serviceWorkerTemplate)
        .update(precacheUrls.sort().join('|'))
        .digest('hex')
        .slice(0, 12)

      this.emitFile({
        type: 'asset',
        fileName: 'service-worker.js',
        source: serviceWorkerTemplate
          .replace('__CACHE_VERSION__', JSON.stringify(cacheVersion))
          .replace('__PRECACHE_URLS__', JSON.stringify(precacheUrls)),
      })
    },
  }
}

const apiProxy = {
  '/api': {
    target: 'http://localhost:4000',
    changeOrigin: true,
  },
}

// Keep production preview behavior aligned with development. In particular,
// API requests must reach the backend rather than Vite's SPA fallback.
export default defineConfig({
  plugins: [react(), pwaServiceWorker()],
  server: {
    proxy: apiProxy,
  },
  preview: {
    proxy: apiProxy,
  },
})

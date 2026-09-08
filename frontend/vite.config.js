import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'

const serviceWorkerTemplate = readFileSync(
  new URL('./service-worker.template.js', import.meta.url),
  'utf8',
)

function pwaServiceWorker(base) {
  return {
    name: 'distem-pwa-service-worker',
    apply: 'build',
    generateBundle(_, bundle) {
      const prefix = base.endsWith('/') ? base : `${base}/`

      const precacheUrls = [
        prefix,
        `${prefix}index.html`,
        `${prefix}manifest.webmanifest`,
        `${prefix}icons/distem-icon-192.png`,
        `${prefix}icons/distem-icon-512.png`,
        ...Object.values(bundle).map(({ fileName }) => `${prefix}${fileName}`),
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

const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : 'DiSTEM-Rwanda'

const base = process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/'

const apiProxy = {
  '/api': {
    target: 'http://localhost:4000',
    changeOrigin: true,
  },
}

// Keep production preview behavior aligned with development. In particular,
// API requests must reach the backend rather than Vite's SPA fallback.
export default defineConfig({
  base,
  plugins: [react(), pwaServiceWorker(base)],
  server: {
    proxy: apiProxy,
  },
  preview: {
    proxy: apiProxy,
  },
})

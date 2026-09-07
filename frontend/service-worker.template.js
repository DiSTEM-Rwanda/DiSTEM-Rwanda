/* eslint-disable no-undef -- Build values below are injected by vite.config.js. */

const CACHE_PREFIX = 'distem-rwanda-app-shell'
const CACHE_NAME = `${CACHE_PREFIX}-${__CACHE_VERSION__}`
const PRECACHE_URLS = __PRECACHE_URLS__

function isStaticAsset(request, url) {
  return (
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'image' ||
    request.destination === 'font' ||
    /\.(?:css|js|mjs|png|jpe?g|svg|webp|woff2?)$/i.test(url.pathname)
  )
}

async function cacheResponse(cache, request, response) {
  if (response && response.ok) {
    await cache.put(request, response.clone())
  }
  return response
}

async function precacheAppShell() {
  const cache = await caches.open(CACHE_NAME)

  await Promise.all(
    PRECACHE_URLS.map(async (url) => {
      try {
        await cache.add(url)
      } catch {
        // Runtime caching retries any resource unavailable while the worker installs.
      }
    }),
  )
}

self.addEventListener('install', (event) => {
  event.waitUntil(precacheAppShell().then(() => self.skipWaiting()))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  if (
    request.method !== 'GET' ||
    url.origin !== self.location.origin ||
    url.pathname === '/api' ||
    url.pathname.startsWith('/api/')
  ) {
    return
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(async (response) => {
          if (response.ok) {
            const cache = await caches.open(CACHE_NAME)
            await cacheResponse(cache, '/index.html', response)
            return response
          }

          return (await caches.match('/index.html')) || response
        })
        .catch(async () => (await caches.match('/index.html')) || Response.error()),
    )
    return
  }

  if (!isStaticAsset(request, url)) return

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse

      return fetch(request).then(async (response) => {
        const cache = await caches.open(CACHE_NAME)
        return cacheResponse(cache, request, response)
      })
    }),
  )
})

// Service Worker - الصح من الغلط
// Cache-first for static assets, always network for API/Supabase (auth + points must stay live).

const CACHE_VERSION = 'esl7-v1';
const STATIC_CACHE = `${CACHE_VERSION}-static`;

// Core pages/assets to pre-cache on install (extend as needed)
const PRECACHE_URLS = [
  '/lobby.html',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/logo.jpeg'
];

// Never cache these - dynamic/auth-sensitive data must always hit the network
const NEVER_CACHE_PATTERNS = [
  /\/api\//,                 // our own serverless functions (e.g. chat.js)
  /supabase\.co/,            // Supabase auth + points/DB calls
  /supabase\.in/
];

function shouldBypassCache(url) {
  return NEVER_CACHE_PATTERNS.some((pattern) => pattern.test(url));
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith('esl7-') && key !== STATIC_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  // Never touch API / Supabase traffic - always go to network
  if (shouldBypassCache(request.url)) {
    return;
  }

  // Cache-first, falling back to network, then updating the cache in the background
  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => cached); // offline: fall back to whatever is cached

      return cached || networkFetch;
    })
  );
});

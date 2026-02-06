const CACHE_NAME = 'codedays-v1';
const urlsToCache = [
  '/day1',
  '/day2',
  '/day3',
  '/day4',
  '/day5',
  '/day6',
  '/day7',
  '/day8',
  '/day9',
  '/day10',
  '/day11',
  '/day12',
  '/day13',
  '/day14',
  '/day15',
  '/day16',
  '/day17',
  '/day18',
  '/day19',
  '/day20',
  '/day21',
  '/day22',
  '/day23',
  '/day24',
  '/day25',
  '/day26',
  '/day27',
  '/day28',
  '/day29',
  '/day30',
  '/day31',
  '/day32',
  '/day33',
  '/day34',
  '/day35',
  '/day36'
];

// Install event - cache all pages
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache).catch(err => {
        console.log('Cache addAll error:', err);
        // Continue even if some URLs fail to cache
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      // Return cached response if available
      if (response) {
        return response;
      }

      // Otherwise, fetch from network
      return fetch(event.request).then(response => {
        // Don't cache non-successful responses
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        // Cache successful responses
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return response;
      }).catch(() => {
        // If network fails, try to return cached response
        return caches.match(event.request);
      });
    })
  );
});

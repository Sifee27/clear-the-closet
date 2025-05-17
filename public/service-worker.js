const CACHE_NAME = 'clear-the-closet-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';
const API_CACHE = 'api-v2';

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/hero-image.jpg',
  '/images/og-image.jpg',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/fonts/Montserrat-Regular.woff2',
  '/fonts/Inter-Regular.woff2',
];

// Cache strategies
const CACHE_STRATEGIES = {
  STATIC: 'CacheFirst',
  DYNAMIC: 'NetworkFirst',
  API: 'NetworkFirst',
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)),
      caches.open(DYNAMIC_CACHE),
      caches.open(API_CACHE),
    ])
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (![STATIC_CACHE, DYNAMIC_CACHE, API_CACHE].includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Helper function to determine cache strategy
const getCacheStrategy = (request) => {
  const url = new URL(request.url);
  
  // API requests
  if (url.pathname.startsWith('/api/')) {
    return CACHE_STRATEGIES.API;
  }
  
  // Static assets
  if (STATIC_ASSETS.includes(url.pathname)) {
    return CACHE_STRATEGIES.STATIC;
  }
  
  // Dynamic content
  return CACHE_STRATEGIES.DYNAMIC;
};

// Helper function to implement cache strategies
const implementStrategy = async (request, strategy) => {
  switch (strategy) {
    case CACHE_STRATEGIES.STATIC:
      return caches.match(request).then((response) => {
        return response || fetch(request).then((fetchResponse) => {
          return caches.open(STATIC_CACHE).then((cache) => {
            cache.put(request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      });

    case CACHE_STRATEGIES.DYNAMIC:
      return fetch(request)
        .then((response) => {
          return caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, response.clone());
            return response;
          });
        })
        .catch(() => {
          return caches.match(request);
        });

    case CACHE_STRATEGIES.API:
      return fetch(request)
        .then((response) => {
          if (response.ok) {
            return caches.open(API_CACHE).then((cache) => {
              cache.put(request, response.clone());
              return response;
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request);
        });

    default:
      return fetch(request);
  }
};

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  const strategy = getCacheStrategy(event.request);
  event.respondWith(implementStrategy(event.request, strategy));
});

// Background sync for failed requests
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-failed-requests') {
    event.waitUntil(syncFailedRequests());
  }
});

// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-192x192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View',
        icon: '/icons/icon-192x192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Clear the Closet', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
}); 
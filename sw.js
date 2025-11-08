const CACHE_NAME = 'walkie-talkie-v1.0.0';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  'https://cdn.tailwindcss.com'
];

// Instalacja Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        console.log('[SW] Installation complete');
        return self.skipWaiting();
      })
      .catch((err) => {
        console.error('[SW] Installation failed:', err);
      })
  );
});

// Aktywacja Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Activation complete');
        return self.clients.claim();
      })
  );
});

// Strategia Cache First dla zasobów statycznych
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignoruj żądania nie-GET
  if (request.method !== 'GET') {
    return;
  }

  // Ignoruj żądania do zewnętrznych domen (oprócz CDN)
  if (url.origin !== self.location.origin && !url.hostname.includes('cdnjs.cloudflare.com') && !url.hostname.includes('cdn.tailwindcss.com')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          console.log('[SW] Serving from cache:', request.url);
          return cachedResponse;
        }

        console.log('[SW] Fetching from network:', request.url);
        return fetch(request)
          .then((response) => {
            // Sprawdź czy odpowiedź jest prawidłowa
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            // Klonuj odpowiedź
            const responseToCache = response.clone();

            // Zapisz w cache tylko dla własnej domeny
            if (url.origin === self.location.origin) {
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(request, responseToCache);
                });
            }

            return response;
          })
          .catch((err) => {
            console.error('[SW] Fetch failed:', err);
            
            // Jeśli to jest żądanie do strony, zwróć cached index.html
            if (request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            
            return new Response('Offline - brak połączenia z internetem', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// Obsługa wiadomości od klienta
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            return caches.delete(cacheName);
          })
        );
      })
    );
  }
});

// Obsługa powiadomień push (dla przyszłych funkcji)
self.addEventListener('push', (event) => {
  console.log('[SW] Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'Nowa wiadomość głosowa',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200],
    tag: 'walkie-talkie-notification',
    requireInteraction: false,
    actions: [
      {
        action: 'open',
        title: 'Otwórz'
      },
      {
        action: 'close',
        title: 'Zamknij'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Walkie-Talkie', options)
  );
});

// Obsługa kliknięcia w powiadomienie
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then((clientList) => {
          // Sprawdź czy aplikacja jest już otwarta
          for (let client of clientList) {
            if (client.url === self.location.origin + '/' && 'focus' in client) {
              return client.focus();
            }
          }
          // Jeśli nie, otwórz nową kartę
          if (clients.openWindow) {
            return clients.openWindow('/');
          }
        })
    );
  }
});

// Synchronizacja w tle (dla przyszłych funkcji)
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync triggered');
  
  if (event.tag === 'sync-messages') {
    event.waitUntil(
      // Tutaj można dodać logikę synchronizacji wiadomości
      Promise.resolve()
    );
  }
});

console.log('[SW] Service Worker loaded');
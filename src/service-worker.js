const { assets } = global.serviceWorkerOption;
const CACHE_NAME = 'infochampioncache-v1';

let urlsToCache = [...assets, './', 'https://fonts.googleapis.com/icon?family=Material+Icons'];

urlsToCache = urlsToCache.map((path) => {
  return new URL(path, global.location).toString();
});

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  const base_url = 'https://api.football-data.org/v2/';

  if (event.request.url.indexOf(base_url) > -1) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function (cache) {
        return fetch(event.request).then(function (response) {
          cache.put(event.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    event.respondWith(
      caches
        .match(event.request, {
          ignoreSearch: true,
        })
        .then(function (response) {
          return response || fetch(event.request);
        })
    );
  }
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log('ServiceWorker: cache ' + cacheName + ' dihapus');
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('push', function (event) {
  const body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  const options = {
    body: body,
    icon: 'img/notification.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

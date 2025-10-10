self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('dawah-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600&display=swap',
        'https://abubokarbd.github.io/dawah/favicon.ico',
        'https://abubokarbd.github.io/dawah/app-icon.png',
        'https://abubokarbd.github.io/dawah/logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

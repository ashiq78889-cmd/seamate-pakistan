const CACHE_NAME = "seamate-offline-v2";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(APP_FILES);
    })
  );

  self.skipWaiting();
});


self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});


self.addEventListener("fetch", event => {

  const request = event.request;

  if (request.method !== "GET") {
    return;
  }


  /* MAP TILES */

  if (
    request.url.includes("tile.openstreetmap.org") ||
    request.url.includes("tiles.openseamap.org")
  ) {

    event.respondWith(

      caches.match(request).then(cached => {

        if (cached) {
          return cached;
        }

        return fetch(request)
          .then(response => {

            if (response && response.ok) {

              const copy = response.clone();

              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(request, copy);
                });

            }

            return response;

          })
          .catch(() => {

            return new Response(
              "",
              {
                status: 503,
                statusText: "Offline"
              }
            );

          });

      })

    );

    return;
  }


  /* APP FILES */

  event.respondWith(

    caches.match(request).then(cached => {

      if (cached) {
        return cached;
      }

      return fetch(request)
        .then(response => {

          if (response && response.ok) {

            const copy = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(request, copy);
              });

          }

          return response;

        })
        .catch(() => {

          return caches.match("./");

        });

    })

  );

});

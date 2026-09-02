const CACHE_NAME = "csa-field-app-v5";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];
// Precompute the exact absolute URLs these resolve to, so the fetch handler
// can do a strict match instead of a loose (and previously buggy) string
// comparison that ended up matching every GET request, including calls to
// the external Google Sheet sync endpoint.
const APP_SHELL_URLS = APP_SHELL.map((f) => new URL(f, self.location.href).href);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

// Cache-first for the app's own shell files only; network for everything
// else (e.g. the Google Sheet sync endpoint), which must never be served
// from cache since it needs to always reflect the live shared database.
self.addEventListener("fetch", (event) => {
  const isAppShellFile = APP_SHELL_URLS.includes(event.request.url);

  if (event.request.method !== "GET" || !isAppShellFile) {
    return; // let the browser handle it normally (e.g. sync POST/GET requests)
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
          return res;
        }).catch(() => cached)
      );
    })
  );
});

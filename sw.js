const CACHE_NAME = "csa-field-app-v3";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

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

// Cache-first for app shell files; network for everything else (e.g. the
// Google Sheet sync endpoint, which should never be served from cache).
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const isAppShellFile = APP_SHELL.some((f) => url.pathname.endsWith(f.replace("./", "")));

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

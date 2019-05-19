/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "build_a_tribute_page.css",
    "revision": "ce3253fda01a9329d02f38e1e7ac8acf"
  },
  {
    "url": "favicon.ico",
    "revision": "c211432da1f0b2d6f167ea0506307db3"
  },
  {
    "url": "icons-192.png",
    "revision": "0fd7aaea36c5084348f0510ba7a64669"
  },
  {
    "url": "icons-512.png",
    "revision": "292b810f5a960a2603bf5dc9e7825e73"
  },
  {
    "url": "img/brand-1846740_1920.jpg",
    "revision": "a67ed9c1f889d82363db30d5ea7b0807"
  },
  {
    "url": "img/electronic-keyboard-1867120_1920.jpg",
    "revision": "3d086f68b8d4ce4000a2009fb57a64d3"
  },
  {
    "url": "img/instrument-2203044_1920.jpg",
    "revision": "b3aca608b649d93277b20284fb74ecdd"
  },
  {
    "url": "img/keyboard-356842_1920.jpg",
    "revision": "7cc08ef240e43ebef1809fab9b2f7ccd"
  },
  {
    "url": "img/old-2268325_1920.jpg",
    "revision": "8e48a37f4f97f6c0ed3e570f555f8c01"
  },
  {
    "url": "img/piano-1655558_1920.jpg",
    "revision": "69135aa9318cba23b78c9e02fa78b786"
  },
  {
    "url": "img/piano-2171007_1280.jpg",
    "revision": "585ce772d5853ec79a3deb344db29202"
  },
  {
    "url": "img/piano-362251_1920.jpg",
    "revision": "42e0194103d64c725d4a1182381b643e"
  },
  {
    "url": "img/piano-658470_1920.jpg",
    "revision": "1089a33705bdeab99036d2377c2ec647"
  },
  {
    "url": "index.html",
    "revision": "68428fdb56f12d0d3497e9c61e2866c3"
  },
  {
    "url": "manifest.json",
    "revision": "ec95a09f8f90839099418a69ce8212ac"
  },
  {
    "url": "redirect.html",
    "revision": "e1a63989cbb0ef1f9d3d9c471bd8b377"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:css|js)$/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"codes", plugins: [] }), 'GET');

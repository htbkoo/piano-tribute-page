"use strict";

console.log('loaded service-worker.js');

console.log('importing workbox');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Workbox loaded`);

    configurePrecaching();
} else {
    console.log(`Workbox did not load, not going to proceed with precache and route configuration`);
}

// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        var publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

        if (publicUrl.origin !== window.location.origin) {
            // Our service worker won't work if PUBLIC_URL is on a different origin
            // from what our page is served on. This might happen if a CDN is used to
            // serve assets; see https://github.com/facebook/create-react-app/issues/2374
            return;
        }

        window.addEventListener('load', function () {
            var swUrl = "".concat(process.env.PUBLIC_URL, "/service-worker.js");

            if (isLocalhost()) {
                // This is running on localhost. Let's check if a service worker still exists or not.
                checkValidServiceWorker(swUrl, config); // Add some additional logging to localhost, pointing developers to the
                // service worker/PWA documentation.

                navigator.serviceWorker.ready.then(function () {
                    console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit http://bit.ly/CRA-PWA');
                });
            } else {
                // Is not localhost. Just register service worker
                registerValidSW(swUrl, config);
            }
        });
    }
}

function registerValidSW(swUrl, config) {
    navigator.serviceWorker.register(swUrl).then(function (registration) {
        registration.onupdatefound = function () {
            var installingWorker = registration.installing;

            if (installingWorker == null) {
                return;
            }

            installingWorker.onstatechange = function () {
                if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        // At this point, the updated precached content has been fetched,
                        // but the previous service worker will still serve the older
                        // content until all client tabs are closed.
                        console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

                        if (config && config.onUpdate) {
                            config.onUpdate(registration);
                        }
                    } else {
                        // At this point, everything has been precached.
                        // It's the perfect time to display a
                        // "Content is cached for offline use." message.
                        console.log('Content is cached for offline use.'); // Execute callback

                        if (config && config.onSuccess) {
                            config.onSuccess(registration);
                        }
                    }
                }
            };
        };
    })["catch"](function (error) {
        console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl).then(function (response) {
        // Ensure service worker exists, and that we really are getting a JS file.
        var contentType = response.headers.get('content-type');

        if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
            // No service worker found. Probably a different app. Reload the page.
            navigator.serviceWorker.ready.then(function (registration) {
                registration.unregister().then(function () {
                    window.location.reload();
                });
            });
        } else {
            // Service worker found. Proceed as normal.
            registerValidSW(swUrl, config);
        }
    })["catch"](function () {
        console.log('No internet connection found. App is running in offline mode.');
    });
}

function isLocalhost() {
    return Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
        window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
        window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
}

function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.unregister();
        });
    }
}

function configurePrecaching() {
    console.log(`configuring precache`);
    workbox.precaching.precacheAndRoute([
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
    "revision": "d7e9078946a53014164c826e7d331f9e"
  },
  {
    "url": "manifest.json",
    "revision": "ec95a09f8f90839099418a69ce8212ac"
  },
  {
    "url": "redirect.html",
    "revision": "e1a63989cbb0ef1f9d3d9c471bd8b377"
  },
  {
    "url": "serviceWorker.js",
    "revision": "335ba11567158fbcacb3ee726b1acc82"
  },
  {
    "url": "workbox-config.js",
    "revision": "7d05c35a2a6599178b6e98981aeddf08"
  }
]);
}

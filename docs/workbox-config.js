module.exports = {
    "globDirectory": "./",
    "globPatterns": [
        "**/*.{css,ico,png,jpg,html,json,js}"
    ],
    "swDest": "sw.js",

    // Define runtime caching rules.
    runtimeCaching: [
        {
            // Match any request ends with .png, .jpg, .jpeg or .svg.
            urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

            // Apply a cache-first strategy.
            handler: 'CacheFirst',

            options: {
                // Use a custom cache name.
                cacheName: 'images',

                // Only cache 10 images.
                expiration: {
                    maxEntries: 10,
                },
            },
        },
        {
            // Match any request ends with .css or .js.
            urlPattern: /\.(?:css|js)$/,

            // Apply a stale-while-revalidate strategy.
            handler: 'StaleWhileRevalidate',

            options: {
                // Use a custom cache name.
                cacheName: 'codes',
            },
        },
    ],
};
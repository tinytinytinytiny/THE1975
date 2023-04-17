const cacheName = 'my-cache';

const filesToCache = [
	'/fonts.css',
	'/fonts/schibsted-grotesk-v2-latin-regular.woff2',
	'/fonts/schibsted-grotesk-v2-latin-italic.woff2',
	'/fonts/schibsted-grotesk-v2-latin-700.woff2',
	'/fonts/schibsted-grotesk-v2-latin-700italic.woff2',
	'/fonts/schibsted-grotesk-v2-latin-900.woff2',
	'/fonts/montagu-slab-variable.woff2',
	'/images/Grunge-03.svg'
];

self.addEventListener('activate', e => self.clients.claim());

self.addEventListener('install', (e) => {
	self.skipWaiting();
	e.waitUntil(
		caches.open(cacheName)
			.then(cache => cache.addAll(filesToCache))
	);
});

self.addEventListener('fetch', (e) => {
	e.respondWith(
		caches.match(e.request).then(response => (response) ? response : fetch(e.request))
	);
});
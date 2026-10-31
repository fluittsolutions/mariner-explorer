// Version 1.0: precache the app and all licensed deck plans for airplane mode.
const CACHE='mariner-explorer-centered-round-markers-fixed-20261031';
const ASSETS=["./","./index.html","./style.css","./app.js","./manifest.webmanifest","./icon.svg","./deck-plans/deck2-2022.png","./deck-plans/deck3-2022.png","./deck-plans/deck4.png","./deck-plans/deck5.png","./deck-plans/deck6-2025.png","./deck-plans/deck7-2025.png","./deck-plans/deck8-2025.png","./deck-plans/deck9-2025.png","./deck-plans/deck10-2025.png","./deck-plans/deck11-2022.png","./deck-plans/deck12-2022.png","./deck-plans/deck13.png","./deck-plans/deck14.png","./deck-plans/deck15.png"];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;
 if(event.request.mode==='navigate'){
  event.respondWith((async()=>{const cache=await caches.open(CACHE);const cached=await cache.match('./index.html');try{const response=await fetch(event.request);return response.ok?response:(cached||response)}catch{return cached||Response.error()}})());return;
 }
 event.respondWith((async()=>{const cache=await caches.open(CACHE);const hit=await cache.match(event.request,{ignoreSearch:true});if(hit)return hit;return fetch(event.request)})());
});

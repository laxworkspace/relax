const CACHE_NAME = "relax-v1";


const filesToCache = [


"index.html",

"brain.html",

"mood.html",

"focus.html",

"planner.html",

"habits.html",

"remember.html",

"settings.html",

"backup.html",

"privacy.html",


"style.css",


"dashboard.js",

"brain.js",

"mood.js",

"focus.js",

"planner.js",

"habits.js",

"remember.js",

"settings.js",

"backup.js",


"manifest.json"


];







self.addEventListener(
"install",
event=>{


event.waitUntil(


caches.open(CACHE_NAME)

.then(cache=>{


return cache.addAll(
filesToCache
);


})


);


});










self.addEventListener(
"fetch",
event=>{


event.respondWith(


caches.match(event.request)

.then(response=>{


return response ||

fetch(event.request);


})


);


});

self.addEventListener("install", function(e) {
  e.waitUntil("to-do-app-cache".then(function(cache){
     return cache.addAll("index.html");
  })
  );
});


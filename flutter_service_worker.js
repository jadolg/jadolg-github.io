'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/index": "52b9ce08c1c8db5166984795d7e62c1e",
".git/config": "ed4409acc0e03da283aa16da0529b752",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/81/98a2760af0ad825698924780ac826ef9b0c97b": "948bd1df11e1583882a9ffff560ed08e",
".git/objects/b6/144a498f57477d6f9b26c7f62377f580ddd572": "74acd30fea2d6decb7c2927814f80b6c",
".git/objects/eb/4cf64216f31a98638bacfe063b35d5bac91c53": "b93ca3bc78a7a6586b020b3ee98b024d",
".git/objects/cc/8cc21a92a335ca947c2bde6879d36f8f1641b4": "5654092c4f7a3e82701c6af9f3f69ca3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/17/ba2c9ded5974596f2f93eba49084b7a5dd7c13": "aef9648c27069df173a0e6f06fde5864",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/b2/4f2f484b990480e65ee10179b83404c7300e09": "55dadd2d396e369cadf6c46af94f095a",
".git/objects/d5/e9575c6070512c7e01dab91896242357db23b9": "066615a77a0c4f48f11faea0984a84fe",
".git/objects/f8/75e8f6521a85b98d82fec92ad650b63e56f1a3": "e244765e06c0fcd631dae03b42ef8d4d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/23/e6a445d991bbb2ca650b2f83fca3b580b1580f": "8fa76dc11d7e90740218528aeb3cdd5a",
".git/objects/52/8b4d7687fb64fe9545ca711d9b6b5bfa183962": "77261fb21dc65039eb5b2e44877dd7bd",
".git/objects/28/56b182463c7658ecb73a2046f6145e01714d12": "ba1c60043c9d942bb9fe57f4eb641cd4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/62/e9350413bf3c50a0769898c9fc9845e6a71afe": "d654ca2046325bc5288e9f16b301dbd5",
".git/objects/a5/e0cad666c295db3da58f5b427ab0d21fe64d37": "c8575a681f792ecd5b73d76d37a0ca32",
".git/objects/b1/5c067a2b5d5def3cc73e5193d82625282cb879": "46389541b487a2fabf0668affd4a84ff",
".git/objects/c8/3f3bbeae021c4421ddd058ca90ae91460a18c2": "8fca9b0d940c4cbfb39327059f12acd0",
".git/objects/5a/721bb2f6c797dc312b108a0724d603b912de5c": "b138432570bf965707d90778a22bb1f7",
".git/objects/9c/0c54b2d1b1a4d2cb4dede4b87e69a89eecce4f": "48821522d3b37c4e678c34fa5c1f29a1",
".git/objects/9c/694ec3069b56396c8c0ff05270ef7e48a7828a": "0992069738b301f460dcbec25a858a76",
".git/objects/58/063ee57cd082ea862d011e065cf8a27a216a10": "738fcbb0d4104cb9d2af8582360040e2",
".git/objects/2a/cc699b3aa3fa410bfa40f784470c0c5d9cf8c2": "1ee7efefa0a2cbaee9ec7f7ea5dcb2c7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/8c3177d9139d55fd3778f46d1d9aa3bd942930": "9771cb22ecd1021fa190da6a67f65c3c",
".git/objects/57/58ce5076e7df86bfb924e617ced3932f94608a": "c79deb151c51508db65dd3ebd2d089dc",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/948e0973c10534e45dc06057a3792c4b19fb4c": "a29028310c05ff9b1c3f5c53320d6ac9",
".git/objects/13/25c21fcc097d99eb2b400a7acfc890e3444eb4": "99e8d844d7c3a48e09f62f87370ea77c",
".git/objects/1a/08cb8c6f8a223366f6a2384a4500420634edae": "657c196713370dce314cde9ec1fcd0aa",
".git/objects/2f/9e34ba98de7a8ebabfc9f72d40c4c7ce0c4b5c": "bf49a01f12f57c0c5df7e58e4dc9a88f",
".git/objects/25/9e5b2da2631cf11fc7b39c8349606909f402c6": "c2ec99d184faf0144a612528ef0c290c",
".git/objects/63/b37e2cd01f12076704854e5db42764da48554c": "cd1a14c095f15ce6f66176fe66934ed4",
".git/objects/dd/f9169ae19b50c7290528f2b7272b1f2c06ea6e": "0786b8d234d2bc9b9d0762f9e9444d62",
".git/objects/ae/8dbd586f21647929461e58dccd6057b50ee410": "e25411a2a915bec2d42c21f7f98c54a0",
".git/objects/bc/226cd9b0c564690e8ab2c7e5f71c4dfc8c24f2": "0fe780e835d412e70d7e4976e16208c4",
".git/objects/fc/2a2323a1468b27f2d4b2c313a3c2577904924e": "c975ba6b1aea4d8b062ae8b38108acbb",
".git/objects/fc/7bd447fd9d431d9f92f491a635cb4607c0cb43": "ad48be42152b7727088762062cf8c5d8",
".git/objects/e6/e3f368370ccca7131316d3c3d5add4b268e9bd": "7670d97bcec61351b178eb47a6902826",
".git/objects/3a/017931237163f16d472c62216fd4ee06b53c11": "31d385c8f38e6444e08375591932c998",
".git/objects/e3/91559c2b9033f73e867c66d69cfb6021d0d152": "e4b6b7d0e04083650ffd9144b908fd90",
".git/objects/e8/57cf901b0ea09027747d32b532a1aaf003783d": "cda04088c344bc9a616842e4669c3301",
".git/objects/c9/4acee3aeb3a9b337be08df43a055905089a927": "9f7c876ed5722c1fc0e443ac7ed7183a",
".git/objects/96/04088713530a17ac865f56f0a9b751befe8e0c": "4f86a554ce184d4b8e5981acb8f239e1",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/COMMIT_EDITMSG": "e51aa5be57d07673932396259e9026e8",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/refs/remotes/origin/main": "a6ab79174b0468414419d86ba95e9986",
".git/refs/heads/main": "a6ab79174b0468414419d86ba95e9986",
".git/logs/HEAD": "1ac1b44f9a385dcbca608b541f43a1bc",
".git/logs/refs/remotes/origin/main": "33b52ca106b51c79d618308631740b05",
".git/logs/refs/heads/main": "84fcdbe91478250456a842d39795bb51",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"main.dart.js": "4e86aa05e8c3b14f3bf4b0fb4fc6e252",
"manifest.json": "a1ab7b3d4f5ffcf1a66be1d4bd6752b8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "f502f26804bc0ba53bf9374d6e1e37a5",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"version.json": "247731112e1687c8bbac12f27f042d54",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "e54180c56591db525952b5f761f354ca",
"/": "e54180c56591db525952b5f761f354ca",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

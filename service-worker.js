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
    "url": "404.html",
    "revision": "1ac0f6633aa3683f250250cd6faa56b5"
  },
  {
    "url": "assets/css/0.styles.8a201c7f.css",
    "revision": "85254da36250a0bbfe5269b2cfc3e4ae"
  },
  {
    "url": "assets/img/iconfont.49414ec1.svg",
    "revision": "49414ec1e8ab596ac10fcfdafc058152"
  },
  {
    "url": "assets/img/image-20200504162559224.d29dfda8.png",
    "revision": "d29dfda89e21c0280fc304efcf07b19d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.baf13198.js",
    "revision": "d402afebc6b203db2b3f3c81dff3c448"
  },
  {
    "url": "assets/js/11.f0862680.js",
    "revision": "cc2c6c6ccde5947b6c1731e634536e83"
  },
  {
    "url": "assets/js/12.89fa6deb.js",
    "revision": "c2ef8155b256e9e3918e1fee73563beb"
  },
  {
    "url": "assets/js/13.6ebc9fe1.js",
    "revision": "4dab9ca5748b0eff0c7cbafc22488e9c"
  },
  {
    "url": "assets/js/2.d1b76714.js",
    "revision": "2831fe36d57e8ea7f6d4ae51dbaaf3f7"
  },
  {
    "url": "assets/js/3.4187023d.js",
    "revision": "8cf7677e94b422d630f701bddff51cb0"
  },
  {
    "url": "assets/js/4.286f991a.js",
    "revision": "8c243e66fd7845a73787a947b9f5e9ff"
  },
  {
    "url": "assets/js/5.facd6789.js",
    "revision": "ce23f0a1459e457ba6f8e34827f8c314"
  },
  {
    "url": "assets/js/6.c1fd54ef.js",
    "revision": "71aaab948e29b2638c06c8909f824494"
  },
  {
    "url": "assets/js/7.a9b300b5.js",
    "revision": "104573087eccfcb013d7ce81cadea900"
  },
  {
    "url": "assets/js/8.e7ca88ea.js",
    "revision": "fd3107e63758cdca6dfd71df3700a363"
  },
  {
    "url": "assets/js/9.43498a27.js",
    "revision": "a9302a0b32a299f7d2cfb641f397c69a"
  },
  {
    "url": "assets/js/app.a8f3b028.js",
    "revision": "b756e77dc631e21e181251b941408f2b"
  },
  {
    "url": "index.html",
    "revision": "a1e507d3f8aa63b577e61515dee67722"
  },
  {
    "url": "page-nav-test.html",
    "revision": "af42817364619191a5f4894936e0758a"
  },
  {
    "url": "qrcode_qq.jpg",
    "revision": "0ae72783a4ae41b17131444b25c8bb93"
  },
  {
    "url": "qrcode.png",
    "revision": "a529573d8d48bd853ed8d41b9b964d2a"
  },
  {
    "url": "volunteers.html",
    "revision": "044f1e3fbf6386dc1f1427a8ff6e3e8e"
  },
  {
    "url": "vuepress-plugin-baidu-tongji-analytics/index.html",
    "revision": "73ca024e9833bb98641d430c497dfc74"
  },
  {
    "url": "vuepress-plugin-toolbar/index.html",
    "revision": "84ba480abda5d590e6d97624dcddd501"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

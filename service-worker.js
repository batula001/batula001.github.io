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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a514464a1a04085425adb4e68c6f6a2e"
  },
  {
    "url": "accumulate/index.html",
    "revision": "65c4d0133027e13eb178f591b0d894f4"
  },
  {
    "url": "algorithm/index.html",
    "revision": "78560f4834cd102e6986187bd5a1a6a8"
  },
  {
    "url": "architecture/index.html",
    "revision": "03d87c4c090b814e1b47f6b5d957a4e1"
  },
  {
    "url": "assets/css/0.styles.c9120bc4.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cfc4065f.js",
    "revision": "9d68ac81810efdedadc03c4c0007ee38"
  },
  {
    "url": "assets/js/11.1544eee3.js",
    "revision": "86b768613f5a11966aff31f34b293024"
  },
  {
    "url": "assets/js/12.b756d203.js",
    "revision": "b69e5bcc752a31f234d89feeb73f837b"
  },
  {
    "url": "assets/js/13.68179899.js",
    "revision": "d6776e5fa628aee8365453130f036778"
  },
  {
    "url": "assets/js/14.da8c779a.js",
    "revision": "c2a7e01294a50ad2cfe0df857e858176"
  },
  {
    "url": "assets/js/15.f43912bf.js",
    "revision": "7c167dc27fd0d894b79f6831fabde4c8"
  },
  {
    "url": "assets/js/16.5cb9d22e.js",
    "revision": "5c38c628273fd8fdd71de25374625d7e"
  },
  {
    "url": "assets/js/17.418a9d7b.js",
    "revision": "6a96938490893e0cbf9fc6934d843ec8"
  },
  {
    "url": "assets/js/18.e8ebb2e6.js",
    "revision": "207e50e354c5b6bcc54fbf39403d6970"
  },
  {
    "url": "assets/js/19.7915295e.js",
    "revision": "f22d9c2754908753a5666834d9f2149c"
  },
  {
    "url": "assets/js/2.7712ca37.js",
    "revision": "372c517143124a5f014ccf8d0d5218ee"
  },
  {
    "url": "assets/js/20.14418f76.js",
    "revision": "9dbc1a0d049122e3d8f67e7389e5e431"
  },
  {
    "url": "assets/js/3.4cc2364c.js",
    "revision": "d070db3eb717be92c1b853f80ba20e02"
  },
  {
    "url": "assets/js/4.e4ad2b4a.js",
    "revision": "aabefa1a3459f27d85e6534b9a44b809"
  },
  {
    "url": "assets/js/5.dc13a0b4.js",
    "revision": "08b8c5c2501789e484b412f36758605d"
  },
  {
    "url": "assets/js/6.ff349930.js",
    "revision": "01f90e47e3a392713f94a5f0712ea762"
  },
  {
    "url": "assets/js/7.e8f5f6ef.js",
    "revision": "c265c5709b42718e7f10bbd24c5c231e"
  },
  {
    "url": "assets/js/8.821096aa.js",
    "revision": "f7e08572ae5394c671eaa8aef710fd94"
  },
  {
    "url": "assets/js/9.7e41c5f1.js",
    "revision": "e7bd1401731e3bdffac5eaacfa652f71"
  },
  {
    "url": "assets/js/app.0dbaaa10.js",
    "revision": "aac34710baf871ebcc5c6b6eae1c1cc5"
  },
  {
    "url": "bigdata/index.html",
    "revision": "c7c1f95cb1a8903db09be3685ef9300e"
  },
  {
    "url": "computer_basis/index.html",
    "revision": "1eb12539faaa788fc19251fde21cdd00"
  },
  {
    "url": "computer_english/index.html",
    "revision": "5879b0a21e9934d68dda399378360c71"
  },
  {
    "url": "computer_french/index.html",
    "revision": "e1266765a760423684296187a6e95edc"
  },
  {
    "url": "databse/index.html",
    "revision": "584c0105b516978404179e816fbb269d"
  },
  {
    "url": "frontend_language/index.html",
    "revision": "c3a4a1e95168870bf4518884b12e3750"
  },
  {
    "url": "guide.html",
    "revision": "5c6e20f83f60771cd6d39c6d049ff8eb"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/gongzhonghao.jpg",
    "revision": "ae05554a25e004a925457a971bfd4670"
  },
  {
    "url": "images/photo.jpg",
    "revision": "db567b7cc2752ff1ad5824fa7f3434b5"
  },
  {
    "url": "index.html",
    "revision": "94807ebdfc42438faf9b5ed6c63c527a"
  },
  {
    "url": "interview/index.html",
    "revision": "2f1a72a26dcf82746d54c24e22562b33"
  },
  {
    "url": "java_language/index.html",
    "revision": "7f8f63d7d385ac7ae4b2734ed8efcf7e"
  },
  {
    "url": "others/index.html",
    "revision": "51d5070e2ced7c8280589ac9d089bfbb"
  },
  {
    "url": "program_design/index.html",
    "revision": "e06a831131d8816b20a92af7840770ea"
  },
  {
    "url": "program_environment/index.html",
    "revision": "ebe12dc2d8f90d3b8bb8a2f03077ca57"
  },
  {
    "url": "program_middleware/index.html",
    "revision": "e60b6ec7962510e3c1e037d98bcdaebc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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

if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let d={};const a=e=>c(e,n),o={module:{uri:n},exports:d,require:a};i[n]=Promise.all(r.map((e=>o[e]||a(e)))).then((e=>(s(...e),d)))}}define(["./workbox-915e8d08"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"archives/2025/04/index.html",revision:"18cdc97b38c47d3147072fd97f64d9c5"},{url:"archives/2025/index.html",revision:"0fe5887ecde6cffe5b82ee4d4232bcf9"},{url:"archives/index.html",revision:"83c82b914f02a1c14f444613f9e0c775"},{url:"css/custom.css",revision:"250d3021d08dd8ac687d5de087a23871"},{url:"css/index.css",revision:"8b3f9177a74e942a610208358e3c3fe4"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"89f8a52f8545b52af0ac8e59e29b3184"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/siteicon/128.png",revision:"d3be3dd9a964c91a932a3ea29cea7c8d"},{url:"img/siteicon/144.png",revision:"abff065bb330599d33921ce0724fe09f"},{url:"img/siteicon/16.png",revision:"0c3ef55f6bbd5a7cc2b91f1b27017726"},{url:"img/siteicon/32.png",revision:"520d2d4d410b17011a7aa01099f00c55"},{url:"img/siteicon/48.png",revision:"5939e40bea2f4985cb251c44db005c78"},{url:"img/siteicon/512.png",revision:"e85cfb362448e019ce713c23d9bcaabb"},{url:"img/siteicon/64.png",revision:"5687e818c7cb6ef09d7839a5c77e66e1"},{url:"index.html",revision:"a1e7dc0adcb7da8d010e7bb44061737b"},{url:"js/main.js",revision:"ab1dddd2229511c7cb6f2275f2f63e99"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"post/4a17b156.html",revision:"6877b173dbd96a65e91fbb6598d4b747"}],{})}));
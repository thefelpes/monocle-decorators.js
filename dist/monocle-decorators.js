!function(t,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var n=r();for(var e in n)("object"==typeof exports?exports:t)[e]=n[e]}}(this,function(){return function(t){function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var n={};return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="",r(r.s=1)}([function(t,r,n){"use strict";var e=function(t){return"function"==typeof t[0]};t.exports=e},function(t,r,n){"use strict";t.exports={bind:n(2),debounce:n(3),freeze:n(4),mixin:n(5),seal:n(6),throttle:n(7)}},function(t,r,n){"use strict";function e(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];if(o(r)){var e=r[0],u=r[1];return e.bind(u)}var i=r[2];return{get:function(){return i.value.bind(this)}}}var o=n(0);t.exports=e},function(t,r,n){"use strict";function e(t,r){var n=void 0;return function(){for(var e=this,o=arguments.length,u=Array(o),i=0;i<o;i++)u[i]=arguments[i];clearTimeout(n),n=setTimeout(function(){t.apply(e,u)},r)}}function o(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];if(u(r))return e.apply(void 0,r);var o=r[0];return function(){var t=arguments.length<=2?void 0:arguments[2],r=e(t.value,o);return Object.assign({},t,{value:r})}}var u=n(0);t.exports=o},function(t,r,n){"use strict";function e(t){function r(){for(var r=arguments.length,n=Array(r),e=0;e<r;e++)n[e]=arguments[e];var o=new(Function.prototype.bind.apply(t,[null].concat(n)));return Object.freeze(o)}return r.prototype=t.prototype,r}t.exports=e},function(t,r,n){"use strict";function e(t,r){return r.filter(function(t){return"function"==typeof t}).forEach(function(r){Object.getOwnPropertyNames(r.prototype).forEach(function(n){t.prototype[n]=r.prototype[n]})}),r.filter(function(t){return"object"===(void 0===t?"undefined":u(t))}).forEach(function(r){Object.getOwnPropertyNames(r).forEach(function(n){t.prototype[n]=r[n]})}),t}function o(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];if(1===r.length&&Array.isArray(r[0])){var o=r[0];return function(t){return e(t,o)}}return e(r[0],r[1])}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=o},function(t,r,n){"use strict";function e(t){function r(){for(var r=arguments.length,n=Array(r),e=0;e<r;e++)n[e]=arguments[e];var o=new(Function.prototype.bind.apply(t,[null].concat(n)));return Object.seal(o)}return r.prototype=t.prototype,r}t.exports=e},function(t,r,n){"use strict";function e(t,r){var n=void 0;return function(){if(!n||n+r<=Date.now()){n=Date.now();for(var e=arguments.length,o=Array(e),u=0;u<e;u++)o[u]=arguments[u];return t.apply(this,o)}}}function o(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];if(u(r))return e.apply(void 0,r);var o=r[0];return function(){var t=arguments.length<=2?void 0:arguments[2],r=e(t.value,o);return Object.assign({},t,{value:r})}}var u=n(0);t.exports=o}])});
(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17,18],{E0Ky:function(t,e,r){"use strict";r.r(e);var n=r("rePB"),o=r("nKUr"),i=(r("q1tI"),r("g0Zl"));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default=function(t){return Object(o.jsx)(i.Editor,u(u({},t),{},{ref:t.forwardRef}))}},g0Zl:function(t,e,r){t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e){t.exports=r("q1tI")},function(t,e){t.exports=r("oK5D")},function(t,e){t.exports=r("8Flu")},function(t,e,r){"use strict";r.r(e),r.d(e,"Editor",(function(){return O})),r.d(e,"Viewer",(function(){return D}));var n=r(0),o=r.n(n),i=r(1),c=r.n(i);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?y(t):e}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(i,t);var e,r,n=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=b(t);if(e){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}(i);function i(){var t;a(this,i);for(var e=arguments.length,r=new Array(e),c=0;c<e;c++)r[c]=arguments[c];return h(y(t=n.call.apply(n,[this].concat(r))),"rootEl",o.a.createRef()),h(y(t),"editorInst",null),t}return e=i,(r=[{key:"getRootElement",value:function(){return this.rootEl.current}},{key:"getInstance",value:function(){return this.editorInst}},{key:"bindEventHandlers",value:function(t){var e=this;Object.keys(this.props).filter((function(t){return/^on[A-Z][a-zA-Z]+/.test(t)})).forEach((function(r){var n=r[2].toLowerCase()+r.slice(3);e.editorInst.off(n),e.editorInst.on(n,t[r])}))}},{key:"componentDidMount",value:function(){this.editorInst=new c.a(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({el:this.rootEl.current},this.props)),this.bindEventHandlers(this.props)}},{key:"shouldComponentUpdate",value:function(t){var e=this.getInstance(),r=t.height,n=t.previewStyle;return this.props.height!==r&&e.height(r),this.props.previewStyle!==n&&e.changePreviewStyle(n),this.bindEventHandlers(t,this.props),!1}},{key:"render",value:function(){return o.a.createElement("div",{ref:this.rootEl})}}])&&l(e.prototype,r),i}(o.a.Component),v=r(2),d=r.n(v);function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?S(t):e}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(i,t);var e,r,n=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=_(t);if(e){var o=_(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return E(this,r)}}(i);function i(){var t;g(this,i);for(var e=arguments.length,r=new Array(e),c=0;c<e;c++)r[c]=arguments[c];return k(S(t=n.call.apply(n,[this].concat(r))),"rootEl",o.a.createRef()),k(S(t),"viewerInst",null),t}return e=i,(r=[{key:"getRootElement",value:function(){return this.rootEl.current}},{key:"getInstance",value:function(){return this.viewerInst}},{key:"bindEventHandlers",value:function(t){var e=this;Object.keys(this.props).filter((function(t){return/^on[A-Z][a-zA-Z]+/.test(t)})).forEach((function(r){var n=r[2].toLowerCase()+r.slice(3);e.viewerInst.off(n),e.viewerInst.on(n,t[r])}))}},{key:"componentDidMount",value:function(){this.viewerInst=new d.a(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){k(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({el:this.rootEl.current},this.props)),this.bindEventHandlers(this.props)}},{key:"shouldComponentUpdate",value:function(t){return this.bindEventHandlers(t,this.props),!1}},{key:"render",value:function(){return o.a.createElement("div",{ref:this.rootEl})}}])&&m(e.prototype,r),i}(o.a.Component)}])}}]);
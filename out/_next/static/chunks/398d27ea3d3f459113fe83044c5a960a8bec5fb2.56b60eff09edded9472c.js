(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(r.AmpStateContext))};var a,o=(a=n("q1tI"))&&a.__esModule?a:{default:a},r=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,o=void 0!==a&&a,r=e.hasQuery,i=void 0!==r&&r;return n||o&&i}},"7W2i":function(e,t,n){var a=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=c,t.default=void 0;var a,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=a?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),r=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),p=n("FYa8"),l=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var s=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(o){var r=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var p=o.key.slice(o.key.indexOf("$")+1);e.has(p)?r=!1:e.add(p)}switch(o.type){case"title":case"base":t.has(o.type)?r=!1:t.add(o.type);break;case"meta":for(var l=0,u=s.length;l<u;l++){var c=s[l];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?r=!1:n.add(c);else{var d=o.props[c],h=a[c]||new Set;"name"===c&&i||!h.has(d)?(h.add(d),a[c]=h):r=!1}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),a=(0,o.useContext)(p.HeadManagerContext);return o.default.createElement(r.default,{reduceComponentsToState:h,headManager:a,inAmpMode:(0,l.isInAmpMode)(n)},t)}f.rewind=function(){};var m=f;t.default=m},"9ixD":function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var a=n("g4pe"),o=n.n(a),r=n("q1tI"),i=n.n(r);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var u={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0,disableGooglebot:!1},c=function(e,t,n){void 0===t&&(t=[]);var a=void 0===n?{}:n,o=a.defaultWidth,r=a.defaultHeight;return t.reduce((function(t,n,a){return t.push(i.a.createElement("meta",{key:"og:"+e+":0"+a,property:"og:"+e,content:n.url})),n.alt&&t.push(i.a.createElement("meta",{key:"og:"+e+":alt0"+a,property:"og:"+e+":alt",content:n.alt})),n.secureUrl&&t.push(i.a.createElement("meta",{key:"og:"+e+":secure_url0"+a,property:"og:"+e+":secure_url",content:n.secureUrl.toString()})),n.type&&t.push(i.a.createElement("meta",{key:"og:"+e+":type0"+a,property:"og:"+e+":type",content:n.type.toString()})),n.width?t.push(i.a.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:n.width.toString()})):o&&t.push(i.a.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:o.toString()})),n.height?t.push(i.a.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:n.height.toString()})):r&&t.push(i.a.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:r.toString()})),t}),[])},d=function(e){var t,n,a,o=[];e.titleTemplate&&(u.templateTitle=e.titleTemplate);var r="";e.title?(r=e.title,u.templateTitle&&(r=u.templateTitle.replace(/%s/g,(function(){return r})))):e.defaultTitle&&(r=e.defaultTitle),r&&o.push(i.a.createElement("title",{key:"title"},r));var l,d,s=e.noindex||u.noindex||e.dangerouslySetAllPagesToNoIndex,h=e.nofollow||u.nofollow||e.dangerouslySetAllPagesToNoFollow,f=e.disableGooglebot||u.disableGooglebot||e.dangerouslyDisableGooglebot,m="";if(e.robotsProps){var g=e.robotsProps,y=g.nosnippet,v=g.maxSnippet,b=g.maxImagePreview,G=g.maxVideoPreview,k=g.noarchive,w=g.noimageindex,E=g.notranslate,_=g.unavailableAfter;m=(y?",nosnippet":"")+(v?",max-snippet:"+v:"")+(b?",max-image-preview:"+b:"")+(k?",noarchive":"")+(_?",unavailable_after:"+_:"")+(w?",noimageindex":"")+(G?",max-video-preview:"+G:"")+(E?",notranslate":"")}(e.dangerouslyDisableGooglebot&&(u.disableGooglebot=!0),s||h?(e.dangerouslySetAllPagesToNoIndex&&(u.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(u.nofollow=!0),o.push(i.a.createElement("meta",{key:"robots",name:"robots",content:(s?"noindex":"index")+","+(h?"nofollow":"follow")+m})),f||o.push(i.a.createElement("meta",{key:"googlebot",name:"googlebot",content:(s?"noindex":"index")+","+(h?"nofollow":"follow")+m}))):(o.push(i.a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+m})),f||o.push(i.a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+m}))),e.description&&o.push(i.a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&o.push(i.a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){o.push(i.a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&o.push(i.a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&o.push(i.a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&o.push(i.a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&o.push(i.a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||e.title)&&o.push(i.a.createElement("meta",{key:"og:title",property:"og:title",content:(null==(l=e.openGraph)?void 0:l.title)||r}));(null!=(n=e.openGraph)&&n.description||e.description)&&o.push(i.a.createElement("meta",{key:"og:description",property:"og:description",content:(null==(d=e.openGraph)?void 0:d.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&o.push(i.a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var O=e.openGraph.type.toLowerCase();o.push(i.a.createElement("meta",{key:"og:type",property:"og:type",content:O})),"profile"===O&&e.openGraph.profile?(e.openGraph.profile.firstName&&o.push(i.a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&o.push(i.a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&o.push(i.a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&o.push(i.a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===O&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){o.push(i.a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&o.push(i.a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&o.push(i.a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){o.push(i.a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===O&&e.openGraph.article?(e.openGraph.article.publishedTime&&o.push(i.a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&o.push(i.a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&o.push(i.a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){o.push(i.a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&o.push(i.a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){o.push(i.a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==O&&"video.episode"!==O&&"video.tv_show"!==O&&"video.other"!==O||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&o.push(i.a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&o.push(i.a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){o.push(i.a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){o.push(i.a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&o.push(i.a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&o.push(i.a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){o.push(i.a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&o.push(i.a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(u.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(u.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&o.push.apply(o,c("image",e.openGraph.images,{defaultWidth:u.defaultOpenGraphImageWidth,defaultHeight:u.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(u.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(u.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&o.push.apply(o,c("video",e.openGraph.videos,{defaultWidth:u.defaultOpenGraphVideoWidth,defaultHeight:u.defaultOpenGraphVideoHeight})),e.openGraph.locale&&o.push(i.a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&o.push(i.a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&o.push(i.a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,n,a;o.push(i.a.createElement("meta",p({key:"meta:"+(null!=(t=null!=(n=null!=(a=e.keyOverride)?a:e.name)?n:e.property)?t:e.httpEquiv)},e)))})),null!=(a=e.additionalLinkTags)&&a.length&&e.additionalLinkTags.forEach((function(e){var t;o.push(i.a.createElement("link",p({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),o},s=function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.titleTemplate,a=e.defaultTitle,r=e.dangerouslyDisableGooglebot,p=void 0!==r&&r,l=e.dangerouslySetAllPagesToNoIndex,u=void 0!==l&&l,c=e.dangerouslySetAllPagesToNoFollow,s=void 0!==c&&c,h=e.description,f=e.canonical,m=e.facebook,g=e.openGraph,y=e.additionalMetaTags,v=e.twitter,b=e.defaultOpenGraphImageWidth,G=e.defaultOpenGraphImageHeight,k=e.defaultOpenGraphVideoWidth,w=e.defaultOpenGraphVideoHeight,E=e.mobileAlternate,_=e.languageAlternates,O=e.additionalLinkTags;return i.a.createElement(o.a,null,d({title:t,titleTemplate:n,defaultTitle:a,dangerouslySetAllPagesToNoIndex:u,dangerouslySetAllPagesToNoFollow:s,description:h,canonical:f,facebook:m,openGraph:g,additionalMetaTags:y,twitter:v,defaultOpenGraphImageWidth:b,defaultOpenGraphImageHeight:G,defaultOpenGraphVideoWidth:k,defaultOpenGraphVideoHeight:w,mobileAlternate:E,languageAlternates:_,additionalLinkTags:O,dangerouslyDisableGooglebot:p}))},t}(r.Component),h=(r.Component,function(e){return{__html:e}}),f=function(e){return Array.isArray(e)?"["+e.map((function(e){return'{"@type": "Person","name": "'+e+'"}'}))+"]":'{"@type": "Person","name": "'+e+'"}'},m=function(e){var t=e.keyOverride,n=e.url,a=e.title,r=e.images,p=void 0===r?[]:r,l=e.datePublished,u=e.dateModified,c=void 0===u?null:u,d=e.authorName,s=e.description,m='{\n    "@context": "https://schema.org",\n    "@type": "Blog",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "'+n+'"\n    },\n    "headline": "'+a+'",\n    "image": [\n      '+p.map((function(e){return'"'+e+'"'}))+'\n     ],\n    "datePublished": "'+l+'",\n    "dateModified": "'+(c||l)+'",\n    "author": '+f(d)+',\n    "description": "'+s+'"\n  }';return i.a.createElement(o.a,null,i.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:h(m),key:"jsonld-blog"+(t?"-"+t:"")}))}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var a=n("Ijbi"),o=n("EbDI"),r=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||o(e)||r(e)||i()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),o=n("lwsE"),r=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),p=n("a1gu"),l=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return p(this,n)}}t.__esModule=!0,t.default=void 0;var c=n("q1tI"),d=function(e){i(n,e);var t=u(n);function n(e){var r;return o(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(a(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(c.Component);t.default=d},a1gu:function(e,t,n){var a=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?o(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var o=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=o},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))}}]);
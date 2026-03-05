module.exports=[46058,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},92434,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"warnOnce",{enumerable:!0,get:function(){return d}});let d=a=>{}},68063,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={getDeploymentId:function(){return f},getDeploymentIdQueryOrEmptyString:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(){return!1}function g(){return""}},8591,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"useMergedRef",{enumerable:!0,get:function(){return e}});let d=a.r(72131);function e(a,b){let c=(0,d.useRef)(null),e=(0,d.useRef)(null);return(0,d.useCallback)(d=>{if(null===d){let a=c.current;a&&(c.current=null,a());let b=e.current;b&&(e.current=null,b())}else a&&(c.current=f(a,d)),b&&(e.current=f(b,d))},[a,b])}function f(a,b){if("function"!=typeof a)return a.current=b,()=>{a.current=null};{let c=a(b);return"function"==typeof c?c:()=>a(null)}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},91735,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={assign:function(){return i},searchParamsToUrlQuery:function(){return f},urlQueryToSearchParams:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(a){let b={};for(let[c,d]of a.entries()){let a=b[c];void 0===a?b[c]=d:Array.isArray(a)?a.push(d):b[c]=[a,d]}return b}function g(a){return"string"==typeof a?a:("number"!=typeof a||isNaN(a))&&"boolean"!=typeof a?"":String(a)}function h(a){let b=new URLSearchParams;for(let[c,d]of Object.entries(a))if(Array.isArray(d))for(let a of d)b.append(c,g(a));else b.set(c,g(d));return b}function i(a,...b){for(let c of b){for(let b of c.keys())a.delete(b);for(let[b,d]of c.entries())a.append(b,d)}return a}},43087,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={formatUrl:function(){return h},formatWithValidation:function(){return j},urlObjectKeys:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(46058)._(a.r(91735)),g=/https?|ftp|gopher|file/;function h(a){let{auth:b,hostname:c}=a,d=a.protocol||"",e=a.pathname||"",h=a.hash||"",i=a.query||"",j=!1;b=b?encodeURIComponent(b).replace(/%3A/i,":")+"@":"",a.host?j=b+a.host:c&&(j=b+(~c.indexOf(":")?`[${c}]`:c),a.port&&(j+=":"+a.port)),i&&"object"==typeof i&&(i=String(f.urlQueryToSearchParams(i)));let k=a.search||i&&`?${i}`||"";return d&&!d.endsWith(":")&&(d+=":"),a.slashes||(!d||g.test(d))&&!1!==j?(j="//"+(j||""),e&&"/"!==e[0]&&(e="/"+e)):j||(j=""),h&&"#"!==h[0]&&(h="#"+h),k&&"?"!==k[0]&&(k="?"+k),e=e.replace(/[?#]/g,encodeURIComponent),k=k.replace("#","%23"),`${d}${j}${e}${k}${h}`}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function j(a){return h(a)}},46272,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={DecodeError:function(){return r},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return u},NormalizeError:function(){return s},PageNotFoundError:function(){return t},SP:function(){return p},ST:function(){return q},WEB_VITALS:function(){return f},execOnce:function(){return g},getDisplayName:function(){return l},getLocationOrigin:function(){return j},getURL:function(){return k},isAbsoluteUrl:function(){return i},isResSent:function(){return m},loadGetInitialProps:function(){return o},normalizeRepeatedSlashes:function(){return n},stringifyError:function(){return w}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=["CLS","FCP","FID","INP","LCP","TTFB"];function g(a){let b,c=!1;return(...d)=>(c||(c=!0,b=a(...d)),b)}let h=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=a=>h.test(a);function j(){let{protocol:a,hostname:b,port:c}=window.location;return`${a}//${b}${c?":"+c:""}`}function k(){let{href:a}=window.location,b=j();return a.substring(b.length)}function l(a){return"string"==typeof a?a:a.displayName||a.name||"Unknown"}function m(a){return a.finished||a.headersSent}function n(a){let b=a.split("?");return b[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(b[1]?`?${b.slice(1).join("?")}`:"")}async function o(a,b){let c=b.res||b.ctx&&b.ctx.res;if(!a.getInitialProps)return b.ctx&&b.Component?{pageProps:await o(b.Component,b.ctx)}:{};let d=await a.getInitialProps(b);if(c&&m(c))return d;if(!d)throw Object.defineProperty(Error(`"${l(a)}.getInitialProps()" should resolve to an object. But found "${d}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return d}let p="u">typeof performance,q=p&&["mark","measure","getEntriesByName"].every(a=>"function"==typeof performance[a]);class r extends Error{}class s extends Error{}class t extends Error{constructor(a){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${a}`}}class u extends Error{constructor(a,b){super(),this.message=`Failed to load static file for page: ${a} ${b}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(a){return JSON.stringify({message:a.message,stack:a.stack})}},8868,(a,b,c)=>{"use strict";function d(a){let b=a.indexOf("#"),c=a.indexOf("?"),d=c>-1&&(b<0||c<b);return d||b>-1?{pathname:a.substring(0,d?c:b),query:d?a.substring(c,b>-1?b:void 0):"",hash:b>-1?a.slice(b):""}:{pathname:a,query:"",hash:""}}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"parsePath",{enumerable:!0,get:function(){return d}})},5407,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"addPathPrefix",{enumerable:!0,get:function(){return e}});let d=a.r(8868);function e(a,b){if(!a.startsWith("/")||!b)return a;let{pathname:c,query:e,hash:f}=(0,d.parsePath)(a);return`${b}${c}${e}${f}`}},46112,(a,b,c)=>{"use strict";function d(a){return a.replace(/\/$/,"")||"/"}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"removeTrailingSlash",{enumerable:!0,get:function(){return d}})},25075,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"normalizePathTrailingSlash",{enumerable:!0,get:function(){return f}});let d=a.r(46112),e=a.r(8868),f=a=>{if(!a.startsWith("/"))return a;let{pathname:b,query:c,hash:f}=(0,e.parsePath)(a);return`${(0,d.removeTrailingSlash)(b)}${c}${f}`};("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},38243,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"addBasePath",{enumerable:!0,get:function(){return f}});let d=a.r(5407),e=a.r(25075);function f(a,b){return(0,e.normalizePathTrailingSlash)((0,d.addPathPrefix)(a,""))}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},10846,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,e,f,g={FetchStrategy:function(){return k},NavigationResultTag:function(){return i},PrefetchPriority:function(){return j}};for(var h in g)Object.defineProperty(c,h,{enumerable:!0,get:g[h]});var i=((d={})[d.MPA=0]="MPA",d[d.Success=1]="Success",d[d.NoOp=2]="NoOp",d[d.Async=3]="Async",d),j=((e={})[e.Intent=2]="Intent",e[e.Default=1]="Default",e[e.Background=0]="Background",e),k=((f={})[f.LoadingBoundary=0]="LoadingBoundary",f[f.PPR=1]="PPR",f[f.PPRRuntime=2]="PPRRuntime",f[f.Full=3]="Full",f);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},92702,(a,b,c)=>{"use strict";function d(a,b){let c=new URL(a);return{pathname:c.pathname,search:c.search,nextUrl:b}}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"createCacheKey",{enumerable:!0,get:function(){return d}}),("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},76e3,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"HasLoadingBoundary",{enumerable:!0,get:function(){return e}});var d,e=((d={})[d.SegmentHasLoadingBoundary=1]="SegmentHasLoadingBoundary",d[d.SubtreeHasLoadingBoundary=2]="SubtreeHasLoadingBoundary",d[d.SubtreeHasNoLoadingBoundary=3]="SubtreeHasNoLoadingBoundary",d)},30641,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"matchSegment",{enumerable:!0,get:function(){return d}});let d=(a,b)=>"string"==typeof a?"string"==typeof b&&a===b:"string"!=typeof b&&a[0]===b[0]&&a[1]===b[1];("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},37909,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={ACTION_HEADER:function(){return g},FLIGHT_HEADERS:function(){return o},NEXT_ACTION_NOT_FOUND_HEADER:function(){return v},NEXT_ACTION_REVALIDATED_HEADER:function(){return y},NEXT_DID_POSTPONE_HEADER:function(){return r},NEXT_HMR_REFRESH_HASH_COOKIE:function(){return l},NEXT_HMR_REFRESH_HEADER:function(){return k},NEXT_HTML_REQUEST_ID_HEADER:function(){return x},NEXT_IS_PRERENDER_HEADER:function(){return u},NEXT_REQUEST_ID_HEADER:function(){return w},NEXT_REWRITTEN_PATH_HEADER:function(){return s},NEXT_REWRITTEN_QUERY_HEADER:function(){return t},NEXT_ROUTER_PREFETCH_HEADER:function(){return i},NEXT_ROUTER_SEGMENT_PREFETCH_HEADER:function(){return j},NEXT_ROUTER_STALE_TIME_HEADER:function(){return q},NEXT_ROUTER_STATE_TREE_HEADER:function(){return h},NEXT_RSC_UNION_QUERY:function(){return p},NEXT_URL:function(){return m},RSC_CONTENT_TYPE_HEADER:function(){return n},RSC_HEADER:function(){return f}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="rsc",g="next-action",h="next-router-state-tree",i="next-router-prefetch",j="next-router-segment-prefetch",k="next-hmr-refresh",l="__next_hmr_refresh_hash__",m="next-url",n="text/x-component",o=[f,h,i,k,j],p="_rsc",q="x-nextjs-stale-time",r="x-nextjs-postponed",s="x-nextjs-rewritten-path",t="x-nextjs-rewritten-query",u="x-nextjs-prerender",v="x-nextjs-action-not-found",w="x-nextjs-request-id",x="x-nextjs-html-request-id",y="x-action-revalidated";("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},88347,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,e={ACTION_HMR_REFRESH:function(){return k},ACTION_NAVIGATE:function(){return h},ACTION_REFRESH:function(){return g},ACTION_RESTORE:function(){return i},ACTION_SERVER_ACTION:function(){return l},ACTION_SERVER_PATCH:function(){return j},PrefetchKind:function(){return m}};for(var f in e)Object.defineProperty(c,f,{enumerable:!0,get:e[f]});let g="refresh",h="navigate",i="restore",j="server-patch",k="hmr-refresh",l="server-action";var m=((d={}).AUTO="auto",d.FULL="full",d);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},67009,(a,b,c)=>{"use strict";function d(a){return null!==a&&"object"==typeof a&&"then"in a&&"function"==typeof a.then}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"isThenable",{enumerable:!0,get:function(){return d}})},90841,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={dispatchAppRouterAction:function(){return i},useActionQueue:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(46058)._(a.r(72131)),g=a.r(67009),h=null;function i(a){if(null===h)throw Object.defineProperty(Error("Internal Next.js error: Router action dispatched before initialization."),"__NEXT_ERROR_CODE",{value:"E668",enumerable:!1,configurable:!0});h(a)}function j(a){let[b,c]=f.default.useState(a.state);h=b=>a.dispatch(b,c);let d=(0,f.useMemo)(()=>b,[b]);return(0,g.isThenable)(d)?(0,f.use)(d):d}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},20611,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"callServer",{enumerable:!0,get:function(){return g}});let d=a.r(72131),e=a.r(88347),f=a.r(90841);async function g(a,b){return new Promise((c,g)=>{(0,d.startTransition)(()=>{(0,f.dispatchAppRouterAction)({type:e.ACTION_SERVER_ACTION,actionId:a,actionArgs:b,resolve:c,reject:g})})})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},1722,(a,b,c)=>{"use strict";let d;Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"findSourceMapURL",{enumerable:!0,get:function(){return d}});("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},39118,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={DEFAULT_SEGMENT_KEY:function(){return l},NOT_FOUND_SEGMENT_KEY:function(){return m},PAGE_SEGMENT_KEY:function(){return k},addSearchParamsIfPageSegment:function(){return i},computeSelectedLayoutSegment:function(){return j},getSegmentValue:function(){return f},getSelectedLayoutSegmentPath:function(){return function a(b,c,d=!0,e=[]){let g;if(d)g=b[1][c];else{let a=b[1];g=a.children??Object.values(a)[0]}if(!g)return e;let h=f(g[0]);return!h||h.startsWith(k)?e:(e.push(h),a(g,c,!1,e))}},isGroupSegment:function(){return g},isParallelRouteSegment:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(a){return Array.isArray(a)?a[1]:a}function g(a){return"("===a[0]&&a.endsWith(")")}function h(a){return a.startsWith("@")&&"@children"!==a}function i(a,b){if(a.includes(k)){let a=JSON.stringify(b);return"{}"!==a?k+"?"+a:k}return a}function j(a,b){if(!a||0===a.length)return null;let c="children"===b?a[0]:a[a.length-1];return c===l?null:c}let k="__PAGE__",l="__DEFAULT__",m="/_not-found"},58216,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={HEAD_REQUEST_KEY:function(){return h},ROOT_SEGMENT_REQUEST_KEY:function(){return g},appendSegmentRequestKeyPart:function(){return j},convertSegmentPathToStaticExportFilename:function(){return m},createSegmentRequestKeyPart:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(39118),g="",h="/_head";function i(a){if("string"==typeof a)return a.startsWith(f.PAGE_SEGMENT_KEY)?f.PAGE_SEGMENT_KEY:"/_not-found"===a?"_not-found":l(a);let b=a[0];return"$"+a[2]+"$"+l(b)}function j(a,b,c){return a+"/"+("children"===b?c:`@${l(b)}/${c}`)}let k=/^[a-zA-Z0-9\-_@]+$/;function l(a){return k.test(a)?a:"!"+btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function m(a){return`__next${a.replace(/\//g,".")}.txt`}},23187,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={doesStaticSegmentAppearInURL:function(){return l},getCacheKeyForDynamicParam:function(){return m},getParamValueFromCacheKey:function(){return o},getRenderedPathname:function(){return j},getRenderedSearch:function(){return i},parseDynamicParamFromURLPart:function(){return k},urlSearchParamsToParsedUrlQuery:function(){return p},urlToUrlWithoutFlightMarker:function(){return n}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(39118),g=a.r(58216),h=a.r(37909);function i(a){let b=a.headers.get(h.NEXT_REWRITTEN_QUERY_HEADER);return null!==b?""===b?"":"?"+b:n(new URL(a.url)).search}function j(a){return a.headers.get(h.NEXT_REWRITTEN_PATH_HEADER)??n(new URL(a.url)).pathname}function k(a,b,c){switch(a){case"c":return c<b.length?b.slice(c).map(a=>encodeURIComponent(a)):[];case"ci(..)(..)":case"ci(.)":case"ci(..)":case"ci(...)":{let d=a.length-2;return c<b.length?b.slice(c).map((a,b)=>0===b?encodeURIComponent(a.slice(d)):encodeURIComponent(a)):[]}case"oc":return c<b.length?b.slice(c).map(a=>encodeURIComponent(a)):null;case"d":if(c>=b.length)return"";return encodeURIComponent(b[c]);case"di(..)(..)":case"di(.)":case"di(..)":case"di(...)":{let d=a.length-2;if(c>=b.length)return"";return encodeURIComponent(b[c].slice(d))}default:return""}}function l(a){return!(a===g.ROOT_SEGMENT_REQUEST_KEY||a.startsWith(f.PAGE_SEGMENT_KEY)||"("===a[0]&&a.endsWith(")"))&&a!==f.DEFAULT_SEGMENT_KEY&&"/_not-found"!==a}function m(a,b){return"string"==typeof a?(0,f.addSearchParamsIfPageSegment)(a,Object.fromEntries(new URLSearchParams(b))):null===a?"":a.join("/")}function n(a){let b=new URL(a);return b.searchParams.delete(h.NEXT_RSC_UNION_QUERY),b}function o(a,b){return"c"===b||"oc"===b?a.split("/"):a}function p(a){let b={};for(let[c,d]of a.entries())void 0===b[c]?b[c]=d:Array.isArray(b[c])?b[c].push(d):b[c]=[b[c],d];return b}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},74685,(a,b,c)=>{"use strict";function d(a,b=!0){return a.pathname+a.search+(b?a.hash:"")}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"createHrefFromUrl",{enumerable:!0,get:function(){return d}}),("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},22129,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={createInitialRSCPayloadFromFallbackPrerender:function(){return j},getFlightDataPartsFromPath:function(){return i},getNextFlightSegmentPath:function(){return k},normalizeFlightData:function(){return l},prepareFlightRouterStateForRequest:function(){return m}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(39118),g=a.r(23187),h=a.r(74685);function i(a){let[b,c,d,e]=a.slice(-4),f=a.slice(0,-4);return{pathToSegment:f.slice(0,-1),segmentPath:f,segment:f[f.length-1]??"",tree:b,seedData:c,head:d,isHeadPartial:e,isRootRender:4===a.length}}function j(a,b){let c=(0,g.getRenderedPathname)(a),d=(0,g.getRenderedSearch)(a),e=(0,h.createHrefFromUrl)(new URL(location.href)),f=b.f[0],i=f[0];return{b:b.b,c:e.split("/"),q:d,i:b.i,f:[[function a(b,c,d,e){let f,h,i=b[0];if("string"==typeof i)f=i,h=(0,g.doesStaticSegmentAppearInURL)(i);else{let a=i[0],b=i[2],j=(0,g.parseDynamicParamFromURLPart)(b,d,e);f=[a,(0,g.getCacheKeyForDynamicParam)(j,c),b],h=!0}let j=h?e+1:e,k=b[1],l={};for(let b in k){let e=k[b];l[b]=a(e,c,d,j)}return[f,l,null,b[3],b[4]]}(i,d,c.split("/").filter(a=>""!==a),0),f[1],f[2],f[2]]],m:b.m,G:b.G,S:b.S}}function k(a){return a.slice(2)}function l(a){return"string"==typeof a?a:a.map(a=>i(a))}function m(a,b){return b?encodeURIComponent(JSON.stringify(a)):encodeURIComponent(JSON.stringify(function a(b){var c,d;let[e,g,h,i,j,k]=b,l="string"==typeof(c=e)&&c.startsWith(f.PAGE_SEGMENT_KEY+"?")?f.PAGE_SEGMENT_KEY:c,m={};for(let[b,c]of Object.entries(g))m[b]=a(c);let n=[l,m,null,(d=i)&&"refresh"!==d?i:null];return void 0!==j&&(n[4]=j),void 0!==k&&(n[5]=k),n}(a)))}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},91377,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={getAppBuildId:function(){return h},setAppBuildId:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="";function g(a){f=a}function h(){return f}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},16661,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={djb2Hash:function(){return f},hexHash:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(a){let b=5381;for(let c=0;c<a.length;c++)b=(b<<5)+b+a.charCodeAt(c)|0;return b>>>0}function g(a){return f(a).toString(36).slice(0,5)}},35604,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"computeCacheBustingSearchParam",{enumerable:!0,get:function(){return e}});let d=a.r(16661);function e(a,b,c,e){return(void 0===a||"0"===a)&&void 0===b&&void 0===c&&void 0===e?"":(0,d.hexHash)([a||"0",b||"0",c||"0",e||"0"].join(","))}},25744,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={setCacheBustingSearchParam:function(){return h},setCacheBustingSearchParamWithHash:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(35604),g=a.r(37909),h=(a,b)=>{i(a,(0,f.computeCacheBustingSearchParam)(b[g.NEXT_ROUTER_PREFETCH_HEADER],b[g.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER],b[g.NEXT_ROUTER_STATE_TREE_HEADER],b[g.NEXT_URL]))},i=(a,b)=>{let c=a.search,d=(c.startsWith("?")?c.slice(1):c).split("&").filter(a=>a&&!a.startsWith(`${g.NEXT_RSC_UNION_QUERY}=`));b.length>0?d.push(`${g.NEXT_RSC_UNION_QUERY}=${b}`):d.push(`${g.NEXT_RSC_UNION_QUERY}`),a.search=d.length?`?${d.join("&")}`:""};("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},20873,(a,b,c)=>{"use strict";let d;Object.defineProperty(c,"__esModule",{value:!0});var e={createFetch:function(){return t},createFromNextReadableStream:function(){return u},fetchServerResponse:function(){return s}};for(var f in e)Object.defineProperty(c,f,{enumerable:!0,get:e[f]});let g=a.r(38783),h=a.r(37909),i=a.r(20611),j=a.r(1722),k=a.r(22129),l=a.r(91377),m=a.r(25744),n=a.r(23187),o=a.r(68063),p=g.createFromReadableStream,q=g.createFromFetch;function r(a){return(0,n.urlToUrlWithoutFlightMarker)(new URL(a,location.origin)).toString()}async function s(a,b){let{flightRouterState:c,nextUrl:d}=b,e={[h.RSC_HEADER]:"1",[h.NEXT_ROUTER_STATE_TREE_HEADER]:(0,k.prepareFlightRouterStateForRequest)(c,b.isHmrRefresh)};d&&(e[h.NEXT_URL]=d);try{let b=await t(a,e,"auto",!0),c=(0,n.urlToUrlWithoutFlightMarker)(new URL(b.url)),d=b.redirected?c:a,f=b.headers.get("content-type")||"",g=!!b.headers.get("vary")?.includes(h.NEXT_URL),i=!!b.headers.get(h.NEXT_DID_POSTPONE_HEADER),j=b.headers.get(h.NEXT_ROUTER_STALE_TIME_HEADER),m=null!==j?1e3*parseInt(j,10):-1;if(!f.startsWith(h.RSC_CONTENT_TYPE_HEADER)||!b.ok||!b.body)return a.hash&&(c.hash=a.hash),r(c.toString());let o=b.flightResponse;if(null===o){let a,c=i?(a=b.body.getReader(),new ReadableStream({async pull(b){for(;;){let{done:c,value:d}=await a.read();if(!c){b.enqueue(d);continue}return}}})):b.body;o=u(c,e)}let p=await o;if((0,l.getAppBuildId)()!==p.b)return r(b.url);let q=(0,k.normalizeFlightData)(p.f);if("string"==typeof q)return r(q);return{flightData:q,canonicalUrl:d,renderedSearch:(0,n.getRenderedSearch)(b),couldBeIntercepted:g,prerendered:p.S,postponed:i,staleTime:m,debugInfo:o._debugInfo??null}}catch(b){return console.error(`Failed to fetch RSC payload for ${a}. Falling back to browser navigation.`,b),a.toString()}}async function t(a,b,c,e,f){var g,k;let l=(0,o.getDeploymentId)();l&&(b["x-deployment-id"]=l);let n=new URL(a);(0,m.setCacheBustingSearchParam)(n,b);let p=fetch(n,{credentials:"same-origin",headers:b,priority:c||void 0,signal:f}),r=e?(g=p,k=b,q(g,{callServer:i.callServer,findSourceMapURL:j.findSourceMapURL,debugChannel:d&&d(k)})):null,s=await p,t=s.redirected,u=new URL(s.url,n);return u.searchParams.delete(h.NEXT_RSC_UNION_QUERY),{url:u.href,redirected:t,ok:s.ok,headers:s.headers,body:s.body,status:s.status,flightResponse:r}}function u(a,b){return p(a,{callServer:i.callServer,findSourceMapURL:j.findSourceMapURL,debugChannel:d&&d(b)})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},54645,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={deleteFromLru:function(){return l},lruPut:function(){return j},updateLruSize:function(){return k}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(51561),g=null,h=!1,i=0;function j(a){if(g===a)return;let b=a.prev,c=a.next;if(null===c||null===b?(i+=a.size,m()):(b.next=c,c.prev=b),null===g)a.prev=a,a.next=a;else{let b=g.prev;a.prev=b,null!==b&&(b.next=a),a.next=g,g.prev=a}g=a}function k(a,b){let c=a.size;a.size=b,null!==a.next&&(i=i-c+b,m())}function l(a){let b=a.next,c=a.prev;null!==b&&null!==c&&(i-=a.size,a.next=null,a.prev=null,g===a?b===g?g=null:(g=b,c.next=b,b.prev=c):(c.next=b,b.prev=c))}function m(){h||i<=0x3200000||(h=!0,o(n))}function n(){h=!1;for(;i>0x2d00000&&null!==g;){let a=g.prev;null!==a&&(0,f.deleteMapEntry)(a)}}let o="function"==typeof requestIdleCallback?requestIdleCallback:a=>setTimeout(a,0);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},51561,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={Fallback:function(){return g},createCacheMap:function(){return i},deleteFromCacheMap:function(){return n},deleteMapEntry:function(){return o},getFromCacheMap:function(){return j},isValueExpired:function(){return k},setInCacheMap:function(){return l},setSizeInCacheMap:function(){return p}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(54645),g={},h={};function i(){return{parent:null,key:null,value:null,map:null,prev:null,next:null,size:0}}function j(a,b,c,d,e){let i=function a(b,c,d,e,f,i){let j,l;if(null!==e)j=e.value,l=e.parent;else if(f&&i!==h)j=h,l=null;else return null===d.value?d:k(b,c,d.value)?(o(d),null):d;let m=d.map;if(null!==m){let d=m.get(j);if(void 0!==d){let e=a(b,c,d,l,f,j);if(null!==e)return e}let e=m.get(g);if(void 0!==e)return a(b,c,e,l,f,j)}return null}(a,b,c,d,e,0);return null===i||null===i.value?null:((0,f.lruPut)(i),i.value)}function k(a,b,c){return c.staleAt<=a||c.version<b}function l(a,b,c,d){let e=function(a,b,c){let d=a,e=b,f=null;for(;;){let a=f;if(null!==e)f=e.value,e=e.parent;else if(c&&a!==h){if(null===d.value)return d;f=h}else break;let b=d.map;if(null!==b){let a=b.get(f);if(void 0!==a){d=a;continue}}else b=new Map,d.map=b;let g={parent:d,key:f,value:null,map:null,prev:null,next:null,size:0};b.set(f,g),d=g}return d}(a,b,d);m(e,c),(0,f.lruPut)(e),(0,f.updateLruSize)(e,c.size)}function m(a,b){null!==a.value&&(a.value.ref=null,a.value=null);let c=b.ref;a.value=b,b.ref=a,(0,f.updateLruSize)(a,b.size),null!==c&&c!==a&&c.value===b&&o(c)}function n(a){let b=a.ref;null!==b&&(a.ref=null,o(b))}function o(a){a.value=null,(0,f.deleteFromLru)(a);let b=a.map;if(null===b){let b=a.parent,c=a.key;for(;null!==b;){let a=b.map;if(null!==a&&(a.delete(c),0===a.size)&&(b.map=null,null===b.value)){c=b.key,b=b.parent;continue}break}}else{let c=b.get(h);void 0!==c&&null!==c.value&&m(a,c.value)}}function p(a,b){let c=a.ref;null!==c&&(a.size=b,(0,f.updateLruSize)(c,b))}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},91442,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={appendLayoutVaryPath:function(){return k},clonePageVaryPathWithNewSearchParams:function(){return p},finalizeLayoutVaryPath:function(){return l},finalizeMetadataVaryPath:function(){return n},finalizePageVaryPath:function(){return m},getFulfilledRouteVaryPath:function(){return j},getRouteVaryPath:function(){return i},getSegmentVaryPathForRequest:function(){return o}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(10846),g=a.r(51561),h=a.r(58216);function i(a,b,c){return{value:a,parent:{value:b,parent:{value:c,parent:null}}}}function j(a,b,c,d){return{value:a,parent:{value:b,parent:{value:d?c:g.Fallback,parent:null}}}}function k(a,b){return{value:b,parent:a}}function l(a,b){return{value:a,parent:b}}function m(a,b,c){return{value:a,parent:{value:b,parent:c}}}function n(a,b,c){return{value:a+h.HEAD_REQUEST_KEY,parent:{value:b,parent:c}}}function o(a,b){let c=b.varyPath;if(b.isPage&&a!==f.FetchStrategy.Full&&a!==f.FetchStrategy.PPRRuntime){let a=c.parent.parent;return{value:c.value,parent:{value:g.Fallback,parent:a}}}return c}function p(a,b){let c=a.parent;return{value:a.value,parent:{value:b,parent:c.parent}}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},19924,(a,b,c)=>{"use strict";function d(a){return a.startsWith("/")?a:`/${a}`}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"ensureLeadingSlash",{enumerable:!0,get:function(){return d}})},53808,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={normalizeAppPath:function(){return h},normalizeRscURL:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(19924),g=a.r(39118);function h(a){return(0,f.ensureLeadingSlash)(a.split("/").reduce((a,b,c,d)=>!b||(0,g.isGroupSegment)(b)||"@"===b[0]||("page"===b||"route"===b)&&c===d.length-1?a:`${a}/${b}`,""))}function i(a){return a.replace(/\.rsc($|\?)/,"$1")}},18099,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={INTERCEPTION_ROUTE_MARKERS:function(){return g},extractInterceptionRouteInformation:function(){return i},isInterceptionRouteAppPath:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(53808),g=["(..)(..)","(.)","(..)","(...)"];function h(a){return void 0!==a.split("/").find(a=>g.find(b=>a.startsWith(b)))}function i(a){let b,c,d;for(let e of a.split("/"))if(c=g.find(a=>e.startsWith(a))){[b,d]=a.split(c,2);break}if(!b||!c||!d)throw Object.defineProperty(Error(`Invalid interception route: ${a}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`),"__NEXT_ERROR_CODE",{value:"E269",enumerable:!1,configurable:!0});switch(b=(0,f.normalizeAppPath)(b),c){case"(.)":d="/"===b?`/${d}`:b+"/"+d;break;case"(..)":if("/"===b)throw Object.defineProperty(Error(`Invalid interception route: ${a}. Cannot use (..) marker at the root level, use (.) instead.`),"__NEXT_ERROR_CODE",{value:"E207",enumerable:!1,configurable:!0});d=b.split("/").slice(0,-1).concat(d).join("/");break;case"(...)":d="/"+d;break;case"(..)(..)":let e=b.split("/");if(e.length<=2)throw Object.defineProperty(Error(`Invalid interception route: ${a}. Cannot use (..)(..) marker at the root level or one level up.`),"__NEXT_ERROR_CODE",{value:"E486",enumerable:!1,configurable:!0});d=e.slice(0,-2).concat(d).join("/");break;default:throw Object.defineProperty(Error("Invariant: unexpected marker"),"__NEXT_ERROR_CODE",{value:"E112",enumerable:!1,configurable:!0})}return{interceptingRoute:b,interceptedRoute:d}}},37042,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={computeChangedPath:function(){return l},extractPathFromFlightRouterState:function(){return k},getSelectedParams:function(){return function a(b,c={}){for(let d of Object.values(b[1])){let b=d[0],e=Array.isArray(b),f=e?b[1]:b;!f||f.startsWith(g.PAGE_SEGMENT_KEY)||(e&&("c"===b[2]||"oc"===b[2])?c[b[0]]=b[1].split("/"):e&&(c[b[0]]=b[1]),c=a(d,c))}return c}}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(18099),g=a.r(39118),h=a.r(30641),i=a=>"string"==typeof a?"children"===a?"":a:a[1];function j(a){return a.reduce((a,b)=>{let c;return""===(b="/"===(c=b)[0]?c.slice(1):c)||(0,g.isGroupSegment)(b)?a:`${a}/${b}`},"")||"/"}function k(a){let b=Array.isArray(a[0])?a[0][1]:a[0];if(b===g.DEFAULT_SEGMENT_KEY||f.INTERCEPTION_ROUTE_MARKERS.some(a=>b.startsWith(a)))return;if(b.startsWith(g.PAGE_SEGMENT_KEY))return"";let c=[i(b)],d=a[1]??{},e=d.children?k(d.children):void 0;if(void 0!==e)c.push(e);else for(let[a,b]of Object.entries(d)){if("children"===a)continue;let d=k(b);void 0!==d&&c.push(d)}return j(c)}function l(a,b){let c=function a(b,c){let[d,e]=b,[g,j]=c,l=i(d),m=i(g);if(f.INTERCEPTION_ROUTE_MARKERS.some(a=>l.startsWith(a)||m.startsWith(a)))return"";if(!(0,h.matchSegment)(d,g))return k(c)??"";for(let b in e)if(j[b]){let c=a(e[b],j[b]);if(null!==c)return`${i(g)}/${c}`}return null}(a,b);return null==c||"/"===c?c:j(c.split("/"))}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},88632,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"handleMutable",{enumerable:!0,get:function(){return f}});let d=a.r(37042);function e(a){return void 0!==a}function f(a,b){let c=b.shouldScroll??!0,f=a.previousNextUrl,g=a.nextUrl;if(e(b.patchedTree)){let c=(0,d.computeChangedPath)(a.tree,b.patchedTree);c?(f=g,g=c):g||(g=a.canonicalUrl)}return{canonicalUrl:b.canonicalUrl??a.canonicalUrl,renderedSearch:b.renderedSearch??a.renderedSearch,pushRef:{pendingPush:e(b.pendingPush)?b.pendingPush:a.pushRef.pendingPush,mpaNavigation:e(b.mpaNavigation)?b.mpaNavigation:a.pushRef.mpaNavigation,preserveCustomHistoryState:e(b.preserveCustomHistoryState)?b.preserveCustomHistoryState:a.pushRef.preserveCustomHistoryState},focusAndScrollRef:{apply:!!c&&(!!e(b?.scrollableSegments)||a.focusAndScrollRef.apply),onlyHashChange:b.onlyHashChange||!1,hashFragment:c?b.hashFragment&&""!==b.hashFragment?decodeURIComponent(b.hashFragment.slice(1)):a.focusAndScrollRef.hashFragment:null,segmentPaths:c?b?.scrollableSegments??a.focusAndScrollRef.segmentPaths:[]},cache:b.cache?b.cache:a.cache,tree:e(b.patchedTree)?b.patchedTree:a.tree,nextUrl:g,previousNextUrl:f,debugInfo:b.collectedDebugInfo??null}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},70681,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"createRouterCacheKey",{enumerable:!0,get:function(){return e}});let d=a.r(39118);function e(a,b=!1){return Array.isArray(a)?`${a[0]}|${a[1]}|${a[2]}`:b&&a.startsWith(d.PAGE_SEGMENT_KEY)?d.PAGE_SEGMENT_KEY:a}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},71094,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"isNavigatingToNewRootLayout",{enumerable:!0,get:function(){return function a(b,c){let d=b[0],e=c[0];if(Array.isArray(d)&&Array.isArray(e)){if(d[0]!==e[0]||d[2]!==e[2])return!0}else if(d!==e)return!0;if(b[4])return!c[4];if(c[4])return!0;let f=Object.values(b[1])[0],g=Object.values(c[1])[0];return!f||!g||a(f,g)}}}),("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},57051,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,e={FreshnessPolicy:function(){return q},createInitialCacheNodeForHydration:function(){return s},isDeferredRsc:function(){return G},spawnDynamicRequests:function(){return B},startPPRNavigation:function(){return t}};for(var f in e)Object.defineProperty(c,f,{enumerable:!0,get:e[f]});let g=a.r(39118),h=a.r(30641),i=a.r(74685),j=a.r(70681),k=a.r(20873),l=a.r(90841),m=a.r(88347),n=a.r(71094),o=a.r(23053),p=a.r(37472);var q=((d={})[d.Default=0]="Default",d[d.Hydration=1]="Hydration",d[d.HistoryTraversal=2]="HistoryTraversal",d[d.RefreshAll=3]="RefreshAll",d[d.HMRRefresh=4]="HMRRefresh",d);let r=()=>{};function s(a,b,c,d){return u(a,b,void 0,1,c,d,null,null,!1,null,null,!1,{scrollableSegments:null,separateRefreshUrls:null}).node}function t(a,b,c,d,e,f,k,l,m,o,p,q,r){return function a(b,c,d,e,f,k,l,m,o,p,q,r,s,t,A,B,C,D){var E,F;let G,H,I,J=e[0],K=f[0];if(!(0,h.matchSegment)(K,J))return!l&&(0,n.isNavigatingToNewRootLayout)(e,f)||K===g.NOT_FOUND_SEGMENT_KEY||null===t||null===A?null:u(b,f,d,k,m,o,p,q,r,t,A,B,D);let L=null!==A&&null!==t?t.concat([A,K]):[],M=f[1],N=e[1],O=null!==m?m[1]:null,P=null!==p?p[1]:null,Q=!0===f[4],R=l||Q,S=void 0!==d?d.parallelRoutes:void 0,T=!1,U=!1;switch(k){case 0:case 2:case 1:T=!1,U=!1;break;case 3:case 4:T=!0,U=!0}let V=new Map(T?void 0:S),W=0===Object.keys(M).length;if(void 0===d||U||W&&s)if(null!==m&&null!==m[0]){let a=m[0],c=m[2],d=null===o;H=y(a,c,!1,o,d,W,V,b),I=W&&d}else if(null!==p){let a=p[0],c=p[2],d=p[3];H=y(a,c,d,q,r,W,V,b),I=d||W&&r}else H=z(V,W,b,k),I=!0;else H=x(!1,d,V),I=!1;let X=f[2],Y="string"==typeof X&&"refresh"===f[3]?X:C;I&&null!==Y&&(E=D,F=Y,null===(G=E.separateRefreshUrls)?E.separateRefreshUrls=new Set([F]):G.add(F));let Z={},$=null,_=!1,aa={};for(let d in M){let e=M[d],f=N[d];if(void 0===f)return null;let h=void 0!==S?S.get(d):void 0,l=null!==O?O[d]:null,m=null!==P?P[d]:null,n=e[0],p=o,t=q,u=r;2!==k&&n===g.DEFAULT_SEGMENT_KEY&&(n=(e=function(a,b){let c;return"refresh"===b[3]?c=b:((c=v(b,b[1]))[2]=(0,i.createHrefFromUrl)(a),c[3]="refresh"),c}(c,f))[0],l=null,p=null,m=null,t=null,u=!1);let w=(0,j.createRouterCacheKey)(n),x=a(b,c,void 0!==h?h.get(w):void 0,f,e,k,R,l??null,p,m??null,t,u,s,L,d,B||I,Y,D);if(null===x)return null;null===$&&($=new Map),$.set(d,x);let y=x.node;if(null!==y){let a=new Map(T?void 0:h);a.set(w,y),V.set(d,a)}let z=x.route;Z[d]=z;let A=x.dynamicRequestTree;null!==A?(_=!0,aa[d]=A):aa[d]=z}return{status:+!I,route:v(f,Z),node:H,dynamicRequestTree:w(f,aa,I,_,B),refreshUrl:Y,children:$}}(a,b,null!==c?c:void 0,d,e,f,!1,k,l,m,o,p,q,null,null,!1,null,r)}function u(a,b,c,d,e,f,g,h,i,k,l,m,n){let p,q,r=b[0],s=null!==l&&null!==k?k.concat([l,r]):[],t=b[1],A=null!==g?g[1]:null,B=null!==e?e[1]:null,C=void 0!==c?c.parallelRoutes:void 0,D=!1,E=!1,F=!1;switch(d){case 0:D=!1,E=void 0===c||a-c.navigatedAt>=o.DYNAMIC_STALETIME_MS,F=!1;break;case 1:E=!1,D=!1,F=!1;break;case 2:if(E=!1,E=!1,void 0!==c){let a=c.rsc;F=!G(a)||"pending"!==a.status}else F=!1;break;case 3:case 4:E=!0,D=!0,F=!1}let H=new Map(D?void 0:C),I=0===Object.keys(t).length;if(I&&(null===n.scrollableSegments&&(n.scrollableSegments=[]),n.scrollableSegments.push(s)),E||void 0===c)if(null!==e&&null!==e[0]){let b=e[0],c=e[2],g=null===f&&1!==d;p=y(b,c,!1,f,g,I,H,a),q=I&&g}else if(1===d&&I&&null!==f)p=y(null,null,!1,f,!1,I,H,a),q=!1;else if(1!==d&&null!==g){let b=g[0],c=g[2],d=g[3];p=y(b,c,d,h,i,I,H,a),q=d||I&&i}else p=z(H,I,a,d),q=!0;else p=x(F,c,H),q=!1;let J={},K=null,L=!1,M={};for(let b in t){let c=t[b],e=void 0!==C?C.get(b):void 0,g=null!==B?B[b]:null,k=null!==A?A[b]:null,l=c[0],o=(0,j.createRouterCacheKey)(l),p=u(a,c,void 0!==e?e.get(o):void 0,d,g??null,f,k??null,h,i,s,b,m||q,n);null===K&&(K=new Map),K.set(b,p);let r=p.node;if(null!==r){let a=new Map(D?void 0:e);a.set(o,r),H.set(b,a)}let v=p.route;J[b]=v;let w=p.dynamicRequestTree;null!==w?(L=!0,M[b]=w):M[b]=v}return{status:+!q,route:v(b,J),node:p,dynamicRequestTree:w(b,M,q,L,m),refreshUrl:null,children:K}}function v(a,b){let c=[a[0],b];return 2 in a&&(c[2]=a[2]),3 in a&&(c[3]=a[3]),4 in a&&(c[4]=a[4]),c}function w(a,b,c,d,e){let f=null;return c?(f=v(a,b),e||(f[3]="refetch")):f=d?v(a,b):null,f}function x(a,b,c){return{rsc:b.rsc,prefetchRsc:a?null:b.prefetchRsc,head:b.head,prefetchHead:a?null:b.prefetchHead,loading:b.loading,parallelRoutes:c,navigatedAt:b.navigatedAt}}function y(a,b,c,d,e,f,g,h){let i,j,k,l;return c?(j=a,i=H()):(j=null,i=a),f?e?(k=d,l=H()):(k=null,l=d):(k=null,l=null),{rsc:i,prefetchRsc:j,head:l,prefetchHead:k,loading:b,parallelRoutes:g,navigatedAt:h}}function z(a,b,c,d){let e=1===d;return{rsc:e?null:H(),prefetchRsc:null,head:!e&&b?H():null,prefetchHead:null,loading:e?null:H(),parallelRoutes:a,navigatedAt:c}}let A=!1;function B(a,b,c,d,e){let f=a.dynamicRequestTree;if(null===f){A=!1;return}let g=E(a,f,b,c,d),h=e.separateRefreshUrls,j=null;if(null!==h){j=[];let e=(0,i.createHrefFromUrl)(b);for(let b of h)b!==e&&null!==f&&j.push(E(a,f,new URL(b,location.origin),c,d))}C(a,c,g,j).then(r,r)}async function C(a,b,c,d){var e,f;let g=await (e=c,f=d,new Promise(a=>{let b=b=>{0===b.exitStatus?0==--d&&a(0):a(b.exitStatus)},c=()=>a(2),d=1;e.then(b,c),null!==f&&(d+=f.length,f.forEach(a=>a.then(b,c)))}));switch(0===g&&(g=function a(b,c,d){var e,f,g;let h,i,j,k;0===b.status?(b.status=2,e=b.node,f=c,g=d,G(i=e.rsc)&&(null===f?i.resolve(null,g):i.reject(f,g)),G(j=e.loading)&&j.resolve(null,g),G(k=e.head)&&k.resolve(null,g),h=null===b.refreshUrl?1:2):h=0;let l=b.children;if(null!==l)for(let[,b]of l){let e=a(b,c,d);e>h&&(h=e)}return h}(a,null,null)),g){case 0:A=!1;return;case 1:{let d=await c;D(!1,d.url,b,d.seed,a.route);return}case 2:{let d=await c;D(!0,d.url,b,d.seed,a.route);return}default:return g}}function D(a,b,c,d,e){a=a||A,A=!0;let f={type:m.ACTION_SERVER_PATCH,previousTree:e,url:b,nextUrl:c,seed:d,mpa:a};(0,l.dispatchAppRouterAction)(f)}async function E(a,b,c,d,e){try{let f=await (0,k.fetchServerResponse)(c,{flightRouterState:b,nextUrl:d,isHmrRefresh:4===e});if("string"==typeof f)return{exitStatus:2,url:new URL(f,location.origin),seed:null};let g=(0,p.convertServerPatchToFullTree)(a.route,f.flightData,f.renderedSearch);return{exitStatus:+!!function a(b,c,d,e,f){0===b.status&&null!==d&&(b.status=1,function(a,b,c,d){let e=a.rsc,f=b[0];if(null===f)return;null===e?a.rsc=f:G(e)&&e.resolve(f,d);let g=a.loading;if(G(g)){let a=b[2];g.resolve(a,d)}let h=a.head;G(h)&&h.resolve(c,d)}(b.node,d,e,f));let g=b.children,i=c[1],j=null!==d?d[1]:null,k=!1;if(null!==g)for(let b in i){let c=i[b],d=null!==j?j[b]:null,l=g.get(b);if(void 0===l)k=!0;else{let b=l.route[0];(0,h.matchSegment)(c[0],b)&&null!=d&&a(l,c,d,e,f)&&(k=!0)}}return k}(a,g.tree,g.data,g.head,f.debugInfo),url:new URL(f.canonicalUrl,location.origin),seed:g}}catch{return{exitStatus:2,url:c,seed:null}}}let F=Symbol();function G(a){return a&&"object"==typeof a&&a.tag===F}function H(){let a,b,c=[],d=new Promise((c,d)=>{a=c,b=d});return d.status="pending",d.resolve=(b,e)=>{"pending"===d.status&&(d.status="fulfilled",d.value=b,null!==e&&c.push.apply(c,e),a(b))},d.reject=(a,e)=>{"pending"===d.status&&(d.status="rejected",d.reason=a,null!==e&&c.push.apply(c,e),b(a))},d.tag=F,d._debugInfo=c,d}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},37472,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={convertServerPatchToFullTree:function(){return u},navigate:function(){return m},navigateToSeededRoute:function(){return n}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(20873),g=a.r(57051),h=a.r(74685),i=a.r(99032),j=a.r(92702),k=a.r(39118),l=a.r(10846);function m(a,b,c,d,e,f,g,h){let k=Date.now(),m=a.href,n=m===b.href,p=(0,j.createCacheKey)(m,e),s=(0,i.readRouteCacheEntry)(k,p);if(null!==s&&s.status===i.EntryStatus.Fulfilled){let h=q(k,s,s.tree),i=h.flightRouterState,j=h.seedData,l=r(k,s),m=l.rsc,p=l.isPartial,t=s.canonicalUrl+a.hash;return o(k,a,b,e,n,c,d,i,j,m,p,t,s.renderedSearch,f,g)}if(null===s||s.status!==i.EntryStatus.Rejected){let h=(0,i.requestOptimisticRouteCacheEntry)(k,a,e);if(null!==h){let i=q(k,h,h.tree),j=i.flightRouterState,l=i.seedData,m=r(k,h),p=m.rsc,s=m.isPartial,t=h.canonicalUrl+a.hash;return o(k,a,b,e,n,c,d,j,l,p,s,t,h.renderedSearch,f,g)}}let u=h.collectedDebugInfo??[];return void 0===h.collectedDebugInfo&&(u=h.collectedDebugInfo=[]),{tag:l.NavigationResultTag.Async,data:t(k,a,b,e,c,d,f,g,u)}}function n(a,b,c,d,e,f,h,i,j,k){let m={scrollableSegments:null,separateRefreshUrls:null},n=b.href===e.href,o=(0,g.startPPRNavigation)(a,e,f,h,d.tree,i,d.data,d.head,null,null,!1,n,m);return null!==o?((0,g.spawnDynamicRequests)(o,b,j,i,m),p(o,c,d.renderedSearch,m.scrollableSegments,k,b.hash)):{tag:l.NavigationResultTag.MPA,data:c}}function o(a,b,c,d,e,f,h,i,j,k,m,n,o,q,r){let s={scrollableSegments:null,separateRefreshUrls:null},t=(0,g.startPPRNavigation)(a,c,f,h,i,q,null,null,j,k,m,e,s);return null!==t?((0,g.spawnDynamicRequests)(t,b,d,q,s),p(t,n,o,s.scrollableSegments,r,b.hash)):{tag:l.NavigationResultTag.MPA,data:n}}function p(a,b,c,d,e,f){return{tag:l.NavigationResultTag.Success,data:{flightRouterState:a.route,cacheNode:a.node,canonicalUrl:b,renderedSearch:c,scrollableSegments:d,shouldScroll:e,hash:f}}}function q(a,b,c){let d={},e={},f=c.slots;if(null!==f)for(let c in f){let g=q(a,b,f[c]);d[c]=g.flightRouterState,e[c]=g.seedData}let g=null,h=null,j=!0,l=(0,i.readSegmentCacheEntry)(a,c.varyPath);if(null!==l)switch(l.status){case i.EntryStatus.Fulfilled:g=l.rsc,h=l.loading,j=l.isPartial;break;case i.EntryStatus.Pending:{let a=(0,i.waitForSegmentCacheEntry)(l);g=a.then(a=>null!==a?a.rsc:null),h=a.then(a=>null!==a?a.loading:null),j=l.isPartial}case i.EntryStatus.Empty:case i.EntryStatus.Rejected:}return{flightRouterState:[(0,k.addSearchParamsIfPageSegment)(c.segment,Object.fromEntries(new URLSearchParams(b.renderedSearch))),d,null,null,c.isRootLayout],seedData:[g,e,h,j,!1]}}function r(a,b){let c=null,d=!0,e=(0,i.readSegmentCacheEntry)(a,b.metadata.varyPath);if(null!==e)switch(e.status){case i.EntryStatus.Fulfilled:c=e.rsc,d=e.isPartial;break;case i.EntryStatus.Pending:c=(0,i.waitForSegmentCacheEntry)(e).then(a=>null!==a?a.rsc:null),d=e.isPartial;case i.EntryStatus.Empty:case i.EntryStatus.Rejected:}return{rsc:c,isPartial:d}}let s=["",{},null,"refetch"];async function t(a,b,c,d,e,i,j,k,m){let o;switch(j){case g.FreshnessPolicy.Default:case g.FreshnessPolicy.HistoryTraversal:o=i;break;case g.FreshnessPolicy.Hydration:case g.FreshnessPolicy.RefreshAll:case g.FreshnessPolicy.HMRRefresh:o=s;break;default:o=i}let p=(0,f.fetchServerResponse)(b,{flightRouterState:o,nextUrl:d}),q=await p;if("string"==typeof q)return{tag:l.NavigationResultTag.MPA,data:q};let{flightData:r,canonicalUrl:t,renderedSearch:v,debugInfo:w}=q;null!==w&&m.push(...w);let x=u(i,r,v);return n(a,b,(0,h.createHrefFromUrl)(t),x,c,e,i,j,d,k)}function u(a,b,c){let d=a,e=null,f=null;for(let{segmentPath:a,tree:c,seedData:g,head:h}of b){let b=function a(b,c,d,e,f,g){let h;if(g===f.length)return{tree:d,data:e};let i=f[g],j=b[1],k=null!==c?c[1]:null,l={},m={};for(let b in j){let c=j[b],h=null!==k?k[b]??null:null;if(b===i){let i=a(c,h,d,e,f,g+2);l[b]=i.tree,m[b]=i.data}else l[b]=c,m[b]=h}return h=[b[0],l],2 in b&&(h[2]=b[2]),3 in b&&(h[3]=b[3]),4 in b&&(h[4]=b[4]),{tree:h,data:[null,m,null,!0,!1]}}(d,e,c,g,a,0);d=b.tree,e=b.data,f=h}return{tree:d,data:e,renderedSearch:c,head:f}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},23053,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={DYNAMIC_STALETIME_MS:function(){return l},STATIC_STALETIME_MS:function(){return m},generateSegmentsFromPatch:function(){return function a(b){let c=[],[d,e]=b;if(0===Object.keys(e).length)return[[d]];for(let[b,f]of Object.entries(e))for(let e of a(f))""===d?c.push([b,...e]):c.push([d,b,...e]);return c}},handleExternalUrl:function(){return n},handleNavigationResult:function(){return o},navigateReducer:function(){return p}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(74685),g=a.r(88632),h=a.r(37472),i=a.r(10846),j=a.r(99032),k=a.r(57051),l=1e3*Number("0"),m=(0,j.getStaleTimeMs)(Number("300"));function n(a,b,c,d){return b.mpaNavigation=!0,b.canonicalUrl=c,b.pendingPush=d,b.scrollableSegments=void 0,(0,g.handleMutable)(a,b)}function o(a,b,c,d,e){switch(e.tag){case i.NavigationResultTag.MPA:return n(b,c,e.data,d);case i.NavigationResultTag.Success:{c.cache=e.data.cacheNode,c.patchedTree=e.data.flightRouterState,c.renderedSearch=e.data.renderedSearch,c.canonicalUrl=e.data.canonicalUrl,c.scrollableSegments=e.data.scrollableSegments??void 0,c.shouldScroll=e.data.shouldScroll,c.hashFragment=e.data.hash;let d=new URL(b.canonicalUrl,a);return a.pathname===d.pathname&&a.search===d.search&&a.hash!==d.hash&&(c.onlyHashChange=!0,c.shouldScroll=e.data.shouldScroll,c.hashFragment=a.hash,c.scrollableSegments=[]),(0,g.handleMutable)(b,c)}case i.NavigationResultTag.Async:return e.data.then(e=>o(a,b,c,d,e),()=>b);default:return b}}function p(a,b){let{url:c,isExternalUrl:d,navigateType:e,shouldScroll:g}=b,i={},j=(0,f.createHrefFromUrl)(c),l="push"===e;if(i.preserveCustomHistoryState=!1,i.pendingPush=l,d)return n(a,i,c.toString(),l);if(document.getElementById("__next-page-redirect"))return n(a,i,j,l);let m=new URL(a.canonicalUrl,location.origin),p=(0,h.navigate)(c,m,a.cache,a.tree,a.nextUrl,k.FreshnessPolicy.Default,g,i);return o(c,a,i,l,p)}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},54427,(a,b,c)=>{"use strict";function d(){let a,b,c=new Promise((c,d)=>{a=c,b=d});return{resolve:a,reject:b,promise:c}}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"createPromiseWithResolvers",{enumerable:!0,get:function(){return d}})},99032,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,e={EntryStatus:function(){return y},canNewFetchStrategyProvideMoreContent:function(){return ae},convertRouteTreeToFlightRouterState:function(){return function a(b){let c={};if(null!==b.slots)for(let d in b.slots)c[d]=a(b.slots[d]);return[b.segment,c,null,null,b.isRootLayout]}},createDetachedSegmentCacheEntry:function(){return R},fetchRouteOnCacheMiss:function(){return Y},fetchSegmentOnCacheMiss:function(){return Z},fetchSegmentPrefetchesUsingDynamicRequest:function(){return $},getCurrentCacheVersion:function(){return E},getStaleTimeMs:function(){return x},overwriteRevalidatingSegmentCacheEntry:function(){return P},pingInvalidationListeners:function(){return G},readOrCreateRevalidatingSegmentEntry:function(){return O},readOrCreateRouteCacheEntry:function(){return K},readOrCreateSegmentCacheEntry:function(){return N},readRouteCacheEntry:function(){return H},readSegmentCacheEntry:function(){return I},requestOptimisticRouteCacheEntry:function(){return L},revalidateEntireCache:function(){return F},upgradeToPendingSegment:function(){return S},upsertSegmentEntry:function(){return Q},waitForSegmentCacheEntry:function(){return J}};for(var f in e)Object.defineProperty(c,f,{enumerable:!0,get:e[f]});let g=a.r(76e3),h=a.r(37909),i=a.r(20873),j=a.r(42297),k=a.r(91442),l=a.r(91377),m=a.r(74685),n=a.r(92702),o=a.r(23187),p=a.r(51561),q=a.r(58216),r=a.r(22129),s=a.r(23053),t=a.r(16441),u=a.r(39118),v=a.r(10846),w=a.r(54427);function x(a){return 1e3*Math.max(a,30)}var y=((d={})[d.Empty=0]="Empty",d[d.Pending=1]="Pending",d[d.Fulfilled=2]="Fulfilled",d[d.Rejected=3]="Rejected",d);let z=["",{},null,"metadata-only"],A=(0,p.createCacheMap)(),B=(0,p.createCacheMap)(),C=null,D=0;function E(){return D}function F(a,b){D++,(0,j.startRevalidationCooldown)(),(0,t.pingVisibleLinks)(a,b),G(a,b)}function G(a,b){if(null!==C){let c=C;for(let d of(C=null,c))(0,j.isPrefetchTaskDirty)(d,a,b)&&function(a){let b=a.onInvalidate;if(null!==b){a.onInvalidate=null;try{b()}catch(a){"function"==typeof reportError?reportError(a):console.error(a)}}}(d)}}function H(a,b){let c=(0,k.getRouteVaryPath)(b.pathname,b.search,b.nextUrl);return(0,p.getFromCacheMap)(a,D,A,c,!1)}function I(a,b){return(0,p.getFromCacheMap)(a,D,B,b,!1)}function J(a){let b=a.promise;return null===b&&(b=a.promise=(0,w.createPromiseWithResolvers)()),b.promise}function K(a,b,c){null!==b.onInvalidate&&(null===C?C=new Set([b]):C.add(b));let d=H(a,c);if(null!==d)return d;let e={canonicalUrl:null,status:0,blockedTasks:null,tree:null,metadata:null,couldBeIntercepted:!0,isPPREnabled:!1,renderedSearch:null,ref:null,size:0,staleAt:1/0,version:D},f=(0,k.getRouteVaryPath)(c.pathname,c.search,c.nextUrl);return(0,p.setInCacheMap)(A,f,e,!1),e}function L(a,b,c){let d=b.search;if(""===d)return null;let e=new URL(b);e.search="";let f=H(a,(0,n.createCacheKey)(e.href,c));if(null===f||2!==f.status)return null;let g=new URL(f.canonicalUrl,b.origin),h=""!==g.search?g.search:d,i=""!==f.renderedSearch?f.renderedSearch:d,j=new URL(f.canonicalUrl,location.origin);return j.search=h,{canonicalUrl:(0,m.createHrefFromUrl)(j),status:2,blockedTasks:null,tree:M(f.tree,i),metadata:M(f.metadata,i),couldBeIntercepted:f.couldBeIntercepted,isPPREnabled:f.isPPREnabled,renderedSearch:i,ref:null,size:0,staleAt:f.staleAt,version:f.version}}function M(a,b){let c=null,d=a.slots;if(null!==d)for(let a in c={},d){let e=d[a];c[a]=M(e,b)}return a.isPage?{requestKey:a.requestKey,segment:a.segment,varyPath:(0,k.clonePageVaryPathWithNewSearchParams)(a.varyPath,b),isPage:!0,slots:c,isRootLayout:a.isRootLayout,hasLoadingBoundary:a.hasLoadingBoundary,hasRuntimePrefetch:a.hasRuntimePrefetch}:{requestKey:a.requestKey,segment:a.segment,varyPath:a.varyPath,isPage:!1,slots:c,isRootLayout:a.isRootLayout,hasLoadingBoundary:a.hasLoadingBoundary,hasRuntimePrefetch:a.hasRuntimePrefetch}}function N(a,b,c,d){let e=I(a,d.varyPath);if(null!==e)return e;let f=(0,k.getSegmentVaryPathForRequest)(b,d),g=R(c.staleAt);return(0,p.setInCacheMap)(B,f,g,!1),g}function O(a,b,c,d){var e;let f=(e=d.varyPath,(0,p.getFromCacheMap)(a,D,B,e,!0));if(null!==f)return f;let g=(0,k.getSegmentVaryPathForRequest)(b,d),h=R(c.staleAt);return(0,p.setInCacheMap)(B,g,h,!0),h}function P(a,b,c){let d=(0,k.getSegmentVaryPathForRequest)(a,c),e=R(b.staleAt);return(0,p.setInCacheMap)(B,d,e,!0),e}function Q(a,b,c){if((0,p.isValueExpired)(a,D,c))return null;let d=I(a,b);if(null!==d){var e;if(c.fetchStrategy!==d.fetchStrategy&&(e=d.fetchStrategy,!(e<c.fetchStrategy))||!d.isPartial&&c.isPartial)return c.status=3,c.loading=null,c.rsc=null,null;(0,p.deleteFromCacheMap)(d)}return(0,p.setInCacheMap)(B,b,c,!1),c}function R(a){return{status:0,fetchStrategy:v.FetchStrategy.PPR,rsc:null,loading:null,isPartial:!0,promise:null,ref:null,size:0,staleAt:a,version:0}}function S(a,b){return a.status=1,a.fetchStrategy=b,b===v.FetchStrategy.Full&&(a.isPartial=!1),a.version=D,a}function T(a){let b=a.blockedTasks;if(null!==b){for(let a of b)(0,j.pingPrefetchTask)(a);a.blockedTasks=null}}function U(a,b,c,d,e,f,h,i){let j={requestKey:q.HEAD_REQUEST_KEY,segment:q.HEAD_REQUEST_KEY,varyPath:c,isPage:!0,slots:null,isRootLayout:!1,hasLoadingBoundary:g.HasLoadingBoundary.SubtreeHasNoLoadingBoundary,hasRuntimePrefetch:!1};return a.status=2,a.tree=b,a.metadata=j,a.staleAt=d,a.couldBeIntercepted=e,a.canonicalUrl=f,a.renderedSearch=h,a.isPPREnabled=i,T(a),a}function V(a,b,c,d,e){return a.status=2,a.rsc=b,a.loading=c,a.staleAt=d,a.isPartial=e,null!==a.promise&&(a.promise.resolve(a),a.promise=null),a}function W(a,b){a.status=3,a.staleAt=b,T(a)}function X(a,b){a.status=3,a.staleAt=b,null!==a.promise&&(a.promise.resolve(null),a.promise=null)}async function Y(a,b,c){let d=c.pathname,e=c.search,f=c.nextUrl,j={[h.RSC_HEADER]:"1",[h.NEXT_ROUTER_PREFETCH_HEADER]:"1",[h.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]:"/_tree"};null!==f&&(j[h.NEXT_URL]=f);try{let c,n,t=new URL(d+e,location.origin);if(c=await ac(t,j),n=null!==c&&c.redirected?new URL(c.url):t,!c||!c.ok||204===c.status||!c.body)return W(a,Date.now()+1e4),null;let y=(0,m.createHrefFromUrl)(n),z=c.headers.get("vary"),B=null!==z&&z.includes(h.NEXT_URL),C=(0,w.createPromiseWithResolvers)(),D="2"===c.headers.get(h.NEXT_DID_POSTPONE_HEADER);if(D){let b,d,e=ad(c.body,C.resolve,function(b){(0,p.setSizeInCacheMap)(a,b)}),f=await (0,i.createFromNextReadableStream)(e,j);if(f.buildId!==(0,l.getAppBuildId)())return W(a,Date.now()+1e4),null;let h=(0,o.getRenderedPathname)(c),m=(0,o.getRenderedSearch)(c),n={metadataVaryPath:null},r=(b=h.split("/").filter(a=>""!==a),d=q.ROOT_SEGMENT_REQUEST_KEY,function a(b,c,d,e,f,h,i,j){let l,m,n=null,p=b.slots;if(null!==p)for(let b in l=!1,m=(0,k.finalizeLayoutVaryPath)(e,d),n={},p){let c,g,l,m=p[b],r=m.name,s=m.paramType,t=m.paramKey;if(null!==s){let a=(0,o.parseDynamicParamFromURLPart)(s,f,h),b=null!==t?t:(0,o.getCacheKeyForDynamicParam)(a,"");l=(0,k.appendLayoutVaryPath)(d,b),g=[r,b,s],c=!0}else l=d,g=r,c=(0,o.doesStaticSegmentAppearInURL)(r);let u=c?h+1:h,v=(0,q.createSegmentRequestKeyPart)(g),w=(0,q.appendSegmentRequestKeyPart)(e,b,v);n[b]=a(m,g,l,w,f,u,i,j)}else e.endsWith(u.PAGE_SEGMENT_KEY)?(l=!0,m=(0,k.finalizePageVaryPath)(e,i,d),null===j.metadataVaryPath&&(j.metadataVaryPath=(0,k.finalizeMetadataVaryPath)(e,i,d))):(l=!1,m=(0,k.finalizeLayoutVaryPath)(e,d));return{requestKey:e,segment:c,varyPath:m,isPage:l,slots:n,isRootLayout:b.isRootLayout,hasLoadingBoundary:g.HasLoadingBoundary.SegmentHasLoadingBoundary,hasRuntimePrefetch:b.hasRuntimePrefetch}}(f.tree,d,null,q.ROOT_SEGMENT_REQUEST_KEY,b,0,m,n)),s=n.metadataVaryPath;if(null===s)return W(a,Date.now()+1e4),null;let t=x(f.staleTime);U(a,r,s,Date.now()+t,B,y,m,D)}else{let d=ad(c.body,C.resolve,function(b){(0,p.setSizeInCacheMap)(a,b)}),e=await (0,i.createFromNextReadableStream)(d,j);if(e.b!==(0,l.getAppBuildId)())return W(a,Date.now()+1e4),null;!function(a,b,c,d,e,f,i,j,l){let m=(0,o.getRenderedSearch)(d),n=(0,r.normalizeFlightData)(e.f);if("string"==typeof n||1!==n.length)return W(f,a+1e4);let p=n[0];if(!p.isRootRender)return W(f,a+1e4);let t=p.tree,v="number"==typeof e.rp?.[1]?e.rp[1]:parseInt(d.headers.get(h.NEXT_ROUTER_STALE_TIME_HEADER)??"",10),w=isNaN(v)?s.STATIC_STALETIME_MS:x(v),y="1"===d.headers.get(h.NEXT_DID_POSTPONE_HEADER),z={metadataVaryPath:null},A=function a(b,c,d,e,f){let h,i,j,l,m=b[0];if(Array.isArray(m)){j=!1;let a=m[1];i=(0,k.appendLayoutVaryPath)(d,a),l=(0,k.finalizeLayoutVaryPath)(c,i),h=m}else i=d,c.endsWith(u.PAGE_SEGMENT_KEY)?(j=!0,h=u.PAGE_SEGMENT_KEY,l=(0,k.finalizePageVaryPath)(c,e,i),null===f.metadataVaryPath&&(f.metadataVaryPath=(0,k.finalizeMetadataVaryPath)(c,e,i))):(j=!1,h=m,l=(0,k.finalizeLayoutVaryPath)(c,i));let n=null,o=b[1];for(let b in o){let d=o[b],g=d[0],h=(0,q.createSegmentRequestKeyPart)(g),j=a(d,(0,q.appendSegmentRequestKeyPart)(c,b,h),i,e,f);null===n?n={[b]:j}:n[b]=j}return{requestKey:c,segment:h,varyPath:l,isPage:j,slots:n,isRootLayout:!0===b[4],hasLoadingBoundary:void 0!==b[5]?b[5]:g.HasLoadingBoundary.SubtreeHasNoLoadingBoundary,hasRuntimePrefetch:!1}}(t,q.ROOT_SEGMENT_REQUEST_KEY,null,m,z),B=z.metadataVaryPath;if(null===B)return W(f,a+1e4);let C=U(f,A,B,a+w,i,j,m,l);aa(a,b,c,d,e,y,C,null)}(Date.now(),b,v.FetchStrategy.LoadingBoundary,c,e,a,B,y,D)}if(!B){let b=(0,k.getFulfilledRouteVaryPath)(d,e,f,B);(0,p.setInCacheMap)(A,b,a,!1)}return{value:null,closed:C.promise}}catch(b){return W(a,Date.now()+1e4),null}}async function Z(a,b,c,d){let e=new URL(a.canonicalUrl,location.origin),f=c.nextUrl,g=d.requestKey,j=g===q.ROOT_SEGMENT_REQUEST_KEY?"/_index":g,k={[h.RSC_HEADER]:"1",[h.NEXT_ROUTER_PREFETCH_HEADER]:"1",[h.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]:j};null!==f&&(k[h.NEXT_URL]=f);try{let c=await ac(e,k);if(!c||!c.ok||204===c.status||"2"!==c.headers.get(h.NEXT_DID_POSTPONE_HEADER)||!c.body)return X(b,Date.now()+1e4),null;let d=(0,w.createPromiseWithResolvers)(),f=ad(c.body,d.resolve,function(a){(0,p.setSizeInCacheMap)(b,a)}),g=await (0,i.createFromNextReadableStream)(f,k);if(g.buildId!==(0,l.getAppBuildId)())return X(b,Date.now()+1e4),null;return{value:V(b,g.rsc,g.loading,a.staleAt,g.isPartial),closed:d.promise}}catch(a){return X(b,Date.now()+1e4),null}}async function $(a,b,c,d,e){let f=a.key,g=new URL(b.canonicalUrl,location.origin),j=f.nextUrl;1===e.size&&e.has(b.metadata.requestKey)&&(d=z);let k={[h.RSC_HEADER]:"1",[h.NEXT_ROUTER_STATE_TREE_HEADER]:(0,r.prepareFlightRouterStateForRequest)(d)};switch(null!==j&&(k[h.NEXT_URL]=j),c){case v.FetchStrategy.Full:break;case v.FetchStrategy.PPRRuntime:k[h.NEXT_ROUTER_PREFETCH_HEADER]="2";break;case v.FetchStrategy.LoadingBoundary:k[h.NEXT_ROUTER_PREFETCH_HEADER]="1"}try{let d=await ac(g,k);if(!d||!d.ok||!d.body||(0,o.getRenderedSearch)(d)!==b.renderedSearch)return _(e,Date.now()+1e4),null;let f=(0,w.createPromiseWithResolvers)(),h=null,j=ad(d.body,f.resolve,function(a){if(null===h)return;let b=a/h.length;for(let a of h)(0,p.setSizeInCacheMap)(a,b)}),l=await (0,i.createFromNextReadableStream)(j,k),m=c===v.FetchStrategy.PPRRuntime&&l.rp?.[0]===!0;return h=aa(Date.now(),a,c,d,l,m,b,e),{value:null,closed:f.promise}}catch(a){return _(e,Date.now()+1e4),null}}function _(a,b){let c=[];for(let d of a.values())1===d.status?X(d,b):2===d.status&&c.push(d);return c}function aa(a,b,c,d,e,f,g,i){if(e.b!==(0,l.getAppBuildId)())return null!==i&&_(i,a+1e4),null;let j=(0,r.normalizeFlightData)(e.f);if("string"==typeof j)return null;let k="number"==typeof e.rp?.[1]?e.rp[1]:parseInt(d.headers.get(h.NEXT_ROUTER_STALE_TIME_HEADER)??"",10),m=a+(isNaN(k)?s.STATIC_STALETIME_MS:x(k));for(let d of j){let e=d.seedData;if(null!==e){let h=d.segmentPath,j=g.tree;for(let b=0;b<h.length;b+=2){let c=h[b];if(j?.slots?.[c]===void 0)return null!==i&&_(i,a+1e4),null;j=j.slots[c]}!function a(b,c,d,e,f,g,h,i,j){let k=h[0];ab(b,d,e,k,h[2],null===k||i,g,f,j);let l=f.slots;if(null!==l){let f=h[1];for(let h in l){let k=l[h],m=f[h];null!=m&&a(b,c,d,e,k,g,m,i,j)}}}(a,b,c,g,j,m,e,f,i)}let h=d.head;null!==h&&ab(a,c,g,h,null,d.isHeadPartial,m,g.metadata,i)}return null!==i?_(i,a+1e4):null}function ab(a,b,c,d,e,f,g,h,i){let j=null!==i?i.get(h.requestKey):void 0;if(void 0!==j)V(j,d,e,g,f);else{let i=N(a,b,c,h);if(0===i.status)V(S(i,b),d,e,g,f);else{let c=V(S(R(g),b),d,e,g,f);Q(a,(0,k.getSegmentVaryPathForRequest)(b,h),c)}}}async function ac(a,b){let c=await (0,i.createFetch)(a,b,"low",!1);if(!c.ok)return null;{let a=c.headers.get("content-type");if(!(a&&a.startsWith(h.RSC_CONTENT_TYPE_HEADER)))return null}return c}function ad(a,b,c){let d=0,e=a.getReader();return new ReadableStream({async pull(a){for(;;){let{done:f,value:g}=await e.read();if(!f){a.enqueue(g),c(d+=g.byteLength);continue}b();return}}})}function ae(a,b){return a<b}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},42297,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={cancelPrefetchTask:function(){return v},isPrefetchTaskDirty:function(){return x},pingPrefetchTask:function(){return D},reschedulePrefetchTask:function(){return w},schedulePrefetchTask:function(){return u},startRevalidationCooldown:function(){return t}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(76e3),g=a.r(30641),h=a.r(99032),i=a.r(91442),j=a.r(92702),k=a.r(10846),l=a.r(39118),m="function"==typeof queueMicrotask?queueMicrotask:a=>Promise.resolve().then(a).catch(a=>setTimeout(()=>{throw a})),n=[],o=0,p=0,q=!1,r=null,s=null;function t(){null!==s&&clearTimeout(s),s=setTimeout(()=>{s=null,z()},300)}function u(a,b,c,d,e){let f={key:a,treeAtTimeOfPrefetch:b,cacheVersion:(0,h.getCurrentCacheVersion)(),priority:d,phase:1,hasBackgroundWork:!1,spawnedRuntimePrefetches:null,fetchStrategy:c,sortId:p++,isCanceled:!1,onInvalidate:e,_heapIndex:-1};return y(f),P(n,f),z(),f}function v(a){a.isCanceled=!0,function(a,b){let c=b._heapIndex;if(-1!==c&&(b._heapIndex=-1,0!==a.length)){let d=a.pop();d!==b&&(a[c]=d,d._heapIndex=c,U(a,d,c))}}(n,a)}function w(a,b,c,d){a.isCanceled=!1,a.phase=1,a.sortId=p++,a.priority=a===r?k.PrefetchPriority.Intent:d,a.treeAtTimeOfPrefetch=b,a.fetchStrategy=c,y(a),-1!==a._heapIndex?S(n,a):P(n,a),z()}function x(a,b,c){let d=(0,h.getCurrentCacheVersion)();return a.cacheVersion!==d||a.treeAtTimeOfPrefetch!==c||a.key.nextUrl!==b}function y(a){a.priority===k.PrefetchPriority.Intent&&a!==r&&(null!==r&&r.priority!==k.PrefetchPriority.Background&&(r.priority=k.PrefetchPriority.Default,S(n,r)),r=a)}function z(){q||(q=!0,m(E))}function A(a){return null===s&&(a.priority===k.PrefetchPriority.Intent?o<12:o<4)}function B(a){return o++,a.then(a=>null===a?(C(),null):(a.closed.then(C),a.value))}function C(){o--,z()}function D(a){a.isCanceled||-1!==a._heapIndex||(P(n,a),z())}function E(){q=!1;let a=Date.now(),b=Q(n);for(;null!==b&&A(b);){b.cacheVersion=(0,h.getCurrentCacheVersion)();let c=function(a,b){let c=b.key,d=(0,h.readOrCreateRouteCacheEntry)(a,b,c),e=function(a,b,c){switch(c.status){case h.EntryStatus.Empty:B((0,h.fetchRouteOnCacheMiss)(c,b,b.key)),c.staleAt=a+6e4,c.status=h.EntryStatus.Pending;case h.EntryStatus.Pending:{let a=c.blockedTasks;return null===a?c.blockedTasks=new Set([b]):a.add(b),1}case h.EntryStatus.Rejected:break;case h.EntryStatus.Fulfilled:{if(0!==b.phase)return 2;if(!A(b))return 0;let i=c.tree,j=b.fetchStrategy===k.FetchStrategy.PPR?c.isPPREnabled?k.FetchStrategy.PPR:k.FetchStrategy.LoadingBoundary:b.fetchStrategy;switch(j){case k.FetchStrategy.PPR:{var d,e,g;if(I(d=a,e=b,g=c,(0,h.readOrCreateSegmentCacheEntry)(d,k.FetchStrategy.PPR,g,g.metadata),e.key,g.metadata),0===function a(b,c,d,e,f){let g=(0,h.readOrCreateSegmentCacheEntry)(b,c.fetchStrategy,d,f);I(b,c,d,g,c.key,f);let i=e[1],j=f.slots;if(null!==j)for(let e in j){if(!A(c))return 0;let f=j[e],g=f.segment,k=i[e],l=k?.[0];if(0===(void 0!==l&&N(d,g,l)?a(b,c,d,k,f):function a(b,c,d,e){if(e.hasRuntimePrefetch)return null===c.spawnedRuntimePrefetches?c.spawnedRuntimePrefetches=new Set([e.requestKey]):c.spawnedRuntimePrefetches.add(e.requestKey),2;let f=(0,h.readOrCreateSegmentCacheEntry)(b,c.fetchStrategy,d,e);if(I(b,c,d,f,c.key,e),null!==e.slots){if(!A(c))return 0;for(let f in e.slots)if(0===a(b,c,d,e.slots[f]))return 0}return 2}(b,c,d,f)))return 0}return 2}(a,b,c,b.treeAtTimeOfPrefetch,i))return 0;let f=b.spawnedRuntimePrefetches;if(null!==f){let d=new Map;G(a,b,c,d,k.FetchStrategy.PPRRuntime);let e=function a(b,c,d,e,f,g){if(f.has(e.requestKey))return H(b,c,d,e,!1,g,k.FetchStrategy.PPRRuntime);let h={},i=e.slots;if(null!==i)for(let e in i){let j=i[e];h[e]=a(b,c,d,j,f,g)}return[e.segment,h,null,null]}(a,b,c,i,f,d);d.size>0&&B((0,h.fetchSegmentPrefetchesUsingDynamicRequest)(b,c,k.FetchStrategy.PPRRuntime,e,d))}return 2}case k.FetchStrategy.Full:case k.FetchStrategy.PPRRuntime:case k.FetchStrategy.LoadingBoundary:{let d=new Map;G(a,b,c,d,j);let e=function a(b,c,d,e,g,i,j){let l=e[1],m=g.slots,n={};if(null!==m)for(let e in m){let g=m[e],o=g.segment,p=l[e],q=p?.[0];if(void 0!==q&&N(d,o,q)){let f=a(b,c,d,p,g,i,j);n[e]=f}else switch(j){case k.FetchStrategy.LoadingBoundary:{let a=g.hasLoadingBoundary!==f.HasLoadingBoundary.SubtreeHasNoLoadingBoundary?function a(b,c,d,e,g,i){let j=null===g?"inside-shared-layout":null,l=(0,h.readOrCreateSegmentCacheEntry)(b,c.fetchStrategy,d,e);switch(l.status){case h.EntryStatus.Empty:i.set(e.requestKey,(0,h.upgradeToPendingSegment)(l,k.FetchStrategy.LoadingBoundary)),"refetch"!==g&&(j=g="refetch");break;case h.EntryStatus.Fulfilled:if(e.hasLoadingBoundary===f.HasLoadingBoundary.SegmentHasLoadingBoundary)return(0,h.convertRouteTreeToFlightRouterState)(e);case h.EntryStatus.Pending:case h.EntryStatus.Rejected:}let m={};if(null!==e.slots)for(let f in e.slots){let h=e.slots[f];m[f]=a(b,c,d,h,g,i)}return[e.segment,m,null,j,e.isRootLayout]}(b,c,d,g,null,i):(0,h.convertRouteTreeToFlightRouterState)(g);n[e]=a;break}case k.FetchStrategy.PPRRuntime:{let a=H(b,c,d,g,!1,i,j);n[e]=a;break}case k.FetchStrategy.Full:{let a=H(b,c,d,g,!1,i,j);n[e]=a}}}return[g.segment,n,null,null,g.isRootLayout]}(a,b,c,b.treeAtTimeOfPrefetch,i,d,j);return d.size>0&&B((0,h.fetchSegmentPrefetchesUsingDynamicRequest)(b,c,j,e,d)),2}}}}return 2}(a,b,d);if(0!==e&&""!==c.search){let d=new URL(c.pathname,location.origin),e=(0,j.createCacheKey)(d.href,c.nextUrl),f=(0,h.readOrCreateRouteCacheEntry)(a,b,e);switch(f.status){case h.EntryStatus.Empty:F(b)&&(f.status=h.EntryStatus.Pending,B((0,h.fetchRouteOnCacheMiss)(f,b,e)));case h.EntryStatus.Pending:case h.EntryStatus.Fulfilled:case h.EntryStatus.Rejected:}}return e}(a,b),d=b.hasBackgroundWork;switch(b.hasBackgroundWork=!1,b.spawnedRuntimePrefetches=null,c){case 0:return;case 1:R(n),b=Q(n);continue;case 2:1===b.phase?(b.phase=0,S(n,b)):d?(b.priority=k.PrefetchPriority.Background,S(n,b)):R(n),b=Q(n);continue}}}function F(a){return a.priority===k.PrefetchPriority.Background||(a.hasBackgroundWork=!0,!1)}function G(a,b,c,d,e){H(a,b,c,c.metadata,!1,d,e===k.FetchStrategy.LoadingBoundary?k.FetchStrategy.Full:e)}function H(a,b,c,d,e,f,g){let i=(0,h.readOrCreateSegmentCacheEntry)(a,g,c,d),j=null;switch(i.status){case h.EntryStatus.Empty:j=(0,h.upgradeToPendingSegment)(i,g);break;case h.EntryStatus.Fulfilled:i.isPartial&&(0,h.canNewFetchStrategyProvideMoreContent)(i.fetchStrategy,g)&&(j=K(a,c,d,g));break;case h.EntryStatus.Pending:case h.EntryStatus.Rejected:(0,h.canNewFetchStrategyProvideMoreContent)(i.fetchStrategy,g)&&(j=K(a,c,d,g))}let k={};if(null!==d.slots)for(let h in d.slots){let i=d.slots[h];k[h]=H(a,b,c,i,e||null!==j,f,g)}null!==j&&f.set(d.requestKey,j);let l=e||null===j?null:"refetch";return[d.segment,k,null,l,d.isRootLayout]}function I(a,b,c,d,e,f){switch(d.status){case h.EntryStatus.Empty:B((0,h.fetchSegmentOnCacheMiss)(c,(0,h.upgradeToPendingSegment)(d,k.FetchStrategy.PPR),e,f));break;case h.EntryStatus.Pending:switch(d.fetchStrategy){case k.FetchStrategy.PPR:case k.FetchStrategy.PPRRuntime:case k.FetchStrategy.Full:break;case k.FetchStrategy.LoadingBoundary:F(b)&&J(a,c,e,f);break;default:d.fetchStrategy}break;case h.EntryStatus.Rejected:switch(d.fetchStrategy){case k.FetchStrategy.PPR:case k.FetchStrategy.PPRRuntime:case k.FetchStrategy.Full:break;case k.FetchStrategy.LoadingBoundary:J(a,c,e,f);break;default:d.fetchStrategy}case h.EntryStatus.Fulfilled:}}function J(a,b,c,d){let e=(0,h.readOrCreateRevalidatingSegmentEntry)(a,k.FetchStrategy.PPR,b,d);switch(e.status){case h.EntryStatus.Empty:M(B((0,h.fetchSegmentOnCacheMiss)(b,(0,h.upgradeToPendingSegment)(e,k.FetchStrategy.PPR),c,d)),(0,i.getSegmentVaryPathForRequest)(k.FetchStrategy.PPR,d));case h.EntryStatus.Pending:case h.EntryStatus.Fulfilled:case h.EntryStatus.Rejected:}}function K(a,b,c,d){let e=(0,h.readOrCreateRevalidatingSegmentEntry)(a,d,b,c);if(e.status===h.EntryStatus.Empty){let a=(0,h.upgradeToPendingSegment)(e,d);return M((0,h.waitForSegmentCacheEntry)(a),(0,i.getSegmentVaryPathForRequest)(d,c)),a}if((0,h.canNewFetchStrategyProvideMoreContent)(e.fetchStrategy,d)){let a=(0,h.overwriteRevalidatingSegmentCacheEntry)(d,b,c),e=(0,h.upgradeToPendingSegment)(a,d);return M((0,h.waitForSegmentCacheEntry)(e),(0,i.getSegmentVaryPathForRequest)(d,c)),e}switch(e.status){case h.EntryStatus.Pending:case h.EntryStatus.Fulfilled:case h.EntryStatus.Rejected:default:return null}}let L=()=>{};function M(a,b){a.then(a=>{null!==a&&(0,h.upsertSegmentEntry)(Date.now(),b,a)},L)}function N(a,b,c){return c===l.PAGE_SEGMENT_KEY?b===(0,l.addSearchParamsIfPageSegment)(l.PAGE_SEGMENT_KEY,Object.fromEntries(new URLSearchParams(a.renderedSearch))):(0,g.matchSegment)(c,b)}function O(a,b){let c=b.priority-a.priority;if(0!==c)return c;let d=b.phase-a.phase;return 0!==d?d:b.sortId-a.sortId}function P(a,b){let c=a.length;a.push(b),b._heapIndex=c,T(a,b,c)}function Q(a){return 0===a.length?null:a[0]}function R(a){if(0===a.length)return null;let b=a[0];b._heapIndex=-1;let c=a.pop();return c!==b&&(a[0]=c,c._heapIndex=0,U(a,c,0)),b}function S(a,b){let c=b._heapIndex;-1!==c&&(0===c?U(a,b,0):O(a[c-1>>>1],b)>0?T(a,b,c):U(a,b,c))}function T(a,b,c){let d=c;for(;d>0;){let c=d-1>>>1,e=a[c];if(!(O(e,b)>0))return;a[c]=b,b._heapIndex=c,a[d]=e,e._heapIndex=d,d=c}}function U(a,b,c){let d=c,e=a.length,f=e>>>1;for(;d<f;){let c=(d+1)*2-1,f=a[c],g=c+1,h=a[g];if(0>O(f,b))g<e&&0>O(h,f)?(a[d]=h,h._heapIndex=d,a[g]=b,b._heapIndex=g,d=g):(a[d]=f,f._heapIndex=d,a[c]=b,b._heapIndex=c,d=c);else{if(!(g<e&&0>O(h,b)))return;a[d]=h,h._heapIndex=d,a[g]=b,b._heapIndex=g,d=g}}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},16441,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={IDLE_LINK_STATUS:function(){return l},PENDING_LINK_STATUS:function(){return k},mountFormInstance:function(){return t},mountLinkInstance:function(){return s},onLinkVisibilityChanged:function(){return v},onNavigationIntent:function(){return w},pingVisibleLinks:function(){return y},setLinkForCurrentNavigation:function(){return m},unmountLinkForCurrentNavigation:function(){return n},unmountPrefetchableInstance:function(){return u}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(10846),g=a.r(92702),h=a.r(42297),i=a.r(72131),j=null,k={pending:!0},l={pending:!1};function m(a){(0,i.startTransition)(()=>{j?.setOptimisticLinkStatus(l),a?.setOptimisticLinkStatus(k),j=a})}function n(a){j===a&&(j=null)}let o="function"==typeof WeakMap?new WeakMap:new Map,p=new Set,q="function"==typeof IntersectionObserver?new IntersectionObserver(function(a){for(let b of a){let a=b.intersectionRatio>0;v(b.target,a)}},{rootMargin:"200px"}):null;function r(a,b){void 0!==o.get(a)&&u(a),o.set(a,b),null!==q&&q.observe(a)}function s(a,b,c,d,e,f){if(e){let b=null;if(null!==b){let e={router:c,fetchStrategy:d,isVisible:!1,prefetchTask:null,prefetchHref:b.href,setOptimisticLinkStatus:f};return r(a,e),e}}return{router:c,fetchStrategy:d,isVisible:!1,prefetchTask:null,prefetchHref:null,setOptimisticLinkStatus:f}}function t(a,b,c,d){let e=null;null===e||r(a,{router:c,fetchStrategy:d,isVisible:!1,prefetchTask:null,prefetchHref:e.href,setOptimisticLinkStatus:null})}function u(a){let b=o.get(a);if(void 0!==b){o.delete(a),p.delete(b);let c=b.prefetchTask;null!==c&&(0,h.cancelPrefetchTask)(c)}null!==q&&q.unobserve(a)}function v(a,b){let c=o.get(a);void 0!==c&&(c.isVisible=b,b?p.add(c):p.delete(c),x(c,f.PrefetchPriority.Default))}function w(a,b){let c=o.get(a);void 0!==c&&void 0!==c&&x(c,f.PrefetchPriority.Intent)}function x(a,b){}function y(a,b){for(let c of p){let d=c.prefetchTask;if(null!==d&&!(0,h.isPrefetchTaskDirty)(d,a,b))continue;null!==d&&(0,h.cancelPrefetchTask)(d);let e=(0,g.createCacheKey)(c.prefetchHref,a);c.prefetchTask=(0,h.schedulePrefetchTask)(e,b,c.fetchStrategy,f.PrefetchPriority.Default,null)}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},11679,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"pathHasPrefix",{enumerable:!0,get:function(){return e}});let d=a.r(8868);function e(a,b){if("string"!=typeof a)return!1;let{pathname:c}=(0,d.parsePath)(a);return c===b||c.startsWith(b+"/")}},78897,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"hasBasePath",{enumerable:!0,get:function(){return e}});let d=a.r(11679);function e(a){return(0,d.pathHasPrefix)(a,"")}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},11762,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"isLocalURL",{enumerable:!0,get:function(){return f}});let d=a.r(46272),e=a.r(78897);function f(a){if(!(0,d.isAbsoluteUrl)(a))return!0;try{let b=(0,d.getLocationOrigin)(),c=new URL(a,b);return c.origin===b&&(0,e.hasBasePath)(c.pathname)}catch(a){return!1}}},9833,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"errorOnce",{enumerable:!0,get:function(){return d}});let d=a=>{}},38246,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return q},useLinkStatus:function(){return s}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(46058),g=a.r(87924),h=f._(a.r(72131)),i=a.r(43087),j=a.r(9270),k=a.r(8591),l=a.r(46272),m=a.r(38243);a.r(92434);let n=a.r(16441);a.r(11762);let o=a.r(10846);function p(a){return"string"==typeof a?a:(0,i.formatUrl)(a)}function q(a){var b;let c,d,e,[f,i]=(0,h.useOptimistic)(n.IDLE_LINK_STATUS),q=(0,h.useRef)(null),{href:s,as:t,children:u,prefetch:v=null,passHref:w,replace:x,shallow:y,scroll:z,onClick:A,onMouseEnter:B,onTouchStart:C,legacyBehavior:D=!1,onNavigate:E,ref:F,unstable_dynamicOnHover:G,...H}=a;c=u,D&&("string"==typeof c||"number"==typeof c)&&(c=(0,g.jsx)("a",{children:c}));let I=h.default.useContext(j.AppRouterContext),J=!1!==v,K=!1!==v?null===(b=v)||"auto"===b?o.FetchStrategy.PPR:o.FetchStrategy.Full:o.FetchStrategy.PPR,{href:L,as:M}=h.default.useMemo(()=>{let a=p(s);return{href:a,as:t?p(t):a}},[s,t]);if(D){if(c?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});d=h.default.Children.only(c)}let N=D?d&&"object"==typeof d&&d.ref:F,O=h.default.useCallback(a=>(null!==I&&(q.current=(0,n.mountLinkInstance)(a,L,I,K,J,i)),()=>{q.current&&((0,n.unmountLinkForCurrentNavigation)(q.current),q.current=null),(0,n.unmountPrefetchableInstance)(a)}),[J,L,I,K,i]),P={ref:(0,k.useMergedRef)(O,N),onClick(a){if((D||"function"!=typeof A||A(a),D&&d.props&&"function"==typeof d.props.onClick&&d.props.onClick(a),I)&&!a.defaultPrevented);},onMouseEnter(a){D||"function"!=typeof B||B(a),D&&d.props&&"function"==typeof d.props.onMouseEnter&&d.props.onMouseEnter(a),I&&J&&(0,n.onNavigationIntent)(a.currentTarget,!0===G)},onTouchStart:function(a){D||"function"!=typeof C||C(a),D&&d.props&&"function"==typeof d.props.onTouchStart&&d.props.onTouchStart(a),I&&J&&(0,n.onNavigationIntent)(a.currentTarget,!0===G)}};return(0,l.isAbsoluteUrl)(M)?P.href=M:D&&!w&&("a"!==d.type||"href"in d.props)||(P.href=(0,m.addBasePath)(M)),e=D?h.default.cloneElement(d,P):(0,g.jsx)("a",{...H,...P,children:c}),(0,g.jsx)(r.Provider,{value:f,children:e})}a.r(9833);let r=(0,h.createContext)(n.IDLE_LINK_STATUS),s=()=>(0,h.useContext)(r);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},70106,a=>{"use strict";var b=a.i(72131);let c=a=>{let b=a.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,b,c)=>c?c.toUpperCase():b.toLowerCase());return b.charAt(0).toUpperCase()+b.slice(1)},d=(...a)=>a.filter((a,b,c)=>!!a&&""!==a.trim()&&c.indexOf(a)===b).join(" ").trim();var e={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let f=(0,b.forwardRef)(({color:a="currentColor",size:c=24,strokeWidth:f=2,absoluteStrokeWidth:g,className:h="",children:i,iconNode:j,...k},l)=>(0,b.createElement)("svg",{ref:l,...e,width:c,height:c,stroke:a,strokeWidth:g?24*Number(f)/Number(c):f,className:d("lucide",h),...!i&&!(a=>{for(let b in a)if(b.startsWith("aria-")||"role"===b||"title"===b)return!0})(k)&&{"aria-hidden":"true"},...k},[...j.map(([a,c])=>(0,b.createElement)(a,c)),...Array.isArray(i)?i:[i]])),g=(a,e)=>{let g=(0,b.forwardRef)(({className:g,...h},i)=>(0,b.createElement)(f,{ref:i,iconNode:e,className:d(`lucide-${c(a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${a}`,g),...h}));return g.displayName=c(a),g};a.s(["default",()=>g],70106)},41997,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={BailoutToCSRError:function(){return g},isBailoutToCSRError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="BAILOUT_TO_CLIENT_SIDE_RENDERING";class g extends Error{constructor(a){super(`Bail out to client-side rendering: ${a}`),this.reason=a,this.digest=f}}function h(a){return"object"==typeof a&&null!==a&&"digest"in a&&a.digest===f}},57997,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={UnrecognizedActionError:function(){return f},unstable_isUnrecognizedActionError:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});class f extends Error{constructor(...a){super(...a),this.name="UnrecognizedActionError"}}function g(a){return!!(a&&"object"==typeof a&&a instanceof f)}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},75718,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"ReadonlyURLSearchParams",{enumerable:!0,get:function(){return e}});class d extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class e extends URLSearchParams{append(){throw new d}delete(){throw new d}set(){throw new d}sort(){throw new d}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},15128,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"RedirectStatusCode",{enumerable:!0,get:function(){return e}});var d,e=((d={})[d.SeeOther=303]="SeeOther",d[d.TemporaryRedirect=307]="TemporaryRedirect",d[d.PermanentRedirect=308]="PermanentRedirect",d);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},11026,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,e={REDIRECT_ERROR_CODE:function(){return h},RedirectType:function(){return i},isRedirectError:function(){return j}};for(var f in e)Object.defineProperty(c,f,{enumerable:!0,get:e[f]});let g=a.r(15128),h="NEXT_REDIRECT";var i=((d={}).push="push",d.replace="replace",d);function j(a){if("object"!=typeof a||null===a||!("digest"in a)||"string"!=typeof a.digest)return!1;let b=a.digest.split(";"),[c,d]=b,e=b.slice(2,-2).join(";"),f=Number(b.at(-2));return c===h&&("replace"===d||"push"===d)&&"string"==typeof e&&!isNaN(f)&&f in g.RedirectStatusCode}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},22099,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={getRedirectError:function(){return i},getRedirectStatusCodeFromError:function(){return n},getRedirectTypeFromError:function(){return m},getURLFromRedirectError:function(){return l},permanentRedirect:function(){return k},redirect:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(15128),g=a.r(11026),h=a.r(20635).actionAsyncStorage;function i(a,b,c=f.RedirectStatusCode.TemporaryRedirect){let d=Object.defineProperty(Error(g.REDIRECT_ERROR_CODE),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return d.digest=`${g.REDIRECT_ERROR_CODE};${b};${a};${c};`,d}function j(a,b){throw i(a,b??=h?.getStore()?.isAction?g.RedirectType.push:g.RedirectType.replace,f.RedirectStatusCode.TemporaryRedirect)}function k(a,b=g.RedirectType.replace){throw i(a,b,f.RedirectStatusCode.PermanentRedirect)}function l(a){return(0,g.isRedirectError)(a)?a.digest.split(";").slice(2,-2).join(";"):null}function m(a){if(!(0,g.isRedirectError)(a))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return a.digest.split(";",2)[1]}function n(a){if(!(0,g.isRedirectError)(a))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return Number(a.digest.split(";").at(-2))}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},8535,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={HTTPAccessErrorStatus:function(){return f},HTTP_ERROR_FALLBACK_ERROR_CODE:function(){return h},getAccessFallbackErrorTypeByStatus:function(){return k},getAccessFallbackHTTPStatus:function(){return j},isHTTPAccessFallbackError:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f={NOT_FOUND:404,FORBIDDEN:403,UNAUTHORIZED:401},g=new Set(Object.values(f)),h="NEXT_HTTP_ERROR_FALLBACK";function i(a){if("object"!=typeof a||null===a||!("digest"in a)||"string"!=typeof a.digest)return!1;let[b,c]=a.digest.split(";");return b===h&&g.has(Number(c))}function j(a){return Number(a.digest.split(";")[1])}function k(a){switch(a){case 401:return"unauthorized";case 403:return"forbidden";case 404:return"not-found";default:return}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},28102,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"notFound",{enumerable:!0,get:function(){return f}});let d=a.r(8535),e=`${d.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;function f(){let a=Object.defineProperty(Error(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});throw a.digest=e,a}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},64177,(a,b,c)=>{"use strict";function d(){throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E488",enumerable:!1,configurable:!0})}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"forbidden",{enumerable:!0,get:function(){return d}}),a.r(8535).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},88213,(a,b,c)=>{"use strict";function d(){throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E411",enumerable:!1,configurable:!0})}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unauthorized",{enumerable:!0,get:function(){return d}}),a.r(8535).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},35710,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={isHangingPromiseRejectionError:function(){return f},makeDevtoolsIOAwarePromise:function(){return l},makeHangingPromise:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(a){return"object"==typeof a&&null!==a&&"digest"in a&&a.digest===g}let g="HANGING_PROMISE_REJECTION";class h extends Error{constructor(a,b){super(`During prerendering, ${b} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${b} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${a}".`),this.route=a,this.expression=b,this.digest=g}}let i=new WeakMap;function j(a,b,c){if(a.aborted)return Promise.reject(new h(b,c));{let d=new Promise((d,e)=>{let f=e.bind(null,new h(b,c)),g=i.get(a);if(g)g.push(f);else{let b=[f];i.set(a,b),a.addEventListener("abort",()=>{for(let a=0;a<b.length;a++)b[a]()},{once:!0})}});return d.catch(k),d}}function k(){}function l(a,b,c){return b.stagedRendering?b.stagedRendering.delayUntilStage(c,void 0,a):new Promise(b=>{setTimeout(()=>{b(a)},0)})}},31101,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"isPostpone",{enumerable:!0,get:function(){return e}});let d=Symbol.for("react.postpone");function e(a){return"object"==typeof a&&null!==a&&a.$$typeof===d}},77747,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"isNextRouterError",{enumerable:!0,get:function(){return f}});let d=a.r(8535),e=a.r(11026);function f(a){return(0,e.isRedirectError)(a)||(0,d.isHTTPAccessFallbackError)(a)}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},3326,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={DynamicServerError:function(){return g},isDynamicServerError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="DYNAMIC_SERVER_USAGE";class g extends Error{constructor(a){super(`Dynamic server usage: ${a}`),this.description=a,this.digest=f}}function h(a){return"object"==typeof a&&null!==a&&"digest"in a&&"string"==typeof a.digest&&a.digest===f}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},99392,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={StaticGenBailoutError:function(){return g},isStaticGenBailoutError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="NEXT_STATIC_GEN_BAILOUT";class g extends Error{constructor(...a){super(...a),this.code=f}}function h(a){return"object"==typeof a&&null!==a&&"code"in a&&a.code===f}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},83590,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={METADATA_BOUNDARY_NAME:function(){return f},OUTLET_BOUNDARY_NAME:function(){return h},ROOT_LAYOUT_BOUNDARY_NAME:function(){return i},VIEWPORT_BOUNDARY_NAME:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="__next_metadata_boundary__",g="__next_viewport_boundary__",h="__next_outlet_boundary__",i="__next_root_layout_boundary__"},76383,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={atLeastOneTask:function(){return h},scheduleImmediate:function(){return g},scheduleOnNextTick:function(){return f},waitAtLeastOneReactRenderTask:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a=>{Promise.resolve().then(()=>{process.nextTick(a)})},g=a=>{setImmediate(a)};function h(){return new Promise(a=>g(a))}function i(){return new Promise(a=>setImmediate(a))}},88644,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"InvariantError",{enumerable:!0,get:function(){return d}});class d extends Error{constructor(a,b){super(`Invariant: ${a.endsWith(".")?a:a+"."} This is a bug in Next.js.`,b),this.name="InvariantError"}}},54110,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,e,f={Postpone:function(){return B},PreludeState:function(){return $},abortAndThrowOnSynchronousRequestDataAccess:function(){return A},abortOnSynchronousPlatformIOAccess:function(){return z},accessedDynamicData:function(){return J},annotateDynamicAccess:function(){return O},consumeDynamicAccess:function(){return K},createDynamicTrackingState:function(){return s},createDynamicValidationState:function(){return t},createHangingInputAbortSignal:function(){return N},createRenderInBrowserAbortSignal:function(){return M},delayUntilRuntimeStage:function(){return ac},formatDynamicAPIAccesses:function(){return L},getFirstDynamicReason:function(){return u},getStaticShellDisallowedDynamicReasons:function(){return ab},isDynamicPostpone:function(){return E},isPrerenderInterruptedError:function(){return I},logDisallowedDynamicError:function(){return _},markCurrentScopeAsDynamic:function(){return v},postponeWithTracking:function(){return C},throwIfDisallowedDynamic:function(){return aa},throwToInterruptStaticGeneration:function(){return w},trackAllowedDynamicAccess:function(){return W},trackDynamicDataInDynamicRender:function(){return x},trackDynamicHoleInRuntimeShell:function(){return X},trackDynamicHoleInStaticShell:function(){return Y},useDynamicRouteParams:function(){return P},useDynamicSearchParams:function(){return Q}};for(var g in f)Object.defineProperty(c,g,{enumerable:!0,get:f[g]});let h=(d=a.r(72131))&&d.__esModule?d:{default:d},i=a.r(3326),j=a.r(99392),k=a.r(32319),l=a.r(56704),m=a.r(35710),n=a.r(83590),o=a.r(76383),p=a.r(41997),q=a.r(88644),r="function"==typeof h.default.unstable_postpone;function s(a){return{isDebugDynamicAccesses:a,dynamicAccesses:[],syncDynamicErrorWithStack:null}}function t(){return{hasSuspenseAboveBody:!1,hasDynamicMetadata:!1,dynamicMetadata:null,hasDynamicViewport:!1,hasAllowedDynamic:!1,dynamicErrors:[]}}function u(a){var b;return null==(b=a.dynamicAccesses[0])?void 0:b.expression}function v(a,b,c){if(b)switch(b.type){case"cache":case"unstable-cache":case"private-cache":return}if(!a.forceDynamic&&!a.forceStatic){if(a.dynamicShouldError)throw Object.defineProperty(new j.StaticGenBailoutError(`Route ${a.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${c}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E553",enumerable:!1,configurable:!0});if(b)switch(b.type){case"prerender-ppr":return C(a.route,c,b.dynamicTracking);case"prerender-legacy":b.revalidate=0;let d=Object.defineProperty(new i.DynamicServerError(`Route ${a.route} couldn't be rendered statically because it used ${c}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E550",enumerable:!1,configurable:!0});throw a.dynamicUsageDescription=c,a.dynamicUsageStack=d.stack,d}}}function w(a,b,c){let d=Object.defineProperty(new i.DynamicServerError(`Route ${b.route} couldn't be rendered statically because it used \`${a}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E558",enumerable:!1,configurable:!0});throw c.revalidate=0,b.dynamicUsageDescription=a,b.dynamicUsageStack=d.stack,d}function x(a){switch(a.type){case"cache":case"unstable-cache":case"private-cache":return}}function y(a,b,c){let d=H(`Route ${a} needs to bail out of prerendering at this point because it used ${b}.`);c.controller.abort(d);let e=c.dynamicTracking;e&&e.dynamicAccesses.push({stack:e.isDebugDynamicAccesses?Error().stack:void 0,expression:b})}function z(a,b,c,d){let e=d.dynamicTracking;y(a,b,d),e&&null===e.syncDynamicErrorWithStack&&(e.syncDynamicErrorWithStack=c)}function A(a,b,c,d){if(!1===d.controller.signal.aborted){y(a,b,d);let e=d.dynamicTracking;e&&null===e.syncDynamicErrorWithStack&&(e.syncDynamicErrorWithStack=c)}throw H(`Route ${a} needs to bail out of prerendering at this point because it used ${b}.`)}function B({reason:a,route:b}){let c=k.workUnitAsyncStorage.getStore();C(b,a,c&&"prerender-ppr"===c.type?c.dynamicTracking:null)}function C(a,b,c){(function(){if(!r)throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E224",enumerable:!1,configurable:!0})})(),c&&c.dynamicAccesses.push({stack:c.isDebugDynamicAccesses?Error().stack:void 0,expression:b}),h.default.unstable_postpone(D(a,b))}function D(a,b){return`Route ${a} needs to bail out of prerendering at this point because it used ${b}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`}function E(a){return"object"==typeof a&&null!==a&&"string"==typeof a.message&&F(a.message)}function F(a){return a.includes("needs to bail out of prerendering at this point because it used")&&a.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")}if(!1===F(D("%%%","^^^")))throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E296",enumerable:!1,configurable:!0});let G="NEXT_PRERENDER_INTERRUPTED";function H(a){let b=Object.defineProperty(Error(a),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return b.digest=G,b}function I(a){return"object"==typeof a&&null!==a&&a.digest===G&&"name"in a&&"message"in a&&a instanceof Error}function J(a){return a.length>0}function K(a,b){return a.dynamicAccesses.push(...b.dynamicAccesses),a.dynamicAccesses}function L(a){return a.filter(a=>"string"==typeof a.stack&&a.stack.length>0).map(({expression:a,stack:b})=>(b=b.split("\n").slice(4).filter(a=>!(a.includes("node_modules/next/")||a.includes(" (<anonymous>)")||a.includes(" (node:"))).join("\n"),`Dynamic API Usage Debug - ${a}:
${b}`))}function M(){let a=new AbortController;return a.abort(Object.defineProperty(new p.BailoutToCSRError("Render in Browser"),"__NEXT_ERROR_CODE",{value:"E721",enumerable:!1,configurable:!0})),a.signal}function N(a){switch(a.type){case"prerender":case"prerender-runtime":let b=new AbortController;if(a.cacheSignal)a.cacheSignal.inputReady().then(()=>{b.abort()});else{let c=(0,k.getRuntimeStagePromise)(a);c?c.then(()=>(0,o.scheduleOnNextTick)(()=>b.abort())):(0,o.scheduleOnNextTick)(()=>b.abort())}return b.signal;case"prerender-client":case"prerender-ppr":case"prerender-legacy":case"request":case"cache":case"private-cache":case"unstable-cache":return}}function O(a,b){let c=b.dynamicTracking;c&&c.dynamicAccesses.push({stack:c.isDebugDynamicAccesses?Error().stack:void 0,expression:a})}function P(a){let b=l.workAsyncStorage.getStore(),c=k.workUnitAsyncStorage.getStore();if(b&&c)switch(c.type){case"prerender-client":case"prerender":{let d=c.fallbackRouteParams;d&&d.size>0&&h.default.use((0,m.makeHangingPromise)(c.renderSignal,b.route,a));break}case"prerender-ppr":{let d=c.fallbackRouteParams;if(d&&d.size>0)return C(b.route,a,c.dynamicTracking);break}case"prerender-runtime":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called during a runtime prerender. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E771",enumerable:!1,configurable:!0});case"cache":case"private-cache":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called inside a cache scope. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E745",enumerable:!1,configurable:!0})}}function Q(a){let b=l.workAsyncStorage.getStore(),c=k.workUnitAsyncStorage.getStore();if(b)switch(!c&&(0,k.throwForMissingRequestStore)(a),c.type){case"prerender-client":h.default.use((0,m.makeHangingPromise)(c.renderSignal,b.route,a));break;case"prerender-legacy":case"prerender-ppr":if(b.forceStatic)return;throw Object.defineProperty(new p.BailoutToCSRError(a),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});case"prerender":case"prerender-runtime":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called from a Server Component. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E795",enumerable:!1,configurable:!0});case"cache":case"unstable-cache":case"private-cache":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called inside a cache scope. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E745",enumerable:!1,configurable:!0});case"request":return}}let R=/\n\s+at Suspense \(<anonymous>\)/,S=RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${n.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`),T=RegExp(`\\n\\s+at ${n.METADATA_BOUNDARY_NAME}[\\n\\s]`),U=RegExp(`\\n\\s+at ${n.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),V=RegExp(`\\n\\s+at ${n.OUTLET_BOUNDARY_NAME}[\\n\\s]`);function W(a,b,c,d){if(!V.test(b)){if(T.test(b)){c.hasDynamicMetadata=!0;return}if(U.test(b)){c.hasDynamicViewport=!0;return}if(S.test(b)){c.hasAllowedDynamic=!0,c.hasSuspenseAboveBody=!0;return}else if(R.test(b)){c.hasAllowedDynamic=!0;return}else{if(d.syncDynamicErrorWithStack)return void c.dynamicErrors.push(d.syncDynamicErrorWithStack);let e=Z(`Route "${a.route}": Uncached data was accessed outside of <Suspense>. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,b);return void c.dynamicErrors.push(e)}}}function X(a,b,c,d){if(!V.test(b)){if(T.test(b)){c.dynamicMetadata=Z(`Route "${a.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`,b);return}if(U.test(b)){let d=Z(`Route "${a.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`,b);c.dynamicErrors.push(d);return}if(S.test(b)){c.hasAllowedDynamic=!0,c.hasSuspenseAboveBody=!0;return}else if(R.test(b)){c.hasAllowedDynamic=!0;return}else{if(d.syncDynamicErrorWithStack)return void c.dynamicErrors.push(d.syncDynamicErrorWithStack);let e=Z(`Route "${a.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,b);return void c.dynamicErrors.push(e)}}}function Y(a,b,c,d){if(!V.test(b)){if(T.test(b)){c.dynamicMetadata=Z(`Route "${a.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`,b);return}if(U.test(b)){let d=Z(`Route "${a.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`,b);c.dynamicErrors.push(d);return}if(S.test(b)){c.hasAllowedDynamic=!0,c.hasSuspenseAboveBody=!0;return}else if(R.test(b)){c.hasAllowedDynamic=!0;return}else{if(d.syncDynamicErrorWithStack)return void c.dynamicErrors.push(d.syncDynamicErrorWithStack);let e=Z(`Route "${a.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,b);return void c.dynamicErrors.push(e)}}}function Z(a,b){let c=Object.defineProperty(Error(a),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return c.stack=c.name+": "+a+b,c}var $=((e={})[e.Full=0]="Full",e[e.Empty=1]="Empty",e[e.Errored=2]="Errored",e);function _(a,b){console.error(b),a.dev||(a.hasReadableErrorStacks?console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${a.route}" in your browser to investigate the error.`):console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${a.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`))}function aa(a,b,c,d){if(d.syncDynamicErrorWithStack)throw _(a,d.syncDynamicErrorWithStack),new j.StaticGenBailoutError;if(0!==b){if(c.hasSuspenseAboveBody)return;let d=c.dynamicErrors;if(d.length>0){for(let b=0;b<d.length;b++)_(a,d[b]);throw new j.StaticGenBailoutError}if(c.hasDynamicViewport)throw console.error(`Route "${a.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`),new j.StaticGenBailoutError;if(1===b)throw console.error(`Route "${a.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`),new j.StaticGenBailoutError}else if(!1===c.hasAllowedDynamic&&c.hasDynamicMetadata)throw console.error(`Route "${a.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`),new j.StaticGenBailoutError}function ab(a,b,c){if(c.hasSuspenseAboveBody)return[];if(0!==b){let d=c.dynamicErrors;if(d.length>0)return d;if(1===b)return[Object.defineProperty(new q.InvariantError(`Route "${a.route}" did not produce a static shell and Next.js was unable to determine a reason.`),"__NEXT_ERROR_CODE",{value:"E936",enumerable:!1,configurable:!0})]}else if(!1===c.hasAllowedDynamic&&0===c.dynamicErrors.length&&c.dynamicMetadata)return[c.dynamicMetadata];return[]}function ac(a,b){return a.runtimeStagePromise?a.runtimeStagePromise.then(()=>b):b}},44753,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unstable_rethrow",{enumerable:!0,get:function(){return function a(b){if((0,g.isNextRouterError)(b)||(0,f.isBailoutToCSRError)(b)||(0,i.isDynamicServerError)(b)||(0,h.isDynamicPostpone)(b)||(0,e.isPostpone)(b)||(0,d.isHangingPromiseRejectionError)(b)||(0,h.isPrerenderInterruptedError)(b))throw b;b instanceof Error&&"cause"in b&&a(b.cause)}}});let d=a.r(35710),e=a.r(31101),f=a.r(41997),g=a.r(77747),h=a.r(54110),i=a.r(3326);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},47083,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unstable_rethrow",{enumerable:!0,get:function(){return d}});let d=a.r(44753).unstable_rethrow;("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},21066,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={ReadonlyURLSearchParams:function(){return f.ReadonlyURLSearchParams},RedirectType:function(){return h.RedirectType},forbidden:function(){return j.forbidden},notFound:function(){return i.notFound},permanentRedirect:function(){return g.permanentRedirect},redirect:function(){return g.redirect},unauthorized:function(){return k.unauthorized},unstable_isUnrecognizedActionError:function(){return m},unstable_rethrow:function(){return l.unstable_rethrow}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(75718),g=a.r(22099),h=a.r(11026),i=a.r(28102),j=a.r(64177),k=a.r(88213),l=a.r(47083);function m(){throw Object.defineProperty(Error("`unstable_isUnrecognizedActionError` can only be used on the client."),"__NEXT_ERROR_CODE",{value:"E776",enumerable:!1,configurable:!0})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},74137,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={ReadonlyURLSearchParams:function(){return h.ReadonlyURLSearchParams},RedirectType:function(){return l.RedirectType},ServerInsertedHTMLContext:function(){return j.ServerInsertedHTMLContext},forbidden:function(){return l.forbidden},notFound:function(){return l.notFound},permanentRedirect:function(){return l.permanentRedirect},redirect:function(){return l.redirect},unauthorized:function(){return l.unauthorized},unstable_isUnrecognizedActionError:function(){return k.unstable_isUnrecognizedActionError},unstable_rethrow:function(){return l.unstable_rethrow},useParams:function(){return r},usePathname:function(){return p},useRouter:function(){return q},useSearchParams:function(){return o},useSelectedLayoutSegment:function(){return t},useSelectedLayoutSegments:function(){return s},useServerInsertedHTML:function(){return j.useServerInsertedHTML}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(46058)._(a.r(72131)),g=a.r(9270),h=a.r(36313),i=a.r(39118),j=a.r(18341),k=a.r(57997),l=a.r(21066),m=a.r(54110).useDynamicRouteParams,n=a.r(54110).useDynamicSearchParams;function o(){n?.("useSearchParams()");let a=(0,f.useContext)(h.SearchParamsContext);return(0,f.useMemo)(()=>a?new h.ReadonlyURLSearchParams(a):null,[a])}function p(){return m?.("usePathname()"),(0,f.useContext)(h.PathnameContext)}function q(){let a=(0,f.useContext)(g.AppRouterContext);if(null===a)throw Object.defineProperty(Error("invariant expected app router to be mounted"),"__NEXT_ERROR_CODE",{value:"E238",enumerable:!1,configurable:!0});return a}function r(){return m?.("useParams()"),(0,f.useContext)(h.PathParamsContext)}function s(a="children"){m?.("useSelectedLayoutSegments()");let b=(0,f.useContext)(g.LayoutRouterContext);return b?(0,i.getSelectedLayoutSegmentPath)(b.parentTree,a):null}function t(a="children"){m?.("useSelectedLayoutSegment()"),(0,f.useContext)(h.NavigationPromisesContext);let b=s(a);return(0,i.computeSelectedLayoutSegment)(b,a)}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},50944,(a,b,c)=>{b.exports=a.r(74137)},346,33508,32860,95221,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(70106);let e=(0,d.default)("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]),f=(0,d.default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);a.s(["X",()=>f],33508);let g=(0,d.default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);a.s(["ArrowRight",()=>g],32860);let h="https://wa.me/5511910163467?text=Olá%20UPPER,%20vi%20o%20seu%20site%20e%20gostaria%20de%20um%20diagnóstico%20estratégico%20gratuito%20da%20minha%20empresa.",i=[{id:0,slug:"como-transformar-o-google-meu-negocio-numa-maquina-de-clientes",title:"Como transformar o Google Meu Negócio numa máquina de clientes",category:"SEO Local",date:"25 Fev, 2026",excerpt:"A maioria das empresas tem um perfil no Google Meu Negócio. Poucas sabem usar. Veja como transformar o seu perfil numa máquina de atração de clientes.",status:"published",content:`
![Capa do Artigo](/images/blog/cover-gmb.png)

A maioria das empresas tem um perfil no Google Meu Neg\xf3cio. Poucas sabem usar.

Se voc\xea j\xe1 cadastrou o seu neg\xf3cio no Google, parab\xe9ns — voc\xea fez o m\xednimo. O problema \xe9 que o m\xednimo n\xe3o gera cliente. O que gera cliente \xe9 infraestrutura. E \xe9 exatamente sobre isso que vamos falar neste artigo.

---

## O que est\xe1 em jogo quando algu\xe9m busca pelo seu servi\xe7o

Quando um potencial cliente digita "cl\xednica de est\xe9tica em Sorocaba" ou "mec\xe2nico pr\xf3ximo a mim" no Google, ele n\xe3o est\xe1 navegando. Ele est\xe1 decidindo.

Em menos de 10 segundos, ele vai comparar tr\xeas empresas que aparecem no topo do mapa, olhar as fotos, ler as avalia\xe7\xf5es, checar o hor\xe1rio de funcionamento e escolher uma. Essa escolha vale dinheiro real — e raramente volta atr\xe1s.

A pergunta \xe9: a sua empresa est\xe1 infraestruturada para ser essa escolha?

---

## Por que o seu perfil provavelmente n\xe3o est\xe1 convertendo

Existe uma diferen\xe7a enorme entre **aparecer no Google** e **ser escolhido no Google**.

A maioria dos perfis tem problemas b\xe1sicos que afastam clientes sem que o dono perceba:

- Foto de perfil pixelada ou desatualizada
- Hor\xe1rio de funcionamento errado ou em branco
- Categoria principal gen\xe9rica demais ("empresa" em vez de "cl\xednica de fisioterapia")
- Nenhuma resposta \xe0s avalia\xe7\xf5es — nem \xe0s positivas, nem \xe0s negativas
- Descri\xe7\xe3o do neg\xf3cio vazia ou copiada do site sem nenhum contexto local
- Nenhuma postagem nos \xfaltimos 6 meses

Cada um desses erros envia um sinal para o algoritmo do Google: *esse neg\xf3cio n\xe3o est\xe1 ativo, n\xe3o merece destaque.*

E o Google obedece.

---

## O que o algoritmo do Google Maps realmente avalia

Para ranquear sua empresa no Maps, o Google usa tr\xeas pilares principais:

**1. Relev\xe2ncia** — O seu perfil deixa claro o que voc\xea faz, para quem e onde?

Se a sua categoria, descri\xe7\xe3o e palavras-chave n\xe3o baterem com o que o cliente est\xe1 buscando, voc\xea simplesmente n\xe3o aparece. N\xe3o \xe9 quest\xe3o de sorte. \xc9 matem\xe1tica.

**2. Proximidade** — Voc\xea est\xe1 configurado para atender a regi\xe3o certa?

Parece \xf3bvio, mas muitos neg\xf3cios n\xe3o definem corretamente sua \xe1rea de atendimento. Isso faz com que voc\xea apare\xe7a para buscas irrelevantes e suma das buscas que importam.

**3. Autoridade** — O Google confia em voc\xea?

Aqui entram as avalia\xe7\xf5es, a frequ\xeancia de atualiza\xe7\xe3o do perfil, as fotos, os links para o site e o tempo de atividade da conta. Quanto mais sinais de confian\xe7a, mais alto voc\xea aparece.

---

## As 7 alavancas que realmente movem o ponteiro

Agora vem a parte pr\xe1tica. Esses s\xe3o os elementos que fazem a diferen\xe7a entre um perfil abandonado e um perfil que gera contato todos os dias.

### 1. Categoria principal — a mais ignorada de todas

A categoria principal do seu perfil \xe9 o sinal mais forte que voc\xea envia ao Google sobre o que voc\xea faz. Escolher errado ou escolher gen\xe9rico \xe9 o erro n\xfamero um.

Em vez de "Empresa de Servi\xe7os", use "Cl\xednica de Fisioterapia", "Advocacia Trabalhista", "Oficina Mec\xe2nica Especializada em Importados". Quanto mais espec\xedfico, mais qualificada \xe9 a busca que te encontra.

Al\xe9m da categoria principal, voc\xea pode adicionar categorias secund\xe1rias. Use todas as que fazem sentido para o seu neg\xf3cio.

### 2. Descri\xe7\xe3o do neg\xf3cio — n\xe3o \xe9 sobre voc\xea, \xe9 sobre o cliente

A descri\xe7\xe3o do seu perfil n\xe3o \xe9 um espa\xe7o para contar a hist\xf3ria da empresa. \xc9 um espa\xe7o para responder \xe0 pergunta que o cliente tem na cabe\xe7a: *"esse neg\xf3cio resolve o meu problema?"*

Escreva em linguagem direta. Mencione a cidade ou bairro onde voc\xea atende. Inclua os problemas que voc\xea resolve, n\xe3o s\xf3 os servi\xe7os que oferece. Exemplo:

> "Atendemos pacientes com dores cr\xf4nicas, les\xf5es esportivas e p\xf3s-operat\xf3rio em Sorocaba. Agendamento no mesmo dia."

Isso converte. "Somos uma cl\xednica de fisioterapia fundada em 2010 com miss\xe3o de cuidar da sa\xfade..." n\xe3o converte.

### 3. Fotos — mais do que est\xe9tica

O Google prioriza perfis com fotos atualizadas e com alto engajamento. Mas mais importante que isso: o cliente usa as fotos para decidir se vai te contatar.

Fotos do ambiente, da equipe, dos bastidores, dos resultados (quando poss\xedvel) — tudo isso cria confian\xe7a antes do primeiro contato. Perfis com mais de 100 fotos recebem, em m\xe9dia, 520% mais liga\xe7\xf5es do que perfis com menos de 10.

N\xe3o precisa de fot\xf3grafo. Precisa de consist\xeancia.

### 4. Avalia\xe7\xf5es — o ativo mais valioso do seu perfil

Avalia\xe7\xf5es s\xe3o moeda. Empresas com mais avalia\xe7\xf5es e notas mais altas aparecem mais e convertem mais. Isso n\xe3o \xe9 opini\xe3o — \xe9 o que os dados mostram.

O problema \xe9 que a maioria dos neg\xf3cios espera a avalia\xe7\xe3o aparecer por acaso. N\xe3o funciona assim. Voc\xea precisa de um sistema ativo de solicita\xe7\xe3o de avalia\xe7\xf5es: no momento certo, pelo canal certo, com a mensagem certa.

E quando a avalia\xe7\xe3o chega — boa ou ruim — ela precisa de resposta. O cliente que l\xea sua resposta a uma avalia\xe7\xe3o negativa aprende mais sobre seu car\xe1ter profissional do que lendo dez avalia\xe7\xf5es positivas.

### 5. Postagens no perfil — o sinal de atividade que poucos usam

Poucos sabem, mas o Google Meu Neg\xf3cio permite que voc\xea publique atualiza\xe7\xf5es diretamente no perfil — promo\xe7\xf5es, novidades, conte\xfado, eventos. Essas postagens aparecem no painel de conhecimento quando algu\xe9m pesquisa sua empresa.

Mais importante: elas s\xe3o um sinal direto de atividade para o algoritmo. Perfis que postam regularmente t\xeam mais visibilidade do que perfis inativos, mesmo com m\xe9tricas similares em outros aspectos.

Uma postagem por semana j\xe1 faz diferen\xe7a.

### 6. Perguntas e Respostas — conte\xfado gratuito que voc\xea n\xe3o est\xe1 usando

Na aba de Perguntas e Respostas do seu perfil, qualquer pessoa pode fazer perguntas — e qualquer pessoa pode responder. Isso inclui voc\xea.

Crie as perguntas mais comuns que seus clientes fazem e responda-as voc\xea mesmo. "Voc\xeas atendem por conv\xeanio?", "Qual o prazo de entrega?", "Fica perto de qual parada de \xf4nibus?" Esse conte\xfado aparece no perfil e responde d\xfavidas antes mesmo do contato — o que aumenta a qualidade dos leads que chegam at\xe9 voc\xea.

### 7. Consist\xeancia de dados — o detalhe que ningu\xe9m v\xea, mas o Google v\xea

Seu nome, endere\xe7o e telefone precisam estar id\xeanticos em todos os lugares onde sua empresa aparece online: site, redes sociais, diret\xf3rios, outros perfis de busca.

Qualquer inconsist\xeancia gera d\xfavida para o algoritmo. E d\xfavida no algoritmo significa posi\xe7\xe3o menor no ranking.

---

## A camada que a maioria ainda n\xe3o viu: GEO

At\xe9 aqui, falamos de SEO Local — a pr\xe1tica de otimizar sua presen\xe7a para aparecer nas buscas do Google. Mas existe uma segunda camada que est\xe1 crescendo rapidamente e que a maioria dos neg\xf3cios ainda ignora: o **GEO**, ou Generative Engine Optimization.

Quando algu\xe9m abre o ChatGPT ou o Google Gemini e pergunta *"qual o melhor escrit\xf3rio de contabilidade em Sorocaba?"*, uma IA generativa responde. E ela n\xe3o busca em sites aleat\xf3rios — ela recomenda com base em dados estruturados, autoridade digital e consist\xeancia de informa\xe7\xf5es.

O seu perfil do Google Meu Neg\xf3cio bem otimizado \xe9 um dos sinais que essas IAs leem para fazer recomenda\xe7\xf5es. Isso significa que a mesma estrutura que te faz aparecer no Maps tamb\xe9m te posiciona para ser recomendado pelas IAs.

N\xe3o s\xe3o dois trabalhos diferentes. \xc9 o mesmo trabalho, feito com mais profundidade.

---

## O que separa um perfil comum de um perfil que gera cliente todos os dias

Vamos ser diretos: qualquer empres\xe1rio pode seguir esse checklist e melhorar seu perfil. Mas existe uma diferen\xe7a entre melhorar e dominar.

Dominar significa:

- Aparecer no top 3 para as buscas mais relevantes do seu setor na sua cidade
- Ter um fluxo previs\xedvel de contatos vindos do Google todos os meses
- Estar preparado para as buscas do presente (Maps) e as buscas do futuro (IA)

Isso n\xe3o acontece com uma tarde de otimiza\xe7\xe3o. Acontece com infraestrutura cont\xednua, monitoramento de dados e ajustes estrat\xe9gicos m\xeas a m\xeas.

\xc9 exatamente isso que a Upper faz.

---

## Checklist r\xe1pido: seu perfil est\xe1 pronto para converter?

Antes de fechar esse artigo, responda honestamente:

- [ ] Sua categoria principal \xe9 espec\xedfica o suficiente?
- [ ] Sua descri\xe7\xe3o menciona a cidade e o problema que voc\xea resolve?
- [ ] Voc\xea tem mais de 20 avalia\xe7\xf5es com nota acima de 4.5?
- [ ] Voc\xea responde todas as avalia\xe7\xf5es?
- [ ] Voc\xea postou no perfil nos \xfaltimos 30 dias?
- [ ] Suas fotos t\xeam menos de 1 ano?
- [ ] Seu nome, endere\xe7o e telefone est\xe3o id\xeanticos em todos os canais?

Se voc\xea marcou menos de 5, voc\xea est\xe1 deixando dinheiro na mesa todos os meses.

---

## Quer saber exatamente quanto voc\xea est\xe1 perdendo?

A Upper faz um diagn\xf3stico gratuito do seu perfil e te mostra, com dados reais, onde est\xe3o os buracos da sua presen\xe7a digital.

Sem compromisso. Sem pitch de vendas. S\xf3 os n\xfameros — e o que fazer com eles.

[Quero meu diagn\xf3stico gratuito →](${h})

---

*Publicado por Upper Agency — infraestrutura Digital para Empresas Locais.*  
*SEO Local \xb7 GEO \xb7 WhatsApp Inteligente*
`,readTime:"8 min",imageUrl:"/images/blog/cover-gmb.png"},{id:1,slug:"como-aparecer-nas-respostas-do-chatgpt-e-gemini-em-2026",title:"Como Aparecer nas Respostas do ChatGPT e Gemini em 2026: Guia Definitivo de GEO para Sorocaba",category:"GEO & IA",date:"26 Fev, 2026",excerpt:"O GEO é a nova fronteira do SEO. Veja como estruturar sua empresa para ser recomendada pelas principais inteligências artificiais do mercado.",status:"published",content:`
## GEO: A Nova Fronteira do SEO Que Voc\xea Precisa Dominar Agora

![Capa do Artigo](/images/blog/cover-geo.png)

Imagine a seguinte situa\xe7\xe3o: um cliente em potencial est\xe1 no ChatGPT ou Gemini e pergunta:

"Qual a melhor empresa de [seu servi\xe7o] em Sorocaba?"

Sua empresa aparece na resposta da IA?
Se a resposta \xe9 n\xe3o, voc\xea est\xe1 perdendo uma das maiores oportunidades de crescimento de 2026. Bem-vindo ao mundo do GEO - Generative Engine Optimization, a otimiza\xe7\xe3o para ser citado e recomendado por intelig\xeancias artificiais.
Enquanto o SEO tradicional foca em rankear no Google, o GEO foca em ser a resposta que IAs como ChatGPT, Gemini, Claude e Perplexity d\xe3o quando algu\xe9m faz uma pergunta.
E a diferen\xe7a \xe9 brutal:

SEO → "Aqui est\xe3o 10 links sobre o assunto"
GEO → "A melhor op\xe7\xe3o \xe9 [SUA EMPRESA], localizada em [SEU ENDERE\xc7O], especializada em [SEU SERVI\xc7O]"

Qual tem mais autoridade? Qual converte mais?

---

## Por Que GEO \xc9 Cr\xedtico Para Empresas Locais em 2026

### Os N\xfameros N\xe3o Mentem
Segundo dados de janeiro de 2026:

- **ChatGPT:** 72 bilh\xf5es de mensagens processadas por m\xeas
- **Perplexity:** 500 milh\xf5es de buscas mensais
- **Google Gemini:** Integrado nativamente \xe0s buscas (bilh\xf5es de intera\xe7\xf5es)

E tem mais: usu\xe1rios abaixo de 44 anos usam, em m\xe9dia, 5 plataformas diferentes para pesquisar. Isso inclui TikTok, ChatGPT, Reddit, sites de avalia\xe7\xe3o e Google.
Traduzindo: Se voc\xea s\xf3 aparece no Google tradicional, est\xe1 invis\xedvel para uma parcela enorme do mercado.

### O Comportamento de Busca Mudou Radicalmente
**2023:**
Usu\xe1rio → Google → Clica em 3 sites → Compara → Decide
**2026:**
Usu\xe1rio → IA (ChatGPT/Gemini) → Recebe resposta pronta → Age imediatamente

A consequ\xeancia? Segundo estimativa da Gartner, o volume de busca tradicional vai cair 25% em 2026 conforme assistentes de IA se tornam a interface padr\xe3o de descoberta.
Empresas que n\xe3o s\xe3o citadas por IAs simplesmente n\xe3o existem para essa nova gera\xe7\xe3o de buscas.

---

## O Que \xc9 GEO (Generative Engine Optimization)

### Defini\xe7\xe3o T\xe9cnica
GEO \xe9 a pr\xe1tica de estruturar seu conte\xfado e presen\xe7a digital para que plataformas de IA generativa:

1. Encontrem suas informa\xe7\xf5es
2. Entendam quem voc\xea \xe9 e o que faz
3. Citem e recomendem sua empresa em respostas

Se o SEO te coloca na lista de op\xe7\xf5es, o GEO te coloca como A op\xe7\xe3o recomendada.

---

## GEO vs. SEO: Entenda as Diferen\xe7as

| Aspecto | SEO Tradicional | GEO (2026) |
|---------|-----------------|------------|
| **Objetivo** | Rankear em buscas | Ser citado em respostas |
| **M\xe9trica principal** | Posi\xe7\xe3o no Google | Frequ\xeancia de cita\xe7\xe3o em IAs |
| **Formato de conte\xfado** | Otimizado para crawlers | Otimizado para compreens\xe3o por LLMs |
| **Palavras-chave** | Termos de busca | Perguntas em linguagem natural |
| **Links** | Backlinks = autoridade | Men\xe7\xf5es em m\xfaltiplas fontes = consenso |
| **Resultado** | Lista de 10 links | Resposta \xfanica com 2-7 cita\xe7\xf5es |

**Exemplo pr\xe1tico:**
**Busca SEO:** "seo local sorocaba"
→ Google mostra 10 resultados para voc\xea escolher
**Busca GEO:** "Quem faz o melhor trabalho de SEO local em Sorocaba?"
→ IA responde: "A UPPER \xe9 especializada em SEO Local e GEO para empresas em Sorocaba, com certifica\xe7\xe3o Google AI Essentials..."

Viu a diferen\xe7a? A IA n\xe3o s\xf3 te encontrou, ela te RECOMENDOU.

---

## Como as IAs Decidem Quem Citar nas Respostas

### O Algoritmo de "Confian\xe7a" das IAs
Modelos de linguagem como GPT-4, Gemini e Claude avaliam sua empresa baseados em algo chamado "Entity Authority" (Autoridade de Entidade).

**Os 5 pilares da Entity Authority:**

**1. Consenso Digital**
Se sua empresa \xe9 mencionada como refer\xeancia em:
- LinkedIn
- Reddit
- F\xf3runs especializados
- Artigos de sites de autoridade
- Google Business Profile com boas avalia\xe7\xf5es

→ A IA entende: "H\xe1 consenso que esta empresa \xe9 boa"

**2. Clareza de Informa\xe7\xe3o**
IAs priorizam empresas que t\xeam:
- ✅ Informa\xe7\xf5es consistentes em todas as plataformas
- ✅ Descri\xe7\xe3o clara do que fazem
- ✅ Dados estruturados (schema markup)
- ✅ Presen\xe7a ativa e atualizada

Se seus dados est\xe3o confusos ou contradit\xf3rios, a IA simplesmente ignora voc\xea.

**3. Dados Propriet\xe1rios e Originais**
IAs adoram citar fontes que oferecem:
- Estudos de caso \xfanicos
- Dados de pesquisa pr\xf3pria
- Benchmarks da ind\xfastria
- Conte\xfado n\xe3o-gen\xe9rico

Exemplo: Se voc\xea publica "An\xe1lise: Como 15 empresas em Sorocaba aumentaram visibilidade no Google em 2025", a IA vai citar isso porque \xe9 informa\xe7\xe3o original.

**4. Atualiza\xe7\xe3o Constante**
Conte\xfado de 2024 sem updates perde para conte\xfado de 2026. IAs pesam rec\xeancia na hora de decidir o que citar.
Estrat\xe9gia: Atualize seus principais conte\xfados a cada 6 meses com novos dados e tend\xeancias.

**5. Formato Pergunta-Resposta**
IAs funcionam por perguntas. Se seu conte\xfado est\xe1 estruturado respondendo perguntas diretas, voc\xea tem vantagem gigante.

---

## As 8 T\xe9cnicas de GEO Que Funcionam em 2026

### T\xe9cnica 1: Schema Markup Para IAs
Schema markup \xe9 c\xf3digo que explica para m\xe1quinas o que cada parte do seu site significa.
Sem schema = IA tem que "adivinhar" o que voc\xea faz.
Com schema = IA sabe exatamente.

### T\xe9cnica 2: Arquivo llms.txt (Novidade de 2026)
Assim como o robots.txt orienta crawlers, o llms.txt orienta IAs sobre como interpretar seu site.
Coloque na raiz do site: \`upperagency.com.br/llms.txt\`

### T\xe9cnica 3: Estrutura de Conte\xfado Estilo "Answer Engine"
IAs literalmente copiam essa estrutura ao gerar respostas. Se seu conte\xfado j\xe1 est\xe1 nesse formato, voc\xea tem m\xe1xima chance de ser citado.

### T\xe9cnica 4: Heading Tags Como Perguntas
Transforme seus H2 e H3 em perguntas que clientes fazem.
✅ Bom: "Como funciona a consultoria de GEO para empresas locais?"

### T\xe9cnica 5: Men\xe7\xf5es e Autoridade Externa
IAs buscam consenso. Se voc\xea \xe9 mencionado em m\xfaltiplas fontes confi\xe1veis, sua autoridade dispara.

### T\xe9cnica 6: FAQ Schema (Essencial)
IAs adoram FAQs porque j\xe1 est\xe3o no formato pergunta-resposta.

### T\xe9cnica 7: Dados de Geolocaliza\xe7\xe3o Precisos
Para empresas locais, geolocaliza\xe7\xe3o \xe9 cr\xedtica para GEO. Dados geo inconsistentes = IA n\xe3o confia que voc\xea est\xe1 realmente em Sorocaba.

### T\xe9cnica 8: Otimiza\xe7\xe3o Multimodal (Imagens + V\xeddeo)
Em 2026, IAs como Gemini e Perplexity processam imagens e v\xeddeos, n\xe3o s\xf3 texto.

---

## Estrat\xe9gia GEO Para Empresas Locais em Sorocaba

**Fase 1: Funda\xe7\xe3o (M\xeas 1)**
- Implementar schema LocalBusiness no site
- Criar arquivo llms.txt
- Garantir NAP (Nome, Endere\xe7o, Telefone) consistente
- Otimizar Google Business Profile
- Adicionar meta tags de geolocaliza\xe7\xe3o

**Fase 2: Conte\xfado (M\xeas 2-3)**
- Escrever 10 artigos em formato pergunta-resposta
- Adicionar FAQ schema
- Criar estudo de caso com dados originais
- Atualizar conte\xfados antigos

**Fase 3: Autoridade (M\xeas 4-6)**
- Conseguir 5 men\xe7\xf5es em sites de autoridade local
- Publicar guest posts em blogs relevantes
- Presen\xe7a ativa no LinkedIn
- Participar de f\xf3runs e comunidades

---

## Conclus\xe3o: GEO N\xe3o \xc9 Mais Opcional em 2026

A pergunta n\xe3o \xe9 "se" voc\xea deve fazer GEO. \xc9 "quando" voc\xea vai come\xe7ar.
A realidade:
- ChatGPT processa 72 bilh\xf5es de mensagens por m\xeas
- Busca tradicional vai cair 25% em 2026
- Usu\xe1rios confiam mais em recomenda\xe7\xf5es de IA do que em listas de links

A UPPER estrutura sua presen\xe7a digital completa para que voc\xea seja encontrado, entendido e recomendado — tanto por Google quanto por IAs.

📱 WhatsApp: [11 91016-3467](https://wa.me/5511910163467)
🌐 Site: [www.upperagency.com.br](https://www.upperagency.com.br)
📍 Atendemos: Sorocaba, Votorantim, Itu e regi\xe3o

**\xdaltima atualiza\xe7\xe3o:** 26 de fevereiro de 2026
`,readTime:"15 min",imageUrl:"/images/blog/cover-geo.png"},{id:2,slug:"google-maps-2026-mudancas-algoritmo",title:"Google Maps 2026: As 7 Mudanças Recentes no Algoritmo Que Definem Quem Aparece Primeiro",category:"SEO Local",date:"26 Fev, 2026",excerpt:"O algoritmo do Google Maps mudou drasticamente. Descubra os novos fatores que definem o ranking das empresas locais em 2026.",status:"published",content:`
## O Google Maps N\xe3o \xc9 Mais o Mesmo: Por Que Sua Empresa Pode Estar Invis\xedvel

![Capa do Artigo](/images/blog/cover-maps.png)

Se voc\xea acha que Google Maps \xe9 apenas um "mapa com lista de empresas", prepare-se para uma revela\xe7\xe3o inc\xf4moda: **em 2026, Google Maps \xe9 o campo de batalha mais importante para empresas locais**.

E as regras mudaram drasticamente.

**Os fatos:**
- 📊 **76% das pessoas** que buscam uma empresa local visitam em at\xe9 24 horas
- 📱 **92% das buscas locais** s\xe3o feitas via smartphone
- 🎯 **46% de todas as buscas no Google** t\xeam inten\xe7\xe3o local em 2026
- 🗺️ **Google Maps aparece ANTES dos resultados org\xe2nicos**

---

## A Mudan\xe7a Mais Impactante: Google Maps + IA

### Como a Integra\xe7\xe3o Com Gemini Transformou Tudo
A mudan\xe7a mais profunda de 2026 n\xe3o foi uma atualiza\xe7\xe3o do algoritmo. Foi a **integra\xe7\xe3o completa do Google Maps com o Gemini** (a IA do Google).

Quando algu\xe9m busca "melhor pizzaria Sorocaba", o Google mostra:
1. **AI Overview** (resposta gerada por IA) no topo
2. **Local Pack** (3 empresas em destaque no mapa)
3. Op\xe7\xe3o **"Dive Deeper in AI Mode"**

---

### O Fim da Proximidade Como Fator Dominante
**Antes (2023-2024):** Dist\xe2ncia era tudo.
**Agora (2026):** **Engajamento supera proximidade.**

O que importa mais:
- ✅ Quantas pessoas **clicam** no seu perfil
- ✅ Quantas pessoas **pedem dire\xe7\xf5es**
- ✅ Quantas pessoas **ligam** direto do Maps
- ✅ Quanto tempo ficam **engajadas** com seu perfil

---

## As 7 Mudan\xe7as Cr\xedticas no Algoritmo do Google Maps (2024-2026)

### Mudan\xe7a #1: Sinais Comportamentais Dominam o Ranking
Google agora rastreia o que usu\xe1rios fazem DEPOIS de ver seu perfil. Empresas com satisfaction score alto sobem.

### Mudan\xe7a #2: Busca por Nome da Marca = Sinal de Autoridade
Quando usu\xe1rios buscam diretamente pelo nome da sua empresa, Google interpreta como demanda org\xe2nica forte.

### Mudan\xe7a #3: Review Sentiment Analysis (An\xe1lise de Sentimento)
Google agora analisa o conte\xfado das avalia\xe7\xf5es usando IA, buscando men\xe7\xf5es a resultados e contexto positivo.

### Mudan\xe7a #4: Freshness Score (Atualiza\xe7\xe3o Cont\xednua)
Google penaliza perfis est\xe1ticos e recompensa perfis ativos com novas fotos e posts semanais.

### Mudan\xe7a #5: Entity Consistency (Consist\xeancia de Dados)
Google cruza informa\xe7\xf5es de TODAS as fontes. Se houver contradi\xe7\xf5es, o ranking cai.

### Mudan\xe7a #6: Structured Data Obrigat\xf3rio
Schema markup deixou de ser "bom ter" e passou a ser obrigat\xf3rio para que a IA te entenda.

### Mudan\xe7a #7: AI-Driven Personalization (Personaliza\xe7\xe3o por IA)
Google Maps mostra resultados diferentes para pessoas diferentes baseados no hist\xf3rico e prefer\xeancias.

---

## Estrat\xe9gia Completa Para Dominar Google Maps em Sorocaba (2026)

**Fase 1: Funda\xe7\xe3o (Semana 1-2)**
- Auditar NAP (Name, Address, Phone)
- Categoria prim\xe1ria otimizada
- Perfil 100% completo
- Schema LocalBusiness no site

**Fase 2: Conte\xfado (Semana 3-4)**
- M\xednimo 20 fotos de alta qualidade
- 2-3 posts por semana no Google
- Responder todas as perguntas
- Primeiras 10 avalia\xe7\xf5es de qualidade

**Fase 3: Autoridade (M\xeas 2-3)**
- Cita\xe7\xf5es em diret\xf3rios locais
- Backlinks de portais da regi\xe3o
- Meta: 2-3 novas avalia\xe7\xf5es por semana
- Social proof ativo

---

## Conclus\xe3o: Adapte ou Fique Invis\xedvel

O Google Maps de 2026 n\xe3o tem nada a ver com o de 2024. As mudan\xe7as s\xe3o profundas e quem n\xe3o se adaptar ficar\xe1 para tr\xe1s.

A UPPER estrutura sua presen\xe7a digital completa: Google Maps + GEO + Site + WhatsApp Business AI. Constru\xedmos o sistema completo de convers\xe3o.

📱 WhatsApp: [11 91016-3467](https://wa.me/5511910163467)
🌐 Site: [www.upperagency.com.br](https://www.upperagency.com.br)
📍 Atendemos: Sorocaba, Votorantim, Itu e regi\xe3o

**\xdaltima atualiza\xe7\xe3o:** 26 de fevereiro de 2026
`,readTime:"14 min",imageUrl:"/images/blog/cover-maps.png"},{id:3,slug:"whatsapp-business-ai-no-brasil",title:"WhatsApp Business AI no Brasil: Como Nunca Mais Perder Vendas por Demora no Atendimento",category:"Conversão",date:"15 Fev, 2026",excerpt:"A Meta lançou o WhatsApp Business AI no Brasil. Veja como essa tecnologia revoluciona o atendimento de empresas locais e evita a perda de clientes.",status:"published",content:`
## Meta Lan\xe7a Business AI no Brasil: O Que Muda Para Empresas Locais em Sorocaba

![Capa do Artigo](/images/blog/cover-wa-ai.png)

Em 25 de fevereiro de 2026, a Meta anunciou oficialmente a chegada do **WhatsApp Business AI** para pequenas e m\xe9dias empresas no Brasil. A ferramenta, que estreou no M\xe9xico em outubro de 2024, promete revolucionar o atendimento ao cliente com intelig\xeancia artificial que funciona 24 horas por dia, 7 dias por semana.

Para empresas locais em Sorocaba, Votorantim e Itu, isso significa uma mudan\xe7a radical na forma de atender clientes que encontram voc\xea no Google Maps e querem respostas imediatas.

**A declara\xe7\xe3o oficial da Meta deixa claro o objetivo:**

> "Nossa vis\xe3o \xe9 que toda empresa ter\xe1 uma IA, da mesma forma que tem email, site ou presen\xe7a nas redes sociais."  
> — Maren Lau, Vice-Presidente da Meta para a Am\xe9rica Latina

---

## O Problema Real: O Vazamento Silencioso de Clientes

### Voc\xea Perde Clientes Entre a Busca e o Atendimento

Segundo pesquisa da Kantar citada pela Meta, **88% dos brasileiros consideram mensagens uma forma r\xe1pida e f\xe1cil** de falar com empresas. Outros **75% dizem ter mais chance de comprar** de marcas com as quais podem interagir por mensagens.

Mas aqui est\xe1 o problema: **a maioria das empresas demora para responder**.

Quando algu\xe9m te encontra no Google Maps \xe0s 22h e manda mensagem no WhatsApp, o que acontece?

- ❌ Mensagem fica sem resposta at\xe9 o dia seguinte
- ❌ Cliente j\xe1 contactou 3 concorrentes nesse tempo
- ❌ Venda perdida antes mesmo de voc\xea acordar

**A Meta registrou que empresas no M\xe9xico que testaram a Business AI aumentaram os neg\xf3cios em 10%**. No Brasil, testes com a Bordinho M\xf3veis mostraram que o agente de IA conseguiu responder praticamente todos os clientes nas primeiras intera\xe7\xf5es, ajudando na convers\xe3o.

---

## O Que \xc9 o WhatsApp Business AI e Como Funciona

### Diferen\xe7a Entre Business AI da Meta e Chatbots Gen\xe9ricos

A Business AI **n\xe3o \xe9 um rob\xf4 com respostas prontas**. \xc9 um agente de intelig\xeancia artificial que:

1. **Aprende com o seu neg\xf3cio** - Usa conversas anteriores, cat\xe1logo de produtos e dados da empresa
2. **Responde com linguagem natural** - N\xe3o parece um bot mec\xe2nico
3. **Recomenda produtos** - Sugere itens do cat\xe1logo baseado na conversa
4. **Transfere para humano quando necess\xe1rio** - Sabe quando escalar para atendimento manual

### Requisitos Para Usar no Brasil

Para ter acesso ao Business AI em 2026, sua empresa precisa:

- ✅ Usar WhatsApp Business em **portugu\xeas**
- ✅ Ter pelo menos **um item cadastrado no cat\xe1logo**
- ✅ Passar por **reconhecimento facial** para vincular a IA ao aparelho

### Como Treinar a IA Para Sua Empresa

A configura\xe7\xe3o envolve tr\xeas fontes de informa\xe7\xe3o:

1. **Conversas anteriores** - Selecione conversas do WhatsApp que representam seu atendimento
2. **Site e cat\xe1logo** - Insira URL do site e produtos cadastrados
3. **Dados manuais** - Adicione formas de pagamento, pol\xedtica de devolu\xe7\xe3o, prazos de entrega

**Importante:** A Meta coleta as mensagens enviadas e recebidas nas conversas em que a Business AI est\xe1 ativada para aprimorar a tecnologia.

---

## Mudan\xe7as no WhatsApp Business em 2026: O Que Voc\xea Precisa Saber

### Meta Bane Chatbots de IA Externos a Partir de Janeiro de 2026

Aqui est\xe1 uma mudan\xe7a cr\xedtica que muitas empresas ainda n\xe3o sabem: **a Meta come\xe7ou a banir chatbots baseados em IAs externas** como ChatGPT, LuzIA, Perplexity e Zapia a partir de janeiro de 2026.

**O objetivo?** Centralizar o uso de IA no Meta AI, o assistente oficial da pr\xf3pria plataforma.

#### O Que Continua Funcionando

- ✅ API oficial da Meta atrav\xe9s de parceiros autorizados
- ✅ Business AI (solu\xe7\xe3o oficial)
- ✅ Ferramentas de parceiros homologados pela Meta

#### O Que Ser\xe1 Bloqueado

- ❌ Chatbots com IAs externas (ChatGPT, Claude, etc.)
- ❌ Ferramentas que simulam cliques ou acessam WhatsApp Web irregularmente
- ❌ Automa\xe7\xe3o de envio em massa fora da API oficial

**Se voc\xea usa automa\xe7\xe3o no WhatsApp hoje, precisa verificar se est\xe1 dentro das regras da Meta antes que sua conta seja bloqueada.**

---

## Business AI vs. Automa\xe7\xe3o Tradicional: Entenda as Diferen\xe7as

| Aspecto | Chatbot Tradicional | Business AI (Meta) |
|---------|---------------------|-------------------|
| **Linguagem** | Respostas fixas e mec\xe2nicas | Natural e contextual |
| **Aprendizado** | N\xe3o aprende com conversas | Melhora continuamente |
| **Cat\xe1logo** | Sem integra\xe7\xe3o nativa | Recomenda produtos automaticamente |
| **Disponibilidade** | Configura\xe7\xe3o manual complexa | 24/7 nativo da plataforma |
| **Conformidade** | Risco de bloqueio em 2026 | Oficial e permitido |
| **Transfer\xeancia** | Regras r\xedgidas | Identifica quando precisa de humano |

---

## Como Implementar Atendimento Inteligente na Sua Empresa em Sorocaba

### Passo 1: Configure o WhatsApp Business Corretamente

Antes de ativar a Business AI, garanta que seu WhatsApp Business est\xe1 estruturado:

- **Cat\xe1logo completo** com fotos, descri\xe7\xf5es e pre\xe7os
- **Hor\xe1rio de funcionamento** atualizado
- **Mensagens autom\xe1ticas de boas-vindas** configuradas
- **Mensagens de aus\xeancia** para hor\xe1rios fora do expediente

### Passo 2: Treine a IA Com Informa\xe7\xf5es Precisas

A qualidade das respostas da Business AI depende dos dados que voc\xea fornece:

**Dados essenciais:**
- Formas de pagamento aceitas (Pix, cart\xe3o, dinheiro)
- Prazos de entrega ou atendimento
- Pol\xedtica de troca e devolu\xe7\xe3o
- Perguntas frequentes da sua \xe1rea (ex: "Voc\xeas atendem em Votorantim?")

### Passo 3: Conecte ao Google Maps e Site

Para que a Business AI funcione integrada \xe0 sua presen\xe7a digital:

1. **Google Business Profile otimizado** - Quando algu\xe9m te acha no Maps, precisa ter o link direto para o WhatsApp
2. **Site com bot\xe3o de WhatsApp** - Click-to-chat que abre direto no Business AI
3. **Landing pages focadas em convers\xe3o** - P\xe1ginas r\xe1pidas que levam ao atendimento

**\xc9 aqui que a estrutura da UPPER faz diferen\xe7a:** conectar o Google Maps ao WhatsApp com Business AI \xe9 a combina\xe7\xe3o perfeita para empresas locais.

### Passo 4: Monitore e Ajuste Continuamente

A Business AI melhora com o tempo, mas voc\xea precisa:

- **Revisar conversas semanalmente** - Ver onde a IA acertou ou errou
- **Editar respostas quando necess\xe1rio** - Voc\xea mant\xe9m controle total
- **Atualizar cat\xe1logo e informa\xe7\xf5es** - Dados desatualizados = respostas erradas
- **Assumir conversas complexas** - Alguns atendimentos exigem toque humano

---

## Mensagens de Transmiss\xe3o Comercial: Novo Recurso Dispon\xedvel

Junto com a Business AI, a Meta liberou no Brasil a cria\xe7\xe3o de **Mensagens de Transmiss\xe3o Comercial**:

### O Que S\xe3o

Mensagens personalizadas enviadas para todos os clientes de uma vez, com:

- 📢 An\xfancios de produtos
- 🎉 Promo\xe7\xf5es sazonais
- 📅 Agendamento de disparos
- 📊 M\xe9tricas detalhadas de abertura e intera\xe7\xe3o
- 🔘 Bot\xf5es customiz\xe1veis para a\xe7\xe3o

### Como Usar Estrategicamente

**Exemplo para uma loja em Sorocaba:**

1. **Segunda-feira:** "Novos produtos chegaram! Veja o cat\xe1logo atualizado 👉 [bot\xe3o]"
2. **Quinta-feira:** "Promo\xe7\xe3o rel\xe2mpago at\xe9 sexta \xe0s 18h! [bot\xe3o: Ver promo\xe7\xf5es]"
3. **Domingo:** "Preparados para a semana? Confira nossos hor\xe1rios 📍 [bot\xe3o: Como chegar]"

**Cuidado:** N\xe3o abuse. Envios excessivos podem gerar bloqueios ou descadastros.

---

## Casos de Uso: Como Empresas Locais Usam Business AI

### Caso 1: Restaurante em Sorocaba

**Antes:** Perdia pedidos de delivery ap\xf3s 20h porque n\xe3o tinha atendente dispon\xedvel.

**Com Business AI:**
- Responde card\xe1pio completo automaticamente
- Confirma endere\xe7o de entrega
- Calcula tempo estimado
- Processa pedidos simples sozinha
- Transfere pedidos complexos para humano no pr\xf3ximo dia

**Resultado:** +40% em pedidos noturnos e fins de semana.

---

### Caso 2: Cl\xednica Odontol\xf3gica em Votorantim

**Antes:** Pacientes mandavam mensagem perguntando hor\xe1rios e valores, mas recep\xe7\xe3o s\xf3 respondia em hor\xe1rio comercial.

**Com Business AI:**
- Responde valores de consulta e procedimentos
- Informa hor\xe1rios dispon\xedveis
- Explica planos aceitos
- Agenda consultas simples
- Envia localiza\xe7\xe3o no Maps

**Resultado:** +65% em agendamentos atrav\xe9s do WhatsApp.

---

### Caso 3: Loja de Materiais de Constru\xe7\xe3o em Itu

**Antes:** Clientes perguntavam disponibilidade de produtos fora do hor\xe1rio, mas s\xf3 recebiam resposta no dia seguinte (quando j\xe1 tinham comprado em outro lugar).

**Com Business AI:**
- Consulta cat\xe1logo em tempo real
- Informa disponibilidade de estoque
- Calcula or\xe7amentos b\xe1sicos
- Agenda retirada ou entrega
- Envia fotos e especifica\xe7\xf5es t\xe9cnicas

**Resultado:** +52% em convers\xf5es de or\xe7amentos.

---

## Riscos e Cuidados: O Que Pode Dar Errado

### Risco 1: IA Dar Informa\xe7\xf5es Erradas

**Problema:** Se o cat\xe1logo ou dados estiverem desatualizados, a Business AI vai responder errado.

**Solu\xe7\xe3o:**
- Revise informa\xe7\xf5es mensalmente
- Teste a IA fazendo perguntas como cliente
- Mantenha cat\xe1logo sempre atualizado

---

### Risco 2: Cliente Frustrado Por N\xe3o Ter Humano

**Problema:** Alguns atendimentos s\xe3o sens\xedveis e exigem empatia humana.

**Solu\xe7\xe3o:**
- Configure gatilhos para transfer\xeancia autom\xe1tica
- Deixe claro nos hor\xe1rios quando h\xe1 atendimento humano
- Treine a IA para identificar urg\xeancias

---

### Risco 3: Usar Ferramentas N\xe3o Autorizadas

**Problema:** Continuar usando chatbots de IA externa que ser\xe3o banidos pela Meta.

**Solu\xe7\xe3o:**
- Migre para Business AI ou parceiro oficial homologado
- N\xe3o use solu\xe7\xf5es "piratas" ou fora da API
- Consulte lista de parceiros autorizados pela Meta

---

## O Futuro do Atendimento Local: IA + Humano

A Business AI n\xe3o substitui o atendimento humano. **Ela elimina o v\xe1cuo entre a busca e o atendimento**.

**A combina\xe7\xe3o ideal em 2026:**

1. **Google Maps** - Cliente te encontra
2. **Landing Page r\xe1pida** - Cliente v\xea informa\xe7\xf5es b\xe1sicas
3. **WhatsApp Business AI** - Cliente tira d\xfavidas iniciais 24h
4. **Atendimento humano** - Fechamento e relacionamento

**Empresas que dominarem essa sequ\xeancia v\xe3o crescer 3x mais r\xe1pido que concorrentes** que ainda dependem s\xf3 de atendimento manual.

---

## Estrutura UPPER: Como Integramos Business AI \xe0 Sua Presen\xe7a Digital

Na UPPER, n\xe3o vendemos apenas "automa\xe7\xe3o de WhatsApp". Constru\xedmos a **infraestrutura completa** que conecta:

### 1. Google Maps Otimizado
- Perfil de Neg\xf3cio estruturado para aparecer nas buscas
- Informa\xe7\xf5es consistentes e completas
- Avalia\xe7\xf5es organizadas e respondidas

### 2. Landing Page de Convers\xe3o
- Site leve, r\xe1pido e focado em levar o visitante para o WhatsApp
- Bot\xe3o de contato em destaque
- Informa\xe7\xf5es claras sobre servi\xe7os e localiza\xe7\xe3o

### 3. WhatsApp Business AI Configurado
- Business AI treinada com os dados da sua empresa
- Cat\xe1logo completo e atualizado
- Integra\xe7\xe3o com seu processo de atendimento

### 4. Otimiza\xe7\xe3o Para IA (GEO)
- Estrutura que faz sua empresa ser recomendada por Gemini, ChatGPT e outras IAs
- Dados organizados para que IAs entendam quem voc\xea \xe9
- Presen\xe7a digital que gera autoridade

---

## Pr\xf3ximos Passos: Como Preparar Sua Empresa Para Business AI

### ✅ Checklist de Implementa\xe7\xe3o

**Fase 1: Prepara\xe7\xe3o (Semana 1)**
- [ ] Verificar se WhatsApp Business est\xe1 em portugu\xeas
- [ ] Adicionar pelo menos 10 produtos no cat\xe1logo
- [ ] Documentar perguntas frequentes dos clientes
- [ ] Listar formas de pagamento e pol\xedticas

**Fase 2: Configura\xe7\xe3o (Semana 2)**
- [ ] Ativar Business AI no WhatsApp
- [ ] Treinar IA com conversas anteriores
- [ ] Inserir site e cat\xe1logo
- [ ] Adicionar dados manuais da empresa

**Fase 3: Testes (Semana 3)**
- [ ] Testar como cliente: fazer 20 perguntas diferentes
- [ ] Verificar se transfer\xeancias para humano funcionam
- [ ] Ajustar respostas que est\xe3o incorretas
- [ ] Configurar mensagens de transmiss\xe3o comercial

**Fase 4: Lan\xe7amento (Semana 4)**
- [ ] Divulgar novo atendimento 24h nas redes sociais
- [ ] Atualizar site com destaque para WhatsApp
- [ ] Monitorar conversas diariamente na primeira semana
- [ ] Coletar feedback dos clientes

---

## Conclus\xe3o: O Atendimento 24h N\xe3o \xc9 Mais Opcional

O lan\xe7amento do WhatsApp Business AI no Brasil em fevereiro de 2026 marca o fim da desculpa "n\xe3o consigo atender fora do hor\xe1rio comercial".

**A realidade \xe9 simples:**

- Seus clientes pesquisam no Google a qualquer hora
- Eles mandam mensagem no WhatsApp esperando resposta r\xe1pida
- Quem responde primeiro (e bem) ganha a venda
- Quem demora perde para o concorrente

**Business AI resolve esse problema.** Mas para funcionar de verdade, precisa estar integrado \xe0 sua presen\xe7a digital completa: Google Maps, site, cat\xe1logo e processo de atendimento.

**\xc9 isso que a UPPER faz:** estrutura a base para que tecnologias como Business AI multipliquem seus resultados, n\xe3o apenas automatizem mensagens.

---

## Quer Implementar Business AI na Sua Empresa?

Na UPPER, constru\xedmos a infraestrutura digital completa que conecta o Google Maps ao WhatsApp Business AI. N\xe3o vendemos "automa\xe7\xe3o isolada" - criamos o sistema completo de atra\xe7\xe3o e convers\xe3o.

**Solicite um diagn\xf3stico estrat\xe9gico gratuito:**

📱 WhatsApp: [11 91016-3467](https://wa.me/5511910163467?text=Ol\xe1%20UPPER,%20vi%20o%20artigo%20sobre%20WhatsApp%20Business%20AI%20e%20gostaria%20de%20um%20diagn\xf3stico%20da%20minha%20empresa.)

🌐 Site: [www.upperagency.com.br](https://www.upperagency.com.br)

📍 Atendemos: Sorocaba, Votorantim, Itu e regi\xe3o

---

**Palavras-chave:** WhatsApp Business AI Brasil 2026, Automa\xe7\xe3o WhatsApp Sorocaba, Meta Business AI, Atendimento 24 horas WhatsApp, Chatbot oficial WhatsApp, IA para empresas locais, WhatsApp Business Votorantim, Automa\xe7\xe3o atendimento Itu

**\xdaltima atualiza\xe7\xe3o:** 26 de fevereiro de 2026
`,readTime:"12 min",imageUrl:"/images/blog/cover-wa-ai.png"},{id:4,title:"Automação com IA para Pequenas Empresas: 7 Casos Reais de Quem Parou de Perder Dinheiro com Tarefas Manuais",category:"Automação com IA",date:"27 Fev, 2026",excerpt:"Clínica, escritório, restaurante, academia — veja como empresas reais estão usando IA para parar de perder tempo e dinheiro com tarefas repetitivas.",status:"published",slug:"automacao-com-ia-para-pequenas-empresas",readTime:"10 min",content:`
# Automa\xe7\xe3o com IA para Pequenas Empresas: 7 Casos Reais de Quem Parou de Perder Dinheiro com Tarefas Manuais

![Capa do Artigo](/images/blog/cover-ai-automation.png)

Existe um padr\xe3o que se repete em praticamente toda pequena empresa que visito: o dono \xe9 bom no que faz, mas passa a maior parte do dia fazendo coisas que n\xe3o s\xe3o o seu trabalho.

Responder sempre a mesma pergunta no WhatsApp. Confirmar agendamentos manualmente. Mandar proposta um por um. Cobrar clientes que esqueceram de pagar. Atualizar planilha depois de cada venda.

Cada tarefa dessas parece pequena. Somadas, consomem entre 2 e 4 horas por dia — horas que deveriam estar sendo usadas para vender, atender melhor ou simplesmente descansar.

A boa not\xedcia: tudo isso pode ser automatizado hoje, com ferramentas acess\xedveis e sem precisar de equipe t\xe9cnica. Veja como empresas reais est\xe3o fazendo isso.

---

## Caso 1: A Cl\xednica de Est\xe9tica que Parou de Perder Agendamentos

**O problema:** Uma cl\xednica de est\xe9tica recebia em m\xe9dia 40 mensagens por dia no WhatsApp. A recepcionista conseguia responder umas 25. As outras 15 ficavam sem resposta at\xe9 o dia seguinte — quando o cliente j\xe1 tinha agendado com a concorr\xeancia.

**O que foi automatizado:**
- Resposta imediata para qualquer mensagem fora do hor\xe1rio comercial
- Envio autom\xe1tico do card\xe1pio de servi\xe7os e tabela de pre\xe7os
- Confirma\xe7\xe3o de agendamento com lembrete 24h antes
- Mensagem de reativa\xe7\xe3o para clientes que n\xe3o voltavam h\xe1 60 dias

**Resultado em 60 dias:** Queda de 70% nos agendamentos perdidos. A recepcionista passou a focar apenas nos atendimentos que realmente precisavam de aten\xe7\xe3o humana — negocia\xe7\xf5es, reclama\xe7\xf5es, casos especiais.

**Ferramenta usada:** WhatsApp Business API com fluxo automatizado integrado ao Google Agenda.

---

## Caso 2: O Escrit\xf3rio de Contabilidade que Automatizou a Cobran\xe7a

**O problema:** Um escrit\xf3rio cont\xe1bil com 80 clientes perdia em m\xe9dia R$ 4.200 por m\xeas em inadimpl\xeancia — n\xe3o porque os clientes n\xe3o queriam pagar, mas porque simplesmente esqueciam. O s\xf3cio passava toda segunda-feira de manh\xe3 mandando cobran\xe7as manualmente.

**O que foi automatizado:**
- Envio de boleto por email e WhatsApp 5 dias antes do vencimento
- Lembrete 1 dia antes do vencimento
- Mensagem autom\xe1tica de cobran\xe7a no dia seguinte ao vencimento
- Escalonamento: se sem resposta em 48h, notifica o s\xf3cio para contato humano

**Resultado em 30 dias:** Inadimpl\xeancia caiu de R$ 4.200 para R$ 900 no primeiro m\xeas. O s\xf3cio recuperou as manh\xe3s de segunda-feira e o constrangimento de cobrar clientes antigos foi praticamente eliminado — a IA cobra, n\xe3o ele.

**Ferramenta usada:** Automa\xe7\xe3o via n8n integrada com sistema de gest\xe3o financeira e WhatsApp API.

---

## Caso 3: A Loja de M\xf3veis Planejados que Triplicou o Volume de Propostas

**O problema:** Uma loja de m\xf3veis planejados recebia leads pelo Instagram e pelo site, mas o vendedor demorava at\xe9 6 horas para fazer o primeiro contato. Pesquisas mostram que o lead esfria drasticamente depois de 5 minutos sem resposta.

**O que foi automatizado:**
- Resposta imediata para qualquer lead recebido (Instagram, site, WhatsApp)
- Qualifica\xe7\xe3o autom\xe1tica: a IA pergunta metragem, prazo, or\xe7amento aproximado
- Se lead qualificado, agenda visita direto na agenda do vendedor
- Se lead frio, entra em sequ\xeancia de nutri\xe7\xe3o com conte\xfado e cases

**Resultado:** O vendedor passou a receber leads j\xe1 qualificados, com informa\xe7\xf5es b\xe1sicas preenchidas, prontos para a visita. O volume de propostas emitidas triplicou sem contratar ningu\xe9m.

**Ferramenta usada:** Chatbot com IA integrado ao CRM e Google Agenda.

---

## Caso 4: O Restaurante que Parou de Perder Pedidos no Delivery

**O problema:** Um restaurante recebia pedidos pelo WhatsApp das 18h \xe0s 23h. Das 20h em diante, a cozinha estava no pico e ningu\xe9m conseguia responder as mensagens. Clientes desistiam e pediam pelo iFood — onde o restaurante pagava 30% de comiss\xe3o.

**O que foi automatizado:**
- Card\xe1pio interativo no WhatsApp com fotos e pre\xe7os
- Pedido feito direto pelo chat, sem precisar de atendente
- Confirma\xe7\xe3o autom\xe1tica com tempo estimado de entrega
- Integra\xe7\xe3o com a impressora da cozinha — pedido chega direto impresso

**Resultado:** 40% dos pedidos que antes iam para o iFood passaram a ser feitos pelo WhatsApp direto, sem comiss\xe3o. Em volume, isso representou R$ 8.000 a mais por m\xeas ficando no caixa do restaurante.

**Ferramenta usada:** WhatsApp Business API com fluxo de pedidos e integra\xe7\xe3o com impressora t\xe9rmica.

---

## Caso 5: A Academia que Automatizou a Reten\xe7\xe3o de Alunos

**O problema:** Uma academia tinha churn (cancelamento) alto. A maioria dos alunos cancelava entre o 2\xba e o 3\xba m\xeas — exatamente quando a motiva\xe7\xe3o inicial come\xe7a a cair e as faltas aumentam.

**O que foi automatizado:**
- Monitoramento de frequ\xeancia: aluno que falta 3 vezes seguidas recebe mensagem autom\xe1tica
- Mensagem personalizada com nome do aluno e oferta de uma aula experimental com personal
- Aluno aniversariante recebe mensagem no dia com desconto na renova\xe7\xe3o
- 7 dias antes do vencimento da mensalidade, envio de lembrete com link de pagamento

**Resultado:** Churn caiu 35% em 3 meses. A recepcionista, que antes gastava 2h por dia em cobran\xe7as e follow-up, passou a focar em atendimento presencial e vendas de planos maiores.

**Ferramenta usada:** Automa\xe7\xe3o via Make (ex-Integromat) integrada com sistema de gest\xe3o da academia e WhatsApp.

---

## Caso 6: O Advogado que Automatizou o Primeiro Contato

**O problema:** Um advogado trabalhista recebia consultas pelo site e pelo Instagram, mas n\xe3o conseguia responder todas — especialmente as que chegavam fora do hor\xe1rio de expediente. Casos urgentes ficavam sem atendimento at\xe9 o dia seguinte.

**O que foi automatizado:**
- Resposta imediata explicando os tipos de casos atendidos
- Formul\xe1rio de triagem enviado automaticamente (\xe1rea do direito, urg\xeancia, breve descri\xe7\xe3o)
- Se urgente: notifica\xe7\xe3o imediata no celular do advogado
- Se n\xe3o urgente: agendamento autom\xe1tico de consulta inicial na semana seguinte

**Resultado:** O advogado passou a receber apenas casos pr\xe9-qualificados — sem perder tempo em consultas fora da sua \xe1rea. O n\xfamero de consultas iniciais aumentou 80% porque nenhum contato ficava sem resposta.

**Ferramenta usada:** Typeform integrado com WhatsApp via Zapier e Google Agenda.

---

## Caso 7: A Distribuidora que Automatizou Pedidos de Reposi\xe7\xe3o

**O problema:** Uma distribuidora de produtos aliment\xedcios tinha 60 clientes (mercados, restaurantes, padarias) que faziam pedidos de reposi\xe7\xe3o pelo WhatsApp. Gerenciar isso era ca\xf3tico — pedidos perdidos, confus\xf5es com quantidades, esquecimento de itens em falta.

**O que foi automatizado:**
- Cada cliente tem seu pr\xf3prio fluxo de pedido no WhatsApp
- Cat\xe1logo atualizado automaticamente conforme estoque
- Pedido confirmado gera ordem de separa\xe7\xe3o autom\xe1tica no sistema
- Clientes que n\xe3o pediram na semana recebem lembrete autom\xe1tico

**Resultado:** Erros de pedido ca\xedram 90%. O representante comercial, que antes passava o dia inteiro gerenciando WhatsApp, passou a focar em prospec\xe7\xe3o de novos clientes.

**Ferramenta usada:** WhatsApp Business API com integra\xe7\xe3o ao sistema de estoque via n8n.

---

## O Que Todos Esses Casos T\xeam em Comum

Nenhuma dessas empresas era grande. Nenhuma tinha equipe de TI. Nenhuma investiu fortunas em tecnologia.

O que todas fizeram foi identificar onde o tempo estava sendo desperdi\xe7ado em tarefas repetitivas — e construir um sistema para executar essas tarefas automaticamente, liberando as pessoas para o que realmente importa.

O padr\xe3o \xe9 sempre o mesmo:

**1. Identificar o gargalo** — onde voc\xea perde mais tempo ou mais dinheiro por falta de resposta r\xe1pida?

**2. Mapear o fluxo** — o que acontece desde o primeiro contato at\xe9 a venda ou o atendimento?

**3. Automatizar o repetitivo** — tudo que segue uma l\xf3gica previs\xedvel pode ser feito por IA

**4. Humanizar o estrat\xe9gico** — negocia\xe7\xe3o, relacionamento, exce\xe7\xf5es — esses ficam com a pessoa

---

## Por Onde Come\xe7ar

A maioria das empresas tenta automatizar tudo de uma vez e abandona no meio do caminho porque ficou complexo demais.

A abordagem que funciona \xe9 come\xe7ar por um \xfanico ponto de dor — o que mais te faz perder tempo ou dinheiro — e resolver esse primeiro.

Para a maioria das pequenas empresas, esse ponto \xe9 o atendimento inicial no WhatsApp. \xc9 por l\xe1 que os leads chegam, \xe9 por l\xe1 que as vendas s\xe3o perdidas quando a resposta demora.

Resolver esse ponto primeiro j\xe1 libera tempo e gera resultado r\xe1pido — o que d\xe1 energia para automatizar o pr\xf3ximo processo.

---

## Como a Upper Implementa Automa\xe7\xf5es com IA

Na Upper, n\xe3o entregamos ferramentas — entregamos sistemas funcionando. O processo de [Automa\xe7\xe3o de WhatsApp Inteligente](/servicos/automacao-whatsapp/sorocaba) n\xe3o \xe9 apenas um chatbot, \xe9 uma m\xe1quina de vendas escal\xe1vel.

[![Como Funciona a Automa\xe7\xe3o de WhatsApp por IA](https://img.youtube.com/vi/jNQXAC9IVRw/0.jpg)](https://www.youtube.com/watch?v=jNQXAC9IVRw)

O processo come\xe7a com um diagn\xf3stico: mapeamos onde est\xe3o os maiores gargalos do seu neg\xf3cio, quais processos consomem mais tempo e onde as vendas est\xe3o sendo perdidas.

A partir da\xed, constru\xedmos as automa\xe7\xf5es de forma integrada — WhatsApp, email, agenda, CRM, sistema de cobran\xe7a — para que tudo funcione junto, sem silos e sem necessidade de equipe t\xe9cnica para manter.

Se voc\xea reconheceu o seu neg\xf3cio em algum dos casos acima, \xe9 um sinal de que h\xe1 espa\xe7o para crescer sem precisar contratar mais pessoas.

---

## Quer um Diagn\xf3stico do Que Pode Ser Automatizado no Seu Neg\xf3cio?

A Upper faz um mapeamento gratuito dos processos do seu neg\xf3cio e te mostra, com clareza, o que pode ser automatizado, quanto tempo voc\xea vai recuperar e qual o impacto financeiro esperado.

Sem compromisso. Sem pitch de vendas. S\xf3 o diagn\xf3stico e o que fazer com ele.

[Quero meu diagn\xf3stico gratuito →](https://wa.me/5511910163467?text=Ol\xe1%20UPPER,%20vi%20o%20artigo%20sobre%20automa\xe7\xe3o%20com%20IA%20e%20gostaria%20de%20um%20diagn\xf3stico%20dos%20processos%20da%20minha%20empresa.)

---

*Publicado por Upper Agency — Infraestrutura Digital para Empresas Locais.*
*SEO Local \xb7 GEO \xb7 WhatsApp Inteligente \xb7 Automa\xe7\xe3o com IA*
`,imageUrl:"/images/blog/cover-ai-automation.png"},{id:5,title:"Por Que Ter um Site Lento em 2026 É o Mesmo Que Trancar a Porta da Sua Empresa",category:"Site Institucional",date:"02 Mar, 2026",excerpt:"Descubra como a lentidão de um site obsoleto ou depender apenas do Instagram está destruindo suas vendas diárias no mercado local.",status:"published",slug:"por-que-ter-site-lento-destroi-vendas",readTime:"5 min",content:`
# Por Que Ter um Site Lento em 2026 \xc9 o Mesmo Que Trancar a Porta da Sua Empresa

![Capa do Artigo](/images/blog/cover-slow-site.png)

Se voc\xea \xe9 dono de um neg\xf3cio local em Sorocaba, Itu ou Votorantim, pense r\xe1pido: se um cliente bater na porta da sua empresa agora e ela estiver trancada, o que ele faz? Ele vai no concorrente ao lado.

Na internet de 2026, **um site lento, desatualizado ou a falta total dele tem exatamente o mesmo efeito de uma porta trancada**.

A diferen\xe7a \xe9 que na vida real voc\xea v\xea o cliente indo embora. Na internet, voc\xea perde dezenas de vendas todos os meses sem nem saber que o cliente existiu.

---

## O Fim do "S\xf3 o Instagram Resolve"

Durante anos, fomos convencidos de que ter uma conta ativa no Instagram era suficiente. *"Ah, minha cl\xednica tem 5 mil seguidores, meu restaurante posta Stories todo dia, n\xe3o preciso de site"*.

Essa \xe9 a pior mentira que um empres\xe1rio local pode acreditar hoje.

O Instagram \xe9 uma rede de **distra\xe7\xe3o**. As pessoas entram l\xe1 para ver memes, amigos e fofocas. Se voc\xea faz um an\xfancio, est\xe1 interrompendo algu\xe9m e torcendo para ela comprar.

O Google, por outro lado, \xe9 uma rede de **inten\xe7\xe3o**. Quando algu\xe9m pesquisa "Manuten\xe7\xe3o de Ar Condicionado Sorocaba" ou "Cl\xednica de Est\xe9tica Votorantim", a pessoa j\xe1 passou pela etapa da d\xfavida. Ela quer comprar AGORA. Ela s\xf3 est\xe1 decidindo de **QUEM** vai comprar.

Se voc\xea n\xe3o tem um site de convers\xe3o para capturar essa busca (ou se o seu site \xe9 lento e ele desiste de esperar carregar), parab\xe9ns: voc\xea gastou tempo e dinheiro para aquecer um cliente e ele foi fechar no concorrente que estava posicionado no Google.

---

## O Problema dos Sites Antigos e dos "Criadores Amadores"

Voc\xea talvez diga: *"Mas eu tenho site! Paguei R$ 500 para o sobrinho do meu amigo fazer no Wix ou no WordPress"*.

Aqui entra a matem\xe1tica cruel do algoritmo do Google:

**1 segundo de atraso no carregamento da p\xe1gina no celular reduz suas convers\xf5es em at\xe9 20%.**

Se o seu site foi feito de forma amadora, ele provavelmente est\xe1 carregado de plugins in\xfateis, imagens pesadas e c\xf3digos sujos. O "rob\xf4" do Google odeia isso. Quando o Google tem que escolher entre recomendar o seu site lento de 2018 ou o site ultrarr\xe1pido do seu concorrente constru\xeddo em Next.js (a tecnologia moderna), ele vai esconder voc\xea.

Al\xe9m disso, 90% dos acessos locais hoje acontecem via celular. Se o seu site exige dar "zoom" para ler o bot\xe3o do WhatsApp, seu lead vai embora em 3 segundos.

---

## Como a UPPER Agency Muda Esse Jogo

Na UPPER, n\xf3s n\xe3o vendemos "sites bonitinhos". N\xf3s constru\xedmos **M\xe1quinas R\xe1pidas de Posicionamento e Captura**.

Nossa abordagem utiliza as tecnologias mais modernas (as mesmas usadas pela Netflix e TikTok) para garantir que sua empresa na regi\xe3o de Sorocaba se destaque:

1. **Velocidade Extrema:** Seus clientes n\xe3o esperam mais do que 1 segundo para o site abrir. N\xf3s usamos c\xf3digo nativo de alta performance para entregar p\xe1ginas instant\xe2neas.
2. **Copywriting Persuasivo:** Usamos textos organizados que guiam o olhar do cliente diretamente para a a\xe7\xe3o de contato ou agendamento.
3. **SEO Regional Nativo:** Estruturamos os bastidores e palavras-chave para que o Google entenda que voc\xea \xe9 a autoridade m\xe1xima do seu bairro e cidade.
4. **Infraestrutura Pronta Para IAs:** Nossos c\xf3digos s\xe3o otimizados (GEO) para que intelig\xeancias como o ChatGPT tamb\xe9m recomendem a sua cl\xednica ou com\xe9rcio quando perguntados por servi\xe7os locais.

---

## A Escolha \xe9 Sua

Voc\xea pode continuar com o site antigo e carregamento travado, perdendo leads di\xe1rios enquanto a Intelig\xeancia Artificial e o Google redirecionam dinheiro para o bolso do seu concorrente...

Ou voc\xea pode erguer uma funda\xe7\xe3o profissional que carrega como um raio, transmite autoridade instant\xe2nea e captura o cliente assim que ele pesquisa o seu servi\xe7o.

Se voc\xea percebeu que est\xe1 na hora de destravar a porta da sua empresa na internet, n\xf3s podemos ajudar.

---

## Solicite Uma Auditoria Gratuita do Seu Posicionamento

A UPPER faz um raio-X completo da lentid\xe3o e das falhas no c\xf3digo do seu site atual. Entregamos um diagn\xf3stico mostrando o que voc\xea est\xe1 perdendo, sem compromisso e sem jarg\xf5es de tecnologia.

Apenas clique abaixo e inicie um bate-papo r\xe1pido conosco pelo WhatsApp.

[Quero meu diagn\xf3stico gratuito agora →](https://wa.me/5511910163467?text=Ol\xe1%20UPPER,%20vi%20o%20artigo%20sobre%20sites%20r\xe1pidos%20e%20gostaria%20de%20uma%20auditoria%20gratuita%20da%20minha%20empresa.)

---

*Publicado por Upper Agency — Sua M\xe1quina de Capta\xe7\xe3o e Automa\xe7\xe3o.*
`,imageUrl:"/images/blog/cover-slow-site.png"},{id:6,slug:"automacao-de-whatsapp-para-empresas-guia-completo",title:"Automação de WhatsApp para Empresas: Como Funciona e Por Que Você Precisa",category:"Automação de WhatsApp",date:"04 Mar, 2026",excerpt:"Veja como a automação de WhatsApp elimina o gargalo de atendimento de pequenas empresas e impede que clientes sejam perdidos para a concorrência por falta de resposta rápida.",status:"published",content:a=>{a.charAt(0).toUpperCase(),a.slice(1).replace("-"," ");let b="",c="";switch(a.toLowerCase()){case"sorocaba":b="Como um dos principais polos econômicos e industriais do interior paulista, a concorrência em Sorocaba é brutal. Seja comércio, clínica ou serviço, se você demora 15 minutos para responder um orçamento no WhatsApp, o cliente já fechou com a empresa da outra quadra.",c="**Exemplo real em Sorocaba:** Uma clínica odontológica no Campolim configurou o seguinte fluxo: qualquer mensagem recebida recebe resposta imediata com os serviços disponíveis e um link para o agendamento online. De manhã, a recepcionista já encontra os horários preenchidos — sem ter digitado uma palavra.";break;case"votorantim":b="Com o crescimento imobiliário e comercial acelerado de Votorantim, novas empresas abrem todos os meses. O volume de mensagens diárias para construtoras, prestadores de serviço e varejo aumentou, e contar apenas com atendimento humano causa gargalos que custam caro.",c="**Exemplo real em Votorantim:** Uma loja de materiais para construção próxima ao centro implantou um sistema que responde preços básicos de cimento e areia e envia o catálogo em PDF automaticamente. O vendedor agora só assume o chat quando o cliente pede para fechar o pedido de telhado completo.";break;case"itu":b="O fluxo constante de turismo e os grandes condomínios de Itu geram uma demanda sazonal e imprevisível. Responder às inúmeras dúvidas sobre localização, horário de funcionamento e disponibilidade se tornou o maior ladrão de tempo dos empresários locais.",c="**Exemplo real em Itu:** Um restaurante tradicional na região central perdia dezenas de reservas aos fins de semana porque a hostess não conseguia anotar pedidos e olhar o WhatsApp ao mesmo tempo. Com um bot simples, o cardápio e o link de reserva agora são enviados no segundo 1.";break;case"salto":b="Com o desenvolvimento contínuo dos setores de serviços e turismo em Salto, os empresários precisam de processos escaláveis. Ficar horas no celular respondendo 'onde fica' ou 'qual o valor' já não é uma opção sustentável.",c="**Exemplo real em Salto:** Uma prestadora de serviços de manutenção (ar-condicionado e elétrica) criou uma automação que faz a triagem do chamado: o bot pergunta o defeito, pede uma foto e já agenda a visita técnica de acordo com o calendário do Google Agenda do técnico.";break;case"itapetininga":b="Itapetininga possui uma economia diversificada baseada no comércio forte e agropecuária. Muitos donos de negócios passam o dia inteiro 'apagando incêndios' operacionais e deixam o WhatsApp no mudo, perdendo excelentes negociações de maquinário e serviços.",c="**Exemplo real em Itapetininga:** Uma concessionária de implementos e peças agrícolas instalou um menu automático no WhatsApp. Quando o produtor rural chama de madrugada pedindo peça de trator, o robô anota o pedido e de manhã a peça já está faturada na expedição.";break;case"boituva":b="Capital do paraquedismo e do balonismo, Boituva recebe um volume absurdo de mensagens nos finais de semana de pessoas de fora com dúvidas padronizadas. O empresário que responde rápido, leva o cliente.",c="**Exemplo real em Boituva:** Uma agência de turismo local passava sábado e domingo recebendo a pergunta 'vai ter voo amanhã?'. O WhatsApp agora capta a previsão do tempo automaticamente e responde aos turistas, enquanto a agência foca na operação de solo.";break;case"porto-feliz":b="Com a chegada de condomínios de altíssimo padrão e o crescimento industrial, o nível de exigência do consumidor em Porto Feliz subiu. Atendimento amador ou demorado manda o cliente rico diretamente para a concorrência.",c="**Exemplo real em Porto Feliz:** Uma corretora de imóveis implementou um fluxo de qualificação 24h. O bot capta se o cliente quer comprar, vender ou alugar, qual a faixa de valor e a região. Quando o corretor acorda, ele já tem o lead morno na tela do CRM.";break;default:b="A concorrência local está cada vez mais profissional. Se você demora 15 minutos para responder um orçamento no WhatsApp, o cliente já fechou com a empresa vizinha.",c="**Exemplo real:** Uma clínica odontológica configurou o seguinte fluxo: qualquer mensagem recebida fora do horário comercial recebe resposta imediata com os serviços disponíveis e um link para o agendamento online. De manhã, a recepcionista já encontra os horários preenchidos — sem ter digitado uma palavra."}return`
# Automa\xe7\xe3o de WhatsApp para Empresas: Como Funciona, Quais Ferramentas Usar e Por Que Seu Concorrente J\xe1 Est\xe1 Fazendo Isso

![Atendente humano sobrecarregado vs Sistema Autom\xe1tico funcionando 24h](/images/blog/whatsapp-automation-header.png)

Toda semana aparecem pelo menos tr\xeas donos de neg\xf3cio com a mesma reclama\xe7\xe3o: "Fico o dia inteiro no WhatsApp e mesmo assim perco clientes por falta de resposta."

N\xe3o \xe9 falta de dedica\xe7\xe3o. \xc9 falta de sistema. ${b}

A automa\xe7\xe3o de WhatsApp resolveu exatamente isso para milhares de pequenas empresas no Brasil — e hoje est\xe1 acess\xedvel para qualquer neg\xf3cio, independente do tamanho ou do or\xe7amento. Neste artigo voc\xea vai entender como funciona na pr\xe1tica, quais ferramentas as empresas brasileiras mais usam e como integrar um chatbot ao WhatsApp para atender clientes automaticamente.

---

## 1. Como Funciona a Automa\xe7\xe3o de Atendimento ao Cliente no WhatsApp

Automa\xe7\xe3o de WhatsApp n\xe3o \xe9 um bot que manda mensagens gen\xe9ricas sem sentido. Quando bem feita, \xe9 um sistema que entende o contexto da conversa e responde de forma \xfatil — como se fosse um funcion\xe1rio treinado que nunca dorme e nunca fica sobrecarregado.

O funcionamento b\xe1sico segue esse fluxo:

**Cliente manda mensagem → Sistema identifica a inten\xe7\xe3o → Resposta autom\xe1tica adequada → Escalonamento humano se necess\xe1rio**

Na pr\xe1tica, o que acontece \xe9:

**Triagem inteligente:** O sistema identifica se o cliente quer informa\xe7\xe3o (hor\xe1rio, pre\xe7o, endere\xe7o), se quer agendar, se quer comprar ou se tem uma reclama\xe7\xe3o. Cada caminho tem uma resposta diferente.

**Respostas contextuais:** Se o cliente pergunta "voc\xeas atendem s\xe1bado?", o sistema n\xe3o manda o card\xe1pio de servi\xe7os. Manda a informa\xe7\xe3o do hor\xe1rio de funcionamento — e aproveita para oferecer um agendamento.

**Passagem para humano:** Quando a situa\xe7\xe3o foge do fluxo padr\xe3o — negocia\xe7\xe3o, reclama\xe7\xe3o, caso complexo — o sistema identifica e transfere para um atendente com o hist\xf3rico da conversa j\xe1 dispon\xedvel.

${c}

---

## 2. Quais Ferramentas de Automa\xe7\xe3o de WhatsApp S\xe3o Mais Usadas por Empresas no Brasil

Existem dezenas de op\xe7\xf5es no mercado. Mas na pr\xe1tica, o que as pequenas e m\xe9dias empresas brasileiras est\xe3o usando se divide em tr\xeas categorias:

### Ferramentas de Chatbot (foco em atendimento)

**Blip** — Uma das mais usadas no Brasil para empresas de m\xe9dio porte. Tem interface visual para montar fluxos sem programa\xe7\xe3o e integra\xe7\xe3o nativa com WhatsApp Business API. Boa para neg\xf3cios com volume alto de atendimento.

**Manychat** — Mais popular entre e-commerces e neg\xf3cios que usam muito Instagram + WhatsApp juntos. Tem plano gratuito com limita\xe7\xf5es e planos pagos a partir de ~R$ 100/m\xeas.

**Typebot** — Op\xe7\xe3o open source e mais t\xe9cnica, mas muito poderosa. Permite criar fluxos complexos com l\xf3gica condicional e integrar com qualquer sistema via webhooks.

![Comparativo visual de ferramentas de automa\xe7\xe3o no Brasil](/images/blog/whatsapp-tools-comparison.png)

### Ferramentas de Automa\xe7\xe3o (foco em integra\xe7\xe3o de sistemas)

**n8n** — A queridinha dos times t\xe9cnicos. Open source, pode rodar no seu pr\xf3prio servidor e conecta WhatsApp com praticamente qualquer sistema: CRM, Google Sheets, ERP, sistema de agendamento. Curva de aprendizado maior, mas sem limite de uso.

**Make (ex-Integromat)** — Interface visual mais amig\xe1vel que o n8n. \xd3timo para conectar WhatsApp com ferramentas como Notion, Google Agenda, Airtable, sistemas de cobran\xe7a. Tem plano gratuito com 1.000 opera\xe7\xf5es/m\xeas.

**Zapier** — O mais conhecido internacionalmente. Interface simples, mas o custo fica alto conforme o volume de automa\xe7\xf5es cresce. Melhor para quem est\xe1 come\xe7ando.

### WhatsApp Business API (a base de tudo)

Para qualquer automa\xe7\xe3o profissional, voc\xea precisa da **WhatsApp Business API** — diferente do WhatsApp Business comum que voc\xea instala no celular. A API permite enviar e receber mensagens de forma program\xe1tica, sem limita\xe7\xf5es de dispositivo e sem risco de banimento da conta.

No Brasil, os principais provedores de acesso \xe0 API s\xe3o: **Infobip**, **Twilio**, **360dialog** e **Vonage**. O custo varia conforme o volume de conversas, mas para pequenas empresas fica entre R$ 200 e R$ 600/m\xeas incluindo a ferramenta de automa\xe7\xe3o.

---

## 3. Como Integrar um Chatbot com o WhatsApp para Atendimento Autom\xe1tico

Esse \xe9 o ponto onde a maioria das empresas trava — parece mais complexo do que \xe9. Veja o processo do in\xedcio ao fim:

### Passo 1: Definir o que voc\xea quer automatizar

Antes de escolher ferramenta, defina os 3 cen\xe1rios mais comuns de atendimento no seu neg\xf3cio. Exemplos:

- "Qual o hor\xe1rio de funcionamento?" → Resposta autom\xe1tica
- "Quero agendar uma consulta" → Fluxo de agendamento
- "Qual o pre\xe7o do servi\xe7o X?" → Card\xe1pio de servi\xe7os

Esses tr\xeas cen\xe1rios j\xe1 cobrem 70% do volume de mensagens da maioria dos neg\xf3cios locais.

### Passo 2: Conseguir acesso \xe0 WhatsApp Business API

Voc\xea vai precisar de um n\xfamero de telefone dedicado (n\xe3o pode ser o mesmo do WhatsApp pessoal ou Business comum) e de um provedor de acesso \xe0 API. O processo de aprova\xe7\xe3o pela Meta leva entre 3 e 7 dias \xfateis.

### Passo 3: Montar o fluxo de conversas

Usando uma ferramenta como Blip, Manychat ou Typebot, voc\xea monta visualmente os caminhos da conversa. \xc9 parecido com montar um fluxograma — "se o cliente responder X, manda Y; se responder Z, manda W".

**Exemplo de fluxo para uma cl\xednica:**

\`\`\`
Cliente manda qualquer mensagem
↓
"Ol\xe1! Sou a assistente virtual da Cl\xednica X. 
Como posso te ajudar?"
[1] Agendar consulta
[2] Ver especialidades e valores
[3] Falar com atendente

↓ Se escolher [1]
"Qual especialidade voc\xea procura?"
[1] Cl\xednico Geral
[2] Cardiologia
[3] Dermatologia

↓ Ap\xf3s escolher especialidade
"Que dias voc\xea tem disponibilidade?"
→ Mostra hor\xe1rios dispon\xedveis
→ Confirma agendamento
→ Manda lembrete 24h antes
\`\`\`

### Passo 4: Integrar com os sistemas que voc\xea j\xe1 usa

Aqui \xe9 onde a automa\xe7\xe3o fica poderosa. O chatbot n\xe3o precisa funcionar isolado — ele pode consultar e atualizar seus sistemas em tempo real:

- **Google Agenda / Calendly:** Verificar hor\xe1rios dispon\xedveis e criar eventos automaticamente
- **Google Sheets:** Registrar cada lead com nome, contato e interesse
- **Sistema de gest\xe3o:** Consultar estoque, agenda, hist\xf3rico do cliente
- **Sistema de cobran\xe7a:** Disparar boletos, confirmar pagamentos

### Passo 5: Testar antes de ativar

Antes de ligar o sistema para os clientes reais, simule todas as situa\xe7\xf5es poss\xedveis. Teste mensagens inesperadas, erros de digita\xe7\xe3o, respostas fora do fluxo. Configure sempre uma sa\xedda para atendente humano — nunca deixe o cliente preso num loop sem sa\xedda.

---

## O Que Fazer Quando o Cliente Foge do Fluxo

Nenhum fluxo cobre 100% das situa\xe7\xf5es. O que separa uma automa\xe7\xe3o boa de uma ruim \xe9 justamente como ela lida com o inesperado.

**Regra de ouro:** Sempre tenha uma op\xe7\xe3o "Falar com atendente" vis\xedvel. Clientes que precisam de atendimento humano e n\xe3o encontram sa\xedda ficam frustrados — e frustra\xe7\xe3o vira reclama\xe7\xe3o p\xfablica.

**Configura\xe7\xe3o recomendada:**
- Mensagem n\xe3o reconhecida 1 vez → "N\xe3o entendi bem. Voc\xea pode escolher uma das op\xe7\xf5es?"
- Mensagem n\xe3o reconhecida 2 vezes → Transfer\xeancia autom\xe1tica para atendente com hist\xf3rico da conversa

![Exemplo visual de transbordo para atendimento humano na tela de suporte](/images/blog/whatsapp-human-handoff.png)

---

## Quanto Custa e Quanto Tempo Leva

Para ter uma ideia realista:

**Custo mensal:** Entre R$ 300 e R$ 800 para uma solu\xe7\xe3o completa (API + ferramenta de automa\xe7\xe3o), dependendo do volume de conversas e da ferramenta escolhida.

**Tempo de implanta\xe7\xe3o:** 1 a 3 semanas para um fluxo b\xe1sico funcionando. Solu\xe7\xf5es mais complexas com integra\xe7\xf5es de sistemas levam de 4 a 8 semanas.

**Retorno:** A maioria dos neg\xf3cios que implementa automa\xe7\xe3o de WhatsApp recupera o investimento no primeiro m\xeas — s\xf3 com a redu\xe7\xe3o de leads perdidos por falta de resposta r\xe1pida.

Uma oficina mec\xe2nica em Sorocaba calculou que perdia em m\xe9dia 8 clientes por m\xeas por n\xe3o conseguir responder r\xe1pido o suficiente. Com ticket m\xe9dio de R$ 350, eram R$ 2.800/m\xeas indo embora. A automa\xe7\xe3o custou R$ 450/m\xeas para implantar e manter. Conta fechada.

---

## O Erro Mais Comum na Automa\xe7\xe3o de WhatsApp

Tentar automatizar tudo de uma vez.

Empresas que tentam criar fluxos para todos os cen\xe1rios poss\xedveis antes de colocar no ar geralmente nunca colocam no ar — ou colocam uma solu\xe7\xe3o t\xe3o complexa que ningu\xe9m consegue manter.

O caminho que funciona \xe9 come\xe7ar simples: automatize o primeiro contato e o agendamento. Deixe o resto para humanos. Depois de 30 dias funcionando, voc\xea vai ter dados reais de quais s\xe3o as pr\xf3ximas mensagens mais frequentes — e automatiza essas tamb\xe9m.

---

## Como a Upper Implementa Automa\xe7\xe3o de WhatsApp

A Upper n\xe3o entrega ferramentas. Entrega o sistema funcionando — configurado, testado e integrado com os processos do seu neg\xf3cio.

O processo come\xe7a com um diagn\xf3stico do seu atendimento atual: quais mensagens chegam mais, onde os leads est\xe3o sendo perdidos, quanto tempo sua equipe gasta em respostas repetitivas.

A partir da\xed, a gente monta o fluxo, configura a API, integra com sua agenda ou sistema de gest\xe3o, e entrega um sistema que come\xe7a a trabalhar por voc\xea desde o primeiro dia.

Se voc\xea se identificou com algum dos cen\xe1rios deste artigo, vale uma conversa.

---

## Quer Ver Como Funcionaria no Seu Neg\xf3cio?

A Upper faz um diagn\xf3stico gratuito do seu atendimento via WhatsApp — mapeamos o fluxo atual, identificamos onde est\xe3o os gargalos e te mostramos exatamente o que pode ser automatizado.

Sem compromisso. S\xf3 o diagn\xf3stico — e o que fazer com ele.

[Quero meu diagn\xf3stico gratuito →](${h})

---

*Publicado por Upper Agency — Infraestrutura Digital para Empresas Locais.*
*SEO Local \xb7 GEO \xb7 WhatsApp Inteligente \xb7 Automa\xe7\xe3o com IA*
`},readTime:"11 min",imageUrl:"/images/blog/whatsapp-automation-header.png"}];a.s(["WHATSAPP_URL",0,h,"posts",0,i],95221);var j=a.i(50944);a.s(["Navbar",0,({onTriggerSecretOffer:a,customLinks:d})=>{let[i,k]=(0,c.useState)(!1),[l,m]=(0,c.useState)(!1),[n,o]=(0,c.useState)(0),p=(0,c.useRef)(null),q=(0,j.usePathname)(),r=(0,j.useRouter)();(0,c.useEffect)(()=>{let a=()=>k(window.scrollY>20);return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),(0,c.useEffect)(()=>{l?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[l]);let s=(a,b)=>{if(a.preventDefault(),m(!1),"blog"===b)return void r.push("/blog");if("cidades"===b)return void r.push("/cidades");let c=document.getElementById(b);if(c){let a=document.body.getBoundingClientRect().top,d=c.getBoundingClientRect().top;window.scrollTo({top:d-a-80,behavior:"smooth"}),window.history.pushState(null,"",`#${b}`);return}"/"!==q&&r.push(`/#${b}`)},t=d||[{id:"inicio",label:"Home"},{id:"servicos",label:"Serviços"},{id:"blog",label:"Blog"},{id:"planos",label:"Planos"},{id:"cidades",label:"Cidades"}];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("nav",{className:`fixed top-0 left-0 right-0 z-[350] transition-all duration-500 ${i?"bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-900/50 py-3":"bg-transparent py-6 md:py-10"}`,children:(0,b.jsxs)("div",{className:"max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between",children:[(0,b.jsxs)("button",{onClick:b=>{if(b.preventDefault(),"/"!==q)return void r.push("/");let c=n+1;o(c),p.current&&window.clearTimeout(p.current),p.current=window.setTimeout(()=>{2===c&&a?a():window.scrollTo({top:0,behavior:"smooth"}),o(0)},400)},className:"text-xl font-black tracking-tighter text-white uppercase active:scale-95 transition-transform",children:["Upper",(0,b.jsx)("span",{className:"text-emerald-500",children:"."})]}),(0,b.jsx)("div",{className:"hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500",children:t.map(a=>(0,b.jsxs)("a",{href:`#${a.id}`,onClick:b=>s(b,a.id),className:"hover:text-white transition-colors relative group",children:[a.label,(0,b.jsx)("span",{className:"absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all duration-300 group-hover:w-full"})]},a.id))}),(0,b.jsx)("button",{className:"md:hidden text-zinc-400 p-2 transition-transform active:scale-90",onClick:()=>m(!l),"aria-label":l?"Fechar Menu":"Abrir Menu",children:l?(0,b.jsx)(f,{size:28,className:"text-white"}):(0,b.jsx)(e,{size:28})})]})}),(0,b.jsxs)("div",{className:`fixed inset-0 z-[300] transition-all duration-500 ease-in-out ${l?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,children:[(0,b.jsx)("div",{className:`absolute inset-0 bg-zinc-950/95 backdrop-blur-2xl transition-transform duration-700 ${l?"translate-y-0":"-translate-y-full"}`}),(0,b.jsx)("div",{className:"relative h-full flex flex-col items-center justify-center p-8",children:(0,b.jsxs)("div",{className:"flex flex-col gap-6 text-center w-full max-w-xs",children:[t.map((a,c)=>(0,b.jsx)("a",{href:`#${a.id}`,onClick:b=>s(b,a.id),className:`text-3xl font-black text-white uppercase tracking-tighter transition-all duration-500 transform ${l?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,style:{transitionDelay:`${100*c}ms`},children:(0,b.jsx)("span",{className:"hover:text-emerald-500 transition-colors inline-block",children:a.label})},a.id)),(0,b.jsx)("div",{className:`mt-12 transition-all duration-500 transform ${l?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,style:{transitionDelay:"400ms"},children:(0,b.jsxs)("a",{href:h,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 bg-emerald-500 text-zinc-950 font-black uppercase text-[10px] tracking-widest py-5 rounded-full",children:["Diagnóstico Gratuito",(0,b.jsx)(g,{size:14})]})})]})})]})]})}],346)}];

//# sourceMappingURL=_e104c029._.js.map
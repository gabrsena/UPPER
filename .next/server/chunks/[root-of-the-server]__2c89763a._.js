module.exports=[61724,(e,a,t)=>{a.exports=e.x("next/dist/compiled/next-server/app-route-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-route-turbo.runtime.prod.js"))},47909,(e,a,t)=>{a.exports=e.r(61724)},17413,(e,a,t)=>{(()=>{"use strict";let t,r,o,n,s;var i,c,u,d,l,m,p,f,g,h,x,b,v,y,E,_,A={491:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ContextAPI=void 0;let r=t(223),o=t(172),n=t(930),s="context",i=new r.NoopContextManager;class c{static getInstance(){return this._instance||(this._instance=new c),this._instance}setGlobalContextManager(e){return(0,o.registerGlobal)(s,e,n.DiagAPI.instance())}active(){return this._getContextManager().active()}with(e,a,t,...r){return this._getContextManager().with(e,a,t,...r)}bind(e,a){return this._getContextManager().bind(e,a)}_getContextManager(){return(0,o.getGlobal)(s)||i}disable(){this._getContextManager().disable(),(0,o.unregisterGlobal)(s,n.DiagAPI.instance())}}a.ContextAPI=c},930:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.DiagAPI=void 0;let r=t(56),o=t(912),n=t(957),s=t(172);class i{constructor(){function e(e){return function(...a){let t=(0,s.getGlobal)("diag");if(t)return t[e](...a)}}const a=this;a.setLogger=(e,t={logLevel:n.DiagLogLevel.INFO})=>{var r,i,c;if(e===a){let e=Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");return a.error(null!=(r=e.stack)?r:e.message),!1}"number"==typeof t&&(t={logLevel:t});let u=(0,s.getGlobal)("diag"),d=(0,o.createLogLevelDiagLogger)(null!=(i=t.logLevel)?i:n.DiagLogLevel.INFO,e);if(u&&!t.suppressOverrideMessage){let e=null!=(c=Error().stack)?c:"<failed to generate stacktrace>";u.warn(`Current logger will be overwritten from ${e}`),d.warn(`Current logger will overwrite one already registered from ${e}`)}return(0,s.registerGlobal)("diag",d,a,!0)},a.disable=()=>{(0,s.unregisterGlobal)("diag",a)},a.createComponentLogger=e=>new r.DiagComponentLogger(e),a.verbose=e("verbose"),a.debug=e("debug"),a.info=e("info"),a.warn=e("warn"),a.error=e("error")}static instance(){return this._instance||(this._instance=new i),this._instance}}a.DiagAPI=i},653:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.MetricsAPI=void 0;let r=t(660),o=t(172),n=t(930),s="metrics";class i{static getInstance(){return this._instance||(this._instance=new i),this._instance}setGlobalMeterProvider(e){return(0,o.registerGlobal)(s,e,n.DiagAPI.instance())}getMeterProvider(){return(0,o.getGlobal)(s)||r.NOOP_METER_PROVIDER}getMeter(e,a,t){return this.getMeterProvider().getMeter(e,a,t)}disable(){(0,o.unregisterGlobal)(s,n.DiagAPI.instance())}}a.MetricsAPI=i},181:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.PropagationAPI=void 0;let r=t(172),o=t(874),n=t(194),s=t(277),i=t(369),c=t(930),u="propagation",d=new o.NoopTextMapPropagator;class l{constructor(){this.createBaggage=i.createBaggage,this.getBaggage=s.getBaggage,this.getActiveBaggage=s.getActiveBaggage,this.setBaggage=s.setBaggage,this.deleteBaggage=s.deleteBaggage}static getInstance(){return this._instance||(this._instance=new l),this._instance}setGlobalPropagator(e){return(0,r.registerGlobal)(u,e,c.DiagAPI.instance())}inject(e,a,t=n.defaultTextMapSetter){return this._getGlobalPropagator().inject(e,a,t)}extract(e,a,t=n.defaultTextMapGetter){return this._getGlobalPropagator().extract(e,a,t)}fields(){return this._getGlobalPropagator().fields()}disable(){(0,r.unregisterGlobal)(u,c.DiagAPI.instance())}_getGlobalPropagator(){return(0,r.getGlobal)(u)||d}}a.PropagationAPI=l},997:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.TraceAPI=void 0;let r=t(172),o=t(846),n=t(139),s=t(607),i=t(930),c="trace";class u{constructor(){this._proxyTracerProvider=new o.ProxyTracerProvider,this.wrapSpanContext=n.wrapSpanContext,this.isSpanContextValid=n.isSpanContextValid,this.deleteSpan=s.deleteSpan,this.getSpan=s.getSpan,this.getActiveSpan=s.getActiveSpan,this.getSpanContext=s.getSpanContext,this.setSpan=s.setSpan,this.setSpanContext=s.setSpanContext}static getInstance(){return this._instance||(this._instance=new u),this._instance}setGlobalTracerProvider(e){let a=(0,r.registerGlobal)(c,this._proxyTracerProvider,i.DiagAPI.instance());return a&&this._proxyTracerProvider.setDelegate(e),a}getTracerProvider(){return(0,r.getGlobal)(c)||this._proxyTracerProvider}getTracer(e,a){return this.getTracerProvider().getTracer(e,a)}disable(){(0,r.unregisterGlobal)(c,i.DiagAPI.instance()),this._proxyTracerProvider=new o.ProxyTracerProvider}}a.TraceAPI=u},277:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.deleteBaggage=a.setBaggage=a.getActiveBaggage=a.getBaggage=void 0;let r=t(491),o=(0,t(780).createContextKey)("OpenTelemetry Baggage Key");function n(e){return e.getValue(o)||void 0}a.getBaggage=n,a.getActiveBaggage=function(){return n(r.ContextAPI.getInstance().active())},a.setBaggage=function(e,a){return e.setValue(o,a)},a.deleteBaggage=function(e){return e.deleteValue(o)}},993:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.BaggageImpl=void 0;class t{constructor(e){this._entries=e?new Map(e):new Map}getEntry(e){let a=this._entries.get(e);if(a)return Object.assign({},a)}getAllEntries(){return Array.from(this._entries.entries()).map(([e,a])=>[e,a])}setEntry(e,a){let r=new t(this._entries);return r._entries.set(e,a),r}removeEntry(e){let a=new t(this._entries);return a._entries.delete(e),a}removeEntries(...e){let a=new t(this._entries);for(let t of e)a._entries.delete(t);return a}clear(){return new t}}a.BaggageImpl=t},830:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.baggageEntryMetadataSymbol=void 0,a.baggageEntryMetadataSymbol=Symbol("BaggageEntryMetadata")},369:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.baggageEntryMetadataFromString=a.createBaggage=void 0;let r=t(930),o=t(993),n=t(830),s=r.DiagAPI.instance();a.createBaggage=function(e={}){return new o.BaggageImpl(new Map(Object.entries(e)))},a.baggageEntryMetadataFromString=function(e){return"string"!=typeof e&&(s.error(`Cannot create baggage metadata from unknown type: ${typeof e}`),e=""),{__TYPE__:n.baggageEntryMetadataSymbol,toString:()=>e}}},67:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.context=void 0,a.context=t(491).ContextAPI.getInstance()},223:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.NoopContextManager=void 0;let r=t(780);a.NoopContextManager=class{active(){return r.ROOT_CONTEXT}with(e,a,t,...r){return a.call(t,...r)}bind(e,a){return a}enable(){return this}disable(){return this}}},780:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ROOT_CONTEXT=a.createContextKey=void 0,a.createContextKey=function(e){return Symbol.for(e)};class t{constructor(e){const a=this;a._currentContext=e?new Map(e):new Map,a.getValue=e=>a._currentContext.get(e),a.setValue=(e,r)=>{let o=new t(a._currentContext);return o._currentContext.set(e,r),o},a.deleteValue=e=>{let r=new t(a._currentContext);return r._currentContext.delete(e),r}}}a.ROOT_CONTEXT=new t},506:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.diag=void 0,a.diag=t(930).DiagAPI.instance()},56:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.DiagComponentLogger=void 0;let r=t(172);function o(e,a,t){let o=(0,r.getGlobal)("diag");if(o)return t.unshift(a),o[e](...t)}a.DiagComponentLogger=class{constructor(e){this._namespace=e.namespace||"DiagComponentLogger"}debug(...e){return o("debug",this._namespace,e)}error(...e){return o("error",this._namespace,e)}info(...e){return o("info",this._namespace,e)}warn(...e){return o("warn",this._namespace,e)}verbose(...e){return o("verbose",this._namespace,e)}}},972:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.DiagConsoleLogger=void 0;let t=[{n:"error",c:"error"},{n:"warn",c:"warn"},{n:"info",c:"info"},{n:"debug",c:"debug"},{n:"verbose",c:"trace"}];a.DiagConsoleLogger=class{constructor(){for(let e=0;e<t.length;e++)this[t[e].n]=function(e){return function(...a){if(console){let t=console[e];if("function"!=typeof t&&(t=console.log),"function"==typeof t)return t.apply(console,a)}}}(t[e].c)}}},912:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.createLogLevelDiagLogger=void 0;let r=t(957);a.createLogLevelDiagLogger=function(e,a){function t(t,r){let o=a[t];return"function"==typeof o&&e>=r?o.bind(a):function(){}}return e<r.DiagLogLevel.NONE?e=r.DiagLogLevel.NONE:e>r.DiagLogLevel.ALL&&(e=r.DiagLogLevel.ALL),a=a||{},{error:t("error",r.DiagLogLevel.ERROR),warn:t("warn",r.DiagLogLevel.WARN),info:t("info",r.DiagLogLevel.INFO),debug:t("debug",r.DiagLogLevel.DEBUG),verbose:t("verbose",r.DiagLogLevel.VERBOSE)}}},957:(e,a)=>{var t;Object.defineProperty(a,"__esModule",{value:!0}),a.DiagLogLevel=void 0,(t=a.DiagLogLevel||(a.DiagLogLevel={}))[t.NONE=0]="NONE",t[t.ERROR=30]="ERROR",t[t.WARN=50]="WARN",t[t.INFO=60]="INFO",t[t.DEBUG=70]="DEBUG",t[t.VERBOSE=80]="VERBOSE",t[t.ALL=9999]="ALL"},172:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.unregisterGlobal=a.getGlobal=a.registerGlobal=void 0;let r=t(200),o=t(521),n=t(130),s=o.VERSION.split(".")[0],i=Symbol.for(`opentelemetry.js.api.${s}`),c=r._globalThis;a.registerGlobal=function(e,a,t,r=!1){var n;let s=c[i]=null!=(n=c[i])?n:{version:o.VERSION};if(!r&&s[e]){let a=Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);return t.error(a.stack||a.message),!1}if(s.version!==o.VERSION){let a=Error(`@opentelemetry/api: Registration of version v${s.version} for ${e} does not match previously registered API v${o.VERSION}`);return t.error(a.stack||a.message),!1}return s[e]=a,t.debug(`@opentelemetry/api: Registered a global for ${e} v${o.VERSION}.`),!0},a.getGlobal=function(e){var a,t;let r=null==(a=c[i])?void 0:a.version;if(r&&(0,n.isCompatible)(r))return null==(t=c[i])?void 0:t[e]},a.unregisterGlobal=function(e,a){a.debug(`@opentelemetry/api: Unregistering a global for ${e} v${o.VERSION}.`);let t=c[i];t&&delete t[e]}},130:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.isCompatible=a._makeCompatibilityCheck=void 0;let r=t(521),o=/^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;function n(e){let a=new Set([e]),t=new Set,r=e.match(o);if(!r)return()=>!1;let n={major:+r[1],minor:+r[2],patch:+r[3],prerelease:r[4]};if(null!=n.prerelease)return function(a){return a===e};function s(e){return t.add(e),!1}return function(e){if(a.has(e))return!0;if(t.has(e))return!1;let r=e.match(o);if(!r)return s(e);let i={major:+r[1],minor:+r[2],patch:+r[3],prerelease:r[4]};if(null!=i.prerelease||n.major!==i.major)return s(e);if(0===n.major)return n.minor===i.minor&&n.patch<=i.patch?(a.add(e),!0):s(e);return n.minor<=i.minor?(a.add(e),!0):s(e)}}a._makeCompatibilityCheck=n,a.isCompatible=n(r.VERSION)},886:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.metrics=void 0,a.metrics=t(653).MetricsAPI.getInstance()},901:(e,a)=>{var t;Object.defineProperty(a,"__esModule",{value:!0}),a.ValueType=void 0,(t=a.ValueType||(a.ValueType={}))[t.INT=0]="INT",t[t.DOUBLE=1]="DOUBLE"},102:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.createNoopMeter=a.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC=a.NOOP_OBSERVABLE_GAUGE_METRIC=a.NOOP_OBSERVABLE_COUNTER_METRIC=a.NOOP_UP_DOWN_COUNTER_METRIC=a.NOOP_HISTOGRAM_METRIC=a.NOOP_COUNTER_METRIC=a.NOOP_METER=a.NoopObservableUpDownCounterMetric=a.NoopObservableGaugeMetric=a.NoopObservableCounterMetric=a.NoopObservableMetric=a.NoopHistogramMetric=a.NoopUpDownCounterMetric=a.NoopCounterMetric=a.NoopMetric=a.NoopMeter=void 0;class t{createHistogram(e,t){return a.NOOP_HISTOGRAM_METRIC}createCounter(e,t){return a.NOOP_COUNTER_METRIC}createUpDownCounter(e,t){return a.NOOP_UP_DOWN_COUNTER_METRIC}createObservableGauge(e,t){return a.NOOP_OBSERVABLE_GAUGE_METRIC}createObservableCounter(e,t){return a.NOOP_OBSERVABLE_COUNTER_METRIC}createObservableUpDownCounter(e,t){return a.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC}addBatchObservableCallback(e,a){}removeBatchObservableCallback(e){}}a.NoopMeter=t;class r{}a.NoopMetric=r;class o extends r{add(e,a){}}a.NoopCounterMetric=o;class n extends r{add(e,a){}}a.NoopUpDownCounterMetric=n;class s extends r{record(e,a){}}a.NoopHistogramMetric=s;class i{addCallback(e){}removeCallback(e){}}a.NoopObservableMetric=i;class c extends i{}a.NoopObservableCounterMetric=c;class u extends i{}a.NoopObservableGaugeMetric=u;class d extends i{}a.NoopObservableUpDownCounterMetric=d,a.NOOP_METER=new t,a.NOOP_COUNTER_METRIC=new o,a.NOOP_HISTOGRAM_METRIC=new s,a.NOOP_UP_DOWN_COUNTER_METRIC=new n,a.NOOP_OBSERVABLE_COUNTER_METRIC=new c,a.NOOP_OBSERVABLE_GAUGE_METRIC=new u,a.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC=new d,a.createNoopMeter=function(){return a.NOOP_METER}},660:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.NOOP_METER_PROVIDER=a.NoopMeterProvider=void 0;let r=t(102);class o{getMeter(e,a,t){return r.NOOP_METER}}a.NoopMeterProvider=o,a.NOOP_METER_PROVIDER=new o},200:function(e,a,t){var r=this&&this.__createBinding||(Object.create?function(e,a,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,r){void 0===r&&(r=t),e[r]=a[t]}),o=this&&this.__exportStar||function(e,a){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(a,t)||r(a,e,t)};Object.defineProperty(a,"__esModule",{value:!0}),o(t(46),a)},651:(a,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t._globalThis=void 0,t._globalThis="object"==typeof globalThis?globalThis:e.g},46:function(e,a,t){var r=this&&this.__createBinding||(Object.create?function(e,a,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,r){void 0===r&&(r=t),e[r]=a[t]}),o=this&&this.__exportStar||function(e,a){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(a,t)||r(a,e,t)};Object.defineProperty(a,"__esModule",{value:!0}),o(t(651),a)},939:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.propagation=void 0,a.propagation=t(181).PropagationAPI.getInstance()},874:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.NoopTextMapPropagator=void 0,a.NoopTextMapPropagator=class{inject(e,a){}extract(e,a){return e}fields(){return[]}}},194:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.defaultTextMapSetter=a.defaultTextMapGetter=void 0,a.defaultTextMapGetter={get(e,a){if(null!=e)return e[a]},keys:e=>null==e?[]:Object.keys(e)},a.defaultTextMapSetter={set(e,a,t){null!=e&&(e[a]=t)}}},845:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.trace=void 0,a.trace=t(997).TraceAPI.getInstance()},403:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.NonRecordingSpan=void 0;let r=t(476);a.NonRecordingSpan=class{constructor(e=r.INVALID_SPAN_CONTEXT){this._spanContext=e}spanContext(){return this._spanContext}setAttribute(e,a){return this}setAttributes(e){return this}addEvent(e,a){return this}setStatus(e){return this}updateName(e){return this}end(e){}isRecording(){return!1}recordException(e,a){}}},614:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.NoopTracer=void 0;let r=t(491),o=t(607),n=t(403),s=t(139),i=r.ContextAPI.getInstance();a.NoopTracer=class{startSpan(e,a,t=i.active()){var r;if(null==a?void 0:a.root)return new n.NonRecordingSpan;let c=t&&(0,o.getSpanContext)(t);return"object"==typeof(r=c)&&"string"==typeof r.spanId&&"string"==typeof r.traceId&&"number"==typeof r.traceFlags&&(0,s.isSpanContextValid)(c)?new n.NonRecordingSpan(c):new n.NonRecordingSpan}startActiveSpan(e,a,t,r){let n,s,c;if(arguments.length<2)return;2==arguments.length?c=a:3==arguments.length?(n=a,c=t):(n=a,s=t,c=r);let u=null!=s?s:i.active(),d=this.startSpan(e,n,u),l=(0,o.setSpan)(u,d);return i.with(l,c,void 0,d)}}},124:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.NoopTracerProvider=void 0;let r=t(614);a.NoopTracerProvider=class{getTracer(e,a,t){return new r.NoopTracer}}},125:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ProxyTracer=void 0;let r=new(t(614)).NoopTracer;a.ProxyTracer=class{constructor(e,a,t,r){this._provider=e,this.name=a,this.version=t,this.options=r}startSpan(e,a,t){return this._getTracer().startSpan(e,a,t)}startActiveSpan(e,a,t,r){let o=this._getTracer();return Reflect.apply(o.startActiveSpan,o,arguments)}_getTracer(){if(this._delegate)return this._delegate;let e=this._provider.getDelegateTracer(this.name,this.version,this.options);return e?(this._delegate=e,this._delegate):r}}},846:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ProxyTracerProvider=void 0;let r=t(125),o=new(t(124)).NoopTracerProvider;a.ProxyTracerProvider=class{getTracer(e,a,t){var o;return null!=(o=this.getDelegateTracer(e,a,t))?o:new r.ProxyTracer(this,e,a,t)}getDelegate(){var e;return null!=(e=this._delegate)?e:o}setDelegate(e){this._delegate=e}getDelegateTracer(e,a,t){var r;return null==(r=this._delegate)?void 0:r.getTracer(e,a,t)}}},996:(e,a)=>{var t;Object.defineProperty(a,"__esModule",{value:!0}),a.SamplingDecision=void 0,(t=a.SamplingDecision||(a.SamplingDecision={}))[t.NOT_RECORD=0]="NOT_RECORD",t[t.RECORD=1]="RECORD",t[t.RECORD_AND_SAMPLED=2]="RECORD_AND_SAMPLED"},607:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.getSpanContext=a.setSpanContext=a.deleteSpan=a.setSpan=a.getActiveSpan=a.getSpan=void 0;let r=t(780),o=t(403),n=t(491),s=(0,r.createContextKey)("OpenTelemetry Context Key SPAN");function i(e){return e.getValue(s)||void 0}function c(e,a){return e.setValue(s,a)}a.getSpan=i,a.getActiveSpan=function(){return i(n.ContextAPI.getInstance().active())},a.setSpan=c,a.deleteSpan=function(e){return e.deleteValue(s)},a.setSpanContext=function(e,a){return c(e,new o.NonRecordingSpan(a))},a.getSpanContext=function(e){var a;return null==(a=i(e))?void 0:a.spanContext()}},325:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.TraceStateImpl=void 0;let r=t(564);class o{constructor(e){this._internalState=new Map,e&&this._parse(e)}set(e,a){let t=this._clone();return t._internalState.has(e)&&t._internalState.delete(e),t._internalState.set(e,a),t}unset(e){let a=this._clone();return a._internalState.delete(e),a}get(e){return this._internalState.get(e)}serialize(){return this._keys().reduce((e,a)=>(e.push(a+"="+this.get(a)),e),[]).join(",")}_parse(e){!(e.length>512)&&(this._internalState=e.split(",").reverse().reduce((e,a)=>{let t=a.trim(),o=t.indexOf("=");if(-1!==o){let n=t.slice(0,o),s=t.slice(o+1,a.length);(0,r.validateKey)(n)&&(0,r.validateValue)(s)&&e.set(n,s)}return e},new Map),this._internalState.size>32&&(this._internalState=new Map(Array.from(this._internalState.entries()).reverse().slice(0,32))))}_keys(){return Array.from(this._internalState.keys()).reverse()}_clone(){let e=new o;return e._internalState=new Map(this._internalState),e}}a.TraceStateImpl=o},564:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.validateValue=a.validateKey=void 0;let t="[_0-9a-z-*/]",r=`[a-z]${t}{0,255}`,o=`[a-z0-9]${t}{0,240}@[a-z]${t}{0,13}`,n=RegExp(`^(?:${r}|${o})$`),s=/^[ -~]{0,255}[!-~]$/,i=/,|=/;a.validateKey=function(e){return n.test(e)},a.validateValue=function(e){return s.test(e)&&!i.test(e)}},98:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.createTraceState=void 0;let r=t(325);a.createTraceState=function(e){return new r.TraceStateImpl(e)}},476:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.INVALID_SPAN_CONTEXT=a.INVALID_TRACEID=a.INVALID_SPANID=void 0;let r=t(475);a.INVALID_SPANID="0000000000000000",a.INVALID_TRACEID="00000000000000000000000000000000",a.INVALID_SPAN_CONTEXT={traceId:a.INVALID_TRACEID,spanId:a.INVALID_SPANID,traceFlags:r.TraceFlags.NONE}},357:(e,a)=>{var t;Object.defineProperty(a,"__esModule",{value:!0}),a.SpanKind=void 0,(t=a.SpanKind||(a.SpanKind={}))[t.INTERNAL=0]="INTERNAL",t[t.SERVER=1]="SERVER",t[t.CLIENT=2]="CLIENT",t[t.PRODUCER=3]="PRODUCER",t[t.CONSUMER=4]="CONSUMER"},139:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.wrapSpanContext=a.isSpanContextValid=a.isValidSpanId=a.isValidTraceId=void 0;let r=t(476),o=t(403),n=/^([0-9a-f]{32})$/i,s=/^[0-9a-f]{16}$/i;function i(e){return n.test(e)&&e!==r.INVALID_TRACEID}function c(e){return s.test(e)&&e!==r.INVALID_SPANID}a.isValidTraceId=i,a.isValidSpanId=c,a.isSpanContextValid=function(e){return i(e.traceId)&&c(e.spanId)},a.wrapSpanContext=function(e){return new o.NonRecordingSpan(e)}},847:(e,a)=>{var t;Object.defineProperty(a,"__esModule",{value:!0}),a.SpanStatusCode=void 0,(t=a.SpanStatusCode||(a.SpanStatusCode={}))[t.UNSET=0]="UNSET",t[t.OK=1]="OK",t[t.ERROR=2]="ERROR"},475:(e,a)=>{var t;Object.defineProperty(a,"__esModule",{value:!0}),a.TraceFlags=void 0,(t=a.TraceFlags||(a.TraceFlags={}))[t.NONE=0]="NONE",t[t.SAMPLED=1]="SAMPLED"},521:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.VERSION=void 0,a.VERSION="1.6.0"}},S={};function w(e){var a=S[e];if(void 0!==a)return a.exports;var t=S[e]={exports:{}},r=!0;try{A[e].call(t.exports,t,t.exports,w),r=!1}finally{r&&delete S[e]}return t.exports}w.ab="/ROOT/node_modules/next/dist/compiled/@opentelemetry/api/";var R={};Object.defineProperty(R,"__esModule",{value:!0}),R.trace=R.propagation=R.metrics=R.diag=R.context=R.INVALID_SPAN_CONTEXT=R.INVALID_TRACEID=R.INVALID_SPANID=R.isValidSpanId=R.isValidTraceId=R.isSpanContextValid=R.createTraceState=R.TraceFlags=R.SpanStatusCode=R.SpanKind=R.SamplingDecision=R.ProxyTracerProvider=R.ProxyTracer=R.defaultTextMapSetter=R.defaultTextMapGetter=R.ValueType=R.createNoopMeter=R.DiagLogLevel=R.DiagConsoleLogger=R.ROOT_CONTEXT=R.createContextKey=R.baggageEntryMetadataFromString=void 0,i=w(369),Object.defineProperty(R,"baggageEntryMetadataFromString",{enumerable:!0,get:function(){return i.baggageEntryMetadataFromString}}),c=w(780),Object.defineProperty(R,"createContextKey",{enumerable:!0,get:function(){return c.createContextKey}}),Object.defineProperty(R,"ROOT_CONTEXT",{enumerable:!0,get:function(){return c.ROOT_CONTEXT}}),u=w(972),Object.defineProperty(R,"DiagConsoleLogger",{enumerable:!0,get:function(){return u.DiagConsoleLogger}}),d=w(957),Object.defineProperty(R,"DiagLogLevel",{enumerable:!0,get:function(){return d.DiagLogLevel}}),l=w(102),Object.defineProperty(R,"createNoopMeter",{enumerable:!0,get:function(){return l.createNoopMeter}}),m=w(901),Object.defineProperty(R,"ValueType",{enumerable:!0,get:function(){return m.ValueType}}),p=w(194),Object.defineProperty(R,"defaultTextMapGetter",{enumerable:!0,get:function(){return p.defaultTextMapGetter}}),Object.defineProperty(R,"defaultTextMapSetter",{enumerable:!0,get:function(){return p.defaultTextMapSetter}}),f=w(125),Object.defineProperty(R,"ProxyTracer",{enumerable:!0,get:function(){return f.ProxyTracer}}),g=w(846),Object.defineProperty(R,"ProxyTracerProvider",{enumerable:!0,get:function(){return g.ProxyTracerProvider}}),h=w(996),Object.defineProperty(R,"SamplingDecision",{enumerable:!0,get:function(){return h.SamplingDecision}}),x=w(357),Object.defineProperty(R,"SpanKind",{enumerable:!0,get:function(){return x.SpanKind}}),b=w(847),Object.defineProperty(R,"SpanStatusCode",{enumerable:!0,get:function(){return b.SpanStatusCode}}),v=w(475),Object.defineProperty(R,"TraceFlags",{enumerable:!0,get:function(){return v.TraceFlags}}),y=w(98),Object.defineProperty(R,"createTraceState",{enumerable:!0,get:function(){return y.createTraceState}}),E=w(139),Object.defineProperty(R,"isSpanContextValid",{enumerable:!0,get:function(){return E.isSpanContextValid}}),Object.defineProperty(R,"isValidTraceId",{enumerable:!0,get:function(){return E.isValidTraceId}}),Object.defineProperty(R,"isValidSpanId",{enumerable:!0,get:function(){return E.isValidSpanId}}),_=w(476),Object.defineProperty(R,"INVALID_SPANID",{enumerable:!0,get:function(){return _.INVALID_SPANID}}),Object.defineProperty(R,"INVALID_TRACEID",{enumerable:!0,get:function(){return _.INVALID_TRACEID}}),Object.defineProperty(R,"INVALID_SPAN_CONTEXT",{enumerable:!0,get:function(){return _.INVALID_SPAN_CONTEXT}}),t=w(67),Object.defineProperty(R,"context",{enumerable:!0,get:function(){return t.context}}),r=w(506),Object.defineProperty(R,"diag",{enumerable:!0,get:function(){return r.diag}}),o=w(886),Object.defineProperty(R,"metrics",{enumerable:!0,get:function(){return o.metrics}}),n=w(939),Object.defineProperty(R,"propagation",{enumerable:!0,get:function(){return n.propagation}}),s=w(845),Object.defineProperty(R,"trace",{enumerable:!0,get:function(){return s.trace}}),R.default={context:t.context,diag:r.diag,metrics:o.metrics,propagation:n.propagation,trace:s.trace},a.exports=R})()},42315,(e,a,t)=>{"use strict";a.exports=e.r(18622)},47540,(e,a,t)=>{"use strict";a.exports=e.r(42315).vendored["react-rsc"].React},19481,(e,a,t)=>{"use strict";var r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,i={},c={RequestCookies:()=>g,ResponseCookies:()=>h,parseCookie:()=>l,parseSetCookie:()=>m,stringifyCookie:()=>d};for(var u in c)r(i,u,{get:c[u],enumerable:!0});function d(e){var a;let t=["path"in e&&e.path&&`Path=${e.path}`,"expires"in e&&(e.expires||0===e.expires)&&`Expires=${("number"==typeof e.expires?new Date(e.expires):e.expires).toUTCString()}`,"maxAge"in e&&"number"==typeof e.maxAge&&`Max-Age=${e.maxAge}`,"domain"in e&&e.domain&&`Domain=${e.domain}`,"secure"in e&&e.secure&&"Secure","httpOnly"in e&&e.httpOnly&&"HttpOnly","sameSite"in e&&e.sameSite&&`SameSite=${e.sameSite}`,"partitioned"in e&&e.partitioned&&"Partitioned","priority"in e&&e.priority&&`Priority=${e.priority}`].filter(Boolean),r=`${e.name}=${encodeURIComponent(null!=(a=e.value)?a:"")}`;return 0===t.length?r:`${r}; ${t.join("; ")}`}function l(e){let a=new Map;for(let t of e.split(/; */)){if(!t)continue;let e=t.indexOf("=");if(-1===e){a.set(t,"true");continue}let[r,o]=[t.slice(0,e),t.slice(e+1)];try{a.set(r,decodeURIComponent(null!=o?o:"true"))}catch{}}return a}function m(e){if(!e)return;let[[a,t],...r]=l(e),{domain:o,expires:n,httponly:s,maxage:i,path:c,samesite:u,secure:d,partitioned:m,priority:g}=Object.fromEntries(r.map(([e,a])=>[e.toLowerCase().replace(/-/g,""),a]));{var h,x,b={name:a,value:decodeURIComponent(t),domain:o,...n&&{expires:new Date(n)},...s&&{httpOnly:!0},..."string"==typeof i&&{maxAge:Number(i)},path:c,...u&&{sameSite:p.includes(h=(h=u).toLowerCase())?h:void 0},...d&&{secure:!0},...g&&{priority:f.includes(x=(x=g).toLowerCase())?x:void 0},...m&&{partitioned:!0}};let e={};for(let a in b)b[a]&&(e[a]=b[a]);return e}}a.exports=((e,a,t,i)=>{if(a&&"object"==typeof a||"function"==typeof a)for(let c of n(a))s.call(e,c)||c===t||r(e,c,{get:()=>a[c],enumerable:!(i=o(a,c))||i.enumerable});return e})(r({},"__esModule",{value:!0}),i);var p=["strict","lax","none"],f=["low","medium","high"],g=class{constructor(e){this._parsed=new Map,this._headers=e;const a=e.get("cookie");if(a)for(const[e,t]of l(a))this._parsed.set(e,{name:e,value:t})}[Symbol.iterator](){return this._parsed[Symbol.iterator]()}get size(){return this._parsed.size}get(...e){let a="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(a)}getAll(...e){var a;let t=Array.from(this._parsed);if(!e.length)return t.map(([e,a])=>a);let r="string"==typeof e[0]?e[0]:null==(a=e[0])?void 0:a.name;return t.filter(([e])=>e===r).map(([e,a])=>a)}has(e){return this._parsed.has(e)}set(...e){let[a,t]=1===e.length?[e[0].name,e[0].value]:e,r=this._parsed;return r.set(a,{name:a,value:t}),this._headers.set("cookie",Array.from(r).map(([e,a])=>d(a)).join("; ")),this}delete(e){let a=this._parsed,t=Array.isArray(e)?e.map(e=>a.delete(e)):a.delete(e);return this._headers.set("cookie",Array.from(a).map(([e,a])=>d(a)).join("; ")),t}clear(){return this.delete(Array.from(this._parsed.keys())),this}[Symbol.for("edge-runtime.inspect.custom")](){return`RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(e=>`${e.name}=${encodeURIComponent(e.value)}`).join("; ")}},h=class{constructor(e){var a,t,r;this._parsed=new Map,this._headers=e;const o=null!=(r=null!=(t=null==(a=e.getSetCookie)?void 0:a.call(e))?t:e.get("set-cookie"))?r:[];for(const e of Array.isArray(o)?o:function(e){if(!e)return[];var a,t,r,o,n,s=[],i=0;function c(){for(;i<e.length&&/\s/.test(e.charAt(i));)i+=1;return i<e.length}for(;i<e.length;){for(a=i,n=!1;c();)if(","===(t=e.charAt(i))){for(r=i,i+=1,c(),o=i;i<e.length&&"="!==(t=e.charAt(i))&&";"!==t&&","!==t;)i+=1;i<e.length&&"="===e.charAt(i)?(n=!0,i=o,s.push(e.substring(a,r)),a=i):i=r+1}else i+=1;(!n||i>=e.length)&&s.push(e.substring(a,e.length))}return s}(o)){const a=m(e);a&&this._parsed.set(a.name,a)}}get(...e){let a="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(a)}getAll(...e){var a;let t=Array.from(this._parsed.values());if(!e.length)return t;let r="string"==typeof e[0]?e[0]:null==(a=e[0])?void 0:a.name;return t.filter(e=>e.name===r)}has(e){return this._parsed.has(e)}set(...e){let[a,t,r]=1===e.length?[e[0].name,e[0].value,e[0]]:e,o=this._parsed;return o.set(a,function(e={name:"",value:""}){return"number"==typeof e.expires&&(e.expires=new Date(e.expires)),e.maxAge&&(e.expires=new Date(Date.now()+1e3*e.maxAge)),(null===e.path||void 0===e.path)&&(e.path="/"),e}({name:a,value:t,...r})),function(e,a){for(let[,t]of(a.delete("set-cookie"),e)){let e=d(t);a.append("set-cookie",e)}}(o,this._headers),this}delete(...e){let[a,t]="string"==typeof e[0]?[e[0]]:[e[0].name,e[0]];return this.set({...t,name:a,value:"",expires:new Date(0)})}[Symbol.for("edge-runtime.inspect.custom")](){return`ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(d).join("; ")}}},93118,(e,a,t)=>{(()=>{"use strict";"u">typeof __nccwpck_require__&&(__nccwpck_require__.ab="/ROOT/node_modules/next/dist/compiled/cookie/");var e,t,r,o,n={};n.parse=function(a,t){if("string"!=typeof a)throw TypeError("argument str must be a string");for(var o={},n=a.split(r),s=(t||{}).decode||e,i=0;i<n.length;i++){var c=n[i],u=c.indexOf("=");if(!(u<0)){var d=c.substr(0,u).trim(),l=c.substr(++u,c.length).trim();'"'==l[0]&&(l=l.slice(1,-1)),void 0==o[d]&&(o[d]=function(e,a){try{return a(e)}catch(a){return e}}(l,s))}}return o},n.serialize=function(e,a,r){var n=r||{},s=n.encode||t;if("function"!=typeof s)throw TypeError("option encode is invalid");if(!o.test(e))throw TypeError("argument name is invalid");var i=s(a);if(i&&!o.test(i))throw TypeError("argument val is invalid");var c=e+"="+i;if(null!=n.maxAge){var u=n.maxAge-0;if(isNaN(u)||!isFinite(u))throw TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(u)}if(n.domain){if(!o.test(n.domain))throw TypeError("option domain is invalid");c+="; Domain="+n.domain}if(n.path){if(!o.test(n.path))throw TypeError("option path is invalid");c+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw TypeError("option expires is invalid");c+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(c+="; HttpOnly"),n.secure&&(c+="; Secure"),n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return c},e=decodeURIComponent,t=encodeURIComponent,r=/; */,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,a.exports=n})()},47114,(e,a,t)=>{"use strict";function r(e,a,t){if(e){for(let r of(t&&(t=t.toLowerCase()),e))if(a===r.domain?.split(":",1)[0].toLowerCase()||t===r.defaultLocale.toLowerCase()||r.locales?.some(e=>e.toLowerCase()===t))return r}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"detectDomainLocale",{enumerable:!0,get:function(){return r}})},49084,(e,a,t)=>{"use strict";function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})},97741,(e,a,t)=>{"use strict";function r(e){let a=e.indexOf("#"),t=e.indexOf("?"),r=t>-1&&(a<0||t<a);return r||a>-1?{pathname:e.substring(0,r?t:a),query:r?e.substring(t,a>-1?a:void 0):"",hash:a>-1?e.slice(a):""}:{pathname:e,query:"",hash:""}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return r}})},34292,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathPrefix",{enumerable:!0,get:function(){return o}});let r=e.r(97741);function o(e,a){if(!e.startsWith("/")||!a)return e;let{pathname:t,query:o,hash:n}=(0,r.parsePath)(e);return`${a}${t}${o}${n}`}},87622,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathSuffix",{enumerable:!0,get:function(){return o}});let r=e.r(97741);function o(e,a){if(!e.startsWith("/")||!a)return e;let{pathname:t,query:o,hash:n}=(0,r.parsePath)(e);return`${t}${a}${o}${n}`}},98389,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return o}});let r=e.r(97741);function o(e,a){if("string"!=typeof e)return!1;let{pathname:t}=(0,r.parsePath)(e);return t===a||t.startsWith(a+"/")}},95414,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}});let r=e.r(34292),o=e.r(98389);function n(e,a,t,n){if(!a||a===t)return e;let s=e.toLowerCase();return!n&&((0,o.pathHasPrefix)(s,"/api")||(0,o.pathHasPrefix)(s,`/${a.toLowerCase()}`))?e:(0,r.addPathPrefix)(e,`/${a}`)}},25627,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"formatNextPathnameInfo",{enumerable:!0,get:function(){return i}});let r=e.r(49084),o=e.r(34292),n=e.r(87622),s=e.r(95414);function i(e){let a=(0,s.addLocale)(e.pathname,e.locale,e.buildId?void 0:e.defaultLocale,e.ignorePrefix);return(e.buildId||!e.trailingSlash)&&(a=(0,r.removeTrailingSlash)(a)),e.buildId&&(a=(0,n.addPathSuffix)((0,o.addPathPrefix)(a,`/_next/data/${e.buildId}`),"/"===e.pathname?"index.json":".json")),a=(0,o.addPathPrefix)(a,e.basePath),!e.buildId&&e.trailingSlash?a.endsWith("/")?a:(0,n.addPathSuffix)(a,"/"):(0,r.removeTrailingSlash)(a)}},64512,(e,a,t)=>{"use strict";function r(e,a){let t;if(a?.host&&!Array.isArray(a.host))t=a.host.toString().split(":",1)[0];else{if(!e.hostname)return;t=e.hostname}return t.toLowerCase()}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getHostname",{enumerable:!0,get:function(){return r}})},13545,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return o}});let r=new WeakMap;function o(e,a){let t;if(!a)return{pathname:e};let o=r.get(a);o||(o=a.map(e=>e.toLowerCase()),r.set(a,o));let n=e.split("/",2);if(!n[1])return{pathname:e};let s=n[1].toLowerCase(),i=o.indexOf(s);return i<0?{pathname:e}:(t=a[i],{pathname:e=e.slice(t.length+1)||"/",detectedLocale:t})}},50955,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removePathPrefix",{enumerable:!0,get:function(){return o}});let r=e.r(98389);function o(e,a){if(!(0,r.pathHasPrefix)(e,a))return e;let t=e.slice(a.length);return t.startsWith("/")?t:`/${t}`}},60622,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getNextPathnameInfo",{enumerable:!0,get:function(){return s}});let r=e.r(13545),o=e.r(50955),n=e.r(98389);function s(e,a){let{basePath:t,i18n:s,trailingSlash:i}=a.nextConfig??{},c={pathname:e,trailingSlash:"/"!==e?e.endsWith("/"):i};t&&(0,n.pathHasPrefix)(c.pathname,t)&&(c.pathname=(0,o.removePathPrefix)(c.pathname,t),c.basePath=t);let u=c.pathname;if(c.pathname.startsWith("/_next/data/")&&c.pathname.endsWith(".json")){let e=c.pathname.replace(/^\/_next\/data\//,"").replace(/\.json$/,"").split("/");c.buildId=e[0],u="index"!==e[1]?`/${e.slice(1).join("/")}`:"/",!0===a.parseData&&(c.pathname=u)}if(s){let e=a.i18nProvider?a.i18nProvider.analyze(c.pathname):(0,r.normalizeLocalePath)(c.pathname,s.locales);c.locale=e.detectedLocale,c.pathname=e.pathname??c.pathname,!e.detectedLocale&&c.buildId&&(e=a.i18nProvider?a.i18nProvider.analyze(u):(0,r.normalizeLocalePath)(u,s.locales)).detectedLocale&&(c.locale=e.detectedLocale)}return c}},99536,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NextURL",{enumerable:!0,get:function(){return d}});let r=e.r(47114),o=e.r(25627),n=e.r(64512),s=e.r(60622),i=/(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;function c(e,a){return new URL(String(e).replace(i,"localhost"),a&&String(a).replace(i,"localhost"))}let u=Symbol("NextURLInternal");class d{constructor(e,a,t){let r,o;"object"==typeof a&&"pathname"in a||"string"==typeof a?(r=a,o=t||{}):o=t||a||{},this[u]={url:c(e,r??o.base),options:o,basePath:""},this.analyze()}analyze(){var e,a,t,o,i;let c=(0,s.getNextPathnameInfo)(this[u].url.pathname,{nextConfig:this[u].options.nextConfig,parseData:!0,i18nProvider:this[u].options.i18nProvider}),d=(0,n.getHostname)(this[u].url,this[u].options.headers);this[u].domainLocale=this[u].options.i18nProvider?this[u].options.i18nProvider.detectDomainLocale(d):(0,r.detectDomainLocale)(null==(a=this[u].options.nextConfig)||null==(e=a.i18n)?void 0:e.domains,d);let l=(null==(t=this[u].domainLocale)?void 0:t.defaultLocale)||(null==(i=this[u].options.nextConfig)||null==(o=i.i18n)?void 0:o.defaultLocale);this[u].url.pathname=c.pathname,this[u].defaultLocale=l,this[u].basePath=c.basePath??"",this[u].buildId=c.buildId,this[u].locale=c.locale??l,this[u].trailingSlash=c.trailingSlash}formatPathname(){return(0,o.formatNextPathnameInfo)({basePath:this[u].basePath,buildId:this[u].buildId,defaultLocale:this[u].options.forceLocale?void 0:this[u].defaultLocale,locale:this[u].locale,pathname:this[u].url.pathname,trailingSlash:this[u].trailingSlash})}formatSearch(){return this[u].url.search}get buildId(){return this[u].buildId}set buildId(e){this[u].buildId=e}get locale(){return this[u].locale??""}set locale(e){var a,t;if(!this[u].locale||!(null==(t=this[u].options.nextConfig)||null==(a=t.i18n)?void 0:a.locales.includes(e)))throw Object.defineProperty(TypeError(`The NextURL configuration includes no locale "${e}"`),"__NEXT_ERROR_CODE",{value:"E597",enumerable:!1,configurable:!0});this[u].locale=e}get defaultLocale(){return this[u].defaultLocale}get domainLocale(){return this[u].domainLocale}get searchParams(){return this[u].url.searchParams}get host(){return this[u].url.host}set host(e){this[u].url.host=e}get hostname(){return this[u].url.hostname}set hostname(e){this[u].url.hostname=e}get port(){return this[u].url.port}set port(e){this[u].url.port=e}get protocol(){return this[u].url.protocol}set protocol(e){this[u].url.protocol=e}get href(){let e=this.formatPathname(),a=this.formatSearch();return`${this.protocol}//${this.host}${e}${a}${this.hash}`}set href(e){this[u].url=c(e),this.analyze()}get origin(){return this[u].url.origin}get pathname(){return this[u].url.pathname}set pathname(e){this[u].url.pathname=e}get hash(){return this[u].url.hash}set hash(e){this[u].url.hash=e}get search(){return this[u].url.search}set search(e){this[u].url.search=e}get password(){return this[u].url.password}set password(e){this[u].url.password=e}get username(){return this[u].url.username}set username(e){this[u].url.username=e}get basePath(){return this[u].basePath}set basePath(e){this[u].basePath=e.startsWith("/")?e:`/${e}`}toString(){return this.href}toJSON(){return this.href}[Symbol.for("edge-runtime.inspect.custom")](){return{href:this.href,origin:this.origin,protocol:this.protocol,username:this.username,password:this.password,host:this.host,hostname:this.hostname,port:this.port,pathname:this.pathname,search:this.search,searchParams:this.searchParams,hash:this.hash}}clone(){return new d(String(this),this[u].options)}}},91401,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={ACTION_SUFFIX:function(){return h},APP_DIR_ALIAS:function(){return k},CACHE_ONE_YEAR:function(){return O},DOT_NEXT_ALIAS:function(){return D},ESLINT_DEFAULT_DIRS:function(){return eo},GSP_NO_RETURNED_VALUE:function(){return J},GSSP_COMPONENT_MEMBER_ERROR:function(){return ea},GSSP_NO_RETURNED_VALUE:function(){return Z},HTML_CONTENT_TYPE_HEADER:function(){return s},INFINITE_CACHE:function(){return T},INSTRUMENTATION_HOOK_FILENAME:function(){return M},JSON_CONTENT_TYPE_HEADER:function(){return i},MATCHED_PATH_HEADER:function(){return d},MIDDLEWARE_FILENAME:function(){return C},MIDDLEWARE_LOCATION_REGEXP:function(){return I},NEXT_BODY_SUFFIX:function(){return v},NEXT_CACHE_IMPLICIT_TAG_ID:function(){return P},NEXT_CACHE_REVALIDATED_TAGS_HEADER:function(){return E},NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER:function(){return _},NEXT_CACHE_SOFT_TAG_MAX_LENGTH:function(){return R},NEXT_CACHE_TAGS_HEADER:function(){return y},NEXT_CACHE_TAG_MAX_ITEMS:function(){return S},NEXT_CACHE_TAG_MAX_LENGTH:function(){return w},NEXT_DATA_SUFFIX:function(){return x},NEXT_INTERCEPTION_MARKER_PREFIX:function(){return u},NEXT_META_SUFFIX:function(){return b},NEXT_QUERY_PARAM_PREFIX:function(){return c},NEXT_RESUME_HEADER:function(){return A},NON_STANDARD_NODE_ENV:function(){return et},PAGES_DIR_ALIAS:function(){return j},PRERENDER_REVALIDATE_HEADER:function(){return l},PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER:function(){return m},PROXY_FILENAME:function(){return N},PROXY_LOCATION_REGEXP:function(){return q},PUBLIC_DIR_MIDDLEWARE_CONFLICT:function(){return V},ROOT_DIR_ALIAS:function(){return L},RSC_ACTION_CLIENT_WRAPPER_ALIAS:function(){return W},RSC_ACTION_ENCRYPTION_ALIAS:function(){return F},RSC_ACTION_PROXY_ALIAS:function(){return B},RSC_ACTION_VALIDATE_ALIAS:function(){return U},RSC_CACHE_WRAPPER_ALIAS:function(){return z},RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS:function(){return $},RSC_MOD_REF_PROXY_ALIAS:function(){return G},RSC_SEGMENTS_DIR_SUFFIX:function(){return p},RSC_SEGMENT_SUFFIX:function(){return f},RSC_SUFFIX:function(){return g},SERVER_PROPS_EXPORT_ERROR:function(){return K},SERVER_PROPS_GET_INIT_PROPS_CONFLICT:function(){return X},SERVER_PROPS_SSG_CONFLICT:function(){return Q},SERVER_RUNTIME:function(){return en},SSG_FALLBACK_EXPORT_ERROR:function(){return er},SSG_GET_INITIAL_PROPS_CONFLICT:function(){return H},STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR:function(){return Y},TEXT_PLAIN_CONTENT_TYPE_HEADER:function(){return n},UNSTABLE_REVALIDATE_RENAME_ERROR:function(){return ee},WEBPACK_LAYERS:function(){return ec},WEBPACK_RESOURCE_QUERIES:function(){return eu},WEB_SOCKET_MAX_RECONNECTIONS:function(){return es}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});let n="text/plain",s="text/html; charset=utf-8",i="application/json; charset=utf-8",c="nxtP",u="nxtI",d="x-matched-path",l="x-prerender-revalidate",m="x-prerender-revalidate-if-generated",p=".segments",f=".segment.rsc",g=".rsc",h=".action",x=".json",b=".meta",v=".body",y="x-next-cache-tags",E="x-next-revalidated-tags",_="x-next-revalidate-tag-token",A="next-resume",S=128,w=256,R=1024,P="_N_T_",O=31536e3,T=0xfffffffe,C="middleware",I=`(?:src/)?${C}`,N="proxy",q=`(?:src/)?${N}`,M="instrumentation",j="private-next-pages",D="private-dot-next",L="private-next-root-dir",k="private-next-app-dir",G="private-next-rsc-mod-ref-proxy",U="private-next-rsc-action-validate",B="private-next-rsc-server-reference",z="private-next-rsc-cache-wrapper",$="private-next-rsc-track-dynamic-import",F="private-next-rsc-action-encryption",W="private-next-rsc-action-client-wrapper",V="You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",H="You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",X="You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",Q="You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",Y="can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",K="pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",J="Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",Z="Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",ee="The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",ea="can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",et='You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',er="Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",eo=["app","pages","components","lib","src"],en={edge:"edge",experimentalEdge:"experimental-edge",nodejs:"nodejs"},es=12,ei={shared:"shared",reactServerComponents:"rsc",serverSideRendering:"ssr",actionBrowser:"action-browser",apiNode:"api-node",apiEdge:"api-edge",middleware:"middleware",instrument:"instrument",edgeAsset:"edge-asset",appPagesBrowser:"app-pages-browser",pagesDirBrowser:"pages-dir-browser",pagesDirEdge:"pages-dir-edge",pagesDirNode:"pages-dir-node"},ec={...ei,GROUP:{builtinReact:[ei.reactServerComponents,ei.actionBrowser],serverOnly:[ei.reactServerComponents,ei.actionBrowser,ei.instrument,ei.middleware],neutralTarget:[ei.apiNode,ei.apiEdge],clientOnly:[ei.serverSideRendering,ei.appPagesBrowser],bundled:[ei.reactServerComponents,ei.actionBrowser,ei.serverSideRendering,ei.appPagesBrowser,ei.shared,ei.instrument,ei.middleware],appPages:[ei.reactServerComponents,ei.serverSideRendering,ei.appPagesBrowser,ei.actionBrowser]}},eu={edgeSSREntry:"__next_edge_ssr_entry__",metadata:"__next_metadata__",metadataRoute:"__next_metadata_route__",metadataImageMeta:"__next_metadata_image_meta__"}},80333,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={fromNodeOutgoingHttpHeaders:function(){return s},normalizeNextQueryParam:function(){return d},splitCookiesString:function(){return i},toNodeOutgoingHttpHeaders:function(){return c},validateURL:function(){return u}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});let n=e.r(91401);function s(e){let a=new Headers;for(let[t,r]of Object.entries(e))for(let e of Array.isArray(r)?r:[r])void 0!==e&&("number"==typeof e&&(e=e.toString()),a.append(t,e));return a}function i(e){var a,t,r,o,n,s=[],i=0;function c(){for(;i<e.length&&/\s/.test(e.charAt(i));)i+=1;return i<e.length}for(;i<e.length;){for(a=i,n=!1;c();)if(","===(t=e.charAt(i))){for(r=i,i+=1,c(),o=i;i<e.length&&"="!==(t=e.charAt(i))&&";"!==t&&","!==t;)i+=1;i<e.length&&"="===e.charAt(i)?(n=!0,i=o,s.push(e.substring(a,r)),a=i):i=r+1}else i+=1;(!n||i>=e.length)&&s.push(e.substring(a,e.length))}return s}function c(e){let a={},t=[];if(e)for(let[r,o]of e.entries())"set-cookie"===r.toLowerCase()?(t.push(...i(o)),a[r]=1===t.length?t[0]:t):a[r]=o;return a}function u(e){try{return String(new URL(String(e)))}catch(a){throw Object.defineProperty(Error(`URL is malformed "${String(e)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,{cause:a}),"__NEXT_ERROR_CODE",{value:"E61",enumerable:!1,configurable:!0})}}function d(e){for(let a of[n.NEXT_QUERY_PARAM_PREFIX,n.NEXT_INTERCEPTION_MARKER_PREFIX])if(e!==a&&e.startsWith(a))return e.substring(a.length);return null}},47389,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={PageSignatureError:function(){return n},RemovedPageError:function(){return s},RemovedUAError:function(){return i}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});class n extends Error{constructor({page:e}){super(`The middleware "${e}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `)}}class s extends Error{constructor(){super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `)}}class i extends Error{constructor(){super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `)}}},472,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={RequestCookies:function(){return n.RequestCookies},ResponseCookies:function(){return n.ResponseCookies},stringifyCookie:function(){return n.stringifyCookie}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});let n=e.r(19481)},29666,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={INTERNALS:function(){return u},NextRequest:function(){return d}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});let n=e.r(99536),s=e.r(80333),i=e.r(47389),c=e.r(472),u=Symbol("internal request");class d extends Request{constructor(e,a={}){const t="string"!=typeof e&&"url"in e?e.url:String(e);(0,s.validateURL)(t),a.body&&"half"!==a.duplex&&(a.duplex="half"),e instanceof Request?super(e,a):super(t,a);const r=new n.NextURL(t,{headers:(0,s.toNodeOutgoingHttpHeaders)(this.headers),nextConfig:a.nextConfig});this[u]={cookies:new c.RequestCookies(this.headers),nextUrl:r,url:r.toString()}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,nextUrl:this.nextUrl,url:this.url,bodyUsed:this.bodyUsed,cache:this.cache,credentials:this.credentials,destination:this.destination,headers:Object.fromEntries(this.headers),integrity:this.integrity,keepalive:this.keepalive,method:this.method,mode:this.mode,redirect:this.redirect,referrer:this.referrer,referrerPolicy:this.referrerPolicy,signal:this.signal}}get cookies(){return this[u].cookies}get nextUrl(){return this[u].nextUrl}get page(){throw new i.RemovedPageError}get ua(){throw new i.RemovedUAError}get url(){return this[u].url}}},30759,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ReflectAdapter",{enumerable:!0,get:function(){return r}});class r{static get(e,a,t){let r=Reflect.get(e,a,t);return"function"==typeof r?r.bind(e):r}static set(e,a,t,r){return Reflect.set(e,a,t,r)}static has(e,a){return Reflect.has(e,a)}static deleteProperty(e,a){return Reflect.deleteProperty(e,a)}}},46633,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NextResponse",{enumerable:!0,get:function(){return l}});let r=e.r(472),o=e.r(99536),n=e.r(80333),s=e.r(30759),i=e.r(472),c=Symbol("internal response"),u=new Set([301,302,303,307,308]);function d(e,a){var t;if(null==e||null==(t=e.request)?void 0:t.headers){if(!(e.request.headers instanceof Headers))throw Object.defineProperty(Error("request.headers must be an instance of Headers"),"__NEXT_ERROR_CODE",{value:"E119",enumerable:!1,configurable:!0});let t=[];for(let[r,o]of e.request.headers)a.set("x-middleware-request-"+r,o),t.push(r);a.set("x-middleware-override-headers",t.join(","))}}class l extends Response{constructor(e,a={}){super(e,a);const t=this.headers,u=new Proxy(new i.ResponseCookies(t),{get(e,o,n){switch(o){case"delete":case"set":return(...n)=>{let s=Reflect.apply(e[o],e,n),c=new Headers(t);return s instanceof i.ResponseCookies&&t.set("x-middleware-set-cookie",s.getAll().map(e=>(0,r.stringifyCookie)(e)).join(",")),d(a,c),s};default:return s.ReflectAdapter.get(e,o,n)}}});this[c]={cookies:u,url:a.url?new o.NextURL(a.url,{headers:(0,n.toNodeOutgoingHttpHeaders)(t),nextConfig:a.nextConfig}):void 0}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,url:this.url,body:this.body,bodyUsed:this.bodyUsed,headers:Object.fromEntries(this.headers),ok:this.ok,redirected:this.redirected,status:this.status,statusText:this.statusText,type:this.type}}get cookies(){return this[c].cookies}static json(e,a){let t=Response.json(e,a);return new l(t.body,t)}static redirect(e,a){let t="number"==typeof a?a:(null==a?void 0:a.status)??307;if(!u.has(t))throw Object.defineProperty(RangeError('Failed to execute "redirect" on "response": Invalid status code'),"__NEXT_ERROR_CODE",{value:"E529",enumerable:!1,configurable:!0});let r="object"==typeof a?a:{},o=new Headers(null==r?void 0:r.headers);return o.set("Location",(0,n.validateURL)(e)),new l(null,{...r,headers:o,status:t})}static rewrite(e,a){let t=new Headers(null==a?void 0:a.headers);return t.set("x-middleware-rewrite",(0,n.validateURL)(e)),d(a,t),new l(null,{...a,headers:t})}static next(e){let a=new Headers(null==e?void 0:e.headers);return a.set("x-middleware-next","1"),d(e,a),new l(null,{...e,headers:a})}}},87963,(e,a,t)=>{"use strict";function r(){throw Object.defineProperty(Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead'),"__NEXT_ERROR_CODE",{value:"E183",enumerable:!1,configurable:!0})}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageResponse",{enumerable:!0,get:function(){return r}})},99299,(e,a,t)=>{var r={226:function(a,t){!function(r,o){"use strict";var n="function",s="undefined",i="object",c="string",u="major",d="model",l="name",m="type",p="vendor",f="version",g="architecture",h="console",x="mobile",b="tablet",v="smarttv",y="wearable",E="embedded",_="Amazon",A="Apple",S="ASUS",w="BlackBerry",R="Browser",P="Chrome",O="Firefox",T="Google",C="Huawei",I="Microsoft",N="Motorola",q="Opera",M="Samsung",j="Sharp",D="Sony",L="Xiaomi",k="Zebra",G="Facebook",U="Chromium OS",B="Mac OS",z=function(e,a){var t={};for(var r in e)a[r]&&a[r].length%2==0?t[r]=a[r].concat(e[r]):t[r]=e[r];return t},$=function(e){for(var a={},t=0;t<e.length;t++)a[e[t].toUpperCase()]=e[t];return a},F=function(e,a){return typeof e===c&&-1!==W(a).indexOf(W(e))},W=function(e){return e.toLowerCase()},V=function(e,a){if(typeof e===c)return e=e.replace(/^\s\s*/,""),typeof a===s?e:e.substring(0,350)},H=function(e,a){for(var t,r,o,s,c,u,d=0;d<a.length&&!c;){var l=a[d],m=a[d+1];for(t=r=0;t<l.length&&!c&&l[t];)if(c=l[t++].exec(e))for(o=0;o<m.length;o++)u=c[++r],typeof(s=m[o])===i&&s.length>0?2===s.length?typeof s[1]==n?this[s[0]]=s[1].call(this,u):this[s[0]]=s[1]:3===s.length?typeof s[1]!==n||s[1].exec&&s[1].test?this[s[0]]=u?u.replace(s[1],s[2]):void 0:this[s[0]]=u?s[1].call(this,u,s[2]):void 0:4===s.length&&(this[s[0]]=u?s[3].call(this,u.replace(s[1],s[2])):void 0):this[s]=u||void 0;d+=2}},X=function(e,a){for(var t in a)if(typeof a[t]===i&&a[t].length>0){for(var r=0;r<a[t].length;r++)if(F(a[t][r],e))return"?"===t?void 0:t}else if(F(a[t],e))return"?"===t?void 0:t;return e},Q={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Y={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[f,[l,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[f,[l,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[l,f],[/opios[\/ ]+([\w\.]+)/i],[f,[l,q+" Mini"]],[/\bopr\/([\w\.]+)/i],[f,[l,q]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[l,f],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[f,[l,"UC"+R]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[f,[l,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[f,[l,"WeChat"]],[/konqueror\/([\w\.]+)/i],[f,[l,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[f,[l,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[f,[l,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[l,/(.+)/,"$1 Secure "+R],f],[/\bfocus\/([\w\.]+)/i],[f,[l,O+" Focus"]],[/\bopt\/([\w\.]+)/i],[f,[l,q+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[f,[l,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[f,[l,"Dolphin"]],[/coast\/([\w\.]+)/i],[f,[l,q+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[f,[l,"MIUI "+R]],[/fxios\/([-\w\.]+)/i],[f,[l,O]],[/\bqihu|(qi?ho?o?|360)browser/i],[[l,"360 "+R]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[l,/(.+)/,"$1 "+R],f],[/(comodo_dragon)\/([\w\.]+)/i],[[l,/_/g," "],f],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[l,f],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[l],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[l,G],f],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[l,f],[/\bgsa\/([\w\.]+) .*safari\//i],[f,[l,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[f,[l,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[f,[l,P+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[l,P+" WebView"],f],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[f,[l,"Android "+R]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[l,f],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[f,[l,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[f,l],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[l,[f,X,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[l,f],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[l,"Netscape"],f],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[f,[l,O+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[l,f],[/(cobalt)\/([\w\.]+)/i],[l,[f,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,W]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[g,/ower/,"",W]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[g,W]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[p,M],[m,b]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[d,[p,M],[m,x]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[d,[p,A],[m,x]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[d,[p,A],[m,b]],[/(macintosh);/i],[d,[p,A]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[d,[p,j],[m,x]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[d,[p,C],[m,b]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[d,[p,C],[m,x]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[d,/_/g," "],[p,L],[m,x]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[d,/_/g," "],[p,L],[m,b]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[d,[p,"OPPO"],[m,x]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[d,[p,"Vivo"],[m,x]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[d,[p,"Realme"],[m,x]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[d,[p,N],[m,x]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[d,[p,N],[m,b]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[p,"LG"],[m,b]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[d,[p,"LG"],[m,x]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[d,[p,"Lenovo"],[m,b]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[d,/_/g," "],[p,"Nokia"],[m,x]],[/(pixel c)\b/i],[d,[p,T],[m,b]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[d,[p,T],[m,x]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[d,[p,D],[m,x]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[d,"Xperia Tablet"],[p,D],[m,b]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[d,[p,"OnePlus"],[m,x]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[d,[p,_],[m,b]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[d,/(.+)/g,"Fire Phone $1"],[p,_],[m,x]],[/(playbook);[-\w\),; ]+(rim)/i],[d,p,[m,b]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[d,[p,w],[m,x]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[d,[p,S],[m,b]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[d,[p,S],[m,x]],[/(nexus 9)/i],[d,[p,"HTC"],[m,b]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[p,[d,/_/g," "],[m,x]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[d,[p,"Acer"],[m,b]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[d,[p,"Meizu"],[m,x]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[p,d,[m,x]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[p,d,[m,b]],[/(surface duo)/i],[d,[p,I],[m,b]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[d,[p,"Fairphone"],[m,x]],[/(u304aa)/i],[d,[p,"AT&T"],[m,x]],[/\bsie-(\w*)/i],[d,[p,"Siemens"],[m,x]],[/\b(rct\w+) b/i],[d,[p,"RCA"],[m,b]],[/\b(venue[\d ]{2,7}) b/i],[d,[p,"Dell"],[m,b]],[/\b(q(?:mv|ta)\w+) b/i],[d,[p,"Verizon"],[m,b]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[d,[p,"Barnes & Noble"],[m,b]],[/\b(tm\d{3}\w+) b/i],[d,[p,"NuVision"],[m,b]],[/\b(k88) b/i],[d,[p,"ZTE"],[m,b]],[/\b(nx\d{3}j) b/i],[d,[p,"ZTE"],[m,x]],[/\b(gen\d{3}) b.+49h/i],[d,[p,"Swiss"],[m,x]],[/\b(zur\d{3}) b/i],[d,[p,"Swiss"],[m,b]],[/\b((zeki)?tb.*\b) b/i],[d,[p,"Zeki"],[m,b]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[p,"Dragon Touch"],d,[m,b]],[/\b(ns-?\w{0,9}) b/i],[d,[p,"Insignia"],[m,b]],[/\b((nxa|next)-?\w{0,9}) b/i],[d,[p,"NextBook"],[m,b]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[p,"Voice"],d,[m,x]],[/\b(lvtel\-)?(v1[12]) b/i],[[p,"LvTel"],d,[m,x]],[/\b(ph-1) /i],[d,[p,"Essential"],[m,x]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[d,[p,"Envizen"],[m,b]],[/\b(trio[-\w\. ]+) b/i],[d,[p,"MachSpeed"],[m,b]],[/\btu_(1491) b/i],[d,[p,"Rotor"],[m,b]],[/(shield[\w ]+) b/i],[d,[p,"Nvidia"],[m,b]],[/(sprint) (\w+)/i],[p,d,[m,x]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[p,I],[m,x]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[d,[p,k],[m,b]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[d,[p,k],[m,x]],[/smart-tv.+(samsung)/i],[p,[m,v]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[p,M],[m,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[p,"LG"],[m,v]],[/(apple) ?tv/i],[p,[d,A+" TV"],[m,v]],[/crkey/i],[[d,P+"cast"],[p,T],[m,v]],[/droid.+aft(\w)( bui|\))/i],[d,[p,_],[m,v]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[d,[p,j],[m,v]],[/(bravia[\w ]+)( bui|\))/i],[d,[p,D],[m,v]],[/(mitv-\w{5}) bui/i],[d,[p,L],[m,v]],[/Hbbtv.*(technisat) (.*);/i],[p,d,[m,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[p,V],[d,V],[m,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[m,v]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[p,d,[m,h]],[/droid.+; (shield) bui/i],[d,[p,"Nvidia"],[m,h]],[/(playstation [345portablevi]+)/i],[d,[p,D],[m,h]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[d,[p,I],[m,h]],[/((pebble))app/i],[p,d,[m,y]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[d,[p,A],[m,y]],[/droid.+; (glass) \d/i],[d,[p,T],[m,y]],[/droid.+; (wt63?0{2,3})\)/i],[d,[p,k],[m,y]],[/(quest( 2| pro)?)/i],[d,[p,G],[m,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[p,[m,E]],[/(aeobc)\b/i],[d,[p,_],[m,E]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[d,[m,x]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[d,[m,b]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[m,b]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[m,x]],[/(android[-\w\. ]{0,9});.+buil/i],[d,[p,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[f,[l,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[f,[l,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[l,f],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[f,l]],os:[[/microsoft (windows) (vista|xp)/i],[l,f],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[l,[f,X,Q]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[l,"Windows"],[f,X,Q]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[f,/_/g,"."],[l,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[l,B],[f,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[f,l],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[l,f],[/\(bb(10);/i],[f,[l,w]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[f,[l,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[f,[l,O+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[f,[l,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[f,[l,"watchOS"]],[/crkey\/([\d\.]+)/i],[f,[l,P+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[l,U],f],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[l,f],[/(sunos) ?([\w\.\d]*)/i],[[l,"Solaris"],f],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[l,f]]},K=function(e,a){if(typeof e===i&&(a=e,e=void 0),!(this instanceof K))return new K(e,a).getResult();var t=typeof r!==s&&r.navigator?r.navigator:void 0,o=e||(t&&t.userAgent?t.userAgent:""),h=t&&t.userAgentData?t.userAgentData:void 0,v=a?z(Y,a):Y,y=t&&t.userAgent==o;return this.getBrowser=function(){var e,a={};return a[l]=void 0,a[f]=void 0,H.call(a,o,v.browser),a[u]=typeof(e=a[f])===c?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0,y&&t&&t.brave&&typeof t.brave.isBrave==n&&(a[l]="Brave"),a},this.getCPU=function(){var e={};return e[g]=void 0,H.call(e,o,v.cpu),e},this.getDevice=function(){var e={};return e[p]=void 0,e[d]=void 0,e[m]=void 0,H.call(e,o,v.device),y&&!e[m]&&h&&h.mobile&&(e[m]=x),y&&"Macintosh"==e[d]&&t&&typeof t.standalone!==s&&t.maxTouchPoints&&t.maxTouchPoints>2&&(e[d]="iPad",e[m]=b),e},this.getEngine=function(){var e={};return e[l]=void 0,e[f]=void 0,H.call(e,o,v.engine),e},this.getOS=function(){var e={};return e[l]=void 0,e[f]=void 0,H.call(e,o,v.os),y&&!e[l]&&h&&"Unknown"!=h.platform&&(e[l]=h.platform.replace(/chrome os/i,U).replace(/macos/i,B)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(e){return o=typeof e===c&&e.length>350?V(e,350):e,this},this.setUA(o),this};if(K.VERSION="1.0.35",K.BROWSER=$([l,f,u]),K.CPU=$([g]),K.DEVICE=$([d,p,m,h,x,v,b,y,E]),K.ENGINE=K.OS=$([l,f]),typeof t!==s)a.exports&&(t=a.exports=K),t.UAParser=K;else if(typeof define===n&&define.amd)e.r,void 0!==K&&e.v(K);else typeof r!==s&&(r.UAParser=K);var J=typeof r!==s&&(r.jQuery||r.Zepto);if(J&&!J.ua){var Z=new K;J.ua=Z.getResult(),J.ua.get=function(){return Z.getUA()},J.ua.set=function(e){Z.setUA(e);var a=Z.getResult();for(var t in a)J.ua[t]=a[t]}}}(this)}},o={};function n(e){var a=o[e];if(void 0!==a)return a.exports;var t=o[e]={exports:{}},s=!0;try{r[e].call(t.exports,t,t.exports,n),s=!1}finally{s&&delete o[e]}return t.exports}n.ab="/ROOT/node_modules/next/dist/compiled/ua-parser-js/",a.exports=n(226)},4386,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o={isBot:function(){return i},userAgent:function(){return u},userAgentFromString:function(){return c}};for(var n in o)Object.defineProperty(t,n,{enumerable:!0,get:o[n]});let s=(r=e.r(99299))&&r.__esModule?r:{default:r};function i(e){return/Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(e)}function c(e){return{...(0,s.default)(e),isBot:void 0!==e&&i(e)}}function u({headers:e}){return c(e.get("user-agent")||void 0)}},79187,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"URLPattern",{enumerable:!0,get:function(){return r}});let r="u"<typeof URLPattern?void 0:URLPattern},53309,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"after",{enumerable:!0,get:function(){return o}});let r=e.r(56704);function o(e){let a=r.workAsyncStorage.getStore();if(!a)throw Object.defineProperty(Error("`after` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context"),"__NEXT_ERROR_CODE",{value:"E468",enumerable:!1,configurable:!0});let{afterContext:t}=a;return t.after(e)}},81053,(e,a,t)=>{"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=e.r(53309),o=t,Object.keys(r).forEach(function(e){"default"===e||Object.prototype.hasOwnProperty.call(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:function(){return r[e]}})})},65252,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={DynamicServerError:function(){return s},isDynamicServerError:function(){return i}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});let n="DYNAMIC_SERVER_USAGE";class s extends Error{constructor(e){super(`Dynamic server usage: ${e}`),this.description=e,this.digest=n}}function i(e){return"object"==typeof e&&null!==e&&"digest"in e&&"string"==typeof e.digest&&e.digest===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),a.exports=t.default)},97573,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={StaticGenBailoutError:function(){return s},isStaticGenBailoutError:function(){return i}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});let n="NEXT_STATIC_GEN_BAILOUT";class s extends Error{constructor(...e){super(...e),this.code=n}}function i(e){return"object"==typeof e&&null!==e&&"code"in e&&e.code===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),a.exports=t.default)},4642,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={isHangingPromiseRejectionError:function(){return n},makeDevtoolsIOAwarePromise:function(){return l},makeHangingPromise:function(){return u}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===s}let s="HANGING_PROMISE_REJECTION";class i extends Error{constructor(e,a){super(`During prerendering, ${a} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${a} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${e}".`),this.route=e,this.expression=a,this.digest=s}}let c=new WeakMap;function u(e,a,t){if(e.aborted)return Promise.reject(new i(a,t));{let r=new Promise((r,o)=>{let n=o.bind(null,new i(a,t)),s=c.get(e);if(s)s.push(n);else{let a=[n];c.set(e,a),e.addEventListener("abort",()=>{for(let e=0;e<a.length;e++)a[e]()},{once:!0})}});return r.catch(d),r}}function d(){}function l(e,a,t){return a.stagedRendering?a.stagedRendering.delayUntilStage(t,void 0,e):new Promise(a=>{setTimeout(()=>{a(e)},0)})}},96306,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={METADATA_BOUNDARY_NAME:function(){return n},OUTLET_BOUNDARY_NAME:function(){return i},ROOT_LAYOUT_BOUNDARY_NAME:function(){return c},VIEWPORT_BOUNDARY_NAME:function(){return s}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});let n="__next_metadata_boundary__",s="__next_viewport_boundary__",i="__next_outlet_boundary__",c="__next_root_layout_boundary__"},38244,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={atLeastOneTask:function(){return i},scheduleImmediate:function(){return s},scheduleOnNextTick:function(){return n},waitAtLeastOneReactRenderTask:function(){return c}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});let n=e=>{Promise.resolve().then(()=>{process.nextTick(e)})},s=e=>{setImmediate(e)};function i(){return new Promise(e=>s(e))}function c(){return new Promise(e=>setImmediate(e))}},31584,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={BailoutToCSRError:function(){return s},isBailoutToCSRError:function(){return i}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});let n="BAILOUT_TO_CLIENT_SIDE_RENDERING";class s extends Error{constructor(e){super(`Bail out to client-side rendering: ${e}`),this.reason=e,this.digest=n}}function i(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===n}},76414,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"InvariantError",{enumerable:!0,get:function(){return r}});class r extends Error{constructor(e,a){super(`Invariant: ${e.endsWith(".")?e:e+"."} This is a bug in Next.js.`,a),this.name="InvariantError"}}},68665,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,n={Postpone:function(){return P},PreludeState:function(){return J},abortAndThrowOnSynchronousRequestDataAccess:function(){return R},abortOnSynchronousPlatformIOAccess:function(){return w},accessedDynamicData:function(){return j},annotateDynamicAccess:function(){return U},consumeDynamicAccess:function(){return D},createDynamicTrackingState:function(){return b},createDynamicValidationState:function(){return v},createHangingInputAbortSignal:function(){return G},createRenderInBrowserAbortSignal:function(){return k},delayUntilRuntimeStage:function(){return et},formatDynamicAPIAccesses:function(){return L},getFirstDynamicReason:function(){return y},getStaticShellDisallowedDynamicReasons:function(){return ea},isDynamicPostpone:function(){return C},isPrerenderInterruptedError:function(){return M},logDisallowedDynamicError:function(){return Z},markCurrentScopeAsDynamic:function(){return E},postponeWithTracking:function(){return O},throwIfDisallowedDynamic:function(){return ee},throwToInterruptStaticGeneration:function(){return _},trackAllowedDynamicAccess:function(){return X},trackDynamicDataInDynamicRender:function(){return A},trackDynamicHoleInRuntimeShell:function(){return Q},trackDynamicHoleInStaticShell:function(){return Y},useDynamicRouteParams:function(){return B},useDynamicSearchParams:function(){return z}};for(var s in n)Object.defineProperty(t,s,{enumerable:!0,get:n[s]});let i=(r=e.r(47540))&&r.__esModule?r:{default:r},c=e.r(65252),u=e.r(97573),d=e.r(32319),l=e.r(56704),m=e.r(4642),p=e.r(96306),f=e.r(38244),g=e.r(31584),h=e.r(76414),x="function"==typeof i.default.unstable_postpone;function b(e){return{isDebugDynamicAccesses:e,dynamicAccesses:[],syncDynamicErrorWithStack:null}}function v(){return{hasSuspenseAboveBody:!1,hasDynamicMetadata:!1,dynamicMetadata:null,hasDynamicViewport:!1,hasAllowedDynamic:!1,dynamicErrors:[]}}function y(e){var a;return null==(a=e.dynamicAccesses[0])?void 0:a.expression}function E(e,a,t){if(a)switch(a.type){case"cache":case"unstable-cache":case"private-cache":return}if(!e.forceDynamic&&!e.forceStatic){if(e.dynamicShouldError)throw Object.defineProperty(new u.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${t}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E553",enumerable:!1,configurable:!0});if(a)switch(a.type){case"prerender-ppr":return O(e.route,t,a.dynamicTracking);case"prerender-legacy":a.revalidate=0;let r=Object.defineProperty(new c.DynamicServerError(`Route ${e.route} couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E550",enumerable:!1,configurable:!0});throw e.dynamicUsageDescription=t,e.dynamicUsageStack=r.stack,r}}}function _(e,a,t){let r=Object.defineProperty(new c.DynamicServerError(`Route ${a.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E558",enumerable:!1,configurable:!0});throw t.revalidate=0,a.dynamicUsageDescription=e,a.dynamicUsageStack=r.stack,r}function A(e){switch(e.type){case"cache":case"unstable-cache":case"private-cache":return}}function S(e,a,t){let r=q(`Route ${e} needs to bail out of prerendering at this point because it used ${a}.`);t.controller.abort(r);let o=t.dynamicTracking;o&&o.dynamicAccesses.push({stack:o.isDebugDynamicAccesses?Error().stack:void 0,expression:a})}function w(e,a,t,r){let o=r.dynamicTracking;S(e,a,r),o&&null===o.syncDynamicErrorWithStack&&(o.syncDynamicErrorWithStack=t)}function R(e,a,t,r){if(!1===r.controller.signal.aborted){S(e,a,r);let o=r.dynamicTracking;o&&null===o.syncDynamicErrorWithStack&&(o.syncDynamicErrorWithStack=t)}throw q(`Route ${e} needs to bail out of prerendering at this point because it used ${a}.`)}function P({reason:e,route:a}){let t=d.workUnitAsyncStorage.getStore();O(a,e,t&&"prerender-ppr"===t.type?t.dynamicTracking:null)}function O(e,a,t){(function(){if(!x)throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E224",enumerable:!1,configurable:!0})})(),t&&t.dynamicAccesses.push({stack:t.isDebugDynamicAccesses?Error().stack:void 0,expression:a}),i.default.unstable_postpone(T(e,a))}function T(e,a){return`Route ${e} needs to bail out of prerendering at this point because it used ${a}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`}function C(e){return"object"==typeof e&&null!==e&&"string"==typeof e.message&&I(e.message)}function I(e){return e.includes("needs to bail out of prerendering at this point because it used")&&e.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")}if(!1===I(T("%%%","^^^")))throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E296",enumerable:!1,configurable:!0});let N="NEXT_PRERENDER_INTERRUPTED";function q(e){let a=Object.defineProperty(Error(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a.digest=N,a}function M(e){return"object"==typeof e&&null!==e&&e.digest===N&&"name"in e&&"message"in e&&e instanceof Error}function j(e){return e.length>0}function D(e,a){return e.dynamicAccesses.push(...a.dynamicAccesses),e.dynamicAccesses}function L(e){return e.filter(e=>"string"==typeof e.stack&&e.stack.length>0).map(({expression:e,stack:a})=>(a=a.split("\n").slice(4).filter(e=>!(e.includes("node_modules/next/")||e.includes(" (<anonymous>)")||e.includes(" (node:"))).join("\n"),`Dynamic API Usage Debug - ${e}:
${a}`))}function k(){let e=new AbortController;return e.abort(Object.defineProperty(new g.BailoutToCSRError("Render in Browser"),"__NEXT_ERROR_CODE",{value:"E721",enumerable:!1,configurable:!0})),e.signal}function G(e){switch(e.type){case"prerender":case"prerender-runtime":let a=new AbortController;if(e.cacheSignal)e.cacheSignal.inputReady().then(()=>{a.abort()});else{let t=(0,d.getRuntimeStagePromise)(e);t?t.then(()=>(0,f.scheduleOnNextTick)(()=>a.abort())):(0,f.scheduleOnNextTick)(()=>a.abort())}return a.signal;case"prerender-client":case"prerender-ppr":case"prerender-legacy":case"request":case"cache":case"private-cache":case"unstable-cache":return}}function U(e,a){let t=a.dynamicTracking;t&&t.dynamicAccesses.push({stack:t.isDebugDynamicAccesses?Error().stack:void 0,expression:e})}function B(e){let a=l.workAsyncStorage.getStore(),t=d.workUnitAsyncStorage.getStore();if(a&&t)switch(t.type){case"prerender-client":case"prerender":{let r=t.fallbackRouteParams;r&&r.size>0&&i.default.use((0,m.makeHangingPromise)(t.renderSignal,a.route,e));break}case"prerender-ppr":{let r=t.fallbackRouteParams;if(r&&r.size>0)return O(a.route,e,t.dynamicTracking);break}case"prerender-runtime":throw Object.defineProperty(new h.InvariantError(`\`${e}\` was called during a runtime prerender. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E771",enumerable:!1,configurable:!0});case"cache":case"private-cache":throw Object.defineProperty(new h.InvariantError(`\`${e}\` was called inside a cache scope. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E745",enumerable:!1,configurable:!0})}}function z(e){let a=l.workAsyncStorage.getStore(),t=d.workUnitAsyncStorage.getStore();if(a)switch(!t&&(0,d.throwForMissingRequestStore)(e),t.type){case"prerender-client":i.default.use((0,m.makeHangingPromise)(t.renderSignal,a.route,e));break;case"prerender-legacy":case"prerender-ppr":if(a.forceStatic)return;throw Object.defineProperty(new g.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});case"prerender":case"prerender-runtime":throw Object.defineProperty(new h.InvariantError(`\`${e}\` was called from a Server Component. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E795",enumerable:!1,configurable:!0});case"cache":case"unstable-cache":case"private-cache":throw Object.defineProperty(new h.InvariantError(`\`${e}\` was called inside a cache scope. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E745",enumerable:!1,configurable:!0});case"request":return}}let $=/\n\s+at Suspense \(<anonymous>\)/,F=RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${p.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`),W=RegExp(`\\n\\s+at ${p.METADATA_BOUNDARY_NAME}[\\n\\s]`),V=RegExp(`\\n\\s+at ${p.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),H=RegExp(`\\n\\s+at ${p.OUTLET_BOUNDARY_NAME}[\\n\\s]`);function X(e,a,t,r){if(!H.test(a)){if(W.test(a)){t.hasDynamicMetadata=!0;return}if(V.test(a)){t.hasDynamicViewport=!0;return}if(F.test(a)){t.hasAllowedDynamic=!0,t.hasSuspenseAboveBody=!0;return}else if($.test(a)){t.hasAllowedDynamic=!0;return}else{if(r.syncDynamicErrorWithStack)return void t.dynamicErrors.push(r.syncDynamicErrorWithStack);let o=K(`Route "${e.route}": Uncached data was accessed outside of <Suspense>. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,a);return void t.dynamicErrors.push(o)}}}function Q(e,a,t,r){if(!H.test(a)){if(W.test(a)){t.dynamicMetadata=K(`Route "${e.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`,a);return}if(V.test(a)){let r=K(`Route "${e.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`,a);t.dynamicErrors.push(r);return}if(F.test(a)){t.hasAllowedDynamic=!0,t.hasSuspenseAboveBody=!0;return}else if($.test(a)){t.hasAllowedDynamic=!0;return}else{if(r.syncDynamicErrorWithStack)return void t.dynamicErrors.push(r.syncDynamicErrorWithStack);let o=K(`Route "${e.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,a);return void t.dynamicErrors.push(o)}}}function Y(e,a,t,r){if(!H.test(a)){if(W.test(a)){t.dynamicMetadata=K(`Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`,a);return}if(V.test(a)){let r=K(`Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`,a);t.dynamicErrors.push(r);return}if(F.test(a)){t.hasAllowedDynamic=!0,t.hasSuspenseAboveBody=!0;return}else if($.test(a)){t.hasAllowedDynamic=!0;return}else{if(r.syncDynamicErrorWithStack)return void t.dynamicErrors.push(r.syncDynamicErrorWithStack);let o=K(`Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,a);return void t.dynamicErrors.push(o)}}}function K(e,a){let t=Object.defineProperty(Error(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t.stack=t.name+": "+e+a,t}var J=((o={})[o.Full=0]="Full",o[o.Empty=1]="Empty",o[o.Errored=2]="Errored",o);function Z(e,a){console.error(a),e.dev||(e.hasReadableErrorStacks?console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${e.route}" in your browser to investigate the error.`):console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${e.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`))}function ee(e,a,t,r){if(r.syncDynamicErrorWithStack)throw Z(e,r.syncDynamicErrorWithStack),new u.StaticGenBailoutError;if(0!==a){if(t.hasSuspenseAboveBody)return;let r=t.dynamicErrors;if(r.length>0){for(let a=0;a<r.length;a++)Z(e,r[a]);throw new u.StaticGenBailoutError}if(t.hasDynamicViewport)throw console.error(`Route "${e.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`),new u.StaticGenBailoutError;if(1===a)throw console.error(`Route "${e.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`),new u.StaticGenBailoutError}else if(!1===t.hasAllowedDynamic&&t.hasDynamicMetadata)throw console.error(`Route "${e.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`),new u.StaticGenBailoutError}function ea(e,a,t){if(t.hasSuspenseAboveBody)return[];if(0!==a){let r=t.dynamicErrors;if(r.length>0)return r;if(1===a)return[Object.defineProperty(new h.InvariantError(`Route "${e.route}" did not produce a static shell and Next.js was unable to determine a reason.`),"__NEXT_ERROR_CODE",{value:"E936",enumerable:!1,configurable:!0})]}else if(!1===t.hasAllowedDynamic&&0===t.dynamicErrors.length&&t.dynamicMetadata)return[t.dynamicMetadata];return[]}function et(e,a){return e.runtimeStagePromise?e.runtimeStagePromise.then(()=>a):a}},43824,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={isRequestAPICallableInsideAfter:function(){return u},throwForSearchParamsAccessInUseCache:function(){return c},throwWithStaticGenerationBailoutErrorWithDynamicError:function(){return i}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});let n=e.r(97573),s=e.r(24725);function i(e,a){throw Object.defineProperty(new n.StaticGenBailoutError(`Route ${e} with \`dynamic = "error"\` couldn't be rendered statically because it used ${a}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E543",enumerable:!1,configurable:!0})}function c(e,a){let t=Object.defineProperty(Error(`Route ${e.route} used \`searchParams\` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await \`searchParams\` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`),"__NEXT_ERROR_CODE",{value:"E842",enumerable:!1,configurable:!0});throw Error.captureStackTrace(t,a),e.invalidDynamicUsageError??=t,t}function u(){let e=s.afterTaskAsyncStorage.getStore();return(null==e?void 0:e.rootTaskSpawnPhase)==="action"}},8211,(e,a,t)=>{"use strict";function r(){let e,a,t=new Promise((t,r)=>{e=t,a=r});return{resolve:e,reject:a,promise:t}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createPromiseWithResolvers",{enumerable:!0,get:function(){return r}})},18185,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o={RenderStage:function(){return c},StagedRenderingController:function(){return u}};for(var n in o)Object.defineProperty(t,n,{enumerable:!0,get:o[n]});let s=e.r(76414),i=e.r(8211);var c=((r={})[r.Before=1]="Before",r[r.Static=2]="Static",r[r.Runtime=3]="Runtime",r[r.Dynamic=4]="Dynamic",r[r.Abandoned=5]="Abandoned",r);class u{constructor(e=null,a){this.abortSignal=e,this.hasRuntimePrefetch=a,this.currentStage=1,this.staticInterruptReason=null,this.runtimeInterruptReason=null,this.staticStageEndTime=1/0,this.runtimeStageEndTime=1/0,this.runtimeStageListeners=[],this.dynamicStageListeners=[],this.runtimeStagePromise=(0,i.createPromiseWithResolvers)(),this.dynamicStagePromise=(0,i.createPromiseWithResolvers)(),this.mayAbandon=!1,e&&(e.addEventListener("abort",()=>{let{reason:a}=e;this.currentStage<3&&(this.runtimeStagePromise.promise.catch(d),this.runtimeStagePromise.reject(a)),(this.currentStage<4||5===this.currentStage)&&(this.dynamicStagePromise.promise.catch(d),this.dynamicStagePromise.reject(a))},{once:!0}),this.mayAbandon=!0)}onStage(e,a){if(this.currentStage>=e)a();else if(3===e)this.runtimeStageListeners.push(a);else if(4===e)this.dynamicStageListeners.push(a);else throw Object.defineProperty(new s.InvariantError(`Invalid render stage: ${e}`),"__NEXT_ERROR_CODE",{value:"E881",enumerable:!1,configurable:!0})}canSyncInterrupt(){if(1===this.currentStage)return!1;let e=this.hasRuntimePrefetch?4:3;return this.currentStage<e}syncInterruptCurrentStageWithReason(e){if(1!==this.currentStage){if(this.mayAbandon)return this.abandonRenderImpl();switch(this.currentStage){case 2:this.staticInterruptReason=e,this.advanceStage(4);return;case 3:this.hasRuntimePrefetch&&(this.runtimeInterruptReason=e,this.advanceStage(4));return}}}getStaticInterruptReason(){return this.staticInterruptReason}getRuntimeInterruptReason(){return this.runtimeInterruptReason}getStaticStageEndTime(){return this.staticStageEndTime}getRuntimeStageEndTime(){return this.runtimeStageEndTime}abandonRender(){if(!this.mayAbandon)throw Object.defineProperty(new s.InvariantError("`abandonRender` called on a stage controller that cannot be abandoned."),"__NEXT_ERROR_CODE",{value:"E938",enumerable:!1,configurable:!0});this.abandonRenderImpl()}abandonRenderImpl(){let{currentStage:e}=this;switch(e){case 2:this.currentStage=5,this.resolveRuntimeStage();return;case 3:this.currentStage=5;return}}advanceStage(e){if(e<=this.currentStage)return;let a=this.currentStage;if(this.currentStage=e,a<3&&e>=3&&(this.staticStageEndTime=performance.now()+performance.timeOrigin,this.resolveRuntimeStage()),a<4&&e>=4){this.runtimeStageEndTime=performance.now()+performance.timeOrigin,this.resolveDynamicStage();return}}resolveRuntimeStage(){let e=this.runtimeStageListeners;for(let a=0;a<e.length;a++)e[a]();e.length=0,this.runtimeStagePromise.resolve()}resolveDynamicStage(){let e=this.dynamicStageListeners;for(let a=0;a<e.length;a++)e[a]();e.length=0,this.dynamicStagePromise.resolve()}getStagePromise(e){switch(e){case 3:return this.runtimeStagePromise.promise;case 4:return this.dynamicStagePromise.promise;default:throw Object.defineProperty(new s.InvariantError(`Invalid render stage: ${e}`),"__NEXT_ERROR_CODE",{value:"E881",enumerable:!1,configurable:!0})}}waitForStage(e){return this.getStagePromise(e)}delayUntilStage(e,a,t){var r,o,n;let s,i=(r=this.getStagePromise(e),o=a,n=t,s=new Promise((e,a)=>{r.then(e.bind(null,n),a)}),void 0!==o&&(s.displayName=o),s);return this.abortSignal&&i.catch(d),i}}function d(){}},75674,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"connection",{enumerable:!0,get:function(){return u}});let r=e.r(56704),o=e.r(32319),n=e.r(68665),s=e.r(97573),i=e.r(4642),c=e.r(43824);function u(){let e=r.workAsyncStorage.getStore(),a=o.workUnitAsyncStorage.getStore();if(e){if(a&&"after"===a.phase&&!(0,c.isRequestAPICallableInsideAfter)())throw Object.defineProperty(Error(`Route ${e.route} used \`connection()\` inside \`after()\`. The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but \`after()\` executes after the request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`),"__NEXT_ERROR_CODE",{value:"E827",enumerable:!1,configurable:!0});if(e.forceStatic)return Promise.resolve(void 0);if(e.dynamicShouldError)throw Object.defineProperty(new s.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`connection()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E847",enumerable:!1,configurable:!0});if(a)switch(a.type){case"cache":{let a=Object.defineProperty(Error(`Route ${e.route} used \`connection()\` inside "use cache". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual request, but caches must be able to be produced before a request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`),"__NEXT_ERROR_CODE",{value:"E841",enumerable:!1,configurable:!0});throw Error.captureStackTrace(a,u),e.invalidDynamicUsageError??=a,a}case"private-cache":{let a=Object.defineProperty(Error(`Route ${e.route} used \`connection()\` inside "use cache: private". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual navigation request, but caches must be able to be produced before a navigation request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`),"__NEXT_ERROR_CODE",{value:"E837",enumerable:!1,configurable:!0});throw Error.captureStackTrace(a,u),e.invalidDynamicUsageError??=a,a}case"unstable-cache":throw Object.defineProperty(Error(`Route ${e.route} used \`connection()\` inside a function cached with \`unstable_cache()\`. The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`),"__NEXT_ERROR_CODE",{value:"E840",enumerable:!1,configurable:!0});case"prerender":case"prerender-client":case"prerender-runtime":return(0,i.makeHangingPromise)(a.renderSignal,e.route,"`connection()`");case"prerender-ppr":return(0,n.postponeWithTracking)(e.route,"connection",a.dynamicTracking);case"prerender-legacy":return(0,n.throwToInterruptStaticGeneration)("connection",e,a);case"request":return(0,n.trackDynamicDataInDynamicRender)(a),Promise.resolve(void 0)}}(0,o.throwForMissingRequestStore)("connection")}e.r(18185)},89171,(e,a,t)=>{let r={NextRequest:e.r(29666).NextRequest,NextResponse:e.r(46633).NextResponse,ImageResponse:e.r(87963).ImageResponse,userAgentFromString:e.r(4386).userAgentFromString,userAgent:e.r(4386).userAgent,URLPattern:e.r(79187).URLPattern,after:e.r(81053).after,connection:e.r(75674).connection};a.exports=r,t.NextRequest=r.NextRequest,t.NextResponse=r.NextResponse,t.ImageResponse=r.ImageResponse,t.userAgentFromString=r.userAgentFromString,t.userAgent=r.userAgent,t.URLPattern=r.URLPattern,t.after=r.after,t.connection=r.connection},70943,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={getOrigin:function(){return i},resolveArray:function(){return n},resolveAsArrayOrUndefined:function(){return s}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});function n(e){return Array.isArray(e)?e:[e]}function s(e){if(null!=e)return n(e)}function i(e){let a;if("string"==typeof e)try{a=(e=new URL(e)).origin}catch{}return a}},73853,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={resolveManifest:function(){return c},resolveRobots:function(){return s},resolveRouteData:function(){return u},resolveSitemap:function(){return i}};for(var o in r)Object.defineProperty(t,o,{enumerable:!0,get:r[o]});let n=e.r(70943);function s(e){let a="";for(let t of Array.isArray(e.rules)?e.rules:[e.rules]){for(let e of(0,n.resolveArray)(t.userAgent||["*"]))a+=`User-Agent: ${e}
`;if(t.allow)for(let e of(0,n.resolveArray)(t.allow))a+=`Allow: ${e}
`;if(t.disallow)for(let e of(0,n.resolveArray)(t.disallow))a+=`Disallow: ${e}
`;t.crawlDelay&&(a+=`Crawl-delay: ${t.crawlDelay}
`),a+="\n"}return e.host&&(a+=`Host: ${e.host}
`),e.sitemap&&(0,n.resolveArray)(e.sitemap).forEach(e=>{a+=`Sitemap: ${e}
`}),a}function i(e){let a=e.some(e=>Object.keys(e.alternates??{}).length>0),t=e.some(e=>{var a;return!!(null==(a=e.images)?void 0:a.length)}),r=e.some(e=>{var a;return!!(null==(a=e.videos)?void 0:a.length)}),o="";for(let c of(o+='<?xml version="1.0" encoding="UTF-8"?>\n',o+='<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',t&&(o+=' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'),r&&(o+=' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"'),a?o+=' xmlns:xhtml="http://www.w3.org/1999/xhtml">\n':o+=">\n",e)){var n,s,i;o+="<url>\n",o+=`<loc>${c.url}</loc>
`;let e=null==(n=c.alternates)?void 0:n.languages;if(e&&Object.keys(e).length)for(let a in e)o+=`<xhtml:link rel="alternate" hreflang="${a}" href="${e[a]}" />
`;if(null==(s=c.images)?void 0:s.length)for(let e of c.images)o+=`<image:image>
<image:loc>${e}</image:loc>
</image:image>
`;if(null==(i=c.videos)?void 0:i.length)for(let e of c.videos)o+=["<video:video>",`<video:title>${e.title}</video:title>`,`<video:thumbnail_loc>${e.thumbnail_loc}</video:thumbnail_loc>`,`<video:description>${e.description}</video:description>`,e.content_loc&&`<video:content_loc>${e.content_loc}</video:content_loc>`,e.player_loc&&`<video:player_loc>${e.player_loc}</video:player_loc>`,e.duration&&`<video:duration>${e.duration}</video:duration>`,e.view_count&&`<video:view_count>${e.view_count}</video:view_count>`,e.tag&&`<video:tag>${e.tag}</video:tag>`,e.rating&&`<video:rating>${e.rating}</video:rating>`,e.expiration_date&&`<video:expiration_date>${e.expiration_date}</video:expiration_date>`,e.publication_date&&`<video:publication_date>${e.publication_date}</video:publication_date>`,e.family_friendly&&`<video:family_friendly>${e.family_friendly}</video:family_friendly>`,e.requires_subscription&&`<video:requires_subscription>${e.requires_subscription}</video:requires_subscription>`,e.live&&`<video:live>${e.live}</video:live>`,e.restriction&&`<video:restriction relationship="${e.restriction.relationship}">${e.restriction.content}</video:restriction>`,e.platform&&`<video:platform relationship="${e.platform.relationship}">${e.platform.content}</video:platform>`,e.uploader&&`<video:uploader${e.uploader.info&&` info="${e.uploader.info}"`}>${e.uploader.content}</video:uploader>`,`</video:video>
`].filter(Boolean).join("\n");if(c.lastModified){let e=c.lastModified instanceof Date?c.lastModified.toISOString():c.lastModified;o+=`<lastmod>${e}</lastmod>
`}c.changeFrequency&&(o+=`<changefreq>${c.changeFrequency}</changefreq>
`),"number"==typeof c.priority&&(o+=`<priority>${c.priority}</priority>
`),o+="</url>\n"}return o+"</urlset>\n"}function c(e){return JSON.stringify(e)}function u(e,a){return"robots"===a?s(e):"sitemap"===a?i(e):"manifest"===a?c(e):""}},8922,e=>{"use strict";let a,t,r;var o,n,s,i,c,u,d,l,m,p,f,g,h,x,b,v,y,E,_,A=e.i(47909),S=((o={}).PAGES="PAGES",o.PAGES_API="PAGES_API",o.APP_PAGE="APP_PAGE",o.APP_ROUTE="APP_ROUTE",o.IMAGE="IMAGE",o),w=((n=w||{}).handleRequest="BaseServer.handleRequest",n.run="BaseServer.run",n.pipe="BaseServer.pipe",n.getStaticHTML="BaseServer.getStaticHTML",n.render="BaseServer.render",n.renderToResponseWithComponents="BaseServer.renderToResponseWithComponents",n.renderToResponse="BaseServer.renderToResponse",n.renderToHTML="BaseServer.renderToHTML",n.renderError="BaseServer.renderError",n.renderErrorToResponse="BaseServer.renderErrorToResponse",n.renderErrorToHTML="BaseServer.renderErrorToHTML",n.render404="BaseServer.render404",n),R=((s=R||{}).loadDefaultErrorComponents="LoadComponents.loadDefaultErrorComponents",s.loadComponents="LoadComponents.loadComponents",s),P=((i=P||{}).getRequestHandler="NextServer.getRequestHandler",i.getRequestHandlerWithMetadata="NextServer.getRequestHandlerWithMetadata",i.getServer="NextServer.getServer",i.getServerRequestHandler="NextServer.getServerRequestHandler",i.createServer="createServer.createServer",i),O=((c=O||{}).compression="NextNodeServer.compression",c.getBuildId="NextNodeServer.getBuildId",c.createComponentTree="NextNodeServer.createComponentTree",c.clientComponentLoading="NextNodeServer.clientComponentLoading",c.getLayoutOrPageModule="NextNodeServer.getLayoutOrPageModule",c.generateStaticRoutes="NextNodeServer.generateStaticRoutes",c.generateFsStaticRoutes="NextNodeServer.generateFsStaticRoutes",c.generatePublicRoutes="NextNodeServer.generatePublicRoutes",c.generateImageRoutes="NextNodeServer.generateImageRoutes.route",c.sendRenderResult="NextNodeServer.sendRenderResult",c.proxyRequest="NextNodeServer.proxyRequest",c.runApi="NextNodeServer.runApi",c.render="NextNodeServer.render",c.renderHTML="NextNodeServer.renderHTML",c.imageOptimizer="NextNodeServer.imageOptimizer",c.getPagePath="NextNodeServer.getPagePath",c.getRoutesManifest="NextNodeServer.getRoutesManifest",c.findPageComponents="NextNodeServer.findPageComponents",c.getFontManifest="NextNodeServer.getFontManifest",c.getServerComponentManifest="NextNodeServer.getServerComponentManifest",c.getRequestHandler="NextNodeServer.getRequestHandler",c.renderToHTML="NextNodeServer.renderToHTML",c.renderError="NextNodeServer.renderError",c.renderErrorToHTML="NextNodeServer.renderErrorToHTML",c.render404="NextNodeServer.render404",c.startResponse="NextNodeServer.startResponse",c.route="route",c.onProxyReq="onProxyReq",c.apiResolver="apiResolver",c.internalFetch="internalFetch",c),T=((u=T||{}).startServer="startServer.startServer",u),C=((d=C||{}).getServerSideProps="Render.getServerSideProps",d.getStaticProps="Render.getStaticProps",d.renderToString="Render.renderToString",d.renderDocument="Render.renderDocument",d.createBodyResult="Render.createBodyResult",d),I=((l=I||{}).renderToString="AppRender.renderToString",l.renderToReadableStream="AppRender.renderToReadableStream",l.getBodyResult="AppRender.getBodyResult",l.fetch="AppRender.fetch",l),N=((m=N||{}).executeRoute="Router.executeRoute",m),q=((p=q||{}).runHandler="Node.runHandler",p),M=((f=M||{}).runHandler="AppRouteRouteHandlers.runHandler",f),j=((g=j||{}).generateMetadata="ResolveMetadata.generateMetadata",g.generateViewport="ResolveMetadata.generateViewport",g),D=((h=D||{}).execute="Middleware.execute",h);let L=new Set(["Middleware.execute","BaseServer.handleRequest","Render.getServerSideProps","Render.getStaticProps","AppRender.fetch","AppRender.getBodyResult","Render.renderDocument","Node.runHandler","AppRouteRouteHandlers.runHandler","ResolveMetadata.generateMetadata","ResolveMetadata.generateViewport","NextNodeServer.createComponentTree","NextNodeServer.findPageComponents","NextNodeServer.getLayoutOrPageModule","NextNodeServer.startResponse","NextNodeServer.clientComponentLoading"]),k=new Set(["NextNodeServer.findPageComponents","NextNodeServer.createComponentTree","NextNodeServer.clientComponentLoading"]),G=process.env.NEXT_OTEL_PERFORMANCE_PREFIX;try{a=e.r(70406)}catch(t){a=e.r(17413)}let{context:U,propagation:B,trace:z,SpanStatusCode:$,SpanKind:F,ROOT_CONTEXT:W}=a;class V extends Error{constructor(e,a){super(),this.bubble=e,this.result=a}}let H=(e,a)=>{"object"==typeof a&&null!==a&&a instanceof V&&a.bubble?e.setAttribute("next.bubble",!0):(a&&(e.recordException(a),e.setAttribute("error.type",a.name)),e.setStatus({code:$.ERROR,message:null==a?void 0:a.message})),e.end()},X=new Map,Q=a.createContextKey("next.rootSpanId"),Y=0,K={set(e,a,t){e.push({key:a,value:t})}},J=(r=new class e{getTracerInstance(){return z.getTracer("next.js","0.0.1")}getContext(){return U}getTracePropagationData(){let e=U.active(),a=[];return B.inject(e,a,K),a}getActiveScopeSpan(){return z.getSpan(null==U?void 0:U.active())}withPropagatedContext(e,a,t){let r=U.active();if(z.getSpanContext(r))return a();let o=B.extract(r,e,t);return U.with(o,a)}trace(...e){let[a,t,r]=e,{fn:o,options:n}="function"==typeof t?{fn:t,options:{}}:{fn:r,options:{...t}},s=n.spanName??a;if(!L.has(a)&&"1"!==process.env.NEXT_OTEL_VERBOSE||n.hideSpan)return o();let i=this.getSpanContext((null==n?void 0:n.parentSpan)??this.getActiveScopeSpan());i||(i=(null==U?void 0:U.active())??W);let c=i.getValue(Q),u="number"!=typeof c||!X.has(c),d=Y++;return n.attributes={"next.span_name":s,"next.span_type":a,...n.attributes},U.with(i.setValue(Q,d),()=>this.getTracerInstance().startActiveSpan(s,n,e=>{let t;G&&a&&k.has(a)&&(t="performance"in globalThis&&"measure"in performance?globalThis.performance.now():void 0);let r=!1,s=()=>{!r&&(r=!0,X.delete(d),t&&performance.measure(`${G}:next-${(a.split(".").pop()||"").replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}`,{start:t,end:performance.now()}))};if(u&&X.set(d,new Map(Object.entries(n.attributes??{}))),o.length>1)try{return o(e,a=>H(e,a))}catch(a){throw H(e,a),a}finally{s()}try{let a=o(e);if(null!==a&&"object"==typeof a&&"then"in a&&"function"==typeof a.then)return a.then(a=>(e.end(),a)).catch(a=>{throw H(e,a),a}).finally(s);return e.end(),s(),a}catch(a){throw H(e,a),s(),a}}))}wrap(...e){let a=this,[t,r,o]=3===e.length?e:[e[0],{},e[1]];return L.has(t)||"1"===process.env.NEXT_OTEL_VERBOSE?function(){let e=r;"function"==typeof e&&"function"==typeof o&&(e=e.apply(this,arguments));let n=arguments.length-1,s=arguments[n];if("function"!=typeof s)return a.trace(t,e,()=>o.apply(this,arguments));{let r=a.getContext().bind(U.active(),s);return a.trace(t,e,(e,a)=>(arguments[n]=function(e){return null==a||a(e),r.apply(this,arguments)},o.apply(this,arguments)))}}:o}startSpan(...e){let[a,t]=e,r=this.getSpanContext((null==t?void 0:t.parentSpan)??this.getActiveScopeSpan());return this.getTracerInstance().startSpan(a,t,r)}getSpanContext(e){return e?z.setSpan(U.active(),e):void 0}getRootSpanAttributes(){let e=U.active().getValue(Q);return X.get(e)}setRootSpanAttribute(e,a){let t=U.active().getValue(Q),r=X.get(t);r&&!r.has(e)&&r.set(e,a)}withSpan(e,a){let t=z.setSpan(U.active(),e);return U.with(t,a)}},()=>r),Z="x-next-cache-tags",ee={shared:"shared",reactServerComponents:"rsc",serverSideRendering:"ssr",actionBrowser:"action-browser",apiNode:"api-node",apiEdge:"api-edge",middleware:"middleware",instrument:"instrument",edgeAsset:"edge-asset",appPagesBrowser:"app-pages-browser",pagesDirBrowser:"pages-dir-browser",pagesDirEdge:"pages-dir-edge",pagesDirNode:"pages-dir-node"};({...ee,GROUP:{builtinReact:[ee.reactServerComponents,ee.actionBrowser],serverOnly:[ee.reactServerComponents,ee.actionBrowser,ee.instrument,ee.middleware],neutralTarget:[ee.apiNode,ee.apiEdge],clientOnly:[ee.serverSideRendering,ee.appPagesBrowser],bundled:[ee.reactServerComponents,ee.actionBrowser,ee.serverSideRendering,ee.appPagesBrowser,ee.shared,ee.instrument,ee.middleware],appPages:[ee.reactServerComponents,ee.serverSideRendering,ee.appPagesBrowser,ee.actionBrowser]}});var ea=e.i(47540);class et extends Error{constructor(e){super(`Dynamic server usage: ${e}`),this.description=e,this.digest="DYNAMIC_SERVER_USAGE"}}class er extends Error{constructor(...e){super(...e),this.code="NEXT_STATIC_GEN_BAILOUT"}}var eo=e.i(32319),en=e.i(56704);class es extends Error{constructor(e,a){super(`During prerendering, ${a} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${a} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${e}".`),this.route=e,this.expression=a,this.digest="HANGING_PROMISE_REJECTION"}}let ei=new WeakMap;function ec(e,a,t){if(e.aborted)return Promise.reject(new es(a,t));{let r=new Promise((r,o)=>{let n=o.bind(null,new es(a,t)),s=ei.get(e);if(s)s.push(n);else{let a=[n];ei.set(e,a),e.addEventListener("abort",()=>{for(let e=0;e<a.length;e++)a[e]()},{once:!0})}});return r.catch(eu),r}}function eu(){}class ed extends Error{constructor(e,a){super(`Invariant: ${e.endsWith(".")?e:e+"."} This is a bug in Next.js.`,a),this.name="InvariantError"}}let el="function"==typeof ea.default.unstable_postpone;function em(e,a,t){if(a)switch(a.type){case"cache":case"unstable-cache":case"private-cache":return}if(!e.forceDynamic&&!e.forceStatic){if(e.dynamicShouldError)throw Object.defineProperty(new er(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${t}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E553",enumerable:!1,configurable:!0});if(a)switch(a.type){case"prerender-ppr":var r,o,n;return r=e.route,o=t,n=a.dynamicTracking,void(function(){if(!el)throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E224",enumerable:!1,configurable:!0})}(),n&&n.dynamicAccesses.push({stack:n.isDebugDynamicAccesses?Error().stack:void 0,expression:o}),ea.default.unstable_postpone(ep(r,o)));case"prerender-legacy":a.revalidate=0;let s=Object.defineProperty(new et(`Route ${e.route} couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E550",enumerable:!1,configurable:!0});throw e.dynamicUsageDescription=t,e.dynamicUsageStack=s.stack,s}}}function ep(e,a){return`Route ${e} needs to bail out of prerendering at this point because it used ${a}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`}if(!1===((x=ep("%%%","^^^")).includes("needs to bail out of prerendering at this point because it used")&&x.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")))throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E296",enumerable:!1,configurable:!0});RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at __next_root_layout_boundary__ \\([^\\n]*\\)`),RegExp(`\\n\\s+at __next_metadata_boundary__[\\n\\s]`),RegExp(`\\n\\s+at __next_viewport_boundary__[\\n\\s]`),RegExp(`\\n\\s+at __next_outlet_boundary__[\\n\\s]`);let ef=()=>{};function eg(e){if(!e.body)return[e,e];let[a,r]=e.body.tee(),o=new Response(a,{status:e.status,statusText:e.statusText,headers:e.headers});Object.defineProperty(o,"url",{value:e.url,configurable:!0,enumerable:!0,writable:!1}),t&&o.body&&t.register(o,new WeakRef(o.body));let n=new Response(r,{status:e.status,statusText:e.statusText,headers:e.headers});return Object.defineProperty(n,"url",{value:e.url,configurable:!0,enumerable:!0,writable:!1}),[o,n]}globalThis.FinalizationRegistry&&(t=new FinalizationRegistry(e=>{let a=e.deref();a&&!a.locked&&a.cancel("Response object has been garbage collected").then(ef)}));let eh=new Set(["traceparent","tracestate"]);class ex{constructor(){let e,a;this.promise=new Promise((t,r)=>{e=t,a=r}),this.resolve=e,this.reject=a}}class eb{constructor(e,a,t){this.prev=null,this.next=null,this.key=e,this.data=a,this.size=t}}class ev{constructor(){this.prev=null,this.next=null}}class ey{constructor(e,a,t){this.cache=new Map,this.totalSize=0,this.maxSize=e,this.calculateSize=a,this.onEvict=t,this.head=new ev,this.tail=new ev,this.head.next=this.tail,this.tail.prev=this.head}addToHead(e){e.prev=this.head,e.next=this.head.next,this.head.next.prev=e,this.head.next=e}removeNode(e){e.prev.next=e.next,e.next.prev=e.prev}moveToHead(e){this.removeNode(e),this.addToHead(e)}removeTail(){let e=this.tail.prev;return this.removeNode(e),e}set(e,a){let t=(null==this.calculateSize?void 0:this.calculateSize.call(this,a))??1;if(t>this.maxSize)return void console.warn("Single item size exceeds maxSize");let r=this.cache.get(e);if(r)r.data=a,this.totalSize=this.totalSize-r.size+t,r.size=t,this.moveToHead(r);else{let r=new eb(e,a,t);this.cache.set(e,r),this.addToHead(r),this.totalSize+=t}for(;this.totalSize>this.maxSize&&this.cache.size>0;){let e=this.removeTail();this.cache.delete(e.key),this.totalSize-=e.size,null==this.onEvict||this.onEvict.call(this,e.key,e.data)}}has(e){return this.cache.has(e)}get(e){let a=this.cache.get(e);if(a)return this.moveToHead(a),a.data}*[Symbol.iterator](){let e=this.head.next;for(;e&&e!==this.tail;){let a=e;yield[a.key,a.data],e=e.next}}remove(e){let a=this.cache.get(e);a&&(this.removeNode(a),this.cache.delete(e),this.totalSize-=a.size)}get size(){return this.cache.size}get currentSize(){return this.totalSize}}let{env:eE,stdout:e_}=(null==(E=globalThis)?void 0:E.process)??{},eA=eE&&!eE.NO_COLOR&&(eE.FORCE_COLOR||(null==e_?void 0:e_.isTTY)&&!eE.CI&&"dumb"!==eE.TERM),eS=(e,a,t,r)=>{let o=e.substring(0,r)+t,n=e.substring(r+a.length),s=n.indexOf(a);return~s?o+eS(n,a,t,s):o+n},ew=(e,a,t=e)=>eA?r=>{let o=""+r,n=o.indexOf(a,e.length);return~n?e+eS(o,a,t,n)+a:e+o+a}:String,eR=ew("\x1b[1m","\x1b[22m","\x1b[22m\x1b[1m");ew("\x1b[2m","\x1b[22m","\x1b[22m\x1b[2m"),ew("\x1b[3m","\x1b[23m"),ew("\x1b[4m","\x1b[24m"),ew("\x1b[7m","\x1b[27m"),ew("\x1b[8m","\x1b[28m"),ew("\x1b[9m","\x1b[29m"),ew("\x1b[30m","\x1b[39m");let eP=ew("\x1b[31m","\x1b[39m"),eO=ew("\x1b[32m","\x1b[39m"),eT=ew("\x1b[33m","\x1b[39m");ew("\x1b[34m","\x1b[39m");let eC=ew("\x1b[35m","\x1b[39m");ew("\x1b[38;2;173;127;168m","\x1b[39m"),ew("\x1b[36m","\x1b[39m");let eI=ew("\x1b[37m","\x1b[39m");ew("\x1b[90m","\x1b[39m"),ew("\x1b[40m","\x1b[49m"),ew("\x1b[41m","\x1b[49m"),ew("\x1b[42m","\x1b[49m"),ew("\x1b[43m","\x1b[49m"),ew("\x1b[44m","\x1b[49m"),ew("\x1b[45m","\x1b[49m"),ew("\x1b[46m","\x1b[49m"),ew("\x1b[47m","\x1b[49m"),eI(eR("○")),eP(eR("⨯")),eT(eR("⚠")),eI(eR(" ")),eO(eR("✓")),eC(eR("»")),new ey(1e4,e=>e.length),new ey(1e4,e=>e.length);var eN=((b={}).APP_PAGE="APP_PAGE",b.APP_ROUTE="APP_ROUTE",b.PAGES="PAGES",b.FETCH="FETCH",b.REDIRECT="REDIRECT",b.IMAGE="IMAGE",b),eq=((v={}).APP_PAGE="APP_PAGE",v.APP_ROUTE="APP_ROUTE",v.PAGES="PAGES",v.FETCH="FETCH",v.IMAGE="IMAGE",v);function eM(){}new Uint8Array([60,104,116,109,108]),new Uint8Array([60,98,111,100,121]),new Uint8Array([60,47,104,101,97,100,62]),new Uint8Array([60,47,98,111,100,121,62]),new Uint8Array([60,47,104,116,109,108,62]),new Uint8Array([60,47,98,111,100,121,62,60,47,104,116,109,108,62]),new Uint8Array([60,109,101,116,97,32,110,97,109,101,61,34,194,171,110,120,116,45,105,99,111,110,194,187,34]);let ej=new TextEncoder;function eD(e){return new ReadableStream({start(a){a.enqueue(ej.encode(e)),a.close()}})}function eL(e){return new ReadableStream({start(a){a.enqueue(e),a.close()}})}async function ek(e,a){let t=new TextDecoder("utf-8",{fatal:!0}),r="";for await(let o of e){if(null==a?void 0:a.aborted)return r;r+=t.decode(o,{stream:!0})}return r+t.decode()}let eG=Symbol.for("NextInternalRequestMeta");function eU(e,a){let t=e[eG]||{};return"string"==typeof a?t[a]:t}function eB(e){let a=new Headers;for(let[t,r]of Object.entries(e))for(let e of Array.isArray(r)?r:[r])void 0!==e&&("number"==typeof e&&(e=e.toString()),a.append(t,e));return a}function ez(e){var a,t,r,o,n,s=[],i=0;function c(){for(;i<e.length&&/\s/.test(e.charAt(i));)i+=1;return i<e.length}for(;i<e.length;){for(a=i,n=!1;c();)if(","===(t=e.charAt(i))){for(r=i,i+=1,c(),o=i;i<e.length&&"="!==(t=e.charAt(i))&&";"!==t&&","!==t;)i+=1;i<e.length&&"="===e.charAt(i)?(n=!0,i=o,s.push(e.substring(a,r)),a=i):i=r+1}else i+=1;(!n||i>=e.length)&&s.push(e.substring(a,e.length))}return s}function e$(e){let a={},t=[];if(e)for(let[r,o]of e.entries())"set-cookie"===r.toLowerCase()?(t.push(...ez(o)),a[r]=1===t.length?t[0]:t):a[r]=o;return a}function eF(e){return e.replace(/\/$/,"")||"/"}function eW(e){let a=e.indexOf("#"),t=e.indexOf("?"),r=t>-1&&(a<0||t<a);return r||a>-1?{pathname:e.substring(0,r?t:a),query:r?e.substring(t,a>-1?a:void 0):"",hash:a>-1?e.slice(a):""}:{pathname:e,query:"",hash:""}}function eV(e,a){if(!e.startsWith("/")||!a)return e;let{pathname:t,query:r,hash:o}=eW(e);return`${a}${t}${r}${o}`}function eH(e,a){if(!e.startsWith("/")||!a)return e;let{pathname:t,query:r,hash:o}=eW(e);return`${t}${a}${r}${o}`}function eX(e,a){if("string"!=typeof e)return!1;let{pathname:t}=eW(e);return t===a||t.startsWith(a+"/")}let eQ=new WeakMap;function eY(e,a){let t;if(!a)return{pathname:e};let r=eQ.get(a);r||(r=a.map(e=>e.toLowerCase()),eQ.set(a,r));let o=e.split("/",2);if(!o[1])return{pathname:e};let n=o[1].toLowerCase(),s=r.indexOf(n);return s<0?{pathname:e}:(t=a[s],{pathname:e=e.slice(t.length+1)||"/",detectedLocale:t})}let eK=/(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;function eJ(e,a){return new URL(String(e).replace(eK,"localhost"),a&&String(a).replace(eK,"localhost"))}let eZ=Symbol("NextURLInternal");class e0{constructor(e,a,t){let r,o;"object"==typeof a&&"pathname"in a||"string"==typeof a?(r=a,o=t||{}):o=t||a||{},this[eZ]={url:eJ(e,r??o.base),options:o,basePath:""},this.analyze()}analyze(){var e,a,t,r,o;let n=function(e,a){let{basePath:t,i18n:r,trailingSlash:o}=a.nextConfig??{},n={pathname:e,trailingSlash:"/"!==e?e.endsWith("/"):o};t&&eX(n.pathname,t)&&(n.pathname=function(e,a){if(!eX(e,a))return e;let t=e.slice(a.length);return t.startsWith("/")?t:`/${t}`}(n.pathname,t),n.basePath=t);let s=n.pathname;if(n.pathname.startsWith("/_next/data/")&&n.pathname.endsWith(".json")){let e=n.pathname.replace(/^\/_next\/data\//,"").replace(/\.json$/,"").split("/");n.buildId=e[0],s="index"!==e[1]?`/${e.slice(1).join("/")}`:"/",!0===a.parseData&&(n.pathname=s)}if(r){let e=a.i18nProvider?a.i18nProvider.analyze(n.pathname):eY(n.pathname,r.locales);n.locale=e.detectedLocale,n.pathname=e.pathname??n.pathname,!e.detectedLocale&&n.buildId&&(e=a.i18nProvider?a.i18nProvider.analyze(s):eY(s,r.locales)).detectedLocale&&(n.locale=e.detectedLocale)}return n}(this[eZ].url.pathname,{nextConfig:this[eZ].options.nextConfig,parseData:!0,i18nProvider:this[eZ].options.i18nProvider}),s=function(e,a){let t;if(a?.host&&!Array.isArray(a.host))t=a.host.toString().split(":",1)[0];else{if(!e.hostname)return;t=e.hostname}return t.toLowerCase()}(this[eZ].url,this[eZ].options.headers);this[eZ].domainLocale=this[eZ].options.i18nProvider?this[eZ].options.i18nProvider.detectDomainLocale(s):function(e,a,t){if(e){for(let r of(t&&(t=t.toLowerCase()),e))if(a===r.domain?.split(":",1)[0].toLowerCase()||t===r.defaultLocale.toLowerCase()||r.locales?.some(e=>e.toLowerCase()===t))return r}}(null==(a=this[eZ].options.nextConfig)||null==(e=a.i18n)?void 0:e.domains,s);let i=(null==(t=this[eZ].domainLocale)?void 0:t.defaultLocale)||(null==(o=this[eZ].options.nextConfig)||null==(r=o.i18n)?void 0:r.defaultLocale);this[eZ].url.pathname=n.pathname,this[eZ].defaultLocale=i,this[eZ].basePath=n.basePath??"",this[eZ].buildId=n.buildId,this[eZ].locale=n.locale??i,this[eZ].trailingSlash=n.trailingSlash}formatPathname(){var e;let a;return a=function(e,a,t,r){if(!a||a===t)return e;let o=e.toLowerCase();return!r&&(eX(o,"/api")||eX(o,`/${a.toLowerCase()}`))?e:eV(e,`/${a}`)}((e={basePath:this[eZ].basePath,buildId:this[eZ].buildId,defaultLocale:this[eZ].options.forceLocale?void 0:this[eZ].defaultLocale,locale:this[eZ].locale,pathname:this[eZ].url.pathname,trailingSlash:this[eZ].trailingSlash}).pathname,e.locale,e.buildId?void 0:e.defaultLocale,e.ignorePrefix),(e.buildId||!e.trailingSlash)&&(a=eF(a)),e.buildId&&(a=eH(eV(a,`/_next/data/${e.buildId}`),"/"===e.pathname?"index.json":".json")),a=eV(a,e.basePath),!e.buildId&&e.trailingSlash?a.endsWith("/")?a:eH(a,"/"):eF(a)}formatSearch(){return this[eZ].url.search}get buildId(){return this[eZ].buildId}set buildId(e){this[eZ].buildId=e}get locale(){return this[eZ].locale??""}set locale(e){var a,t;if(!this[eZ].locale||!(null==(t=this[eZ].options.nextConfig)||null==(a=t.i18n)?void 0:a.locales.includes(e)))throw Object.defineProperty(TypeError(`The NextURL configuration includes no locale "${e}"`),"__NEXT_ERROR_CODE",{value:"E597",enumerable:!1,configurable:!0});this[eZ].locale=e}get defaultLocale(){return this[eZ].defaultLocale}get domainLocale(){return this[eZ].domainLocale}get searchParams(){return this[eZ].url.searchParams}get host(){return this[eZ].url.host}set host(e){this[eZ].url.host=e}get hostname(){return this[eZ].url.hostname}set hostname(e){this[eZ].url.hostname=e}get port(){return this[eZ].url.port}set port(e){this[eZ].url.port=e}get protocol(){return this[eZ].url.protocol}set protocol(e){this[eZ].url.protocol=e}get href(){let e=this.formatPathname(),a=this.formatSearch();return`${this.protocol}//${this.host}${e}${a}${this.hash}`}set href(e){this[eZ].url=eJ(e),this.analyze()}get origin(){return this[eZ].url.origin}get pathname(){return this[eZ].url.pathname}set pathname(e){this[eZ].url.pathname=e}get hash(){return this[eZ].url.hash}set hash(e){this[eZ].url.hash=e}get search(){return this[eZ].url.search}set search(e){this[eZ].url.search=e}get password(){return this[eZ].url.password}set password(e){this[eZ].url.password=e}get username(){return this[eZ].url.username}set username(e){this[eZ].url.username=e}get basePath(){return this[eZ].basePath}set basePath(e){this[eZ].basePath=e.startsWith("/")?e:`/${e}`}toString(){return this.href}toJSON(){return this.href}[Symbol.for("edge-runtime.inspect.custom")](){return{href:this.href,origin:this.origin,protocol:this.protocol,username:this.username,password:this.password,host:this.host,hostname:this.hostname,port:this.port,pathname:this.pathname,search:this.search,searchParams:this.searchParams,hash:this.hash}}clone(){return new e0(String(this),this[eZ].options)}}class e1 extends Error{constructor(){super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `)}}class e3 extends Error{constructor(){super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `)}}var e2=e.i(19481);let e7=Symbol("internal request");class e9 extends Request{constructor(e,a={}){const t="string"!=typeof e&&"url"in e?e.url:String(e);!function(e){try{String(new URL(String(e)))}catch(a){throw Object.defineProperty(Error(`URL is malformed "${String(e)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,{cause:a}),"__NEXT_ERROR_CODE",{value:"E61",enumerable:!1,configurable:!0})}}(t),a.body&&"half"!==a.duplex&&(a.duplex="half"),e instanceof Request?super(e,a):super(t,a);const r=new e0(t,{headers:e$(this.headers),nextConfig:a.nextConfig});this[e7]={cookies:new e2.RequestCookies(this.headers),nextUrl:r,url:r.toString()}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,nextUrl:this.nextUrl,url:this.url,bodyUsed:this.bodyUsed,cache:this.cache,credentials:this.credentials,destination:this.destination,headers:Object.fromEntries(this.headers),integrity:this.integrity,keepalive:this.keepalive,method:this.method,mode:this.mode,redirect:this.redirect,referrer:this.referrer,referrerPolicy:this.referrerPolicy,signal:this.signal}}get cookies(){return this[e7].cookies}get nextUrl(){return this[e7].nextUrl}get page(){throw new e1}get ua(){throw new e3}get url(){return this[e7].url}}let e4="ResponseAborted";class e5 extends Error{constructor(...e){super(...e),this.name=e4}}function e6(e){let a=new AbortController;return e.once("close",()=>{e.writableFinished||a.abort(new e5)}),a}class e8{static fromBaseNextRequest(e,a){return e8.fromNodeNextRequest(e,a)}static fromNodeNextRequest(e,a){let t,r=null;if("GET"!==e.method&&"HEAD"!==e.method&&e.body&&(r=e.body),e.url.startsWith("http"))t=new URL(e.url);else{let a=eU(e,"initURL");t=a&&a.startsWith("http")?new URL(e.url,a):new URL(e.url,"http://n")}return new e9(t,{method:e.method,headers:eB(e.headers),duplex:"half",signal:a,...a.aborted?{}:{body:r}})}static fromWebNextRequest(e){let a=null;return"GET"!==e.method&&"HEAD"!==e.method&&(a=e.body),new e9(e.url,{method:e.method,headers:eB(e.headers),duplex:"half",signal:e.request.signal,...e.request.signal.aborted?{}:{body:a}})}}let ae=0,aa=0,at=0;function ar(e){return(null==e?void 0:e.name)==="AbortError"||(null==e?void 0:e.name)===e4}async function ao(e,a,t){try{let{errored:r,destroyed:o}=a;if(r||o)return;let n=e6(a),s=function(e,a){let t=!1,r=new ex;function o(){r.resolve()}e.on("drain",o),e.once("close",()=>{e.off("drain",o),r.resolve()});let n=new ex;return e.once("finish",()=>{n.resolve()}),new WritableStream({write:async a=>{if(!t){if(t=!0,"performance"in globalThis&&process.env.NEXT_OTEL_PERFORMANCE_PREFIX){let e=function(e={}){let a=0===ae?void 0:{clientComponentLoadStart:ae,clientComponentLoadTimes:aa,clientComponentLoadCount:at};return e.reset&&(ae=0,aa=0,at=0),a}();e&&performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-client-component-loading`,{start:e.clientComponentLoadStart,end:e.clientComponentLoadStart+e.clientComponentLoadTimes})}e.flushHeaders(),J().trace(O.startResponse,{spanName:"start response"},()=>void 0)}try{let t=e.write(a);"flush"in e&&"function"==typeof e.flush&&e.flush(),t||(await r.promise,r=new ex)}catch(a){throw e.end(),Object.defineProperty(Error("failed to write chunk to response",{cause:a}),"__NEXT_ERROR_CODE",{value:"E321",enumerable:!1,configurable:!0})}},abort:a=>{e.writableFinished||e.destroy(a)},close:async()=>{if(a&&await a,!e.writableFinished)return e.end(),n.promise}})}(a,t);await e.pipeTo(s,{signal:n.signal})}catch(e){if(ar(e))return;throw Object.defineProperty(Error("failed to pipe response",{cause:e}),"__NEXT_ERROR_CODE",{value:"E180",enumerable:!1,configurable:!0})}}class an{static #e=this.EMPTY=new an(null,{metadata:{},contentType:null});static fromStatic(e,a){return new an(e,{metadata:{},contentType:a})}constructor(e,{contentType:a,waitUntil:t,metadata:r}){this.response=e,this.contentType=a,this.metadata=r,this.waitUntil=t}assignMetadata(e){Object.assign(this.metadata,e)}get isNull(){return null===this.response}get isDynamic(){return"string"!=typeof this.response}toUnchunkedString(e=!1){if(null===this.response)return"";if("string"!=typeof this.response){if(!e)throw Object.defineProperty(new ed("dynamic responses cannot be unchunked. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E732",enumerable:!1,configurable:!0});return ek(this.readable)}return this.response}get readable(){return null===this.response?new ReadableStream({start(e){e.close()}}):"string"==typeof this.response?eD(this.response):Buffer.isBuffer(this.response)?eL(this.response):Array.isArray(this.response)?function(...e){if(0===e.length)return new ReadableStream({start(e){e.close()}});if(1===e.length)return e[0];let{readable:a,writable:t}=new TransformStream,r=e[0].pipeTo(t,{preventClose:!0}),o=1;for(;o<e.length-1;o++){let a=e[o];r=r.then(()=>a.pipeTo(t,{preventClose:!0}))}let n=e[o];return(r=r.then(()=>n.pipeTo(t))).catch(eM),a}(...this.response):this.response}coerce(){return null===this.response?[]:"string"==typeof this.response?[eD(this.response)]:Array.isArray(this.response)?this.response:Buffer.isBuffer(this.response)?[eL(this.response)]:[this.response]}unshift(e){this.response=this.coerce(),this.response.unshift(e)}push(e){this.response=this.coerce(),this.response.push(e)}async pipeTo(e){try{await this.readable.pipeTo(e,{preventClose:!0}),this.waitUntil&&await this.waitUntil,await e.close()}catch(a){if(ar(a))return void await e.abort(a);throw a}}async pipeToNodeResponse(e){await ao(this.readable,e,this.waitUntil)}}function as(e,a){if(!e)return a;let t=parseInt(e,10);return Number.isFinite(t)&&t>0?t:a}as(process.env.NEXT_PRIVATE_RESPONSE_CACHE_TTL,1e4),as(process.env.NEXT_PRIVATE_RESPONSE_CACHE_MAX_SIZE,150);let ai=Symbol.for("next-patch");function ac(e,a){e.shouldTrackFetchMetrics&&(e.fetchMetrics??=[],e.fetchMetrics.push({...a,end:performance.timeOrigin+performance.now(),idx:e.nextFetchId||0}))}async function au(e,a,t,r,o,n){let s=await e.arrayBuffer(),i={headers:Object.fromEntries(e.headers.entries()),body:Buffer.from(s).toString("base64"),status:e.status,url:e.url};return t&&await r.set(a,{kind:eN.FETCH,data:i,revalidate:o},t),await n(),new Response(s,{headers:e.headers,status:e.status,statusText:e.statusText})}async function ad(e,a,t,r,o,n,s,i,c){let[u,d]=eg(a),l=u.arrayBuffer().then(async e=>{let a=Buffer.from(e),i={headers:Object.fromEntries(u.headers.entries()),body:a.toString("base64"),status:u.status,url:u.url};null==n||n.set(t,i),r&&await o.set(t,{kind:eN.FETCH,data:i,revalidate:s},r)}).catch(e=>console.warn("Failed to set fetch cache",i,e)).finally(c),m=`cache-set-${t}`,p=e.pendingRevalidates??={},f=Promise.resolve();return m in p&&(f=p[m]),p[m]=f.then(()=>l).finally(()=>{(null==p?void 0:p[m])&&delete p[m]}),d}let al=null;function am(e){var a;return(a=e.split("/").reduce((e,a,t,r)=>a?"("===a[0]&&a.endsWith(")")||"@"===a[0]||("page"===a||"route"===a)&&t===r.length-1?e:`${e}/${a}`:e,"")).startsWith("/")?a:`/${a}`}let ap=Symbol.for("next.server.manifests"),af=globalThis;class ag{static get(e,a,t){let r=Reflect.get(e,a,t);return"function"==typeof r?r.bind(e):r}static set(e,a,t,r){return Reflect.set(e,a,t,r)}static has(e,a){return Reflect.has(e,a)}static deleteProperty(e,a){return Reflect.deleteProperty(e,a)}}class ah extends Error{constructor(){super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers")}static callable(){throw new ah}}class ax extends Headers{constructor(e){super(),this.headers=new Proxy(e,{get(a,t,r){if("symbol"==typeof t)return ag.get(a,t,r);let o=t.toLowerCase(),n=Object.keys(e).find(e=>e.toLowerCase()===o);if(void 0!==n)return ag.get(a,n,r)},set(a,t,r,o){if("symbol"==typeof t)return ag.set(a,t,r,o);let n=t.toLowerCase(),s=Object.keys(e).find(e=>e.toLowerCase()===n);return ag.set(a,s??t,r,o)},has(a,t){if("symbol"==typeof t)return ag.has(a,t);let r=t.toLowerCase(),o=Object.keys(e).find(e=>e.toLowerCase()===r);return void 0!==o&&ag.has(a,o)},deleteProperty(a,t){if("symbol"==typeof t)return ag.deleteProperty(a,t);let r=t.toLowerCase(),o=Object.keys(e).find(e=>e.toLowerCase()===r);return void 0===o||ag.deleteProperty(a,o)}})}static seal(e){return new Proxy(e,{get(e,a,t){switch(a){case"append":case"delete":case"set":return ah.callable;default:return ag.get(e,a,t)}}})}merge(e){return Array.isArray(e)?e.join(", "):e}static from(e){return e instanceof Headers?e:new ax(e)}append(e,a){let t=this.headers[e];"string"==typeof t?this.headers[e]=[t,a]:Array.isArray(t)?t.push(a):this.headers[e]=a}delete(e){delete this.headers[e]}get(e){let a=this.headers[e];return void 0!==a?this.merge(a):null}has(e){return void 0!==this.headers[e]}set(e,a){this.headers[e]=a}forEach(e,a){for(let[t,r]of this.entries())e.call(a,r,t,this)}*entries(){for(let e of Object.keys(this.headers)){let a=e.toLowerCase(),t=this.get(a);yield[a,t]}}*keys(){for(let e of Object.keys(this.headers)){let a=e.toLowerCase();yield a}}*values(){for(let e of Object.keys(this.headers)){let a=this.get(e);yield a}}[Symbol.iterator](){return this.entries()}}Symbol("__next_preview_data");let ab=Symbol("__prerender_bypass");var av=((y={})[y.SeeOther=303]="SeeOther",y[y.TemporaryRedirect=307]="TemporaryRedirect",y[y.PermanentRedirect=308]="PermanentRedirect",y);class ay{constructor(e,a,t){this.method=e,this.url=a,this.body=t}get cookies(){var a;return this._cookies?this._cookies:this._cookies=(a=this.headers,function(){let{cookie:t}=a;if(!t)return{};let{parse:r}=e.r(93118);return r(Array.isArray(t)?t.join("; "):t)})()}}class aE{constructor(e){this.destination=e}redirect(e,a){return this.setHeader("Location",e),this.statusCode=a,a===av.PermanentRedirect&&this.setHeader("Refresh",`0;url=${e}`),this}}class a_ extends ay{static #e=_=eG;constructor(e){var a;super(e.method.toUpperCase(),e.url,e),this._req=e,this.headers=this._req.headers,this.fetchMetrics=null==(a=this._req)?void 0:a.fetchMetrics,this[_]=this._req[eG]||{},this.streaming=!1}get originalRequest(){return this._req[eG]=this[eG],this._req.url=this.url,this._req.cookies=this.cookies,this._req}set originalRequest(e){this._req=e}stream(){if(this.streaming)throw Object.defineProperty(Error("Invariant: NodeNextRequest.stream() can only be called once"),"__NEXT_ERROR_CODE",{value:"E467",enumerable:!1,configurable:!0});return this.streaming=!0,new ReadableStream({start:e=>{this._req.on("data",a=>{e.enqueue(new Uint8Array(a))}),this._req.on("end",()=>{e.close()}),this._req.on("error",a=>{e.error(a)})}})}}class aA extends aE{get originalResponse(){return ab in this&&(this._res[ab]=this[ab]),this._res}constructor(e){super(e),this._res=e,this.textBody=void 0}get sent(){return this._res.finished||this._res.headersSent}get statusCode(){return this._res.statusCode}set statusCode(e){this._res.statusCode=e}get statusMessage(){return this._res.statusMessage}set statusMessage(e){this._res.statusMessage=e}setHeader(e,a){return this._res.setHeader(e,a),this}removeHeader(e){return this._res.removeHeader(e),this}getHeaderValues(e){let a=this._res.getHeader(e);if(void 0!==a)return(Array.isArray(a)?a:[a]).map(e=>e.toString())}hasHeader(e){return this._res.hasHeader(e)}getHeader(e){let a=this.getHeaderValues(e);return Array.isArray(a)?a.join(","):void 0}getHeaders(){return this._res.getHeaders()}appendHeader(e,a){let t=this.getHeaderValues(e)??[];return t.includes(a)||this._res.setHeader(e,[...t,a]),this}body(e){return this.textBody=e,this}send(){this._res.end(this.textBody)}onClose(e){this.originalResponse.on("close",e)}}function aS(e){return e.isOnDemandRevalidate?"on-demand":e.isStaticGeneration?"stale":void 0}async function aw(e,a,t,r){{var o;a.statusCode=t.status,a.statusMessage=t.statusText;let n=["set-cookie","www-authenticate","proxy-authenticate","vary"];null==(o=t.headers)||o.forEach((e,t)=>{if("x-middleware-set-cookie"!==t.toLowerCase())if("set-cookie"===t.toLowerCase())for(let r of ez(e))a.appendHeader(t,r);else{let r=void 0!==a.getHeader(t);(n.includes(t.toLowerCase())||!r)&&a.appendHeader(t,e)}});let{originalResponse:s}=a;t.body&&"HEAD"!==e.method?await ao(t.body,s,r):s.end()}}var aR=e.i(93695),aP=e.i(89171);let aO="https://wa.me/5511910163467?text=Olá%20UPPER,%20vi%20o%20seu%20site%20e%20gostaria%20de%20um%20diagnóstico%20estratégico%20gratuito%20da%20minha%20empresa.",aT=[{id:0,slug:"como-transformar-o-google-meu-negocio-numa-maquina-de-clientes",title:"Como transformar o Google Meu Negócio numa máquina de clientes",category:"SEO Local",date:"25 Fev, 2026",excerpt:"A maioria das empresas tem um perfil no Google Meu Negócio. Poucas sabem usar. Veja como transformar o seu perfil numa máquina de atração de clientes.",status:"published",content:`
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

[Quero meu diagn\xf3stico gratuito →](${aO})

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
`,imageUrl:"/images/blog/cover-slow-site.png"},{id:6,slug:"automacao-de-whatsapp-para-empresas-guia-completo",title:"Automação de WhatsApp para Empresas: Como Funciona e Por Que Você Precisa",category:"Automação de WhatsApp",date:"04 Mar, 2026",excerpt:"Veja como a automação de WhatsApp elimina o gargalo de atendimento de pequenas empresas e impede que clientes sejam perdidos para a concorrência por falta de resposta rápida.",status:"published",content:e=>{e.charAt(0).toUpperCase(),e.slice(1).replace("-"," ");let a="",t="";switch(e.toLowerCase()){case"sorocaba":a="Como um dos principais polos econômicos e industriais do interior paulista, a concorrência em Sorocaba é brutal. Seja comércio, clínica ou serviço, se você demora 15 minutos para responder um orçamento no WhatsApp, o cliente já fechou com a empresa da outra quadra.",t="**Exemplo real em Sorocaba:** Uma clínica odontológica no Campolim configurou o seguinte fluxo: qualquer mensagem recebida recebe resposta imediata com os serviços disponíveis e um link para o agendamento online. De manhã, a recepcionista já encontra os horários preenchidos — sem ter digitado uma palavra.";break;case"votorantim":a="Com o crescimento imobiliário e comercial acelerado de Votorantim, novas empresas abrem todos os meses. O volume de mensagens diárias para construtoras, prestadores de serviço e varejo aumentou, e contar apenas com atendimento humano causa gargalos que custam caro.",t="**Exemplo real em Votorantim:** Uma loja de materiais para construção próxima ao centro implantou um sistema que responde preços básicos de cimento e areia e envia o catálogo em PDF automaticamente. O vendedor agora só assume o chat quando o cliente pede para fechar o pedido de telhado completo.";break;case"itu":a="O fluxo constante de turismo e os grandes condomínios de Itu geram uma demanda sazonal e imprevisível. Responder às inúmeras dúvidas sobre localização, horário de funcionamento e disponibilidade se tornou o maior ladrão de tempo dos empresários locais.",t="**Exemplo real em Itu:** Um restaurante tradicional na região central perdia dezenas de reservas aos fins de semana porque a hostess não conseguia anotar pedidos e olhar o WhatsApp ao mesmo tempo. Com um bot simples, o cardápio e o link de reserva agora são enviados no segundo 1.";break;case"salto":a="Com o desenvolvimento contínuo dos setores de serviços e turismo em Salto, os empresários precisam de processos escaláveis. Ficar horas no celular respondendo 'onde fica' ou 'qual o valor' já não é uma opção sustentável.",t="**Exemplo real em Salto:** Uma prestadora de serviços de manutenção (ar-condicionado e elétrica) criou uma automação que faz a triagem do chamado: o bot pergunta o defeito, pede uma foto e já agenda a visita técnica de acordo com o calendário do Google Agenda do técnico.";break;case"itapetininga":a="Itapetininga possui uma economia diversificada baseada no comércio forte e agropecuária. Muitos donos de negócios passam o dia inteiro 'apagando incêndios' operacionais e deixam o WhatsApp no mudo, perdendo excelentes negociações de maquinário e serviços.",t="**Exemplo real em Itapetininga:** Uma concessionária de implementos e peças agrícolas instalou um menu automático no WhatsApp. Quando o produtor rural chama de madrugada pedindo peça de trator, o robô anota o pedido e de manhã a peça já está faturada na expedição.";break;case"boituva":a="Capital do paraquedismo e do balonismo, Boituva recebe um volume absurdo de mensagens nos finais de semana de pessoas de fora com dúvidas padronizadas. O empresário que responde rápido, leva o cliente.",t="**Exemplo real em Boituva:** Uma agência de turismo local passava sábado e domingo recebendo a pergunta 'vai ter voo amanhã?'. O WhatsApp agora capta a previsão do tempo automaticamente e responde aos turistas, enquanto a agência foca na operação de solo.";break;case"porto-feliz":a="Com a chegada de condomínios de altíssimo padrão e o crescimento industrial, o nível de exigência do consumidor em Porto Feliz subiu. Atendimento amador ou demorado manda o cliente rico diretamente para a concorrência.",t="**Exemplo real em Porto Feliz:** Uma corretora de imóveis implementou um fluxo de qualificação 24h. O bot capta se o cliente quer comprar, vender ou alugar, qual a faixa de valor e a região. Quando o corretor acorda, ele já tem o lead morno na tela do CRM.";break;default:a="A concorrência local está cada vez mais profissional. Se você demora 15 minutos para responder um orçamento no WhatsApp, o cliente já fechou com a empresa vizinha.",t="**Exemplo real:** Uma clínica odontológica configurou o seguinte fluxo: qualquer mensagem recebida fora do horário comercial recebe resposta imediata com os serviços disponíveis e um link para o agendamento online. De manhã, a recepcionista já encontra os horários preenchidos — sem ter digitado uma palavra."}return`
# Automa\xe7\xe3o de WhatsApp para Empresas: Como Funciona, Quais Ferramentas Usar e Por Que Seu Concorrente J\xe1 Est\xe1 Fazendo Isso

![Atendente humano sobrecarregado vs Sistema Autom\xe1tico funcionando 24h](/images/blog/whatsapp-automation-header.png)

Toda semana aparecem pelo menos tr\xeas donos de neg\xf3cio com a mesma reclama\xe7\xe3o: "Fico o dia inteiro no WhatsApp e mesmo assim perco clientes por falta de resposta."

N\xe3o \xe9 falta de dedica\xe7\xe3o. \xc9 falta de sistema. ${a}

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

${t}

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

[Quero meu diagn\xf3stico gratuito →](${aO})

---

*Publicado por Upper Agency — Infraestrutura Digital para Empresas Locais.*
*SEO Local \xb7 GEO \xb7 WhatsApp Inteligente \xb7 Automa\xe7\xe3o com IA*
`},readTime:"11 min",imageUrl:"/images/blog/whatsapp-automation-header.png"}],aC={"seo-local":{label:"SEO Local",headline:"Apareça no Top 3 do Google Maps",description:"Estruturamos seu Perfil de Negócio no Google, otimizamos categorias, avaliações e dados geográficos para que sua empresa apareça antes dos concorrentes nas buscas locais. Resultado: mais ligações, mais visitas e mais clientes vindos diretamente do Google Maps.",benefits:["Posicionamento no Top 3 do Google Maps","Otimização completa do Google Business Profile","Gestão estratégica de avaliações","Relatórios mensais de desempenho"],faqQuestions:[{q:"Quanto tempo leva para aparecer no Maps?",a:"Os primeiros resultados aparecem entre 30 e 60 dias. Posicionamento consolidado no Top 3 geralmente ocorre entre 90 e 120 dias, dependendo da concorrência local."},{q:"SEO Local funciona para qualquer tipo de negócio?",a:"Sim. Funciona especialmente bem para clínicas, escritórios, restaurantes, lojas, oficinas e qualquer negócio que atende clientes localmente."},{q:"Preciso ter site para fazer SEO Local?",a:"Não é obrigatório, mas ter um site otimizado potencializa os resultados. A Upper pode cuidar de ambos de forma integrada."}]},"geo-ia":{label:"GEO & IA",headline:"Seja recomendado pelo ChatGPT e Gemini",description:"GEO (Generative Engine Optimization) é a prática de estruturar sua presença digital para que IAs como ChatGPT, Gemini e Perplexity recomendem sua empresa quando alguém faz perguntas sobre serviços na sua cidade. É o SEO para a nova geração de buscas.",benefits:["Citação direta por ChatGPT, Gemini e Perplexity","Schema markup estruturado para LLMs","Conteúdo em formato pergunta-resposta","Arquivo llms.txt e dados geo-estruturados"],faqQuestions:[{q:"O que é GEO e por que é diferente do SEO tradicional?",a:"SEO coloca você numa lista de 10 links. GEO faz com que a IA te recomende diretamente como resposta — muito mais autoridade e conversão."},{q:"Quanto tempo para aparecer nas respostas das IAs?",a:"IAs atualizam seu índice continuamente. Resultados iniciais aparecem em 45 a 90 dias, com consolidação em 3 a 6 meses."},{q:"GEO substitui o SEO ou complementa?",a:"Complementa. A mesma estrutura que otimiza para o Google Maps também prepara para as IAs. São estratégias integradas, não concorrentes."}]},"automacao-whatsapp":{label:"Automação WhatsApp",headline:"Atenda clientes 24h sem perder uma venda",description:"Implementamos secretárias digitais com IA no seu WhatsApp Business que respondem dúvidas, qualificam leads, enviam catálogos e agendam atendimentos — tudo automaticamente, dentro das regras oficiais da Meta. Nunca mais perca um cliente por demora no atendimento.",benefits:["Atendimento automático 24 horas por dia","Qualificação de leads antes do contato humano","Integração com catálogo de produtos","100% dentro da API oficial da Meta"],faqQuestions:[{q:"A automação pode ser bloqueada pela Meta?",a:"Não quando feita corretamente. Usamos exclusivamente a API oficial da Meta — o único método seguro após as restrições de janeiro de 2026."},{q:"A IA vai substituir meu atendimento humano?",a:"Não. Ela elimina o vácuo entre a busca e o primeiro contato, filtra dúvidas básicas e transfere para humano quando necessário."},{q:"Funciona para qualquer segmento?",a:"Sim. Clínicas, lojas, escritórios, restaurantes e qualquer negócio que receba contatos pelo WhatsApp se beneficia da automação."}]},"landing-page":{label:"Landing Page",headline:"Uma página que converte visitantes em clientes",description:"Criamos landing pages rápidas, focadas e otimizadas para conversão — com carregamento abaixo de 2 segundos, estrutura de SEO técnico, integração com WhatsApp e design que transmite autoridade imediata. Uma boa landing page converte 3x mais que um site institucional genérico.",benefits:["Carregamento em menos de 2 segundos","Estrutura de conversão testada e otimizada","SEO técnico e schema markup incluídos","Integração direta com WhatsApp Business"],faqQuestions:[{q:"Qual a diferença entre landing page e site institucional?",a:"Landing page tem um único objetivo: converter o visitante em contato ou venda. Site institucional apresenta a empresa de forma completa. Para campanhas e tráfego pago, landing page converte muito mais."},{q:"Preciso de domínio próprio?",a:"Recomendamos sim. A Upper pode orientar na aquisição e configuração, ou usar subdomínio do seu domínio atual."},{q:"A landing page fica bem no celular?",a:"Todas as páginas da Upper são mobile-first — projetadas primeiro para smartphone, onde mais de 90% das buscas locais acontecem."}]},"site-institucional":{label:"Site Institucional",headline:"Presença digital que transmite autoridade",description:"Desenvolvemos sites institucionais rápidos, bem estruturados e otimizados para SEO — com páginas de serviço, blog integrado, dados estruturados e performance técnica que o Google premia. Mais que um cartão de visitas, é uma máquina de geração de autoridade digital.",benefits:["Performance técnica acima de 90 no PageSpeed","Blog integrado para autoridade de conteúdo","Schema markup completo para Google e IAs","Estrutura de SEO técnico desde a fundação"],faqQuestions:[{q:"Quanto tempo leva para desenvolver?",a:"Sites institucionais padrão ficam prontos em 2 a 3 semanas. Projetos maiores com múltiplas páginas de serviço podem levar até 4 semanas."},{q:"O site vai aparecer no Google automaticamente?",a:"Não automaticamente — precisa de estratégia de SEO ativa. A Upper integra desenvolvimento e SEO desde o início para que o site ranqueie desde o lançamento."},{q:"Posso atualizar o conteúdo sozinho depois?",a:"Sim. Entregamos sites com painel de gestão simples ou com documentação clara para você atualizar textos, imagens e posts do blog."}]},"automacao-ia":{label:"Automação com IA",headline:"Automatize processos que consomem seu tempo",description:"Identificamos os processos repetitivos do seu negócio — atendimento, qualificação de leads, envio de propostas, follow-up, relatórios — e construímos automações com IA que executam tudo isso de forma autônoma, permitindo que você e sua equipe foquem no que realmente gera valor.",benefits:["Diagnóstico completo de processos automatizáveis","Integração com WhatsApp, email e CRM","Fluxos personalizados para seu negócio","Redução de até 70% em tarefas operacionais"],faqQuestions:[{q:"O que pode ser automatizado com IA?",a:"Atendimento inicial, triagem de leads, envio de propostas, agendamentos, follow-up pós-venda, relatórios e qualquer processo com passos repetitivos e previsíveis."},{q:"Preciso ter equipe técnica para manter as automações?",a:"Não. A Upper configura, testa e entrega as automações funcionando. Oferecemos suporte contínuo e ajustes conforme o negócio evolui."},{q:"Funciona integrado com ferramentas que já uso?",a:"Sim. Integramos com WhatsApp Business, Google Agenda, planilhas, sistemas de CRM e a maioria das ferramentas usadas por pequenas e médias empresas."}]}};function aI(){let e="https://www.upperagency.com.br",a=["sorocaba","votorantim","itu","salto","itapetininga","boituva","porto-feliz"],t=Object.keys(aC);return[...["","/cidades"].map(a=>({url:`${e}${a}`,lastModified:new Date,changeFrequency:"weekly",priority:""===a?1:.8})),...a.map(a=>({url:`${e}/cidade/${a}`,lastModified:new Date,changeFrequency:"weekly",priority:.9})),...t.flatMap(t=>a.map(a=>({url:`${e}/${t}/${a}`,lastModified:new Date,changeFrequency:"monthly",priority:.8}))),...aT.flatMap(t=>a.map(a=>({url:`${e}/blog/${t.slug}-em-${a}`,lastModified:new Date,changeFrequency:"yearly",priority:.7})))]}e.s(["default",()=>aI],89282);var aN=e.i(73853);async function aq(){let e=await aI(),a=(0,aN.resolveRouteData)(e,"sitemap");return new aP.NextResponse(a,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=0, must-revalidate"}})}e.s(["GET",()=>aq],39248),e.i(39248),e.i(89282),e.s(["GET",()=>aq],21330);var aM=e.i(21330);let aj=new A.AppRouteRouteModule({definition:{kind:S.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"sitemap--route-entry",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/sitemap--route-entry.js",nextConfigOutput:"",userland:aM}),{workAsyncStorage:aD,workUnitAsyncStorage:aL,serverHooks:ak}=aj;function aG(){return function(e){var a;let t;if(!0===globalThis[ai])return;let r=(a=globalThis.fetch,t=ea.cache(e=>[]),function(e,r){let o,n;if(r&&r.signal)return a(e,r);if("string"!=typeof e||r){let t,s="string"==typeof e||e instanceof URL?new Request(e,r):e;if("GET"!==s.method&&"HEAD"!==s.method||s.keepalive)return a(e,r);t=Array.from(s.headers.entries()).filter(([e])=>!eh.has(e.toLowerCase())),n=JSON.stringify([s.method,t,s.mode,s.redirect,s.credentials,s.referrer,s.referrerPolicy,s.integrity]),o=s.url}else n='["GET",[],null,"follow",null,null,null,null]',o=e;let s=t(o);for(let e=0,a=s.length;e<a;e+=1){let[a,t]=s[e];if(a===n)return t.then(()=>{let a=s[e][2];if(!a)throw Object.defineProperty(new ed("No cached response"),"__NEXT_ERROR_CODE",{value:"E579",enumerable:!1,configurable:!0});let[t,r]=eg(a);return s[e][2]=r,t})}let i=a(e,r),c=[n,i,null];return s.push(c),i.then(e=>{let[a,t]=eg(e);return c[2]=t,a})});globalThis.fetch=function(e,{workAsyncStorage:a,workUnitAsyncStorage:t}){let r=async function(r,o){var n,s;let i;try{(i=new URL(r instanceof Request?r.url:r)).username="",i.password=""}catch{i=void 0}let c=(null==i?void 0:i.href)??"",u=(null==o||null==(n=o.method)?void 0:n.toUpperCase())||"GET",d=(null==o||null==(s=o.next)?void 0:s.internal)===!0,l="1"===process.env.NEXT_OTEL_FETCH_DISABLED,m=d?void 0:performance.timeOrigin+performance.now(),p=a.getStore(),f=t.getStore(),g=f?(0,eo.getCacheSignal)(f):null;g&&g.beginRead();let h=J().trace(d?O.internalFetch:I.fetch,{hideSpan:l,kind:F.CLIENT,spanName:["fetch",u,c].filter(Boolean).join(" "),attributes:{"http.url":c,"http.method":u,"net.peer.name":null==i?void 0:i.hostname,"net.peer.port":(null==i?void 0:i.port)||void 0}},async()=>{var a;let t,n,s,i,u,l;if(d||!p||p.isDraftMode)return e(r,o);let h=r&&"object"==typeof r&&"string"==typeof r.method,x=e=>(null==o?void 0:o[e])||(h?r[e]:null),b=e=>{var a,t,n;return void 0!==(null==o||null==(a=o.next)?void 0:a[e])?null==o||null==(t=o.next)?void 0:t[e]:h?null==(n=r.next)?void 0:n[e]:void 0},v=b("revalidate"),y=v,E=function(e,a){let t=[],r=[];for(let o=0;o<e.length;o++){let n=e[o];if("string"!=typeof n?r.push({tag:n,reason:"invalid type, must be a string"}):n.length>256?r.push({tag:n,reason:"exceeded max length of 256"}):t.push(n),t.length>128){console.warn(`Warning: exceeded max tag count for ${a}, dropped tags:`,e.slice(o).join(", "));break}}if(r.length>0)for(let{tag:e,reason:t}of(console.warn(`Warning: invalid tags passed to ${a}: `),r))console.log(`tag: "${e}" ${t}`);return t}(b("tags")||[],`fetch ${r.toString()}`);if(f)switch(f.type){case"prerender":case"prerender-runtime":case"prerender-client":case"prerender-ppr":case"prerender-legacy":case"cache":case"private-cache":t=f}if(t&&Array.isArray(E)){let e=t.tags??(t.tags=[]);for(let a of E)e.includes(a)||e.push(a)}let _=null==f?void 0:f.implicitTags,A=p.fetchCache;f&&"unstable-cache"===f.type&&(A="force-no-store");let S=!!p.isUnstableNoStore,w=x("cache"),R="";"string"==typeof w&&void 0!==y&&("force-cache"===w&&0===y||"no-store"===w&&(y>0||!1===y))&&(n=`Specified "cache: ${w}" and "revalidate: ${y}", only one should be specified.`,w=void 0,y=void 0);let P="no-cache"===w||"no-store"===w||"force-no-store"===A||"only-no-store"===A,O=!A&&!w&&!y&&p.forceDynamic;"force-cache"===w&&void 0===y?y=!1:(P||O)&&(y=0),("no-cache"===w||"no-store"===w)&&(R=`cache: ${w}`),l=function(e,a){try{let t;if(!1===e)t=0xfffffffe;else if("number"==typeof e&&!isNaN(e)&&e>-1)t=e;else if(void 0!==e)throw Object.defineProperty(Error(`Invalid revalidate value "${e}" on "${a}", must be a non-negative number or false`),"__NEXT_ERROR_CODE",{value:"E179",enumerable:!1,configurable:!0});return t}catch(e){if(e instanceof Error&&e.message.includes("Invalid revalidate"))throw e;return}}(y,p.route);let T=x("headers"),C="function"==typeof(null==T?void 0:T.get)?T:new Headers(T||{}),I=C.get("authorization")||C.get("cookie"),N=!["get","head"].includes((null==(a=x("method"))?void 0:a.toLowerCase())||"get"),q=void 0==A&&(void 0==w||"default"===w)&&void 0==y,M=!!((I||N)&&(null==t?void 0:t.revalidate)===0),j=!1;if(!M&&q&&(p.isBuildTimePrerendering?j=!0:M=!0),q&&void 0!==f)switch(f.type){case"prerender":case"prerender-runtime":case"prerender-client":return g&&(g.endRead(),g=null),ec(f.renderSignal,p.route,"fetch()")}switch(A){case"force-no-store":R="fetchCache = force-no-store";break;case"only-no-store":if("force-cache"===w||void 0!==l&&l>0)throw Object.defineProperty(Error(`cache: 'force-cache' used on fetch for ${c} with 'export const fetchCache = 'only-no-store'`),"__NEXT_ERROR_CODE",{value:"E448",enumerable:!1,configurable:!0});R="fetchCache = only-no-store";break;case"only-cache":if("no-store"===w)throw Object.defineProperty(Error(`cache: 'no-store' used on fetch for ${c} with 'export const fetchCache = 'only-cache'`),"__NEXT_ERROR_CODE",{value:"E521",enumerable:!1,configurable:!0});break;case"force-cache":(void 0===y||0===y)&&(R="fetchCache = force-cache",l=0xfffffffe)}if(void 0===l?"default-cache"!==A||S?"default-no-store"===A?(l=0,R="fetchCache = default-no-store"):S?(l=0,R="noStore call"):M?(l=0,R="auto no cache"):(R="auto cache",l=t?t.revalidate:0xfffffffe):(l=0xfffffffe,R="fetchCache = default-cache"):R||(R=`revalidate: ${l}`),!(p.forceStatic&&0===l)&&!M&&t&&l<t.revalidate){if(0===l){if(f)switch(f.type){case"prerender":case"prerender-client":case"prerender-runtime":return g&&(g.endRead(),g=null),ec(f.renderSignal,p.route,"fetch()")}em(p,f,`revalidate: 0 fetch ${r} ${p.route}`)}t&&v===l&&(t.revalidate=l)}let D="number"==typeof l&&l>0,{incrementalCache:L}=p,k=!1;if(f)switch(f.type){case"request":case"cache":case"private-cache":k=f.isHmrRefresh??!1,i=f.serverComponentsHmrCache}if(L&&(D||i))try{s=await L.generateCacheKey(c,h?r:o)}catch(e){console.error("Failed to generate cache key for",r)}let G=p.nextFetchId??1;p.nextFetchId=G+1;let U=()=>{},B=async(a,t)=>{let u=["cache","credentials","headers","integrity","keepalive","method","mode","redirect","referrer","referrerPolicy","window","duplex",...a?[]:["signal"]];if(h){let e=r,a={body:e._ogBody||e.body};for(let t of u)a[t]=e[t];r=new Request(e.url,a)}else if(o){let{_ogBody:e,body:t,signal:r,...n}=o;o={...n,body:e||t,signal:a?void 0:r}}let d={...o,next:{...null==o?void 0:o.next,fetchType:"origin",fetchIdx:G}};return e(r,d).then(async e=>{if(!a&&m&&ac(p,{start:m,url:c,cacheReason:t||R,cacheStatus:0===l||t?"skip":"miss",cacheWarning:n,status:e.status,method:d.method||"GET"}),200===e.status&&L&&s&&(D||i)){let a=l>=0xfffffffe?31536e3:l,t=D?{fetchCache:!0,fetchUrl:c,fetchIdx:G,tags:E,isImplicitBuildTimeCache:j}:void 0;switch(null==f?void 0:f.type){case"prerender":case"prerender-client":case"prerender-runtime":return au(e,s,t,L,a,U);case"request":case"prerender-ppr":case"prerender-legacy":case"cache":case"private-cache":case"unstable-cache":case void 0:return ad(p,e,s,t,L,i,a,r,U)}}return await U(),e}).catch(e=>{throw U(),e})},z=!1,$=!1;if(s&&L){let e;if(k&&i&&(e=i.get(s),$=!0),D&&!e){U=await L.lock(s);let a=p.isOnDemandRevalidate?null:await L.get(s,{kind:eq.FETCH,revalidate:l,fetchUrl:c,fetchIdx:G,tags:E,softTags:null==_?void 0:_.tags});if(q&&f)switch(f.type){case"prerender":case"prerender-client":case"prerender-runtime":await (al||(al=new Promise(e=>{setTimeout(()=>{al=null,e()},0)})),al)}if(a?await U():u="cache-control: no-cache (hard refresh)",(null==a?void 0:a.value)&&a.value.kind===eN.FETCH)if(p.isStaticGeneration&&a.isStale)z=!0;else{if(a.isStale&&(p.pendingRevalidates??={},!p.pendingRevalidates[s])){let e=B(!0).then(async e=>({body:await e.arrayBuffer(),headers:e.headers,status:e.status,statusText:e.statusText})).finally(()=>{p.pendingRevalidates??={},delete p.pendingRevalidates[s||""]});e.catch(console.error),p.pendingRevalidates[s]=e}e=a.value.data}}if(e){m&&ac(p,{start:m,url:c,cacheReason:R,cacheStatus:$?"hmr":"hit",cacheWarning:n,status:e.status||200,method:(null==o?void 0:o.method)||"GET"});let a=new Response(Buffer.from(e.body,"base64"),{headers:e.headers,status:e.status});return Object.defineProperty(a,"url",{value:e.url}),a}}if(p.isStaticGeneration&&o&&"object"==typeof o){let{cache:e}=o;if("no-store"===e){if(f)switch(f.type){case"prerender":case"prerender-client":case"prerender-runtime":return g&&(g.endRead(),g=null),ec(f.renderSignal,p.route,"fetch()")}em(p,f,`no-store fetch ${r} ${p.route}`)}let a="next"in o,{next:n={}}=o;if("number"==typeof n.revalidate&&t&&n.revalidate<t.revalidate){if(0===n.revalidate){if(f)switch(f.type){case"prerender":case"prerender-client":case"prerender-runtime":return ec(f.renderSignal,p.route,"fetch()")}em(p,f,`revalidate: 0 fetch ${r} ${p.route}`)}p.forceStatic&&0===n.revalidate||(t.revalidate=n.revalidate)}a&&delete o.next}if(!s||!z)return B(!1,u);{let e=s;p.pendingRevalidates??={};let a=p.pendingRevalidates[e];if(a){let e=await a;return new Response(e.body,{headers:e.headers,status:e.status,statusText:e.statusText})}let t=B(!0,u).then(eg);return(a=t.then(async e=>{let a=e[0];return{body:await a.arrayBuffer(),headers:a.headers,status:a.status,statusText:a.statusText}}).finally(()=>{var a;(null==(a=p.pendingRevalidates)?void 0:a[e])&&delete p.pendingRevalidates[e]})).catch(()=>{}),p.pendingRevalidates[e]=a,t.then(e=>e[1])}});if(g)try{return await h}finally{g&&g.endRead()}return h};return r.__nextPatched=!0,r.__nextGetStaticStore=()=>a,r._nextOriginalFetch=e,globalThis[ai]=!0,Object.defineProperty(r,"name",{value:"fetch",writable:!1}),r}(r,e)}({workAsyncStorage:aD,workUnitAsyncStorage:aL})}async function aU(e,a,t){var r;let o;aj.isDev&&(r=process.hrtime.bigint(),(o=eU(e)).devRequestTimingInternalsEnd=r,e[eG]=o);let n="/sitemap.xml/route";n=n.replace(/\/index$/,"")||"/";let s=await aj.prepare(e,a,{srcPage:n,multiZoneDraftMode:!1});if(!s)return a.statusCode=400,a.end("Bad Request"),null==t.waitUntil||t.waitUntil.call(t,Promise.resolve()),null;let{buildId:i,params:c,nextConfig:u,parsedUrl:d,isDraftMode:l,prerenderManifest:m,routerServerContext:p,isOnDemandRevalidate:f,revalidateOnlyGenerated:g,resolvedPathname:h,clientReferenceManifest:x,serverActionsManifest:b}=s,v=am(n),y=!!(m.dynamicRoutes[v]||m.routes[h]),E=async()=>((null==p?void 0:p.render404)?await p.render404(e,a,d,!1):a.end("This page could not be found"),null);if(y&&!l){let e=!!m.routes[h],a=m.dynamicRoutes[v];if(a&&!1===a.fallback&&!e){if(u.experimental.adapterPath)return await E();throw new aR.NoFallbackError}}let _=null;!y||aj.isDev||l||(_="/index"===(_=h)?"/":_);let A=!0===aj.isDev||!y,R=y&&!A;b&&x&&function({page:e,clientReferenceManifest:a,serverActionsManifest:t}){let r=af[ap];if(r)r.clientReferenceManifestsPerRoute.set(am(e),a),r.serverActionsManifest=t;else{let r,o=new Map([[am(e),a]]),n=(r=new Map,new Proxy({},{get(e,a){let t=en.workAsyncStorage.getStore();switch(a){case"moduleLoading":case"entryCSSFiles":case"entryJSFiles":{if(!t)throw Object.defineProperty(new ed(`Cannot access "${a}" without a work store.`),"__NEXT_ERROR_CODE",{value:"E952",enumerable:!1,configurable:!0});let e=o.get(t.route);if(!e)throw Object.defineProperty(new ed(`The client reference manifest for route "${t.route}" does not exist.`),"__NEXT_ERROR_CODE",{value:"E951",enumerable:!1,configurable:!0});return e[a]}case"clientModules":case"rscModuleMapping":case"edgeRscModuleMapping":case"ssrModuleMapping":case"edgeSSRModuleMapping":{let e=r.get(a);!e&&(e=new Proxy({},{get(e,t){let r=en.workAsyncStorage.getStore();if(r){let e=o.get(r.route);if(null==e?void 0:e[a][t])return e[a][t]}else for(let e of o.values()){let r=e[a][t];if(void 0!==r)return r}}}),r.set(a,e));return e}default:throw Object.defineProperty(new ed(`This is a proxied client reference manifest. The property "${String(a)}" is not handled.`),"__NEXT_ERROR_CODE",{value:"E953",enumerable:!1,configurable:!0})}}}));af[ap]={clientReferenceManifestsPerRoute:o,proxiedClientReferenceManifest:n,serverActionsManifest:t,serverModuleMap:new Proxy({},{get:(e,a)=>{var t,r,o;let n,s=null==(r=function(){let e=af[ap];if(!e)throw Object.defineProperty(new ed("The manifests singleton was not initialized."),"__NEXT_ERROR_CODE",{value:"E950",enumerable:!1,configurable:!0});return e}().serverActionsManifest.node)||null==(t=r[a])?void 0:t.workers;if(!s)return;let i=en.workAsyncStorage.getStore();if(!(n=i?s[eX(o=i.page,"app")?o:"app"+o]:Object.values(s).at(0)))return;let{moduleId:c,async:u}=n;return{id:c,name:a,chunks:[],async:u}}})}}}({page:n,clientReferenceManifest:x,serverActionsManifest:b});let P=e.method||"GET",O=J(),T=O.getActiveScopeSpan(),C={params:c,prerenderManifest:m,renderOpts:{experimental:{authInterrupts:!!u.experimental.authInterrupts},cacheComponents:!!u.cacheComponents,supportsDynamicResponse:A,incrementalCache:eU(e,"incrementalCache"),cacheLifeProfiles:u.cacheLife,waitUntil:t.waitUntil,onClose:e=>{a.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(a,t,r,o)=>aj.onRequestError(e,a,r,o,p)},sharedContext:{buildId:i}},I=new a_(e),N=new aA(a),q=e8.fromNodeNextRequest(I,function(e){let{errored:a,destroyed:t}=e;if(a||t)return AbortSignal.abort(a??new e5);let{signal:r}=e6(e);return r}(a));try{let r=async e=>aj.handle(q,C).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":a.statusCode,"next.rsc":!1});let t=O.getRootSpanAttributes();if(!t)return;if(t.get("next.span_type")!==w.handleRequest)return void console.warn(`Unexpected root span type '${t.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let r=t.get("next.route");if(r){let a=`${P} ${r}`;e.setAttributes({"next.route":r,"http.route":r,"next.span_name":a}),e.updateName(a)}else e.updateName(`${P} ${n}`)}),o=!!eU(e,"minimalMode"),s=async s=>{var i,c;let d=async({previousCacheEntry:i})=>{try{if(!o&&f&&g&&!i)return a.statusCode=404,a.setHeader("x-nextjs-cache","REVALIDATED"),a.end("This page could not be found"),null;let n=await r(s);e.fetchMetrics=C.renderOpts.fetchMetrics;let c=C.renderOpts.pendingWaitUntil;c&&t.waitUntil&&(t.waitUntil(c),c=void 0);let u=C.renderOpts.collectedTags;if(!y)return await aw(I,N,n,C.renderOpts.pendingWaitUntil),null;{let e=await n.blob(),a=e$(n.headers);u&&(a[Z]=u),!a["content-type"]&&e.type&&(a["content-type"]=e.type);let t=void 0!==C.renderOpts.collectedRevalidate&&!(C.renderOpts.collectedRevalidate>=0xfffffffe)&&C.renderOpts.collectedRevalidate,r=void 0===C.renderOpts.collectedExpire||C.renderOpts.collectedExpire>=0xfffffffe?void 0:C.renderOpts.collectedExpire;return{value:{kind:eN.APP_ROUTE,status:n.status,body:Buffer.from(await e.arrayBuffer()),headers:a},cacheControl:{revalidate:t,expire:r}}}}catch(a){throw(null==i?void 0:i.isStale)&&await aj.onRequestError(e,a,{routerKind:"App Router",routePath:n,routeType:"route",revalidateReason:aS({isStaticGeneration:R,isOnDemandRevalidate:f})},!1,p),a}},h=await aj.handleResponse({req:e,nextConfig:u,cacheKey:_,routeKind:S.APP_ROUTE,isFallback:!1,prerenderManifest:m,isRoutePPREnabled:!1,isOnDemandRevalidate:f,revalidateOnlyGenerated:g,responseGenerator:d,waitUntil:t.waitUntil,isMinimalMode:o});if(!y)return null;if((null==h||null==(i=h.value)?void 0:i.kind)!==eN.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==h||null==(c=h.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});o||a.setHeader("x-nextjs-cache",f?"REVALIDATED":h.isMiss?"MISS":h.isStale?"STALE":"HIT"),l&&a.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let x=eB(h.value.headers);return o&&y||x.delete(Z),!h.cacheControl||a.getHeader("Cache-Control")||x.get("Cache-Control")||x.set("Cache-Control",function({revalidate:e,expire:a}){let t="number"==typeof e&&void 0!==a&&e<a?`, stale-while-revalidate=${a-e}`:"";return 0===e?"private, no-cache, no-store, max-age=0, must-revalidate":"number"==typeof e?`s-maxage=${e}${t}`:`s-maxage=31536000${t}`}(h.cacheControl)),await aw(I,N,new Response(h.value.body,{headers:x,status:h.value.status||200})),null};T?await s(T):await O.withPropagatedContext(e.headers,()=>O.trace(w.handleRequest,{spanName:`${P} ${n}`,kind:F.SERVER,attributes:{"http.method":P,"http.target":e.url}},s))}catch(a){if(a instanceof aR.NoFallbackError||await aj.onRequestError(e,a,{routerKind:"App Router",routePath:v,routeType:"route",revalidateReason:aS({isStaticGeneration:R,isOnDemandRevalidate:f})},!1,p),y)throw a;return await aw(I,N,new Response(null,{status:500})),null}}e.s(["handler",()=>aU,"patchFetch",()=>aG,"routeModule",()=>aj,"serverHooks",()=>ak,"workAsyncStorage",()=>aD,"workUnitAsyncStorage",()=>aL],8922)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__2c89763a._.js.map
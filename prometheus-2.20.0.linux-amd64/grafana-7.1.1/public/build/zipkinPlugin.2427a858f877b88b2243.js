(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{GGQ8:function(e,t,r){"use strict";r.r(t);var n=r("Obii"),a=r("F/XL"),o=r("0/uQ"),i=r("zsCE"),u=r("t8hP"),c=r("67Y/"),s=r("LvDl");function l(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e){var t,r,n,a,o={duration:e.duration,flags:1,logs:null!==(t=null===(r=e.annotations)||void 0===r?void 0:r.map(p))&&void 0!==t?t:[],operationName:e.name,processID:(null===(n=e.localEndpoint)||void 0===n?void 0:n.serviceName)||(null===(a=e.remoteEndpoint)||void 0===a?void 0:a.serviceName)||"unknown",startTime:e.timestamp,spanID:e.id,traceID:e.traceId,warnings:null,tags:Object.keys(e.tags||{}).map((function(t){return{key:t,type:"error"===t?"bool":"string",value:"error"===t||e.tags[t]}})),references:e.parentId?[{refType:"CHILD_OF",spanID:e.parentId,traceID:e.traceId}]:[]};return e.kind&&(o.tags=[{key:"kind",type:"string",value:e.kind}].concat(l(o.tags))),o}function p(e){return{timestamp:e.timestamp,fields:[{key:"annotation",type:"string",value:e.value}]}}function v(e){var t=e.reduce((function(e,t){return t.localEndpoint&&e.push(m(t.localEndpoint)),t.remoteEndpoint&&e.push(m(t.remoteEndpoint)),e}),[]);return Object(s.keyBy)(t,"serviceName")}function m(e){return{serviceName:e.serviceName,tags:[y("ipv4",e.ipv4,"string"),y("ipv6",e.ipv6,"string"),y("port",e.port,"number")].filter(s.identity)}}function y(e,t,r){if(t)return{key:e,type:r,value:t}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t,r,n,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,a)}function O(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){h(o,n,a,i,u,"next",e)}function u(e){h(o,n,a,i,u,"throw",e)}i(void 0)}))}}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=j(this,k(t).call(this,e))).instanceSettings=e,r}var r,n,s,l,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),r=t,(n=[{key:"query",value:function(e){var t,r=null===(t=e.targets[0])||void 0===t?void 0:t.query;return r?this.request("".concat("/api/v2","/trace/").concat(encodeURIComponent(r))).pipe(Object(c.a)(D)):Object(a.a)(S)}},{key:"metadataRequest",value:(f=O(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request(t,r,{silent:!0}).toPromise();case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return f.apply(this,arguments)})},{key:"testDatasource",value:(l=O(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.metadataRequest("".concat("/api/v2","/services"));case 2:return e.abrupt("return",!0);case 3:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"getQueryDisplayText",value:function(e){return e.query}},{key:"request",value:function(e,t,r){var n="/api/datasources/proxy/".concat(this.instanceSettings.id),a=t?Object(i.c)(t):"",c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{url:"".concat(n).concat(e).concat(a.length?"?".concat(a):"")});return Object(o.a)(Object(u.getBackendSrv)().datasourceRequest(c))}}])&&w(r.prototype,n),s&&w(r,s),t}(n.DataSourceApi);function D(e){return{data:[new n.MutableDataFrame({fields:[{name:"trace",type:n.FieldType.trace,values:(null==e?void 0:e.data)?[(t=null==e?void 0:e.data,{processes:v(t),traceID:t[0].traceId,spans:t.map(f),warnings:null})]:[]}],meta:{preferredVisualisationType:"trace"}})]};var t}var S={data:[new n.MutableDataFrame({fields:[{name:"trace",type:n.FieldType.trace,values:[]}],meta:{preferredVisualisationType:"trace"}})]},x=r("q1tI"),R=r.n(x),q=r("kDLi"),I=r("Kwub"),N=function(e){Object(x.useEffect)(e,[])},_=function(e){N((function(){e()}))},A=r("VQUf"),C=r("HJRA");function T(e,t,r,n,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,a)}function F(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){T(o,n,a,i,u,"next",e)}function u(e){T(o,n,a,i,u,"throw",e)}i(void 0)}))}}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){B(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function B(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var H=[{label:"No traces found",value:"no_traces",isLeaf:!0}],J={"[No traces in time range]":"__NO_TRACES__"};r.d(t,"plugin",(function(){return U}));var U=new n.DataSourcePlugin(P).setConfigEditor((function(e){var t=e.options,r=e.onOptionsChange;return R.a.createElement(q.DataSourceHttpSettings,{defaultUrl:"http://localhost:9411",dataSourceConfig:t,showAccessOptions:!0,onChange:r})})).setExploreQueryField((function(e){var t=e.query,r=e.onChange,a=e.onRunQuery,o=e.datasource,i=function(e){var t="".concat("/api/v2","/services"),r=L(Object(I.a)(F(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.metadataRequest(t);case 3:if(!(a=r.sent)){r.next=6;break}return r.abrupt("return",a.sort().map((function(e){return{label:e,value:e,isLeaf:!1}})));case 6:return r.abrupt("return",[]);case 9:throw r.prev=9,r.t0=r.catch(0),C.a.emit(n.AppEvents.alertError,["Failed to load services from Zipkin",r.t0]),r.t0;case 13:case"end":return r.stop()}}),r,null,[[0,9]])}))),[e]),2),a=r[0],o=r[1];return _((function(){o()})),a}(o),u=function(e){var t=Object(A.a)(),r=L(Object(x.useState)({}),2),a=r[0],o=r[1],i=L(Object(I.a)(function(){var r=F(regeneratorRuntime.mark((function r(a){var i,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i="".concat("/api/v2","/spans"),r.prev=1,r.next=4,e.metadataRequest(i,{serviceName:a});case 4:u=r.sent,t()&&o((function(e){var t=Object(s.fromPairs)(u.map((function(e){return[e,void 0]})));return M({},e,B({},a,t))})),r.next=12;break;case 8:throw r.prev=8,r.t0=r.catch(1),C.a.emit(n.AppEvents.alertError,["Failed to load spans from Zipkin",r.t0]),r.t0;case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}(),[e,a]),2)[1],u=L(Object(I.a)(function(){var r=F(regeneratorRuntime.mark((function r(a,i){var u,c,l,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u="".concat("/api/v2","/traces"),c={serviceName:a,spanName:i},r.prev=2,r.next=5,e.metadataRequest(u,c);case 5:l=r.sent,t()&&(f=l.length?Object(s.fromPairs)(l.map((function(e){var t=e.find((function(e){return!e.parentId}));return["".concat(t.name," [").concat(Math.floor(t.duration/1e3)," ms]"),t.traceId]}))):J,o((function(e){var t=e[a];return M({},e,B({},a,M({},t,B({},i,f))))}))),r.next=13;break;case 9:throw r.prev=9,r.t0=r.catch(2),C.a.emit(n.AppEvents.alertError,["Failed to load spans from Zipkin",r.t0]),r.t0;case 13:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e,t){return r.apply(this,arguments)}}(),[e]),2)[1];return{onLoadOptions:Object(x.useCallback)((function(e){var t=e[0].value;if(1===e.length)i(t);else if(2===e.length){var r=e[1].value;u(t,r)}}),[i,u]),allOptions:a}}(o),c=u.onLoadOptions,l=u.allOptions,f=Object(x.useCallback)((function(e,n){if(3===n.length){var o=n[2].value;r(M({},t,{query:o})),a()}}),[r,a,t]),p=function(e,t){return Object(x.useMemo)((function(){var r;return e.value&&e.value.length?r=e.value.map((function(e){return M({},e,{children:t[e.value]&&Object.keys(t[e.value]).map((function(r){return{label:r,value:r,isLeaf:!1,children:t[e.value][r]&&Object.keys(t[e.value][r]).map((function(n){return{label:n,value:t[e.value][r][n]}}))}}))})})):e.value&&!e.value.length&&(r=H),r}),[e,t])}(i,l);return R.a.createElement(R.a.Fragment,null,R.a.createElement("div",{className:"gf-form-inline gf-form-inline--nowrap"},R.a.createElement("div",{className:"gf-form flex-shrink-0"},R.a.createElement(q.ButtonCascader,{options:p,onChange:f,loadData:c},"Traces")),R.a.createElement("div",{className:"gf-form gf-form--grow flex-shrink-1"},R.a.createElement("div",{className:"slate-query-field__wrapper"},R.a.createElement("div",{className:"slate-query-field"},R.a.createElement("input",{style:{width:"100%"},value:t.query||"",onChange:function(e){return r(M({},t,{query:e.currentTarget.value}))}}))))))}))}}]);
//# sourceMappingURL=zipkinPlugin.2427a858f877b88b2243.js.map
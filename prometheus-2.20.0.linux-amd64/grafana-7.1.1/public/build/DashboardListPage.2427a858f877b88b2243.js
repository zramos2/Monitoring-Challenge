(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{zD1S:function(e,r,n){"use strict";n.r(r);var t=n("q1tI"),a=n.n(t),o=n("Y8YH"),i=n("/MKj"),d=n("Obii"),s=n("t8hP"),l=n("lzJ5"),c=n("X+V3"),u=n("ZGyg"),b=n("NXk7"),f=n("jbKi");function m(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function g(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?m(Object(n),!0).forEach((function(r){p(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}n.d(r,"DashboardListPage",(function(){return h}));var h=Object(t.memo)((function(e){var r=e.navModel,n=e.uid,t=e.url,i=Object(o.a)((function(){return n&&t.startsWith("/dashboards")?function(e,r){var n={main:{icon:"folder-open",id:"manage-folder",subTitle:"Manage folder dashboards & permissions",url:"",text:"",breadcrumbs:[{title:"Dashboards",url:"dashboards"}],children:[{active:"manage-folder-dashboards"===r,icon:"th-large",id:"manage-folder-dashboards",text:"Dashboards",url:"dashboards"},{active:"manage-folder-permissions"===r,icon:"lock",id:"manage-folder-permissions",text:"Permissions",url:"dashboards/permissions"},{active:"manage-folder-settings"===r,icon:"cog",id:"manage-folder-settings",text:"Settings",url:"dashboards/settings"}]}};return b.b.getFolderByUid(e).then((function(e){var r=e.title,t=e.url;n.main.text=r;var a=n.main.children.find((function(e){return"manage-folder-dashboards"===e.id}));(a.url=t,e.canAdmin)?(n.main.children.find((function(e){return"manage-folder-permissions"===e.id})).url=t+"/permissions",n.main.children.find((function(e){return"manage-folder-settings"===e.id})).url=t+"/settings"):n.main.children=[a];return{folder:e,model:n}}))}(n,"manage-folder-dashboards").then((function(e){var n=e.folder,t=e.model,a=d.locationUtil.stripBaseFromUrl(n.url);return a!==location.pathname&&Object(s.getLocationSrv)().update({path:a}),{folder:n,pageNavModel:g({},r,{},t)}})):Promise.resolve({pageNavModel:r})}),[n]),l=i.loading,c=i.value;return a.a.createElement(u.a,{navModel:null==c?void 0:c.pageNavModel},a.a.createElement(u.a.Contents,{isLoading:l},a.a.createElement(f.a,{folder:null==c?void 0:c.folder})))}));r.default=Object(i.connect)((function(e){return{navModel:Object(l.a)(e.navIndex,"manage-dashboards"),uid:Object(c.b)(e.location).uid,url:Object(c.e)(e.location)}}))(h)}}]);
//# sourceMappingURL=DashboardListPage.2427a858f877b88b2243.js.map
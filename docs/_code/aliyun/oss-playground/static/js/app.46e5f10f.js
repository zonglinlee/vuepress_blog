(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-3564889c":"e9f76055","chunk-1b10ffb2":"a366329a","chunk-3f670c1f":"251585f9"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-3564889c":1,"chunk-1b10ffb2":1,"chunk-3f670c1f":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-3564889c":"c484dbbe","chunk-1b10ffb2":"3a3cf326","chunk-3f670c1f":"1b825d56"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4ec3":function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return l}));var r=n("da71"),a=n("4328"),o=n.n(a);function u(){return r["a"].get("oss/list")}function c(e){var t=o.a.stringify(e);return r["a"].get("oss/download?".concat(t))}function i(e){var t=o.a.stringify(e);return r["a"].get("oss/delete?".concat(t))}function s(e){var t=o.a.stringify(e);return r["a"].get("oss/fileExist?".concat(t))}function l(){return r["a"].get("sts")}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("上传组件测试")]),n("ul",{staticClass:"upload-method"},[n("li",[n("router-link",{attrs:{to:"/upload1"}},[e._v("后台签名上传")])],1),n("li",[n("router-link",{attrs:{to:"/upload2"}},[e._v("临时凭证上传")])],1)]),n("router-view"),n("down-load",{ref:"download"})],1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("下载文件示例")]),n("div",[n("ul",{staticClass:"file-list"},e._l(e.fileList,(function(t){return n("li",{key:t.etag},[n("a",{on:{click:function(n){return n.preventDefault(),n.stopPropagation(),e.generateSrc(t.name,n)}}},[e._v(e._s(t.name))]),n("el-button",{staticClass:"delete-file",attrs:{type:"primary",size:"small"},on:{click:function(n){return n.stopPropagation(),e.deleteFile(t.name)}}},[e._v("删除文件")]),n("el-button",{staticClass:"exist-file",attrs:{type:"primary",size:"small"},on:{click:function(n){return n.stopPropagation(),e.fileExist(t.name)}}},[e._v("文件是否存在")])],1)})),0)])])},c=[],i=(n("0fb7"),n("450d"),n("f529")),s=n.n(i),l=(n("96cf"),n("1da1")),f=n("4ec3"),d={name:"down-load",data:function(){return{fileList:[]}},mounted:function(){this.getFileLists()},methods:{getFileLists:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["d"])();case 2:n=t.sent,200===n.status&&(e.fileList=n.data);case 4:case"end":return t.stop()}}),t)})))()},downloadFile:function(e){window.open(e,"_blank")},deleteFile:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(f["a"])({fileName:e});case 2:r=n.sent,console.log(r),s.a.success("文件删除成功"),t.getFileLists();case 6:case"end":return n.stop()}}),n)})))()},fileExist:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["b"])({fileName:e});case 2:n=t.sent,200===n.data.statusCode&&s.a.success({message:"文件存在"}),404===n.statusCode&&s.a.error({message:"文件不存在"});case 5:case"end":return t.stop()}}),t)})))()},generateSrc:function(e,t){var n=arguments,r=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var o,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(n),console.log(t.target),a.next=4,Object(f["c"])({fileName:e});case 4:o=a.sent,u=o.data,r.downloadFile(u);case 7:case"end":return a.stop()}}),a)})))()}}},p=d,h=(n("ba92"),n("2877")),m=Object(h["a"])(p,u,c,!1,null,"3b307ed1",null),v=m.exports,g={name:"App",components:{DownLoad:v}},b=g,w=(n("5c0b"),Object(h["a"])(b,a,o,!1,null,null,null)),y=w.exports,k=n("da71"),_=(n("d3b7"),n("8c4f"));r["default"].use(_["a"]);var x=function(){return Promise.all([n.e("chunk-3564889c"),n.e("chunk-1b10ffb2")]).then(n.bind(null,"d443"))},O=function(){return Promise.all([n.e("chunk-3564889c"),n.e("chunk-3f670c1f")]).then(n.bind(null,"8391"))},j=[{path:"",redirect:"/upload1"},{path:"/upload1",component:x},{path:"/upload2",component:O}],P=new _["a"]({routes:j});r["default"].config.productionTip=!1,r["default"].prototype.$axios=k["a"],new r["default"]({router:P,render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){},ba92:function(e,t,n){"use strict";var r=n("eed3"),a=n.n(r);a.a},da71:function(e,t,n){"use strict";var r=n("bc3a"),a=n.n(r),o={baseURL:"http://localhost:8080",timeout:1e4},u=a.a.create(o);t["a"]=u},eed3:function(e,t,n){}});
//# sourceMappingURL=app.46e5f10f.js.map
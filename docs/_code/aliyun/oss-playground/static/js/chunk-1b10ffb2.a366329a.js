(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b10ffb2"],{"41f3":function(e,t,a){"use strict";var n=a("f884"),r=a.n(n);r.a},d443:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{staticClass:"mg-bt",attrs:{type:"primary"},on:{click:e.startUpload}},[e._v("点击上传")]),a("el-upload",{ref:"myupload",staticClass:"upload-demo",attrs:{action:"#","auto-upload":!1,"http-request":e.customUpload}},[a("el-button",{staticClass:"mg-bt",attrs:{type:"primary"}},[e._v("添加文件")])],1)],1)},r=[],s=(a("b0c0"),a("0fb7"),a("450d"),a("f529")),o=a.n(s),c=(a("96cf"),a("1da1")),l=(a("1951"),a("eedf")),u=a.n(l),i=(a("f225"),a("89a9")),p=a.n(i),d=a("2b0e"),f=a("bc3a"),m=a.n(f);d["default"].use(p.a),d["default"].use(u.a);var b="http://192.168.0.22:8080/",g={callbackUrl:"http://1f632a59ba92.ngrok.io/alioss/callback",callbackBody:"bucket=${bucket}&object=${object}&etag=${etag}&size=${size}&mimeType=${mimeType}",callbackBodyType:"application/x-www-form-urlencoded"},h=btoa(JSON.stringify(g)),w={name:"up-load",data:function(){return{dialogImageUrl:"",dialogVisible:!1,disabled:!1,result:{}}},methods:{getSignatureAndUpload:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m.a.get(b+"oss/upload");case 3:if(n=a.sent,200!==n.status){a.next=20;break}return t.result=n.data,r=new FormData,r.append("name",e.file.name),r.append("key",n.data.dir+e.file.name),r.append("OSSAccessKeyId",n.data.OSSAccessKeyId),r.append("policy",n.data.policy),r.append("Signature",n.data.signature),r.append("file",e.file),r.append("success_action_status",200),r.append("callback",h),a.next=17,t.uploadOSS(r,n.data.host);case 17:s=a.sent,console.log("uploadOSS",s),200===s.status&&(o.a.success("文件上传成功"),t.$parent.$refs.download.getFileLists());case 20:a.next=25;break;case 22:a.prev=22,a.t0=a["catch"](0),console.log(a.t0);case 25:case"end":return a.stop()}}),a,null,[[0,22]])})))()},getUploadUrl:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n,r,s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m.a.post(b+"oss/upload",{fileName:e.file.name});case 3:if(n=a.sent,console.log(n),200!==n.status){a.next=20;break}return r=n.data,s=new FormData,s.append("name",e.file.name),s.append("file",e.file),a.prev=10,a.next=13,t.uploadOSS(s,r);case 13:o=a.sent,console.log("uploadOSS",o),a.next=20;break;case 17:a.prev=17,a.t0=a["catch"](10),console.log(a.t0);case 20:a.next=25;break;case 22:a.prev=22,a.t1=a["catch"](0),console.log(a.t1);case 25:case"end":return a.stop()}}),a,null,[[0,22],[10,17]])})))()},startUpload:function(){this.$refs.myupload.submit()},customUpload:function(e){this.getSignatureAndUpload(e)},uploadOSS:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n={headers:{"Content-Type":"multipart/form-data;boundary="+(new Date).getTime()}},a.abrupt("return",m.a.post(t,e,n));case 2:case"end":return a.stop()}}),a)})))()}}},k=w,v=(a("41f3"),a("2877")),y=Object(v["a"])(k,n,r,!1,null,null,null);t["default"]=y.exports},f884:function(e,t,a){}}]);
//# sourceMappingURL=chunk-1b10ffb2.a366329a.js.map
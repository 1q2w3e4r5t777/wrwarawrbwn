(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-commission-agreement"],{"002e":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-eb2d224c]{box-sizing:border-box;background:#f7f7f7}body.?%PAGE?%[data-v-eb2d224c]{background:#f7f7f7}.panel[data-v-eb2d224c]{margin:%?50?%;padding:%?50?%;background:#fff;border-radius:%?30?%}.title[data-v-eb2d224c]{font-size:%?32?%;margin-bottom:%?30?%;text-align:center;color:#aaa}.content[data-v-eb2d224c]{line-height:1.6;color:#666}.content uni-view[data-v-eb2d224c]{margin-bottom:%?20?%}",""]),t.exports=e},"30fb":function(t,e,n){"use strict";n.r(e);var a=n("b89f"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"3d9e":function(t,e,n){var a=n("002e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("6caeb999",a,!0,{sourceMap:!1,shadowMode:!1})},b89f:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),o={data:function(){return{contents:[]}},onLoad:function(){var t=this;a.globalData.util.request({url:"/commission/agreement"}).then((function(e){t.setData({contents:e.data})}))},methods:{}};e.default=o},ecdf:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"panel"},[n("v-uni-view",{staticClass:"content"},[t._l(t.contents,(function(e,a){return n("v-uni-view",{key:a},[t._v(t._s(e))])})),t.contents.length<=0?n("v-uni-view",{staticStyle:{"text-align":"center","text-indent":"0","margin-top":"100rpx",color:"#ccc"}},[t._v("暂无内容")]):t._e()],2)],1)},o=[]},edf1:function(t,e,n){"use strict";var a=n("3d9e"),o=n.n(a);o.a},f29d:function(t,e,n){"use strict";n.r(e);var a=n("ecdf"),o=n("30fb");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("edf1");var c=n("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"eb2d224c",null,!1,a["a"],void 0);e["default"]=r.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-article-article"],{"24d9":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-35c51230]{box-sizing:border-box;background:#f7f7f7}body.?%PAGE?%[data-v-35c51230]{background:#f7f7f7}.panel[data-v-35c51230]{margin:%?30?%;padding:%?30?%;background:#fff;border-radius:%?20?%}.title[data-v-35c51230]{font-size:%?32?%;margin-bottom:%?30?%;text-align:center;color:#aaa}.content[data-v-35c51230]{line-height:1.6;color:#666}.content uni-view[data-v-35c51230]{margin-bottom:%?20?%}",""]),t.exports=e},7579:function(t,e,a){"use strict";a.r(e);var n=a("ffa7"),i=a("97be");for(var c in i)["default"].indexOf(c)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(c);a("cb55");var r=a("f0c5"),o=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"35c51230",null,!1,n["a"],void 0);e["default"]=o.exports},"97be":function(t,e,a){"use strict";a.r(e);var n=a("f3fb"),i=a.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a},cb55:function(t,e,a){"use strict";var n=a("d43e"),i=a.n(n);i.a},d43e:function(t,e,a){var n=a("24d9");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("6de075d2",n,!0,{sourceMap:!1,shadowMode:!1})},f3fb:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),i={data:function(){return{content:""}},onLoad:function(t){var e=this,a=t.type,i="文章内容";switch(t.type){case"about":i="关于我们";break;case"kefu":i="联系客服";break;case"privacy":i="隐私政策";break;case"service":i="服务协议";break;case"notice":i="通知公告";break;case"legal":i="免责声明";break;case"commission":i="推广协议";break}uni.setNavigationBarTitle({title:i});var c={type:a};"help"==a&&t.id&&(c.id=t.id),n.globalData.util.request({url:"/article/getArticle",data:c}).then((function(t){t.data.title&&uni.setNavigationBarTitle({title:t.data.title}),e.setData({content:t.data.content})}))},methods:{}};e.default=i},ffa7:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"panel"},[e("v-uni-view",{staticClass:"content"},[this.content?e("v-uni-view",{domProps:{innerHTML:this._s(this.content)}}):e("v-uni-view",{staticStyle:{"text-align":"center","text-indent":"0","margin-top":"100rpx",color:"#ccc"}},[this._v("暂无内容")])],1)],1)},i=[]}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-task-index"],{"39f4":function(a,t,e){"use strict";e.r(t);var i=e("a4aa"),n=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(a){e.d(t,a,(function(){return i[a]}))}(s);t["default"]=n.a},"3ee9":function(a,t,e){"use strict";e.r(t);var i=e("90bb"),n=e("39f4");for(var s in n)["default"].indexOf(s)<0&&function(a){e.d(t,a,(function(){return n[a]}))}(s);e("6aac");var o=e("f0c5"),d=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"159ea4bb",null,!1,i["a"],void 0);t["default"]=d.exports},"4d95":function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,"uni-page-body[data-v-159ea4bb]{margin:0;padding:0;background:#f7f7f7;font-family:微软雅黑;padding-bottom:%?30?%}body.?%PAGE?%[data-v-159ea4bb]{background:#f7f7f7}.mod-title[data-v-159ea4bb]{padding:%?30?% %?30?%;font-size:%?32?%}.mod-title uni-text[data-v-159ea4bb]{padding-left:%?16?%;border-left:%?8?% solid #04babe;line-height:%?24?%;height:%?30?%}.wallet[data-v-159ea4bb]{height:%?160?%;background:#04babe;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;padding-bottom:%?110?%;margin-bottom:%?-80?%}.wallet .balance[data-v-159ea4bb]{font-size:%?36?%;text-align:center}.wallet .balance uni-text[data-v-159ea4bb]{font-size:%?48?%;margin:0 %?14?%;color:red;font-weight:700}.wallet .vip[data-v-159ea4bb]{color:#eee}.wallet .tips[data-v-159ea4bb]{font-size:%?24?%;color:#eed196;font-weight:400;padding:%?6?% %?20?%;border-radius:%?10?%;background:#333}.goods-list[data-v-159ea4bb]{padding:0 0 %?20?% 0}.box[data-v-159ea4bb]{width:%?690?%;background:#fff;margin:0 %?30?% %?30?% %?30?%;border-radius:%?20?%;overflow:hidden;padding:%?20?% %?30?%;box-sizing:border-box}.box .box-title[data-v-159ea4bb]{width:100%;height:%?72?%;line-height:%?72?%;font-size:%?32?%;color:#333;font-weight:700}.box .box-title .desc[data-v-159ea4bb]{font-weight:400;color:#999;font-size:%?28?%;margin-left:%?20?%}.task-list[data-v-159ea4bb]{padding-top:%?20?%}.task-list .task-item[data-v-159ea4bb]{width:100%;margin-top:%?30?%;display:flex;justify-content:space-between;align-items:flex-start;border-bottom:%?2?% solid #f3f6f9;padding-bottom:%?30?%}.task-list .task-item[data-v-159ea4bb]:last-child{border-bottom:0}.task-item .task-icon[data-v-159ea4bb]{width:%?100?%;height:%?100?%;border-radius:%?10?%;overflow:hidden;background-color:#f3f6f9}.task-item .task-icon uni-image[data-v-159ea4bb]{width:100%;height:100%}.task-item .task-info[data-v-159ea4bb]{margin:0 %?20?%;width:%?380?%}.task-item .task-name[data-v-159ea4bb]{font-size:%?32?%;color:#333;line-height:%?48?%;font-weight:700;letter-spacing:%?2?%}.task-item .task-desc[data-v-159ea4bb]{font-size:%?28?%;color:#999;line-height:%?44?%;margin:%?6?% 0 %?20?% 0}.task-item .task-desc uni-text[data-v-159ea4bb]{color:red;margin:0 %?6?%}.task-item .task-status[data-v-159ea4bb]{font-size:%?24?%;color:#04babe}.task-item .task-op[data-v-159ea4bb]{width:%?110?%}.task-item .task-btn[data-v-159ea4bb]{border:none;font-size:%?22?%;padding:0;background:#04babe;color:#fff;border-radius:%?40?%;height:%?48?%;line-height:%?48?%}.task-item .task-btn[data-v-159ea4bb]::after{display:none}.task-item .task-btn[data-v-159ea4bb]:active{-webkit-transform:scale(.9);transform:scale(.9)}.task-item .task-btn.disabled[data-v-159ea4bb]{background:#999}.share_tips[data-v-159ea4bb]{position:fixed;width:100%;height:100%;left:0;top:0;z-index:999;background:rgba(0,0,0,.8)}.share_tips uni-image[data-v-159ea4bb]{width:%?500?%;height:%?400?%;margin:0 auto;float:right;margin-right:20px}",""]),a.exports=t},"6aac":function(a,t,e){"use strict";var i=e("ae0c"),n=e.n(i);n.a},"90bb":function(a,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){}));var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"wrap"},[e("v-uni-view",{staticClass:"wallet"},[e("v-uni-view",{staticClass:"balance",staticStyle:{"margin-top":"12rpx"}},[a._v("对话余额"),e("v-uni-text",[a._v(a._s(a.balance))]),a._v("条")],1),a.vip_expire_time?e("v-uni-view",{staticStyle:{"margin-top":"20rpx"}},[e("v-uni-text",{staticClass:"tips"},[a._v("您已开通vip会员，期间不消耗余额")])],1):a._e()],1),a.tasks?e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"box-title"},[e("v-uni-text",[a._v("每日任务")]),e("v-uni-text",{staticClass:"desc"},[a._v("免费获得条数")])],1),e("v-uni-view",{staticClass:"task-list"},[a.tasks.invite?e("v-uni-view",{staticClass:"task-item"},[e("v-uni-view",{staticClass:"task-icon"},[e("v-uni-image",{attrs:{src:"/static/images/ic_task_invite.png"}})],1),e("v-uni-view",{staticClass:"task-info"},[e("v-uni-view",{staticClass:"task-name"},[a._v("邀请新用户")]),e("v-uni-view",{staticClass:"task-desc"},[a._v("每邀请1人奖励"),e("v-uni-text",[a._v(a._s(a.tasks.invite.num))]),a._v("条，每日限"),e("v-uni-text",[a._v(a._s(a.tasks.invite.max))]),a._v("人")],1),e("v-uni-view",{staticClass:"task-status"},[a._v("进度 "+a._s(a.tasks.invite.count)+" / "+a._s(a.tasks.invite.max))])],1),e("v-uni-view",{staticClass:"task-op"},[e("v-uni-button",{staticClass:"task-btn",attrs:{type:"button"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.showShareTips.apply(void 0,arguments)}}},[a._v("去邀请")])],1)],1):a._e()],1)],1):a._e(),a.shareTipsShow?e("v-uni-view",{staticClass:"share_tips",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.closeShareTips.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:"/static/images/share_tips.png"}})],1):a._e()],1)},n=[]},a4aa:function(a,t,e){"use strict";(function(a){e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=getApp(),n={data:function(){return{pageIsLoad:!1,system:"",balance:0,vip_expire_time:"",tasks:null,paying:!1,num:"",max:"",count:"",shareTipsShow:!1}},onLoad:function(a){var t=this;this.setData({system:i.globalData.system}),i.globalData.util.checkLogin().then((function(){t.getBalance(),t.getTasks(),t.setData({pageIsLoad:!0})}))},onShow:function(){this.pageIsLoad&&this.getBalance()},methods:{getTasks:function(){var a=this;i.globalData.util.request({url:"/h5/getTasks",loading:!1}).then((function(t){a.setData({tasks:t.data}),t.data&&t.data.ad&&!rewardVideoAd&&a.initRewardAd()}))},getBalance:function(){var a=this;i.globalData.util.request({url:"/h5/getBalance",loading:!1}).then((function(t){a.setData({balance:t.data.balance,vip_expire_time:t.data.vip_expire_time})}))},showShareTips:function(){this.setData({shareTipsShow:!0})},closeShareTips:function(){this.setData({shareTipsShow:!1})},initRewardAd:function(){var t=this;rewardVideoAd=null;var e=this.tasks.ad.ad_unit_id;uni.createRewardedVideoAd&&!rewardVideoAd&&(rewardVideoAd=uni.createRewardedVideoAd({adUnitId:e}),rewardVideoAd.onLoad((function(){a("log","reward ad onload"," at pages/task/index.vue:149")})),rewardVideoAd.onError((function(e){a("log","reward ad error"," at pages/task/index.vue:152"),t.initRewardAd()})),rewardVideoAd.onClose((function(n){a("log","reward ad onclose",n," at pages/task/index.vue:156"),n&&n.isEnded&&i.globalData.util.request({url:"/wxapp/doAd",data:{ad_unit_id:e},loading:!1}).then((function(a){i.globalData.util.message(a.message),t.getTasks(),t.getBalance()}))})))},showTaskAd:function(){if(uni.showLoading({title:"加载中"}),rewardVideoAd||this.initRewardAd(),!rewardVideoAd)return uni.hideLoading(),void i.globalData.util.message("广告加载失败，请重试","error");rewardVideoAd.load().then((function(){rewardVideoAd.show(),setTimeout((function(){uni.hideLoading()}),1500)})).catch((function(){uni.hideLoading(),i.globalData.util.message("广告加载失败，请重试","error")}))}}};t.default=n}).call(this,e("0de9")["log"])},ae0c:function(a,t,e){var i=e("4d95");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=e("4f06").default;n("366f2498",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
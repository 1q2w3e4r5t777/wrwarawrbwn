(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f53568b6"],{"08e6":function(t,e,a){var n=a("a493"),i=a("9760"),s=a("ea56"),o=a("6695"),r=a("091c"),l=a("6fb3"),c=a("3c71").f,u=a("bb38"),d=a("68d3"),p=a("f8b7"),g=a("497f"),f=a("84e8"),h=a("9c78"),b=a("e549"),y=a("8241"),m=a("985f"),v=a("264e").enforce,x=a("7c5d"),_=a("831d"),w=a("251f"),k=a("3128"),S=_("match"),M=i.RegExp,E=M.prototype,T=i.SyntaxError,D=s(E.exec),C=s("".charAt),R=s("".replace),j=s("".indexOf),I=s("".slice),z=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,O=/a/g,L=/a/g,$=new M(O)!==O,A=f.MISSED_STICKY,P=f.UNSUPPORTED_Y,F=n&&(!$||A||w||k||y((function(){return L[S]=!1,M(O)!=O||M(L)==L||"/a/i"!=M(O,"i")}))),H=function(t){for(var e,a=t.length,n=0,i="",s=!1;n<=a;n++)e=C(t,n),"\\"!==e?s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),i+=e):i+="[\\s\\S]":i+=e+C(t,++n);return i},Y=function(t){for(var e,a=t.length,n=0,i="",s=[],o={},r=!1,l=!1,c=0,u="";n<=a;n++){if(e=C(t,n),"\\"===e)e+=C(t,++n);else if("]"===e)r=!1;else if(!r)switch(!0){case"["===e:r=!0;break;case"("===e:D(z,I(t,n+1))&&(n+=2,l=!0),i+=e,c++;continue;case">"===e&&l:if(""===u||m(o,u))throw new T("Invalid capture group name");o[u]=!0,s[s.length]=[u,c],l=!1,u="";continue}l?u+=e:i+=e}return[i,s]};if(o("RegExp",F)){for(var q=function(t,e){var a,n,i,s,o,c,f=u(E,this),h=d(t),b=void 0===e,y=[],m=t;if(!f&&h&&b&&t.constructor===q)return t;if((h||u(E,t))&&(t=t.source,b&&(e=g(m))),t=void 0===t?"":p(t),e=void 0===e?"":p(e),m=t,w&&"dotAll"in O&&(n=!!e&&j(e,"s")>-1,n&&(e=R(e,/s/g,""))),a=e,A&&"sticky"in O&&(i=!!e&&j(e,"y")>-1,i&&P&&(e=R(e,/y/g,""))),k&&(s=Y(t),t=s[0],y=s[1]),o=r(M(t,e),f?this:E,q),(n||i||y.length)&&(c=v(o),n&&(c.dotAll=!0,c.raw=q(H(t),a)),i&&(c.sticky=!0),y.length&&(c.groups=y)),t!==m)try{l(o,"source",""===m?"(?:)":m)}catch(x){}return o},B=c(M),J=0;B.length>J;)h(q,M,B[J++]);E.constructor=q,q.prototype=E,b(i,"RegExp",q,{constructor:!0})}x("RegExp")},"117f":function(t,e,a){var n=a("a493"),i=a("84e8").MISSED_STICKY,s=a("2044"),o=a("d860"),r=a("264e").get,l=RegExp.prototype,c=TypeError;n&&i&&o(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!r(this).sticky;throw c("Incompatible receiver, RegExp required")}}})},"3d53":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"497f":function(t,e,a){var n=a("10b0"),i=a("985f"),s=a("bb38"),o=a("1ed2"),r=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in r||i(t,"flags")||!s(r,t)?e:n(o,t)}},"4ca1":function(t,e,a){},"571f":function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"b",(function(){return s})),a.d(e,"f",(function(){return o})),a.d(e,"a",(function(){return r})),a.d(e,"h",(function(){return l})),a.d(e,"d",(function(){return c})),a.d(e,"g",(function(){return u})),a.d(e,"e",(function(){return d}));var n=a("b775");function i(t){return Object(n["a"])({url:"/site/getList",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/site/getInfo",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/site/saveInfo",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/site/del",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/site/setStatus",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/site/getLoginToken",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/site/setExpireTime",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/site/getSelectSiteList",method:"post",data:t})}},"68e1":function(t,e,a){"use strict";a("4ca1")},"7a70":function(t,e,a){"use strict";var n=a("10b0"),i=a("e67f"),s=a("2f89"),o=a("4b5b"),r=a("57eb"),l=a("3d53"),c=a("f8b7"),u=a("5de4"),d=a("4f00");i("search",(function(t,e,a){return[function(e){var a=r(this),i=o(e)?void 0:u(e,t);return i?n(i,e,a):new RegExp(e)[t](c(a))},function(t){var n=s(this),i=c(t),o=a(e,n,i);if(o.done)return o.value;var r=n.lastIndex;l(r,0)||(n.lastIndex=0);var u=d(n,i);return l(n.lastIndex,r)||(n.lastIndex=r),null===u?-1:u.index}]}))},a00a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{padding:"0"}},[a("div",{staticClass:"search"},[a("p",[a("span",{staticClass:"label"},[t._v("选择站点：")]),a("el-select",{attrs:{size:"small",clearable:"",placeholder:"请选择站点"},model:{value:t.search.site_id,callback:function(e){t.$set(t.search,"site_id",e)},expression:"search.site_id"}},t._l(t.siteList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1),a("p",[a("span",{staticClass:"label"},[t._v("提问时间：")]),a("el-date-picker",{staticStyle:{width:"340px"},attrs:{align:"right",type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"],"range-separator":"至","start-placeholder":"时间开始","end-placeholder":"时间结束",size:"mini"},on:{change:t.dateChange},model:{value:t.search.date,callback:function(e){t.$set(t.search,"date",e)},expression:"search.date"}}),a("el-radio-group",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini"},on:{change:t.dateTypeChange},model:{value:t.dateType,callback:function(e){t.dateType=e},expression:"dateType"}},[a("el-radio-button",{attrs:{label:"day0"}},[t._v("今天")]),a("el-radio-button",{attrs:{label:"day1"}},[t._v("昨天")]),a("el-radio-button",{attrs:{label:"day2"}},[t._v("前天")])],1)],1),a("p",[a("span",{staticClass:"label"},[t._v("用户ID：")]),a("el-input",{staticStyle:{width:"120px"},attrs:{type:"text",size:"mini",clearable:"",placeholder:"请输入用户id"},model:{value:t.search.user_id,callback:function(e){t.$set(t.search,"user_id",e)},expression:"search.user_id"}})],1),a("p",[a("span",{staticClass:"label"},[t._v("关键词：")]),a("el-input",{staticStyle:{width:"200px"},attrs:{type:"text",size:"mini",clearable:"",placeholder:"请输入关键词"},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1),a("p",{staticStyle:{"padding-top":"10px"}},[a("span",{staticClass:"label"}),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"mini"},on:{click:t.doSearch}},[t._v("筛选")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"default",plain:"",size:"mini"},on:{click:t.doInit}},[t._v("重置")])],1)]),a("div",{staticClass:"box-panel",staticStyle:{"padding-bottom":"10px","margin-bottom":"0"}},[a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),a("el-table-column",{attrs:{prop:"create_time",label:"时间",width:"170"}}),a("el-table-column",{attrs:{prop:"user_id",label:"用户ID",width:"80"}}),a("el-table-column",{attrs:{label:"使用模型"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("【"+t._s(e.row.topic_title)+"】"+t._s(e.row.prompt_title))])]}}])}),a("el-table-column",{attrs:{label:"用户输入"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{innerHTML:t._s(e.row.message)}}),e.row.message_input?a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.showMsgDialog(e.row.message_input)}}},[t._v("查看原文")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"AI回复",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.showMsgDialog(e.row.response)}}},[t._v("查看回复")])]}}])}),a("el-table-column",{attrs:{prop:"total_tokens",label:"消耗tokens",width:"100"}}),a("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text text-danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(a){return a.preventDefault(),t.doDel(e.row.id)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"footer"},[a("div",{staticClass:"tongji"},[a("i",{staticClass:"el-icon-s-data text-green",staticStyle:{"font-size":"20px"}}),t._v(" 共 "),a("span",{staticClass:"text-green"},[t._v(" "+t._s(t.tongji.msgCount)+" ")]),t._v(" 条问题， "),a("span",{staticClass:"text-danger"},[t._v(" "+t._s(t.tongji.msgTokens)+" ")]),t._v(" tokens ")]),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}})],1),t.dialogMessage?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:"查看原文",width:"600px",visible:!0,"close-on-click-modal":!0,"before-close":t.closeMsgDialog}},[a("p",{staticStyle:{padding:"0","font-size":"14px","line-height":"24px",color:"#333"},domProps:{innerHTML:t._s(t.dialogMessage)}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeMsgDialog}},[t._v("关 闭")])],1)])],1):t._e()],1)])},i=[],s=(a("c36d"),a("7a70"),a("2e69"),a("19e4"),a("08e6"),a("eb0d"),a("117f"),a("a7eb"),a("b775"));function o(t){return Object(s["a"])({url:"/write/getMsgList",method:"post",data:t})}function r(t){return Object(s["a"])({url:"/write/getMsgTongji",method:"post",data:t})}function l(t){return Object(s["a"])({url:"/write/delMsg",method:"post",data:t})}var c=a("571f"),u={data:function(){return{dataList:[],dataTotal:0,page:1,pagesize:20,dateType:"",search:{date:[],site_id:"",user_id:"",keyword:""},tongji:{msgCount:0,msgTokens:0},siteList:[],dialogMessage:""}},created:function(){this.doInit()},methods:{doInit:function(){this.dateType="",this.search={date:[],site_id:"",user_id:"",keyword:""},this.doSearch(),this.getSiteList()},getList:function(){var t=this,e=Object.assign(this.search,{page:this.page,pagesize:this.pagesize});o(e).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count})),1===this.page&&r(e).then((function(e){t.tongji=e.data}))},getSiteList:function(){var t=this;Object(c["e"])().then((function(e){t.siteList=e.data}))},tableIndex:function(t){return this.pagesize*(this.page-1)+t+1},pageChange:function(t){this.page=t,this.getList()},doSearch:function(){this.page=1,this.getList()},dateChange:function(){this.dateType=""},dateTypeChange:function(){var t="",e=this.dateFormat(new Date,"yyyy-MM-dd"),a=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-1)),"yyyy-MM-dd"),n=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-2)),"yyyy-MM-dd");"day0"===this.dateType?t=e:"day1"===this.dateType?t=a:"day2"===this.dateType&&(t=n),this.search.date=[t+" 00:00:00",t+" 23:59:59"]},dateFormat:function(t,e){var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[n]:("00"+a[n]).substr((""+a[n]).length)));return e},showMsgDialog:function(t){this.dialogMessage=t},closeMsgDialog:function(){this.dialogMessage=""},doDel:function(t){var e=this;this.$confirm("确定删除吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){l({id:t}).then((function(t){e.getList(),e.$message.success(t.message)}))}))}}},d=u,p=(a("68e1"),a("3427")),g=Object(p["a"])(d,n,i,!1,null,"6023f135",null);e["default"]=g.exports},a7eb:function(t,e,a){"use strict";var n=a("59db").PROPER,i=a("e549"),s=a("2f89"),o=a("f8b7"),r=a("8241"),l=a("497f"),c="toString",u=RegExp.prototype,d=u[c],p=r((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),g=n&&d.name!=c;(p||g)&&i(RegExp.prototype,c,(function(){var t=s(this),e=o(t.source),a=o(l(t));return"/"+e+"/"+a}),{unsafe:!0})},eb0d:function(t,e,a){var n=a("a493"),i=a("251f"),s=a("2044"),o=a("d860"),r=a("264e").get,l=RegExp.prototype,c=TypeError;n&&i&&o(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!r(this).dotAll;throw c("Incompatible receiver, RegExp required")}}})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2998c12a"],{"08e6":function(t,e,a){var n=a("a493"),s=a("9760"),o=a("ea56"),i=a("6695"),r=a("091c"),l=a("6fb3"),c=a("3c71").f,u=a("bb38"),d=a("68d3"),p=a("f8b7"),g=a("497f"),f=a("84e8"),h=a("9c78"),y=a("e549"),b=a("8241"),m=a("985f"),v=a("264e").enforce,x=a("7c5d"),w=a("831d"),_=a("251f"),k=a("3128"),S=w("match"),M=s.RegExp,T=M.prototype,D=s.SyntaxError,E=o(T.exec),R=o("".charAt),j=o("".replace),C=o("".indexOf),O=o("".slice),z=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,I=/a/g,L=/a/g,$=new M(I)!==I,A=f.MISSED_STICKY,P=f.UNSUPPORTED_Y,F=n&&(!$||A||_||k||b((function(){return L[S]=!1,M(I)!=I||M(L)==L||"/a/i"!=M(I,"i")}))),H=function(t){for(var e,a=t.length,n=0,s="",o=!1;n<=a;n++)e=R(t,n),"\\"!==e?o||"."!==e?("["===e?o=!0:"]"===e&&(o=!1),s+=e):s+="[\\s\\S]":s+=e+R(t,++n);return s},Y=function(t){for(var e,a=t.length,n=0,s="",o=[],i={},r=!1,l=!1,c=0,u="";n<=a;n++){if(e=R(t,n),"\\"===e)e+=R(t,++n);else if("]"===e)r=!1;else if(!r)switch(!0){case"["===e:r=!0;break;case"("===e:E(z,O(t,n+1))&&(n+=2,l=!0),s+=e,c++;continue;case">"===e&&l:if(""===u||m(i,u))throw new D("Invalid capture group name");i[u]=!0,o[o.length]=[u,c],l=!1,u="";continue}l?u+=e:s+=e}return[s,o]};if(i("RegExp",F)){for(var q=function(t,e){var a,n,s,o,i,c,f=u(T,this),h=d(t),y=void 0===e,b=[],m=t;if(!f&&h&&y&&t.constructor===q)return t;if((h||u(T,t))&&(t=t.source,y&&(e=g(m))),t=void 0===t?"":p(t),e=void 0===e?"":p(e),m=t,_&&"dotAll"in I&&(n=!!e&&C(e,"s")>-1,n&&(e=j(e,/s/g,""))),a=e,A&&"sticky"in I&&(s=!!e&&C(e,"y")>-1,s&&P&&(e=j(e,/y/g,""))),k&&(o=Y(t),t=o[0],b=o[1]),i=r(M(t,e),f?this:T,q),(n||s||b.length)&&(c=v(i),n&&(c.dotAll=!0,c.raw=q(H(t),a)),s&&(c.sticky=!0),b.length&&(c.groups=b)),t!==m)try{l(i,"source",""===m?"(?:)":m)}catch(x){}return i},B=c(M),J=0;B.length>J;)h(q,M,B[J++]);T.constructor=q,q.prototype=T,y(s,"RegExp",q,{constructor:!0})}x("RegExp")},"117f":function(t,e,a){var n=a("a493"),s=a("84e8").MISSED_STICKY,o=a("2044"),i=a("d860"),r=a("264e").get,l=RegExp.prototype,c=TypeError;n&&s&&i(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!r(this).sticky;throw c("Incompatible receiver, RegExp required")}}})},"263c":function(t,e,a){"use strict";a("6e55")},"3d53":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"497f":function(t,e,a){var n=a("10b0"),s=a("985f"),o=a("bb38"),i=a("1ed2"),r=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in r||s(t,"flags")||!o(r,t)?e:n(i,t)}},"6e55":function(t,e,a){},"7a70":function(t,e,a){"use strict";var n=a("10b0"),s=a("e67f"),o=a("2f89"),i=a("4b5b"),r=a("57eb"),l=a("3d53"),c=a("f8b7"),u=a("5de4"),d=a("4f00");s("search",(function(t,e,a){return[function(e){var a=r(this),s=i(e)?void 0:u(e,t);return s?n(s,e,a):new RegExp(e)[t](c(a))},function(t){var n=o(this),s=c(t),i=a(e,n,s);if(i.done)return i.value;var r=n.lastIndex;l(r,0)||(n.lastIndex=0);var u=d(n,s);return l(n.lastIndex,r)||(n.lastIndex=r),null===u?-1:u.index}]}))},a7eb:function(t,e,a){"use strict";var n=a("59db").PROPER,s=a("e549"),o=a("2f89"),i=a("f8b7"),r=a("8241"),l=a("497f"),c="toString",u=RegExp.prototype,d=u[c],p=r((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),g=n&&d.name!=c;(p||g)&&s(RegExp.prototype,c,(function(){var t=o(this),e=i(t.source),a=i(l(t));return"/"+e+"/"+a}),{unsafe:!0})},c077:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{padding:"0"}},[a("div",{staticClass:"search"},[a("p",[a("span",{staticClass:"label"},[t._v("提问时间：")]),a("el-date-picker",{staticStyle:{width:"340px"},attrs:{align:"right",type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"],"range-separator":"至","start-placeholder":"时间开始","end-placeholder":"时间结束",size:"mini"},on:{change:t.dateChange},model:{value:t.search.date,callback:function(e){t.$set(t.search,"date",e)},expression:"search.date"}}),a("el-radio-group",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini"},on:{change:t.dateTypeChange},model:{value:t.dateType,callback:function(e){t.dateType=e},expression:"dateType"}},[a("el-radio-button",{attrs:{label:"day0"}},[t._v("今天")]),a("el-radio-button",{attrs:{label:"day1"}},[t._v("昨天")]),a("el-radio-button",{attrs:{label:"day2"}},[t._v("前天")])],1)],1),a("p",[a("span",{staticClass:"label"},[t._v("用户ID：")]),a("el-input",{staticStyle:{width:"120px"},attrs:{type:"text",size:"mini",clearable:"",placeholder:"请输入用户id"},model:{value:t.search.user_id,callback:function(e){t.$set(t.search,"user_id",e)},expression:"search.user_id"}}),a("span",{staticClass:"label"},[t._v("关键词：")]),a("el-input",{staticStyle:{width:"200px"},attrs:{type:"text",size:"mini",clearable:"",placeholder:"请输入关键词"},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1),a("p",{staticStyle:{"padding-top":"10px"}},[a("span",{staticClass:"label"}),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"mini"},on:{click:t.doSearch}},[t._v("筛选")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"default",plain:"",size:"mini"},on:{click:t.doInit}},[t._v("重置")])],1)]),a("div",{staticClass:"box-panel",staticStyle:{"padding-bottom":"10px","margin-bottom":"0"}},[a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),a("el-table-column",{attrs:{prop:"create_time",label:"时间",width:"170"}}),a("el-table-column",{attrs:{prop:"user_id",label:"用户ID",width:"80"}}),a("el-table-column",{attrs:{label:"使用模型"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("【"+t._s(e.row.type_title)+"】"+t._s(e.row.role_title))])]}}])}),a("el-table-column",{attrs:{label:"用户输入"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{innerHTML:t._s(e.row.message)}}),e.row.message_input?a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.showMsgDialog(e.row.message_input)}}},[t._v("查看原文")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"AI回复",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.showMsgDialog(e.row.response)}}},[t._v("查看回复")])]}}])}),a("el-table-column",{attrs:{prop:"total_tokens",label:"消耗tokens",width:"100"}}),a("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text text-danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(a){return a.preventDefault(),t.doDel(e.row.id)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"footer"},[a("div",{staticClass:"tongji"},[a("i",{staticClass:"el-icon-s-data text-green",staticStyle:{"font-size":"20px"}}),t._v(" 共 "),a("span",{staticClass:"text-green"},[t._v(" "+t._s(t.tongji.msgCount)+" ")]),t._v(" 条问题， "),a("span",{staticClass:"text-danger"},[t._v(" "+t._s(t.tongji.msgTokens)+" ")]),t._v(" tokens ")]),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}})],1),t.dialogMessage?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:"查看原文",width:"600px",visible:!0,"close-on-click-modal":!0,"before-close":t.closeMsgDialog}},[a("p",{staticStyle:{padding:"0","font-size":"14px","line-height":"24px",color:"#333"},domProps:{innerHTML:t._s(t.dialogMessage)}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeMsgDialog}},[t._v("关 闭")])],1)])],1):t._e()],1)])},s=[],o=(a("c36d"),a("7a70"),a("2e69"),a("19e4"),a("08e6"),a("eb0d"),a("117f"),a("a7eb"),a("f34f")),i={data:function(){return{dataList:[],dataTotal:0,page:1,pagesize:20,dateType:"",search:{date:[],user_id:"",keyword:""},tongji:{msgCount:0,msgTokens:0},dialogMessage:""}},created:function(){this.doInit()},methods:{doInit:function(){this.dateType="",this.search={date:[],user_id:"",keyword:""},this.doSearch()},getList:function(){var t=this,e=Object.assign(this.search,{page:this.page,pagesize:this.pagesize});Object(o["d"])(e).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count})),1===this.page&&Object(o["e"])(e).then((function(e){t.tongji=e.data}))},tableIndex:function(t){return this.pagesize*(this.page-1)+t+1},pageChange:function(t){this.page=t,this.getList()},doSearch:function(){this.page=1,this.getList()},dateChange:function(){this.dateType=""},dateTypeChange:function(){var t="",e=this.dateFormat(new Date,"yyyy-MM-dd"),a=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-1)),"yyyy-MM-dd"),n=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-2)),"yyyy-MM-dd");"day0"===this.dateType?t=e:"day1"===this.dateType?t=a:"day2"===this.dateType&&(t=n),this.search.date=[t+" 00:00:00",t+" 23:59:59"]},dateFormat:function(t,e){var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[n]:("00"+a[n]).substr((""+a[n]).length)));return e},showMsgDialog:function(t){this.dialogMessage=t},closeMsgDialog:function(){this.dialogMessage=""},doDel:function(t){var e=this;this.$confirm("确定删除吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["a"])({id:t}).then((function(t){e.getList(),e.$message.success(t.message)}))}))}}},r=i,l=(a("263c"),a("3427")),c=Object(l["a"])(r,n,s,!1,null,"49b76bb4",null);e["default"]=c.exports},eb0d:function(t,e,a){var n=a("a493"),s=a("251f"),o=a("2044"),i=a("d860"),r=a("264e").get,l=RegExp.prototype,c=TypeError;n&&s&&i(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!r(this).dotAll;throw c("Incompatible receiver, RegExp required")}}})},f34f:function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"e",(function(){return o})),a.d(e,"a",(function(){return i})),a.d(e,"i",(function(){return r})),a.d(e,"h",(function(){return l})),a.d(e,"k",(function(){return c})),a.d(e,"c",(function(){return u})),a.d(e,"m",(function(){return d})),a.d(e,"g",(function(){return p})),a.d(e,"f",(function(){return g})),a.d(e,"j",(function(){return f})),a.d(e,"b",(function(){return h})),a.d(e,"l",(function(){return y}));var n=a("b775");function s(t){return Object(n["a"])({url:"/cosplay/getMsgList",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/cosplay/getMsgTongji",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/cosplay/delMsg",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/cosplay/getTypeList",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/cosplay/getType",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/cosplay/saveType",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/cosplay/delType",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/cosplay/setTypeState",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/cosplay/getRoleList",method:"post",data:t})}function g(t){return Object(n["a"])({url:"/cosplay/getRole",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/cosplay/saveRole",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/cosplay/delRole",method:"post",data:t})}function y(t){return Object(n["a"])({url:"/cosplay/setRoleState",method:"post",data:t})}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c012355"],{"0998":function(t,e,a){var s=a("12f4"),n=a("11e4"),i=a("d409"),o=a("3c2a"),r=a("e5b5").get,l=RegExp.prototype,c=TypeError;s&&n&&o(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===i(this))return!!r(this).dotAll;throw c("Incompatible receiver, RegExp required")}}})},"1f40":function(t,e,a){},2161:function(t,e,a){"use strict";a("1f40")},"24e3":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"2e04":function(t,e,a){"use strict";var s=a("2d29").PROPER,n=a("968d"),i=a("a30c"),o=a("8fde"),r=a("baf9"),l=a("bf52"),c="toString",d=RegExp.prototype,u=d[c],g=r((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),p=s&&u.name!=c;(g||p)&&n(RegExp.prototype,c,(function(){var t=i(this),e=o(t.source),a=o(l(t));return"/"+e+"/"+a}),{unsafe:!0})},"44c3":function(t,e,a){var s=a("12f4"),n=a("bf5d"),i=a("b303"),o=a("95df"),r=a("2fca"),l=a("80b0"),c=a("a6bf").f,d=a("1449"),u=a("6a5e"),g=a("8fde"),p=a("bf52"),f=a("47b0"),h=a("9d67"),y=a("968d"),b=a("baf9"),m=a("5169"),v=a("e5b5").enforce,x=a("8bf1"),w=a("3192"),_=a("11e4"),k=a("f715"),M=w("match"),S=n.RegExp,E=S.prototype,T=n.SyntaxError,C=i(E.exec),D=i("".charAt),R=i("".replace),I=i("".indexOf),j=i("".slice),z=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,O=/a/g,L=/a/g,A=new S(O)!==O,$=f.MISSED_STICKY,P=f.UNSUPPORTED_Y,F=s&&(!A||$||_||k||b((function(){return L[M]=!1,S(O)!=O||S(L)==L||"/a/i"!=S(O,"i")}))),H=function(t){for(var e,a=t.length,s=0,n="",i=!1;s<=a;s++)e=D(t,s),"\\"!==e?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),n+=e):n+="[\\s\\S]":n+=e+D(t,++s);return n},Y=function(t){for(var e,a=t.length,s=0,n="",i=[],o={},r=!1,l=!1,c=0,d="";s<=a;s++){if(e=D(t,s),"\\"===e)e+=D(t,++s);else if("]"===e)r=!1;else if(!r)switch(!0){case"["===e:r=!0;break;case"("===e:C(z,j(t,s+1))&&(s+=2,l=!0),n+=e,c++;continue;case">"===e&&l:if(""===d||m(o,d))throw new T("Invalid capture group name");o[d]=!0,i[i.length]=[d,c],l=!1,d="";continue}l?d+=e:n+=e}return[n,i]};if(o("RegExp",F)){for(var q=function(t,e){var a,s,n,i,o,c,f=d(E,this),h=u(t),y=void 0===e,b=[],m=t;if(!f&&h&&y&&t.constructor===q)return t;if((h||d(E,t))&&(t=t.source,y&&(e=p(m))),t=void 0===t?"":g(t),e=void 0===e?"":g(e),m=t,_&&"dotAll"in O&&(s=!!e&&I(e,"s")>-1,s&&(e=R(e,/s/g,""))),a=e,$&&"sticky"in O&&(n=!!e&&I(e,"y")>-1,n&&P&&(e=R(e,/y/g,""))),k&&(i=Y(t),t=i[0],b=i[1]),o=r(S(t,e),f?this:E,q),(s||n||b.length)&&(c=v(o),s&&(c.dotAll=!0,c.raw=q(H(t),a)),n&&(c.sticky=!0),b.length&&(c.groups=b)),t!==m)try{l(o,"source",""===m?"(?:)":m)}catch(x){}return o},J=c(S),K=0;J.length>K;)h(q,S,J[K++]);E.constructor=q,q.prototype=E,y(n,"RegExp",q,{constructor:!0})}x("RegExp")},"85fa":function(t,e,a){"use strict";var s=a("607c"),n=a("f65d"),i=a("a30c"),o=a("dc58"),r=a("f129"),l=a("24e3"),c=a("8fde"),d=a("a2f3"),u=a("ccba");n("search",(function(t,e,a){return[function(e){var a=r(this),n=o(e)?void 0:d(e,t);return n?s(n,e,a):new RegExp(e)[t](c(a))},function(t){var s=i(this),n=c(t),o=a(e,s,n);if(o.done)return o.value;var r=s.lastIndex;l(r,0)||(s.lastIndex=0);var d=u(s,n);return l(s.lastIndex,r)||(s.lastIndex=r),null===d?-1:d.index}]}))},b215:function(t,e,a){var s=a("12f4"),n=a("47b0").MISSED_STICKY,i=a("d409"),o=a("3c2a"),r=a("e5b5").get,l=RegExp.prototype,c=TypeError;s&&n&&o(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===i(this))return!!r(this).sticky;throw c("Incompatible receiver, RegExp required")}}})},bf52:function(t,e,a){var s=a("607c"),n=a("5169"),i=a("1449"),o=a("4459"),r=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in r||n(t,"flags")||!i(r,t)?e:s(o,t)}},d1ae:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{padding:"0"}},[a("div",{staticClass:"search"},[a("p",[a("span",{staticClass:"label"},[t._v("提问时间：")]),a("el-date-picker",{staticStyle:{width:"340px"},attrs:{align:"right",type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"],"range-separator":"至","start-placeholder":"时间开始","end-placeholder":"时间结束",size:"mini"},on:{change:t.dateChange},model:{value:t.search.date,callback:function(e){t.$set(t.search,"date",e)},expression:"search.date"}}),a("el-radio-group",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini"},on:{change:t.dateTypeChange},model:{value:t.dateType,callback:function(e){t.dateType=e},expression:"dateType"}},[a("el-radio-button",{attrs:{label:"day0"}},[t._v("今天")]),a("el-radio-button",{attrs:{label:"day1"}},[t._v("昨天")]),a("el-radio-button",{attrs:{label:"day2"}},[t._v("前天")])],1)],1),a("p",[a("span",{staticClass:"label"},[t._v("用户ID：")]),a("el-input",{staticStyle:{width:"120px"},attrs:{type:"text",size:"mini",clearable:"",placeholder:"请输入用户id"},model:{value:t.search.user_id,callback:function(e){t.$set(t.search,"user_id",e)},expression:"search.user_id"}})],1),a("p",[a("span",{staticClass:"label"},[t._v("关键词：")]),a("el-input",{staticStyle:{width:"200px"},attrs:{type:"text",size:"mini",clearable:"",placeholder:"请输入关键词"},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1),a("p",{staticStyle:{"padding-top":"10px"}},[a("span",{staticClass:"label"}),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"mini"},on:{click:t.doSearch}},[t._v("筛选")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"default",plain:"",size:"mini"},on:{click:t.doInit}},[t._v("重置")])],1)]),a("div",{staticClass:"box-panel",staticStyle:{"padding-bottom":"10px","margin-bottom":"0"}},[a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),a("el-table-column",{attrs:{prop:"create_time",label:"时间",width:"180"}}),a("el-table-column",{attrs:{prop:"total_tokens",label:"消耗tokens",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["AI"===e.row.user&&e.row.total_tokens>0?a("span",[t._v(t._s(e.row.total_tokens))]):t._e()]}}])}),a("el-table-column",{attrs:{label:"用户",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{staticStyle:{"text-align":"right"}},["AI"!==e.row.user?a("span",{staticStyle:{"font-weight":"bold"}},[t._v("客户"+t._s(e.row.user_id)+"：")]):a("span",[t._v("AI：")])])]}}])}),a("el-table-column",{attrs:{label:"内容"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{staticStyle:{margin:"10px 0"},style:"font-weight:"+("AI"!==e.row.user?"bold":"normal"),domProps:{innerHTML:t._s(e.row.message)}}),e.row.message_input?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.showMsgDialog(e.row.message_input)}}},[t._v("查看原文")]):t._e()]}}])})],1),a("div",{staticClass:"footer"},[a("div",{staticClass:"tongji"},[a("i",{staticClass:"el-icon-s-data text-green",staticStyle:{"font-size":"20px"}}),t._v(" 共 "),a("span",{staticClass:"text-green"},[t._v(" "+t._s(t.tongji.msgCount)+" ")]),t._v(" 条问题， "),a("span",{staticClass:"text-danger"},[t._v(" "+t._s(t.tongji.msgTokens)+" ")]),t._v(" tokens ")]),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}})],1),t.dialogMessage?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:"查看原文",width:"600px",visible:!0,"close-on-click-modal":!0,"before-close":t.closeMsgDialog}},[a("p",{staticStyle:{padding:"0","font-size":"14px","line-height":"24px",color:"#333"},domProps:{innerHTML:t._s(t.dialogMessage)}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeMsgDialog}},[t._v("关 闭")])],1)])],1):t._e()],1)])},n=[],i=(a("592a"),a("85fa"),a("e334"),a("3404"),a("44c3"),a("0998"),a("b215"),a("2e04"),a("d800")),o={data:function(){return{dataList:[],dataTotal:0,page:1,pagesize:20,dateType:"",search:{date:[],user_id:"",keyword:""},tongji:{msgCount:0,msgTokens:0},dialogMessage:""}},created:function(){this.doInit()},methods:{doInit:function(){this.dateType="",this.search={date:[],user_id:"",keyword:""},this.doSearch()},getList:function(){var t=this,e=Object.assign(this.search,{page:this.page,pagesize:this.pagesize});Object(i["d"])(e).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count})),1===this.page&&Object(i["e"])(e).then((function(e){t.tongji=e.data}))},tableIndex:function(t){return this.pagesize*(this.page-1)+t+1},pageChange:function(t){this.page=t,this.getList()},doSearch:function(){this.page=1,this.getList()},dateChange:function(){this.dateType=""},dateTypeChange:function(){var t="",e=this.dateFormat(new Date,"yyyy-MM-dd"),a=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-1)),"yyyy-MM-dd"),s=this.dateFormat(new Date((new Date).setDate((new Date).getDate()-2)),"yyyy-MM-dd");"day0"===this.dateType?t=e:"day1"===this.dateType?t=a:"day2"===this.dateType&&(t=s),this.search.date=[t+" 00:00:00",t+" 23:59:59"]},dateFormat:function(t,e){var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var s in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[s]:("00"+a[s]).substr((""+a[s]).length)));return e},showMsgDialog:function(t){this.dialogMessage=t},closeMsgDialog:function(){this.dialogMessage=""}}},r=o,l=(a("2161"),a("3427")),c=Object(l["a"])(r,s,n,!1,null,"1ea3d8e1",null);e["default"]=c.exports},d800:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return o})),a.d(e,"d",(function(){return r})),a.d(e,"e",(function(){return l}));var s=a("b775");function n(t){return Object(s["a"])({url:"/msg/getMsgList",method:"post",data:t})}function i(t){return Object(s["a"])({url:"/msg/getMsgTongji",method:"post",data:t})}function o(t){return Object(s["a"])({url:"/msg/delMsg",method:"post",data:t})}function r(t){return Object(s["a"])({url:"/msg/getOldMsgList",method:"post",data:t})}function l(t){return Object(s["a"])({url:"/msg/getOldMsgTongji",method:"post",data:t})}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61087bf0"],{"24e3":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"4dfb7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"toolbar"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:t.clickCreate}},[t._v("生成卡密")]),a("div",{staticStyle:{float:"right"}},[a("el-input",{staticClass:"input-with-select",staticStyle:{width:"240px"},attrs:{placeholder:"搜备注",size:"small",clearable:""},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.doSearch()}},slot:"append"})],1)],1)],1),a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"id",label:"批次ID",width:"80"}}),a("el-table-column",{attrs:{prop:"create_time",label:"生成时间",width:"150"}}),a("el-table-column",{attrs:{prop:"type",label:"类型",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["times"===e.row.type?a("span",[t._v("对话次数")]):t._e(),"draw"===e.row.type?a("span",[t._v("绘画次数")]):t._e(),"gpt4"===e.row.type?a("span",[t._v("GPT4字数")]):t._e(),"vip"===e.row.type?a("span",[t._v("vip时长")]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"val",label:"每卡额度",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.val)+" "),"times"===e.row.type?a("span",[t._v("条")]):t._e(),"draw"===e.row.type?a("span",[t._v("张")]):t._e(),"gpt4"===e.row.type?a("span",[t._v("万字")]):t._e(),"vip"===e.row.type?a("span",[t._v("个月")]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"num",label:"总数量",width:"100",align:"center"}}),a("el-table-column",{attrs:{prop:"used",label:"已使用",width:"120",align:"center"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注",width:"220"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button-group",[a("el-button",{attrs:{type:"text",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),t.showCardList(e.row.id)}}},[a("i",{staticClass:"el-icon-view"}),t._v(" 查看 ")]),a("el-button",{attrs:{type:"text text-danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(a){return a.preventDefault(),t.clickDel(e.row.id)}}},[t._v("删除 ")])],1)]}}])})],1),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}}),t.form?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:"生成卡密",visible:!0,width:"500px","close-on-click-modal":!1,"before-close":t.closeForm}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"卡密类型",prop:"type"}},[a("el-radio-group",{model:{value:t.form["type"],callback:function(e){t.$set(t.form,"type",e)},expression:"form['type']"}},[a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"times",size:"mini"}},[t._v("对话次数")]),a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"draw",size:"mini"}},[t._v("绘画次数")]),a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"gpt4",size:"mini"}},[t._v("GPT4字数")]),a("el-radio",{attrs:{label:"vip",size:"mini"}},[t._v("vip时长")])],1)],1),a("el-form-item",{attrs:{label:"每卡额度",prop:"val"}},[a("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:"填入整数",size:"small"},model:{value:t.form.val,callback:function(e){t.$set(t.form,"val",e)},expression:"form.val"}}),"times"===t.form.type?a("span",{staticClass:"tips"},[t._v(" 条")]):t._e(),"draw"===t.form.type?a("span",{staticClass:"tips"},[t._v(" 张")]):t._e(),"gpt4"===t.form.type?a("span",{staticClass:"tips"},[t._v(" 万字")]):t._e(),"vip"===t.form.type?a("span",{staticClass:"tips"},[t._v(" 个月")]):t._e()],1),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{staticStyle:{width:"300px","max-width":"100%"},attrs:{type:"textarea",placeholder:"备注必填",size:"small"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),a("el-form-item",{attrs:{label:"生成卡密数",prop:"num"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"1 - 2000",size:"small"},model:{value:t.form.num,callback:function(e){t.$set(t.form,"num",e)},expression:"form.num"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeForm}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v("提 交")])],1)],1)],1):t._e(),t.batch_id?a("batch-list",{attrs:{"batch-id":t.batch_id},on:{close:t.closeCardList}}):t._e()],1)},i=[],r=(a("592a"),a("85fa"),a("7381")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-drawer",{attrs:{title:"卡密管理，批次ID："+t.batchId,visible:t.dataList.length>0,direction:"rtl",size:"900px","close-on-click-modal":!1,"before-close":t.closeList},on:{"update:visible":function(e){return t.$set(t.dataList,"length > 0",e)}}},[a("div",{staticStyle:{padding:"0 20px"}},[a("div",{staticClass:"dialog-toolbar",staticStyle:{"padding-bottom":"20px"}},[a("el-button",{staticStyle:{"margin-right":"20px"},attrs:{loading:t.exportLoading,type:"primary",icon:"el-icon-download",size:"mini"},on:{click:t.doExport}},[t._v("导出Excel")]),a("el-checkbox",{model:{value:t.downUnbind,callback:function(e){t.downUnbind=e},expression:"downUnbind"}},[t._v("只导出未使用")])],1),a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium"}},[a("el-table-column",{attrs:{property:"id",label:"ID",width:"60"}}),a("el-table-column",{attrs:{property:"code",label:"卡密",width:"100"}}),a("el-table-column",{attrs:{prop:"type",label:"类型",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["times"===e.row.type?a("span",[t._v("对话次数")]):t._e(),"draw"===e.row.type?a("span",[t._v("绘画次数")]):t._e(),"gpt4"===e.row.type?a("span",[t._v("GPT4字数")]):t._e(),"vip"===e.row.type?a("span",[t._v("vip时长")]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"val",label:"面额",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.val)+" "),"times"===e.row.type?a("span",[t._v("条")]):t._e(),"draw"===e.row.type?a("span",[t._v("张")]):t._e(),"gpt4"===e.row.type?a("span",[t._v("万字")]):t._e(),"vip"===e.row.type?a("span",[t._v("个月")]):t._e()]}}])}),a("el-table-column",{attrs:{property:"bind_time",label:"使用时间",width:"160"}}),a("el-table-column",{attrs:{label:"使用者",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.user_id?a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{staticStyle:{height:"24px","margin-right":"5px"},attrs:{src:e.row.user.avatar}}),t._v(" "+t._s(e.row.user.nickname||"无昵称")+" [ID:"+t._s(e.row.user_id)+"] ")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"操作",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.user_id?a("el-button",{attrs:{type:"text text-danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(a){return a.preventDefault(),t.unbind(e.row.id)}}},[t._v("设为未使用 ")]):t._e()]}}])})],1),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}})],1)])],1)},o=[],l=(a("f4e0"),a("72c9"),a("a7f3"),a("f144"),a("43c6"),{props:{batchId:{type:Number,default:0}},data:function(){return{dataList:null,dataTotal:0,page:1,pagesize:100,downUnbind:!1,exportLoading:!1}},mounted:function(){this.getList()},methods:{closeList:function(){var t=this;this.dataList=null,setTimeout((function(){t.$emit("close")}),200)},tableIndex:function(t){return this.pagesize*(this.page-1)+t+1},getList:function(){var t=this;Object(r["c"])({batch_id:this.batchId,page:this.page,pagesize:this.pagesize}).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count}))},pageChange:function(t){this.page=t,this.getList()},unbind:function(t){var e=this;this.$confirm("确认设为未使用吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["g"])({id:t}).then((function(t){e.getList(),e.$message({message:t.message,type:"success",duration:1500})}))}))},doExport:function(){var t=this;this.exportLoading=!0,Object(r["d"])({batch_id:this.batchId,unbind:this.downUnbind?1:0}).then((function(e){Promise.all([a.e("chunk-146d2888"),a.e("chunk-b845a9b6")]).then(a.bind(null,"4bf8")).then((function(a){var n="卡密["+t.batchId+"]",i=["ID","生成时间","卡密","类型","面额","使用时间","使用者ID"],r=["id","create_time","code","type","val","bind_time","user_id"],s=e.data,o=t.formatJson(r,s);a.export_json_to_excel({header:i,data:o,filename:n,autoWidth:!0,bookType:"xlsx"}),t.exportLoading=!1}))}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))}}}),c=l,u=(a("5d69"),a("3427")),d=Object(u["a"])(c,s,o,!1,null,"16950c42",null),p=d.exports,f={components:{batchList:p},data:function(){return{batch_id:0,form:null,search:{},agentList:null,dataList:[],dataTotal:0,page:1,pagesize:15,formRules:{type:[{required:!0,message:"此项必填",trigger:"blur"}],val:[{required:!0,message:"此项必填",trigger:"blur"}],num:[{required:!0,message:"此项必填",trigger:"blur"}],remark:[{required:!0,message:"此项必填",trigger:"blur"}]},cardListShow:!1}},created:function(){this.getBatchList()},methods:{getBatchList:function(){var t=this;Object(r["e"])({page:this.page,pagesize:this.pagesize,keyword:this.search.keyword}).then((function(e){var a=e.data;t.dataList=a.list,t.dataTotal=e.data.count}))},tableIndex:function(t){return this.pagesize*(this.page-1)+t+1},pageChange:function(t){this.page=t,this.getBatchList()},clickCreate:function(){this.form={}},closeForm:function(){this.form=null},showCardList:function(t){this.batch_id=t,this.cardListShow=!0},closeCardList:function(){this.batch_id=0,this.cardListShow=!1},doSubmit:function(t){var e=this;this.$refs.form.validate((function(t){t&&Object(r["b"])(e.form).then((function(t){e.page=1,e.getBatchList(),e.$message({message:t.message,type:"success",duration:1500}),e.closeForm()}))}))},clickDel:function(t){var e=this;this.$confirm("此操作将删除此批次的所有卡密","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["a"])({id:t}).then((function(t){t.errno?e.$message({message:t.message,type:"error"}):(e.getBatchList(),e.$message({message:t.message,type:"success",duration:1500}))}))}))},doSearch:function(){this.page=1,this.getBatchList()}}},m=f,h=(a("fb70"),Object(u["a"])(m,n,i,!1,null,"5f012b8f",null));e["default"]=h.exports},"5d69":function(t,e,a){"use strict";a("6054")},6054:function(t,e,a){},7381:function(t,e,a){"use strict";a.d(e,"e",(function(){return i})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return o})),a.d(e,"g",(function(){return l})),a.d(e,"f",(function(){return c})),a.d(e,"d",(function(){return u}));var n=a("b775");function i(t){return Object(n["a"])({url:"/card/getBatchList",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/card/createBatch",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/card/getBatchCard",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/card/batchDel",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/card/unbind",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/card/getCardLogs",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/card/getBatchExport",method:"post",data:t})}},"85fa":function(t,e,a){"use strict";var n=a("607c"),i=a("f65d"),r=a("a30c"),s=a("dc58"),o=a("f129"),l=a("24e3"),c=a("8fde"),u=a("a2f3"),d=a("ccba");i("search",(function(t,e,a){return[function(e){var a=o(this),i=s(e)?void 0:u(e,t);return i?n(i,e,a):new RegExp(e)[t](c(a))},function(t){var n=r(this),i=c(t),s=a(e,n,i);if(s.done)return s.value;var o=n.lastIndex;l(o,0)||(n.lastIndex=0);var u=d(n,i);return l(n.lastIndex,o)||(n.lastIndex=o),null===u?-1:u.index}]}))},c6f4:function(t,e,a){},fb70:function(t,e,a){"use strict";a("c6f4")}}]);
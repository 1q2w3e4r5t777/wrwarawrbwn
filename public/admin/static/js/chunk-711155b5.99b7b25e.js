(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-711155b5"],{"0137":function(e,t,u){},1318:function(e,t,u){"use strict";u.r(t);var a=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",[u("sidebar",{attrs:{menus:e.submenus,"module-name":e.moduleName}}),u("router-view",{attrs:{name:"subRouter"}})],1)},n=[],s=u("978a"),r={components:{sidebar:s["a"]},data:function(){return{moduleName:"Web版",submenus:[{title:"PC版",routeName:"ModuleWebPC",routeQuery:{}},{title:"H5版",routeName:"ModuleWebH5",routeQuery:{}}]}},methods:{}},o=r,i=(u("ec74"),u("3427")),l=Object(i["a"])(o,a,n,!1,null,"6c8a3774",null);t["default"]=l.exports},"7a38":function(e,t,u){"use strict";u("c729")},"978a":function(e,t,u){"use strict";var a=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",{staticClass:"submenu",class:{collapsed:e.isCollapse},style:"width:"+e.width+"px;"},[u("div",{staticClass:"module-name"},[e._v(e._s(e.moduleName))]),u("ul",{staticClass:"list-group"},e._l(e.menus,(function(t,a){return u("li",{key:a,staticClass:"list-item",class:{active:e.routeName===t.routeName},on:{click:function(u){return e.linkto(t.routeName,t.routeQuery)}}},[e._v(" "+e._s(t.title))])})),0)])},n=[],s=u("4a60"),r=(u("f4e0"),u("6eb6"),u("592a"),u("3404"),u("6db4")),o={props:{menus:{type:Array,default:null},moduleName:{type:String,default:""},width:{type:Number,default:110}},computed:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["sidebar"])),{},{isCollapse:function(){return!this.sidebar.opened},routeName:function(){return this.$route.name}}),methods:{linkto:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$router.replace({name:e,query:t})}}},i=o,l=(u("7a38"),u("3427")),c=Object(l["a"])(i,a,n,!1,null,"69562c9a",null);t["a"]=c.exports},c729:function(e,t,u){},ec74:function(e,t,u){"use strict";u("0137")}}]);
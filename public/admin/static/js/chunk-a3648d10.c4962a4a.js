(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3648d10"],{"1eb5":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[a("el-tabs",{on:{"tab-click":e.switchTab},model:{value:e.tabName,callback:function(t){e.tabName=t},expression:"tabName"}},[a("el-tab-pane",{attrs:{label:"PC版设置",name:"web"}},[e.form?a("el-form",{ref:"webForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"140px"}},[a("el-form-item",{attrs:{label:"web站点开关",prop:"is_open"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form["is_open"],callback:function(t){e.$set(e.form,"is_open",t)},expression:"form['is_open']"}})],1),a("el-form-item",{attrs:{label:"自动合并小程序用户",prop:"bind_wxapp_user"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form["bind_wxapp_user"],callback:function(t){e.$set(e.form,"bind_wxapp_user",t)},expression:"form['bind_wxapp_user']"}})],1),e.pcurl?a("el-form-item",{attrs:{label:"PC站点链接"}},[a("a",{staticStyle:{color:"#409EFF"},attrs:{href:e.pcurl,target:"_blank"}},[e._v(e._s(e.pcurl))])]):e._e(),a("el-form-item",{attrs:{label:"页面标题",prop:"page_title"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{size:"small"},model:{value:e.form["page_title"],callback:function(t){e.$set(e.form,"page_title",t)},expression:"form['page_title']"}})],1),a("el-form-item",{attrs:{label:"底部声明",prop:"copyright"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:3,placeholder:"请输入内容",size:"small"},model:{value:e.form["copyright"],callback:function(t){e.$set(e.form,"copyright",t)},expression:"form['copyright']"}})],1),a("el-form-item",{attrs:{label:"声明链接",prop:"copyright_link"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{size:"small"},model:{value:e.form["copyright_link"],callback:function(t){e.$set(e.form,"copyright_link",t)},expression:"form['copyright_link']"}})],1),a("el-form-item",{attrs:{label:"登录方式",prop:"login_way"}},[e._v(" 扫码关注公众号 ")]),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(t){return e.doSubmit("webForm")}}},[e._v("保 存")])],1)],1):e._e()],1),a("el-tab-pane",{attrs:{label:"H5版设置",name:"h5"}},[e.form?a("el-form",{ref:"h5Form",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"140px"}},[e.h5url?a("el-form-item",{attrs:{label:"H5站点链接"}},[a("a",{staticStyle:{color:"#409EFF"},attrs:{href:e.h5url,target:"_blank"}},[e._v(e._s(e.h5url))])]):e._e(),a("el-form-item",{attrs:{label:"H5首页标题",prop:"page_title"}},[a("el-input",{attrs:{placeholder:"请输入首页标题",size:"small"},model:{value:e.form["page_title"],callback:function(t){e.$set(e.form,"page_title",t)},expression:"form['page_title']"}}),a("p",{staticStyle:{margin:"0",color:"#999"}},[e._v("默认：AI创作助手")])],1),a("el-form-item",{attrs:{label:"分享标题",prop:"share_title"}},[a("el-input",{attrs:{placeholder:"默认页面标题",size:"small"},model:{value:e.form["share_title"],callback:function(t){e.$set(e.form,"share_title",t)},expression:"form['share_title']"}})],1),a("el-form-item",{attrs:{label:"分享描述",prop:"share_desc"}},[a("el-input",{attrs:{placeholder:"",size:"small"},model:{value:e.form["share_desc"],callback:function(t){e.$set(e.form,"share_desc",t)},expression:"form['share_desc']"}})],1),a("el-form-item",{attrs:{label:"分享图片",prop:"share_image"}},[a("el-input",{attrs:{placeholder:"输入图片地址或上传图片",size:"small"},model:{value:e.form["share_image"],callback:function(t){e.$set(e.form,"share_image",t)},expression:"form['share_image']"}}),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"",data:{type:"share_image"},"http-request":e.uploadImage,"show-file-list":!1,multiple:!1}},[e.form["share_image"]?a("img",{staticClass:"avatar",staticStyle:{height:"80px",width:"auto"},attrs:{src:e.form["share_image"]}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{width:"80px",height:"80px","line-height":"80px"}})]),a("span",[e._v("建议300x300像素，正方形图片")])],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(t){return e.doSubmit("h5Form")}}},[e._v("保 存")])],1)],1):e._e()],1),a("el-tab-pane",{attrs:{label:"公众号设置",name:"wxmp"}},[e.form?a("el-form",{ref:"wxmpForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"160px"}},[a("el-form-item",{attrs:{label:"公众号名称",prop:"title"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"公众号名称",size:"small"},model:{value:e.form["title"],callback:function(t){e.$set(e.form,"title",t)},expression:"form['title']"}})],1),a("el-form-item",{attrs:{label:"公众号appid",prop:"appid"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"公众号appid",size:"small"},model:{value:e.form["appid"],callback:function(t){e.$set(e.form,"appid",t)},expression:"form['appid']"}})],1),a("el-form-item",{attrs:{label:"公众号appsecret",prop:"appsecret"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"公众号密钥appsecret",size:"small"},model:{value:e.form["appsecret"],callback:function(t){e.$set(e.form,"appsecret",t)},expression:"form['appsecret']"}})],1),a("div",{staticStyle:{"padding-left":"160px",margin:"50px 0 20px 0"}},[e._v("以下配置在公众号后台->设置与开发->基本配置->服务器配置->修改配置，修改保存并启用")]),a("el-form-item",{attrs:{label:"令牌(Token)",prop:"token"}},[a("el-input",{staticStyle:{width:"350px"},attrs:{placeholder:"公众号令牌(Token)",size:"small"},model:{value:e.form["token"],callback:function(t){e.$set(e.form,"token",t)},expression:"form['token']"}})],1),a("el-form-item",{attrs:{label:"消息加解密密钥(EncodingAESKey)",prop:"aes_key"}},[a("el-input",{staticStyle:{width:"350px"},attrs:{placeholder:"公众号消息加解密密钥(EncodingAESKey)",size:"small"},model:{value:e.form["aes_key"],callback:function(t){e.$set(e.form,"aes_key",t)},expression:"form['aes_key']"}})],1),a("el-form-item",{attrs:{label:"消息加解密模式"}},[e._v(" 明文模式 ")]),a("el-form-item",{attrs:{label:"服务器地址",prop:"server_url"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{readonly:"",size:"small"},model:{value:e.form["server_url"],callback:function(t){e.$set(e.form,"server_url",t)},expression:"form['server_url']"}})],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(t){return e.doSubmit("wxmpForm")}}},[e._v("保 存")])],1)],1):e._e()],1)],1)],1)},l=[],i=(a("7b4c"),a("90e7")),s=a("c24f"),o=a("91b6"),n={data:function(){return{tabName:"web",form:null,pcurl:"",h5url:"",formRules:{title:[{required:!0,message:"此项必填",trigger:"blur"}],appid:[{required:!0,message:"此项必填",trigger:"blur"}],appsecret:[{required:!0,message:"此项必填",trigger:"blur"}],token:[{required:!0,message:"此项必填",trigger:"blur"}],aes_key:[{required:!0,message:"此项必填",trigger:"blur"}],page_title:[{required:!0,message:"此项必填",trigger:"blur"}],share_title:[{required:!0,message:"此项必填",trigger:"blur"}],share_desc:[{required:!0,message:"此项必填",trigger:"blur"}],share_image:[{required:!0,message:"此项必填",trigger:"blur"}]}}},mounted:function(){this.getSetting(),this.getWebSiteUrl()},methods:{getSetting:function(){var e=this;Object(i["c"])({name:this.tabName}).then((function(t){e.form=t.data}))},getWebSiteUrl:function(){var e=this;Object(s["g"])().then((function(t){e.pcurl=t.data.pcurl,e.h5url=t.data.h5url}))},switchTab:function(){this.getSetting()},doSubmit:function(e){var t=this;this.$refs[e].validate((function(e){e?Object(i["d"])({name:t.tabName,data:JSON.stringify(t.form)}).then((function(e){t.getSetting(),t.$message.success(e.message)})):t.$message.error("请填写必填项")}))},uploadImage:function(e){var t=this,a=new FormData;a.append("file",e.file),e.data&&a.append("data",JSON.stringify(e.data)),Object(o["a"])(a).then((function(a){"share_image"===e.data.type&&t.$set(t.form,"share_image",a.data.path),t.$message.success("上传成功")}))}}},c=n,m=(a("9aa3"),a("d7a6"),a("3427")),p=Object(m["a"])(c,r,l,!1,null,"5e69fb61",null);t["default"]=p.exports},6337:function(e,t,a){},"90e7":function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return o}));var r=a("b775");function l(e){return Object(r["a"])({url:"/setting/getSetting",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/setting/getEngines",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/setting/setSetting",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/setting/getBalance",method:"post",data:e})}},"91b6":function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i}));var r=a("b775");function l(e){return Object(r["a"])({url:"/upload/image",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/upload/pem",method:"post",data:e})}},"9aa3":function(e,t,a){"use strict";a("ceb7")},ceb7:function(e,t,a){},d7a6:function(e,t,a){"use strict";a("6337")}}]);
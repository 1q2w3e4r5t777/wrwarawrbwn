(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b844ccc"],{"0e1a":function(e,a,t){"use strict";t("571d")},"4c87":function(e,a,t){"use strict";t("9068")},"571d":function(e,a,t){},9068:function(e,a,t){},"90e7":function(e,a,t){"use strict";t.d(a,"d",(function(){return i})),t.d(a,"b",(function(){return o})),t.d(a,"e",(function(){return r})),t.d(a,"a",(function(){return l})),t.d(a,"c",(function(){return n}));var s=t("b775");function i(e){return Object(s["a"])({url:"/setting/getSetting",method:"post",data:e})}function o(e){return Object(s["a"])({url:"/setting/getEngines",method:"post",data:e})}function r(e){return Object(s["a"])({url:"/setting/setSetting",method:"post",data:e})}function l(e){return Object(s["a"])({url:"/setting/getBalance",method:"post",data:e})}function n(e){return Object(s["a"])({url:"/setting/getLxaiBalance",method:"post",data:e})}},c666:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[t("el-tabs",{on:{"tab-click":e.switchTab},model:{value:e.tabName,callback:function(a){e.tabName=a},expression:"tabName"}},[t("el-tab-pane",{attrs:{label:"AI绘画 - 参数配置",name:"draw"}},[e.form?t("el-form",{ref:"drawForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"接口选择",prop:"channel"}},[t("el-radio-group",{model:{value:e.form["channel"],callback:function(a){e.$set(e.form,"channel",a)},expression:"form['channel']"}},[t("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"openai",size:"mini"}},[e._v("OpenAI")]),t("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"replicate",size:"mini"}},[e._v("Midjourney")]),t("el-radio",{attrs:{label:"api2d",size:"mini"}},[e._v("Api2d")]),t("el-radio",{attrs:{label:"lxai",size:"mini"}},[e._v("灵犀AI")])],1)],1),"openai"===e.form["channel"]?t("div",[t("el-form-item",{attrs:{label:"Key模式",prop:"apikey_type"}},[t("el-radio-group",{model:{value:e.form["apikey_type"],callback:function(a){e.$set(e.form,"apikey_type",a)},expression:"form['apikey_type']"}},[t("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"key",size:"mini"}},[e._v("固定key")]),t("el-radio",{attrs:{label:"keys",size:"mini"}},[e._v("使用Key池")])],1)],1),"key"!==e.form["apikey_type"]&&e.form["apikey_type"]?e._e():t("el-form-item",{attrs:{label:"Openai Key",prop:"apikey"}},[t("el-input",{attrs:{placeholder:"AI接口密钥",size:"small"},model:{value:e.form["apikey"],callback:function(a){e.$set(e.form,"apikey",a)},expression:"form['apikey']"}}),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:e.getBalance}},[e._v("查询余额")]),e.balance?t("p",{staticStyle:{color:"#ff8800","font-size":"15px","font-weight":"bold"}},[e._v("总：$"+e._s(e.balance.total_granted)+"，已用：$"+e._s(e.balance.total_used)+"，剩余：$"+e._s(e.balance.total_available))]):e._e(),t("p",[e._v("需自备GPT账号，请根据您当地的法规酌情使用")])],1)],1):e._e(),"replicate"===e.form["channel"]?t("el-form-item",{attrs:{label:"Token",prop:"replicate_token"}},[t("el-input",{attrs:{placeholder:"",size:"small"},model:{value:e.form["replicate_token"],callback:function(a){e.$set(e.form,"replicate_token",a)},expression:"form['replicate_token']"}}),t("p",[e._v("由Replicate提供的Midjourney接口，"),t("a",{staticClass:"text-primary",attrs:{href:"https://replicate.com/prompthero/openjourney",target:"_blank"}},[e._v("注册地址")])])],1):e._e(),"api2d"===e.form["channel"]?t("el-form-item",{attrs:{label:"ForwardKey",prop:"forwardkey"}},[t("el-input",{attrs:{placeholder:"API2D的接口密钥",size:"small"},model:{value:e.form["forwardkey"],callback:function(a){e.$set(e.form,"forwardkey",a)},expression:"form['forwardkey']"}}),t("p",[e._v("这是一个提供openai接口的第三方平台，"),t("a",{staticClass:"text-primary",attrs:{href:"https://api2d.com/r/199013",target:"_blank"}},[e._v("注册地址")])])],1):e._e(),"lxai"===e.form["channel"]?t("el-form-item",{attrs:{label:"灵犀Key",prop:"lxai_key"}},[t("el-input",{attrs:{placeholder:"灵犀AI的接口密钥",size:"small"},model:{value:e.form["lxai_key"],callback:function(a){e.$set(e.form,"lxai_key",a)},expression:"form['lxai_key']"}}),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:e.getLxaiBalance}},[e._v("查询余额")]),e.lxaiBalance?t("p",{staticStyle:{color:"#ff8800","font-size":"15px","font-weight":"bold"}},[e._v("总：$"+e._s(e.lxaiBalance.total_granted)+"，已用：$"+e._s(e.lxaiBalance.total_used)+"，剩余：$"+e._s(e.lxaiBalance.total_available))]):e._e(),t("p",[e._v("这是一家国内的AI接口，与openai计费规则一样，"),t("a",{staticClass:"text-primary",attrs:{href:"http://lingxi.znai8.cn",target:"_blank"}},[e._v("key下单地址")])])],1):e._e(),t("el-form-item",{attrs:{label:""}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(a){return e.doSubmit("drawForm")}}},[e._v("保 存")])],1)],1):e._e()],1),t("el-tab-pane",{attrs:{label:"图片存储配置",name:"storage"}},[e.form?t("el-form",{ref:"storageForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"180px"}},[t("el-form-item",{attrs:{label:"存储引擎",prop:"engine"}},[t("el-radio-group",{model:{value:e.form["engine"],callback:function(a){e.$set(e.form,"engine",a)},expression:"form['engine']"}},[t("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"local",size:"mini"}},[e._v("本地服务器")]),t("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"alioss",size:"mini"}},[e._v("阿里云OSS")]),t("el-radio",{attrs:{label:"txcos",size:"mini"}},[e._v("腾讯云COS")]),t("el-radio",{attrs:{label:"qiniu",size:"mini"}},[e._v("七牛云对象存储")])],1)],1),"alioss"===e.form["engine"]?t("div",[t("el-form-item",{attrs:{label:"存储区域",prop:"alioss_region"}},[t("el-select",{attrs:{size:"small"},model:{value:e.form["alioss_region"],callback:function(a){e.$set(e.form,"alioss_region",a)},expression:"form['alioss_region']"}},e._l(e.aliossRegions,(function(a,s){return t("el-option",{key:s,attrs:{label:a,value:s}},[e._v(e._s(a)+" ( "+e._s(s)+" ) ")])})),1)],1),t("el-form-item",{attrs:{label:"空间名称 Bucket",prop:"alioss_bucket"}},[t("el-input",{attrs:{placeholder:"空间名称 Bucket",size:"small"},model:{value:e.form["alioss_bucket"],callback:function(a){e.$set(e.form,"alioss_bucket",a)},expression:"form['alioss_bucket']"}})],1),t("el-form-item",{attrs:{label:"AccessKey ID",prop:"alioss_access_key_id"}},[t("el-input",{attrs:{placeholder:"AccessKey ID",size:"small"},model:{value:e.form["alioss_access_key_id"],callback:function(a){e.$set(e.form,"alioss_access_key_id",a)},expression:"form['alioss_access_key_id']"}})],1),t("el-form-item",{attrs:{label:"AccessKey Secret",prop:"alioss_access_key_secret"}},[t("el-input",{attrs:{placeholder:"AccessKey Secret",size:"small"},model:{value:e.form["alioss_access_key_secret"],callback:function(a){e.$set(e.form,"alioss_access_key_secret",a)},expression:"form['alioss_access_key_secret']"}})],1),t("el-form-item",{attrs:{label:"访问域名 Domain",prop:"alioss_domain"}},[t("el-input",{attrs:{placeholder:"访问域名 Domain，没绑定请留空",size:"small"},model:{value:e.form["alioss_domain"],callback:function(a){e.$set(e.form,"alioss_domain",a)},expression:"form['alioss_domain']"}}),t("p",[e._v("空间没绑定域名请留空，开头带http://或https://，结尾不带/")])],1)],1):e._e(),"txcos"===e.form["engine"]?t("div",[t("el-form-item",{attrs:{label:"存储区域",prop:"txcos_region"}},[t("el-select",{attrs:{size:"small"},model:{value:e.form["txcos_region"],callback:function(a){e.$set(e.form,"txcos_region",a)},expression:"form['txcos_region']"}},e._l(e.txcosRegions,(function(a,s){return t("el-option",{key:s,attrs:{label:a,value:s}},[e._v(e._s(a)+" ( "+e._s(s)+" ) ")])})),1)],1),t("el-form-item",{attrs:{label:"存储桶名称 Bucket",prop:"txcos_bucket"}},[t("el-input",{attrs:{placeholder:"存储桶名称 Bucket",size:"small"},model:{value:e.form["txcos_bucket"],callback:function(a){e.$set(e.form,"txcos_bucket",a)},expression:"form['txcos_bucket']"}})],1),t("el-form-item",{attrs:{label:"访问密钥 AccessID",prop:"txcos_secret_id"}},[t("el-input",{attrs:{placeholder:"访问密钥 AccessID",size:"small"},model:{value:e.form["txcos_secret_id"],callback:function(a){e.$set(e.form,"txcos_secret_id",a)},expression:"form['txcos_secret_id']"}})],1),t("el-form-item",{attrs:{label:"安全密钥 SecretKey",prop:"txcos_secret_key"}},[t("el-input",{attrs:{placeholder:"安全密钥 SecretKey",size:"small"},model:{value:e.form["txcos_secret_key"],callback:function(a){e.$set(e.form,"txcos_secret_key",a)},expression:"form['txcos_secret_key']"}})],1),t("el-form-item",{attrs:{label:"访问域名 Domain",prop:"txcos_domain"}},[t("el-input",{attrs:{placeholder:"访问域名 Domain，没绑定请留空",size:"small"},model:{value:e.form["txcos_domain"],callback:function(a){e.$set(e.form,"txcos_domain",a)},expression:"form['txcos_domain']"}}),t("p",[e._v("空间没绑定域名请留空，开头带http://或https://，结尾不带/")])],1)],1):e._e(),"qiniu"===e.form["engine"]?t("div",[t("el-form-item",{attrs:{label:"存储区域",prop:"qiniu_region"}},[t("el-select",{attrs:{size:"small"},model:{value:e.form["qiniu_region"],callback:function(a){e.$set(e.form,"qiniu_region",a)},expression:"form['qiniu_region']"}},e._l(e.qiniuRegions,(function(a,s){return t("el-option",{key:s,attrs:{label:a,value:s}},[e._v(e._s(a)+" ( "+e._s(s)+" ) ")])})),1)],1),t("el-form-item",{attrs:{label:"空间名称 Bucket",prop:"qiniu_bucket"}},[t("el-input",{attrs:{placeholder:"空间名称 Bucket",size:"small"},model:{value:e.form["qiniu_bucket"],callback:function(a){e.$set(e.form,"qiniu_bucket",a)},expression:"form['qiniu_bucket']"}})],1),t("el-form-item",{attrs:{label:"访问密钥 AccessID",prop:"qiniu_access_key"}},[t("el-input",{attrs:{placeholder:"访问密钥 AccessKey",size:"small"},model:{value:e.form["qiniu_access_key"],callback:function(a){e.$set(e.form,"qiniu_access_key",a)},expression:"form['qiniu_access_key']"}})],1),t("el-form-item",{attrs:{label:"安全密钥 SecretKey",prop:"qiniu_secret_key"}},[t("el-input",{attrs:{placeholder:"安全密钥 SecretKey",size:"small"},model:{value:e.form["qiniu_secret_key"],callback:function(a){e.$set(e.form,"qiniu_secret_key",a)},expression:"form['qiniu_secret_key']"}})],1),t("el-form-item",{attrs:{label:"访问域名 Domain",prop:"qiniu_domain"}},[t("el-input",{attrs:{placeholder:"访问域名 Domain，没绑定请留空",size:"small"},model:{value:e.form["qiniu_domain"],callback:function(a){e.$set(e.form,"qiniu_domain",a)},expression:"form['qiniu_domain']"}}),t("p",[e._v("空间没绑定域名请留空，开头带http://或https://，结尾不带/")])],1)],1):e._e(),t("el-form-item",{attrs:{label:""}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(a){return e.doSubmit("storageForm")}}},[e._v("保 存")])],1)],1):e._e()],1)],1)],1)},i=[],o=(t("7b4c"),t("90e7")),r={data:function(){return{tabName:"draw",form:null,balance:null,lxaiBalance:null,aliossRegions:{"oss-cn-hangzhou.aliyuncs.com":"华东1（杭州）","oss-cn-shanghai.aliyuncs.com":"华东2（上海）","oss-cn-nanjing.aliyuncs.com":"华东5（南京本地地域）","oss-cn-fuzhou.aliyuncs.com":"华东6（福州本地地域）","oss-cn-qingdao.aliyuncs.com":"华北1（青岛）","oss-cn-beijing.aliyuncs.com":"华北2（北京）","oss-cn-zhangjiakou.aliyuncs.com":"华北3（张家口）","oss-cn-huhehaote.aliyuncs.com":"华北5（呼和浩特）","oss-cn-wulanchabu.aliyuncs.com":"华北6（乌兰察布）","oss-cn-shenzhen.aliyuncs.com":"华南1（深圳）","oss-cn-heyuan.aliyuncs.com":"华南2（河源）","oss-cn-guangzhou.aliyuncs.com":"华南3（广州）","oss-cn-chengdu.aliyuncs.com":"西南1（成都）","oss-cn-hongkong.aliyuncs.com":"中国（香港）","oss-us-west-1.aliyuncs.com":"美国（硅谷）","oss-us-east-1.aliyuncs.com":"美国（弗吉尼亚）","oss-ap-northeast-1.aliyuncs.com":"日本（东京）","oss-ap-northeast-2.aliyuncs.com":"韩国（首尔）","oss-ap-southeast-1.aliyuncs.com":"新加坡","oss-ap-southeast-2.aliyuncs.com":"澳大利亚（悉尼）","oss-ap-southeast-3.aliyuncs.com":"马来西亚（吉隆坡）","oss-ap-southeast-5.aliyuncs.com":"印度尼西亚（雅加达）","oss-ap-southeast-6.aliyuncs.com":"菲律宾（马尼拉）","oss-ap-southeast-7.aliyuncs.com":"泰国（曼谷）","oss-ap-south-1.aliyuncs.com":"印度（孟买）","oss-eu-central-1.aliyuncs.com":"德国（法兰克福）","oss-eu-west-1.aliyuncs.com":"英国（伦敦）","oss-me-east-1.aliyuncs.com":"阿联酋（迪拜）","oss-rg-china-mainland.aliyuncs.com":"无地域属性（中国内地）"},txcosRegions:{"ap-beijing-1":"中国大陆 北京一区","ap-beijing":"中国大陆 北京","ap-nanjing":"中国大陆 南京","ap-shanghai":"中国大陆 上海","ap-guangzhou":"中国大陆 广州","ap-chengdu":"中国大陆 成都","ap-chongqing":"中国大陆 重庆","ap-shenzhen-fsi":"中国大陆 金融云 深圳金融","ap-shanghai-fsi":"中国大陆 金融云 上海金融","ap-beijing-fsi":"中国大陆 金融云 北京金融","ap-hongkong":"亚太地区 中国香港","ap-singapore":"亚太地区 新加坡","ap-mumbai":"亚太地区 孟买","ap-jakarta":"亚太地区 雅加达","ap-seoul":"亚太地区 首尔","ap-bangkok":"亚太地区 曼谷","ap-tokyo":"亚太地区 东京","na-siliconvalley":"北美地区 硅谷","na-ashburn":"北美地区 弗吉尼亚","na-toronto":"北美地区 多伦多","sa-saopaulo":"北美地区 圣保罗","eu-frankfurt":"欧洲地区 法兰克福","eu-moscow":"欧洲地区 莫斯科"},qiniuRegions:{"up.qiniup.com":"华东-浙江","up-cn-east-2.qiniup.com":"华东-浙江2","up-z1.qiniup.com":"华北-河北","up-z2.qiniup.com":"华南-广东","up-na0.qiniup.com":"北美-洛杉矶","up-as0.qiniup.com":"亚太-新加坡","up-ap-northeast-1.qiniup.com":"亚太-首尔"},formRules:{apikey_type:[{required:!0,message:"此项必填",trigger:"blur"}],apikey:[{required:!0,message:"此项必填",trigger:"blur"}],channel:[{required:!0,message:"此项必填",trigger:"blur"}],replicate_token:[{required:!0,message:"此项必填",trigger:"blur"}],forwardkey:[{required:!0,message:"此项必填",trigger:"blur"}],lxai_key:[{required:!0,message:"此项必填",trigger:"blur"}],engine:[{required:!0,message:"此项必填",trigger:"blur"}],alioss_region:[{required:!0,message:"此项必填",trigger:"blur"}],alioss_bucket:[{required:!0,message:"此项必填",trigger:"blur"}],alioss_access_key_id:[{required:!0,message:"此项必填",trigger:"blur"}],alioss_access_key_secret:[{required:!0,message:"此项必填",trigger:"blur"}],txcos_region:[{required:!0,message:"此项必填",trigger:"blur"}],txcos_bucket:[{required:!0,message:"此项必填",trigger:"blur"}],txcos_secret_id:[{required:!0,message:"此项必填",trigger:"blur"}],txcos_secret_key:[{required:!0,message:"此项必填",trigger:"blur"}],qiniu_region:[{required:!0,message:"此项必填",trigger:"blur"}],qiniu_bucket:[{required:!0,message:"此项必填",trigger:"blur"}],qiniu_access_key:[{required:!0,message:"此项必填",trigger:"blur"}],qiniu_secret_key:[{required:!0,message:"此项必填",trigger:"blur"}],qiniu_domain:[{required:!0,message:"此项必填",trigger:"blur"}]}}},mounted:function(){this.getSetting()},methods:{getSetting:function(){var e=this;Object(o["d"])({name:this.tabName}).then((function(a){e.form=a.data}))},switchTab:function(){this.getSetting()},doSubmit:function(e){var a=this;this.$refs[e].validate((function(e){e?Object(o["e"])({name:a.tabName,data:JSON.stringify(a.form)}).then((function(e){a.getSetting(),a.$message.success(e.message)})):a.$message.error("请填写必填项")}))},getBalance:function(){var e=this;Object(o["a"])({apikey:this.form.apikey}).then((function(a){e.balance=a.data}))},getLxaiBalance:function(){var e=this;Object(o["c"])({apikey:this.form.lxai_key}).then((function(a){e.lxaiBalance=a.data}))}}},l=r,n=(t("0e1a"),t("4c87"),t("3427")),c=Object(n["a"])(l,s,i,!1,null,"a0da11e0",null);a["default"]=c.exports}}]);
(function(e){function t(t){for(var a,r,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},i={app:0},s=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-03c264f4":"546826ec","chunk-08a5b76c":"c8b67b20","chunk-11f28ac7":"0bb949a5","chunk-2b4210b4":"65d81c0b","chunk-2d0c0fe6":"3884f1a2","chunk-2d22bd92":"8e0b57e5"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-03c264f4":1,"chunk-08a5b76c":1,"chunk-11f28ac7":1,"chunk-2b4210b4":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-03c264f4":"a1abdde6","chunk-08a5b76c":"1f3b718f","chunk-11f28ac7":"5cf7ecce","chunk-2b4210b4":"b00e9dc7","chunk-2d0c0fe6":"31d6cfe0","chunk-2d22bd92":"31d6cfe0"}[e]+".css",i=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===a||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],f.parentNode.removeChild(f),n(s)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1aa0":function(e,t,n){},"338b":function(e,t,n){"use strict";n.r(t),n.d(t,"m",(function(){return a}));var a={nav:{unreceive:"未接受列表",received:"待处理列表",history:"历史查询",manage:"账号管理",lang:"To English"},list:{time:"提交时间",identity:"identity",country:"国家",district:"司法区",claim:"claim",order:"接单",prev:"前一页",next:"下一页",num:"第",page:"页",detail:"订单详情"},userinfo:{title:"详细信息",birthday:"生日",country:"国籍",residenceCountry:"居住国",idcardNumber:"身份证件号码",passportNumber:"护照号码",phoneNumber:"手机号",gender:"性别",email:"邮箱",taxId:"纳税号",ssn:"社保号",address:"地址",postalCode:"邮编",financialProfile:"金融材料类别",buyer:"合格购买人",investor:"合格投资人"},right:{state:"获取kyc状态",history:"kyc调用记录",issue:"颁发证书",refuse:"拒绝颁发证书",check:"正在审核中..."},file:{fileId:"文件ID",userId:"用户ID",type:"资料类型",name:"文件名称",ext:"扩展类型",newPage:"浏览文件",download:"下载文件",upload:"提交kyc"},alert:{success:"接单成功",orderFail:"接单失败",pageFail:"获取数据总数失败",listFail:"获取列表数据失败",userInfoFail:"请求用户信息失败",historyFail:"记录调用失败",issueSuccess:"颁发成功",issueFail:"颁发失败",refuseSuccess:"拒绝颁发成功",refuseFail:"拒绝颁发失败"}}},"3a71":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s=n("f1e2"),o={components:{unReceivedList:s["default"]}},c=o,u=(n("5c0b"),n("2877")),l=Object(u["a"])(c,r,i,!1,null,null,null),d=l.exports,f=n("8c4f"),h={name:"processingDetail",path:"/processingDetail/:id",component:function(){return n.e("chunk-2b4210b4").then(n.bind(null,"fc94"))}},p={name:"unReceivedList",path:"/unReceivedList",component:function(){return Promise.resolve().then(n.bind(null,"f1e2"))}},m={name:"history",path:"/history",component:function(){return n.e("chunk-2d0c0fe6").then(n.bind(null,"43c4"))}},v={name:"management",path:"/management",component:function(){return n.e("chunk-2d22bd92").then(n.bind(null,"f15f"))}},g={name:"processingList",path:"/processingList",component:function(){return n.e("chunk-11f28ac7").then(n.bind(null,"a538"))}},b={name:"newPage",path:"/newPage",component:function(){return n.e("chunk-03c264f4").then(n.bind(null,"bef6"))}},y={name:"login",path:"/login",component:function(){return n.e("chunk-08a5b76c").then(n.bind(null,"dd7b"))}};a["a"].use(f["a"]);var _=new f["a"]({routes:[{path:"/",redirect:"Login"},h,p,v,m,g,b,y]}),w=n("2f62");a["a"].use(w["a"]);var k=new w["a"].Store({state:{},mutations:{},actions:{}}),P=(n("1aa0"),n("2427")),$=n.n(P),C=n("4ba4");a["a"].config.productionTip=!1,a["a"].prototype.$http=$.a,a["a"].use(C["a"]);var S=new C["a"]({locale:"en-CN",messages:{"zh-CN":n("338b"),"en-US":n("c06f")},silentTranslationWarn:!0});new a["a"]({router:_,store:k,i18n:S,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("e332"),r=n.n(a);r.a},"867a":function(e,t,n){"use strict";var a="http://api.provider.kyc.idhub.network";t["a"]={baseURL:a}},c06f:function(e,t,n){"use strict";n.r(t),n.d(t,"m",(function(){return a}));var a={nav:{unreceive:"Unreceived List",received:"Processing List",history:"History",manage:"Management",lang:"切换至中文"},list:{time:"Submit Time",identity:"Identity",country:"Country",district:"Judicial District",claim:"Claim",order:"Order Receiving",prev:"Previous",next:"Next",num:"The",page:"page",detail:"Order Detail"},userinfo:{title:"Detail",birthday:"Date of Birth",country:"Nationality",residenceCountry:"Country of Residence",idcardNumber:"Government Issued Identification Number",passportNumber:"Passport Number",phoneNumber:"Phone Number",gender:"Gender",email:"eMail",taxId:"TaxID",ssn:"SSN",address:"Address",postalCode:"postalCode",financialProfile:"financialProfile",buyer:"buyerType",investor:"investorType"},right:{state:"Gets kyc status",history:"Kyc call record",issue:"Issue claim",refuse:"Refuse claim",check:"be reviewing..."},file:{fileId:"FileID ",userId:"UserID ",type:"FileType",name:"FileName",ext:"FileExt",newPage:"Browse the file",download:"Download the file",upload:"Submit kyc"},alert:{success:"Order received successfully!",orderFail:"Failed to accept the order!",pageFail:"Failed to get the size of data",listFail:"Failed to get list data",userInfoFail:"Failed to get userinfo",historyFail:"Record call failure",issueSuccess:"Claim issued successfully",issueFail:"Failure to issue Claim",refuseSuccess:"Refusal issued successfully",refuseFail:"Refusal to issue failure"}}},c9b9:function(e,t,n){},d070:function(e,t,n){"use strict";var a=n("c9b9"),r=n.n(a);r.a},dae9:function(e,t,n){"use strict";var a=n("3a71"),r=n.n(a);r.a},e332:function(e,t,n){},ee8d:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navigator"},[n("ul",{staticClass:"nav nav-tabs"},[n("li",{staticClass:"active",attrs:{id:"unReceivedList",role:"presentation"},on:{click:function(t){return e.toggle(t)}}},[n("a",{attrs:{href:"#"}},[e._v(e._s(e.$t("m.nav.unreceive")))])]),n("li",{attrs:{id:"processingList",role:"presentation"},on:{click:function(t){return e.toggle(t)}}},[n("a",{attrs:{href:"#"}},[e._v(e._s(e.$t("m.nav.received")))])]),n("li",{attrs:{id:"history",role:"presentation"},on:{click:function(t){return e.toggle(t)}}},[n("a",{attrs:{href:"#"}},[e._v(e._s(e.$t("m.nav.history")))])]),n("li",{attrs:{id:"management",role:"presentation"},on:{click:function(t){return e.toggle(t)}}},[n("a",{attrs:{href:"#"}},[e._v(e._s(e.$t("m.nav.manage")))])]),n("li",{attrs:{id:"lang",role:"presentation"},on:{click:function(t){return e.switchLang()}}},[n("a",{attrs:{href:"#"}},[e._v(e._s(e.$t("m.nav.lang")))])])])])},r=[],i={methods:{toggle:function(e){var t=e.currentTarget.getAttribute("id");this.$router.push({path:t})},switchLang:function(){var e=window.confirm("是否确定切换语言？");if(e){var t=this.$i18n.locale;this.$i18n.locale="zh-CN"===t?"en-US":"zh-CN"}}}},s=i,o=(n("d070"),n("2877")),c=Object(o["a"])(s,a,r,!1,null,null,null);t["a"]=c.exports},f1e2:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list"},[n("Nav"),n("table",{staticClass:"table table-hover"},[n("thead",[n("tr",[n("th",[e._v(e._s(e.$t("m.list.time")))]),n("th",[e._v(e._s(e.$t("m.list.identity")))]),n("th",[e._v(e._s(e.$t("m.list.country")))]),n("th",[e._v(e._s(e.$t("m.list.district")))]),n("th",[e._v(e._s(e.$t("m.list.claim")))]),n("th")])]),n("tbody",e._l(e.unReceive,(function(t,a){return n("tr",{key:t.id},[n("td",[e._v(e._s(t.createTime))]),n("td",[e._v(e._s(t.order.identity))]),n("td",[e._v(e._s(t.order.country))]),n("td",[e._v(e._s(t.order.jurisdiction))]),n("td",[e._v(e._s(t.order.claimType))]),n("td",[n("button",{staticClass:"btn btn-success float",attrs:{type:"button",id:a,orderId:t.order.id},on:{click:function(t){return e.receive(t)}}},[e._v(e._s(e.$t("m.list.order")))])])])})),0)]),n("nav",{attrs:{"aria-label":"..."}},[n("ul",{staticClass:"pager"},[n("li",{attrs:{id:"prev"}},[n("a",{on:{click:e.prev}},[e._v(e._s(e.$t("m.list.prev")))])]),n("li",{attrs:{id:"next"}},[n("a",{on:{click:e.next}},[e._v(e._s(e.$t("m.list.next")))])])])]),n("div",{attrs:{id:"page"}},[e._v(e._s(e.$t("m.list.num"))),n("span",[e._v(e._s(e.nowPage))]),e._v("/"),n("span",[e._v(e._s(Math.ceil(this.totle/e.pageSize)?Math.ceil(this.totle/e.pageSize):1))]),e._v(e._s(e.$t("m.list.page")))])],1)},r=[],i=n("ee8d"),s=n("867a"),o={data:function(){return{unReceive:"",orderId:"",totle:0,nowPage:1,maxPage:1,pageSize:6}},components:{Nav:i["a"]},methods:{prev:function(){this.nowPage>1?this.nowPage=this.nowPage-1:(this.nowPage=1,document.getElementById("prev").setAttribute("class","disabled"))},next:function(){this.nowPage<this.maxPage?this.nowPage=this.nowPage+1:(this.nowPage=this.maxPage,document.getElementById("next").setAttribute("class","disabled"))},receive:function(e){var t=this;this.orderId=e.currentTarget.getAttribute("orderId"),this.$http.get(s["a"].baseURL+"/order/receive",{params:{orderId:this.orderId}}).then((function(e){t.unReceive=e.data.data,1==e.data.success&&(alert(t.$t("m.alert.success")),setTimeout((function(){window.location.reload()}),500)),0==e.data.success&&alert(t.$t("m.alert.orderFail"))}))}},created:function(){var e=this;this.$http.get(s["a"].baseURL+"/order/size",{params:{state:"unreceived"}}).then((function(t){1==t.data.success?(e.totle=t.data.data,e.maxPage=Math.ceil(e.totle/e.pageSize)?Math.ceil(e.totle/e.pageSize):1):alert(e.$t("m.alert.pageFail"))})),this.$http.get(s["a"].baseURL+"/order/list",{params:{state:"unreceived",startPage:this.nowPage-1,pageSize:this.pageSize}}).then((function(t){1==t.data.success?e.unReceive=t.data.data:alert(e.$t("m.alert.listFail"))}))},mounted:function(){for(var e=document.getElementsByClassName("nav")[0].children,t=0;t<e.length;t++)e[t].setAttribute("class","");document.getElementById("unReceivedList").setAttribute("class","active")},watch:{nowPage:function(){var e=this;this.$http.get(s["a"].baseURL+"/order/list",{params:{state:"unreceived",startPage:this.nowPage-1,pageSize:this.pageSize}}).then((function(t){1==t.data.success?e.unReceive=t.data.data:alert(e.$t("m.alert.listFail"))}))}}},c=o,u=(n("dae9"),n("2877")),l=Object(u["a"])(c,a,r,!1,null,null,null);t["default"]=l.exports}});
//# sourceMappingURL=app.3b371709.js.map
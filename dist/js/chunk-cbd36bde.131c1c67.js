(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cbd36bde"],{"0c6e":function(t,e,s){"use strict";var i=s("daf1"),a=s.n(i);a.a},"143d":function(t,e,s){},"28db":function(t,e,s){"use strict";var i=s("d096"),a=s.n(i);a.a},"31a3":function(t,e,s){},5964:function(t,e,s){t.exports=s.p+"img/page.f7264e53.png"},"81d0":function(t,e,s){},c918:function(t,e,s){"use strict";var i=s("143d"),a=s.n(i);a.a},d096:function(t,e,s){},daf1:function(t,e,s){},e425:function(t,e,s){"use strict";var i=s("81d0"),a=s.n(i);a.a},f549:function(t,e,s){"use strict";var i=s("31a3"),a=s.n(i);a.a},fc94:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail"},[t._m(0),s("Left",{ref:"brother",attrs:{id:t.id,identity:t.identity,claimType:t.claimType,processingMsg:t.msg}}),s("Right",{attrs:{orderId:t.orderId}})],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-header"},[s("h1",[t._v("详细信息")])])}],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top"},[s("div",{attrs:{id:"box"}},[s("div",{attrs:{id:"top"}}),s("div",{attrs:{id:"bottom"}},[s("div",{attrs:{id:"msg"}},[s("div",{attrs:{id:"username"}},[t._v("\n                    "+t._s(t.processingMsg.archive.identityInfo.name.firstName)+"\n                    "+t._s(t.processingMsg.archive.identityInfo.name.middleName)+"\n                    "+t._s(t.processingMsg.archive.identityInfo.name.lastName)+"\n                ")]),s("span",[t._v(t._s(t.claimType))]),s("br"),s("span",[t._v(t._s(t.identity))])])]),t._m(0)]),s("div",{staticClass:"info",attrs:{id:"textInfo"}},[s("ul",[s("li",{staticStyle:{"margin-top":"20px"}},[s("span",[t._v("birthday")]),t._v(t._s(t.processingMsg.archive.identityInfo.birthday))]),s("li",[s("span",[t._v("country")]),t._v(t._s(t.processingMsg.archive.identityInfo.country))]),s("li",[s("span",[t._v("residenceCountry")]),t._v(t._s(t.processingMsg.archive.identityInfo.residenceCountry))]),s("li",[s("span",[t._v("idcardNumber")]),t._v(t._s(t.processingMsg.archive.identityInfo.idcardNumber))]),s("li",[s("span",[t._v("passportNumber")]),t._v(t._s(t.processingMsg.archive.identityInfo.passportNumber))]),s("li",[s("span",[t._v("phoneNumber")]),t._v(t._s(t.processingMsg.archive.identityInfo.phoneNumber))]),s("li",[s("span",[t._v("gender")]),t._v(t._s(t.processingMsg.archive.identityInfo.gender))]),s("li",[s("span",[t._v("email")]),t._v(t._s(t.processingMsg.archive.basicInfo.email))]),s("li",[s("span",[t._v("taxId")]),t._v(t._s(t.processingMsg.archive.basicInfo.taxId))]),s("li",[s("span",[t._v("ssn")]),t._v(t._s(t.processingMsg.archive.basicInfo.ssn))]),s("li",[s("span",[t._v("address")]),t._l(t.processingMsg.archive.identityInfo.address.addressSequence,(function(e,i){return s("p",{key:i},[s("span",{staticClass:"address"},[t._v(t._s(e.name)+":")]),t._v(t._s(e.value)+"\n                ")])})),s("p",[s("span",{staticClass:"address"},[t._v("postalCode:")]),t._v(t._s(t.processingMsg.archive.identityInfo.address.postalCode))])],2),s("li",[s("span",[t._v("financialProfile")]),s("p",[s("span",{staticClass:"address"},[t._v("buyerType:")]),t._v(t._s(t.financialProfile.archive.financialProfile.buyerType))]),s("p",[s("span",{staticClass:"address"},[t._v("investorType:")]),t._v(t._s(t.financialProfile.archive.financialProfile.investorType))])])])]),s("div",{staticClass:"info",attrs:{id:"fileInfo"}},[s("ul",{ref:"ul1"},t._l(t.processingMsg.materials,(function(e,i){return s("li",{key:i,on:{click:function(e){return t.showFile(i)}}},[s("div",[t._m(1,!0),s("span",[t._v(t._s(e.type))])])])})),0)]),s("file",{attrs:{id:"file",message:t.processingMsg,userID:t.identity,item:t.fileIndex}})],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"img"}},[s("img",{attrs:{src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3987282417,3624059467&fm=26&gp=0.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("img",{attrs:{src:s("5964"),alt:""}})])}],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"file"},[s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[s("span",{attrs:{id:"close"},on:{click:t.close}},[t._v("X")])]),s("div",{staticClass:"panel-body"},[s("div",{staticClass:"content"},[s("ul",[s("li",[s("span",[t._v("文件ID:")]),s("span",[t._v(t._s(t.message.materials[t.item].id))])]),s("li",[s("span",[t._v("用户ID:")]),s("span",[t._v(t._s(t.userID))])]),s("li",[s("span",[t._v("资料类型：")]),s("span",[t._v(t._s(t.message.materials[t.item].type))])]),s("li",[s("span",[t._v("文件名称：")]),s("span",[t._v(t._s(t.message.materials[t.item].name))])]),s("li",[s("span",[t._v("扩展类型：")]),s("span",[t._v(t._s(t.message.materials[t.item].ext))])])])]),s("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.newPage}},[t._v("浏览文件")]),s("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.download}},[t._v("下载文件")]),s("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.upload}},[t._v("提交kyc")])])])])},c=[],l=s("867a"),d={data:function(){return{id:0,ext:""}},props:["state","message","userID","item"],methods:{newPage:function(){this.id=this.message.materials[this.item].id,this.ext=this.message.materials[this.item].ext;var t=this.$router.resolve({path:"/newPage",query:{materialId:this.id}}),e=t.href;window.open(e,"_blank")},upload:function(){},download:function(){var t=this.message.materials[this.item].id,e=this.message.materials[this.item].ext,s=new XMLHttpRequest;s.open("GET",l["a"].baseURL+"/order/material_stream?id="+this.id,!0),s.responseType="blob",s.onload=function(i){var a=s.response,n=document.createElement("a");n.download=t+"."+e,n.style.display="none";var r=new Blob([a]);n.href=URL.createObjectURL(r),document.body.appendChild(n),n.click(),document.body.removeChild(n)},s.send()},close:function(){document.getElementsByClassName("file")[0].style.display="none"}}},p=d,u=(s("e425"),s("2877")),f=Object(u["a"])(p,o,c,!1,null,null,null),v=f.exports,y={data:function(){return{buyerType:"",investorType:"",fileIndex:0,financialProfile:""}},components:{file:v},props:["identity","claimType","processingMsg"],methods:{showFile:function(t){this.fileIndex=t,console.log(document.getElementById("file").getAttribute("item")),document.getElementById("file").style.display="block"}},watch:{processingMsg:function(t){this.financialProfile=t,this.financialProfile.archive.financialProfile.buyerType||(this.financialProfile.archive.financialProfile.buyerType=null),this.financialProfile.archive.financialProfile.investorType||(this.financialProfile.archive.financialProfile.investorType=null)}}},m=y,h=(s("28db"),Object(u["a"])(m,n,r,!1,null,null,null)),_=h.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"right"},[s("div",{attrs:{id:"claimBox"}},[s("div",{attrs:{id:"header"}}),s("div",{attrs:{id:"content"}},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.kyc}},[t._v("获取kyc状态")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.kycState}},[t._v("kyc调用记录")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.agree}},[t._v("颁发证书")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.refuse}},[t._v("拒绝颁发证书")])])]),s("popup",{attrs:{state:t.state,id:"son"}}),s("kycHistory",{attrs:{kycHistory:t.kycHistory,id:"history"}})],1)},b=[],I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"popup"},[s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[s("span",[t._v("kyc状态")]),s("span",{attrs:{id:"close"},on:{click:t.close}},[t._v("X")])]),s("div",{staticClass:"panel-body"},[t._v("kyc")])])])},k=[],C={data:function(){return{kState:""}},props:["state"],methods:{colse:function(){document.getElementsByClassName("popup")[0].style.display="none"}},watch:{state:function(t){this.kState=t,document.getElementsByClassName("panel-body")[0].innerHTML=this.kState}}},x=C,M=(s("0c6e"),Object(u["a"])(x,I,k,!1,null,null,null)),w=M.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"historyBox"},[s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[s("span",[t._v("kyc调用记录")]),s("span",{attrs:{id:"closeHistory"},on:{click:t.close}},[t._v("X")])]),s("div",{staticClass:"panel-body"},[s("ul",t._l(t.kycHistory,(function(e,i){return s("li",{key:i},[t._v("\n                    "+t._s(e)+"\n                ")])})),0)])])])},E=[],$={props:["kycHistory"],methods:{close:function(){document.getElementsByClassName("historyBox")[0].style.display="none"}}},P=$,H=(s("f549"),Object(u["a"])(P,T,E,!1,null,null,null)),N=H.exports,B={components:{popup:w,kycHistory:N},data:function(){return{kycHistory:[],state:""}},props:["orderId"],methods:{kyc:function(){var t=this;this.$http.get(l["a"].baseURL+"/idm/evaluate",{params:{orderId:this.orderId}}).then((function(e){1==e.data.success&&null==e.data.data&&alert("正在审核中..."),1==e.data.success&&null!=e.data.data&&(t.state=e.data.data,document.getElementById("son").style.display="block")}))},kycState:function(){var t=this;this.$http.get(l["a"].baseURL+"/order/interactions",{params:{orderId:this.orderId}}).then((function(e){1==e.data.success?(t.kycHistory=e.data.data,document.getElementById("history").style.display="block"):console.log("记录调用失败")}))},agree:function(){this.$http.get(l["a"].baseURL+"/order/issue_claim",{params:{orderId:this.orderId}}).then((function(t){1==t.data.success?alert("颁发成功"):alert("颁发失败")}))},refuse:function(){console.log(this.orderId),this.$http.get(l["a"].baseURL+"/order/refuse_claim",{params:{orderId:this.orderId}}).then((function(t){1==t.data.success?alert("已拒绝颁发"):alert("拒绝颁发失败")}))}}},L=B,R=(s("c918"),Object(u["a"])(L,g,b,!1,null,null,null)),j=R.exports,S={data:function(){return{id:"",identity:"",claimType:"",orderId:"",msg:[]}},components:{Left:_,Right:j},mounted:function(){var t=this;this.id=this.$route.query.id,this.identity=this.$route.query.identity,this.claimType=this.$route.query.claimType,this.orderId=this.$route.query.orderId,this.$http.get(l["a"].baseURL+"/order/identity_archive",{params:{identity:this.identity}}).then((function(e){1==e.data.success?t.msg=e.data.data.data:alert("请求用户信息失败")}))}},U=S,q=Object(u["a"])(U,i,a,!1,null,null,null);e["default"]=q.exports}}]);
//# sourceMappingURL=chunk-cbd36bde.131c1c67.js.map
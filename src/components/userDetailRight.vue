<template>
    <div class="right">
        <div id="claimBox">
            <div id="header"></div>
            <div id="content">
                <button @click="kyc" type="button" class="btn btn-primary">获取kyc状态</button>
                <button @click="kycState" type="button" class="btn btn-primary">kyc调用记录</button>
                <button @click="agree" type="button" class="btn btn-primary">颁发证书</button>
                <button @click="refuse" type="button" class="btn btn-primary">拒绝颁发证书</button>
            </div>
        </div>
        <popup :state="state" id="son"></popup>
        <kycHistory :kycHistory="kycHistory" id="history"></kycHistory>
    </div>
</template>
<style lang="scss">
    .right{
        margin-top: 40px;
        position:fixed;
        top:70px;
        #claimBox{
            width:300px;
            height:350px;
            background:#fff;
            margin-left: 890px;
            box-shadow: 2px 3px 4px #ccc;
            #header{
                width:300px;
                height:50px;
                background:url("../assets/bg.jpg");
                background-size: 100%;
            }
            #content{
                width:300px;
                height:300px;
                background: #fff;
                text-align: center;
                padding:30px 20px 15px 20px;
                border:1px solid #ccc;
                button{
                    display:inline-block;
                    width:220px;
                    height:40px;
                    margin-top: 15px;
                    background:#4682B4;
                    box-shadow: 3px 4px 5px LightSlateGray;
                }
            }
        }
    }
</style>
<script>
import url from "../modules/baseURL"
import popup from "../components/popUp"
import kycHistory from "../components/kycHistory"

export default {
    components:{
        popup,
        kycHistory
    },
    data(){
        return {
            kycHistory:[],
            state:""
        }
    },
    props:["orderId"],
    methods:{
        kyc(){
            //kyc状态接口idm evalute
            this.$http.get(url.baseURL+"/idm/evaluate",{
                params:{
                    orderId:this.orderId
                }
            }).then(res=>{
                if(res.data.success == true && res.data.data == null){
                   alert("正在审核中...");
                }
                if(res.data.success == true && res.data.data != null){
                    this.state = res.data.data;
                    //加一个弹窗展示
                    document.getElementById("son").style.display = "block";
                }
            })
        },
        kycState(){
            //kyc调用记录接口 order interactions
            this.$http.get(url.baseURL+"/order/interactions",{
                params:{
                    orderId:this.orderId
                }
            }).then(res=>{
                if(res.data.success == true){
                   this.kycHistory = res.data.data;
                   document.getElementById("history").style.display = "block";
                }else{
                    console.log("记录调用失败");
                }
            })
        },
        agree(){
            this.$http.get(url.baseURL+"/order/issue_claim",{
                params:{
                    orderId:this.orderId
                }
            }).then(res=>{
                if(res.data.success == true){
                    alert("颁发成功")
                }else{
                    alert("颁发失败")
                }
            })
        },
        refuse(){
            console.log(this.orderId);
            this.$http.get(url.baseURL+"/order/refuse_claim",{
                params:{
                    orderId:this.orderId
                }
            }).then(res=>{
                if(res.data.success == true){
                    alert("已拒绝颁发")
                }else{
                    alert("拒绝颁发失败")
                }
            })
        }
    }
}
</script>
<template>
    <div class="detail">
        <div class="page-header">
            <h1>详细信息</h1>
        </div>
        <Left :id="id" :identity="identity" :claimType="claimType" :msg="msg" ref="brother"></Left>
        <Right :orderId="orderId"></Right>
    </div>
</template>
<style lang="scss">
    
</style>
<script>
import Left from "../components/userDetailTop"
import Right from "../components/userDetailRight"
import url from "../modules/baseURL"

export default {
    data(){
        return {
            id:"",
            identity:"",
            claimType:"",
            orderId:"",
            msg:[]
        }
    },
    components:{
        Left,Right
    },
    mounted(){
        this.id = this.$route.query.id;
        this.identity = this.$route.query.identity;
        this.claimType = this.$route.query.claimType;
        this.orderId = this.$route.query.orderId;
        
        this.$http.get(url.baseURL+"/order/identity_archive",{
            params:{
                identity:this.identity
            }
        }).then(res=>{
            if(res.data.success = true){
                this.msg = res.data.data.data;
            }
        })
    }
}
</script>
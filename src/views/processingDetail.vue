<template>
    <div class="detail">
        <div class="page-header">
            <h1>详细信息</h1>
        </div>
        <Left :id="id" :identity="identity" :claimType="claimType" :msg="msg"></Left>
        <Right></Right>
    </div>
</template>
<style lang="scss">
    
</style>
<script>
import Left from "../components/userDetailTop"
import Right from "../components/userDetailRight"
export default {
    data(){
        return {
            id:"",
            identity:"",
            claimType:"",
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
        
        this.$http.get("/api/order/identity_archive",{
            params:{
                identity:this.identity
            }
        }).then(res=>{
            if(res.status = 200){
                console.log(res.data.data.data);
                this.msg = res.data.data.data;
            }
        })
    }
}
</script>
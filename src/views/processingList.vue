<template>
    <div class="received">
        <Nav></Nav>
        <nav aria-label="...">
            <ul class="pager">
                <li><a href="#">前一页</a></li>
                <li><a href="#">下一页</a></li>
            </ul>
        </nav>
        <ul class="list-group">
            <li v-for="(item,index) in processing" :key="item.id" class="list-group-item">
                <span class="badge">{{item.order.claimType}}</span>
                <span>{{item.createTime}}</span>
                <span class="name">{{item.order.identity}}</span>
                <button 
                    type="button" 
                    class="btn btn-success" 
                    @click="toggle($event)" 
                    :id="index"
                    :identity="item.order.identity"
                    :claimType="item.order.claimType"
                >订单详情</button>
            </li>
        </ul>
        <div id="page">第<span>1</span>/<span>3</span>页</div>
    </div>
</template>
<style lang="scss">
    .received{
        nav{
            margin-top: 100px;
        }
        .name{
            padding:25px;
            color:#000;
            font-weight: 600;
        }
        .btn{
            padding:3px 12px;
            margin-left: 10px;
            font-size: 12px;
        }
        #page{
            float:right;
            margin-top: 30px;
            margin-right: 60px;
            span{
                padding:10px;
            }
        }
    }   
</style>
<script>
import Nav from "../components/navigator"
export default {
    data(){
        return {
            processing:"",
            identity:"",
            claimType:""
        }
    },
    components:{
        Nav
    },
    methods:{
        toggle($event){
            var identity = $event.currentTarget.getAttribute("identity");
            var claimType = $event.currentTarget.getAttribute("claimType");
            var path =  $event.currentTarget.getAttribute("id");
            
            this.$router.push({
                path:"processingDetail/"+path,
                query:{
                    id:path,
                    identity:identity,
                    claimType:claimType
                }
            });
        }
    },
    mounted(){
        //切换导航条活跃样式
        var arr = document.getElementsByClassName("nav")[0].children;
        for(var i=0;i<arr.length;i++){
                arr[i].setAttribute("class","")
            }
        document.getElementById("processingList").setAttribute("class","active");
    },
    created(){
        this.$http.get("/api/order/list",{
            params:{
                state:"processing",
                startPage:0,
                pageSize:6
            }
        }).then(res=>{
            this.processing = res.data.data;
        })
    }
}
</script>
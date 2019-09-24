<template>
    <div class="list">
        <Nav></Nav>
        <nav aria-label="...">
            <ul class="pager">
                <li><a href="#">前一页</a></li>
                <li><a href="#">下一页</a></li>
            </ul>
        </nav>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>提交时间 </th>
                    <th>identity</th>
                    <th>国家</th>
                    <th>司法区</th>
                    <th>claim</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in unReceive" :key="item.id">
                    <td>{{item.createTime}}</td>
                    <td>{{item.order.identity}}</td>
                    <td>{{item.order.country}}</td>
                    <td>{{item.order.jurisdiction}}</td>
                    <td>{{item.order.claimType}}</td>
                    <td><button type="button" class="btn btn-success float" @click="receive($event)" :id="index" :orderId="item.order.id">接单</button></td>
                </tr>
            </tbody>
        </table>
        <!-- <ul class="list-group">
            <li class="list-group-item" v-for="(item,index) in unReceive" :key="item.id">
                <button type="button" class="btn btn-success float" @click="receive($event)" :id="index">接单</button>
                <span class="badge float">{{item.order.claimType}}</span>
                <span>{{item.createTime}}</span>
                <span class="name">{{item.order.identity}}</span>
                <span class="country">{{item.order.country}}</span>
                <span class="jurisdiction">{{item.order.jurisdiction}}</span>
            </li>
        </ul> -->
        <div id="page">第<span>1</span>/<span>3</span>页</div>
    </div>
</template>
<style lang="scss">
    .list{
        nav{
            margin-top: 100px;
        }
        .list-group-item{
            position: relative;
            .name{
                padding:25px;
                color:#000;
                font-weight: 600;
            }
            .float{
                float:right;
            }
            .badge{
                position:absolute;
                top:10px;
                right:100px;
            }
            .btn{
                position:absolute;
                top:6px;
                right:20px;
                padding:3px 12px;
                margin-left: 20px;
                font-size: 12px;
            }
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
            unReceive:"",
            orderId:""
        }
    },
    components:{
        Nav
    },
    methods:{
        receive($event){
            this.orderId = $event.currentTarget.getAttribute("orderId");
            this.$http.get("/api/order/receive",{
                params:{
                    orderId:this.orderId
                }
            }).then(res=>{
                this.unReceive = res.data.data;
                if(res.status == 200){
                    alert("接单成功");
                }
            })
        }
    },
    created(){
        this.$http.get("/api/order/list",{
            params:{
                state:"unreceived",
                startPage:0,
                pageSize:6
            }
        }).then(res=>{
            this.unReceive = res.data.data;
        })
    },
    mounted(){
        //切换导航条活跃样式
        var arr = document.getElementsByClassName("nav")[0].children;
        for(var i=0;i<arr.length;i++){
                arr[i].setAttribute("class","")
            }
        document.getElementById("unReceivedList").setAttribute("class","active");
    },
}
</script>
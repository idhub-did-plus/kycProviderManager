<template>
    <div class="navigator">
        <ul class="nav nav-tabs">
            <li @click="toggle($event)" id="unReceivedList" role="presentation" class="active"><a href="#">未接受列表</a></li>
            <li @click="toggle($event)" id="processingList" role="presentation"><a href="#">待处理列表</a></li>
            <li @click="toggle($event)" id="history" role="presentation"><a href="#">历史查询</a></li>
            <li @click="toggle($event)" id="management" role="presentation"><a href="#">账号管理</a></li>
        </ul>
    </div>
</template>
<style lang="scss">
    .navigator{
        margin-top: 30px;
    }
</style>
<script>
export default {
    methods:{
        toggle($event){
            //路由跳转
            var path =  $event.currentTarget.getAttribute("id");
            this.$router.push({path:path});
        }
    }
}
</script>
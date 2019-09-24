<template>
    <div class="right">
        <div id="claimBox">
            <div id="header"></div>
            <div id="content">
                <button type="button" class="btn btn-primary">IDHub VIP</button>
                <button type="button" class="btn btn-primary">IDHub SVIP</button>
                <button type="button" class="btn btn-primary">SEC Accredited Investor</button>
                <button type="button" class="btn btn-primary">SEC Accredited Purchaser</button>
                <button type="button" class="btn btn-primary">ST Compliant Investor</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .right{
        margin-top: 40px;
        #claimBox{
            width:300px;
            height:400px;
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
                height:350px;
                background: #fff;
                text-align: center;
                padding:50px 20px 15px 20px;
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
export default {

}
</script>
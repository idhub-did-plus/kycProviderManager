<template>
    <div class="file">
        <div class="panel panel-default">
            <div class="panel-heading">
                <span id="close" @click="close">X</span>
            </div>
            <div class="panel-body">
                <div class="content">
                    <ul>
                        <li><span>文件ID:</span><p>{{message.materials[item].id}}</p></li>
                        <li><span>用户ID:</span><span>{{userID}}</span></li>
                        <li><span>资料类型：</span><span>{{message.materials[item].type}}</span></li>
                        <li><span>文件名称：</span><span>{{message.materials[item].name}}</span></li>
                        <li><span>扩展类型：</span><span>{{message.materials[item].ext}}</span></li>
                    </ul>
                </div>
                <button type="button" class="btn btn-default" @click="newPage">浏览文件</button>
                <button type="button" class="btn btn-default" @click="download">下载文件</button>
                <button type="button" class="btn btn-default" @click="upload">提交kyc</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .file{
        display: none;
        .panel{
            position: fixed;
            z-index:10;
            left:50%;
            top:50%;
            margin-left: -300px;
            margin-top: -240px;
            width:600px;
            height:400px;
            .panel-heading{
                overflow: hidden;
                span{
                    float: right;
                    cursor: pointer;
                }
            }
            .panel-body{
                padding:20px;
                .content{
                    padding:20px;
                    li{
                        padding:4px;
                        margin-top: 5px;
                        span{
                            padding:8px;
                        }
                    }
                    p{
                        padding:8px;
                        word-break:break-all;
                    }
                }
                button{
                    position: absolute;
                    bottom: 30px;
                } 
                button:first-of-type{
                    right:270px;
                }
                button:nth-of-type(2){
                    right:150px;
                }
                button:nth-of-type(3){
                    right:40px;
                }
            }
        }
    }
</style>
<script>
import baseURL from '../modules/baseURL';
import url from "../modules/baseURL"

export default {
    data(){
        return {
            id:0,
            ext:""
        }
    },
    props:["state","message","userID","item"],
    methods:{
        newPage(){
            this.id = this.message.materials[this.item].id;
            this.ext = this.message.materials[this.item].ext;
            //浏览文件
            const {href} = this.$router.resolve({
                path: '/newPage',
                query: {
                    materialId:this.id
                }
            })
            window.open(href, '_blank')
        },
        upload(){
            //上传kyc
        },
        download() {
            var id = this.message.materials[this.item].id;
            var ext = this.message.materials[this.item].ext;
            var oReq = new XMLHttpRequest();
            oReq.open("GET", url.baseURL+"/order/material_stream?id="+this.id, true);
            oReq.responseType = "blob";
            oReq.onload = function (oEvent) {
                var content = oReq.response;
                var elink = document.createElement('a');
                elink.download = id + "." + ext;
                elink.style.display = 'none';

                var blob = new Blob([content]);
                elink.href = URL.createObjectURL(blob);

                document.body.appendChild(elink);
                elink.click();

                document.body.removeChild(elink);
            };
            oReq.send();
        },
        close(){
            document.getElementsByClassName("file")[0].style.display = "none"
        }  
    }
}
</script>
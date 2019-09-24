<template>
    <div class="top">
        <div id="box">
            <div id="top"></div>
            <div id="bottom">
                <div id="msg">
                    <span>{{identity}}</span>
                    <br>
                    <span>{{claimType}}</span>
                </div>
                <div class="msg">
                    <button type="button" class="btn btn-primary">调用kyc</button>
                    <button type="button" class="btn btn-primary">获取kyc状态</button>
                    <button type="button" class="btn btn-primary">颁发证书</button>
                    <button type="button" class="btn btn-primary">拒绝颁发证书</button>
                </div>
            </div>
            <div id="img"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3987282417,3624059467&fm=26&gp=0.jpg" alt=""></div>
        </div>
        <div id="textInfo" class="info">
            <ul>
                <li><span>国家</span>Dapibus ac facilisis in</li>
                <li><span>司法区</span>Dapibus ac facilisis in</li>
                <li><span>生日</span>Morbi leo risus</li>
                <li><span>生日</span>Porta ac consectetur ac</li>
                <li><span>生日</span>Vestibulum at eros</li>
                <li><span>生日</span>Cras justo odio</li>
                <li><span>生日</span>Dapibus ac facilisis in</li>
                <li><span>生日</span>Morbi leo risus</li>
                <li><span>生日</span>Porta ac consectetur ac</li>
                <li><span>生日</span>Vestibulum at eros</li>
                <li><span>生日</span>Vestibulum at eros</li>
            </ul>
        </div>
        <div id="fileInfo" class="info">
            <ul ref="ul1">
                <li>
                    <div @click="showDetial">
                        <p></p>
                        <span>身份证件正面照片</span>
                    </div>
                </li>
                <li>
                    <div @click="showDetial">
                        <p></p>
                        <span>评估机构的评估文件</span>
                    </div>
                </li>
                <li>
                    <div @click="showDetial">
                        <p></p>
                        <span>身份证件正面照片</span>
                    </div>
                </li>
                <li>
                    <div @click="showDetial">
                        <p></p>
                        <span>身份证件正面照片</span>
                    </div>
                </li>
                <li>
                    <div @click="showDetial">
                        <p></p>
                        <span>身份证件正面照片</span>
                    </div>
                </li>
                <li>
                    <div @click="showDetial">
                        <p></p>
                        <span>身份证件正面照片</span>
                    </div>
                </li>
                <li>
                    <div @click="showDetial">
                        <p></p>
                        <span>身份证件正面照片</span>
                    </div>
                </li>
                <li>
                    <div @click="showDetial">
                        <p></p>
                        <span>身份证件正面照片</span>
                    </div>
                </li>
                <li>
                    <div @click="showDetial">
                        <p></p>
                        <span>身份证件正面照片</span>
                    </div>
                </li>
                <li>
                    <div @click="showDetial">
                        <p></p>
                        <span>身份证件正面照片</span>
                    </div>
                </li>
            </ul>
            <div id="show" ref="show">
                <button type="button" class="btn btn-default" ref="back">返回信息列表</button>
                <div>证件内容</div>
            </div>
        </div>
        <div id="kyc" class="info">
            <ul>
                <h3>kyc调用记录</h3>
                <li>
                    <p><span>请求：</span></p>
                    <p><span>返回值：</span></p>
                </li>
                <li>
                    <p><span>请求：</span></p>
                    <p><span>返回值：</span></p>
                </li>
                <li>
                    <p><span>请求：</span></p>
                    <p><span>返回值：</span></p>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .top{
        float: left;
        #box{
            width:800px;
            height:300px;
            background:	#fff;
            box-shadow: 2px 3px 4px #ccc;
            position:relative;
            #top{
                width:800px;
                height:130px;
                background: url("../assets/bg.jpg") no-repeat;
                background-size: 100%;
            }
            #img{
                width:120px;
                height:120px;
                border:1px solid #ccc;
                border-radius: 50%;
                overflow: hidden;
                position: absolute;
                top:50px;
                left:30px;
                img{
                    width:100%;
                    height:100%;
                }
            }
            #bottom{
                color:#000;
                #msg{
                    margin-top: 30px;
                    margin-left: 170px;
                    font-size: 20px;
                    span:nth-child(1){
                        font-weight: 700;
                    }
                    span:nth-child(2){
                        margin-left: 50px;
                    }
                }
                .msg{
                    margin-top: 30px;
                    margin-left: 80px;
                    button{
                        margin-left: 20px;
                        padding-left: 20px;
                        padding-right: 20px;
                    }
                }
            }
        }
        .info{
            margin-top: 15px;
            padding: 35px 50px;
            width:800px;
            background:	#fff;
            box-shadow: 2px 3px 4px #ccc;
        }
        #textInfo{
            ul{
                li{
                    border:1px solid #eee;
                    padding:6px;
                    color:#000;
                    span{
                        padding-left:40px;
                        padding-right:90px;
                        font-weight: 600;
                    }
                }
            }
        }
        #fileInfo{
            height:500px;
            padding:30px 40px;
            ul{
                width:100%;
                height:100%;
                li{
                    float:left;
                    margin-top: 35px;
                    margin-left: 30px;
                    width:135px;
                    overflow: hidden;
                    box-shadow: 1px 1px 1px #ccc;
                    text-align: center;
                    p{
                        display:inline-block;
                        width:70px;
                        height:70px;
                        background: url("../assets/file.jpg") no-repeat;
                        background-size: 100%;
                    }
                    span{
                        display:inline-block;
                        font-size: 12px;
                        font-weight: 600;
                        color:#000;
                    }
                }
            }
            #show{
                display: none;
                div{
                    margin-top: 20px;
                }
            }
        }
        #kyc{
            margin-bottom: 50px;
            li{
                padding:10px;
                margin-top: 10px;
                border:1px solid #ccc;
                p{
                    padding:8px;
                    span{
                        padding:10px;
                        color:#000;
                    }
                }
                p:nth-child(2){
                    margin-top: 5px;
                }
            }
        }
    }
</style>
<script>
export default {
    props:["identity","claimType","msg"],
    methods:{
        showDetial(){
            this.$refs.ul1.style.display = "none";
            this.$refs.show.style.display = "block";
            this.$refs.back.onclick = ()=>{
                this.$refs.ul1.style.display = "block";
                this.$refs.show.style.display = "none";
            }
        }
    }
}
</script>
<template>
    <div class="top">
        <div id="box">
            <div id="top"></div>
            <div id="bottom">
                <div id="msg">
                    <div id="username">
                        {{msg.archive.identityInfo.name.firstName}}
                        {{msg.archive.identityInfo.name.middleName}}
                        {{msg.archive.identityInfo.name.lastName}}
                    </div>
                    <span>{{claimType}}</span>
                    <br>
                    <span>{{identity}}</span>
                </div>
            </div>
            <div id="img"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3987282417,3624059467&fm=26&gp=0.jpg" alt=""></div>
        </div>
        <div id="textInfo" class="info">
            <ul>
                <li style="margin-top:20px;"><span>birthday</span>{{msg.archive.identityInfo.birthday}}</li>
                <li><span>country</span>{{msg.archive.identityInfo.country}}</li>
                <li><span>residenceCountry</span>{{msg.archive.identityInfo.residenceCountry}}</li>
                <li><span>idcardNumber</span>{{msg.archive.identityInfo.idcardNumber}}</li>
                <li><span>passportNumber</span>{{msg.archive.identityInfo.passportNumber}}</li>
                <li><span>phoneNumber</span>{{msg.archive.identityInfo.phoneNumber}}</li>
                <li><span>gender</span>{{msg.archive.identityInfo.gender}}</li>
                <li><span>email</span>{{msg.archive.basicInfo.email}}</li>
                <li><span>taxId</span>{{msg.archive.basicInfo.taxId}}</li>
                <li><span>ssn</span>{{msg.archive.basicInfo.ssn}}</li>
                <li>
                    <span>address</span>
                    <p v-for="(i,index) in msg.archive.identityInfo.address.addressSequence" :key="index">
                        <span class="address">{{i.name}}:</span>{{i.value}}
                    </p>
                    <p><span class="address">postalCode:</span>{{msg.archive.identityInfo.address.postalCode}}</p>
                </li>
                <li><span>financialProfile</span>
                    <p><span class="address">buyerType:</span>{{msg.archive.financialProfile.buyerType}}</p>
                    <p><span class="address">investorType:</span>{{msg.archive.financialProfile.investorType}}</p>
                </li>
            </ul>
        </div>
        <div id="fileInfo" class="info">
            <ul ref="ul1">
                <li v-for="(item,index) in msg.materials" :key="index">
                    <div>
                        <p><img src="../assets/file.jpg" alt=""></p>
                        <span>{{item.type}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div id="kyc" class="info">
            <ul>
                <h3>kyc调用记录</h3>
                <li v-for="(item,index) in kycHistory" :key="index">
                    {{item}}
                    <!-- <p><span>请求：</span></p>
                    <p><span>返回值：</span></p> -->
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
            height:280px;
            background:	#fff;
            box-shadow: 2px 3px 4px #ccc;
            position:relative;
            padding-bottom: 20px;
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
                    margin-top: 10px;
                    margin-left: 170px;
                    font-size: 16px;
                    div:nth-child(1){
                        margin-top: 25px;
                        margin-left: 10px;
                        font-weight: 700;
                        margin-bottom: 10px;
                    }
                    span:nth-child(2){
                        margin-left: 10px;
                    }
                    span:nth-child(4){
                        margin-left: 10px;
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
                        padding-left:20px;
                        font-weight: 600;
                        display:inline-block;
                        width:220px;
                    }
                    .address{
                        font-weight: 500;
                        padding-left: 0;
                        width: 110px;
                    }
                    p{
                        padding:6px;
                        padding-left: 220px;
                    }
                }
            }
        }
        #fileInfo{
            padding:30px 40px;
            margin-bottom: 50px;
            overflow: hidden;
            ul{
                width:100%;
                height:100%;
                li{
                    float:left;
                    margin-top: 35px;
                    margin-left: 30px;
                    width:150px;
                    overflow: hidden;
                    box-shadow: 1px 1px 1px #ccc;
                    text-align: center;
                    p{
                        display:inline-block;
                        width:70px;
                        img{
                            margin-top: 30px;
                            width:100%;
                            height:100%;
                        }
                    }
                    span{
                        margin-top: 10px;
                        margin-bottom: 20px;
                        display:block;
                        font-size: 12px;
                        color:#000;
                    }
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
    data(){
        return {
            kycHistory:[]
        }
    },
    props:["identity","claimType","msg"],
    mounted(){
        console.log(this.kycHistory);
    }
}
</script>
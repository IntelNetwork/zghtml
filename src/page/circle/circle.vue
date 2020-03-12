<template>
    <div>
        <div class="top">
            <headerSelect />
            
        </div>
        <div class="main">
            <div class="main-left">
                <personalLeft />
            </div>
            <div class="main-right">
                <div class="navscreen-top">
                    <ul class="navscreen">
                        <li>全部</li>
                        <li>MBA</li>
                        <li>校友</li>
                        <li>同事</li>
                        <li>地方</li>
                        <li>公务员</li>
                        <li>我关注的</li>
                        <!-- @click="advert"  路由跳转-->
                    </ul>
                    <div class="release">
                        <i class="el-icon-plus"></i>
                        <span>我要发布</span>
                    </div>
                </div>
                <!-- 卡片 -->
                <div class="box">
                    <div class="card" v-for=" (activity,index) in card" :key="index" @mouseover="mouseover($event)" @mouseleave="mouseleave($event)">
                        <div class="Induction" id="Induction">
                            <div class="click" @click="green($event)">
                                <span class="iconfont">&#xe600;</span>
                                <span>感兴趣</span>
                            </div>
                        </div>
                        <img :src="activity.img" alt="图片" class="head" >
                        
                        <p class="cardcontent">{{activity.cardcontent}}</p>
                        <div class="cardbottom">
                            <img src="../../assets/head.jpg" alt="头像" class="portrait" >
                            <ul class="servant">
                                <li>阿拉善市政府</li>
                                <li>来自于<span>公务员</span></li>
                            </ul>
                            <ul class="live">
                                <li>
                                    <span class="iconfont like">&#xe600;</span>
                                    <span>{{activity.number}}</span>
                                </li>
                                <li>一小时前</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <fonter />
        </div>
    </div>
</template>
<script>
    // import { login, islogin } from "@/api/login";
    import headerSelect from "@/components/headerSelect";
    import personalLeft from "@/components/personalCenter/personalLeft";
    import fonter from "@/components/fonter";
    export default {

        data() {
            return {
                card:[{
                    img:require("../../assets/a1.png"),
                    cardcontent:'#志愿者招募#感谢你们给了我这个零基础小黑信心，谢谢你们的喜欢感谢感...',
                    number:'123'
                },
                {
                    img:require("../../assets/a.png"),
                    cardcontent:'#志愿者招募#感谢你们给了我这个零基础小黑信心，谢谢你们的喜欢感谢感...',
                    number:'123'
                },
                {
                    img:require("../../assets/a2.png"),
                    cardcontent:'#志愿者招募#感谢你们给了我这个零基础小黑信心，谢谢你们的喜欢感谢感...',
                    number:'123'
                },
                {
                    img:require("../../assets/a3.png"),
                    cardcontent:'#志愿者招募#感谢你们给了我这个零基础小黑信心，谢谢你们的喜欢感谢感...',
                    number:'123'
                },
                {
                    img:require("../../assets/a4.png"),
                    cardcontent:'#志愿者招募#感谢你们给了我这个零基础小黑信心，谢谢你们的喜欢感谢感...',
                    number:'123'
                },
                {
                    img:require("../../assets/a5.png"),
                    cardcontent:'#志愿者招募#感谢你们给了我这个零基础小黑信心，谢谢你们的喜欢感谢感...',
                    number:'123'
                },
                {
                    img:require("../../assets/a6.png"),
                    cardcontent:'#志愿者招募#感谢你们给了我这个零基础小黑信心，谢谢你们的喜欢感谢感...',
                    number:'123'
                },
                {
                    img:require("../../assets/a7.png"),
                    cardcontent:'#志愿者招募#感谢你们给了我这个零基础小黑信心，谢谢你们的喜欢感谢感...',
                    number:'123'
                },
                {
                    img:require("../../assets/a8.png"),
                    cardcontent:'#志愿者招募#感谢你们给了我这个零基础小黑信心，谢谢你们的喜欢感谢感...',
                    number:'123'
                },
                {
                    img:require("../../assets/a9.png"),
                    cardcontent:'#志愿者招募#感谢你们给了我这个零基础小黑信心，谢谢你们的喜欢感谢感...',
                    number:'123'
                },
                {
                    img:require("../../assets/a10.png"),
                    cardcontent:'#志愿者招募#感谢你们给了我这个零基础小黑信心，谢谢你们的喜欢感谢感...',
                    number:'123'
                },
                {
                    img:require("../../assets/a11.png"),
                    cardcontent:'#志愿者招募#感谢你们给了我这个零基础小黑信心，谢谢你们的喜欢感谢感...',
                    number:'123'
                },
                {
                    img:require("../../assets/a12.png"),
                    cardcontent:'#志愿者招募#感谢你们给了我这个零基础小黑信心，谢谢你们的喜欢感谢感...',
                    number:'123'
                },
                {
                    img:require("../../assets/a13.png"),
                    cardcontent:'#志愿者招募#感谢你们给了我这个零基础小黑信心，谢谢你们的喜欢感谢感...',
                    number:'123'
                },
                {
                    img:require("../../assets/a14.png"),
                    cardcontent:'#志愿者招募#感谢你们给了我这个零基础小黑信心，谢谢你们的喜欢感谢感...',
                    number:'123'
                },
                {
                    img:require("../../assets/a15.png"),
                    cardcontent:'#志愿者招募#感谢你们给了我这个零基础小黑信心，谢谢你们的喜欢感谢感...',
                    number:'123'
                },
                ]
                
            };
        },
        mounted() {
            // this.getCookie();
        },
        components:{
            headerSelect,
            personalLeft,
            fonter
        },
        methods: {
            green(event){
                if(event.currentTarget.firstElementChild.style.color=="red"){
                     event.currentTarget.firstElementChild.style.color="#fff"
                }else{
                     event.currentTarget.firstElementChild.style.color="red"
                }
               
            },
            mouseover(event){
                // console.log()
                event.currentTarget.firstElementChild.style.display = "block"
            },
            mouseleave(event){
                event.currentTarget.firstElementChild.style.display = "none"
            },
            advert(){
                this.$router.push({ //核心语句
                    name: 'advertisement', //跳转的路径
                    query: { //路由传参时push和query搭配使用 ，作用时传递参数
                        id: this.id,
                    }
                })
            }
        }
    };
</script>
<style scoped>
    /* .personal{
        margin: 30px;
        box-shadow: 0px 10px 20px -10px #999; 
    } */
    .main {
        width: 1200px;
        min-width: 1390px;
        margin: 30px auto;
        display: flex;
    }
    .main-left {
        width: 270px;
    }
    .main-right {
        width:990px;
        height:50px;
        background:rgba(255,255,255,1);
        border-radius:6px;
        /* margin: 30px; */
    }
    .navscreen {
        width: 540px;
        height: 50px;
        display: flex;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        
        justify-content: space-between;
    }
    .navscreen li {
        width: 77px;
        height: 50px;
        text-align: center;
        line-height:50px;
        cursor: pointer;
    }
    .navscreen-top {
        display: flex;
        justify-content: space-between;
    }
    .release {
        width: 100px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:#379393;
        line-height:50px;
        cursor: pointer;
    }
    .box {
        width: 1000px;
       margin-top: 10px;
       display: flex;
       flex-wrap: wrap;
    }
    /* 卡片 */
    .card {
         width:240px;
        height:350px;
        background:rgba(255,255,255,1);
        box-shadow:0px 6px 12px 0px rgba(8,1,3,0.06);
        border-radius:6px;
        position: relative;
        margin: 0px 10px 16px 0px; 
    }
    .head {
        width:240px;
        height:240px;
        border-radius: 6px 6px 0px 0px;
    }
    .cardcontent {
        width:208px;
        height:29px;
        font-size:12px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:16px;
        margin: 0 auto;
        margin-top: 10px;
    }
    .cardbottom {
         margin: 21px 10px 0px 16px;
         display: flex;
    }
    .portrait {
        width:40px;
        height:40px;
        border-radius:50%;
    }
    .servant {
        font-size:12px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:#080103;
        line-height:16px;
        margin: 3px 10px 0px 12px;
    }
    .servant span {
        color: #379393;
    }
    .live {
        /* width:42px; */
        height:28px;
        font-size:12px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:16px;
        margin: 6px 0px 0px 32px;
        text-align: center;
    }
    .like {
        width:12px;
        height:11px;
        color: #339999;
    }
    .Induction  {
        width:240px;
        height:240px;
        background-color: rgba(0,0,0, .5);
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        transition: width 5s;
        user-select: none;
    }
    .click {
        width:90px;
        height:30px;
        background:rgba(102,153,204,0);
        border-radius: 6px 6px 0px 0px;
        border:2px solid rgba(255, 255, 255, 1);
        border-radius:6px;
        text-align: center;
        line-height: 27px;
        position: absolute;
        top: 20px;
        left: 130px;
        cursor: pointer;
    }
    .click span {
        color: #FFFFFF;
    }
</style>
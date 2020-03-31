<template>
    <div class="loginTop">
        <div class="topContent">
            <div>
                <img src="../assets/logo.png" class="logo" alt="" @click="indexa" >
            </div>
            <div>
                <ul class="topNav">
                    <li @click="indexa"  class="">首页</li>
                    <li @click="task" class="">任务大厅</li>
                    <li @click="people" class="">成员招募</li>
                    <li @click="guest" class="">创客入驻</li>
                    <li @click="onetwo" class="">五湖四海</li>
                    <li @click="mycircle" class="">我的江湖</li>
                    <li class="search">
                        <i class="el-icon-search"></i>
                        <el-input v-model="input" placeholder="搜工作，搜私活"></el-input>
                    </li>
                </ul>
            </div>
            <div class="right">
                <div class="workPlan">
                    <!-- <i class="el-icon-tickets"></i>
                    <p>写工作计划</p> -->
                    <img src="../assets/work.png" alt="">
                    <p>工作台</p>
                </div>
                <div class="rightLogin" v-if="token!=null">
                    <div class="bell">
                        <p @mouseover="mouseover($event)">
                            <el-badge :value="2" class="item" type="primary">
                                <i class="el-icon-bell"></i>
                                <!-- <el-button size="small" type="text">消息</el-button> -->
                            </el-badge>
                        </p>

                        <div class="news-center" id="news-center" @mouseleave="mouseleave($event)">
                            <p class="news-center_p">消息中心</p>
                            <p class="news-specific">管理员 审核通过了你发布的信息：《11》志愿者落户计划</p>
                            <p class="news-specific">管理员 审核通过了你发布的信息：《11》志愿者落户计划</p>
                            <div class="news-see">
                            <el-button type="text" @click="extend">查看更多消息</el-button>
                            </div>
                        </div>
                    </div>
                    <div class="name">
                        <p class="logo2" @click="arrow($event)">
                            MAC大魔王<i class="el-icon-arrow-down" ></i>
                        </p>
                        <div class="loginOut" id="loginOut">
                            <div class="navOut">
                                <span>
                                    <img src="../assets/top.jpg" alt="topLogo" class="topLogo">
                                </span>
                                <span class="navName">
                                    <h3>Hi，MAC大魔王</h3>
                                    <p>欢迎来到智工网</p>
                                </span>
                                <span>
                                    <img src="../assets/navOut5.png" alt="">
                                </span>
                            </div>
                            <div class="loginIcon">
                                <ul>
                                    <li>
                                        <p><i class="el-icon-s-custom"></i> 我的账户</p>
                                    </li>
                                    <li @click="published">
                                        <p><i class="el-icon-s-claim"></i>任务中心</p>
                                    </li>
                                    <li class="opportunity">
                                        <p>
                                            <!-- <img src="../assets/navOut4.png" alt=""> -->
                                            <i class="el-icon-s-opportunity"></i>
                                            我的会员
                                        </p>
                                        <p style="color:#FF9966;font-size:12px">Hot</p>
                                    </li>
                                    <li @click="loginOut">
                                        <p>
                                            <!-- <img src="../assets/navOut3.png" alt=""> -->
                                            <i class="el-icon-s-unfold"></i>
                                            退出
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="registered" v-if="token==null">
                    <span @click="login">你好，请登录</span>
                    <span @click="registered" class="login">注册</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { login } from "@/api/login";
    export default {
        data() {
            return {
                input:"",
                token:"",
                item:1
            };
        },
        mounted() {
            this.token = sessionStorage.getItem("token");
        },
        methods: {
            mouseover(event){
                // console.log(event.currentTarget.firstElementChild)
                // event.currentTarget.firstElementChild.style.display = "block"
                document.getElementById("news-center").style.display = "block";
            },
             mouseleave(event){
                 document.getElementById("news-center").style.display = "none";
                // this.style.display = "none"
            },
             extend() {
                this.$router.push({
                    name: "news",
                    query: {
                    id: this.id
                    }
                });
            },
            Headportrait() {
                this.$router.push({
                    name: "personal",
                    query: {
                    id: this.id
                    }
                });
            },
            login(){
                this.$router.push({
                    name: "login",
                });
            },
            loginOut(){
                this.axios.get(`${login.loginOut}`).then(res=>{
                    if(res.data.code==200){
                        this.$message.success(res.data.message);
                        sessionStorage.clear();
                        this.$router.push({
                            name:"index"
                        })
                    }
                })
            },
            registered(){
                this.$router.push({
                    name:'registered',
                })
            },
            // 任务
            task() {
                let routeData = this.$router.resolve({
                    name: "taskHall"
                });
                window.open(routeData.href, "_blank");
            },
            // 成员招募
            people() {
                let routeData = this.$router.resolve({
                    name: "chanceList"
                });
                window.open(routeData.href, "_blank");
            },
            guest() {
                let routeData = this.$router.resolve({
                    name: "enter"
                });
                window.open(routeData.href, "_blank");
            },
            onetwo() {
                let routeData = this.$router.resolve({
                    name: "advertisement"
                });
                window.open(routeData.href, "_blank");
            },
                indexa() {
                this.$router.push({
                    name: "index",
                    query: {
                    id: this.id
                    }
                });
            },
             mycircle() {
                let routeData = this.$router.resolve({
                    name: "nojoin"
                });
                window.open(routeData.href, "_blank");
            },
            arrow(event){
                // console.log(event.currentTarget.parentElement);
                let element = event.currentTarget.parentElement.firstElementChild;
                if(this.item==1){
                    this.item=2;
                    element.firstElementChild.className = "";
                    element.firstElementChild.className = "el-icon-arrow-up";
                    document.getElementById("loginOut").style.display = "block";
                }else if(this.item==2){
                    this.item=1;
                    element.firstElementChild.className = "";
                    element.firstElementChild.className = "el-icon-arrow-down";
                    document.getElementById("loginOut").style.display = "none"
                }
                // console.log(event.currentTarget.getElementById("loginOut"))
            },
            published(){
                this.$router.push({
                    name:"published"
                });
            },
        }
    };
</script>
<style scoped>
    .loginTop{
        
        width: 100%;
        height: 60px;
        /* padding: 8px 5%; */
        box-shadow: 0 0 20px -15px #080103;
        background: #fff;
    }
    .topContent{
        width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        position: relative;
    }
    .logo {
        cursor: pointer;
        width: 92px;
        height: 40px;
    }
    .topNav{
        width: 650px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        line-height: 60px;
        font-weight:400;
        font-size: 16px;
    }
    .topNav li{
        cursor: pointer;
        color: #222222;
        border-bottom: 2px solid transparent;
    }
    .topNav li:hover{
        color: #339999;
        border-bottom: 2px solid #339999;
    }
    .right{
        width: 280px;
        height: 40px;
        display: flex;
        justify-content:center;
        align-items: center;
        font-size: 14px;
        /* line-height: 40px; */
    }
    .right>span{
        margin-left:14px;
        font-size: 14px
    }
    .right i{
        font-size: 22px;
        margin:0 4px
    }
    .right .workPlan{
        /* width: 120px; */
        height: 40px;
        display: flex;
        flex-wrap: nowrap;
        /* background-color: #339999; */
        color: #222222;
        padding-top: 10px;
        border-radius:6px;
        cursor: pointer;
        /* margin-top: 20px */
    }
    .right .workPlan p{
        margin-top: 3px;
        margin-left: 6px;
    }
    .right .workPlan img{
        width: 20px;
        height: 20px;
    }
    .topLogo{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .bell{
        display: flex;
        height: 16px;
        margin-left: 5px;
        color: #999999;
        font-weight:bold;
        position: relative;
    }
    .bell p{
        cursor: pointer;
    }
    /* 消息中心 */
    .news-center {
        width:270px;
        /* height:181px; */
        background:rgba(255,255,255,1);
        border:1px solid rgba(233, 233, 233, 1);
        box-shadow:0px 3px 6px 0px rgba(9,1,3,0.11);
        border-radius:6px;
        position: absolute;
        top: 51px;
        right: 0px;
        z-index: 9;
        display: none;
    }
    .news-center_p {
        width: 100%;
        /* height: 40px; */
        border-bottom: 1px solid #E8ECEE;
        font-size: 14px;
        line-height: 40px;
        padding-left: 20px;
    }
    .news-specific {
         width: 100%;
        /* height: 40px; */
        border-bottom: 1px solid #E8ECEE;
        font-size: 14px;
        line-height: 19px;
        padding:20px 0px 10px 20px;
    }
    .news-see {
        text-align: center;
        
    }
    .el-button--text {
        color: #333333;
    }
    .logo2 {
        cursor: pointer;
    }
    
    .search{
        width:164px;
        height:34px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(229, 229, 229, 1) !important;
        border-radius:17px;
        display: flex;
        align-items: center;
        padding-left: 8px;
        color: #999999;
        
    }
    .search >>>.el-input .el-input__inner {
        border: none;
        height: 32px;
        width: 128px;
        font-size: 12px;
        padding: 0 10px;
    }
    
    .rightLogin{
        width: 160px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 10px;
        color: #999999;
    }
    
    .registered{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #333;
        margin-left: 12px;
        /* line-height: 40px; */
        
    }
    .registered span{
        font-size: 14px;
        cursor: pointer;
        /* width: 82px; */
        color: #999999;
        border-left: 1px solid #EEF0F3;
        /* height: 20px; */
        padding:0 12px;
       
    }
    .registered span.login{
        color: #339999;
    }
    .el-badge>>>.el-badge__content--primary{
        background: #339999;
    }
    .el-badge>>>.el-badge__content.is-fixed{
        top: 6px;
        right: 14px;
    }
    .el-badge>>>.el-badge__content{
        height: 16px;
        line-height: 16px;
        width: 16px;
        padding: 0;
        /* text-align: center; */
    }
    .el-icon-search{
        color: #999999;
    }
    .loginOut{
        width:230px;
        height:227px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(233, 233, 233, 1);
        box-shadow:0px 3px 6px 0px rgba(9,1,3,0.11);
        border-radius:4px;
        position: absolute;
        top: 62px;
        right: 0px;
        z-index: 999;
        padding: 10px;
        display: none;
        /* border: #E9E9E9; */
        
    }
    .loginOut:after{
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 8px solid;
        color: #E9E9E9;
        /* border-color: #E9E9E9; */
        border-bottom-color: #ffffff;
        right: 12%;
        top: -7%;
        margin-left: -15px;
        
    }
    .navOut{
        height: 60px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #E8ECEE;
    }
    .navOut .navName{
        line-height: 20px;
    }
    .navOut .navName h3{
        font-size: 14px;
        color: #333333;
    }
     .navOut .navName p{
         font-size: 12px;
     }
     .loginIcon ul{
         margin-top: 10px;
     }
     .loginIcon ul li{
         width: 100%;
         height: 34px;
         padding: 0 10px;
         line-height: 34px;
         cursor: pointer;
     }
     .loginIcon ul li:hover{
         color: #339999;
         background: #E9E9E9;
     }
     .loginIcon ul li:hover i{
         color: #339999;
     }
     .loginIcon ul li i{
         color: #666666;
     }
     .opportunity{
         display: flex;
         justify-content: space-between;
     }
</style>
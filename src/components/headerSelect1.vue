<template>
    <div class="loginTop">
        <div>
            <img src="../assets/logo.png" class="logo" alt="" @click="Headportrait">
        </div>
        <div>
            <ul class="topNav">
                <li @click="Headportrait" class="topNav_li active">
                    <span class="iconfont iconfont1">&#xe632;</span>
                    <p>联盟首页</p>
                </li>
                <li @click="Headportrait" class="topNav_li active">
                    <span class="iconfont iconfont2">&#xe639;</span>
                    <p>任务大厅</p>
                </li>
                <li @click="Headportrait" class="topNav_li active">
                    <span class="iconfont iconfont3">&#xe72f;</span>
                    <p>成员招募</p>
                </li>
                <li @click="Headportrait" class="topNav_li active">
                    <span class="iconfont iconfont4">&#xe603;</span>
                    <p>五湖四海</p>
                </li>
                <li @click="Headportrait" class="topNav_li active">
                    <span class="iconfont iconfont5">&#xe69e;</span>
                    <p>创客入住</p>
                </li>
                <li @click="Headportrait" class="active">
                    <span class="iconfont iconfont6">&#xe6c2;</span>
                    <p>我的江湖</p>
                </li>
            </ul>
        </div>
        <div class="right">
            <span class="workPlan" @click="Headportrait">
                <i class="el-icon-tickets"></i>
                <p>写工作计划</p>
            </span>
            <span class="bell">
                <!-- <img src="../assets/top.jpg" alt=""> -->
                <p @mouseover="mouseover($event)">
                    <el-badge :value="2" class="item" type="primary">
                        <i class="el-icon-bell"></i><el-button size="small" type="text">消息</el-button>
                    </el-badge>
                </p>
                
                <div class="news-center" id="news-center" @mouseleave="mouseleave($event)">
                    <p class="news-center_p">消息中心</p>
                    <p class="news-specific">管理员 审核通过了你发布的信息：《11》志愿者落户计划 </p>
                    <p class="news-specific">管理员 审核通过了你发布的信息：《11》志愿者落户计划 </p>
                    <div class="news-see">
                        <el-button type="text" @click="Headportrait">查看更多消息</el-button>
                    </div>
                </div>
            </span>
            <span>
                <img src="../assets/top.jpg" class="logo2" alt="" @click="Headportrait">
            </span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        mounted() {

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
            // extend(){
            //     this.$router.push({
            //         name: 'news', //跳转的路径
            //         query: { //路由传参时push和query搭配使用 ，作用时传递参数
            //             id: this.id,
            //         }
            //     })
            // },
            Headportrait(){
                // this.$router.push({
                //     name: 'login', //跳转的路径
                    
                // })
            },
            indexa(){
                this.$router.push({
                    name: 'index', //跳转的路径
                    query: { //路由传参时push和query搭配使用 ，作用时传递参数
                        id: this.id,
                    }
                })
            },
            // circle(){
            //     this.$router.push({ //核心语句
            //             name: 'circle', //跳转的路径
            //             query: { //路由传参时push和query搭配使用 ，作用时传递参数
            //                 id: this.id,
            //             }
            //         })
            // },
            workPlan(){
                this.$router.push({ //核心语句
                        name: 'workPlan', //跳转的路径
                        query: { //路由传参时push和query搭配使用 ，作用时传递参数
                            id: this.id,
                        }
                    })
            }
        }
    };
</script>
<style scoped>
    .loginTop{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 120px;
        padding: 8px 5%;
        box-shadow: 0 0 20px -15px #080103;
        background: #fff;
    }
    .logo {
        cursor: pointer;
        padding-top: 24px;
    }
    .topNav{
        /* width: 650px; */
        display: flex;
        justify-content: space-around;
        /* line-height: 60px; */
        font-weight:400;
    }
    .topNav li{
        width: 130px;
        height: 112px;
        padding-right: 31px;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        padding-top: 22px;
    }
    .topNav_li {
        border-right: 1px solid #EAEAEA;
    }
    .topNav span {
        font-size: 40px;
        margin-left: 34px;
    }
    .iconfont1 {
        color: #339999;
    }
    .iconfont2 {
        color: #FF9966;
    }
    .iconfont3 {
        color: #FF9966;
    }
    .iconfont4 {
        color: #CC9999;
    }
    .iconfont5 {
        color: #FFCC00;
    }
    .iconfont6 {
        color: #9999CC;
    }
    .topNav p {
        width: 20px;
        margin-left: 10px;
        color: #666666;
    }
    .right{
        width: 280px;
        height: 40px;
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
    }
    .right span{
        margin-left:14px;
        font-size: 14px
    }
    .right i{
        font-size: 22px;
        margin:0 4px
    }
    .right .workPlan{
        width: 120px;
        height: 40px;
        display: flex;
        flex-wrap: nowrap;
        background-color: #339999;
        color: #fff;
        padding-top: 10px;
        border-radius:6px;
        cursor: pointer;
        /* margin-top: 20px */
    }
    .right .workPlan p{
        margin: 5px 0px 0px 5px;
    }
    .right img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .bell{
        display: flex;
        margin-top: 10px;
        height: 16px;
        padding-left: 5px;
        /* border-right: 1px solid #A5A5A5; */
        border-left: 1px solid #A5A5A5;
        color: #999999;
        font-weight:bold;
        position: relative;
    }
    .bell p{
        margin-top: -4px;
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
    .active{
        border-top: 4px solid #fff;  
    }
    .active:hover {
        border-top: 4px solid #339999; 
        /* box-shadow: 0px 20px 12px rgba(8,1,3,0.26) inset;  */
        box-shadow:inset 0px 25px 17px -15px #9999;
    }
</style>
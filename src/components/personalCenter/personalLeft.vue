<template>
    <div class="personal">

        <div class="information">
            <img src="../../assets/top.jpg" alt />
            <div class="userName">
                <h3>翁少锋 </h3>
                <p> 已认证</p>
            </div>
            <div class="position">
                <p>24岁 | Ui设计师</p>
            </div>
            <div class="text">
                <p>我会为成为更好人 <i class="el-icon-edit"></i></p>
            </div>
            <div class="money">
                <p>智工币：<i>{{money}}</i></p>
            </div>
            <div class="btn">
                <el-button class="button1" @click="rcharge">充值</el-button>
                <el-button class="button2" @click="withdrawal">提现</el-button>
            </div>
        </div>
            <el-menu
                default-active=""
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                text-color="#666666"
                active-text-color="#339999"
                >
                <el-menu-item index="1"  @click="jump(1)">
                    <span class="iconfont">&#xe642;</span>
                    <span slot="title">我的数据资产</span>
                </el-menu-item>
                <!-- <el-menu-item index="2"  @click="jump(2)"> -->
                <el-menu-item index="2">
                    <a href="http://interstrangers.com:8081/#/">
                        <span class="iconfont">&#xe659;</span>
                        <span slot="title" >写工作计划</span>
                    </a>
                </el-menu-item>
                <el-menu-item index="3"  @click="jump(3)">
                    <span class="iconfont">&#xe6c7;</span>
                    <span slot="title">我的简历</span>
                </el-menu-item>
                <el-menu-item index="4" @click="jump(4)">
                    <span class="iconfont">&#xe6c7;</span>
                    <span slot="title">我的圈子</span>
                </el-menu-item>
                <el-menu-item index="5" @click="jump(5)">
                    <span class="iconfont">&#xe66a;</span>
                    <span slot="title">我的申请</span>
                </el-menu-item>
                <el-menu-item index="6" @click="jump(6)">
                    <span class="iconfont">&#xe654;</span>
                    <span slot="title">我的消息</span>
                </el-menu-item>
                <el-menu-item index="7" @click="jump(7)">
                    <span class="iconfont">&#xe690;</span>
                    <span slot="title">资料与账号</span>
                </el-menu-item>
            </el-menu>
    </div>
</template>
<script>
    import headerSelect from "@/components/headerSelect";
    export default {
        data() {
            return {
                money: "8898"
            };
        },
        components: {
            headerSelect
        },
        mounted() {

        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            // 简历跳转
            jump(i) {
                if(i==7){
                    this.$router.push({ //核心语句
                        name: 'data', //跳转的路径
                    })
                }
                if(i==6){
                    this.$router.push({ //核心语句
                        name: 'news', //跳转的路径
                    })
                }
                if(i==5){
                    this.$router.push({ //核心语句
                        name: 'applyApproval', //跳转的路径
                    })
                }
                if(i==4){
                    this.$router.push({ //核心语句
                        name: 'circle', //跳转的路径
                    })
                }
                if(i==3){
                    this.$router.push({ //核心语句
                        name: 'resume', //跳转的路径
                    })
                }
                if(i==2){
                    this.$router.push({ //核心语句
                        name: 'workPlan', //跳转的路径
                    })
                }
                if(i==1){
                    // this.$router.push({ //核心语句
                    //     name: 'resume', //跳转的路径
                    // })
                }
            },
            // 充值
            rcharge() {
                this.$router.push({ //核心语句
                    name: 'recharge', //跳转的路径
                    query: { //路由传参时push和query搭配使用 ，作用时传递参数
                        id: this.id,
                    }
                })
            },
            // 提现
            withdrawal() {
                this.$router.push({ //核心语句
                    name: 'withdrawal', //跳转的路径
                    query: { //路由传参时push和query搭配使用 ，作用时传递参数
                        id: this.id,
                    }
                })
            },
            news(){
                this.$router.push({ //核心语句
                    name: 'news', //跳转的路径
                    query: { //路由传参时push和query搭配使用 ，作用时传递参数
                        id: this.id,
                    }
                })
            }
        }
    };
</script>
<style scoped>
        .personal{
            /* margin: 30px; */
            /* box-shadow: 10px 10px 20px -10px #999;  */
        }
      .information{
      width: 250px;
      margin: 0 auto;
      text-align: center;
      background: #ffffff;
      border-bottom: 1px solid #E1E1E1;
      border-radius: 6px 6px 0 0 ;
      padding-bottom: 20px;
    }
    .btn{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    
    }
    .button1 {
      width: 100px;
      background:rgba(51,153,153,1);
      color: #ffffff;
      border: 1px solid #339999;
    }
    .button1:active{
      background:rgba(51,153,153,0.7);
      border: 1px solid #339999;
      
    }
    .button2 {
      width: 100px;
      border: 1px solid #339999;
      color: #339999;
      margin: 10px auto;
    }
    .information>img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-top: 42px;
    
    }
    .userName{
      display: flex;
      margin: 10px auto;
      justify-content: center;
    
    }
    .userName h3{
      font-size: 24px;
      color: #333333;
      margin-right: 10px;
      
    }
    .userName p{
      color: #ffffff;
      width: 48px;
      height: 20px;
      background: #339999;
      font-size: 14px;
      line-height:20px;
      border-radius: 2px; 
    }
    .text{
      color:rgba(153,153,153,1);
      font-size: 14px;
    }
    .money{
        color: #339999;
        font-size: 14px;
        margin: 30px 0;
    }
    .money i{
        font-size: 24px;
        font-style:normal;
    }
    .position{
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:26px;
        width: 250px;
    }
    
    .el-menu-vertical-demo{
        width: 250px;
        height: 437px;
        /* padding-left: 40px; */
        border: none;
        border-radius:0 0 6px 6px;
        margin: 0 auto;
    }
    .el-menu-vertical-demo span {
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 14px;
        vertical-align: middle;
    }
    .el-menu-vertical-demo>>>.el-menu-item{
        width: 100%;
        padding-left: 70px !important;
    }
</style>
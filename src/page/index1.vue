<template>
    <div class="withdrawal">
         <headerSelect />
         <div class="indexContent">
             <el-row :gutter="24">
                <el-col :span="8">
                    <div class="grid-content content_left">
                        <div class="left_top">
                            <p><i class="el-icon-search"></i> 他们在找</p>
                        </div>
                        <div class="left_text">
                            <div class="arrow">
                                <span>
                                  <img src="../assets/box2.png" alt=""> 
                                  <p>全职高手</p>
                                </span>
                                <span>
                                    <i class="el-icon-arrow-up"></i>
                                </span>
                            </div>
                            <div class="work">
                                <span v-for="(item,index) in work" :key="index">
                                    {{item}} 
                                </span>
                            </div>
                        </div>
                        <div class="left_text">
                            <div class="arrow">
                                <span>
                                   <img src="../assets/box.png" alt="">
                                   <p>外快达人</p>
                                </span>
                                <span>
                                    <i class="el-icon-arrow-down"></i>
                                </span>
                            </div>
                            <div class="work1">
                                <span v-for="(item,index) in work" :key="index">
                                    {{item}} 
                                    
                                </span>
                            </div>
                        </div>
                        <div class="left_text">
                            <div class="arrow">
                                <span>
                                   <img src="../assets/team.png" alt="">
                                   <p>精英团队</p>
                                </span>
                                <span>
                                    <i class="el-icon-arrow-down"></i>
                                </span>
                            </div>
                            <div class="work1">
                                <span v-for="(item,index) in work" :key="index">
                                    {{item}} 
                                </span>
                            </div>
                        </div>
                        <div class="left_button">
                            <el-button class="button1" @click="rcharge">发布需求</el-button>
                            <el-button class="button2" @click="withdrawal">我要入驻</el-button>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content content"> 
                        <div class="content_top">
                            <span><p>今日推荐</p></span>
                            <el-carousel trigger="click" height="296px">
                                <el-carousel-item v-for="(item,index) in banner" :key="index">
                                    <img :src="item.src" alt="">
                                    <!-- {{ }} -->
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                        <div class="recommend">
                            <p class="recommend-tltle">这些公司很适合你哦</p>
                            <ul class="recommend-main">
                                <li class="recommend-one">让雷科技</li>
                                <li>缔荣纺织</li>
                                <li>德特贸易</li>
                                <li>阿里巴巴</li>
                                <li>悟空传媒</li>
                                <li>WPA</li>
                                <li>上海让雷科技技术有限公司</li>
                                <li>让雷科技</li>
                                <li>缔荣纺织</li>
                                <li>德特贸易</li>
                                <li>阿里巴巴</li>
                                <li>悟空传媒</li>
                                <li>WPA</li>
                            </ul>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content content_right">
                        <div class="assessment">
                            <span><p>个人数据资产价值评估</p></span>
                            <div  class="assessment_color">
                                <h3>我们比你更了解你自已</h3>
                                <el-button class="button2" @click="rcharge">立即测评</el-button>
                            </div>
                        </div>
                        <div class="beacon">
                            <span><p>新标向</p></span>
                            <div>
                                <div class="beacon_apply">
                                    <span class="company_name">
                                        <img src="../assets/Ten.png" alt="" class="apply_logo">
                                        <div class="company">
                                            <h3>腾讯（阿拉善）</h3>
                                            <p> 20-30K</p>
                                        </div>
                                    </span>
                                    <span>
                                        <el-button class="apply" @click="rcharge">申请加入</el-button>
                                    </span>
                                </div>
                                <div class="beacon_apply">
                                    <span class="company_name">
                                        <img src="../assets/Alib.png" alt="" class="apply_logo">
                                        <div class="company">
                                            <h3>阿里（阿拉善）</h3>
                                            <p> 20-30K</p>
                                        </div>
                                    </span>
                                    <span>
                                        <el-button class="apply" @click="rcharge">申请加入</el-button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="union assessment">
                           <span><p>热门联盟</p></span>
                           <div class="union_content">
                               <img src="../assets/flag.png" alt=""  class="union_img">
                           </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div>
             <img src="../assets/banner_bottom.png" alt="" class="banner_bottom">
         </div>
         </div>

         <fonter />
    </div>
</template>
<script>
    import headerSelect from "@/components/headerSelect1";
    import fonter from "@/components/fonter";
    export default {
        data() {
            return {
                work: ["Java", "PHP", "精准推荐", "C", ".NET", "C++"],
                banner: [{
                        src: require("../assets/banner_img.png")
                    },
                    {
                        src: require("../assets/banner_img.png")
                    },
                    {
                        src: require("../assets/banner_img.png")
                    }
                ]
            };
        },
        components: {
            headerSelect,
            fonter,
        },
        mounted() {

        },
        methods: {
             // 充值
            rcharge() {
                this.$router.push({ //核心语句
                    name: 'login', //跳转的路径
                    query: { //路由传参时push和query搭配使用 ，作用时传递参数
                        id: this.id,
                    }
                })
            },
            // 提现
            withdrawal() {
                this.$router.push({ //核心语句
                    name: 'login', //跳转的路径
                    query: { //路由传参时push和query搭配使用 ，作用时传递参数
                        id: this.id,
                    }
                })
            },
        }
    };
</script>
<style scoped>
    .indexContent{
        width: 1320px;
        padding-top: 30px;
        margin: 0 auto;
        
    }
    .grid-content{
        /* width: 430px; */
        min-height:742px;
        /* height: 50px; */
    }
    .content_left{
        /* width: 420px; */
        background:#fff;
         border-radius:6px;
    }
    .left_top{
        color: #333;
        height: 52px;
        line-height: 52px;
        padding-left: 26px;
        border-bottom: 1px solid #EBEBEB;
       
    }
    .left_top>p{
        font-size: 16px;
        font-weight:bold;
    }
    .left_text{
        padding: 30px;
        border-bottom: 1px solid #EBEBEB
    }
    .arrow{
        display: flex;
        justify-content: space-between;
       
    }
    .arrow span{
        display: flex;
        font-size: 14px;
        font-weight:bold;
        align-items: center;
    }
    .arrow span img{
        margin-right:10px;
    }
    .work,.work1{
        padding:20px 30px;
        color: #666;
        font-size: 14px;
        line-height: 30px;
    }
    .work1 span{
        padding: 0 10px;
    }
    .work span{
        padding: 0 10px;
        border-right: 1px solid #999;
    }
    .left_button{
        text-align: center;
    }
    .button1 {
      width: 160px;
      background:rgba(51,153,153,1);
      color: #ffffff;
      border: 1px solid #339999;
    }
    .button1:active{
      background:rgba(51,153,153,0.7);
      
    }
    .button2 {
      width: 160px;
      border: 1px solid #339999;
      color: #339999;
      margin: 30px auto;
    }
    .content_top{
        background: #ffffff;
        height: 390px;
        padding: 20px;
        border-radius: 6px;
        font-size: 14px;
        
    }
    .content_top span>p{
        width: 100%;
        margin-bottom: 10px;
        /* height: 52px; */
        line-height: 32px;
        border-bottom: 1px solid #EBEBEB;
        font-weight:bold;
    }
    /* .el-carousel__item:nth-child(2n),.el-carousel__item:nth-child(2n+2){
        background: #666;
    }
    .el-carousel__item{
        background: #333;
        border-radius: 6px;
        
    } */
    .recommend {
        /* width:430px; */
        height:335px;
        background:rgba(255,255,255,1);
        border-radius:6px;
        margin-top: 20px;
    }
    .recommend-tltle {
        padding: 21px 0px 15px 0px;
        margin-left: 21px;
        border-bottom: 1px solid #EBEBEB;
        font-size: 14px;
        font-weight: bold;
    }
    .recommend-main {
        display: flex;
        /* justify-content: space-between; */
        /* flex-direction:row; */
        flex-wrap:wrap;
        margin-left: 18px;
    }
    .recommend-main li {
        /* width:82px; */
        height:23px;
        /* background:rgba(212,234,255,1); */
        border:1px solid #CCCCCC;
        font-size: 12px;
        border-radius:12px;
        text-align: center;
        line-height: 23px;
        padding:0px 9px 5px 9px ;
        margin:5px 10px 5px 11px;
        color: #999;
    }
    .recommend-one {
        background:rgba(212,234,255,1);
        border:1px solid rgba(153, 204, 255, 1);
        color:rgba(0,102,204,1);
    }
    .assessment{
        background: #ffffff;
        /* padding: 20px; */
        border-radius: 6px;
    }
    .assessment >span >p{
        width: 100%;
        /* margin-bottom: 20px; */
        height: 52px;
        line-height: 52px;
        border-bottom: 1px solid #EBEBEB;
        padding-left: 20px;
        font-weight:bold;
        font-size:14px;
    }
    .assessment_color{
        color: #339999;
        text-align: center;
        padding: 30px 0;
        font-size:14px;
        font-family:PingFang SC;
        font-weight:bold;
    }
    .assessment_color>.button2{
        margin: 10px auto;
    }
    .beacon{
        background: #ffffff;
        margin-top: 20px;
        min-height: 338px;
    }
    .beacon>span>p{
        width: 100%;
        /* margin-bottom: 20px; */
        height: 52px;
        line-height: 52px;
        border-bottom: 1px solid #EBEBEB;
        padding-left: 20px;
        font-weight:bold;
        font-size:14px;
    }
    .beacon_apply{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 20px 0px;
        padding: 0 30px;
    }
    .apply_logo{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 6px;
    }
    .company_name{
        display: flex;
        line-height: 22px;
    }
    .company>h3{
        color: #333333;
        font-size: 14px;
        margin-top: 10px;
    }
    .company>p{
        color: #FF9900
    }
    .apply{
        width: 100px;
        height: 40px;
        background: #339999;
        color: #ffffff;
        border: none
    }
    .apply:active{
        border: none;
    }
    .union{
        margin-top: 20px;
        min-height: 180px;
    }
    .union_content{
        padding: 0 30px;
    }
    .union_img{
        width: 42px;
        height: 42px;
        border-radius: 50%;
        margin-top: 10px;
    }
    .banner_bottom{
        width: 100%;
        margin: 0 auto;
    }
</style>
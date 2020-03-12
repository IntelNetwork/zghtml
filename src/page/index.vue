<template>
    <div class="withdrawal">
         <headerSelect />
         <div class="indexContent">
             <el-row :gutter="24">
                <el-col :span="5">
                    <div class="grid-content content_left">
                        <div class="left_top">
                            <el-input
                                placeholder="他们在找"
                                suffix-icon="el-icon-search"
                                v-model="input1">
                            </el-input>
                        </div>
                        <div class="left_text">
                            <div class="arrow">
                                <span class="arrow-span">
                                  <span class="iconfont">&#xe61c;</span>
                                  <p>全职高手</p>
                                </span>
                                <span class="icon-2">
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
                                   <span class="iconfont">&#xe61b;</span>
                                   <p>众包精英</p>
                                </span>
                                <span class="icon-2">
                                    <i class="el-icon-arrow-down"></i>
                                </span>
                            </div>
                            <div class="work1">
                                <span v-for="(item,index) in work" :key="index">
                                    {{item}} 
                                    
                                </span>
                            </div>
                        </div>
                        <div class="left_text1">
                            <div class="arrow">
                                <span>
                                   <span class="iconfont">&#xe615;</span>
                                   <p>创客组队</p>
                                </span>
                                <span class="icon-2">
                                    <i class="el-icon-arrow-down"></i>
                                </span>
                            </div>
                            <div class="work1">
                                <span v-for="(item,index) in work" :key="index">
                                    {{item}} 
                                </span>
                            </div>
                        </div>
                        <!-- <div class="left_button">
                            <el-button class="button1" @click="rcharge">发布需求</el-button>
                            <el-button class="button2" @click="withdrawal">我要入驻</el-button>
                        </div> -->
                    </div>
                </el-col>
                <el-col :span="10">
                    <div class="grid-content content"> 
                        <div class="content_top">
                            <ul class="release-2">
                                <li class="release-2li" @click="taskRelease">
                                    <span class="iconfont">&#xe622;</span>发布需求
                                </li>
                                <li @click="enter">
                                    <span class="iconfont">&#xe66a;</span>我要入驻
                                </li>
                            </ul>
                            <!-- <span><p>今日推荐</p></span> -->
                            <el-carousel trigger="click" height="287px">
                                <el-carousel-item v-for="(item,index) in banner" :key="index">
                                    <img :src="item.src" alt="" class="img">
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
                                <li>阿里巴巴</li>
                                <li>悟空传媒</li>
                                <li>WPA</li>
                                <li>上海让雷科技技术有限公司</li>
                                <li>让雷科技</li>
                                <li>百度</li>
                                <li>让雷科技</li>
                                <li>缔荣纺织</li>
                                <li>缔荣纺织</li>
                                <li>德特贸易</li>
                                <li>阿里巴巴</li>
                                <li>悟空传媒</li>
                                <li>WPA</li>
                                <li>腾讯科技</li>
                                <li>瑞希咖啡</li>
                                <li>阿里妈妈</li>
                            </ul>
                            <p class="recommend-tltle">四海资讯</p>
                            <ul class="recommend-ul">
                                <li>
                                    <span class="net">[财经网]：</span>
                                    <span class="net-tltle">王思聪资产被冻结</span>
                                    <span class="net-data">2019-12-12</span>
                                </li>
                                <li>
                                    <span class="net">[星座网]：</span>
                                    <span class="net-tltle">2020星座运势</span>
                                    <span class="net-data">2019-12-12</span>
                                </li>
                                <li>
                                    <span class="net">[智工联盟]：</span>
                                    <span class="net-tltle">王思聪资产被冻结</span>
                                    <span class="net-data">2019-12-12</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content content_right">
                        <div class="assessment">
                            <span><p>个人数据资产价值评估</p></span>
                            <div  class="assessment_color">
                                <img src="../assets/aiming.png">
                                <div>
                                    <h3 class="aiming-tltle">我们比你更了解你自已</h3>
                                    <el-button class="button2" @click="people">立即测评</el-button>
                                </div>
                            </div>
                        </div>
                        <div class="beacon">
                            <p class="beacon-tltle">
                                <span class="iconfont">&#xe654;</span>微信公众号
                            </p>
                            <div class="wx">
                                <img src="../assets/qrcode.png" class="wx-img">
                                <ul class="wx-ul">
                                    <li class="wx-li1">扫一扫</li>
                                    <li class="wx-li2">关注小智一下</li>
                                    <li class="wx-li3">价值动态接收更及时</li>
                                </ul>
                            </div>
                            <div class="advertising">
                                <img src="../assets/advertising2.png">
                                <img src="../assets/advertising1.png">
                            </div>
                        </div>
                        
                    </div>
                </el-col>
            </el-row>
            <div class="hotunion">
                <p class="hotunion-tltle">热门联盟</p>
                <div class="hotunion_main">
                    <div class="hotunion_content">
                        <img src="../assets/union1.png">
                        <ul class="hotunion-ul">
                            <li class="hotunion_li1">千搜科技有限公司</li>
                            <li class="hotunion_li2"><span class="iconfont">&#xe613;</span><span>上海 徐汇区</span></li>
                        </ul>
                    </div>
                    <div class="hotunion_content">
                        <img src="../assets/union4.png">
                        <ul class="hotunion-ul">
                            <li class="hotunion_li1">千搜科技有限公司</li>
                            <li class="hotunion_li2"><span class="iconfont">&#xe613;</span><span>上海 徐汇区</span></li>
                        </ul>
                    </div>
                    <div class="hotunion_content">
                        <img src="../assets/union2.png">
                        <ul class="hotunion-ul">
                            <li class="hotunion_li1">千搜科技有限公司</li>
                            <li class="hotunion_li2"><span class="iconfont">&#xe613;</span><span>上海 徐汇区</span></li>
                        </ul>
                    </div>
                    <div class="hotunion_content">
                        <img src="../assets/union1.png">
                        <ul class="hotunion-ul">
                            <li class="hotunion_li1">千搜科技有限公司</li>
                            <li class="hotunion_li2"><span class="iconfont">&#xe613;</span><span>上海 徐汇区</span></li>
                        </ul>
                    </div>
                    <div class="hotunion_content">
                        <img src="../assets/union3.png">
                        <ul class="hotunion-ul">
                            <li class="hotunion_li1">千搜科技有限公司</li>
                            <li class="hotunion_li2"><span class="iconfont">&#xe613;</span><span>上海 徐汇区</span></li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>

         <fonter />
    </div>
</template>
<script>
    import headerSelect from "@/components/headerSelect";
    import fonter from "@/components/fonter";
    export default {
        data() {
            return {
                work: ["Java","C++", "PHP", "精准推荐", "C", ".NET", "C++","搜索算法","精准推荐","全栈工程师",".NET","Python","Delphi","VBRuby"],
                banner: [{
                        src: require("../assets/banner_img.png")
                    },
                    {
                        src: require("../assets/banner_img.png")
                    },
                    {
                        src: require("../assets/banner_img.png")
                    },
                    {
                        src: require("../assets/banner_img.png")
                    },
                    {
                        src: require("../assets/banner_img.png")
                    },
                    {
                        src: require("../assets/banner_img.png")
                    },
                ],
                input1:'',
            };
        },
        components: {
            headerSelect,
            fonter,
        },
        mounted() {

        },
        methods: {
             people() {
                let routeData = this.$router.resolve({
                    name: "assets"
                });
                window.open(routeData.href, "_blank");
            },
             // 充值
            rcharge() {
            },
            // 提现
            withdrawal() {
                this.$router.push({ 
                    name: 'login', 
                    query: {
                        id: this.id,
                    }
                })
            },
            taskRelease() {
                this.$router.push({ 
                    name: 'taskRelease', 
                    query: {
                        id: this.id,
                    }
                })
            },
            enter(){
                this.$router.push({ 
                    name: 'enter', 
                    query: {
                        id: this.id,
                    }
                })
            }
        }
    };
</script>
<style scoped>
.img{
    width: 100%
}
    .indexContent{
        width: 1320px;
        padding-top: 30px;
        margin: 0 auto;
        
    }
    .grid-content{
        width: 548px;
    }
    .content_left{
        width: 260px;
        height: 768px;
        background:#fff;
         border-radius:6px;
    }
    .content_right {
        width:470px;
    }
    .left_top{
        color: #333;
        height: 52px;
        line-height: 52px;
        padding: 0px 10px 0px 10px;
        border-bottom: 1px solid #EBEBEB;
       
    }
    .left_top>p{
        font-size: 16px;
        font-weight:bold;
    }
    .left_text{
        padding: 15px;
        border-bottom: 1px solid #EBEBEB;
    }
    .left_text1{
        padding: 15px;
    }
    .arrow{
        display: flex;
        justify-content: space-between;
       
    }
    .arrow span{
        font-size: 14px;
        font-weight:bold;
        line-height: 16px;
        padding-top: 20px;
    }
    /* .icon-2 {
        margin-top: 15px;
    } */
    .arrow-span {
        /* padding-top: 20px; */
    }
    .arrow span p {
        width: 20px;
        margin:5px 0px 0px 13px;
    }
    .arrow span .iconfont{
        margin-left:10px;
        font-size: 20px;
        color: #339999;
    }
    .work,.work1{
        padding:20px 30px;
        color: #666;
        font-size: 14px;
        line-height: 30px;
        margin-top: -114px;
        margin-left: 20px;
    }
    .work1 span{
        padding: 0 3px 0 5px;
        border-right: 1px solid #999;
    }
    .work span{
        padding: 0 3px 0 5px;
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
    .aiming-tltle {
        margin-top: 10px;
    }
    .button2 {
        width:160px;
        height:40px;
        background:rgba(102,153,204,0);
        border:1px solid #339999;
        color: #339999;
        border-radius:6px;
        margin-top: 10px;
    }
    .content_top{
        background: #ffffff;
        height: 390px;
        padding: 20px;
        border-radius: 6px;
        font-size: 14px;
    }
    .release-2 {
        width: 100%;
        height: 53px;
        display: flex;
        justify-content: space-between;
    }
    .release-2 li {
        width: 50%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
    }
    .release-2li {
        color: #339999;
        border-right: 1px solid #EDEDED;
    }
    .release-2 span {
        font-size: 23px;
        margin-right: 7px;
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
        height:358px;
        background:rgba(255,255,255,1);
        border-radius:6px;
        margin-top: 20px;
    }
    .recommend-tltle {
        width: 92%;
        margin: 0 auto;
        padding: 21px 0px 15px 0px;
        border-bottom: 1px solid #EBEBEB;
        font-size: 14px;
        font-weight: bold;
    }
    .recommend-ul {
        width: 367px;
        margin: 10px 0 0 20px;
        font-size: 14px;
        position: relative;
    }
    .recommend-ul li {
        line-height: 25px;
    }
    .net {
        color: #999999;
    }
    .net-tltle {
        color: #666666;
    }
    .net-data {
        color: #999999;
        position: absolute;
        right: 0;
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
        margin:5px 0px 5px 11px;
        color: #999;
    }
    .recommend-one {
        background:rgba(212,234,255,1);
        border:1px solid rgba(153, 204, 255, 1);
        color:rgba(0,102,204,1);
    }
    .assessment{
        background: #ffffff;
        height: 190px;
        /* padding: 20px; */
        border-radius: 6px;
    }
    .assessment >span >p{
        width: 100%;
        /* margin-bottom: 20px; */
        height: 52px;
        line-height: 52px;
        color: #333333;
        border-bottom: 1px solid #EBEBEB;
        padding-left: 20px;
        font-weight:bold;
        font-size:16px;
    }
    .assessment_color{
        width: 89%;
        margin: 0 auto;
        color: #339999;
        text-align: center;
        padding: 30px 0;
        font-size:14px;
        font-family:PingFang SC;
        font-weight:bold;
        display: flex;
    }
    .assessment_color>.button2{
        margin: 10px auto;
    }
    .assessment_color>div {
        margin-left: 47px;
    }
    .beacon{
        height: 557px;
        background: #ffffff;
        margin-top: 20px;
        min-height: 338px;
    }
    .beacon-tltle {
        width: 100%;
        height: 47px;
        line-height: 25px;
        border-bottom: 1px solid #EBEBEB;
        padding: 11px 0px 0px 29px;
    }
    .beacon-tltle span {
        margin-right: 11px;
        color: #999999;
    }
    /* 微信 */
    .wx {
        width:410px;
        height:164px;
        background: url(../assets/qrcodebg.png) no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
        border-radius:6px;
        display: flex;
    }
    .wx-img {
        width:185px;
        height:193px;
        margin: 0px 0px 0px 30px;
    }
    .wx-ul {
        margin: 45px 0px 0px 0px;
    }
    .wx-ul li {
        margin-top: 5px;
    }
    .wx-li1 {
        color: #378A80;
        font-size: 24px;
        font-family:Microsoft YaHei;
        font-weight:bold;
    }
    .wx-li2 {
        color: #378A80;
        font-size: 16px;
    }
    .wx-li3 {
        width:127px;
        height:22px;
        background:#339999;
        border-radius:11px;
        font-size: 12px;
        text-align: center;
        line-height: 22px;
        color: #FFFFFF;
        margin-left: -10px
    }
    .advertising {
        margin: 0 auto;
        margin-top: 8px;
        padding-bottom: 10px;
    }
    .advertising img {
        margin:10px 32px 0px 32px;
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
    .hotunion {
        width:1312px;
        height:170px;
        background:rgba(255,255,255,1);
        box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius:6px;
        margin-top: 20px;
    }
    .hotunion-tltle {
        /* width:65px;
        height:16px; */
        font-size:16px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(51,51,51,1);
        padding: 20px 0px 0px 20px;
    }
    .hotunion_main {
        width: 97%;
        margin: 0 auto;
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
    }
    .hotunion_content {
        width: 190px;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
    }
    .hotunion-ul {
        margin-top: 8px;
    }
    .hotunion-ul li {
        margin-top: 5px;
    }
    .hotunion_li1 {
        font-size: 16px;
        color: #666666;
    }
    .hotunion_li2 {
        font-size: 12px;
        color: #333333;
    }
    .hotunion_li2 .iconfont {
        margin-right: 10px;
        color: #CCCCCC;
    }
</style>
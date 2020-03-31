<template>
    <div class="withdrawal">
         <headerSelect />
         <div class="indexContent">
             <el-row :gutter="24">
                <el-col :span="5">
                    <div class="grid-content content_left">
                        <!-- <div class="left_top">
                            <el-input
                                placeholder="他们在找"
                                suffix-icon="el-icon-search"
                                v-model="input1">
                            </el-input>
                        </div> -->
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
                                <span class="arrow-span">
                                  <span class="iconfont">&#xe61b;</span>
                                  <p>众包精英</p>
                                </span>
                                <span class="icon-2">
                                    <i class="el-icon-arrow-up"></i>
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
                                <span class="arrow-span">
                                  <span class="iconfont">&#xe615;</span>
                                  <p>创客组队</p>
                                </span>
                                <span class="icon-2">
                                    <i class="el-icon-arrow-up"></i>
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
                <el-col :span="11">
                    <div class="grid-content content"> 
                        <div class="content_top">
                            <ul class="release-2">
                                <li class="release-2li" @click="taskRelease">
                                   <img src="../assets/index/elves1.png" alt="">
                                   <div>
                                       <P :style="{'font-size':'14px','color':'#333333'}">免费发布需求</P>
                                       <P :style="{'font-size':'12px','color':'#999999'}">用更少的人找更多的人干活</P>
                                   </div>
                                </li>
                                <li @click="enter" class="release-li">
                                    <img src="../assets/index/elves2.png" alt="">
                                   <div>
                                       <P :style="{'font-size':'14px','color':'#333333'}">签约成服务者</P>
                                       <P :style="{'font-size':'12px','color':'#999999'}">让碎片化的时间成为金钱</P>
                                   </div>
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
                            <div class="data-2">
                                <img src="../assets/index/elves6.png" alt="">
                                <p>个人数据资产价值评估</p>
                            </div>
                            <div  class="assessment_color">
                                <div class="radar">
                                    <div id="main" style="width: 100%;height:100%;"></div>
                                </div>
                                <ul class="logina">
                                    <li class="logina-li">
                                        <div class="logina-img">
                                            <img src="../assets/index/elves5.png">
                                        </div>
                                        <div class="logina-data">
                                            <p class="loginp1">Hi~欢迎来到智工网</p>
                                            <p class="loginp2">个人数据资产测评 <img src="../assets/index/elves3.png"></p>
                                        </div>
                                    </li>
                                    <li class="logina-li1" v-if="token==null">
                                        <el-button type="text" class="registered1">登录</el-button>
                                        <el-button type="text" class="registered2">注册</el-button>
                                    </li>
                                    <li class="vip" v-if="token!=null">
                                        <el-button type="text" class="vipbutton">开通智工PULS会员</el-button>
                                    </li>
                                </ul>
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
            <div class="parttime">
                <p class="hotunion-tltle">
                    <span>靠谱兼职</span>
                    <span :style="{'color':'#999999','font-size':'12px','padding-right':'24px'}">查看更多热门企业</span>
                </p>
                <div class="parttime-main">
                    <div class="parttime-module">
                        <p>瑞幸咖啡（学生兼职）</p>
                        <ul>
                            <li>悬赏任务</li>
                            <li>线下餐饮</li>
                            <li>1个月</li>
                        </ul>
                        <span>￥30/小时</span>
                    </div>
                    <div class="parttime-module">
                        <p>瑞幸咖啡（学生兼职）</p>
                        <ul>
                            <li>悬赏任务</li>
                            <li>线下餐饮</li>
                            <li>1个月</li>
                        </ul>
                        <span>￥30/小时</span>
                    </div>
                    <div class="parttime-module">
                        <p>瑞幸咖啡（学生兼职）</p>
                        <ul>
                            <li>悬赏任务</li>
                            <li>线下餐饮</li>
                            <li>1个月</li>
                        </ul>
                        <span>￥30/小时</span>
                    </div>
                    <div class="parttime-module">
                        <p>瑞幸咖啡（学生兼职）</p>
                        <ul>
                            <li>悬赏任务</li>
                            <li>线下餐饮</li>
                            <li>1个月</li>
                        </ul>
                        <span>￥30/小时</span>
                    </div>
                    <div class="parttime-module">
                        <p>瑞幸咖啡（学生兼职）</p>
                        <ul>
                            <li>悬赏任务</li>
                            <li>线下餐饮</li>
                            <li>1个月</li>
                        </ul>
                        <span>￥30/小时</span>
                    </div>
                </div>
            </div>
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
                token:""
            };
        },
        components: {
            headerSelect,
            fonter,
        },
        mounted() {
            this.token = sessionStorage.getItem("token")
            this.echarts()
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
                if(this.token==null){
                    this.$message.warning("请先登录");
                    setTimeout(()=>{
                        let routeData = this.$router.resolve({
                            name: "login"
                        });
                        window.open(routeData.href, "_blank");
                    },2000)
                    
                }else{
                    this.$router.push({ 
                        name: 'taskRelease', 
                    })
                }
                
            },
            enter(){
                this.$router.push({ 
                    name: 'enter', 
                    query: {
                        id: this.id,
                    }
                })
            },
            echarts(){
                let myChart = this.$echarts.init(document.getElementById("main"));
                myChart.setOption({
                    textStyle: {
                        color: ["#CCCCCC"],
                        fontSize: 10,
                        margin: [
                            0,  // 上
                            10, // 右
                            5,  // 下
                            0, // 左
                        ]
                    },
                    grid: { // 控制图的大小，调整下面这些值就可以，
                        x: 40,
                        x2: 100,
                        y2: 150// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
                    },
                    radar: [
                        {
                             
                        },
                        {
                            indicator: [
                            { text: "工作", max: 150 },
                            { text: "项目", max: 150 },
                            { text: "学习", max: 150 },
                            { text: "社交", max: 120 },
                            { text: "技能", max: 108 },
                            ],
                            splitArea: {
                                show: true,
                                areaStyle: {
                                    color:"#FFFFFF",
                                    opacity: 0.7
                                    //网格
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    width: 1,
                                    color:"#C0C0C0",
                                    opacity: 0.5
                                }
                            },
                            nameGap : 3, // 图中工艺等字距离图的距离
                            center: ["50%", "50%"],
                            radius: 50,
                            startAngle: 90,
                            splitNumber: 4,
                            namegap:0
                        }
                    ],
                    series: [
                        {
                            type: "radar",
                            radarIndex: 1,
                            data: [
                                {
                                    value: [100, 108, 100, 100, 99, 70],
                                    areaStyle: {
                                    color: "#5BA3ED",
                                    opacity: 0.9
                                    },
                                    itemStyle: {
                                    normal: {
                                        color: "#15B799", 
                                        lineStyle: {
                                            color: "#5BA3ED"
                                        },
                                        areaStyle: {
                                            type: "default"
                                        }
                                    }
                                    }
                                },
                            ]
                        }
                    ]
                });
            }
        }
    };
</script>
<style scoped>
    .img{
        width: 100%
    }
    .indexContent{
        width: 1200px;
        padding-top: 30px;
        margin: 0 auto;
        
    }
    .grid-content{
        width: 534px;
    }
    .content_left{
        width: 240px;
        height: 768px;
        background:#fff;
         border-radius:6px;
    }
    .content_right {
        width:406px;
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
        /* padding: 15px; */
        border-bottom: 1px solid #EBEBEB;
    }
    .left_text1{
        padding: 15px;
    }
    .arrow{
        width: 86%;
        height: 44px;
        line-height: 44px;
        display: flex;
        justify-content: space-between;
    }
    .arrow span{
        font-size: 14px;
        font-weight:bold;
        line-height: 16px;
        /* padding-top: 20px; */
    }
    .icon-2 {
        margin-top: 15px;
    }
    .arrow-span {
        display: flex;
        margin-left: 15px;
    }
    .arrow span p {
        width: 100%;
        line-height: 44px;
    }
    .arrow span .iconfont{
        margin:13px 10px 0px 0px;
        font-size: 20px;
        color: #339999;
    }
    .work,.work1{
        width: 90%;
        margin: 10px auto 20px auto;
        color: #666;
        font-size: 14px;
        line-height: 30px;
        /* margin-top: -114px; */
        /* margin-left: 20px; */
    }
    .work1 span{
        padding-right: 9px;
        margin: 5px 5px 5px 5px;
        border-right: 1px solid #999;
    }
    .work span{
        padding-right: 9px;
        margin: 5px 5px 5px 5px;
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
        width: 48%;
        height: 40px;
        font-size: 16px;
        cursor: pointer;
    }
    .release-2li {
        border-right: 1px solid #EDEDED;
        display: flex;
    }
    .release-li {
        display: flex;
    }
    .release-li img {
        width: 34px;
        height: 34px;
    }
    .release-li div {
        margin-left: 25px;
        line-height: 18px;
    }
    .release-2li img {
        width: 34px;
        height: 34px;
    }
    .release-2li div {
        margin-left: 25px;
        line-height: 18px;
    }
    .release-2 span {
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
        width: 100%;
        margin: 0 auto;
        color: #339999;
        text-align: center;
        font-size:14px;
        font-family:PingFang SC;
        font-weight:bold;
        display: flex;
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
    .data-2 {
        width: 97%;
        height: 44px;
        border-bottom: 1px solid #e9e9e9;
        line-height: 44px;
        display: flex;
    }
    .data-2 img {
        width: 20px;
        height: 16px;
        margin: 12px 10px 0px 10px;
    }
    .radar {
        width: 176px;
        height: 144px;
    }
    .logina {
        width: 225px;
        height: 124px;
    }
    .logina-li {
        display: flex;
        margin-top: 20px;
    }
    .logina-img {
        width:60px;
        height:60px;
        background:#D4E6E3;
        border-radius:50%;
    }
    .logina-img img {
        margin: 3%;
    }
    .logina-data {
        margin:10px 0px 0px 20px;
        line-height: 18px;
        text-align: left;
    }
    .vip {
        margin: 10px 0px 0px -10px;
    }
    .logina-li1 {
        margin: 10px 0px 0px -10px;
    }
    .vipbutton {
        width:180px;
        height:34px;
        line-height: 12px;
        background:rgba(255,255,255,0);
        border:1px solid rgba(51, 153, 153, 1);
        color: #339999;
        border-radius:17px;
    }
    .loginp1 {
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
    }
    .loginp2 {
        font-size:12px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:#339999;
        text-align: left;
    }
    .registered1 {
        width:100px;
        height:34px;
        line-height: 12px;
        background:rgba(51,153,153,1);
        border:1px solid rgba(51, 153, 153, 1);
        border-radius:17px;
        color: #ffffff;
    }
    .registered2 {
        width:100px;
        height:34px;
        background:rgba(255,255,255,0);
        border:1px solid rgba(51, 153, 153, 1);
        border-radius:17px;
        line-height: 12px;
        color: #339999;
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
        width: 100%;
        margin: 0 auto;
        margin-top: 8px;
        padding-bottom: 10px;
    }
    .advertising img {
        width: 94%;
        height: 100%;
        margin: 10px auto auto 10px;
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
    .parttime {
        width:1221px;
        height:187px;
        margin: 20px auto;
        background:rgba(255,255,255,1);
        border-radius:6px;
    }
    .parttime-main {
        width: 100%;
        height: 130px;
        display: flex;
        margin: 10px 0px 0px 0px;
    }
    .parttime-module {
        width: 245px;
        border-right: 1px solid #e9e9e9;
        padding: 0px 14px 0px 15px;
    }
    .parttime-module p {
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:#666666;
        margin: 10px 0px 15px 0px;
    }
    .parttime-module span {
        color: #FF9966;
        font-size: 16px;
        font-family:PingFang SC;
        font-weight:600;
        margin: 10px 0px 0px 0px;
    }
    .parttime-module ul {
        display: flex;
        justify-content: space-between;
        margin: 5px 0px 25px 0px;
    }
    .parttime-module ul li {
        color: #999999;
        background:rgba(239,239,239,1);
        border-radius:6px;
        padding: 5px;
        font-size: 12px;
    }
    .hotunion {
        width:1221px;
        height:170px;
        background:rgba(255,255,255,1);
        box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius:6px;
        margin: 20px auto auto  auto;
    }
    .hotunion-tltle {
        width:100%;
        height:44px;
        border-bottom: 1px solid #e9e9ee;
        line-height: 44px;
        font-size:16px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(51,51,51,1);
        padding: 0px 0px 0px 20px;
        display: flex;
        justify-content: space-between;
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
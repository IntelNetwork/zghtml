<template>
    <div>
        <!-- 头部 -->
        <div>
            <headerSelect />
        </div>
        <div class="main">
            <div class="main-left">
                <div class="left-img">
                    <img src="../../assets/head.jpg" alt="头像" class="head">
                </div>
                <ul class="name">
                    <li class="name1">翁少锋</li>
                    <li class="name2">
                        <i class="el-icon-share"></i>已认证
                    </li>
                </ul>
                <div class="personal">
                    <p>我会为成为更好人</p>
                </div>
                <ul class="company">
                    <li> <i class="el-icon-share"></i></li>
                    <li>让雷科技</li>
                    <li>|</li>
                    <li>Ui设计师</li>
                </ul>
                <ul class="data">
                    <li> <i class="el-icon-share"></i><span>18岁</span></li>
                    <li>|</li>
                    <li>男</li>
                    <li>|</li>
                    <li>在职</li>
                </ul>
                <ul class="QQ">
                    <li><i class="el-icon-share"></i><p>15037217092</p></li>
                    <li><i class="el-icon-share"></i><p>1111111111</p></li>
                    <li><i class="el-icon-share"></i><p>147147147@163.com</p></li>
                </ul>
                <div class="Project-experience">
                    <p class="experience-tltle">项目经历</p>
                    <el-button class="experience-botton">点击添加</el-button>
                    <div class="hr"></div>
                </div>
                <!-- 工作经历 -->
                <div class="experience">
                    <ul class="experience-ul">
                        <li class="experience-1">工作经历</li>
                        <li class="experience-2"><el-button type="text">添加</el-button></li>
                    </ul>
                    <div class="block">
                        <el-timeline>
                            <el-timeline-item
                                v-for="(activity, index) in activities"
                                :key="index"
                                :color="activity.color"
                                >
                                <div class="toptimestamp">
                                    <div>
                                        <p class="timestamp1">
                                            {{activity.content}}
                                        </p>
                                        <p class="timestamp">
                                            {{activity.timestamp}}
                                        </p>
                                    </div>
                                    <p class="date-botton">
                                        <span>2017.09-2017.09</span>
                                        <el-button type="text" class="edit">编辑</el-button>
                                    </p>
                                </div>
                                <div class="elcard">
                                    <el-card>
                                        <p class="Jobcontent">{{activity.Jobcontent}}</p>
                                    </el-card>
                                </div>
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                </div>
                <!-- 教育经历 -->
                <div class="school">
                    <div>
                        <ul class="experience-ul">
                            <li class="experience-1">教育经历</li>
                            <li class="experience-2"><el-button type="text">添加</el-button></li>
                        </ul>
                        <div class="block">
                            <el-timeline>
                                <el-timeline-item
                                    v-for="(activity, index) in school"
                                    :key="index"
                                    :color="activity.color"
                                    >
                                    <div class="toptimestamp">
                                        <div>
                                            <p class="school1">
                                                {{activity.schoolname}}
                                            </p>
                                            <p class="timestamp">
                                                {{activity.schooltie}}
                                            </p>
                                        </div>
                                        <p class="date-botton">
                                            <span>{{activity.graduation}}</span>
                                            <el-button type="text" class="edit">编辑</el-button>
                                        </p>
                                    </div>
                                </el-timeline-item>
                            </el-timeline>
                        </div>
                    </div>
                </div>
                <!-- 下载 -->
                <div class="download">
                    <div>
                        <el-button class="download-button">下载到本地</el-button>
                    </div>
                    <p>更新时间：2019-11-18 17:31:34</p>
                </div>
            </div>
            <div class="main-right">
                <ul class="right-top">
                    <li class="right-topli">投递记录</li>
                    <li>我的office</li>
                </ul>
                <div class="upload">
                    <i class="el-icon-share"></i>上传附件简历
                </div>
                <div class="central-control">
                    <ul class="central-control_top">
                        <li>你的简历完善度为：100%</li>
                        <li><el-progress :text-inside="true" :stroke-width="15" :percentage="100" ></el-progress></li>
                    </ul>
                    <div class="preview">
                        <el-button class="preview-button">预览</el-button>
                    </div>
                    <ul class="anchor-point">
                        <li>基本信息</li>
                        <li>项目经历</li>
                        <li>教育经历</li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <fonter />
        </div>
    </div>
</template>
<script>
    import headerSelect from "@/components/headerSelect";
    import fonter from "@/components/fonter";
    export default {
        data() {
            return {
                activities: [{
                    content: '项目名称',
                    timestamp: '职位',
                    color: '#339999',
                    Jobcontent:"Ui设计师的主要工作是负责软件界面的美术设计、创意工作和制作工作;根据各种相关软件的用户群，提出构思新颖、有高度吸引力的创意设计;对页面进行优化，使用户操作更趋于人性化;维护现有的应用产品;收集和分析用户对于GUI的需求。”"
          
                }, {
                    content: '项目名称',
                    timestamp: '职位',
                    color: '#339999'
                }, {
                    content: '项目名称',
                    timestamp: '职位',
                    color: '#339999'
                }],
                school: [{
                    schoolname:'上海戏精学院',
                    schooltie:'艺术设计 本科',
                    graduation:'2014毕业',
                }]
                };
        },
        mounted() {
            // this.getCookie();
        },
        components: {
            fonter,
            headerSelect
        },
        methods: {

        }
    };
</script>
<style scoped>
    .main {
        width: 1050px;
        min-width: 1050px;
        margin: 0 auto;
        margin-top: 77px;
        display: flex;
    }
    /* 左侧 */
    .main-left {
        width:710px;
        /* height:1189px; */
        background:rgba(255,255,255,1);
        border-radius:6px;
    }
    .left-img {
        width: 100%;
        height: 70px;
        position: relative;
        margin: 0 auto;
    }
    .head {
        width:100px;
        height:100px;
        border-radius:50%;
        position: absolute;
        top: -50px;
        left: 43%;
    }
    .name {
        width: 142px;
        height: 50px;
        margin: 0 auto;
        display: flex;
    }
    .name1 {
        width:73px;
        height:24px;
        font-size:22px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(51,51,51,1);
    }
    .name2 {
        width:52px;
        height:19px;
        line-height: 25px;
        font-size: 10px;
        background-color: #339999;
        color: #ffffff;
    }
    .personal {
        width: 300px;
        height: 20px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:26px;
        margin: 0 auto;
        text-align: center;
    }
    .company {
        width: 185px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        margin-top: 39px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
    }
    .data {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        margin-top: 20px;
        width:131px;
        height:17px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
    }
    .QQ {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        margin-top: 20px;
        width:500px;
        height:17px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
    }
    .QQ li {
        display: flex;
    }
    /* 项目经历 */
    .Project-experience {
        width: 590px;
        margin: 0 auto;
        margin-top: 46px;
       
    }
    .experience-tltle {
        width:72px;
        height:19px;
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(0,0,0,1);
    }
    .experience-botton {
        width:196px;
        height:40px;
        border:1px solid rgba(202, 201, 202, 1);
        margin-top: 19px;
    }
    .hr {
        width: 590px;
        height: 1px;
        background-color: #F0F0F0;
        margin: 0 auto;
         margin-top: 40px;
    }
    /* 工作经历 */
    .experience {
        width: 590px;
        margin: 0 auto;
        margin-top: 40px;
        border-bottom: 1px solid #EDEDED;
    }
    .experience-ul {
        width: 99%;
        display: flex;
        justify-content: space-between;
    }
    .experience-1 {
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:400;
        /* color:#339999; */
    }
    .experience-2 {
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        
    }
    .experience-2 button {
        color:rgba(51,153,153,1);
    }
    /* 教育经历 */
    .school {
        width: 590px;
        margin: 0 auto;
        margin-top: 35px;

    }
    /* 下载 */
    .download {
        width: 590px;
        margin: 0 auto;
        margin-top: 35px;
        border-top: 1px solid #EDEDED;
        text-align: center;
        margin-bottom: 40px;
    }
    .download-button {
        width:383px;
        height:40px;
        background:rgba(51,153,153,1);
        color: #ffffff;
        border:2px solid rgba(51, 153, 153, 1);
        border-radius:6px;
        margin-top: 44px;
    }
    .download p {
        margin-top: 11px;
        /* width:206px; */
        height:15px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(153,153,153,1);
    }
    /* 右侧 */
    .main-right {
        width:270px;
        /* background:rgba(255,255,255,1); */
        /* border-radius:6px; */
        margin-left: 20px;
    }
    .right-top {
        width:270px;
        height:60px;
        background:rgba(255,255,255,1);
        border-radius:6px;
        display: flex;
        justify-content: space-between;
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
    }
    .right-top li {
        width: 50%;
        text-align: center;
        line-height: 60px;
        cursor: pointer;
    }
    .right-topli {
        border-right: 1px solid #F0F0F0;
    }
    .upload {
        width:270px;
        height:60px;
        background:rgba(255,255,255,1);
        border-radius:6px;
        margin-top: 20px;
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
        text-align: center;
        line-height: 60px;
        cursor: pointer;
    }
    .central-control {
        width:270px;
        height:312px;
        background:rgba(255,255,255,1);
        border-radius:6px;
        margin-top: 17px;
    }
    .central-control_top {
        width: 80%;
        margin: 0 auto;
        padding-top: 23px;
    }
    .central-control_top li {
        text-align: center;
        margin-top: 15px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(153,153,153,1);
    }
    .preview {
        width:196px;
        margin: 0 auto;
        margin-top: 20px;
    }
    .preview-button {
        width:196px;
        height:40px;
        border:1px solid rgba(202, 201, 202, 1);
    }
    /* 锚点链接 */
    .anchor-point {
        width:57px;
        height:86px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        /* color:rgba(51,153,153,1); */
        line-height:36px;
        margin: 0 auto;
        margin-top: 30px;
    }
    .anchor-point li {
        cursor: pointer;
    }
    /* 时间轴 */
    .block {
        margin-top: 30px;
    }
    .toptimestamp {
        display: flex;
    }
    .timestamp1 {
        width: 410px;
    }
    .school1 {
        width: 462px;
    }
    .timestamp {
        width: 100px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(153,153,153,1);
        margin-top: 8px;
    }
    .date-botton span {
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(153,153,153,1);
    }
    .edit {
        color: #339999;
    }
    .Jobcontent {
        color: #999999;
    }
</style>
<template>
  <div>
    <headerSelect></headerSelect>
    <div class="chanceContent">
        <div class="chanceTop">
            <div class="topContent">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item>
                        <p>职能搜索：</p>
                        <el-input v-model="formInline.user" placeholder="   Ui   /   ava   c++  "></el-input>
                    </el-form-item>
                    <el-form-item>
                        <p>按地区搜索</p>
                        <el-input v-model="formInline.user" placeholder="上海   /   北京   深圳"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button  class="btn">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="list">
            <div class="listLeft">
                <div class="position">
                    <span class="positionSum">
                        <p>根据你当前的简历信息和职业评测，我们为你推荐了 <i>1847</i> 个职位</p>
                    </span>
                    <span>
                        <p> < 1 / 60 ></p>
                    </span>
                </div>
                <div class="positionInformation">
                    <div class="information" v-for="(item,index) in position" :key="index" @click="people">
                        <div class="positionImg">
                            <img :src="item.icon" alt="">
                            <i class="el-icon-more"></i>
                        </div>
                        <p class="professional">{{item.professional}}</p>
                        <h3>{{item.company}}</h3>
                        <p class="location"><i class="el-icon-location"></i> {{item.location}}</p>
                        <span class="border"></span>
                        <div class="time">
                            <p><i class="el-icon-time"> {{item.time}}</i></p>
                            <p class="jion">我想加入</p>
                        </div>
                    </div>
                </div>
                <div class="pagination">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage1"
                        :page-size="pageSize"
                        layout="prev, pager, next, total"
                        :total="total">
                    </el-pagination>
                </div>
            </div>
            <div class="listRight">
                <div class="demand">
                    <span class="iconfont">
                        &#xe634;
                    </span>
                    <span class="demandContent">
                        <h4>企业入口</h4>
                        <p>发布职位，信息等</p>
                    </span>
                </div>
                <div class="rightContent">
                    <div class="clinchTitle">
                        <div>
                            <p>TOP企业榜</p>
                            <span></span>
                        </div>
                        <div class="hot">
                            <p>HOT</p>
                        </div>
                    </div>
                    <div>
                        <div class="hotcontent">
                            <img src="../../assets/top.jpg" alt="">
                            <span>阿里音乐</span>
                        </div>
                        <div class="hotcontent">
                            <img src="../../assets/top.jpg" alt="">
                            <span>阿里音乐</span>
                        </div>
                        <div class="hotcontent">
                            <img src="../../assets/top.jpg" alt="">
                            <span>阿里音乐</span>
                        </div>
                    </div>
                </div>
                <div class="task">
                    <img src="../../assets/task15.png" alt="">
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
        pageSize: 6,
        total:10,
        currentPage1:0,
        formInline:{
            user:"",
        },
        position:[
            {
                icon: require("../../assets/top.jpg"),
                professional: "ui设计师",
                company: "腾讯科技有限公司",
                location: "上海 徐汇区",
                time: "1天前"
            },
            {
                icon: require("../../assets/top.jpg"),
                professional: "ui设计师",
                company: "腾讯科技有限公司",
                location: "上海 徐汇区",
                time: "1天前"
            },
            {
                icon: require("../../assets/top.jpg"),
                professional: "ui设计师",
                company: "腾讯科技有限公司",
                location: "上海 徐汇区",
                time: "1天前"
            }, 
            {
                icon: require("../../assets/top.jpg"),
                professional: "ui设计师",
                company: "腾讯科技有限公司",
                location: "上海 徐汇区",
                time: "1天前"
            },
            {
                icon: require("../../assets/top.jpg"),
                professional: "ui设计师",
                company: "腾讯科技有限公司",
                location: "上海 徐汇区",
                time: "1天前"
            },
            {
                icon: require("../../assets/top.jpg"),
                professional: "ui设计师",
                company: "腾讯科技有限公司",
                location: "上海 徐汇区",
                time: "1天前"
            },
             {
                icon: require("../../assets/top.jpg"),
                professional: "ui设计师",
                company: "腾讯科技有限公司",
                location: "上海 徐汇区",
                time: "1天前"
            },
            {
                icon: require("../../assets/top.jpg"),
                professional: "ui设计师",
                company: "腾讯科技有限公司",
                location: "上海 徐汇区",
                time: "1天前"
            },
            {
                icon: require("../../assets/top.jpg"),
                professional: "ui设计师",
                company: "腾讯科技有限公司",
                location: "上海 徐汇区",
                time: "1天前"
            }, 
            {
                icon: require("../../assets/top.jpg"),
                professional: "ui设计师",
                company: "腾讯科技有限公司",
                location: "上海 徐汇区",
                time: "1天前"
            },
            {
                icon: require("../../assets/top.jpg"),
                professional: "ui设计师",
                company: "腾讯科技有限公司",
                location: "上海 徐汇区",
                time: "1天前"
            },
            {
                icon: require("../../assets/top.jpg"),
                professional: "ui设计师",
                company: "腾讯科技有限公司",
                location: "上海 徐汇区",
                time: "1天前"
            },
        ]
    };
  },
  components: {
    headerSelect, 
    fonter,
  },
  created() {
      this.total = this.position.length
  },
  methods: {
      handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        people(){
            let routeData = this.$router.resolve({
                name: "chanceDetails"
            });
            window.open(routeData.href, "_blank");
        }
  }
};
</script>
<style type="text/css" scoped>
    i{
        font-style: normal;
    }
    .chanceTop{
        
        background: #ffffff;
    }
    .topContent{
        width: 1000px;
        margin: 10px auto;
    }
    .btn{
        margin-top: 38px;
        width: 164px;
        height: 40px;
        background: #339999;
        color: #ffffff;
    }
    .el-input{
        width: 384px;
        height: 40px;
    }
    .list{
        width: 1000px;
        margin: 16px auto;
        display: flex;
        justify-content: space-between;
    }
    .listLeft{
        width: 710px;
        background: #ffffff;
        padding: 30px;
    }
    .position{
        display: flex;
        justify-content: space-between;
    }
    .positionSum i{
        color: #339999;

    }
    .positionInformation{
        margin-top: 22px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .information{
        width:206px;
        height:240px;
        border:1px solid rgba(235, 235, 235, 1);
        border-radius:6px;
        padding: 20px 18px;
        margin-top: 20px;
    }
    .information:hover{
        box-shadow:0px 4px 8px 0px rgba(0, 0, 0, 0.1);
    }
    .positionImg img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
    .positionImg{
        display: flex;
        justify-content: space-between;
    }
    .information h3{
        font-size: 14px;
    }
    .location{
        color: #333333;
        font-size: 12px;
        line-height: 30px
    }
    .location i{
        color: #CCCCCC;
    }
    .professional{
        margin: 12px 0;
    }
    .border{
        width: 46px;
        height: 2px;
        background: #CCCCCC;
        display: inline-block;
    }
    .el-icon-time{
        color: #CCCCCC;
        margin-right: 12px;
    }
    .time{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    .time p{
        font-size: 12px;
        color: #666666;
    }
    .time .jion{
        color: #339999;
        font-size: 14px;
        margin-top: 14px;
    }
    .pagination{
        margin-top: 40px;
        text-align: center;
    }
    .listRight{
        width: 270px
    }
    .demand{
        width: 100%;
        height: 90px;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius:6px;
    }
    .iconfont{
        font-size:46px; 
        color: #339999;
        margin-right: 26px
    }
    .demandContent{
        font-size: 14px;
        color:#999;
    }
    .demandContent h4{
        font-size: 18px;
        color: #339999;
        font-weight: 400;
        margin-bottom: 10px;
    }
    .clinchTitle{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #E8ECEE;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .clinchTitle p{
        /* padding-top: 20px; */
        padding-left: 20px;
        color: #666;
        font-size: 16px;
        font-weight: 400;
    }
    /* .clinchTitle span{
        margin-left: 20px;
        width: 34px;
        height: 2px;
        background: #339999;
        display: inline-block;
        margin-top: 10px
    } */
    .rightContent{
        background: #ffffff;
        margin-top: 20px;
        padding: 20px;
    }

    .hot p{
        color: #339999;
        /* width: 36px;*/
        /* height: 22px;  */
        
        /* line-height: 50px; */
    }
    .hotcontent{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        margin-top: 40px;
    }
    .hotcontent img{
        width: 102px;
        height: 50px;
    }
    .task{
        margin-top: 20px;
    }
</style>

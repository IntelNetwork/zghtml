<template>
  <div class="box">
    <div>
      <headerSelect />
    </div>
    <div class="main">
      <div class="left">
        <personalLeft />
      </div>
      <div class="center">
        <div class="center-tltle">
          <img src="../../assets/top.jpg" alt class="head" />
          <p class="headline">创业集结号</p>
          <p class="nav-li2">
            返回我的部落
            <span class="iconfont">&#xe63c;</span>
          </p>
        </div>
        <div class="tabs-a">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="动态" name="first">
              <div class="forum">
                <ul class="forum-tltle">
                  <li class="topic">
                    <span class="iconfont">&#xe61e;</span>话题
                  </li>
                  <li>
                    <span class="iconfont">&#xe63d;</span>分享
                  </li>
                  <li>
                    <span class="iconfont">&#xe748;</span>投票
                  </li>
                </ul>
                <div class="forum-img">
                  <img src="../../assets/tribal/touxiang1.png" class="" alt="图片">
                  <el-input class="forum-imginput" v-model="input" placeholder="请输入话题标题，至少五个字以上"></el-input>
                </div>
                <div class="mainbody">
                  <el-input type="textarea" class="mainbody-imginput" v-model="input1"  placeholder="请输入话题标题，至少五个字以上"></el-input>
                </div>
                <div class="smiling">
                  <p>
                    <img src="../../assets/tribal/xl.png" alt="">表情
                  </p>
                  <p>
                    <img src="../../assets/tribal/tuku.png" alt="">表情
                  </p>
                  <el-button class="smiling-button">发布</el-button>
                </div>
              </div>
              <div class="dynamic">
                <ul class="dynamic-title">
                  <li>部落动态</li>
                  <li>
                    动态时间
                    <span class="iconfont">&#xe63c;</span>
                  </li>
                </ul>
                <div class="data">
                  <div class="it">
                    <div class="each">
                      <img src="../../assets/top.jpg" class="itimg" />
                      <ul>
                        <li class="each-name">
                          <p>党开心</p>
                          <span>测试工程师</span>
                        </li>
                        <li class="each-tltle">明天去约会，穿什么鞋子好？</li>
                        <li class="each-content">
                          南通启东江景壹号售楼处，真相震惊，楼盘最新解析！【官网】2019南通启东江景壹号独家消息!
                          真相震惊整个南通启东!请看图文解析南通启东江景壹号——大家千万不要被外界的传闻迷惑了!
                        </li>
                        <li class="each-date">
                          <p class="comments-date">发布于2016-12323</p>
                          <p class="comments">
                            <span class="iconfont">&#xe635;</span>254
                          </p>
                          <p class="comments">
                            <span class="iconfont">&#xe60c;</span> 254
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="it">
                    <div class="each">
                      <img src="../../assets/top.jpg" class="itimg" />
                      <ul>
                        <li class="each-name">
                          <p>党开心</p>
                          <span>测试工程师</span>
                        </li>
                        <li class="each-tltle">明天去约会，穿什么鞋子好？</li>
                        <li class="each-content">
                          南通启东江景壹号售楼处，真相震惊，楼盘最新解析！【官网】2019南通启东江景壹号独家消息!
                          真相震惊整个南通启东!请看图文解析南通启东江景壹号——大家千万不要被外界的传闻迷惑了!
                        </li>
                        <li class="each-date">
                          <p class="comments-date">发布于2016-12323</p>
                          <p class="comments">
                            <span class="iconfont">&#xe635;</span>254
                          </p>
                          <p class="comments">
                            <span class="iconfont">&#xe60c;</span> 254
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="paging">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="100"
                    layout="total, prev, pager, next"
                    :total="1000"
                    class="paging-pagination"
                  ></el-pagination>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="成员" name="second">暂无内容</el-tab-pane>
            <el-tab-pane label="关于部落" name="third">暂无内容</el-tab-pane>
            <el-tab-pane label="设置" name="fourth">暂无内容</el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="right">
        <div class="affiche">
          <p class="title">我的圈子</p>
          <p class="underline"></p>
          <ul class="announcement">
            <li>早起的是创业的和收破烂的；</li>
            <li>晚睡的是创业的和按摩院的。</li>
            <li>不能按时吃饭的是创业的和要饭的；</li>
          </ul>
        </div>
        <div class="newly">
          <p class="title">新加入的成员</p>
          <p class="underline"></p>
          <div class="portrait">
            <img src="../../assets/top.jpg" />
            <img src="../../assets/tribal/touxiang2.png" />
            <img src="../../assets/tribal/touxiang1.png" />
            <img src="../../assets/tribal/touxiang4.png" />
            <img src="../../assets/tribal/touxiang3.png" />
            <img src="../../assets/tribal/touxiang5.png" />
            <img src="../../assets/tribal/touxiang6.png" />
            <img src="../../assets/top.jpg" />
          </div>
          <p class="other">部落成员还看了其它部落</p>
          <div class="recommended-main">
            <div class="tribal">
              <img src="../../assets/tribal4.png" class="tribalimg" />
              <ul>
                <li class="triballi1">JAVA开发</li>
                <li class="tribal2">
                  我们希望有着志同道合
                  的一起学习一起进步
                </li>
                <li class="tribal4">立即加入</li>
              </ul>
            </div>
            <div class="tribal">
              <img src="../../assets/tribal2.png" class="tribalimg" />
              <ul>
                <li class="triballi5">生活家居</li>
                <li class="tribal2">
                  我们希望有着志同道合
                  的一起学习一起进步
                </li>
                <li class="tribal4">立即加入</li>
              </ul>
            </div>
            <div class="tribal">
              <img src="../../assets/tribal3.png" class="tribalimg" />
              <ul>
                <li class="triballi7">JAVA开发</li>
                <li class="tribal2">
                  我们希望有着志同道合
                  的一起学习一起进步
                </li>
                <li class="tribal4">立即加入</li>
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
import headerSelect from "@/components/headerSelect";
import personalLeft from "@/components/personalCenter/personalLeft";
import fonter from "@/components/fonter";
export default {
  data() {
    return {
      input:'',
      input1:'',
      activeName: "first",
      currentPage: 4
    };
  },
  components: {
    headerSelect,
    fonter,
    personalLeft
  },
  mounted() {
    // this.getCookie();
  },

  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style scoped>
.box {
  background: #f3f3f3;
}
.main {
  width: 1200px;
  margin: 30px auto 59px auto;
  display: flex;
}
.left {
  width: 250px;
}
.center {
  width: 740px;
  min-width: 740px;
  /* height: 1410px; */
  background: #ffffff;
  border-radius: 6px;
  margin-left: 20px;
}
.right {
  width: 270px;
  border-radius: 6px;
  margin-left: 20px;
}
.affiche {
  width: 270px;
  height: 138px;
  background: #ffffff;
  border-radius: 6px;
}
.newly {
  width: 270px;
  height: 570px;
  background: #ffffff;
  border-radius: 6px;
  margin-top: 21px;
}
.title {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e8ecee;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #000000;
  padding: 21px 0px 0px 29px;
}
.underline {
  width: 34px;
  height: 2px;
  background: #339999;
  margin: -2px 0px 0px 29px;
}
.announcement {
  font-size: 12px;
  color: #999999;
  margin: 12px 0px 0px 29px;
}
.announcement li {
  line-height: 21px;
}
.portrait {
  width: 86%;
  height: 120px;
  margin: 0 auto;
  /* display: flex;
    justify-content:space-around ;
    flex-direction: row;
    flex-wrap: wrap; */
}
.portrait img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  float: left;
  margin: 13px 0px 0px 11px;
}
.other {
  font-size: 16px;
  color: #333333;
  font-family: Microsoft YaHei;
  font-weight: 400;
  margin: 13px 0px 0px 25px;
}
.recommended-main {
  width: 80%;
  margin: 30px 0px 30px 25px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.tribal {
  width: 220px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.tribal li {
  line-height: 24px;
}
.tribalimg {
  width: 80px;
  height: 80px;
  border-radius: 6px;
}
.tribal ul {
  width: 121px;
  margin-left: 20px;
}
.triballi1 {
  font-size: 18px;
  color: #333333;
}
.tribal2 {
  font-size: 12px;
  color: #666666;
  line-height: 16px !important;
}
.tribal3 {
  font-size: 12px;
  color: #666666;
}
.tribal4 {
  color: #339999;
  font-size: 14px;
  cursor: pointer;
}
.head {
  width: 80px;
  height: 80px;
  border-radius: 6px;
  /* margin: 30px; */
}
.center-tltle {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
}
.nav-li2 {
  width: 140px;
  font-size: 14px;
  /* line-height: 50px; */
  color: #666666;
}
.nav-li2 span {
  margin-left: 11px;
  color: #339999;
}
.headline {
  width: 400px;
  height: 24px;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  padding: 5px 0px 0px 20px;
}
.tabs-a {
  width: 100%;
  margin: -34px 0px 0px 0px;
}
.tabs-a >>> .el-tabs__content {
  overflow: visible !important;
}
.tabs-a >>> .el-tabs__nav {
  margin-left: 132px;
}
/* .tabs-a >>> .el-tabs__item {
  padding-left: 30px !important;
} */
.tabs-a >>> .el-tabs__active-ba {
  /* margin-left: 20px; */
}
.tabs-a >>> .el-tabs__item.is-active {
  color: #339999;
}
.tabs-a >>> .el-tabs__active-bar {
  background-color: #339999;
  bottom: -30px;
}
.tabs-a >>> .el-tabs__nav-scroll {
  height: 70px;
}
.forum {
  width: 700px;
  height: 319px;
  padding-top: 1px;
  margin: 0 auto;
  background: #f3f3f3;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}
.topic {
  color: #339999;
}
.forum-tltle {
  width: 30%;
  color: #666666;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 28px 1px 1px 71px;
}
.forum-img {
  width: 94%;
  margin: 0 auto;
  margin-top: 17px;
  display: flex;
}
.forum-img img{
  width:40px;
height:40px;
border-radius:50%;
}
.forum-imginput {
  margin-left: 10px;
}
.mainbody {
  width: 90%;
  margin: 20px 0px 0px 10%;
}
.mainbody-imginput {
  width: 96.5%;
}
.mainbody-imginput>>>.el-textarea__inner {
  height:118px;
  resize:none;
}
.smiling {
  width: 87%;
  margin: 20px 0px 0px 10%;
  height: 40px;
  line-height: 40px;
  display: flex;
  /* justify-content: space-between; */
}
.smiling p {
  width: 85px;
  cursor: pointer;
}
.smiling img {
  margin-right: 10px;
}
.smiling-button {
  width:103px;
  height:40px;
  color: #ffffff;
  background:#339999;
  border:2px solid #339999;
  border-radius:6px;
  margin-left: 56%
}
.forum-tltle .iconfont {
  margin-right: 11px;
}
.forum-tltle li {
  cursor: pointer;
}
.dynamic {
  width: 700px;
  /* height: 319px; */
  padding-top: 1px;
  margin: 0 auto;
  margin-top: 64px;
  background: #ffffff;
  border-radius: 6px;
}
.dynamic-title {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e8ecee;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
}
.dynamic-title li {
  width: 130px;
  text-align: center;
  color: #666666;
}
.data {
  width: 100%;
  margin: 0 auto;
}
.it {
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #e8ecee;
}
.itimg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.each {
  display: flex;
  margin-top: 30px;
}
.each ul {
  margin-left: 9px;
}
.each ul li {
  display: flex;
}
.each-name {
  font-size: 12px;
  color: #666666;
}
.each-name p {
  width: 45px;
  text-align: left;
  color: #666666;
  border-right: 1px solid #666666;
}
.each-name span {
  padding-left: 8px;
}
.each-tltle {
  font-size: 16px;
  color: #339999;
  margin: 7px 0px 10px 0px;
}
.each-content {
  font-size: 14px;
  color: #999999;
  margin-bottom: 21px;
}
.each-date {
  width: 100%;
  height: 30px;
  line-height: 30px;
  justify-content: space-between;
  color: #999999;
  font-size: 15px;
  margin-bottom: 20px;
}
.comments-date {
  width: 80%;
}
.comments {
  width: 15%;
  cursor: pointer;
  user-select: none;
}
.comments .iconfont {
  margin-top: 3px;
}
.paging {
  width: 100%;
  margin: 30px auto 70px auto;
}
.paging-pagination {
  width: 62%;
  height: 32px;
  margin: 0 auto;
  position: relative;
}
.paging-pagination >>> .el-pagination__total {
  color: #999999;
}
.paging-pagination >>> .active {
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  border-radius: 50%;
  background: #339999;
}
.paging-pagination >>> li {
  color: #999999;
}
.paging-pagination >>>.btn-next {
  color: #999999;
}
</style>
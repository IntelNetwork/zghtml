<template>
  <div>
    <div>
      <headerSelect />
    </div>
    <div class="top">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>任务大厅</el-breadcrumb-item>
        <el-breadcrumb-item class="color">任务详情</el-breadcrumb-item>
        <el-breadcrumb-item class="color">详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main">
      <div class="left">
        <ul class="name">
          <li>
            <img src="./../../assets/bidder/tx.png" />
          </li>
          <li>云美工作室</li>
        </ul>
        <ul class="material materialone">
          <li>
            <img src="./../../assets/bidder/bidder4.png" />
          </li>
          <li class="namea">一家专注于软件开发的工作室</li>
        </ul>
        <ul class="material">
          <li>
            <img src="./../../assets/bidder/bidder3.png" />
          </li>
          <li class="namea">
            接取任务总数：
            <span :style="{color:'#339999 !important'}">36</span>
          </li>
        </ul>
        <ul class="material">
          <li>
            <img src="./../../assets/bidder/bidder3.png" />
          </li>
          <li class="namea">
            客户好评率：
            <span :style="{color:'#339999 !important'}">96%</span>
          </li>
        </ul>
        <div class="hr">
          <p></p>
        </div>
        <ul class="projectnav">
          <li>任务大厅</li>
          <li>寻找经纪人</li>
          <li class="active">任务记录</li>
          <li>我的账户</li>
        </ul>
        <div class="hr">
          <p></p>
        </div>
        <div class="recommended">
          <div class="recommendedtitle">
            经纪人推荐
            <img src="./../../assets/bidder/bidder2.png" />
          </div>
          <div class="agentconter">
            <div class="agent">
              <img src="./../../assets/bidder/tx1.png" />
              <ul>
                <li>
                  翁少锋
                  <span :style="{color:'#999999'}">金牌经纪人</span>
                </li>
                <li class="good">
                  好评率：
                  <span :style="{color:'#FF9966'}">99%</span>
                </li>
              </ul>
            </div>
            <div class="agent">
              <img src="./../../assets/bidder/tx1.png" />
              <ul>
                <li>
                  翁少锋
                  <span :style="{color:'#999999'}">金牌经纪人</span>
                </li>
                <li class="good">
                  好评率：
                  <span :style="{color:'#FF9966'}">99%</span>
                </li>
              </ul>
            </div>
            <div class="agent">
              <img src="./../../assets/bidder/tx1.png" />
              <ul>
                <li>
                  翁少锋
                  <span :style="{color:'#999999'}">金牌经纪人</span>
                </li>
                <li class="good">
                  好评率：
                  <span :style="{color:'#FF9966'}">99%</span>
                </li>
              </ul>
            </div>
            <div class="agent">
              <img src="./../../assets/bidder/tx1.png" />
              <ul>
                <li>
                  翁少锋
                  <span :style="{color:'#999999'}">金牌经纪人</span>
                </li>
                <li class="good">
                  好评率：
                  <span :style="{color:'#FF9966'}">99%</span>
                </li>
              </ul>
            </div>
            <div class="agent">
              <img src="./../../assets/bidder/tx1.png" />
              <ul>
                <li>
                  翁少锋
                  <span :style="{color:'#999999'}">金牌经纪人</span>
                </li>
                <li class="good">
                  好评率：
                  <span :style="{color:'#FF9966'}">99%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 进行中的任务 -->
      <div class="right">
        <div class="righttltle">
          <ul class="Projectleft">
            <li>
              进行中的任务
              <p></p>
            </li>
            <li>
              <img src="./../../assets/bidder/bidder1.png" />
            </li>
          </ul>
          <!-- <el-button type="text" class="winning">选为中标者</el-button> -->
        </div>
        <div class="ongoing">
          <ul class="missionname">
            <li>
              <span>任务名称：</span>
              <span>社交平台软件开发</span>
            </li>
            <li>
              <span>发布方：</span>
              <span>上海好运科技有限公司</span>
            </li>
            <li>
              <span>经纪人：</span>
              <span>智工经纪人</span>
            </li>
          </ul>
          <ul class="schedule">
            <li>任务进度：</li>
            <li class="schedulebar">
              <el-progress :percentage="90" :stroke-width="14"></el-progress>
            </li>
            <!-- <li>90%</li> -->
          </ul>
          <ul class="feedback">
            <li>进展反馈：</li>
            <li class="feedback1">已进行到第三阶段，即将进行收尾工作</li>
            <li class="feedbacka">查看详情></li>
          </ul>
          <!-- 主要 -->
          <div class="planning">
            <p class="tltle">任务规划：</p>
            <div class="conter">
              <div class="specific">
                <p class="dialoguetop">第一阶段根据产品要求，完成高保真原型图，针对功能点进行......</p>
                <div class="onetop">
                  <div class="onetop1">1</div>
                  <div class="onetop2"></div>
                </div>
              </div>
              <div class="specificbottom">
                <p class="dialoguebottom">第二阶段，根据功能导图构建框架根据功能导图构建框架根据功能导图......</p>
                <div class="onetop">
                  <div class="onebottom1">2</div>
                  <div class="onebottom2"></div>
                </div>
              </div>
              <div class="specific">
                <p class="dialoguetop">第三阶段，根据功能导图构建框架根据功能导图构建框架根据功能导图......</p>
                <div class="onetop">
                  <div class="onetop1">3</div>
                  <div class="onetop2"></div>
                </div>
              </div>
              <div class="specificbottom">
                <p class="original">第四阶段，根据功能导图构建框架根据功能导图构建框架根据功能导图......</p>
                <div class="onetop">
                  <div class="original1 ">4</div>
                  <div class="original2 "></div>
                </div>
              </div>
            </div>
          </div>
          <div class="work">
            <el-button class="worktit" type="text">完成并提交任务</el-button>
          </div>
        </div>
        <div class="righttltle">
          <ul class="Projectleft">
            <li>
              已完成任务
              <p></p>
            </li>
            <li>
              <img src="./../../assets/bidder/bidder1.png" />
            </li>
          </ul>
        </div>
        <!-- 已完成任务 -->
        <div class="completed">
          <div class="ok">
            <ul class="missionname">
              <li>
                <span>任务名称：</span>
                <span>社交平台软件开发</span>
              </li>
              <li>
                <span>发布方：</span>
                <span>上海好运科技有限公司</span>
              </li>
              <li>
                <span>经纪人：</span>
                <span>智工经纪人</span>
              </li>
            </ul>
            <ul class="schedule scheduleone">
              <li>任务进度：</li>
              <li class="schedulebar completion">
                <el-progress :percentage="100" :stroke-width="14"></el-progress>
              </li>
              <li :style="{margin:'2px 0px 0px 20px'}">
                用时：
                <span>2个月</span>
              </li>
            </ul>
            <ul class="over">
              <li>
                <span>进展反馈：</span>
                <span>已实现全部功能，通过测试</span>
              </li>
              <li :style="{color:'#339999'}">查看详情></li>
            </ul>
          </div>
          <div class="ok">
            <ul class="missionname">
              <li>
                <span>任务名称：</span>
                <span>社交平台软件开发</span>
              </li>
              <li>
                <span>发布方：</span>
                <span>上海好运科技有限公司</span>
              </li>
              <li>
                <span>经纪人：</span>
                <span>智工经纪人</span>
              </li>
            </ul>
            <ul class="schedule scheduleone">
              <li>任务进度：</li>
              <li class="schedulebar completion">
                <el-progress :percentage="100" :stroke-width="14"></el-progress>
              </li>
              <li :style="{margin:'2px 0px 0px 20px'}">
                用时：
                <span>2个月</span>
              </li>
            </ul>
            <ul class="over">
              <li>
                <span>进展反馈：</span>
                <span>已实现全部功能，通过测试</span>
              </li>
              <li :style="{color:'#339999'}">查看详情></li>
            </ul>
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
import fonter from "@/components/fonter";
export default {
  data() {
    return {
      reverse: false,
      activities: [
        {
          content: "2020-01-22——2020-03-04",
          size: "large",
          type: "primary",
          color: "#C2E6E6"
        },
        { content: "2020-01-22——2020-03-04", color: "#C2E6E6" },
        { content: "2020-01-22——2020-03-04", color: "#C2E6E6" },
        { content: "2020-01-22——2020-03-04", color: "#C2E6E6" }
      ]
    };
  },
  components: {
    headerSelect,
    fonter
  },
  created() {},
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    }
  }
};
</script>
<style scoped>
.top {
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  padding: 1px;
  /* box-shadow: 0px 20px 12px rgba(8,1,3,0.26) inset;  */
  box-shadow: inset 0px 15px 17px -15px #9999;
}
.el-breadcrumb {
  width: 1200px;
  min-width: 1200px;
  margin: 29px auto 0 27%;
}
.color >>> .el-breadcrumb__inner {
  color: #339999;
}
.color >>> .el-breadcrumb__separator {
  color: #339999;
}
.main {
  width: 1070px;
  min-width: 1000px;
  margin: 39px auto;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 271px;
  height: 849px;
  background: #ffffff;
  opacity: 1;
}
.name {
  width: 59%;
  height: 60px;
  line-height: 42px;
  display: flex;
  justify-content: space-between;
  margin: 26px 0px 0px 25px;
}
.name img {
  width: 64px;
  height: 64px;
  background: rgba(0, 0, 0, 0);
  background-size: 100% 100%;
  opacity: 1;
  border-radius: 4px;
}
.material {
  width: 78%;
  margin: 10px auto 10px auto;
  height: 22px;
  display: flex;
}
.materialone {
  margin: 14px auto 18px auto;
}
.materialone {
  color: #999999;
}
.material li {
  line-height: 22px;
  font-size: 14px;
}
.namea {
  margin-left: 5px;
}
.material img {
  width: 22px;
  height: 22px;
  background: rgba(0, 0, 0, 0);
  background-size: 100% 100%;
  opacity: 1;
}
.projectnav {
  width: 30%;
  margin: 25px auto 25px auto;
}
.active {
  color: #339999;
}
.projectnav li {
  line-height: 30px;
  font-size: 12px;
  font-family: MicrosoftYaHei;
}
.hr {
  width: 212px;
  height: 1px;
  background: rgba(234, 234, 234, 1);
  opacity: 1;
  margin: 17px auto 0px auto;
}
.hr p {
  width: 34px;
  height: 2px;
  background: #339999;
  opacity: 1;
}
.recommended {
  width: 80%;
  margin: 0 auto;
}
.recommendedtitle {
  height: 25px;
  margin-top: 20px;
  font-size: 16px;
  padding: 1px;
  color: #333333;
  position: relative;
}
.recommendedtitle img {
  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 0);
  opacity: 1;
  position: absolute;
  top: -3px;
  left: 40%;
}
.agentconter {
}
.agent {
  width: 193px;
  border-bottom: 1px dashed #dddddd;
  display: flex;
  margin-top: 20px;
  padding-bottom: 20px;
}
.agent img {
  width: 40px;
  height: 40px;
  border-radius: 4px;
}
.agent li {
  margin: 0px 0px 0px 15px;
}
.agent span {
  font-size: 12px;
}
.good {
  font-size: 12px;
  margin-top: 7px !important;
}
.right {
  width: 774px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
}
.righttltle {
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 20px;
}
.Projectleft {
  display: flex;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 21px;
}
.Projectleft li {
  margin-left: 10px;
}
.Projectleft p {
  width: 34px;
  height: 2px;
  background-color: #339999;
  margin-top: 5px;
}
.ongoing {
  width: 709px;
  height: 433px;
  margin: 0 auto;
  background: rgba(254, 254, 254, 1);
  box-shadow: 0px 5px 6px rgba(25, 25, 25, 0.16);
  opacity: 1;
}
.missionname {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
}
.schedule {
  width: 93%;
  margin: 10px auto;
  display: flex;
  /* justify-content: space-between; */
  font-size: 12px;
  color: #666666;
  font-family: Microsoft YaHei;
  font-weight: 400;
}
.schedulebar {
  width: 450px;
  height: 14px;
  /* background:linear-gradient(125deg,rgba(253,175,24,1) 0%,rgba(247,236,215,1) 100%); */
  opacity: 1;
  border-radius: 10px;
}
.schedulebar >>> .el-progress-bar__inner {
  background: linear-gradient(
    125deg,
    rgba(253, 175, 24, 1) 0%,
    rgba(247, 236, 215, 1) 100%
  );
}
.schedulebar >>> .el-progress-bar {
  position: relative;
}
.schedulebar >>> .el-progress__text {
  position: absolute;
  top: 0;
  right: 0;
}
.feedback {
  width: 93%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666666;
}
.feedback1 {
  width: 540px;
  text-align: left;
}
.feedbacka {
  height: 14px;
  font-size: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 14px;
  color: #339999;
  opacity: 1;
}
.planning {
  width: 96%;
  margin: 20px auto;
  display: flex;
}
.conter {
  width: 600px;
  height: 237px;
  display: flex;
  margin-top: 40px;
}
.specific {
  position: relative;
}
.specificbottom {
  position: relative;
}
.original {
  width: 120px;
  height: 66px;
  background: url(../../assets/ongoing/yuan3.png) no-repeat;
  background-size: 100% 100%;
  padding: 9px 0px 0px 5px;
  opacity: 1;
  font-size: 8px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  margin-left: 10px;
  line-height: 14px;
  color: #ffffff;
  position: relative;
  top: 126px;
}
.original1 {
  width: 41px;
  height: 41px;
  background: url(../../assets/ongoing/duo1.png) no-repeat;
  background-size: 100% 100%;
  text-align: center;
  line-height: 41px;
  color: #ffffff;
}
.original2 {
  width: 96px;
  height: 10px;
  background: url(../../assets/ongoing/duo5.png) no-repeat;
  background-size: 100% 100%;
  margin: 16px 5px 0px 5px;
  opacity: 1;
}
.dialoguetop {
  width: 120px;
  height: 66px;
  background: url(../../assets/ongoing/yuan1.png) no-repeat;
  background-size: 100% 100%;
  padding: 5px;
  opacity: 1;
  font-size: 8px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  margin-left: 10px;
  color: rgba(153, 153, 153, 1);
}
.dialoguebottom {
  width: 120px;
  height: 66px;
  background: url(../../assets/ongoing/yuan2.png) no-repeat;
  background-size: 100% 100%;
  padding: 9px 0px 0px 5px;
  opacity: 1;
  font-size: 8px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  margin-left: 10px;
  line-height: 14px;
  color: rgba(153, 153, 153, 1);
  position: relative;
  top: 126px;
}
.onetop {
  display: flex;
  margin: 10px auto 0px 0px;
}
.onetop1 {
  width: 41px;
  height: 41px;
  background: url(../../assets/ongoing/duo3.png) no-repeat;
  background-size: 100% 100%;
  text-align: center;
  line-height: 41px;
  color: #999999;
}
.onetop2 {
  width: 96px;
  height: 10px;
  background: url(../../assets/ongoing/duo4.png) no-repeat;
  background-size: 100% 100%;
  margin: 16px 5px 0px 5px;
  opacity: 1;
}
.onebottom1 {
  width: 41px;
  height: 41px;
  background: url(../../assets/ongoing/duo3.png) no-repeat;
  background-size: 100% 100%;
  text-align: center;
  line-height: 41px;
  color: #999999;
}
.onebottom2 {
  width: 96px;
  height: 10px;
  background: url(../../assets/ongoing/duo4.png) no-repeat;
  background-size: 100% 100%;
  margin: 16px 5px 0px 5px;
  opacity: 1;
}
.tltle {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
}

.work button {
  float: right;
  margin-right: 30px;
}
.completed {
  width: 100%;
  margin-top: -15px;
}
.ok {
  width: 709px;
  height: 90px;
  margin: 15px auto;
  background: rgba(254, 254, 254, 1);
  box-shadow: 0px 5px 6px rgba(25, 25, 25, 0.16);
  opacity: 1;
}
.workbutton {
  width: 99px;
  height: 30px;
  text-align: center;
  line-height: 1px;
  font-size: 12px;
  color: #ffffff;
  background: rgba(51, 153, 153, 1);
  opacity: 1;
  border-radius: 4px;
}
.worktit {
  width: 99px;
  height: 30px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(51, 153, 153, 1);
  opacity: 1;
  font-size: 12px;
  border-radius: 4px;
  text-align: center;
  color: #339999;
  line-height: 1px;
}
.over {
  width: 93%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666666;
}
.completion >>> .el-progress-bar__inner {
  background: linear-gradient(
    125deg,
    rgba(51, 153, 153, 1) 0%,
    rgba(167, 213, 213, 1) 100%
  );
}
.scheduleone {
  margin: 15px auto 15px auto;
}
</style>

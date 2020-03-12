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
        <ul class="projectnav">
          <li class="active">项目经历</li>
          <li>关于我们</li>
          <li>客户评价</li>
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
      <div class="right">
        <div class="righttltle">
          <ul class="Projectleft">
            <li>
              项目经历
              <p></p>
            </li>
            <li>
              <img src="./../../assets/bidder/bidder1.png" />
            </li>
          </ul>
          <el-button type="text" class="winning">选为中标者</el-button>
        </div>
        <div class="block">
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              :timestamp="activity.timestamp"
            >
              {{activity.content}}
              <el-card>
                <p class="cardconater">
                  <span class="function">项目名称：</span>
                  <span class="functionconter">微信工长师傅入驻在线商城预约装修线上分红分销系统积分兑换</span>
                </p>
                <p class="cardconater">
                  <span class="function">项目内容：</span>
                  <span
                    class="functionconter"
                  >小程序开发 多商家入驻 一站式整装装修 多商家装修平台，小程序开发 多商家入驻 一站式整装装修 多商家装修平小程序开发 多商家入驻 一站式整装装修 多商家装修平台</span>
                </p>
                <p class="cardconater">
                  <span class="function">实现功能：</span>
                  <span class="functionconter">工长平台、师傅入驻、在线商城、预约装修、线上分红、分销系统、积分兑换</span>
                </p>
                <p class="cardconater">
                  <span class="function">开发语言：</span>
                  <span class="functionconter">PHP</span>
                </p>
                <p class="cardconater">
                  <span class="function">终端类型：</span>
                  <span class="functionconter">手机端 PC+手机站 Web站</span>
                </p>
                <p class="cardconater">
                  <span class="function">开发框架：</span>
                  <span class="functionconter">其他 Bootstrap</span>
                </p>
                <p class="cardconater">
                  <span class="function">项目周期：</span>
                  <span class="functionconter">2个月</span>
                </p>
                <p class="satisfaction">
                  <span class="satisfaction1">客户满意度：</span>
                  <span class="satisfaction2">100%</span>
                </p>
                
              </el-card>
            </el-timeline-item>
          </el-timeline>
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
  methods: {}
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
  margin: 0 auto;
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
  border-radius: 50%;
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
.winning {
  width: 97px;
  height: 29px;
  background: #339999;
  color: #ffffff;
  text-align: center;
  line-height: 7px;
  font-size: 12px;
  opacity: 1;
}
.block {
  width: 91%;
  margin: 0 auto;
}
.block >>> .el-timeline-item__tail {
  left: 6px;
  border-left: 1px solid #339999;
  height: 190%;
}
.block >>> .el-timeline-item__content {
  color: #999999;
  font-size: 12px;
}
.block >>> .el-card,
.is-always-shadow {
  margin-top: 10px;
  background: #eaf5f5;
  color: #000000;
}
.block >>> .el-card__body {
  padding: 20px;
  line-height: 21px;
}
.block >>> .el-timeline-item__node {
    width: 14px;
    height: 14px;
    background-image: radial-gradient(#339999,#C2E6E6,#C2E6E6);
}
.cardconater {
  display: flex;
}
.function {
  width: 65px;
}
.functionconter {
  display: block;
  width: 80%;
}
.satisfaction {
  display: flex;
  color: #339999;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 16px;
  color: rgba(51, 153, 153, 1);
  opacity: 1;
}
/* .satisfaction1 {
    color: #339999;
}
.satisfaction2 {
    color: #339999;
} */
</style>

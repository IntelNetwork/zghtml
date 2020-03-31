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
          <el-tabs v-model="activeName">
            <el-tab-pane label="已发布任务" name="first" class="tabe">
              <div class="completed">
                  <!-- <div class="righttltle">
                    <ul class="Projectleft">
                      <li>
                        已发布任务
                        <p></p>
                      </li>
                      <li>
                        <img src="./../../assets/bidder/bidder1.png" />
                      </li>
                    </ul>
                    <ul>
                      <el-button type="primary" icon="el-icon-star-off" @click="visible">发布任务</el-button>
                    </ul>
                  </div> -->
                  <!-- 已完成任务 -->
                  <div class="completed">
                    <div class="ok" v-for="(item,index) in release" :key="index">
                      <ul class="missionname">
                        <li>
                          <span>任务名称：</span>
                          <span>{{item.name}}</span>
                        </li>
                        <li>
                          <span>发布方：</span>
                          <span>{{item.taskMemberName}}</span>
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
                          <span>{{item.period}}个月</span>
                        </li>
                      </ul>
                      <ul class="over">
                        <li>
                          <span>进展反馈：</span>
                          <span>已实现全部功能，通过测试</span>
                        </li>
                        <li class="relea" :style="{color:'#339999'}" @click="relea(item.id)">查看详情></li>
                      </ul>
                    </div>
                  </div>
              </div>
              <div>
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="pageNo"
                  :page-size="pageSize"
                  layout="total, prev, pager, next"
                  :total="total">
                </el-pagination>
              </div>
            </el-tab-pane>
            <el-tab-pane label="已完成任务" name="second">
              <div>
                  <div class="completed">
                    <div class="ok"  v-for="(item,index) in belease" :key="index">
                      <ul class="missionname">
                        <li>
                          <span>任务名称：</span>
                          <span>{{item.name}}</span>
                        </li>
                        <li>
                          <span>发布方：</span>
                          <span>{{item.taskMemberName}}</span>
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
                          <li :style="{margin:'2px 0px 0px 20px'}">
                              用时：
                              <span>{{item.period}}个月</span>
                          </li>
                      </ul>
                      <ul class="over">
                        <li>
                          <span>进展反馈：</span>
                          <span>已实现全部功能，通过测试</span>
                        </li>
                        <li class="relea" :style="{color:'#339999'}">查看详情></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <el-pagination
                      @size-change="handleSizeChange2"
                      @current-change="handleCurrentChange2"
                      :current-page.sync="pageNo2"
                      :page-size="pageSize2"
                      layout="total, prev, pager, next"
                      :total="total2">
                    </el-pagination>
                  </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待审核任务" name="third">
              <div class="completed">
                  <div class="ok"  v-for="(item,index) in getCheck" :key="index">
                    <ul class="missionname">
                      <li>
                        <span>任务名称：</span>
                        <span>{{item.name}}</span>
                      </li>
                      <li>
                        <span>发布方：</span>
                        <span>{{item.taskMemberName}}</span>
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
                        <li :style="{margin:'2px 0px 0px 20px'}">
                            用时：
                            <span>{{item.period}}个月</span>
                        </li>
                    </ul>
                    <ul class="over">
                      <li>
                        <span>进展反馈：</span>
                        <span>已实现全部功能，通过测试</span>
                      </li>
                      <li class="relea" :style="{color:'#339999'}">查看详情></li>
                    </ul>
                  </div>
              </div>
              <div>
                <el-pagination
                  @size-change="handleSizeChange3"
                  @current-change="handleCurrentChange3"
                  :current-page.sync="pageNo3"
                  :page-size="pageSize3"
                  layout="total, prev, pager, next"
                  :total="total3">
                </el-pagination>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div>
            <ul>
              <el-button type="primary" icon="el-icon-star-off" @click="visible">发布任务</el-button>
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
import { taskDetails } from "@/api/task/taskList"
export default {
  data() {
    return {
      activeName:"first",
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
      ],
      memberId:"",
      release:[],
      belease:[],
      getCheck:[],
      id:"",
      pageNo:0,
      total:0,
      pageSize:10,
      pageNo2:0,
      total2:0,
      pageSize2:10,
      pageNo3:0,
      total3:0,
      pageSize3:10
    };
  },
  components: {
    headerSelect,
    fonter
  },
  created() {
    this.memberId = sessionStorage.getItem("memberId");
    this.format();
    this.format2();
    this.format3();
  },
  methods: {
    format() {
      let url = `${taskDetails.release}?pageNo=${this.pageNo}`;
      this.axios.get(url).then(res=>{
        // console.log(res)
        if(res.data.code==200){
          this.release = res.data.result.records;
          this.total = res.data.result.total;
          this.pageNo = res.data.result.current;
        }
      })
    },
    format2() {
      let url = `${taskDetails.byBelease}?pageNo=${this.pageNo2}`;
      this.axios.get(url).then(res=>{
        // console.log(res)
        if(res.data.code==200){
          this.belease = res.data.result.records;
          this.total2 = res.data.result.total;
          this.pageNo2 = res.data.result.current;
          console.log(this.belease )
        }
      }).catch(err=>{
        console.log(err)
      })
    },
    format3() {
      let url = `${taskDetails.getCheck}?pageNo=${this.pageNo3}`;
      this.axios.get(url).then(res=>{
        // console.log(res)
        if(res.data.code==200){
          this.getCheck = res.data.result.records;
          this.total3 = res.data.result.total;
          this.pageNo3 = res.data.result.current;
          console.log(this.getCheck )
        }
      }).catch(err=>{
        console.log(err)
      })
    },
    visible(){
      this.$router.push({
        name:"taskRelease"
      })
    },
    deleteProject(){

    },
    // handleClick(tab, event) {
    //   console.log(tab, event);
    // },
    relea(id){
      this.$router.push({
        name:"releaseDetails",
        params:{
          id:id
        }
      })
    },
    handleSizeChange(val) {
        this.pageSize = val;
        this.format()
    },
    handleCurrentChange(val) {
        this.pageNo = val;
        this.format()
    },
    handleSizeChange2(val) {
        this.pageSize2 = val;
        this.format2()
    },
    handleCurrentChange2(val) {
        this.pageNo2 = val;
        this.format2()
    },
    handleSizeChange3(val) {
        this.pageSize3 = val;
        this.format3()
    },
    handleCurrentChange3(val) {
        this.pageNo3 = val;
        this.format3()
    },
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
  width: 790px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  padding: 0 20px;
  display: flex;
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
.completed {
  width: 100%;
  margin-top: -15px;
  min-height: 700px;
}
.ok {
  width: 680px;
  height: 90px;
  margin: 20px auto;
  background: rgba(254, 254, 254, 1);
  box-shadow: 0px 5px 6px rgba(25, 25, 25, 0.16);
  opacity: 1;
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
.el-button--primary{
  background-color: #339999;
  border: none;
  height: 24px;
  font-size: 12px;
  padding: 0;
  width: 80px;
  margin-top: 10px;
}
.relea{
  cursor: pointer;
}

.el-tabs>>>.el-tabs__header .el-tabs__item.is-active,.el-tabs>>>.el-tabs__header .el-tabs__item:hover{
  color: #339999;
  font-size: 16px;
}
.el-tabs>>>.el-tabs__header .el-tabs__item{
  /* color: #339999; */
  font-size: 16px;
}
.el-tabs>>>.el-tabs__nav.is-top .el-tabs__active-bar{
  background: #339999;
}
.el-tabs>>>.el-tabs__header .el-tabs__nav-wrap{
  width: 50%;

}
.el-tabs>>>.el-tabs__header .el-tabs__nav-wrap::after {
  background-color: #ffffff;
}
.el-tabs{
  width: 100%;
}
.el-pagination{
  margin-top: 20px;
  text-align: center;
}
</style>

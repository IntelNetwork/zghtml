<template>
  <div class="taskDetails">
    <headerSelect />
    <div class="taskDetailsContent">
      <div class="detailsTitle">
        <div class="title">
          <span>任务大厅</span>
          <span class="fontColor">></span>
          <span class="fontColor">任务详情</span>
        </div>
      </div>
      <div class="detailsContent">
        <div class="contentTop">
          <div class="topLeft">
            <h4>{{detailsList.name}}</h4>
            <div class="leftType">
              <span>{{detailsList.industry}}</span>
              <span>{{detailsList.typeName}}</span>
              <span>{{detailsList.period}}个月</span>
            </div>
          </div>
          <div class="topRight">
            <div class="members">
              <h3>￥{{detailsList.startPrice}} - {{detailsList.endPrice}}</h3>
              <p>开通会员，优先竞标</p>
            </div>
            <!-- <div class="exclusive">
              <img src="../../assets/details.png" alt />
            </div> -->
          </div>
        </div>

        <div class="requirements">
          <div>
            <p>发布日期： {{detailsList.releaseTime |dateFormat('yyyy-MM-dd')}}</p>
            <p>项目周期： {{detailsList.period}} 个月</p>
            <!-- <p>驻场需求： 无需驻场</p> -->
            <p>技能要求： {{detailsList.skillsRequired}}</p>
            <p>是否议价： {{detailsList.isBargain}}</p>
          </div>
          <div class="taskBidd" v-if="hitState== null">
            <el-button type="text" class="bidding" @click="centerDialogVisible=true">立即竞标</el-button>
            <el-button type="text">我要举报</el-button>
          </div>
          <div class="taskBidd" v-else-if="hitState== 0">
            <el-button type="text" class="bidding">未中标</el-button>
            <!-- <el-button type="text">我要举报</el-button> -->
          </div>
          <div class="taskBidd" v-else-if="hitState== 2">
            <el-button type="text" class="bidding">选标中</el-button>
            <!-- <el-button type="text">我要举报</el-button> -->
          </div>
          <div class="taskBidd" v-else-if="hitState== 1">
            <el-button type="text" class="bidding">已中标</el-button>
            <!-- <el-button type="text">我要举报</el-button> -->
          </div>
        </div>
        <div class="taskDescribe">
          <div class="taskDescribeTitle">
            <p>任务描述：</p>
          </div>
          <div>
            <p>{{detailsList.des}}</p>
          </div>
        </div>
        <div class="progress" v-if="taskState=='2'||taskState=='3'||taskState=='4'">
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
              <!-- <li class="feedbacka">查看详情></li> -->
            </ul>

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
            <div class="progressBtn">
                <el-button type="text" class="bidding" @click="start">开始任务</el-button>
                <el-button type="text" class="bidding" @click="submit">提交任务</el-button>
            </div>
        </div>
      </div>
      <div v-if="taskState==0||taskState==1">
        <div class="broker" v-if="hitState== 0 || hitState==null ">
          <div class="clinchTitle">
            <p>参与该任务的经纪人</p>
            <span></span>
          </div>
          <div class="brokerContent">
            <div class="agentPortrait">
              <div class="brokerPeople">
                <img src="../../assets/task8.png" alt />
                <span>
                  <img src="../../assets/top.jpg" alt />
                </span>
              </div>
              <div class="agentName">
                <h4>
                  翁少锋
                  <i>金牌经纪人</i>
                </h4>
                <p>
                  好评率：
                  <i>99%</i>
                </p>
              </div>
            </div>
            <div class="agentPortrait">
              <div class="brokerPeople">
                <img src="../../assets/task8.png" alt />
                <span>
                  <img src="../../assets/top.jpg" alt />
                </span>
              </div>
              <div class="agentName">
                <h4>
                  翁少锋
                  <i>金牌经纪人</i>
                </h4>
                <p>
                  好评率：
                  <i>99%</i>
                </p>
              </div>
            </div>
            <div class="agentPortrait">
              <div class="brokerPeople">
                <img src="../../assets/task7.png" alt />
                <span>
                  <img src="../../assets/top.jpg" alt />
                </span>
              </div>
              <div class="agentName">
                <h4>
                  翁少锋
                  <i>金牌经纪人</i>
                </h4>
                <p>
                  好评率：
                  <i>99%</i>
                </p>
              </div>
            </div>
            <div class="agentPortrait">
              <div class="brokerPeople">
                <img src="../../assets/task6.png" alt />
                <span>
                  <img src="../../assets/top.jpg" alt />
                </span>
              </div>
              <div class="agentName">
                <h4>
                  翁少锋
                  <i>金牌经纪人</i>
                </h4>
                <p>
                  好评率：
                  <i>99%</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="taskState==0||taskState==1">
        <div class="broker" v-if="hitState== 2">
          <div class="clinchTitle">
            <p>同类型任务推荐</p>
            <span></span>
          </div>
          <div class="recommend">
            <div class="recommended" v-for="(item,index) in recommended" :key="index">
              <div class="recommendedTop">
                <h3>{{item.name}}</h3>
                <p><i class="el-icon-time"></i> 1天前发布</p>
              </div>
              <div class="leftType">
                <span>{{item.industry}}</span>
                <span>{{item.typeName}}</span>
                <span>{{item.period}}个月</span>
              </div>
              <div class="recommendedBottom">
                <p>任务周期：1个月</p>
                <a> 查看详情></a>
              </div>
            </div>
          <!-- <div class="recommended">
            <div class="recommendedTop">
              <h3>企业官网设计开发</h3>
              <p><i class="el-icon-time"></i> 1天前发布</p>
            </div>
            <div class="leftType">
              <span>{{detailsList.industry}}</span>
              <span>{{detailsList.typeName}}</span>
              <span>{{detailsList.period}}个月</span>
            </div>
            <div class="recommendedBottom">
              <p>任务周期：1个月</p>
              <a> 查看详情></a>
            </div>
          </div> -->
          </div>
        </div>
      </div>
      <div v-if="taskState==0||taskState==1">
        <div class="bidRate" v-if="hitState!=1">
          <div class="clinchTitle">
            <p>如何提升竞标率？</p>
            <span></span>
          </div>
          <div class="perfect">
            <p>
              <i>1</i>完善您的相关信息，评测认证，尤其是技术能力与专业经验
            </p>
            <p>
              <i>2</i>我们拒绝恶意报价，一份真实且具有竞争力的报价无疑可以让您更容易中标
            </p>
            <p>
              <i>3</i>积极响应与发包方的沟通交流，体现良好的职业素养及专业能力
            </p>
            <p>
              <i>4</i>智工专属经纪人享有专属项目，中标率，薪酬更稳定
            </p>
          </div>
        </div>
      </div>
      <div class="footAdvertising">
        <div class="advertising">
          <div class="agentImg">
            <img src="../../assets/agent.png" alt />
          </div>
          <div class="joinAgent">
            <div class="join">
              <div class="joinIcon join">
                <span class="iconfont">&#xe669;</span>
                <h2>我要经纪人</h2>
              </div>
              <div class="chance">
                <span>免服务费</span>
                <span>享受专享优质项目</span>
                <span>抢更多机会</span>
              </div>
              <!-- <div class="chanceButton">
                <p>做经纪人 ></p>
              </div> -->
            </div>
          </div>
          <div class="close" @click="close($event)">X</div>
        </div>
      </div>
      <!-- 竞标弹框 -->
      <div>
        <el-dialog title="竞标确认" :visible.sync="centerDialogVisible" width="46%" center >
          <div class="dialog">
            <p class="dialogTitle">您是否确认要竞标该项任务？请您确认竞标任务内容</p>
            
            <div class="biddingContent">
                <h3>{{detailsList.name}}</h3>
                <p><i class="el-icon-date"></i> 发布日期： {{detailsList.releaseTime |dateFormat('yyyy-MM-dd')}}</p>
                <p><i class="el-icon-time"></i> 项目周期： {{detailsList.period}} 个月</p>
                <p><i class="el-icon-time"></i> 技能要求： {{detailsList.skillsRequired}}</p>
                <p><i class="el-icon-time"></i> 是否议价： {{detailsList.isBargain}}</p>
            </div>
            <div>
              <el-upload
                class="upload-demo"
                :action="uploadAction"
                :on-success="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :headers="uploadheaders"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传不超过500kb文件</div>
              </el-upload>
            </div>
            <div class="checkbox">
              <el-checkbox-group v-model="checkList">
                 <el-checkbox label="我已阅读过平台《项目规则协议》，并遵守"></el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="visible">确 定</el-button>
            <el-button @click="centerDialogVisible = false" class="cancel">取 消</el-button>
            
          </span>
        </el-dialog>
      </div>
    </div>
    <fonter />
  </div>
</template>

<script>
import headerSelect from "@/components/headerSelect";
import fonter from "@/components/fonter";
import { taskDetails } from "@/api/task/taskList"
export default {
  data() {
    return {
        value: "",
        id: "",
        memberId: "",
        username: "",
        detailsList: {},
        centerDialogVisible: false,
        checkList:"",
        fileList:[],
        uploadheaders: { "X-Access-Token": sessionStorage.getItem("token") },
        offeStartPrice: "",//低价
        offerEndPrice: "",//止价
        hitState:"",
        uploadAction: this.baseURL+`/taskcenter/upload/upload`,
        recommended:[], //任务推荐数组
        industryId:"", //行情id
        taskState:"",
          
    };
  },
  components: {
    headerSelect,
    fonter
  },
  created() {
    this.id = this.$route.params.id;
    this.username = sessionStorage.getItem("username");
    this.memberId = sessionStorage.getItem("memberId");
    this.top();
    this.taskDetails();
    
  },
  // beforeUpdate(){
  //   this.recommend();
  // },
  methods: {
    taskDetails(){
        let url = `${taskDetails.details}`;
        let data = {
          id: this.id,
          memberId: this.memberId,
          memberName: this.username
        }
        this.axios.get(url,{ params: data}).then(res=>{
          if(res.data.code == 200){
            this.detailsList = res.data.result;
            this.hitState = res.data.result.hitState;
            this.offeStartPrice = res.data.result.startPrice;
            this.offerEndPrice = res.data.result.endPrice;
            this.industryId = res.data.result.industryId;
            this.taskState = res.data.result.taskState
            this.recommend();
          }
        })
    },
    close(event) {
      event.currentTarget.parentElement.parentElement.style.display = "none";
      this.value = "1"
    },
    top() {
        // 页面被卷去的高度 scrollT  滚动距离
      window.onscroll = function() {
        let scrollT =
          document.documentElement.scrollTop || document.body.scrollTop;
        let scrollH =
          document.documentElement.scrollHeight || document.body.scrollHeight;
        let clientH =
          document.documentElement.clientHeight || document.body.clientHeight;
        if (scrollT > 50) {
          document.getElementsByClassName('footAdvertising')[0].style.display = "block"
        //   console.log("滚轮已经大于50，置顶按钮出现")
        }
        if (scrollT == scrollH - clientH) {
            // console.log("到底部了")
            document.getElementsByClassName('footAdvertising')[0].style.display = "block"
        } else if (scrollT => 50) {
            document.getElementsByClassName('footAdvertising')[0].style.display = "none"
            // console.log("到顶部了")
        }
      };
    },
    //立即竞标
    visible(){
      let url = `${taskDetails.bidding}`;
      let data = {
        taskId: this.id,
        memberId: this.memberId,
        memberName: this.username,
        offeStartPrice: this.offeStartPrice,
        offerEndPrice: this.offerEndPrice
      };
      this.axios.put(url,data).then(res=>{
        if(res.data.code==200){
          this.centerDialogVisible = false;
          this.hitState = res.data.result.hitState
        }
      })
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(res, file) {
        console.log(res,454545)
        // if(res.code == 200){
        //     // let array = [];
        //     // let item = {
        //     //   content: file.size,
        //     //   path: file.name,
        //     //   filePath: res.result.filePath,
        //     //   cnName: res.result.cnName,
        //     //   enName: res.result.enName,
        //     //   suffix: res.result.suffix
        //     // };
        //     // array.push(item);
        //     // this.ruleForm.attachs = array;
        //     this.rules.imgPath = URL.createObjectURL(file.raw);
        //     // this.rules.imgPath = res.result.filePath;
        //     console.log( this.rules.imgPath ,454545)
        // }else{
        //   this.$message.error(res.message);
        // }
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      recommend(){
        let url = `${taskDetails.recommend}`;
        let data = {
          industryId:this.industryId
        }
        this.axios.get(url,{params:data}).then(res=>{
          console.log(res)
          if(res.data.code==200){
            this.recommended = res.data.result.records;
            console.log(this.recommended,222)
          }
        })
      },
      // 提交
      submit(){
          let url = `${taskDetails.submit}`;
          this.axios.put(url,this.detailsList).then(res=>{
            console.log(res)
          })
      },
      // 开始
      start(){
        let url = `${taskDetails.start}`;
        this.axios.put(url,this.detailsList).then(res=>{
          console.log(res)
        })
      }
  },
  filters: {
    dateFormat: function(date, fmt) {
        if (!date) return date;
        date = new Date(date);
        var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            S: date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(
                RegExp.$1,
                (date.getFullYear() + "").substr(4 - RegExp.$1.length)
            );
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(
                    RegExp.$1,
                    RegExp.$1.length == 1 ?
                    o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length)
                );
        return fmt;
    }
	}
};
</script>
<style scoped>
.taskDetailsContent {
  color: #999999;
}
.detailsTitle {
  margin-top: 5px;
  width: 100%;
  background: #ffffff;
  height: 60px;
  line-height: 60px;
}
.detailsTitle .title {
  width: 1000px;
  margin: 0 auto;
  font-size: 14px;
  color: #333333;
  font-weight: 400;
}
.detailsTitle .title .fontColor {
  color: #339999;
  margin-left: 4px;
}
.detailsContent {
  width: 1000px;
  background: #ffffff;
  margin: 20px auto;
  padding: 20px 30px;
}
.contentTop {
  display: flex;
  justify-content: space-between;
  height: 90px;
  border-bottom: 1px solid #eaeaea;
}
.contentTop .topLeft h4 {
  font-size: 18px;
  color: #333333;
  font-weight: bold;
}
.contentTop .topLeft .leftType {
  margin-top: 24px;
}
.contentTop .topLeft .leftType span {
  padding: 6px 12px;
  background: #efefef;
  margin: 0px 6px;
  border-radius: 6px;
  color: #999999;
  font-size: 14px;
}
.contentTop .topRight {
  width: 320px;
  position: relative;
  text-align: center;
}
.exclusive {
  position: absolute;
  top: -20px;
  right: -30px;
}
.members h3 {
  color: #EF1616;
  font-size: 28px;
}
.members p {
  color: #666666;
  font-size: 14px;
  margin-top: 10px;
}
.requirements {
  height: 144px;
  border-bottom: 1px solid #eaeaea;
  padding-top: 30px;
  line-height: 20px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.requirements .taskBidd .el-button {
  color: #666666;
}
.requirements .taskBidd .bidding {
  width: 134px;
  height: 42px;
  background: rgba(51, 153, 153, 1);
  border-radius: 6px;
  color: #ffffff;
  font-size: 18px;
}
.bidding {
  width: 134px;
  height: 42px;
  background: rgba(51, 153, 153, 1);
  border-radius: 6px;
  color: #ffffff;
  font-size: 18px;
}
.taskBidd {
  margin-top: 40px;
}
.taskDescribe {
  /* width: 586px; */
  margin-top: 30px;
  border-bottom: 1px solid #EAEAEA;
  /* min-height: 300px; */
}
.taskDescribeTitle {
  margin-bottom: 30px;
  color: #333333;
  font-size: 14px;
  font-weight: 600;
}
.describe {
  margin-top: 30px;
  line-height: 22px;
  min-height: 200px;
}
.describe span {
  margin-bottom: 10px;
  display: inline-block;
}
.broker {
  width: 1000px;
  height: 168px;
  background: #ffffff;
  margin: 0 auto;
  padding: 0 28px;
}
.clinchTitle {
  width: 100%;
  height: 50px;
  /* border-bottom: 1px solid #E8ECEE; */
}
.clinchTitle p {
  padding-top: 20px;
  color: #333333;
  font-size: 16px;
  font-weight: 400;
}
.clinchTitle span {
  width: 34px;
  height: 2px;
  background: #339999;
  display: inline-block;
  margin-top: 10px;
}
.brokerPeople {
  width: 50px;
  height: 50px;
  position: relative;
}
.brokerPeople > span {
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 1;
}
.brokerPeople > span img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.brokerPeople > img {
  width: 22px;
  height: 22px;
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
.brokerContent {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
i {
  font-style: normal;
}
.agentPortrait {
  display: flex;
  width: 180px;
  justify-content: space-between;
}
.agentName {
  line-height: 24px;
}
.agentName h4 {
  font-size: 16px;
  color: #666666;
}
.agentName h4 i {
  font-size: 12px;
  color: #999999;
  margin-left: 10px;
}
.agentName p {
  font-size: 12px;
}
.agentName p i {
  color: #ff9966;
}
.bidRate {
  background: #ffffff;
  width: 1000px;
  margin: 20px auto;
  padding: 0 30px;
}
.perfect {
  line-height: 30px;
  margin: 24px 0;
  padding-bottom: 30px;
}
.perfect p {
  font-size: 14px;
}
.perfect p i {
  width: 22px;
  height: 22px;
  margin-right: 12px;
  background: #339999;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  line-height: 22px;
  color: #ffffff;
}
.footAdvertising {
  width: 100%;
  min-width: 1200px;
  background: #1d2835;
  height: 60px;
  display: block;
  position: fixed;
  bottom: 0px;
  z-index: 999;
  animation: mymove 1s ease-in infinite;
  animation-delay: 0s;
  animation-iteration-count: 1;
}
@keyframes mymove {
  0% {
    bottom: -200px;
  }
  30% {
    bottom: -200px;
    left: 0px;
  }
  50% {
    bottom: -150px;
    left: 0px;
  }
  70% {
    bottom: -100px;
    left: 0px;
  }
  90% {
    bottom: -50px;
    left: 0px;
  }
  100% {
    bottom: 0px;
  }
}

@-webkit-keyframes mymove /*Safari and Chrome*/ {
  0% {
    bottom: -200px;
  }
  30% {
    bottom: -200px;
    left: 0px;
  }
  50% {
    bottom: -150px;
    left: 0px;
  }
  70% {
    bottom: -100px;
    left: 0px;
  }
  90% {
    bottom: -50px;
    left: 0px;
  }
  100% {
    bottom: 0px;
  }
}
.advertising {
  display: flex;
  width: 1050px;
  margin: 0 auto;
  position: relative;
}
.agentImg {
  height: 130px;
  position: absolute;
  /* top: -62px; */
  animation: move 1.5s linear infinite;
  animation-delay: 0;
  animation-iteration-count: 1;
  animation-fill-mode:forwards;
}
@keyframes move {
  0% {
    top: 200px;
  }
  30% {
    top: 150px;
    left: 0px;
  }
  50% {
    top: 100px;
    left: 0px;
  }
  70% {
    top: 50px;
    left: 0px;
  }
  90% {
    top: 0px;
    left: 0px;
  }
  100% {
    top: -62px;
  }
}
@-webkit-keyframes move /*Safari and Chrome*/ {
  0% {
    top: 200px;
  }
  30% {
    top: 150px;
    left: 0px;
  }
  50% {
    top: 100px;
    left: 0px;
  }
  70% {
    top: 50px;
    left: 0px;
  }
  90% {
    top: 0px;
    left: 0px;
  }
  100% {
    top: -62px;
  }
}
.joinAgent {
  position: absolute;
  left: 100px;
  display: flex;
}
.join {
  display: flex;
  align-items: center;
  height: 60px;
}
.joinIcon {
  font-size: 30px;
  color: #339999;
  margin-right: 20px;
}
.joinIcon .iconfont {
  font-size: 40px;
  margin: 0 10px;
}
.chance span {
  margin: 0 10px;
}
.chanceButton {
  width: 200px;
  height: 60px;
  background: #339999;
  text-align: center;
  line-height: 60px;
  font-size: 24px;
  color: #333333;
  margin: 0 20px;
  cursor: pointer;
}
.close {
  /* margin-top: 8px; */
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 10px;
}
.dialog{
  width: 80%;
  margin: 0 auto;
}
.biddingContent h3{
  color: #333333;
  font-size: 18px;
  margin-bottom: 14px;
}
.biddingContent p{
  color: #666666;
  font-size: 14px;
  line-height: 20px;
}
.biddingContent p i{
  color: #339999;
  margin-right: 10px;
}
.dialogTitle{
  font-size: 14px;
  color: #666;
  margin: 28px 0;
  text-align: center;
}
.agreement{
  display: flex;
  align-items: center;
}
.agreement a{
  color: #339999;
}
.agreement p{
  color: #999999;
  font-size: 10px;
  margin-left: 10px;
}
.checkbox{
  margin-top: 20px;
}
.el-checkbox{
  color: #339999;
  /* background: #339999; */
}
.el-checkbox >>>.el-checkbox__input.is-checked+.el-checkbox__label{
  color: #339999;
}
.el-checkbox>>>.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox>>>.el-checkbox__input.is-indeterminate .el-checkbox__inner{
  border-radius: 50%;
  color: #339999;
  background: #339999;
}
.el-checkbox>>>.el-checkbox__input .el-checkbox__inner{
    border: 1px solid #339999;
    border-radius: 50%;
}
.el-button--primary{
  background-color: #339999;
  border: none;
}
.el-checkbox__input>>>.el-checkbox__inner{
  border: 1px solid #339999 !important;
}
.cancel{
  color:#339999;
  border: none;
}
.upload-demo{
  margin-top: 20px;
}
.recommend{
  display: flex;
  margin-top: 20px;
}
.recommended{
  width:210px;
  height:82px;
  background:rgba(255,255,255,1);
  box-shadow:0px 3px 6px rgba(0,0,0,0.1);
  opacity:1;
  border-radius:4px;
  padding-left: 16px;
  padding-right: 4px;
  margin-right: 40px;
  line-height: 26px;
}
.recommended .leftType{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.recommended .leftType span{
  background: #FF9966;
  color: #ffffff;
  font-size: 8px;
  border-radius: 4px;
  padding: 2px 6px;
  margin-right: 10px;
  
}
.recommendedTop{
  display: flex;
  justify-content: space-between;
}
.recommendedTop h3{
  color: #333333;
  font-size: 14px;
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.recommendedTop p{
  color: #999999;
  font-size: 8px;
}
.recommendedTop p i{
  color: #339999;
}
.recommendedBottom{
  display: flex;
  justify-content: space-between;
}
.recommendedBottom p{
  font-size: 12px;
  color: #666666;
}
.recommendedBottom a{
  color: #999999;
  font-size: 10px;
}


.progressBtn{
  text-align: right;
}
.progress{
  margin-top: 20px;
}
.schedule {
  width: 93%;
  margin: 10px auto;
  display: flex;
  /* justify-content: space-between; */
  font-size: 16px;
  color: #333333;
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
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #333333;
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
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  margin-left: 18px;
}
</style>
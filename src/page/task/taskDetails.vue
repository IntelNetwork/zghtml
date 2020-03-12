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
            <h4>{{result.name}}</h4>
            <div class="leftType">
              <span>{{result.industry}}</span>
              <span>{{result.typeName}}</span>
              <span>{{result.tperiod}}个月</span>
            </div>
          </div>
          <div class="topRight">
            <div class="members">
              <h3>￥{{result.startPrice}} - {{result.endPrice}}</h3>
              <p>开通会员，优先竞标</p>
            </div>
            <!-- <div class="exclusive">
              <img src="../../assets/details.png" alt />
            </div> -->
          </div>
        </div>

        <div class="requirements">
          <div>
            <p>发布日期： {{result.releaseTime |dateFormat('yyyy-MM-dd')}}</p>
            <p>项目周期： {{result.tperiod}} 个月</p>
            <!-- <p>驻场需求： 无需驻场</p> -->
            <p>技能要求： {{result.skillsRequired}}</p>
            <p>是否议价： {{result.isBargain}}</p>
          </div>
          <div class="taskBidd" v-show="hitState== null">
            <el-button type="text" class="bidding" @click="centerDialogVisible=true">立即竞标</el-button>
            <el-button type="text">我要举报</el-button>
          </div>
          <div class="taskBidd" v-show="hitState== 0">
            <el-button type="text" class="bidding">选标中</el-button>
            <!-- <el-button type="text">我要举报</el-button> -->
          </div>
          <div class="taskBidd" v-show="hitState== 1">
            <el-button type="text" class="bidding">已中标</el-button>
            <!-- <el-button type="text">我要举报</el-button> -->
          </div>
        </div>
        <div class="taskDescribe">
          <div class="taskDescribeTitle">
            <p>任务描述：</p>
          </div>
          <div>
            <p>{{result.tdes}}</p>
          </div>
          
        </div>
      </div>
      <div class="broker" v-if="hitState== null||hitState== 0">
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
      <div class="bidRate" v-if="hitState== null||hitState== 0">
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
      <div>
        <el-dialog title="竞标确认" :visible.sync="centerDialogVisible" width="46%" center >
          <div class="dialog">
            <p class="dialogTitle">您是否确认要竞标该项任务？请您确认竞标任务内容</p>
            <!-- <div class="agreement">
              <a>《智工平台竞标项目规则协议》</a>
              <p>点击下载</p>
            </div> -->
            <div class="biddingContent">
                <h3>{{result.name}}</h3>
                <p><i class="el-icon-date"></i> 发布日期： {{result.releaseTime |dateFormat('yyyy-MM-dd')}}</p>
                <p><i class="el-icon-time"></i> 项目周期： {{result.tperiod}} 个月</p>
                <!-- <p>驻场需求： 无需驻场</p> -->
                <p><i class="el-icon-time"></i> 技能要求： {{result.skillsRequired}}</p>
                <p><i class="el-icon-time"></i> 是否议价： {{result.isBargain}}</p>
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
        result: {},
        centerDialogVisible: false,
        checkList:"",
        fileList:[],
        uploadheaders: { "X-Access-Token": sessionStorage.getItem("token") },
        offeStartPrice: 0,//低价
        offerEndPrice: 0,//止价
        hitState:"",
        uploadAction: this.baseURL + `/taskcenter/upload/upload`
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
            this.result = res.data.result;
            this.hitState = res.data.result.hitState;
            this.offeStartPrice = res.data.result.startPrice;
            this.offerEndPrice = res.data.result.endPrice
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
  height: 160px;
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

</style>
<template>
  <div class="taskDetails">
    <headerSelect />
    <div class="taskDetailsContent">
      <div class="detailsTitle">
          <!-- <div class="title">
            <span>任务大厅</span>
            <span class="fontColor">></span>
            <span class="fontColor">任务详情</span>
          </div> -->
          <img src="../../assets/taskBanner.png" alt="">
      </div>
      <div class="detailsContent">
        <div class="contentTop">
          <div class="topLeft">
            <h4>{{result.name}}</h4>
            <div class="leftType">
              <span>{{result.industry}}</span>
              <span>{{result.typeName}}</span>
              <span>{{result.period}}个月</span>
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
            <p>项目周期： {{result.period}} 个月</p>
            <!-- <p>驻场需求： 无需驻场</p> -->
            <p>技能要求： {{result.skillsRequired}}</p>
            <p>是否议价： {{result.isBargain}}</p>
          </div>
        </div>
        <div class="taskDescribe">
          <div class="taskDescribeTitle">
            <p>任务描述</p>
          </div>
          <div>
            <p>{{result.des}}</p>
          </div>
          
        </div>
        <div class="taskDescribe" v-if="taskState==1">
          <div class="taskDescribeTitle">
            <p>竞标人列表</p>
            <p class="newbidder">新增竞标人</p>
          </div>
          
          <div class="bidderList">
            <div class="bidder" v-for="(item,index) in bidder" :key="index" @click="bidderInfromation(item.id)">
                <div class="bidderInfromation">
                    <img src="../../assets/top.jpg" alt="" class="bidderIcon">
                    <p><i class="el-icon-time"></i> IT行业</p>
                    <p><i class="el-icon-time"></i> 从业4四年</p>
                </div>
                <div class="bidderRight">
                    <div class="biddertop">
                        <i class="el-icon-more"></i>
                    </div>
                    <h3>{{item.membeName}}</h3>
                    <p class="matching" v-if="item.hitState==0">匹配度： <i>未中标</i> </p>
                    <p class="matching" v-else-if="item.hitState==1">匹配度： <i>已中标</i> </p>
                    <p class="matching" v-else-if="item.hitState==2">匹配度： <i>审核中</i> </p>
                    <p class="amount">接取任务总数： <i>36</i> </p>
                    <p class="amount">客户满意度： <i>96%</i> </p>
                    <div class="bidderBtn">
                        <a type="text" >详情></a>
                    </div>
                </div>
            </div>  
          </div>
        </div>
        <div class="taskButton">
            <el-button type="primary" v-if="taskState=='6'" @click="dialogVisible = true">确认金额</el-button>
            <!-- <el-button class="cancel">取消任务</el-button> -->
        </div>
        <div class="taskButton">
            <el-button type="primary" v-if="taskState==5" @click="confirmAccept">确认验收</el-button>
            <!-- <el-button class="cancel">取消任务</el-button> -->
        </div>
        <div>
          <el-dialog
            title="请确认成交金额"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <el-input v-model="actualAmount"></el-input>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="visible">确 定</el-button>
              <el-button @click="dialogVisible = false">取 消</el-button>
              
            </span>
          </el-dialog>
        </div>
        <div>
          <el-dialog
            title=""
            :visible.sync="centerDialogVisible"
            width="450px"
            >
            <!-- <el-form :inline="true" class="demo-form-inline">
              
              <el-form-item label="支付渠道">
                <el-select v-model="channelId" placeholder="请选择" @change="paycenter">
                  <el-option
                    v-for="item in options"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code">
                  </el-option>
                </el-select>
              </el-form-item>
              
            </el-form> -->
            <div class="dialog-content">
                <div class="alipay">
                    <span class="alipayActive" @click="alipayActive(1)">
                      <p><span class="iconfont Alipay">&#xe62a;</span>支付宝支付</p>
                      <span class="activecorrect">
                          <p class="activeImg"></p>
                          <i class="el-icon-check icon" ></i>
                      </span>
                    </span>
                    <span class="alipayActive2" @click="alipayActive(2)">
                      <p><span class="iconfont Alipay">&#xe938; </span>微信支付</p>  
                      <span class="activecorrect2">
                          <p class="activeImg2"></p>
                          <i class="el-icon-check icon" ></i>
                      </span>
                    </span>
                </div>
                <div class="code">
                    <div id="qrcode" class="qrcode" ref="qrcodeContainer">
                      <!-- <p>请选择微信支付</p> -->
                    </div>
                </div>
                <div class="complete">
                    <p>请使用微信支付：<i>{{actualAmount}}元</i></p>
                    <!-- <h4>我已完成支付</h4> -->
                </div>
                <div class="agreement">
                    <p>付费即表示同意《智工网在线增值服务协议》</p>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="centerVisible = false">确 定</el-button>
              <el-button @click="centerDialogVisible = false">取 消</el-button>
            </span>
          </el-dialog>
        </div>
        <!-- <el-dialog
            title=""
            :visible.sync="center"
            width="30%"
            >
              <div class="qrcode" ref="qrcodeContainer">
                <p>请选择微信支付</p>
              </div>
              
        </el-dialog> -->
        <!-- <div id="qrcodes" v-html="datadorm"></div> -->
        <!-- <div class="qrcode" ref="qrcodeContainer"></div> -->
        <!-- <div >
              <vue-qr :logoSrc="imageUrl" :text="codeValue" :callback="test" :logoScale="50" :size="300"></vue-qr>
        </div>   -->
      </div>
      
    </div>
    <fonter />
  </div>
</template>

<script>
import headerSelect from "@/components/headerSelect";
import fonter from "@/components/fonter";
import { taskDetails, order } from "@/api/task/taskList";
import { pay } from '@/api/task/paycenter'
// import QrcodeVue from 'qrcode.vue' 
import QRCode  from "qrcodejs2"
// vue对象的一个method
// import VueQr from 'vue-qr'
export default {
  data() {
    return {
        value: "",
        id: "",
        memberId: "",
        username: "",
        result: {},
        dialogVisible: false,
        checkList:"",
        fileList:[],
        uploadheaders: { "X-Access-Token": sessionStorage.getItem("token") },
        offeStartPrice: 0,//低价
        offerEndPrice: 0,//止价
        hitState:"", //竞标人竞标状态
        //  uploadAction: this.baseURL+`/taskcenter/upload/upload`,
        bidder:[],
        // bidderId:""
        codeValue:"支付",
        taskState:"", //任务竞标状态
        imageUrl: require("../../assets/banner_img.png"),
        actualAmount:"",
        mchOrderNo:"", //订单号
        amount:"", //支付金额
        channelId:"", //渠道id
        options:[
          {
            code:"ALIPAY_PC",
            name: "支付宝PC支付"
          },
          {
            code:"WX_NATIVE",
            name: "微信原生扫码支付"
          },
        ],
        centerDialogVisible:false,
        notifyUrl:"topicTask",
        currency:"cny", //币种
        mchId:"", //商户id
        extra:{
          productId:"" ,
          returnUrl:"/#/taskHall"
        },
        text:"",  //支付链接
        // center:false,
        datadorm:""
    };
  },
  components: {
    headerSelect,
    fonter,
    // QRCode 
    // VueQr
  },
  created() {
    this.id = this.$route.params.id;
    this.username = sessionStorage.getItem("username");
    this.memberId = sessionStorage.getItem("memberId");
    this.taskDetails();
    this.bidderList();
    // this.channel();
    
    // this.showQRCode()
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
            this.taskState = res.data.result.taskState;
            this.offeStartPrice = res.data.result.startPrice;
            this.offerEndPrice = res.data.result.endPrice
          }
        })
    },
  
    //订单接口
    visible(){
      let url = `${order.orderAdd}`;
      let data = {
        taskId: this.id,
        memberId: this.memberId,
        memberName: this.username,
        actualAmount: this.actualAmount,
        taskName: this.result.name
      };
      this.axios.post(url,data).then(res=>{
        if(res.data.code==200){
          this.dialogVisible = false
          this.centerDialogVisible = true;
          this.mchOrderNo = res.data.result.sn;
          this.amount = res.data.result.actualAmount;
          this.extra.productId = res.data.result.sn;
        }
      })
    },
    // 竞标人
    bidderList(){
        let url = `${taskDetails.taskMember}`
        let data = {
            id:this.id
        }
        this.axios.get(url,{params:data}).then(res=>{
            if(res.data.code==200){
                this.bidder = res.data.result;
            }
        })
    },
    // 竞标人详情
    bidderInfromation(id){
        this.$router.push({
            name:"bidder",
            params:{
              id:id,
              taskId:this.id
            }
        });
    },
    // 获取渠道说明
    // channel(){
    //   let arr=[]
    //   this.axios.get(`${pay.channels}`).then(res=>{
    //     if(res.data.code==200){
    //       // this.options = res.data.result;
    //       this.paycenter()
    //     }
    //   }).catch(err=>{
    //     console.log(err)
    //   })
      
    // },
    
    // 支付渠道
    paycenter(){
      this.axios.get(`${pay.paycenter}`).then(res=>{
        if(res.data.code==200){
          if(this.channelId=="ALIPAY_PC"){
              this.mchId = res.data.result.ALIPAY_PC
          }else if(this.channelId == "WX_NATIVE"){
            this.mchId = res.data.result.WX_NATIVE
          }
        }
      })
    },
    // 支付订单接口
    create(){
      let url =`${pay.create}`
      let data = {
        amount:this.amount,
        channelId:this.channelId,
        currency:this.currency,
        mchId:this.mchId,
        mchOrderNo:this.mchOrderNo,
        notifyUrl:this.notifyUrl,
        extra: this.extra,
        body: this.result.name,
        subject: this.result.name,

      }
      //  const newTab = window.open();
      this.axios.post(url,data).then(res=>{
        if(res.data.code==200){
          
          // this.centerDialogVisible = false;
          // this.center = true;
          if(res.data.result.codeUrl==undefined){
                // this.center = false;
                //  let routerData = this.$router.resolve({path:'/payGateWay',query:{ htmlData: res.data.result.payUrl}})
                // // 打开新页面
                //   window.open(routerData.href, '_ blank')
                const div = document.createElement('div');
                div.innerHTML = res.data.result.payUrl; // html code
                document.body.appendChild(div);
                // document.forms.alipaysubmit.setAttribute('target', '_blank');
                document.forms[0].submit();
          }else if(res.data.result.payUrl==undefined){
            this.text = res.data.result.codeUrl;
            document.getElementById("qrcode").innerHTML = "";
            this.showQRCode();
          }
        }
      })
    },
    // 确认验收
    confirmAccept(){
      let url = `${taskDetails.confirmAccept}`;
      this.axios.put(url,this.result).then(res=>{
        if(res.data.code==200){
          this.$message.success("项目完成")
        }
      })
    },
    // 二维码
    showQRCode(){  
      this.$nextTick(()=>{  
          var qrcode = new QRCode(this.$refs.qrcodeContainer, {  
              text: this.text,  
              width: 100,  
              height: 100,  
              colorDark: '#000000',  
              colorLight: '#ffffff',  
              correctLevel: QRCode.CorrectLevel.H  
          })  
      } )
    },
    alipayActive(item){
      if(item==1){
        this.channelId="ALIPAY_PC"
        this.axios.get(`${pay.paycenter}`).then(res=>{
          if(res.data.code==200){
            this.mchId = res.data.result.ALIPAY_PC;
            this.create()
          }
        }).catch(err=>{
          console.log(err)
        });
        document.getElementsByClassName("activecorrect2")[0].style.display = "none";
        document.getElementsByClassName("activecorrect")[0].style.display = "block";
      }else if(item==2){
        this.channelId = "WX_NATIVE";

        this.axios.get(`${pay.paycenter}`).then(res=>{
          if(res.data.code==200){     
            this.mchId = res.data.result.WX_NATIVE;
            this.create()
          }
        }).catch(err=>{
          console.log(err)
        });
        document.getElementsByClassName("activecorrect")[0].style.display = "none";
        document.getElementsByClassName("activecorrect2")[0].style.display = "block";
        console.log(document.getElementsByClassName("qrcode"))
        
      }
      
    },
    centerVisible(){
      this.taskDetails();
    }



    // test(dataUrl,id){
    //     dataUrl=`http://interstrangers.com:8081/`
    //     console.log(dataUrl, id)
    // }
    
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
i{
    font-style: normal;
}
.taskDetailsContent {
  color: #999999;
}
.detailsTitle {
  width: 1200px;
  margin: 10px auto;
}
.detailsTitle img {
  width: 1200px;
}
.detailsContent {
  width: 1000px;
  background: #ffffff;
  margin: 0px auto;
  padding: 20px;
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
.newbidder{
    color:#999999;
    font-size: 10px;
    margin: 10px 0;
}
.bidder{
    width:210px;
    height:110px;
    background:rgba(255,255,255,1);
    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
    opacity:1;
    padding: 12px 0 0 12px;
    display: flex;
    justify-content: space-around;
    line-height: 18px;
    margin-right: 20px;
    margin-bottom: 30px;
}
.bidderIcon{
    width:40px;
    height:40px;
    border-radius:4px;
}
.bidderInfromation p{
    color: #777777;
    font-size: 8px;
    line-height: 16px;
}
.bidderRight{
    color: #999999;
}
.bidderRight h3{
    font-size: 14px;
    color: #333333;
    margin-bottom: 2px;
}
.bidderRight .matching{
    font-size: 12px;
}
.bidderRight .matching i{
    color: #FF9C6C;
}
.bidderRight .amount{
    font-size: 10px;
}
.bidderRight .amount i{
    color: #339999;
}
.bidderList{
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
}
.bidderBtn{
    color: #339999;
    font-size: 8px;
    text-align: right;
    cursor: pointer;
}
.biddertop{
    color: #999;
    text-align: right;
    height: 5px;
    cursor: pointer;
}
.taskButton{
  margin-top: 50px;
  text-align: right;
}
#qrcodes{
  height: 200px;
}
#qrcodes form{
  height: 200px;
}


.dialog-content{
    padding: 20px;
    text-align:center;
}
.dialog span{
    /* color: #999999; */
    font-size: 14px;
}
.el-dialog__header{
    background: #f3f3f4
}
.alipay{
    display: flex;
    justify-content: space-between;
}
.alipay>span{
    width: 164px;
    height: 40px;
    border: 1px solid #CAC9CA;
    line-height: 40px;
}
.alipay span.alipayActive{
    border: none;
    border: 2px solid #0099CC;
    color:#0099CC;
    position: relative;
    cursor: pointer;

}
.alipay span.alipayActive2{
    border: none;
    border: 2px solid rgb(80, 182, 116);;
    color:rgb(80, 182, 116);;
    position: relative;
    cursor: pointer;

}
.activecorrect,.activecorrect2{
  display: none;
}
.activeImg{
    position: absolute;
    bottom: 0;
    right: 0;
    /* height: 20px; */
    width: 0; 
    height: 0px;
    border-width: 10px;
    border-style: solid;
    border-color:#fff #0099CC #0099CC #fff;
    
    text-align: center;
    /* padding: 2px */
}
.activeImg2{
    position: absolute;
    bottom: 0;
    right: 0;
    /* height: 20px; */
    width: 0; 
    height: 0px;
    border-width: 10px;
    border-style: solid;
    border-color:#fff rgb(80, 182, 116) rgb(80, 182, 116) #fff;
    
    text-align: center;
    /* padding: 2px */
}
.icon{
    position: absolute;
    bottom: 0;
    right: -2px;
    color: #fff;
}
.code{
  width: 120px;
  height: 110px;
  margin: 0 auto;
  margin-top: 30px;
}
.agreement>p{
    font-size: 12px;
    color: #999999;
    margin-top:20px;
}
.complete p{
    color: #848484;
    font-size: 14px;
}
.complete p>i{
    color: #FF6748;
    font-style: normal;
}
</style>
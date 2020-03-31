<template>
  <div class="personal">
      <headerSelect />
      <div class="content">
          <div class="contentLeft">
              <membersLeft />
          </div>
          <div class="contentRight radius">
              <div class="personalNav">
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="资金总览" name="first">
                            <div class="previewList">
                                <div class="preview">
                                    <h2>1310.2</h2>
                                    <p>账户余额（元）</p>
                                </div>
                                <div class="preview">
                                    <h2>1210.2</h2>
                                    <p>可提现余额（元）</p>
                                </div>
                                <div class="preview">
                                    <h2>5230.22</h2>
                                    <p>累计提现余额（元）</p>
                                </div>
                                <div class="preview view">
                                   <i class="el-icon-view"></i>
                                </div>
                                <div>
                                    <el-button class="button1 button-color" @click="rcharge">充值</el-button>
                                    <el-button class="button1 fontColor" @click="withdrawal">提现</el-button>
                                </div>
                            </div>
                            <div class="myMember">
                                <h3>我的会员</h3>
                                <div class="memberLevel">
                                    <div class="level">
                                        <p class="endTime">会员等级：<i class="interests"><img src="../../assets/navOut5.png" alt=""> 银牌会员</i></p>
                                        <p class="endTime">会员截止时间：<span class="colors"></span><span class="color2"></span></p>
                                    </div>
                                    <div class="level">
                                        <p class="interests">升级获得更多权益</p>
                                        <p class="endTime">2021-03-21到期</p>
                                    </div>
                                    <div class="level levelJump">
                                        <p class="endTime">升级 <span class="jump"> <i class="el-icon-arrow-right"></i></span></p>
                                        <p class="endTime">立即续费 <span class="jump"> <i class="el-icon-arrow-right"></i></span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="myMember">
                                <h3>最近的收入记录</h3>
                                <div class="record">
                                    <el-timeline >
                                        <el-timeline-item
                                        v-for="(activity, index) in activities"
                                        :key="index"
                                        :color="activity.color"
                                        >
                                            <div class="recordList">
                                                <div class="recordList timestamp">
                                                    <div >
                                                        <h4>{{activity.timestamp}}</h4>
                                                        <p>10:00:00</p>
                                                    </div>
                                                    <div class="timestampTime">
                                                        <h4>{{activity.content}}</h4>
                                                        <p>任务大厅-项目任务</p>
                                                    </div>
                                                </div>
                                                
                                                <div>
                                                    <p>{{activity.num}}</p>
                                                </div>
                                                <div>
                                                    <p>任务结算</p>
                                                </div>
                                                <div class="details">
                                                    <p>详情</p>
                                                </div>
                                            </div>
                                        </el-timeline-item>
                                    </el-timeline>

                                </div>
                            </div>


                        </el-tab-pane>
                        <el-tab-pane label="收入记录" name="second">收入记录</el-tab-pane>
                        <el-tab-pane label="支付记录" name="third">支付记录</el-tab-pane>
                        <el-tab-pane label="提现记录" name="fourth">提现记录</el-tab-pane>
                  </el-tabs>
                  <div class="money">
                     <p><i class="el-icon-bank-card"></i> 资金账户管理</p> 
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
import membersLeft from "@/components/members/membersLeft";
export default {
  data(){
      return{
          activeName: "first", 
          reverse: true,
          activities: [
            {
                content: '在LTE网络下操纵目标台  语音短信的系统',
                timestamp: '2018-04-15',
                color:"#999999",
                num:"+175 .06"
            }, 
            {
                content: 'H5活动页设计',
                timestamp: '2018-04-13',
                color:"#999999",
                num:"+75 .06"
            }, 
            {
                content: '要求定位，批量手机号注册一个产品 ',
                timestamp: '2018-04-11',
                color:"#999999",
                num: "+75 .06"
            },
            {
                content: '要求定位，批量手机号注册一个产品 ',
                timestamp: '2018-04-11',
                color:"#999999",
                num:"+75 .06",
            },
            {
                content: '彩票公众号开发 ',
                timestamp: '2018-04-11',
                color:"#999999",
                num:"+75 .06",
            },
            {
                content: '要求定位，批量手机号注册一个产品 ',
                timestamp: '2018-04-11',
                color:"#999999",
                num:"+445 .06"
            },
          ]
      }
  },
  components:{
     headerSelect,
     fonter,
     membersLeft
   },
  created(){
     
  },
  methods:{
    handleClick(tab, event){
        console.log(tab, event);
    },
    rcharge(){

    },
    withdrawal(){

    }
  }
}
</script>
<style scoped>
    .content{
        width: 1200px;
        margin: 10px auto;
        display: flex;
    }
    .contentRight{
        width: 1010px;
        margin-left: 10px;
        background: #ffffff;
        padding: 0 10px;
    }
    i{
        font-style: normal;
    }
    .el-tabs>>>.el-tabs__header .el-tabs__item.is-active,.el-tabs>>>.el-tabs__header .el-tabs__item:hover{
        color: #333333;
        font-size: 16px;
    }
    .el-tabs>>>.el-tabs__header .el-tabs__item{
        /* color: #339999; */
        font-size: 16px;
    }
    /* .el-tabs>>>.el-tabs__nav.is-top{
        padding-left: 10px;
    } */
    .el-tabs>>>.el-tabs__nav.is-top .el-tabs__active-bar{
        background: #339999;
    }
    .el-tabs>>>.el-tabs__header .el-tabs__nav-wrap{
        /* width: 50%; */
        border-bottom: 1px solid #E9E9E9;

    }
    .el-tabs>>>.el-tabs__header .el-tabs__nav-wrap::after {
        background-color: #ffffff;
    }
    .el-tabs{
        width: 100%;
    }
    .personalNav{
        position: relative;
        padding-left: 10px;
    }
    .money{
        position: absolute;
        top: 16px;
        right: 10px;
        color: #333333;
        font-size: 14px;
    }
    .money p>i{
        color: #cccccc;
        font-size: 16px;
    }
    .button1{
        width: 100px;
        height: 34px;
        padding: 0;
    }
    .button1:active{
        border: none !important;
    }
    .previewList{
        display: flex;
        /* justify-content:; */
        align-items: center;
        border-bottom: 1px solid #E9E9E9;
        height: 120px;
        color: #666666;
        font-size: 12px;
        /* padding: 0 20px; */
    }
    .previewList .preview{
        padding: 0 30px;
        border-right: 1px solid #DFDFDF;
        /* line-height: 28px; */
    }
    .previewList .preview h2{
        color: #DBB47F;
        font-size: 36px;
    }
    .previewList .view{
        border: none;
        font-size: 22px;
        color: #999999;
    }
    .previewList .preview p{
        margin-top: 10px;
    }
    .myMember h3{
        font-size: 16px;
        color: #333333;
        height: 54px;
        line-height: 62px;
        border-bottom: 1px solid #E9E9E9;
    }
    .memberLevel{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
    }
    .level{
        line-height: 36px;
    }
    .colors{
        width: 56px;
        height: 4px;
        background: #DBB47F;
        display: inline-block;
        border-radius: 2px 0 0 2px;
    }
    .color2{
        width: 24px;
        height: 4px;
        background: #B08244;
        display: inline-block;
        border-radius: 0 2px 2px 0;
    }
    .endTime{
        color: #999999;
    }
    .interests{
        color: #333333;
    }
    .jump i{
        /* width: 14px;
        height: 14px; */
        border: 1px solid #339999;
        border-radius: 50%;
        display: inline-block;
        color: #339999;
        font-size: 6px;
        margin-left: 4px;
        cursor: pointer;
       
    }
    .levelJump{
        text-align: right;
        margin-right: 50px;
    }
    .record{
        margin-top: 20px;
        text-align: left;
        margin-bottom: 30px;
    }
    .time{
        position: absolute;
        left: 0;
    }
    .recordList{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #999999;
        line-height: 24px;
    }
    /* .recordList p{
        color: #999999;
        
    } */
    .recordList h4{
        color: #333333;
    }
    .timestampTime{
        width:310px;
    }
    .timestamp{
        width: 46%;
        /* justify-content: center; */
    }
    .timestamp h4{
        font-size: 14px;
    }
    .details{
        color: #339999;
        cursor: pointer;
    }
    .el-timeline >>>.el-timeline-item .el-timeline-item__tail{
        left: 107px;
    }
    .el-timeline >>>.el-timeline-item .el-timeline-item__node--normal{
        left: 102px;
    }
    .el-timeline >>>.el-timeline-item .el-timeline-item__wrapper{
        left: -24px;
    }
</style>

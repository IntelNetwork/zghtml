<template>
  <div class="taskHall">
      <headerSelect />
      <div class="taskHallContent">
          <div class="contentTop">
              <div class="contentType">
                  <span>行业类型：</span>
                  <ul>
                      <li class="active" @click="active($event)">不限</li>
                      <li v-for="(item,index) in tindtype" :key="index" @click="active($event)" class="">{{item.name}}</li>
                  </ul>
              </div>
              <div class="contentType">
                  <span>任务类型：</span>
                  <ul>
                      <li class="active" @click="active($event)">不限</li>
                      <li v-for="(item,index) in type" :key="index" @click="active($event)" class="">{{item.name}}</li>
                  </ul>
              </div>
              <div class="contentType">
                  <span>金额范围：</span>
                  <ul>
                      <li class="active" @click="active($event)">不限</li>
                      <li v-for="(item,index) in type" :key="index" @click="active($event)" class="">{{item.name}}</li>
                  </ul>
              </div>
              <div class="contentSorting">
                  <span>排序：</span>
                  <ul>
                      <li class="default" @click="active2($event)">默认</li>
                      <li @click="active2($event)">项目资金</li>
                      <li @click="active2($event)">项目周期</li>
                  </ul>
              </div>
          </div>
          <div class="content">
              <div class="contentLeft">
                  <div class="taskContent" v-for="(item ,index) in taskConten" :key="index" @click="taskHall($event)">
                      <div style="display:none">{{item.id}}</div>
                      <div class="Titleimg">
                           <div>
                              <img :src="item.img" alt="">
                            </div>
                            <div class="leftTitle">
                                <div>
                                    <h3>{{item.name}}</h3>
                                </div>
                                <div class="leftType">
                                    <span>{{item.industry}}</span>
                                    <span>{{item.typeName}}</span>
                                    <span>{{item.period}}个月</span>
                                </div>
                                <div>
                                    <p>技能要求：{{item.skillsRequired}}</p>
                                </div>
                            </div>
                      </div>
                      <div class="price">
                          <span>
                              <p v-if="item.isBargain == '0'">
                                  <i class="priceSum">{{item.startPrice}} - {{item.endPrice}}</i>
                             </p>
                             <p v-if="item.isBargain == '1'">
                                 可议价
                                  <i class="priceSum">{{item.startPrice}} - {{item.endPrice}}</i>
                             </p>
                          </span>
                          <span>
                              <span class="priceFont">
                                  <svg class="icon priceIcon" aria-hidden="true">
                                    <use xlink:href="#iconzhuanxiangbiao"></use>
                                  </svg>
                                    <p>开通会员，优先竞标</p>
                                </span>
                          </span>
                          <span>
                              <p>已竞标：{{item.count}} 人 | 发布于{{item.releaseTime |dateFormat('yyyy-MM-dd')}}</p>
                          </span>
                      </div>
                  </div>
              </div>
              <div class="contentRight">
                  <div class="demand" @click="centerDialogVisible=true">
                      <span class="iconfont">
                         &#xe634;
                      </span>
                      <span class="demandContent">
                          <h4>免费发布需求</h4>
                          <p>发布项目，任务等</p>
                      </span>
                  </div>
                  <div class="clinch">
                      <div class="clinchTitle">
                          <p>最新成交</p>
                          <span></span>
                      </div>
                      <div class="clinchContent" v-for="(item,index) in clinch" v-if="index < 3" :key="index">
                          <div class="clinchName">
                              <span class="name">{{item.memberName}}</span>
                              <span>中标</span>
                          </div>
                          <div class="clinchPrice">
                             <span>￥{{item.endPrice}}</span> 
                             <span class="money">{{item.name}}</span>
                          </div>
                      </div>
                  </div>
                  <div class="taskStarImg">
                      <img src="../../assets/task15.png" alt="">
                      <img src="../../assets/task14.png" alt="">
                  </div>
                  <div class="starAgent">
                      <div class="clinchTitle">
                          <p>明星智工经纪人</p>
                          <span></span>
                      </div>
                      <div>
                          <div class="agent">
                              <div class="agentPortrait">
                                  <i>
                                      <img src="../../assets/task8.png" alt="">
                                  </i>
                                  <span>
                                      <img src="../../assets/top.jpg" alt="">
                                  </span>
                                  
                              </div>
                              <div class="agentName">
                                  <h4>翁少锋 </h4>
                                  <p>好评率：<i>99%</i></p>
                              </div>
                              <div class="agentButton">
                                  <span>签他</span>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div class="agent">
                              <div class="agentPortrait">
                                  <i>
                                      <img src="../../assets/task6.png" alt="">
                                  </i>
                                  <span>
                                      <img src="../../assets/top.jpg" alt="">
                                  </span>
                                  
                              </div>
                              <div class="agentName">
                                  <h4>翁少锋 </h4>
                                  <p>好评率：<i>99%</i></p>
                              </div>
                              <div class="agentButton">
                                  <span>签他</span>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div class="agent">
                              <div class="agentPortrait">
                                  <i>
                                      <img src="../../assets/task7.png" alt="">
                                  </i>
                                  <span>
                                      <img src="../../assets/top.jpg" alt="">
                                  </span>
                                  
                              </div>
                              <div class="agentName">
                                  <h4>翁少锋 </h4>
                                  <p>好评率：<i>99%</i></p>
                              </div>
                              <div class="agentButton">
                                  <span>签他</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="public">
                      <div class="weixinPublic">
                          <img src="../../assets/task9.png" alt="">
                          <span>
                              <h4>关注平台微信公众号</h4>
                              <p>随时随地发布需求，浏览 竞标项目机会（完善中）</p>
                          </span>
                      </div>
                      <div class="QQphone">
                          <span>
                              <i class="el-icon-phone"></i> 客服QQ</span>
                          <span>
                              <p>305787656</p>
                          </span>
                      </div>
                      <div class="QQphone">
                          <span>
                              <i class="el-icon-phone"></i> 客服电话</span>
                          <span>
                              <p>400-8982-008</p>
                          </span>
                      </div>
                      <div class="QQphone">
                          <span>
                              <i class="el-icon-phone"></i> 客服邮箱</span>
                          <span>
                              <p>steven.weng@shdbr.com</p>
                          </span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="block">
               <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="pageNo"
                    :page-size="pageSize"
                    layout="prev, pager, next, total"
                    :total="total">
               </el-pagination>
          </div>
          <div>
        <el-dialog title="竞标确认" :visible.sync="centerDialogVisible" width="46%" center >
          <div class="dialog">
            <p class="dialogTitle">您是否确认要竞标该项任务？请您确认竞标任务内容</p>
            <div class="agreement">
              <a>《智工平台竞标项目规则协议》</a>
              <p>点击下载</p>
            </div>
            <div class="biddingContent">
                <p>      为了保证平台与用户双方利益，现双方甲方（平台方），乙方（用户方）
                    本着平等互利、优势互补、精诚合作、共同发展的原则，就合作事宜，达成
                    以下协议，并共同遵守。</p>
                <p>
                          为了保证平台与用户双方利益，现双方甲方（平台方），乙方（用户方）
                    本着平等互利、优势互补、精诚合作、共同发展的原则，就合作事宜，达成
                    以下协议，并共同遵守。 为了保证平台与用户双方利益，现双方甲方（平台
                    方），乙方（用户方）本着平等互利、优势互补、精诚合作、共同发展的原
                    则，就合作事宜，达成以下协议，并共同遵守。 为了保证平台与用户双方利
                    益，现双方甲方（平台方），乙方（用户方）本着平等互利、优势互补、精
                    诚合作、共同发展的原则，就合作事宜，达成以下协议，并共同遵守。
                </p>
            </div>
            <div class="checkbox">
              <el-checkbox-group v-model="checkList">
                 <el-checkbox value = "1" label="我已阅读过平台《项目规则协议》，并遵守"></el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="visible">发布任务</el-button>
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
import { task, zgtasktype } from "@/api/task/taskList"
import { formatDate } from "@/api/date.js"
export default {
    data(){
        return{
            type:[],
            pageNo:1,
            pageSize:20,
            total:0,
            taskConten:[],
            id:'1',
            tindtype:[],
            clinch:[],
            centerDialogVisible:false,
            checkList:[],
        }
    },
    components:{
        headerSelect,
        fonter
    },
    created(){
        this.taskList();
        this.zgtasktype();
        this.zgtindtype();
        this.clinchList();
    },
    methods:{
        // 页面list接口
        taskList(){
             let url = `${task.taskPage}?pageNo=${this.pageNo}&pageSize=${this.pageSize}`;
             this.axios.get(url).then(res=>{
                if (res.data.code==200){
                    this.taskConten = res.data.result.records;
                    this.total = res.data.result.total;
                    this.pageNo = res.data.result.current;
                    this.pageSize = res.data.result.size;
                }
                
             })
        },
        // 任务类型
        zgtasktype(){
            let url = `${zgtasktype.type}`;
            this.axios.get(url).then(res=>{
                if(res.data.code==200){
                    this.type = res.data.result
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        // 所有行业类型
        zgtindtype(){
            let url = `${zgtasktype.tindtype}`;
            this.axios.get(url).then(res=>{
                if(res.data.code==200){
                    this.tindtype = res.data.result
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        //成交动态
        clinchList(){
            let url = `${zgtasktype.order}`;
            this.axios.get(url).then(res=>{
                if(res.data.code==200){
                    this.clinch = res.data.result
                }
            })
        },
        active(event){
            let paren = event.currentTarget.parentElement.children;
            for(var i=0;i<paren.length;i++){
                paren[i].className = "";
            }
            event.currentTarget.className = "active";
        },
        active2(event){
             let paren = event.currentTarget.parentElement.children;
            for(var i=0;i<paren.length;i++){
                paren[i].className = "";
            }
            event.currentTarget.className = "default";
        },
        handleSizeChange(val) {
            this.pageSize = val;
            this.taskList()
        },
        handleCurrentChange(val) {
            this.pageNo = val;
            this.taskList()
        },
        taskHall(event){
            this.id =  event.currentTarget.firstElementChild.innerHTML;
            this.$router.push({name:'taskDetails',params: {id: this.id}}) 
        },
        //发布任务
        visible(){
            if(this.checkList.length==0){
                return this.$message.warning("请选择协议")
            };
            console.log(this.checkList)
            this.$router.push({
                name:"taskRelease"
            });
            this.centerDialogVisible = false;
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


}
</script>
<style scoped>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .priceIcon{
        font-size: 36px;
        padding-top: 14px;
    }
    .contentTop{
        width: 100%;
        background: #ffffff;
        padding-top: 20px;
        margin-top: 10px
    }
    .contentType{
        display: flex;
        justify-content: flex-start;
        color: #333333;
        font-size: 14px;
        line-height: 30px;
        width: 940px;
        margin: 10px auto;
    }
    .contentType ul{
        width: 90%;
        margin: 0 auto;
        color: #999999;
        font-size: 12px;
        display: flex;
        flex-wrap: wrap;
    }
    .contentType ul li{
        margin: 0 15px;
        cursor: pointer;
    }
    .contentType .active{
        width: 80px;
        height: 28px;
        color: #ffffff;
        background: #339999;
        border-radius:6px;
        text-align: center;
    }
    .contentSorting{
        font-size: 14px;
        width: 940px;
        margin: 20px auto;
        display: flex;
        color: #333333;
        height: 72px;
         align-items: center;
        border-top: 1px dashed  #999;
    }
    .default{
        color: #339999
    }
    .contentSorting ul{
        color: #999999;
        display: flex;
        align-items: center;
    }
    .contentSorting ul li{
        padding: 0 10px;
        height: 16px;
        cursor: pointer;
    }
    .contentSorting ul li:nth-child(2){
        border-left: 2px solid #999;
        border-right: 2px solid #999
    }
    .content{
        width: 1000px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .contentRight{
        width: 270px;
    }
    .demand{
        width: 100%;
        height: 90px;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius:6px;
        cursor: pointer;
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
    .taskContent{
        padding: 20px;
        width: 710px;
        display: flex;
        justify-content: space-around;
        background: #ffffff;
        box-sizing: border-box;
        margin-bottom: 10px;
        border-radius:6px;
        height: 146px;
    }
    .Titleimg{
        width: 65%;
        display: flex;
        justify-content: flex-start
    }
    .leftTitle{
        display: flex;
        /* flex-wrap:wrap; */
        flex-direction: column;
        justify-content: space-between;
        color: #999;
        margin-left: 16px;
    }
    .leftTitle h3{
        font-size: 18px;
        color: #333333;
        font-weight:bold;
    }
    .leftTitle .leftType span{
        padding: 5px 10px;
        background: #EFEFEF;
        margin: 0 5px;
        border-radius: 6px;
        
    }
    .price{
        display: flex;
        /* flex-wrap:wrap; */
        flex-direction: column;
        justify-content: space-between;
        color: #999;
        align-items: flex-end;
        font-size: 14px;
    }
    .price span{
        display: inline-block;
    }
    i{
        font-style: normal;
    }
    .priceFont{
        display: flex;
        align-items: center;
    }
    .priceFont p{
        display: inline-block;

    }
    .priceSum{
        font-size: 16px;
        color: #FF9966;
    }
    .block{
        width: 700px;
        margin: 60px auto;
    }
    .clinch{
        width:270px;
        height:336px;
        background:rgba(255,255,255,1);
        border-radius:6px; 
        margin-top: 20px;
    }
    .clinchTitle{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #E8ECEE;
    }
    .clinchTitle p{
        padding-top: 20px;
        padding-left: 20px;
        color: #666;
        font-size: 16px;
        font-weight: 400;
    }
    .clinchTitle span{
        margin-left: 20px;
        width: 34px;
        height: 2px;
        background: #339999;
        display: inline-block;
        margin-top: 10px
    }
    .clinchContent{
        width: 90%;
        height: 90px;
        padding-top: 8px;
        border-bottom: 1px dashed #999;
        margin: 0 auto;
    }
    .clinchName{
        /* width: 90%; */
        height: 32px;
        background: #EFEFEF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 12px auto;
        color: #FF9966;
        font-size: 14px;
        padding: 0 10px;
    }
    .clinchName .name{
        color: #999999;
        
    }
    .clinchPrice{
        display: flex;
        justify-content: space-between;
        padding: 0 14px;
        font-size: 12px;
        color: #FF9966;
    }
    .clinchPrice .money{
        color: #333333;
        width: 100px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .taskStarImg{
        margin-top: 20px;
    }
    .taskStarImg img{
        width: 270px;
        height: 100px;
        margin: 5px 0;
    }
    .starAgent{
        height: 260px;
        background: #ffffff;
        margin-top: 20px;
        border-radius: 6px;
    }
    .agent{
        width: 90%;
        margin: 5px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 52px;
        color: #999;
    }
    .agentPortrait{
        width: 50px;
        height: 50px;
        position: relative;
    }
    .agentPortrait>span{
        position: absolute;
        left: 10px;
        top: 10px;
        z-index: 1;
    }
    .agentPortrait>span img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        
    }
    .agentPortrait i{
        width: 22px;
        height: 22px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
    }
    .agentPortrait i img{
        width: 22px;
        height: 22px;
        z-index: 999;
    }
    .agentName{
        line-height: 18px;
        padding-top: 10px;
    }
    .agentName h3{
        font-size: 16px;
    }
    .agentName p{
        font-size: 12px;
    }
    .agentName p i{
        color: #FF9966;
    }
    .agentButton{
        width: 80px;
        height: 28px;
        background: #339999;
        color: #ffffff;
        font-size: 14px;
        line-height: 28px;
        text-align: center;
        border-radius: 6px;
        margin-top: 10px;
        cursor: pointer;
    }
    .public{
        background: #ffffff;
        padding: 10px;
        margin-top: 20px;
        border-radius: 6px;
    }
    .weixinPublic{
        display: flex;
    }
    .weixinPublic img{
        width: 94px;
        /* height: 94px; */
    }
    .weixinPublic span h4{
        font-size:14px;
        font-weight:bold;
        margin-top: 16px;
    }
    .weixinPublic span p{
        color: #999999;
        font-size: 14px;
        padding-top: 12px;
    }
    .QQphone{
        color: #999;
        font-size: 14px;
        height: 75px;
        border-top: 1px dashed #999;
        padding-top: 20px;
        padding-left: 10px;
        font-weight:400;
    }
    .QQphone span>p{
        font-size: 16px;
        color: #333333;
        margin-top: 10px;
    }

 .dialog{
  width: 80%;
  margin: 0 auto;
}
.biddingContent {
  padding: 26px;
  border: 1px solid #707070;
  margin-top: 20px;
}
.biddingContent p{
  color: #333333;
  font-size: 14px;
  line-height: 20px;
}
/* .biddingContent p i{
  color: #339999;
  margin-right: 10px;
} */
.dialogTitle{
  font-size: 14px;
  color: #666;
  margin: 28px 0;
  /* text-align: center; */
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

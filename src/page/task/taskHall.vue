<template>
  <div class="taskHall">
      <headerSelect />
      <div class="taskHallContent">
          <div class="taskBanner">
              <img src="../../assets/taskBanner.png" alt="">
          </div>
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
                      <li class="active" @click="typelist($event)">不限</li>
                      <li v-for="(item,index) in type" :key="index" @click="typelist($event)" class="">{{item.name}}</li>
                  </ul>
              </div>
              <div class="contentType">
                  <span>金额范围：</span>
                  <ul>
                      <li class="active" @click="amountList($event)">不限</li>
                      <li v-for="(item,index) in amount" :key="index" @click="amountList($event)" class="">{{item.startPrice}}-{{item.endPrice}}</li>
                  </ul>
              </div>
              
          </div>
          <div class="content">
              <div class="contentLeft">
                    <div class="contentSorting">
                        <span>排序：</span>
                        <ul>
                            <li class="default" @click="active2($event)">默认</li>
                            <li @click="active2($event,3)">发布时间  
                                <span class="caret"><i class="el-icon-caret-top" @click="ascending('releaseTime')"></i> <i class="el-icon-caret-bottom" @click="drop('releaseTime')"></i></span>
                            </li>
                            <li @click="active2($event,4)">竞标人数
                                <span class="caret"><i class="el-icon-caret-top" @click="ascending('count')"></i> <i class="el-icon-caret-bottom" @click="drop('count')"></i></span>
                            </li>
                            <li @click="active2($event,1)">项目资金  
                                <span class="caret"><i class="el-icon-caret-top" @click="ascending('startPrice')"></i> <i class="el-icon-caret-bottom" @click="drop('startPrice')"></i></span>
                            </li>
                            <li @click="active2($event,2)">项目周期
                                <span class="caret"><i class="el-icon-caret-top" @click="ascending('period')"></i> <i class="el-icon-caret-bottom" @click="drop('period')"></i></span>
                            </li>
                        </ul>
                   </div>
                  <div class="taskContent" v-for="(item ,index) in taskConten" :key="index" @click="taskHall($event,item.memberId)" >
                      <div style="display:none">{{item.id}}</div>
                      <!-- <div id="memberId">{{item.memberId}}</div> -->
                      <div class="Titleimg">
                           <div>
                              <img :src="'http://fds.interstrangers.com/'+item.icon" alt="">
                            </div>
                            <div class="leftTitle">
                                <div>
                                    <h3>{{item.name}}</h3>
                                </div>
                                <div class="leftType">
                                    <span v-if="item.industry!=null">{{item.industry}}</span>
                                    <span v-if="item.typeName!=null">{{item.typeName}}</span>
                                    <span v-if="item.period!=null">{{item.period}}个月</span>
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
                                  <!-- <svg class="icon priceIcon" aria-hidden="true">
                                    <use xlink:href="#iconzhuanxiangbiao"></use>
                                  </svg> -->
                                    <p><img src="../../assets/navOut5.png" alt=""> 开通会员，优先竞标</p>
                                </span>
                          </span>
                          <span>
                              <p>已竞标：{{item.count}} 人 | 发布于{{item.releaseTime |dateFormat('yyyy-MM-dd')}}</p>
                          </span>
                      </div>
                  </div>
              </div>
              <div class="contentRight">
                  <div class="demand" @click="visible">
                      <span class="iconfont">
                         &#xe634;
                      </span>
                      <span class="demandContent">
                          <h4>免费发布需求</h4>
                          <p>发布项目，任务等</p>
                      </span>
                  </div>
                  <!-- <div class="demand deman" @click="published">
                      <span class="iconfont">
                         &#xe6c7;
                      </span>
                      <span class="demandContent">
                          <h4>我的任务</h4>
                          <p>查看发布/接收的任务</p>
                      </span>
                  </div> -->
                  <div class="clinch">
                      <div class="clinchTitle">
                          <p>最新成交</p>
                          <span></span>
                      </div>
                      <div class="clinchContent" v-for="(item,index) in clinch" v-if="index < 3" :key="index" >
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
        <el-dialog title="发布任务" :visible.sync="centerDialogVisible" width="46%" center >
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
            pageSize:10,
            total:0,
            taskConten:[],
            id:'1',
            tindtype:[],
            clinch:[],
            centerDialogVisible:false,
            checkList:[],
            amount:[
                {
                    startPrice:1000,
                    endPrice:3000
                },
                {
                    startPrice:3000,
                    endPrice:5000
                },
                {
                    startPrice:5000,
                    endPrice:10000
                },
                {
                    startPrice:10000,
                    endPrice:20000
                },
                {
                    startPrice:20000,
                    endPrice:50000
                },
                {
                    startPrice:50000,
                    endPrice:100000
                },
                
            ],
            startPrice:"",
            endPrice:"",
            industry:"",
            typeName:"",
            memberId:"",
            token:""
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
        this.memberId = sessionStorage.getItem("memberId");
        this.token = sessionStorage.getItem("token");
    },
    methods:{
        // 页面list接口
        taskList(){
             let url = `${task.taskPage}?pageNo=${this.pageNo}`;
             let data = {
                startPrice:this.startPrice,
                endPrice:this.endPrice,
                industry:this.industry,
                typeName:this.typeName,
             }
             this.axios.get(url,{params:data}).then(res=>{
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
            if(event.currentTarget.innerHTML=="不限"){
                this.industry = "";
            }else{
                this.industry = event.currentTarget.innerHTML;
            }
            
            this.taskList();
        },
        amountList(event){
            let paren = event.currentTarget.parentElement.children;
            var a = event.currentTarget.innerHTML;
            let b = a.split("-");
            for(var i=0;i<paren.length;i++){
                paren[i].className = "";
            }
            if(a=="不限"){
                this.startPrice = '';
                this.endPrice = '';
            }else{
                this.startPrice = b[0];
                this.endPrice = b[1];
            }
            event.currentTarget.className = "active";
            this.taskList();
            
            
        },
        typelist(event){
            let paren = event.currentTarget.parentElement.children;
            for(var i=0;i<paren.length;i++){
                paren[i].className = "";
            }
            event.currentTarget.className = "active";
            if(event.currentTarget.innerHTML=="不限"){
                this.typeName = "";
            }else{
                this.typeName = event.currentTarget.innerHTML;
            }
            this.taskList();
        },
        active2(event){
             let paren = event.currentTarget.parentElement.children;
            for(var i=0;i<paren.length;i++){
                paren[i].className = "";
            }
            event.currentTarget.className = "default";
        },
        // activeTwo(){

        // },
        handleSizeChange(val) {
            this.pageSize = val;
            this.taskList()
        },
        handleCurrentChange(val) {
            this.pageNo = val;
            this.taskList()
        },
        taskHall(event,id){
            this.id =  event.currentTarget.firstElementChild.innerHTML;
            if(this.memberId == id){
                this.$router.push({name:'releaseDetails',params: {id: this.id}});
            }else{
                this.$router.push({name:'taskDetails',params: {id: this.id}});
            }
            
            
        },
        //发布任务
        visible(){
            // if(this.checkList.length==0){
            //     return this.$message.warning("请选择协议")
            // };
            // console.log(this.checkList)
            if(this.token==null){
                this.$message.warning("请先登录");
                setTimeout(()=>{
                    let routeData = this.$router.resolve({
                        name: "login"
                    });
                    window.open(routeData.href, "_blank");
                },2000)
                    
            }else{
                this.$router.push({ 
                    name: 'taskRelease', 
                })
            }
            // this.$router.push({
            //     name:"taskRelease"
            // });
            // this.centerDialogVisible = false;
        },
        // published(){
        //     this.$router.push({
        //         name:"published"
        //     });
        // },
        acta(property){
           return function (a,b){
               return a[property] - b[property];
           }
        },
        bcta(property){
           return function (a,b){
               return b[property] - a[property];
           }
        },
        ascending(item){
            console.log(item)
            if(item=="startPrice"){
                this.taskConten.sort(this.acta("startPrice"));
            }
            if(item=="period"){
                this.taskConten.sort(this.acta("period"));
            }
            if(item=="count"){
                this.taskConten.sort(this.acta("count"));
            }
            if(item=="releaseTime"){
                this.taskConten.sort(this.acta("releaseTime"));
            }
        },
        drop(item){
            if(item=="startPrice"){
                this.taskConten.sort(this.bcta("startPrice"));
            }
            if(item=="period"){
                this.taskConten.sort(this.bcta("period"));
            }
            if(item=="count"){
                this.taskConten.sort(this.bcta("count"));
            }
            if(item=="releaseTime"){
                this.taskConten.sort(this.bcta("releaseTime"));
            }
        },
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
        width: 1200px;
        background: #ffffff;
        padding: 20px;
        margin: 0 auto;
    }
    .contentType{
        display: flex;
        justify-content: flex-start;
        color: #333333;
        font-size: 14px;
        line-height: 30px;
        width: 940px;
        margin: 10px;
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
        color: #339999;
        background: #ECF7F5;
        border-radius:6px;
        text-align: center;
    }
    .contentSorting{
        font-size: 14px;
        width: 100%;
        margin: 0px auto;
        display: flex;
        color: #333333;
        height: 72px;
         align-items: center;
        /* border-top: 1px dashed  #999; */
        /* border-bottom: 1px solid #E8ECEE; */
        padding-left: 20px;
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
        display: flex;
        align-items: center;
    }
    .contentSorting ul li:nth-child(2){
        border-left: 2px solid #999;
        border-right: 2px solid #999
    }
    .content{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
    .contentRight{
        width: 240px;
        /* margin-top: 10px; */
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
    .deman{
        margin-top: 20px;
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
        padding: 20px 0;
        /* width:100%; */
        display: flex;
        justify-content: space-around;
        background: #ffffff;
        box-sizing: border-box;
        margin-bottom: 10px;
        border-radius:6px;
        height: 146px;
        border-top: 1px solid #F3F3F3;
       
    }
    .contentLeft{
        width: 950px;
        background: #ffffff;
        /* padding: 0 20px; */
        box-sizing: border-box;
    }
    .Titleimg{
        width: 65%;
        display: flex;
        justify-content: flex-start
    }
    .Titleimg img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .leftTitle{
        display: flex;
        /* flex-wrap:wrap; */
        flex-direction: column;
        justify-content: space-between;
        color: #999;
        margin-left: 16px;
        font-size: 12px;
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
        font-size: 12px;
        
    }
    .price{
        display: flex;
        /* flex-wrap:wrap; */
        flex-direction: column;
        justify-content: space-evenly;
        color: #999;
        align-items: flex-end;
        font-size: 12px;
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
        font-size: 18px;
        color: #FF9966;
    }
    .block{
        width: 700px;
        margin: 60px auto;
    }
    .clinch{
        width:240px;
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
        width: 240px;
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
.caret i{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 4px;
}
.taskBanner{
    width: 1200px;
    margin: 10px auto;
}
.el-pagination.is-background >>>.el-pager li:not(.disabled).active{
    background: #339999;
    border-radius: 50%;
}
.el-pagination.is-background >>> .el-pager li:hover{
    color: #339999;
}

/* .paging-pagination >>> .el-pagination__total {
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
} */
</style>

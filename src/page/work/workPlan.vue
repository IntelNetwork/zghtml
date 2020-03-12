<template>
    <div class="workPlan">
         <headerSelect />
       <el-container style="margin:0 auto;width:1200px; padding-top:30px" >
            <el-aside width="300px">
                <personalLeft />
            </el-aside>
            <el-main class="main" id="main">
                <div class="mianTop">
                    <div>
                        <div class="workPlan_time">
                            <template>
                                <el-time-select
                                    placeholder="起始时间"
                                    v-model="startTime"
                                    :picker-options="{
                                        start: '09:00',
                                        step: '00:30',
                                        end: '23:59'
                                    }">
                                </el-time-select>
                                <el-time-select
                                    placeholder="结束时间"
                                    v-model="endTime"
                                    :picker-options="{
                                        start: '09:00',
                                        step: '00:30',
                                        end: '23:59',
                                        minTime: startTime
                                    }">
                                </el-time-select>
                            </template>
                            <div class="priority">
                                <span>优先级：</span>
                                <span class="red round" @click="priority(5,$event)"></span>
                                <span class="yellow round" @click="priority(4,$event)"></span>
                                <span class="blue round" @click="priority(3,$event)"></span>
                                <span class="green round" @click="priority(2,$event)"></span>
                                <span class="purple round" @click="priority(1,$event)"></span>
                            </div>
                            
                        </div>
                        <div class="main_textarea">
                            <el-input
                                type="textarea"
                                :rows="2"
                                :autosize="{ minRows: 4,maxRows: 4}"
                                placeholder="请输入内容"
                                v-model="textarea"
                                >
                            </el-input>
                            <div class="add">
                                <i class="el-icon-plus"></i>
                                <el-button type="text" class="add_color">添加</el-button>
                            </div>
                        </div>
                    </div>
                    <div >
                        <template>
                            <el-table
                            :data="work"
                            height="200"
                            class="todayWork"
                            :row-style="{height:'36px'}"
                            :cell-style="{padding:'0px'}"
                            style="font-size: 14px">
                            <el-table-column
                                prop="time"
                                align = "center"
                                class="dateTime"
                                width="250">
                                <template slot-scope="scope">
                                    <span style="color:#339999">{{ scope.row.time }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="text"
                                 width="450"
                                >
                                <template slot-scope="scope">
                                    <span class="workCenter" >{{ scope.row.text }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column width="100" align = "center">
                                <template slot-scope="scope">
                                    <el-button type="text" class="scope"><i class="el-icon-delete"></i></el-button>
                                </template>
                            </el-table-column>
                            </el-table>
                        </template>
                        <div class="save">
                            <span>
                                <p><i class="iconshenqing"></i>
                                保存上传</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="mianContent">
                    <div class="mianContentTop">
                        <span class="title">
                            <h3>过往计划</h3>
                        </span>
                        <span class="searchInput">
                            <el-input
                                placeholder="请输入内容"
                                prefix-icon="el-icon-search"
                                v-model="input2"
                                class="search">
                            </el-input>
                        </span>
                        <span>
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    <p>{{picker}}</p><i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown"  >
                                    <el-dropdown-item v-for="(item,index) in day" :key="index" @click.native="dropdown($event)">{{item.picker}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </span>
                    </div>
                    <div class="mianContentForm">
                        <template>
                            <el-table
                            :data="weeks"
                            height="250"
                            class="todayWork"
                            :row-style="{height:'34px',fontSize: '14px',}"
                            :cell-style="{padding:'0px'}"
                            style="font-size: 14px">
                            <el-table-column
                                prop="text"
                                label="文件标题"
                                width="300">
                                <template slot-scope="scope">
                                    <i class="el-icon-document"></i>
                                    <span style="margin-left: 10px">{{ scope.row.text }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="date"
                                label="创建时间"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="widthData"
                                label="完成情况"
                                align="center"
                            >
                                <template slot-scope="scope">
                                    <!-- <i class="el-icon-document"></i> -->
                                    <span style="color:#339999">{{ scope.row.widthData }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="编写人"

                            >
                            </el-table-column>
                            <el-table-column 
                            label="操作"
                            width="50"
                            >
                                <template slot-scope="scope">
                                    <el-button type="text" class="scope icon-view" @click="view($event)"><i class="el-icon-view"></i></el-button>
                                </template>
                                
                            </el-table-column>
                            </el-table>
                        </template>
                    </div>
                </div>
            </el-main>
             <el-main class="mainDetails" id="mainDetails">
                 <div class="detailsTop">
                     <div class="mianContentTop">
                        <span class="title">
                            <h3>翁少锋的工作计划</h3>
                        </span>
                        <span class="searchInput">
                            <p><i class="el-icon-time"></i> 2019-11-30 </p>
                        </span>
                    </div>
                 </div>
                 <div class="detailsContent">
                     <div v-for="(item,index) in work" :key="index" class="priorityContent">
                         <div class="priorityTwo">
                             <span class="priorityroundTitle">
                                <i class="el-icon-time"></i>{{item.time}}
                             </span>
                             <span class="priorityround">
                                <p class="">优先级</p>
                                <div v-if="item.weight == 5" class="redTwo "></div>
                                <div v-if="item.weight == 4" class="yellowTwo"></div>
                                <div v-if="item.weight == 3" class="blueTwo"></div>
                                <div v-if="item.weight == 2" class="greenTwo"></div>
                                <div v-if="item.weight == 1" class="purpleTwo"></div>
                                
                             </span>
                         </div>
                         <p>{{item.text}}</p>
                     </div>
                 </div>
                 <div class="detailsBottom save">
                      <span>
                        <p><i class="iconshenqing"></i>下载到本地</p>
                     </span>
                    
                 </div>
             </el-main>
        </el-container>
        <fonter />
    </div>
</template>
<script>
import headerSelect from "@/components/headerSelect";
import personalLeft from "@/components/personalCenter/personalLeft";
import fonter from "@/components/fonter";
export default {
  data() {
    return {
        startTime: '',
        endTime: '',
        textarea:"",
        input2:"",
        picker:"近一月",
        work:[
            {
                text:"视频学习打卡，查看工作邮箱，微信查看工作邮箱",
                time:"今天09:00 - 10:00",
                name:"yellow",
                weight:"4",
            },
            {
                text:"智工网2.0>资料与账号>个人账户资料人账户资人账户资人账户资（非简历模块）账户资（非简历模块）",
                time:"今天10:00 - 11:00",
                name:"blue",
                weight:"3",
            },
            {
                text:"智工网2.0>资料与账号>个人账户资料人账户资人账户资人账户资（非简历模块）资料与账号>个人账户资料人账户资人",
                time:"今天11:00 - 12:00",
                name:"red",
                weight:"5",
            },
            {
                text:"智工网2.0>资料与账号>个人账户资料人账户资人账户资人账户资资料与账号>",
                time:"今天12:00 - 14:00",
                name:"green",
                weight:"2",
            },
            {
                text:"智工网2.0>资料与账号>个人账户资料人账户资人账户资人",
                time:"今天14:00 - 16:00",
                name:"purple",
                weight:"1",
            },
            
            
        ],
        weeks:[
            {
                text:"翁少锋的工作计划",
                date:"2019-11-25",
                widthData:"91.5",
                name:"翁少峰"
            },
            {
                text:"翁少锋的工作计划",
                date:"2019-11-25",
                widthData:"91.8",
                name:"翁少峰"
            },
            {
                text:"翁少锋的工作计划",
                date:"2019-11-25",
                widthData:"91.5",
                name:"翁少峰"
            },
            {
                text:"翁少锋的工作计划",
                date:"2019-11-25",
                widthData:"88.1",
                name:"翁少峰"
            },
            {
                text:"翁少锋的工作计划",
                date:"2019-11-25",
                widthData:"91.5",
                name:"翁少峰"
            },
            {
                text:"翁少锋的工作计划",
                date:"2019-11-25",
                widthData:"81",
                name:"翁少峰"
            },
            {
                text:"翁少锋的工作计划",
                date:"2019-11-25",
                widthData:"76",
                name:"翁少峰"
            },
        ],
        month:[
           
        ],
        day:[
            {
                picker:"近一周"
            },
            {
                picker:"近一月"
            },
            {
                picker:"近半年"
            }
        ],
         form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
        }
    };
  },
  components:{
     headerSelect,
     personalLeft,
     fonter
  },
  mounted() {
        
  },
  created(){
      
  },
  methods: {
      priority(i,event){
          if(i==5){
              event.currentTarget.style.background = "#CC3333";
          }
        
      },
      dropdown(event){
          let ebebeb =event.target.innerHTML.substr("7")
          console.log(ebebeb)
          this.picker = ebebeb
      },
      view(event){
          event.currentTarget.style.color = "#339999"
          document.getElementById("main").style.display = "none"
          document.getElementById("mainDetails").style.display = "block"
          console.log(document.getElementById("mainDetails"))
         
          
        //   if(event.currentTarget.style.color = "#339999"){
              
        //   }
        //   if(event.currentTarget.style.color = "#666"){
              
        //   }
      }
  }
};
</script>
<style scoped>
    .main.el-main{
        /* margin-top: 10px; */
        padding: 0;
        display: block;
    }
    .mainDetails{
        background: #ffffff;
        box-shadow: 8px 5px 20px -10px #999;
        display: none
    }
    .mianTop{
        background: #ffffff;
        border-radius: 6px;
        box-shadow: 8px 5px 20px -10px #999;
    }
    .workPlan_time{
        display: flex;
        /* height: 40px; */
        margin:0 20px;
        padding-top: 10px;
    }
    .priority{
        font-size: 14px;
        margin-left: 50px;
        color: #333;
        display: flex;
        line-height: 40px;
        align-items: baseline;
        /* justify-content: center; */
    }
    .round{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin:  0 6px;
        /* background:#fff */
    }
    .red{
        border: 2px solid #CC3333;
    }
    .yellow{
        border:2px solid #FFBE05
    }
    .blue{
        border:2px solid #0082FF
    }
    .green{
        border:2px solid #339999
    }
    .purple{
        border:2px solid #A6209E
    }
    .main_textarea{
        margin: 10px 20px;
    }
    .add{
        width: 100%;
        color: #339999;
        text-align: right;
        font-weight:400;
    }
    .add_color{
        color: #339999;
    }
    .scope{
        color: #999999;
    }
    .el-table__body tr,
    .el-table__body td {
        height: 40px !important;
        padding: 0px !important;
    }
    .save{
        width: 100%;
        height: 40px;
        border: 1px solid #ebebeb;
        border-left: 10px solid #339999;
        border-radius: 6px;
        margin-top: 10px;
    }
    .save p{
        width: 100%;
        color: #339999;
        text-align:center;
        line-height: 38px;
        font-weight:400;
        
    }
    .workCenter{
        width: 350px;
        overflow: hidden;/*超出部分隐藏*/
        white-space: nowrap;/*不换行*/
        text-overflow:ellipsis;/*超出部分文字以...显示*/
    }
    .detailsBottom{
        margin-top: 0px;
    }
    .mianContent{
        background: #fff;
        margin-top: 30px;
        border-radius: 6px;
    }
    .mianContentTop{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        border-bottom: 1px solid #ebebeb;
        height: 50px;
    }
    .title{
        height: 100%;
        line-height: 50px;
        border-bottom: 2px solid #339999;
    }
    .title>h3{
        color: #404447;
        font-size: 14px;
        font-weight: 400
    }
    .searchInput>p{
        font-size: 14px;
        color: #666666
    }
    .mianContentTop>>>.searchInput .el-input__inner{
        border: none;
    }
    .el-dropdown-link{
        display: flex;
    }
    .el-dropdown-link p{
        width: 50px;
        text-align: center;
    }
    .el-table td{
        font-size: 14px !important;
        color: #666666;

    }
    .el-table{
        color: #666;
    }
    .dateTime{
        color: #339999 !important;
    }
    .mianContentForm{
        padding:  30px;
    }

    .priorityContent{
        height: 100px;
        border-bottom: 1px solid #ebebeb;
        padding: 20px 0;
        line-height: 28px;
        margin: 0 30px;
        font-size: 14px;
        color: #666;
    }
    .priorityroundTitle{
        color: #333333;
        font-size: 16px;
        font-weight:bold;
    }
    .priorityroundTitle i{
        margin-right: 8px;
    }
    .priorityTwo{
        display: flex;
    }
    .priorityround{
        width: 60px;
        margin-left: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .redTwo{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #CC3333;
    }
    .yellowTwo{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #FFBE05
    }
    .blueTwo{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #0082FF
    }
    .greenTwo{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #339999
    }
    .purpleTwo{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #A6209E
    }
</style>

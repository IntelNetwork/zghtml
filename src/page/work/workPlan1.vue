<template>
    <div class="workPlan">
         <headerSelect />
       <el-container style="margin:0 auto;width:1200px; padding-top:70px" >
            <el-aside width="300px">
                <personalLeft />
            </el-aside>
            <el-main class="main">
                <div class="workPlan_top">
                    <span>
                        <i class="el-icon-search"></i>
                        <el-input v-model="input" placeholder="直接搜索名称看看" class="input"></el-input>
                    </span>
                    <span>
                        <p>按更新时间排序 <i class="el-icon-arrow-down"></i></p>
                    </span>
                </div>
                <div>
                    <el-row :gutter="24">
                        <el-col :span="8">
                            <div class="grid-content">
                                <h3>今日待办（{{this.work.length}}）</h3>
                                <div class="bg-purple">
                                    <div class=" plan" v-for="(item,index) in work" :key="index">
                                        <div>
                                            <p>{{item.text}}</p>
                                            <p>{{item.time}}</p>
                                        </div>
                                        <div class="outline">
                                            <!-- <span :class="item.name"></span> -->
                                            <span v-if="item.weight == 5" class="red"></span>
                                            <span v-if="item.weight == 4" class="yellow"></span>
                                            <span v-if="item.weight == 3" class="blue"></span>
                                            <span v-if="item.weight == 2" class="green"></span>
                                            <span v-if="item.weight == 1" class="purple"></span>
                                            <span>
                                                <i class="el-icon-edit-outline edit"></i>
                                                <i class="el-icon-delete"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="addition" @click="centerDialogVisible = true">
                                        <p><i class="el-icon-plus"></i> 添加</p>
                                    </div>
                                </div>
                                
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple-light">
                                <h3>周计划 （{{this.weeks.length}}）</h3>
                                <div class="bg-purple">
                                    <div class=" plan" v-for="(item,index) in weeks" :key="index">
                                        <div>
                                            <p>{{item.text}}</p>
                                            <p>{{item.date}}</p>
                                        </div>
                                        <div class="outline">
                                            <!-- <span :class="item.name"></span> -->
                                            <span class="gray">
                                                <p class="progress" :style="{width: item.widthData}"></p>
                                            </span>
                                            <span class="icon">
                                                <i class="el-icon-edit-outline edit"></i>
                                                <i class="el-icon-delete"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple-light">
                                <h3>月计划 （{{this.month.length}}）</h3>
                                <div class="bg-purple">
                                    <div class=" plan" v-for="(item,index) in month" :key="index">
                                        <div>
                                            <p>{{item.text}}</p>
                                            <p>{{item.date}}</p>
                                        </div>
                                        <div class="outline">
                                            <!-- <span :class="item.name"></span> -->
                                            <span class="gray">
                                                <p class="progress" :style="{width: item.widthData}"></p>
                                            </span>
                                            <span class="icon">
                                                <i class="el-icon-edit-outline edit"></i>
                                                <i class="el-icon-delete"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <!-- 添加弹框 -->
                <div>
                    <el-dialog
                        
                        :visible.sync="centerDialogVisible"
                        width="30%"
                        center>
                        <h2 slot="title" class="title">每日计划添加</h2>
                        <div>
                            <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="任务标题：">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <!-- <el-form-item label="任务规划时间："> -->
                                    <!-- <el-time-select
                                        placeholder="起始时间"
                                        v-model="startTime"
                                        :picker-options="{
                                        start: '08:30',
                                        step: '00:15',
                                        end: '18:30'
                                        }">
                                    </el-time-select>
                                    <el-time-select
                                        placeholder="结束时间"
                                        v-model="endTime"
                                        :picker-options="{
                                        start: '08:30',
                                        step: '00:15',
                                        end: '18:30',
                                        minTime: startTime
                                        }">
                                    </el-time-select>
                                </el-form-item> -->
                            </el-form>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <!-- <el-button @click="centerDialogVisible = false">添 加</el-button> -->
                        </span>
                    </el-dialog>
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
        input:"",
        work:[
            {
                text:"智工网个人中心设计",
                time:"09:00-10:00",
                name:"yellow",
                weight:"4",
            },
            {
                text:"智工网个人中心设计",
                time:"10:00-11:00",
                name:"blue",
                weight:"3",
            },
            {
                text:"智工网个人中心设计",
                time:"11:00-12:00",
                name:"red",
                weight:"5",
            },
            {
                text:"智工网个人中心设计",
                time:"11:00-12:00",
                name:"green",
                weight:"2",
            },
            {
                text:"智工网个人中心设计",
                time:"11:00-12:00",
                name:"purple",
                weight:"1",
            },
            
            
        ],
        weeks:[
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"95%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"70%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"95%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"80%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"95%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"20%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"50%",
            },
        ],
        month:[
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"80%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"50%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"95%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"45%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"20%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"60%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"80%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"95%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"70%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"95%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"65%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"45%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"95%",
            },
            {
                text:"智工网个人中心设计",
                date:"2019-11-25",
                widthData:"80%",
            },
        ],
        centerDialogVisible:false,
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
    //   this.widthData = "80%"
  },
  methods: {
      addition(){

      }
  }
};
</script>
<style scoped>
    .main{
        margin-top: 10px;
    }
    .workPlan_top{
        height: 50px;
        display: flex;
        justify-content: space-between;
        background: #ffffff;
        width: 100%;
        line-height: 50px;
        padding: 0 30px;
        font-size: 14px;
        color: #666666;
        border-radius: 6px;
    }
    .workPlan_top span{
        display: flex;
    }
    .workPlan_top span>i{
        margin-top: 20px;
    }
    .input>>>.el-input__inner{
        border: none;
        padding: 0 2px;
    }
    .grid-content{
        margin-top: 20px;
        height: calc(100vh - 214px)
        
    }
    .grid-content h3{
        color: #999999;
        font-size: 14px;
        padding-left: 26px;
        height: 20px;
        /* position: fixed */
        /* background: #9fa7af */
    }
    .bg-purple{
        /* border-right: 4px solid #dddddd; */
        height: 90%;
        overflow-y: auto;
        margin-top: 10px;
    }
    .bg-purple::-webkit-scrollbar{
        width:4px;
        /* height:10px; */
        background: #CCCCCC;
    /**/
    }
    .bg-purple::-webkit-scrollbar-track{
        background: rgb(239, 239, 239);
        border-radius:2px;
    }
    .bg-purple::-webkit-scrollbar-thumb{
        background: #bfbfbf;
        border-radius:10px;
    }
    .bg-purple::-webkit-scrollbar-thumb:hover{
        background: #6666;
    }
    .bg-purple::-webkit-scrollbar-corner{
        background: #179a16;
    }
    .plan{
        width: 98%;
        background: #ffffff;
        height: 60px;
        font-size: 14px;
        padding: 15px;
        border-radius:6px;
        margin-bottom: 10px;
        
    }
    .plan >div{
        display: flex;
        justify-content: space-between
    }
    .plan .outline{
        margin-top: 10px;
    }
    .plan .outline .yellow{
        width: 150px;
        height: 6px;
        background: #FF6600;
        border-radius:3px;
        margin-top: 4px;
    }
    .blue{
        width: 150px;
        height: 6px;
        background: #008DFF;
        border-radius:3px;
        margin-top: 4px;
    }
    .red{
        background: #cc3333;
        width: 150px;
        height: 6px;
        border-radius:3px;
        margin-top: 4px;
    }
    .purple{
        background: #9100FF;
        width: 150px;
        height: 6px;
        border-radius:3px;
        margin-top: 4px;
    }
    .green{
        background: #339999;
        width: 150px;
        height: 6px;
        border-radius:3px;
        margin-top: 4px;
    }
    .edit{
        color: #339999;
        font-weight: 400;
        margin-right: 4px;
    }
    .addition{
        width: 95%;
        color: #339999;
        text-align: center;
        height: 40px;
        line-height: 40px;
        background: #ffffff;
        /* margin-top: 10px; */
        border-radius:6px;
        border-left: 10px solid #339999;
        font-weight:bold;
        font-size: 16px;
        cursor: pointer;
    }
    .gray{
        background: #CCCCCC;
        width: 150px;
        height: 6px;
        border-radius:3px;
        margin-top: 4px;
    }
    .progress{
        background: #339999;
        /* width: 150px; */
        height: 100%;
        border-radius:3px;
    }
    .icon{
        display: flex;
    }
    .title{
        color: #333;
    }
    .el-dialog__wrapper >>>.el-dialog{
        border-radius: 6px;
    }
    .el-dialog__wrapper >>>.el-dialog .el-dialog__header{
        border-bottom: 1px solid #CAC9CA;
    }
</style>

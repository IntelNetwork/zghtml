<template>
    <div class="withdrawal">
         <headerSelect />
       <el-container style="margin:0 auto;width:1200px;padding-top:30px;">
            <el-aside width="300px">
                <personalLeft />
            </el-aside>
            <el-main>
                <div class="mianContentTop">
                    <span class="title">
                        <h3>过往计划</h3>
                    </span>
                    <span class="searchInput">
                        <el-button type="text" @click="audit($event)" v-for="(item,index) in pickerList" :key="index">{{item.picker}}</el-button>
                        <!-- <el-button type="text" @click="audit($event)">已审核</el-button>
                        <el-button type="text" @click="audit($event)">未通过</el-button> -->
                    </span>
                    <span>
                        <el-dropdown trigger="click">
                            <span class="el-dropdown-link">
                                <p>{{picker}} <i class="el-icon-arrow-down el-icon--right"></i></p>
                            </span>
                            <el-dropdown-menu slot="dropdown"  >
                                <el-dropdown-item v-for="(item,index) in pickerList" :key="index" @click.native="dropdown($event)">{{item.picker}}</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </span>
                </div>
                <div class="auditDetails">
                    <div class="auditDetailsContent" v-for="(item,index) in auditDetails" :key="index">
                        <div >
                            <h3>{{item.title}}</h3>
                            <span class="state">
                                <p><i class="el-icon-info"></i> 申请人：{{item.name}}</p>
                                <p><i class="el-icon-time"></i> {{item.time}}</p>
                            </span>
                            
                        </div>
                        <div class="lookState">
                            <p>状态</p>
                            <el-button type="text" v-if="item.status=='3'">查看原因</el-button>
                            <el-button type="text" v-if="item.status=='1'">待审批...</el-button>
                        </div>
                    </div>
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
       picker:"待审核",
       pickerList:[
           {
                picker:"待审核",
                status:"1"
            },
            {
                picker:"已审批",
                status:"2"
            },
            {
                picker:"未通过",
                status:"3"
            }
       ],
       activeName:"first",
       auditDetails:[
           {
               title:"2019上海市高校人才落户计划",
               name:"翁少锋",
               time:"2019-11-25",
               status:"1"
           },
           {
               title:"创客入驻申请",
               name:"翁少锋",
               time:"2019-11-25",
               status:"1"
           },
           {
               title:"2019上海市高校人才落户计划",
               name:"翁少锋",
               time:"2019-11-25",
               status:"3"
           },
           {
               title:"2019上海市高校人才落户计划",
               name:"翁少锋",
               time:"2019-11-25",
               status:"1"
           },
           {
               title:"创客入驻申请",
               name:"翁少锋",
               time:"2019-11-25",
               status:"3"
           },
           
       ]
    };
  },
  components:{
     headerSelect,
     personalLeft,
     fonter
  },
  mounted() {
   
  },
  methods: {
      dropdown(event){
        //   剪切字符串
          this.picker =event.target.innerHTML.substr("7")
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      audit(event){
          for(var i = 0;i<event.currentTarget.parentElement.children.length;i++){
               event.currentTarget.parentElement.children[i].style.color = "#666";
               event.currentTarget.style.color = "#339999";
          }
         
          
      }
  }
};
</script>
<style scoped>
.withdrawal{
    margin: 0 auto;
}
.el-main{
    padding: 0;
    background: #ffffff;
}
.mianContentTop{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        border-bottom: 1px solid #ebebeb;
        height: 50px;
}
.searchInput>>>.el-button--text{
    color: #666666
}
.auditDetails{
    margin: 30px;
    
}
.auditDetailsContent{
    padding: 12px 30px;
    /* background: #ffffff; */
    border: 1px solid #ebebeb;
    height: 70px;
    color: #999999;
    font-size: 12px;
    /* line-height: 20px; */
    display: flex;
    justify-content: space-between;
    box-shadow: 5px 5px 10px -4px #ebebeb;
    margin-bottom: 10px;

}
.auditDetailsContent h3{
    color: #666666;
    font-size: 16px;
    font-weight:400;
}
.auditDetailsContent .state{
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin-top: 16px
}
.lookState{
    text-align: center
}
.lookState>>>.el-button--text{
    color: #339999;
}
</style>

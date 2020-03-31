<template>
  <div class="members radius">
     <div class="membersTop">
         <div class="membersImg">
             <img src="../../assets/top.jpg" alt="">
             <h3>Mac大魔王 <img src="../../assets/navOut5.png" alt=""></h3>
             <p>我会成为更好的人我会成为更好的人</p>
         </div>
         <div class="memberIcon">
             <span class="active" @click="active($event)"><i class="el-icon-mobile-phone"></i></span>
             <span class="" @click="active($event)"><i class="el-icon-s-custom"></i></span>
             <span class="" @click="active($event)"><i class="el-icon-document"></i></span>
         </div>
     </div>
     <div class="memberNav">
         <div class="memberArrow">
            <div class="memberaccount">
                 <h3>我的账户</h3>
                 <i class="el-icon-arrow-right"></i>
            </div>
         </div>
         <div class="memberArrow task">
            <div class="memberaccount">
                 <h3>我的任务中心</h3>
                 <i class="el-icon-arrow-right"></i>
            </div>
            <p>我服务的</p>
            <p>我发布的</p>
         </div>
         <div class="memberArrow task">
            <div class="memberaccount">
                 <h3>我的offer</h3>
                 <i class="el-icon-arrow-right"></i>
            </div>
             <p>我投递的</p>
             <el-badge :value="value" class="item">
                 <p>收到回复的</p>
             </el-badge>
           
         </div>
         <div class="memberArrow">
            <div class="memberaccount">
                 <h3>我的数据资产价值</h3>
                 <i class="el-icon-arrow-right"></i>
            </div>
         </div>
         <div class="memberArrow">
            <div class="memberaccount">
                 <h3>职业发展测评</h3>
                 <i class="el-icon-arrow-right"></i>
            </div>
         </div>
         <div class="memberArrow">
            <div class="memberaccount">
                 <h3>我的人脉</h3>
                 <i class="el-icon-arrow-right"></i>
            </div>
         </div>
         <div class="memberArrow">
            <div class="memberaccount">
                 <h3>我的简历</h3>
                 <i class="el-icon-arrow-right"></i>
            </div>
         </div>
         <div class="memberArrow">
            <div class="memberaccount">
                 <h3>我的团队</h3>
                 <i class="el-icon-arrow-right"></i>
            </div>
         </div>
         <div class="memberArrow">
            <div class="memberaccount">
                 <h3>我的信息</h3>
                 <i class="el-icon-arrow-right"></i>
            </div>
         </div>
     </div>
  </div>
</template>

<script>

export default {
  data(){
      return{
           value:"2"
      }
  },

  created(){
     
  },
  methods:{
     active(event){
         let paren = event.currentTarget.parentElement.children;
            for(var i=0;i<paren.length;i++){
                paren[i].className = "";
            }
            event.currentTarget.className = "active";
            // if(event.currentTarget.innerHTML=="不限"){
            //     this.industry = "";
            // }else{
            //     this.industry = event.currentTarget.innerHTML;
            // }
     }
  }
}
</script>
<style scoped>
    .members{
        width: 180px;
        background: #ffffff;
        color: #999999;
        font-size: 14px;
    }
    .members h3{
        color: #333333;
    }
    i{
        color: #CCCCCC;
    }
    .membersImg{
        padding: 20px 30px;
        text-align: center;
        line-height: 22px;
    }
    .membersImg>img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .membersImg h3{
        font-size: 16px;
    }
    .membersImg p{
        font-size: 12px;
        width: 106px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0 auto;
    }
    .memberIcon{
        font-size: 20px;
        margin: 0 auto;
        text-align: center;
    }
    .memberIcon span{
        width: 28px;
        height: 28px;
        margin: 0 10px;
        display: inline-block;
        border: 1px solid #999999;
        border-radius: 50%;
        line-height: 26px;
        cursor: pointer;
    }
    .memberIcon span.active,.memberIcon span.active i{
        color: #339999;
        border-color: #339999;
    }
    .memberNav{
        margin-top: 10px;
        padding: 0 10px
    }
    .memberArrow{
        padding: 0 10px 0 20px;
        border-top: 1px solid #F3F3F3;
    }
    .memberArrow:hover{
        background: rgba(0,0,0,0.1);
        box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.1);
    }
    .memberaccount{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 54px;
    }
    /* .memberArrow i{
        line-height: 54px;
    } */
    .task{
        height: 92px;
        line-height: 20px;
    }
    .task .memberaccount{
        height: 40px;
    }
    .task p{
        cursor: pointer;
    }
    .memberNav i{
        font-size: 16px;
        cursor: pointer;
    }
    .el-badge>>>.el-badge__content{
        background: #339999;
        padding: 0 4px;
        line-height: 16px;
    }
    .el-badge>>>.el-badge__content.is-fixed{
        top: 10px;
        right: -10px;
    }

</style>

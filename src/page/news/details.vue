<template>
  <div id="details">

     <div class="details">
         
         <div style="min-height:940px;">
             <div style="position: relative;background: #ffffff; height:auto;">
                 <el-tabs tab-position="left" type="card" class="details_content">
                <el-tab-pane>
                    <div slot="label" class="details_left">
                        <p>2019-07-29 12:01:45</p>
                        <h3>超六成工业行业上半年利润增长</h3>
                    </div>
                    <div class="content_title">
                        <h2 label="label">超六成工业行业上半年利润增长</h2>
                        <span>
                            <p>作者：管理员</p>
                            <p>2019-11-11</p>
                        </span>
                        <div class="content_img">
                            <!-- <img src="../../assets/11.png" alt=""> -->
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane>
                    <div slot="label" class="details_left">
                        <p>2019-07-29 12:01:45</p>
                        <h3>预警：化纤市场正式进入资本竞争时代！</h3>
                    </div>
                    <div class="content_title">
                        <h2 label="label">预警：化纤市场正式进入资本竞争时代！ 近十年PTA现货贸易市场最大违约案追踪报道</h2>
                        <span>
                            <p>作者：管理员</p>
                            <p>2019-11-11</p>
                        </span>
                        <div class="container_text" id="content">
                            <p style="line-height: 1.75em;">尊敬的广大用户：</p>
                            <p><br></p>
                            <p style="line-height: 1.75em;">&nbsp; &nbsp; &nbsp; &nbsp;重庆钢铁股份有限公司热轧板卷产能预售近期将上线欧冶平台，订货周期：每月20日-27日，交货期：次月15日，品种：Q235B Q355B，欢迎有意向客户进入产能预售专区选购。</p>
                            <p style="line-height: 1.75em;">欧冶联系人：柏经理13996113217</p>
                            <p><br></p>
                            <p><br></p>
                            <p style="line-height: 1.75em;">欧冶云商数据运营中心</p>
                            <p style="line-height: 1.75em;">&nbsp; &nbsp; &nbsp; 2019-7-18</p>
                            <p><br></p>
                        </div>
                        <!-- <div class="content_img">
                            <img src="../../assets/11.png" alt="">
                        </div> -->
                    </div>
                </el-tab-pane>
                <el-tab-pane>
                    <div slot="label" class="details_left">
                        <p>2019-07-29 12:01:45</p>
                        <h3>近十年PTA现货贸易市场最大违约案追踪报道</h3>
                    </div>
                    <div class="content_title">
                        <h2 label="label">近十年PTA现货贸易市场最大违约案追踪报道</h2>
                        <span>
                            <p>作者：管理员</p>
                            <p>2019-11-11</p>
                        </span>
                        <div class="container_text" id="content">
                            <p style="line-height: 1.75em;">尊敬的广大用户：</p>
                            <p><br></p>
                            <p style="line-height: 1.75em;">&nbsp; &nbsp; &nbsp; &nbsp;重庆钢铁股份有限公司热轧板卷产能预售近期将上线欧冶平台，订货周期：每月20日-27日，交货期：次月15日，品种：Q235B Q355B，欢迎有意向客户进入产能预售专区选购。</p>
                            <p style="line-height: 1.75em;">欧冶联系人：柏经理13996113217</p>
                            <p><br></p>
                            <p><br></p>
                            <p style="line-height: 1.75em;">欧冶云商数据运营中心</p>
                            <p style="line-height: 1.75em;">&nbsp; &nbsp; &nbsp; 2019-7-18</p>
                            <p><br></p>
                        </div>
                    </div>
                </el-tab-pane>
               
            </el-tabs>
            <div class="more">
                <p>点击查看更多>></p>
            </div>
             </div>
         </div>
         <div style="margin:10px 0;text-align: center;">
            <!-- <img src="../../assets/new.png" alt="" style="width:1200px;"> -->
        </div>
     </div>
  </div>
</template>
<script scode>
export default {
 data(){
     return{
        // tabPosition
     }
  },
  components: {
    },
  methods:{
   
  
 }
}
</script>

<style scoped>
    .details{
        width: 1200px;
        margin: 0 auto;
    }
    .el-tabs>>>.el-tabs__header{
        min-height: 600px;
        margin: 0 auto;
        border: none;
    }
    .el-tabs>>>.el-tabs__header .el-tabs__item{
       height: 150px;
       width: 340px;
       background: #ffffff;
       padding: 0 45px;
       box-sizing:border-box;
       border: none;
       border-left:5px solid transparent;  
       
       
    }
    .el-tabs--left.el-tabs--card >>>.el-tabs__item.is-left:first-child{
        border-right:none; 
    }
    .details_content{
        min-height: 940px;
        
    }
    .content_img img{
        width: 680px;
        height: 540px;
        margin-top: 20px;
    }
    .content_title h2{
        font-size: 28px;
    }
    .content_title span{
        display: flex;
        font-size: 12px;
        color: #989898;
        margin-top: 50px;
        line-height: 18px;

    }
    .content_title span p{
        margin: 0 10px;
    }
    .el-tabs>>>.el-tabs__header .el-tabs__item:hover{
        color: #007dbe;
        border-left: 5px solid #007dbe;
        border-right: #ffffff;
        z-index: 200;
        box-shadow: 0px 0px 8px #ccc;
        /* box-sizing:border-box;  */
                                       
    }
    .el-tabs>>>.el-tabs__header .el-tabs__item.is-active {
        /* color: #007dbe */
        color: #333;
        box-sizing:border-box;
        border: none;
        border-left:5px solid transparent; 
        
        
    }
    /* .el-tabs--card>.el-tabs__header .el-tabs__nav{
        border: none;
    }
    .el-tabs>>>.el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll>>>.el-tabs--left.el-tabs--card .el-tabs__nav{
        border-bottom: none;
    } */
    .el-tabs>>>.el-tabs__header .el-tabs__item.is-active:hover{
        color: #007dbe;
        border-left: 5px solid #007dbe;
    }
    .details_content>>>.el-tabs__content{
        min-height: 940px;
        padding: 50px 90px;
        background: #ffffff;
        /* border:1px solid #9999; */
        z-index: 10;
        box-shadow: 1px 1px 5px #999;
        /* margin: 0 auto;
        text-align: center; */
    }
    .details_left{
        white-space: normal;
        font-size: 18px;
    }
    .details_left h3{
        font-size: 18px;
    }
    .container_text{
        font-size: 14px;
        color: #333;
    }
    .more{
        position: absolute;
        bottom: 0;
        left: 0;
        background: #ffffff;
        width: 330px;
        text-align: center;
    }
</style>

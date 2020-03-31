<template>
  <div class="taskDetails">
    <headerSelect />
    <div class="taskDetailsContent">
        <div class="detailsTitle">
            <div class="title">
            <span>任务大厅</span>
            <span class="fontColor">></span>
            <span class="fontColor">  任务中心     >    任务详情     >    任务进程</span>
            </div>
        </div>
        <div class="processContent">
            <div class="processTitle">
                <h3>任务进程管理</h3>
            </div>
            <div class="phase">
                
                <div class="phaseImg">
                     <el-steps direction="vertical" :active="active">
                        <el-step  v-for="(item,index) in phase" :key="index">
                            <div slot="description">
                                <el-form ref="form" :model="form" label-width="100px" class="demo-form-inline" >
                                    <el-form-item label="任务名称：">
                                        <el-input v-model="form.name" placeholder="任务名称"></el-input>
                                    </el-form-item>
                                    <!-- <el-form-item label="活动区域">
                                        <el-select v-model="formInline.region" placeholder="活动区域">
                                           <el-option
                                             v-for="item in options"
                                             :key="item.id"
                                             :label="item.name"
                                             :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>                      -->
                                </el-form>
                            </div>
                        </el-step>
                        <!-- <el-step title="步骤 2"></el-step>
                        <el-step title="步骤 3"></el-step> -->
                    </el-steps>
                </div>
            </div>
        </div>
     


      <!-- 百度编辑器 -->
      <!-- <div id="editor" type="text/plain" style="width:1024px;height:500px;"></div>
      <button @click="submits">保存</button> 
      <button @click="xieru">写入</button>  -->
    </div>
    <fonter />
  </div>
</template>

<script>
import headerSelect from "@/components/headerSelect";
import fonter from "@/components/fonter";


// import '../../../static/utf8-jsp/ueditor.config' 
// import '../../../static/utf8-jsp/ueditor.all'; 
// import '../../../static/utf8-jsp/lang/zh-cn/zh-cn'; 
export default {
  data() {
    return {
        // ue: '', 
        // uedata: [], 
        // xierudata: [] 
        form:{
            name:""
        },
        phase:[
            {},
            {},
            {},
            {},
        ],
        active: 1,
        options:[
            {id: 1, name:"进行中"},
        ]
    };
  },
  components: {
    headerSelect,
    fonter,
    // UE,
  },
  created() {
     
  },
  mounted(){
    // this.ue = UE.getEditor('editor',{ 
    //     BaseUrl: '', 
    //     UEDITOR_HOME_URL: 'static/utf8-jsp/', 
    // // toolbars:[] 
    // }); 
  },
  methods: {
    // submits(){ 
    //     this.uedata.push(UE.getEditor('editor').getContent()); 
    //     console.log(this.uedata.join("\n")); 
    // }, 
    // xieru(){ 
    //     UE.getEditor('editor').setContent('欢迎使用ueditor'); 
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
.el-input{
    width: 150px;
}
.processContent{
    width: 1000px;
    margin: 20px auto;
    padding: 0 30px;
    background: #ffffff;
}
/* 进行中 */
.el-steps--vertical>>>.el-step__head.is-process{
    color: #ffffff;
    /* border-color: #FDAF18; */
    border: none;
    /* background: ; */
}
.el-steps--vertical>>>.el-step__head.is-process .el-step__icon.is-text{
    background: linear-gradient(149deg,rgba(247,200,108,1) 0%,rgba(252,237,208,1) 100%);
    width: 30px;
    height: 30px;
}
.el-steps--vertical>>>.el-step__head.is-process .el-step__line{
     background: linear-gradient(149deg,rgba(247,200,108,1) 0%,rgba(252,237,208,1) 100%);
}

/* 已完成 */
.el-steps--vertical>>>.el-step__head.is-finish{
    color: #ffffff;
    /* border-color: #FDAF18; */
    border: none;
    /* background: ; */
}
.el-steps--vertical>>>.el-step__head.is-finish .el-step__icon.is-text{
    background: linear-gradient(149deg,rgba(62,203,203,1) 0%,rgba(187,239,239,1) 100%);
    width: 30px;
    height: 30px;
}
.el-steps--vertical>>>.el-step__head.is-finish .el-step__line{
     background: linear-gradient(149deg,rgba(62,203,203,1) 0%,rgba(187,239,239,1) 100%);
}
/* 未开始 */
.el-steps--vertical>>>.el-step__head.is-wait{
    color: #ffffff;
    border-color: #ffffff;
    /* border: none; */
    /* background: ; */
}
.el-steps--vertical>>>.el-step__head.is-wait .el-step__icon.is-text{
    background: linear-gradient(149deg,rgba(191,191,191,1) 0%,rgba(222,222,222,1) 100%);
    width: 30px;
    height: 30px;
    
}
.el-steps--vertical>>>.el-step__head.is-wait .el-step__line{
     background: linear-gradient(149deg,rgba(191,191,191,1) 0%,rgba(222,222,222,1) 100%);
}
 .el-step.is-vertical >>>.el-step__line{
    left: 14px;
}


.processTitle{
    text-align: center;
    height: 60px;
    border-bottom: 1px solid #EAEAEA;
    color: #333333;
    line-height: 60px;
}
.phase{
    padding: 24px 170px;
}
</style>
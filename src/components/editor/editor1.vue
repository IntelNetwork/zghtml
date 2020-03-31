<template>
  <div class="padding10">
    <div>
        <vue-ueditor-wrap v-model="content" :config="myConfig"></vue-ueditor-wrap>
        <el-button @click="btn">按钮</el-button>
    </div>
  </div>
</template>
<script>

import VueUeditorWrap from "vue-ueditor-wrap";
export default {
  data () {
    return {
      pageBtn: [],
      msg:'',
      myConfig: {
        UEDITOR_HOME_URL: "/UEditor/",
        serverUrl: this.baseURL+`/taskcenter/upload/upload`,
        zIndex:3000,
        initialFrameHeight:300,
        imageActionName:"uploadImg",
        imageFieldName:"file",
        imageAllowFiles:[".png", ".jpg", ".jpeg", ".gif", ".bmp"],
        headers:{
          "X-Access-Token": sessionStorage.getItem("token")
        }
      },
      content:""
    }
  },
  components: {
    VueUeditorWrap
  },
  computed: {
   
  },
  created () {
    
  },
  methods: {
    btn(){
        console.log(this.content);
        console.log(this.myConfig.headers)
    }
  },
  mounted () {
  },
//   filters: {
//   }

}
</script>

<style  scoped>
.v-modal{z-index: 1000 !important}
.edui-default .edui-toolbar .edui-combox .edui-combox-bod{line-height:normal;}
</style>


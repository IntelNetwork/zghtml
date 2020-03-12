<template>
    <div class="loginTop">
        <span>
            <img src="../../assets/logo.png" alt="">
        </span>
        <span class="right">
            <el-button class="landing" @click="login">登陆</el-button>
            <el-button type="text" class="registered" @click="advert">注册</el-button>
        </span>
    </div>
</template>
<script>

export default {
  data() {
    return {
     
    };
  },
  mounted() {
   
  },
  methods: {
      advert(){
            this.$router.push({ //核心语句
                name: 'registered', //跳转的路径
                query: { //路由传参时push和query搭配使用 ，作用时传递参数
                    id: this.id,
                }
            })
        },
        login(){
            this.$router.push({
                name:'login',
            })
        }
  }
};
</script>
<style scoped>
    .loginTop{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 120px;
        padding: 8px 16%;
        box-shadow: 0 0 20px -15px #080103 !important;
        background: #ffffff;
        z-index: 100;
        position: relative;
    }
    .right{
        /* margin-top: 10px; */
         line-height: 60px;
    }
    .landing{
        border: 1px solid #339999;
        color: #339999;
        height: 36px;
        width: 100px;
        line-height: 10px
    }
    .registered{
        color: #333333;
    }
</style>

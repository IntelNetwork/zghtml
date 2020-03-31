<template>
    <div class="loginTop">
        <div>
            <img src="../../assets/logo.png" alt="">
        </div>
        <div class="right">
            <span type="text" class="" @click="active($event,'login')">登陆</span>
            <span type="text" class="" @click="active($event,'advert')">注册</span>
        </div>
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
        },
        active(event,item){
            let paren = event.currentTarget.parentElement.children;
            for(var i=0;i<paren.length;i++){
                paren[i].className = "";
            }
            event.currentTarget.className = "landing";
            if(item=="login"){
                this.$router.push({ //核心语句
                    name: 'login', //跳转的路径
                    
                })
            }else{
                this.$router.push({ //核心语句
                    name: 'registered', //跳转的路径
                    
                })
            }
        },
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
         /* line-height: 60px; */
        display: flex;
        align-items: center;
    }
    .right span{
        width:94px;
        height:40px;
        background:rgba(255,255,255,1);
        border:2px solid #ffffff;
        display: inline-block;
        margin-right: 20px;
        line-height: 40px;
        text-align: center;
    }
    /* .registered{
        
    } */
    .el-button{
        color: #333333;
        /* border: none !important; */
        font-size: 14px;
    }
    .landing{
        border:2px solid rgba(51, 153, 153, 1) !important;
        border-radius:6px;
        color: #339999;
        height: 36px;
        width: 100px;
        line-height: 10px
    }
    
</style>

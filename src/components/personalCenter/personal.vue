<template>
  <div>
    <headerSelect></headerSelect>
    <div class="content">
      <div class="banner">
        <!-- <img src="../assets/banner.png" alt=""> -->
        <span class="cover"></span>
        <div class="personalData">
          <div class="personal">
            <span>
              <p>你的经历完善度</p>
              <h4>80%</h4>
            </span>
            <i></i>
            <span>
              <p>潜在人脉</p>
              <h4>18位</h4>
            </span>
          </div>
          <div class="personal">
            <span>
              <p>你收到的offor</p>
              <h4>8封</h4>
            </span>
            <i></i>
            <span>
              <p>潜在人脉</p>
              <h4>18位</h4>
            </span>
          </div>
        </div>
      </div>
      <div class="personalInformation">
        <div class="information">
          <img src="../../assets/top.jpg" alt />
          <div class="userName">
            <h3>翁少锋</h3>
            <p>已认证</p>
          </div>
          <div class="text">
            <p>我会为成为更好人</p>
          </div>
          <div class="btn">
            <el-button class="button1" @click="rcharge">充值</el-button>
            <el-button class="button2" @click="withdrawal">提现</el-button>
          </div>
        </div>
        <div class="informationNav"> 
          <ul  class="Nav">
            <li>寻找好友</li>
            <li>潜在人脉</li>
            <li class="potential">我关注的人</li>
            <li>关注我的人</li>
          </ul>
        </div>
      </div>
    <!-- <fonter /> -->
    </div>
  </div>
</template>
<script>
import headerSelect from "@/components/headerSelect";
// import fonter from "@/components/fonter";
export default {
  data() {
    return {};
  },
  components: {
    headerSelect,
  },
  created() {},
  methods: {
    updateRate() {},
    handleSizeChange() {},
    handleCurrentChange() {},
    // 充值
    rcharge() {
        this.$router.push({ //核心语句
            name: 'recharge', //跳转的路径
            query: { //路由传参时push和query搭配使用 ，作用时传递参数
                id: this.id,
            }
        })
    },
    // 提现
    withdrawal() {
        this.$router.push({ //核心语句
            name: 'withdrawal', //跳转的路径
            query: { //路由传参时push和query搭配使用 ，作用时传递参数
                id: this.id,
            }
        })
    },
    wo(){
       this.$router.push({ //核心语句
            name: 'resume', //跳转的路径
            query: { //路由传参时push和query搭配使用 ，作用时传递参数
                id: this.id,
            }
        })
    }
  }
};
</script>
<style type="text/css" scoped>
.banner {
  background: url(../../assets/banner.png) no-repeat;
  height: 218px;
  width: 100%;
  position: relative;
  color: #ffffff;
  z-index: 10;
}
.banner .cover {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
/* .content{
  width: 100%;
  height: 300px;
 
} */
.personalData {
  width: 100%;
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 0 20%;
   /* background: #ffffff; */
}
.personal {
  width: 300px;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.personal i {
  width: 2px;
  height: 26px;
  background: #ffffff;
  margin-top: 14px;
}
.personal p {
  font-size: 14px;
}
.personal h4 {
  font-size: 30px;
  margin-top: 10px;
}
.btn{
  margin-top:20px;
}
.button1 {
  width: 100px;
  background:rgba(51,153,153,1);
  color: #ffffff;
}
.button1:active{
  background:rgba(51,153,153,0.7);
  border: none;
}
.button2 {
  width: 100px;
  border: 2px solid #339999;
  color: #339999;
}
.personalInformation{
  text-align: center;
  z-index: 999;
  position: relative;
  background: #ffffff;
}
.information{
  width: 1200px;
  margin: 0 auto;
}
.information>img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: -42px;

}
.userName{
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 12px;
}
.userName h3{
  font-size: 24px;
  color: #333333;
}
.userName p{
  color: #ffffff;
  width: 48px;
  height: 20px;
  background: #339999;
  font-size: 14px;
  line-height:20px;
  border-radius: 2px; 
}
.text{
  color: #666;
  font-size: 14px;
}
.informationNav{
  margin-top: 50px;
  /* padding-bottom: 15px; */
}
.Nav{
  margin: 0 auto;
  width: 500px;
  display: flex;
  justify-content: space-between;
  height: 30px;
}
.Nav li{
  cursor: pointer;
}
.Nav li:hover{
    color: #339999;
    border-bottom: 2px solid #339999;
}
</style>

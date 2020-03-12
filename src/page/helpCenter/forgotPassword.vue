<template>
  <div>
    <!-- <headerSelect></headerSelect> -->
    <div class="content">
        <div class="banner">
            <span class="cover"></span>
            <h2>帮助中心</h2>
        </div>
        <div class="forgotCenter">
            <!-- <div class="forgotLeft">
                <div class="searchContent">
                    <el-input placeholder="搜索消息" v-model="input4">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input> 
                </div>
                <div class="account">
                    <h2>账号相关</h2>
                    <p class="accountBorder"></p>
                    <p>账号管理常见问题</p>
                    <p>账号身份角色常见问题</p>
                </div>
                <div class="account">
                    <h2>我是发包方</h2>
                    <p>需求方指南</p>
                    <p>发布项目</p>
                    <p>招募人员</p>                    
                    <p>支付款项</p>
                    <p>开发项目</p>
                    <p>验收项目</p>
                </div>
                <div class="account">
                    <h2>我是接包方</h2>
                    <p>开发者指南</p>
                    <p>注册认证</p>
                    <p>报名接单</p>
                    <p>开发项目</p>
                    <p>项目验收</p>
                </div>
                <div class="account">
                    <h2>会员相关</h2>
                    <p>会员可以享受哪些权益</p>
                    <p>会员费可以使用哪些支付方式</p>
                    <p>支付会员有发票吗？</p>
                    <p>会员可以续费或者升级吗？</p>
                </div>
            </div> -->
            <helpLeft />
            <div class="forgotRight">
                <div class="password">
                    <h3><i class="el-icon-star-off"></i>忘记密码了，怎么办？</h3>
                </div>
                <div class="prompt">
                    <p><i></i> 智工网采用随机验证码登录，登录时输入短信验证码即可，安全，便捷，有效。</p>
                </div>
                <div class="loginPassword">
                    <div class="login-container">
                        <el-form
                            autocomplete="on"
                            label-position="left"
                            label-width="0px"
                            class="card-box login-form"
                        >
                            <h3 class="title">欢迎回来</h3>
                            <p class="text">切勿错失职场良机。登录智工,及时掌握职场最新动态</p>
                            <el-form-item prop="username">
                            <el-input
                                name="username"
                                type="text"
                                v-model="phone"
                                autocomplete="on"
                                placeholder="请输入手机号"
                                class="username"
                            />
                            </el-form-item>
                            <el-form-item prop="verification">
                                <el-input
                                    name="verification"
                                    :type="pwdType"
                                    v-model="verification"
                                    autocomplete="on"
                                    placeholder="请输入验证码"
                                    class="verification"
                                ></el-input>
                                <span class="verificationCode" @click="getCode()" v-if="time==0">获取验证码</span>
                                <span class="verificationCode" v-if="time>0">{{time}}s后再次获取</span>
                            </el-form-item>
                            <el-form-item class="login">
                            <el-button :loading="loading" class="button">登录</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
    <fonter />
  </div>
</template>
<script>
import helpLeft from "@/components/personalCenter/helpLeft";
import fonter from "@/components/fonter";
export default {
  data() {
    return {
        input4:"",
        phone: "",
        verification: "",
        loading: false,
        pwdType: "verification",
        checkeds: true,
        time: 0,
        timea: 3,
    };
  },
  components: {
    helpLeft,
    fonter,
  },
  created() {},
  methods: {
        getCode() {
            this.time = 60;
            this.timeSecond();
        },
        timeSecond() {
                clearTimeout(this.times);
                this.times = setTimeout(() => {
                    if (this.time > 0) {
                        this.time--;
                        this.timeSecond();
                    } else {
                        clearTimeout(this.times);
                        this.times = null;
                    }
                    // if (this.timea > 0) {
                    //     this.timea--;
                    //     this.timeSecond()
                    // } else {
                    //     clearTimeout(this.times);
                    //     this.times = null;
                    //     // 路由跳转
                    //     this.$router.push({
                    //         name: "personal"
                    //     });
                    // };
                }, 1000);
            },
  }
};
</script>
<style type="text/css" scoped>
.banner {
    background: url(../../assets/banner.png) no-repeat;
    height: 160px;
    width: 100%;
    position: relative;
    color: #ffffff;
    z-index: 10;
    line-height: 160px;
    background-size: 100% 100%;
}
.banner .cover {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
.banner h2{
    text-align: center;
    font-size: 36px;

}
.forgotCenter{
    width: 1000px;
    margin: 16px auto;
    display: flex;
    justify-content: space-between;
}
.forgotRight{
    width: 710px;
    background: #ffffff;
    padding: 0 30px;
}
.password{
    font-size: 18px;
    color: #333333;
    height: 70px;
    border-bottom: 1px solid #EAEAEA;
    line-height: 70px;
}
.password h3 i{
    margin-right: 16px;
}
.prompt{
    color: #999999;
    font-size: 14px;
    margin-top: 10px;
}
.prompt p i{
    width:4px;
    height:4px;
    background:rgba(153,153,153,1);
    border-radius:50%;
    margin-right: 16px;
    display: inline-block;
}
.loginPassword{
    width: 620px;
    height: 362px;
    border: 1px dashed #E2E2E2;
    margin: 0 auto;
    margin-top: 35px;
}

.login-container{
    text-align: center;
}
.verificationCode {
    color: #339999;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
}
input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: #333;
    height: 47px;
}
.username{
    width: 100%;
}
.verification{
    width: 65%;
    margin: 0;
}
.el-input>>>.el-input__inner{
    border: none !important;
}
.el-input {
    display: inline-block;
    height: 47px;
    font-size: 14px;
    /* border: none; */
}
.login_banner .el-carousel__container {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -5;
}
.el-form-item.login,.el-form-item.login:active{
    border: 1px solid #ffffff;
}
.el-form-item {
    border: 1px solid #cccccc;
    background: #fff;
    border-radius: 5px;
    color: #cccccc;
    width: 360px;
    margin: 15px auto;
}
.button.el-button,
.button.el-button:hover {
    width: 100%;
    background:rgba(51,153,153,1);
    color: #fff;
    height: 48px;
    border: none;
}
.button.el-button:active{
    background:rgba(51,153,153,0.7);
    border: none;
}
.login-prompt{
    width: 500px;
    position: absolute;
    left: 0;
    right: 0;
    /* width: 400px; */
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
    text-align: center;
    display: none;
}
.title {
    font-size: 26px;
    font-weight: 400;
    color: #333;
    margin: 30px auto;
    text-align: center;
    font-weight: bold;
    padding-top: 20px;
}
.text {
    text-align: center;
    width: 100%;
    color: #999999;
    margin-bottom: 20px;
    font-size: 14px;
}


</style>

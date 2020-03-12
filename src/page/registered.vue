<template>
  <div>
    <loginTop />
    <div class="login-container">
      <el-form
        autocomplete="on"
        label-position="left"
        label-width="0px"
        class="card-box login-form"
      >
        <h3 class="title">注册</h3>
        <!-- <p class="text">切勿错失职场良机。登录智工,及时掌握职场最新动态</p> -->
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
            @keyup.enter.native="login"
            v-model="verification"
            autocomplete="on"
            placeholder="请输入验证码"
            class="verification"
          ></el-input>
          <span class="verificationCode" @click="getCode()" v-if="time==0">获取验证码</span>
          <span class="verificationCode" v-if="time>0">{{time}}s后再次获取</span>
        </el-form-item>
        <el-form-item class="login">
          <el-button :loading="loading" @click.native.prevent="login($event)" class="button">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="login-prompt">
      <h3 class="title">注册成功</h3>
      <p class="text">欢迎你，很高兴你能成为了智工网的一员，广阔天地大有可为</p>
      <el-button class="jump" @click="jump"><span></span>{{timea}} s 后自动跳转至个人中心</el-button>
    </div>
  </div>
</template>
<script>
  import { mapState, mapMutations } from "vuex";
  import loginTop from "@/components/login/loginTop";
  import { regist, } from "@/api/login"
    export default {
        name: "login",
        data() {
            return {
                phone: "",
                verification: "",
                loading: false,
                pwdType: "verification",
                checkeds: true,
                time: 0,
                timea: 3
            };
        },
        components: {
            loginTop
        },
        computed: {
            ...mapState(["token"]),
        },
        mounted() {

        },
        methods: {
           ...mapMutations([ "savetoken"]),
          // 验证码接口
            getCode() {
                if (this.phone == "") {
                    this.$message.warning("请先输入手机号");
                    return;
                }
                let url = `${regist.registVeri}?mobile=${this.phone}`;
                this.axios.get(url).then(res=>{
                  if(res.data.code==200){
                     this.time = 60;
                     this.timeSecond();
                     this.$message.success
                  }
                })
            },
            // 定时器
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

                }, 1000);
            },

            // 注册接口
            login(event) {
                if (this.phone == "") {
                    this.$message.warning("请先输入手机号");
                    return;
                }
                let url = `${regist.regist}`;
                let data = {
                  mobile:this.phone,
                  mobileCode: this.verification
                }
                this.axios.post(url,data).then(res=>{
                  if(res.data.code==200){
                    this.savetoken(res.data.result.token);
                    this.$message.success(res.data.message)
                    event.currentTarget.parentElement.parentElement.parentElement.parentElement.style.display = "none";
                    event.currentTarget.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.display = "block";
                    if (this.timea > 0) {
                        this.timeSecond()
                        this.$router.push({
                            name: "personal"
                        });
                    }
                  }
                }).catch(err=>{
                  console.log(err)
                })

            },
            jump(){
              this.$router.push({
                  name: "personal"
              });
            },
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    $bg: #2d3a4b;
    $dark_gray: #889aa4;
    $light_gray: #333;
    
    .login-container {
      display: block;
      position: fixed;
      height: 100%;
      width: 100%;
      background: #fff;
      // margin-top: 5px;
      input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
        -webkit-text-fill-color: #fff !important;
      }
      .verificationCode {
        color: #339999;
        font-size: 16px;
        cursor: pointer;
        // text-align: right;
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
      }
      .el-input {
        display: inline-block;
        height: 47px;
        font-size: 14px;
      }
      .tips {
        font-size: 14px;
        color: #333;
        margin-bottom: 10px;
      }
      .svg-container {
        padding: 6px 5px 6px 15px;
        color: #333;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
        &_login {
          font-size: 20px;
        }
      }
    
      .login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 400px;
        padding: 35px 35px 15px 35px;
        margin: 120px auto;
      }
      .el-form-item {
        border: 1px solid #cccccc;
        background: #fff;
        border-radius: 5px;
        color: #cccccc;
        width: 360px;
      }
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
      // width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
      text-align: center;
      display: none;
    }
      .title {
        font-size: 26px;
        font-weight: 400;
        color: #333;
        margin: 0px auto 30px auto;
        text-align: center;
        font-weight: bold;
      }
      .text {
        // text-align: center;
        width: 100%;
        color: #999999;
        margin-bottom: 20px;
        font-size: 14px;
      }
      .jump,.jump:hover{
        width:269px;
        height:48px;
        background:rgba(51,153,153,1);
        border-radius:6px;
        color: #fff;
        border: none;
      }
      .jump:active{
        background:rgba(51,153,153,0.7);
        border: none
      }
</style>
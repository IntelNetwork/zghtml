<template>
  <div>
    <div class="content">
        <div class="banner">
            <span class="cover"></span>
            <h2>帮助中心</h2>
        </div>
        <div class="forgotCenter">
            <helpLeft />
            <div class="forgotRight">
                <div class="password">
                    <h3><i class="el-icon-star-off"></i>账号管理常见问题</h3>
                </div>
                <div class="prompt">
                    <p v-for="(item,index) in prompt" :key="index"><i></i> {{item}}</p>
                </div>
                <div class="feedback">
                    <h3>问题还没解决？去反馈吧！</h3>
                    <el-button class="button">立即反馈</el-button>
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
        prompt:[
            "账号无法登录，提示账号已被冻结/禁用或未激活？", 
            "忘记密码了，怎么办？",
            "如何进行账号身份认证呢？",  
            "个人认证或企业认证过期后如何",
            "个人或企业已认证信息可以更改为别人的吗？",
            "为什么要绑定手机、邮箱？",
            "我的手机号变更了怎么办？",
        ],
    };
  },
  components: {
    helpLeft,
    fonter,
  },
  created() {},
  methods: {
      
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
    line-height: 30px;
    height: 480px;
}
.prompt p{
    cursor: pointer;
}
.prompt p i{
    width:4px;
    height:4px;
    background:rgba(153,153,153,1);
    border-radius:50%;
    margin-right: 16px;
    display: inline-block;
}
.feedback{
    border-top: 1px solid #EAEAEA;
    padding-top: 66px;
    text-align: center;
}
.feedback p{
    font-size: 16px;
}
.button{
    width: 134px;
    background:rgba(51,153,153,1);
    color: #fff;
    height: 40px;
    border: none;
    margin-top: 12px;
}
</style>

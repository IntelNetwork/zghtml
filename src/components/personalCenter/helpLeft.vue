<template>
  <div>
    <div class="forgotLeft">
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
    </div>
  </div>
</template>
<script>
// import headerSelect from "@/components/headerSelect";
// import fonter from "@/components/fonter";
export default {
  data() {
    return {
        input4:"",
    };
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
.forgotLeft{
    width: 270px;
    background: #ffffff;
    padding: 20px 30px;
}
.searchContent{
    border-bottom: 1px solid #EAEAEA;
    height: 52px;
}
.el-input{
    width:218px;
    height:38px;
}
.account{
    color: #999999;
    font-size: 14px;
    line-height: 30px;
    margin-top: 20px;
}
.account p{
    cursor: pointer;
}
.account h2{
    color: #333333;
    font-size: 16px;
}
.accountBorder{
    width: 34px;
    height: 2px;
    background: #339999;
    margin-bottom: 10px;
}
</style>

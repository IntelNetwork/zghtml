<template>
    <div class="recharge">
         <headerSelect />
       <el-container style="margin:0 auto;width:1200px;padding-top:70px">
            <el-aside width="300px">
                <personalLeft />
            </el-aside>
            <el-main>
                <div class="amount">
                    <h3>账户信息</h3>
                    <div class="balance">
                        <span>
                            <p>账户余额（元）</p>
                            <h4>{{amount}}</h4>
                            <p><i class="el-icon-warning-outline"></i> 暂无可结算金额</p>
                        </span>
                        <span>
                            <p>可提现金额</p>
                            <h4>{{amount}}</h4>
                        </span>
                        <span>
                            <p>已提现金额（元）</p>
                            <h4>{{amount}}</h4>
                        </span>
                    </div>
                </div>
                <div class="number">
                    <h3>充值</h3>
                    <el-form ref="form"  label-width="280px">
                        <el-form-item label="数量：">
                            <el-input v-model="number" class="formInput" placeholder="请输入你想充值智工币"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="recharge-button" @click="open">充值</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <el-dialog
                    :visible.sync="centerDialogVisible"
                    width="28%"
                    class="dialog">
                    <span slot="title"><i class="el-icon-circle-check"></i>已开启安全支付</span>
                    <h3>请选择支付方式</h3>
                    <div class="dialog-content">
                        <div class="alipay">
                            <span class="alipayActive">
                              <p><span class="iconfont Alipay">&#xe62a;</span>支付宝支付</p>
                              <span class="active">
                                  <p class="activeImg"></p>
                                  <i class="el-icon-check icon" ></i>
                              </span>
                            </span>
                            <span>
                              <p><span class="iconfont Alipay">&#xe62a;</span>支付宝支付</p>  
                            </span>
                        </div>
                        <div class="code">
                            <img src="../../assets/code.png" alt="">
                        </div>
                        <div class="complete">
                            <p>请使用支付宝支付：<i>{{complete}}元</i></p>
                            <h4>我已完成支付</h4>
                        </div>
                        <div class="agreement">
                            <p>付费即表示同意《智工网在线增值服务协议》</p>
                        </div>
                    </div>
                </el-dialog>
            </el-main>
        </el-container>
        <fonter />
    </div>
</template>
<script>
import headerSelect from "@/components/headerSelect";
import personalLeft from "@/components/personalCenter/personalLeft";
import fonter from "@/components/fonter";
export default {
  data() {
    return {
        money:"8898",
        amount:"0",
        number:'',
        centerDialogVisible: false,
        complete:"68"
    };
  },
  components:{
     headerSelect,
     personalLeft,
     fonter,
  },
  mounted() {
   
  },
  methods: {
    open(){
       this.centerDialogVisible = true; 
    }
  }
};
</script>
<style scoped>
.recharge{
    margin: 0 auto;
}
.el-main{
    padding: 0
}
.amount{
    background: #ffffff;
    margin: 0px 0 20px 0;
    padding: 30px;
}
.amount>h3{
    color: #333333;
    font-size: 16px;
    padding-bottom: 30px;
    font-weight:bold;
}
.balance{
    margin: 0 auto;
    width: 610px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    text-align: center;
    color:rgba(102,102,102,1);
    font-size: 14px;
}
.balance h4{
    color: #FF9900;
    font-size: 36px;
    margin:10px 0;
}
.number{
    background: #ffffff;
    padding-top: 30px;
    height: 270px;
    font-size: 14px;
    color: #333;
}
.number>h3{
    width: 64px;
    color: #339999;
    border-left: 2px solid #339999;
    padding-left:30px;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 30px
    
}
.formInput{
    width: 384px;
    height: 36px;
}
.recharge-button,.recharge-button:active{
    width: 384px;
    background: #339999;
    color: #ffffff;
    border: none;
}
.dialog-content{
    padding: 20px;
    text-align:center;
}
.dialog span{
    /* color: #999999; */
    font-size: 14px;
}
.el-dialog__header{
    background: #f3f3f4
}
.alipay{
    display: flex;
    justify-content: space-between;
}
.alipay>span{
    width: 196px;
    height: 40px;
    border: 1px solid #CAC9CA;
    line-height: 40px;
}
.alipay span.alipayActive{
    border: none;
    border: 2px solid #0099CC;
    color:#0099CC;
    position: relative;

}
.activeImg{
    position: absolute;
    bottom: 0;
    right: 0;
    /* height: 20px; */
    width: 0; 
    height: 0px;
    border-width: 10px;
    border-style: solid;
    border-color:#fff #0099CC #0099CC #fff;
    
    text-align: center;
    /* padding: 2px */
}
.icon{
    position: absolute;
    bottom: 0;
    right: -2px;
    color: #fff;
}
.code{
    margin: 20px 0;
}
.complete p{
    color: #848484;
    font-size: 14px;
}
.complete p>i{
    color: #FF6748;
    font-style: normal;
}
.complete h4{
    color: #339999;
    margin: 10px 0;
}
.agreement>p{
    font-size: 12px;
    color: #999999;
    margin-top:20px;
}
.Alipay {
    color: #0099CC;
    margin-right: 5px;
}
</style>

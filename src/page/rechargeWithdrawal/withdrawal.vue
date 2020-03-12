<template>
    <div class="withdrawal">
         <headerSelect />
       <el-container style="margin:0 auto;width:1200px;padding-top:70px;">
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
                    <h3>提现</h3>
                    <el-form ref="form"  label-width="280px">
                        <el-form-item label="数量：">
                            <el-input v-model="number" class="formInput" placeholder="请输入你想提现的智工币"></el-input>
                        </el-form-item>
                        <el-form-item label="收款账号">
                            <el-select v-model="value" clearable placeholder="支付宝（qtop.net@...）" class="formInput">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                >
                                </el-option>
                            </el-select>
                            <!-- <el-input v-model="number" class="formInput" placeholder="支付宝账号"></el-input> -->
                        </el-form-item>
                        <el-form-item>
                            <el-button class="withdrawal-button" @click="open">提现</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <el-dialog
                    :visible.sync="centerDialogVisible"
                    width="28%"
                    class="dialog">
                    <span slot="title"><i class="el-icon-circle-check"></i>新增收款设置</span>
                    <div>
                        <el-form ref="form"  label-width="120px">
                            
                            <el-form-item label="收款方式： ">
                                <el-select v-model="way" clearable placeholder="请选择" class="way" width="144px">
                                    <el-option
                                    v-for="item in manner"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="收款账户：">
                                <el-input v-model="number" placeholder="请输入" class="accountName"></el-input>
                            </el-form-item>
                            <el-form-item label="收款账号：">
                                <el-input v-model="number" placeholder="请输入你的支付宝账号" class="account"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="landing" @click="centerDialogVisible = false">确 定</el-button>
                            </el-form-item>
                        </el-form>
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
        complete:"68",
        options:[
            {
                value:"1972358964",
                label:"xxx"
            },
            {
                value:"123456",
                label:"某某"
            },
        ],
        value:"",
        way:"",
        manner:[
            {
                value:1,
                label:"支付宝"
            },
            {
                value:2,
                label:"微信"
            },
        ]
    };
  },
  components:{
     headerSelect,
     personalLeft,
     fonter
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
.withdrawal{
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
.withdrawal-button,.withdrawal-button:active{
    width: 384px;
    background: #339999;
    color: #ffffff;
    border: none
}
.dialog-content{
    padding: 20px;
    text-align:center;
    color: #666666;
}
.dialog span{
    color: #999999;
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
.accountName{
    width: 200px;
}
.account{
    width: 300px
}
.landing,.landing:active{
    background:rgba(51,153,153,1);
    color: #ffffff;
    height: 40px;
    width: 140px;
    /* line-height: 10px; */
    font-size: 16px;
    border: none
}
</style>

<template>
  <div class="box">
    <div>
      <headerSelect />
    </div>
    <div class="bg">
      <div class="process">
        <div class="process-2">
          <div class="process-main">
            <span class="iconfont active" slot="icon">&#xe6ca;</span>
            <p>
              <span class="number active1">1</span>
              <span class="number-content active">填写基本信息</span>
            </p>
          </div>
          <div class="line"></div>
          <div class="process-main">
            <span class="iconfont" slot="icon">&#xe63a;</span>
            <p>
              <span class="number">2</span>
              <span class="number-content">等待审核</span>
            </p>
          </div>
          <div class="line"></div>
          <div class="process-main">
            <span class="iconfont" slot="icon">&#xe668;</span>
            <p>
              <span class="number">3</span>
              <span class="number-content">申请成功</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <p class="main-title">
        <span class="main-left">基础信息填写</span>
        <!-- <el-divider direction="vertical"></el-divider> -->
        <span class="main-right">以下信息仅用于保障双方权益，我们不会公开或者泄露此信息</span>
      </p>
      <div class="form">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="150px"
          class="demo-ruleForm"
        >
          <el-form-item label="入驻地区：" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择入驻地区" class="from-select">
              <el-option label="浦东新区" value="shanghai"></el-option>
              <el-option label="青浦区" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="入驻类型：" prop="company" class="rradio">
            <el-radio-group v-model="ruleForm.company">
              <el-radio label="公司"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="公司名称：" prop="desc">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="统一社会信用代码：" prop="resource">
            <el-input v-model="ruleForm.resource"></el-input>
          </el-form-item>
          <div class="uplod">
            <el-form-item label="营业执照：" class="upend">
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
              >
                <el-button class="upload-button">上传图片</el-button>
                <div class="el-upload__text">
                  <p class="support1">推荐使用800X800</p>
                  <p class="support">
                    支持jpg、png、jpeg、bmp格式
                    大小控制在5M以下
                  </p>
                </div>
              </el-upload>
            </el-form-item>
            <div class="upend-right">
              * 上传最新版三证合一营业执照清晰正面照，
              图片将用于识别，请确保完整清晰，仅支
              持大陆工商颁布的营业执照，请确认证件
              在有效期内。 如提供不正规营业执照或其
              他图片，将无法识别
            </div>
          </div>
        </el-form>
      </div>
      <p class="main-title">
        <span class="main-left">负责人信息填写</span>
        <!-- <el-divider direction="vertical"></el-divider> -->
        <span class="main-right">以下信息仅用于保障双方权益，我们不会公开或者泄露此信息</span>
      </p>
      <div class="form">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="150px"
          class="demo-ruleForm"
        >
          <el-form-item label="负责人姓名：" prop="name1">
            <el-input v-model="ruleForm.name1"></el-input>
          </el-form-item>
          <el-form-item label="负责人手机号：" prop="ipone">
            <el-input v-model="ruleForm.ipone"></el-input>
          </el-form-item>
          <div class="verification">
            <el-form-item label="验证码：" prop="validation">
              <el-input v-model="ruleForm.validation"></el-input>
            </el-form-item>
            <span class="obtain">获取验证码</span>
          </div>
          <el-form-item label="邮箱：" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="QQ：" prop="qq">
            <el-input v-model="ruleForm.qq"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="submit" @click="submitForm('ruleForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="audit">
      <p class="apply">你的申请已提交</p>
      <p class="apply-font">我们将认真严谨审核你所提交的资料，结果将于1-3个工作日于我的申请中查看。</p>
      <div class="auditbutton">
        <el-button class="audit-button">已提交申请</el-button>
        <!-- <el-button class="audit-button">3 s 后自动跳转至我的申请</el-button> -->
      </div>
    </div>
    <div>
      <fonter />
    </div>
  </div>
</template>
<script>
import headerSelect from "@/components/headerSelect";
import fonter from "@/components/fonter";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        name1: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        validation: ""
      },
      rules: {
        name: [{ required: true, message: "请输入公司名称!", trigger: "blur" }],
        name1: [
          { required: true, message: "请输入负责人姓名!", trigger: "blur" }
        ],
        ipone: [
          {
            type: "number",
            required: true,
            validator: function(rule, value, callback) {
              var MobileRegex = /^1[0-9]{10}$/;
              if (!MobileRegex.test(value)) {
                callback(new Error("手机号码格式不正确！"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ],
        validation: [
          { required: true, message: "验证码不能为空!", trigger: "blur" }
        ],
        email: [{ required: true, message: "email不能为空!", trigger: "blur" }],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质!",
            trigger: "change"
          }
        ],
        qq: [{ required: true, message: "QQ号码不能为空!", trigger: "blur" }],
        company: [{ required: true, message: "请选择!", trigger: "blur" }],
        resource: [
          {
            required: true,
            message: "请填写统一社会信用代码!",
            trigger: "blur"
          }
        ],
        desc: [{ required: true, message: "请填写公司名称!", trigger: "blur" }]
      }
    };
  },
  components: {
    headerSelect,
    fonter
  },
  mounted() {
    // this.getCookie();
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          document.getElementsByClassName("main")[0].style.display = "none";
          document.getElementsByClassName("audit")[0].style.display = "block";
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.box {
  background: #ffffff;
}
.bg {
  width: 100%;
  height: 440px;
  background: url(../../assets/prbg.png) no-repeat;
  background-size: 100% 100%;
  min-width: 1200px;
  padding: 1px;
}
.process {
  width: 1020px;
  height: 136px;
  background: #f5f5f5;
  margin: 0 auto;
  margin-top: 303px;
  padding: 1px;
}
.process-2 {
  width: 780px;
  height: 80px;
  margin: 0 auto;
  margin-top: 35px;
  display: flex;
}
.process-2 p {
  display: flex;
  line-height: 22px;
}
.process-main .iconfont {
  font-size: 54px;
  padding: 0px 0px 0px 17%;
}
.process-main .active1 {
  border: 2px solid #339999;
  color: #339999;
}
.process-main .active {
  color: #339999;
}
.number {
  display: block;
  width: 22px;
  height: 22px;
  background: rgba(255, 255, 255, 0);
  border: 2px solid #cccccc;
  border-radius: 50%;
  text-align: center;
  line-height: 22px;
  color: #cccccc;
}
.number-content {
  margin-left: 10px;
  font-size: 16px;
  color: #cccccc;
}
.process-main {
  width: 200px;
}
.line {
  width: 220px;
  height: 6px;
  background: #e4e4e4;
  margin: 63px 20px 0px 20px;
}
.main {
  width: 1020px;
  min-width: 1020px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 12px 0px rgba(8, 1, 3, 0.06);
  border-radius: 0px 0px 6px 6px;
  margin: 0 auto;
  padding: 1px 0px 111px 0px;
  display: block;
}
.audit {
  width: 1020px;
  min-width: 1020px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 12px 0px rgba(8, 1, 3, 0.06);
  border-radius: 0px 0px 6px 6px;
  margin: 0 auto;
  padding: 1px 0px 111px 0px;
  display: none;
}
.main-title {
  height: 37px;
  line-height: 37px;
  border-left: 4px solid #339999;
  margin-top: 60px;
}
.main-left {
  font-size: 18px;
  color: #333333;
  padding: 0px 15px 0px 26px;
  border-right: 1px solid #cbcbcb;
}
.main-right {
  color: #999999;
  font-size: 14px;
  margin-left: 20px;
}
.form {
  width: 63%;
  margin: 0 auto;
  margin-top: 60px;
}
.form >>> input {
  width: 383px;
}
.verification {
  display: flex;
}
.obtain {
  color: #339999;
  line-height: 40px;
  margin-left: 10px;
  cursor: pointer;
}
.verification >>> input {
  width: 172px;
}
.submit {
  width: 383px;
  height: 40px;
  background: #339999;
  border-radius: 6px;
  color: #ffffff;
}
.from-select {
  width: 172px;
}
.from-select >>> input {
  width: 172px;
}
.from-select >>> .el-input .el-input--suffix {
  width: 172px;
}
.upend {
  width: 383px;
  height: 210px;
}
.upend >>> .el-upload-dragger {
  width: 383px;
  height: 210px;
  border: 1px solid rgba(234, 234, 234, 1);
  background: #eaeaea;
}
.upload-button {
  width: 131px;
  height: 40px;
  background: #339999;
  border: 2px solid #339999;
  border-radius: 6px;
  color: white;
  margin-top: 55px;
}
.el-upload__text {
  color: #999999;
  font-size: 12px;
}
.support1 {
  height: 25px;
}
.support {
  width: 177px;
  height: 27px;
  line-height: 20px;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  margin: 0 auto;
}
.rradio >>> .el-radio__input.is-checked + .el-radio__label {
  color: #999999;
}
.rradio >>> .el-radio__input.is-checked .el-radio__inner {
  border-color: #339999;
  background: #339999;
}
.uplod {
  width: 1020px;
  display: flex;
}
.upend-right {
  width: 231px;
  height: 70px;
  font-size: 12px;
  margin: 65px 0px 0px 186px;
  color: #999999;
  line-height: 18px;
}
.audit {
  width: 1020px;
  height: 543px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 12px 0px rgba(8, 1, 3, 0.06);
  border-radius: 6px;
}
.apply {
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #333333;
  margin-top: 87px;
}
.apply-font {
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #999999;
  margin-top: 18px;
}
.auditbutton {
  width: 269px;
  margin: 0 auto;
}
.audit-button {
  width: 269px;
  height: 40px;
  background: rgba(51, 153, 153, 1);
  border-radius: 6px;
  color: #ffffff;
  margin: 50px 0px 0px 0px;
}
</style>
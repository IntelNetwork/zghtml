<template>
  <div class="box">
    <div>
      <headerSelect />
    </div>
    <div class="form">
      <p class="title">我的部落-创建</p>
      <p class="underline"></p>
      <div class="main">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="150px"
          class="demo-ruleForm"
        >
          <div class="uplod">
            <el-form-item label="封面：" class="upend">
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
              >
                <div class="el-upload__text">为你的话题添加一个封面吧-</div>
                <i class="el-icon-upload"></i>
                <p class="upload-p">将图片拖拽到这里</p>
              </el-upload>
            </el-form-item>
            <div class="upend-right">
              <p>支持上传图片格式：</p>
              <p>PNG、JPG、JPEG、 BMP、TIF、SVG</p>
              <p>大小不得超过5M</p>
            </div>
          </div>
          <el-form-item label="名称：" prop="desc">
            <el-input v-model="ruleForm.name" placeholder="填写你的话题标题"></el-input>
          </el-form-item>
          <el-form-item label="行业：" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="职场新人" name="type"></el-checkbox>
              <el-checkbox label="职场老司机" name="type"></el-checkbox>
              <el-checkbox label="技术流" name="type"></el-checkbox>
              <el-checkbox label="互联网" name="type"></el-checkbox>
              <el-checkbox label="金融" name="type"></el-checkbox>
              <el-checkbox label="传统行业" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="标签：" prop="resource">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="MBA" name="type"></el-checkbox>
              <el-checkbox label="校友" name="type"></el-checkbox>
              <el-checkbox label="同事" name="type"></el-checkbox>
              <el-checkbox label="地方" name="type"></el-checkbox>
              <el-checkbox label="公务员" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="部落介绍：" prop="desc">
            <el-input type="textarea" placeholder="写下你的部落介绍" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
        <el-button class="addcreate" @click="submitForm('ruleForm')">创建</el-button>
        <el-button class="delectcreate" type="text" @click="resetForm('ruleForm')">取消创建</el-button>
    </el-form-item>
        </el-form>
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
        name: [{ required: true, message: "行业不能为空!", trigger: "blur" }],
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
            message: "请至少选择一个行业!",
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
        desc: [
          { required: true, message: "部落介绍不能为空!", trigger: "blur" }
        ]
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
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
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
  background: #f3f3f3;
}
.form {
  width: 1001px;
  height: 851px;
  background: #ffffff;
  border-radius: 6px;
  margin: 0 auto;
  margin: 30px auto 53px auto;
  padding-top: 1px;
}
.title {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #000000;
  margin: 21px 0px 0px 29px;
}
.underline {
  width: 34px;
  height: 2px;
  background: #339999;
  margin: 11px 0px 0px 29px;
}
.main {
  width: 578px;
  margin: 0 auto;
}
.uplod {
  width: 1020px;
  display: flex;
}
.upend-right {
  width: 231px;
  height: 70px;
  font-size: 12px;
  margin: 24px 0px 0px 29px;
  color: #999999;
  line-height: 18px;
}
.upend >>> .el-upload-dragger {
  width: 130px;
  height: 130px;
  border: 1px solid #cdcccd;
  background: #ffffff;
}
.el-upload__text {
  width: 96px;
  font-size: 12px;
  color: #666666;
  line-height: 18px;
  margin: 0 auto;
  margin-top: 10px;
}
.el-icon-upload {
  font-size: 20px;
  margin: 0px 0 0px 0px;
}
.upload-p {
  font-size: 12px;
  color: #999999;
  margin-top: -15px;
}
.main >>> input {
  width: 383px;
}
.main >>> .el-form-item__content {
  /* width: 383px; */
}
.main >>> textarea {
  width: 383px;
  height: 130px;
}
.el-checkbox {
  padding: 0px 5px 0px 5px;
  height: 30px;
  border: 1px solid #CAC9CA;
  border-radius: 6px;
  margin-right: 28px;
  color: #000000;
}
.main>>>.el-checkbox__input {
    display: none;
}
.main>>>.el-checkbox__label {
    height: 30px;
}
/* .main>>>.el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000000;
} */
.addcreate {
    width:383px;
    height:40px;
    background:#339999;
    border:2px solid #339999;
    border-radius:6px;
    color: #ffffff;
    margin-top: 48px;
}
.delectcreate {
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:#339999;
    margin-left: 38%
}
.title {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #000000;
  margin: 21px 0px 0px 29px;
}
.underline {
  width: 34px;
  height: 2px;
  background: #339999;
  margin: 11px 0px 0px 29px;
}
</style>
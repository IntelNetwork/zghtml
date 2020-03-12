<template>
    <div>
        <div class="header">
            <div class="nav">
                <ul>
                    <li class="nav-li1">创建简历 - 教育经历</li>
                    <li class="nav-li2">4/<span class="state">5</span></li>
                </ul>
            </div>
        </div>
        <div class="box"> 
            <div class="main">
                <div class="main-img">
                    <div class="head">
                        <img src="../../assets/head.jpg" alt="头像" class="head-img">
                    </div>
                </div>
                <div class="main-form">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="学校名称：" prop="name">
                            <el-input v-model="ruleForm.name" placeholder="填写真实姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="专业：" prop="region">
                            <el-input v-model="ruleForm.region" placeholder="填写常用手机号"></el-input>
                        </el-form-item>
                        <el-form-item label="学历：" prop="school1">
                            <el-cascader :options="options" v-model="ruleForm.school1" clearable class="school"></el-cascader>
                        </el-form-item>
                        <el-form-item label="毕业年份：" prop="school2">
                            <el-date-picker
                                v-model="ruleForm.value3"
                                type="year"
                                placeholder="选择年">
                            </el-date-picker>
                        </el-form-item>
                        <p class="add">添加工作经历</p>
                        <div class="Line">

                        </div>
                        <el-form-item>
                            <el-button class="primarya" @click="submitForm('ruleForm')">下一步，创建基本信息</el-button>
                            <el-button type="text" class="Preservation" @click='prev'>上一步</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div>
                <fonter />
            </div>
        </div>
    </div>
</template>
<script>
    import fonter from "@/components/fonter";
    export default {
        data() {
            return {
                // 头像
                imageUrl: '',
                // 表单
                ruleForm: {
                     name: '',
                     value3:'',
                },
                options: [{
                    value: 'zhinan',
                    label: '硕士', 
                },  ],
        rules: {
          name: [
            { required: true, message: '学校不能为空', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '专业不能为空', trigger: 'blur' },
          ],
          school1: [
            { required: true, message: '学历不能为空', trigger: 'blur' },
          ],
          school2: [
            // { required: true, },
          ],
        }
            };
             
        },
        mounted() {
            // this.getCookie();
            
        },
        components:{
            fonter
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    this.$router.push({ //核心语句
                        path: '/autograph', //跳转的路径
                        query: { //路由传参时push和query搭配使用 ，作用时传递参数
                            id: this.id,
                        }
                    })
                } else {
                    // console.log('error submit!!');
                    return false;
                }
                });
            },
            // 返回上一级
            prev(){
                this.$router.go(-1)
            },
            // 上传文件
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }
    }
    };
</script>
<style scoped>
    .box {
        width: 1200px;
        min-width: 1200px;
        margin: 0 auto;
    }
    /* 导航 */
    .header {
        width: 100%;
        height: 70px;
        box-shadow:0px 6px 12px 0px rgba(8,1,3,0.06);
        background-color: #FFFFFF;
    }
    .nav {
        width: 1001px;
        /* min-width: 1001px; */
        height: 70px;
        margin: 0 auto;
    } 
    .nav ul {
        width: 100%;
        height: 70px;
        /* line-height: 70px; */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .nav-li1 {
        font-size:18px;
        height: 70px;
        /* font-family:PingFang SC; */
        line-height: 66px;
        font-weight:400;
        color:rgba(0,0,0,1);
    }
    .nav-li2 {
        width:26px;
        height:70px;
        line-height: 66px;
        font-size:18px;
        /* font-family:PingFang SC; */
        font-weight:400;
        color:rgba(0,0,0,1);
    }
    .state {
        color: #999999;
        font-size: 16px;
    }
    /* 主体 */
    .main{
        width:1001px;
        height:658px;
        background:rgba(255,255,255,1);
        border-radius:6px;
        margin: 0 auto;
        margin-top: 77px;
    }
    /* 头像上 */
    .main-img {
        width:100px;
        height:100px;
        margin: 0 auto;
       position: relative;
    }
    .avatar-uploader {
        position: absolute;
        top: -50px;
        border-radius: 50%;
    }
    .avatar-uploader .el-upload {
        
        border: 1px dashed #d9d9d9;
        
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        color: #8c939d;
        width:100px;
        height:100px;
        font-size: 12px;
        text-align: center;
        background:url("../../assets/head.jpg");
        background-size: 100% 100%;
        border-radius: 50%;
    }
    .el-icon-plus:before {
        position: absolute;
        top: 15px;
        left: 36px;
        font-size: 26px;
        color: #FFFFFF;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .img-limit {
        padding: 49px 0px;
        color: #FFFFFF;
    }
    .add {
        margin-left: 125px;
        width:87px;
        height:15px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(51,153,153,1);
    }
    .head {
        width:100px;
        height:100px;
        border-radius:50%;
        background-color: #FFFFFF;
        position: absolute;
        top: -50px;
    }
    .head-img {
        width: 92px;
        height: 92px;
        border-radius:50%;
        position: absolute;
        left: 4px;
        top: 4px;
    }
    /* 表单 */
    .main-form {
        width: 500px;
        margin: 0 auto;
    }
    .file {
        width:196px;
        height:40px;
        border:1px solid rgba(202, 201, 202, 1);
    }
    .tesat {
        display: flex;
        /* justify-content: space-between; */
    }
    .upload-p {
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(153,153,153,1);
        margin-left: 15px;

    }
    .Line {
        width: 1001px;
        height: 60px;
        /* border-bottom: 1px solid #EDEDED; */
    }
    .primarya {
        width:383px;
        height:40px;
        background-color: #339999;
        color: #FFFFFF;
        border: none;
    }
    .Preservation {
        width:383px;
        height:40px;
        color: #339999;
        margin: 0 auto
    }
    .school {
        width: 220px;
    }
    .el-input>>>input:focus {
        border-color: #339999;
    }
    .el-input__inner:focus{
        border-color: #339999;
    }
    .el-textarea>>>.el-textarea__inner:focus {
        border-color: #339999;
    }
    .el-cascader .el-input .el-input__inner:focus, .el-cascader .el-input.is-focus .el-input__inner {
        border-color: #339999;
    }
    .el-input>>>.el-input__inner{
        width: 383px;
    }
    .el-cascader >>>.el-input .el-input__inner:focus, .el-cascader >>>.el-input.is-focus .el-input__inner{
        border-color: #339999
    }
</style>
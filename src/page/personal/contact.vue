<template>
    <div>
        <div class="header">
            <div class="nav">
                <ul>
                    <li class="nav-li1">创建简历 - 联系方式</li>
                    <li class="nav-li2">1/<span class="state">5</span> </li>
                </ul>
            </div>
        </div>
        <div class="box"> 
            <div class="main">
                <div class="main-img">
                    <div class="head">
                        <img src="../../assets/head.jpg" alt="头像" class="head-img">
                    </div>
                    <!-- <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        
                        <i v-else class="el-icon-plus avatar-uploader-icon">
                            <p class="img-limit">请上传小于5M.jpg的图片</p>
                        </i>
                        
                    </el-upload> -->
                    <!-- <img src="../../assets/head.jpg" alt="头像" class="head"> -->
                </div>
                <div class="main-form">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="真实姓名：" prop="name">
                            <el-input v-model="ruleForm.name" placeholder="填写真实姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号：" prop="region">
                            <el-input v-model="ruleForm.region" placeholder="填写常用手机号"></el-input>
                        </el-form-item>
                            <el-form-item label="邮箱：" prop="email">
                            <el-input v-model="ruleForm.email" placeholder="填写本人邮箱"></el-input>
                        </el-form-item>
                        <el-form-item label="QQ：" prop="qq">
                            <el-input v-model="ruleForm.qq" placeholder="还在职，QQ联系更方便"></el-input>
                        </el-form-item>
                        <el-form-item label="自有简历：" prop="qq">
                            <el-upload
                                class="upload-demo"
                                ref="upload"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                
                                :auto-upload="false">
                                <!-- :file-list="fileList" -->
                                <div class="tesat">
                                    <el-button slot="trigger" size="small" class="file">本地上传</el-button>
                                    <p class="upload-p">如没有，可忽略此选项</p>
                                </div>
                                <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
                                <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                            </el-upload>
                        </el-form-item>
                        <div class="Line">

                        </div>
                        <el-form-item>
                            <el-button class="primarya" @click="submitForm('ruleForm')">下一步，创建基本信息</el-button>
                            <el-button type="text" class="Preservation" @click="resetForm('ruleForm')">保存，暂时就这么多</el-button>
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
                },
        rules: {
          name: [
            { required: true, message: '真实姓名不能为空', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '手机号不能为空', trigger: 'blur' },
          ],
          email: [
            { required: true, message: 'email不能为空', trigger: 'blur' },
          ],
          email: [
            { required: true, message: '', trigger: 'blur' },
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
            // 头像上传
             handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
             },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 5;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 5MB!');
                }
                return isJPG && isLt2M;
            },
               submitForm(formName) {
                    this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('submit!');
                        this.$router.push({ //核心语句
                            path: '/basic', //跳转的路径
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
                resetForm(formName) {
                    this.$refs[formName].resetFields();
                    this.$router.push({
                    path: '/circle', //跳转的路径
                    query: { //路由传参时push和query搭配使用 ，作用时传递参数
                        id: this.id,
                    }
                })
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
                },
                
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
    .avatar-uploader {
        position: absolute;
        top: -45px;
        left: 5px;
        border-radius: 50%;
        
    }
    .avatar-uploader .el-upload {
        
        border: 1px dashed #d9d9d9;
        background: #FFFFFF;
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
        /* line-height: 100px; */
        width:100px;
        height:100px;
        padding: 49px 0;
        color: #FFFFFF;
        background: rgba(0,0,0,0.3);
        border-radius: 50%;
    }
    .avatar {
        width:100px;
        height:100px;
        border-radius:50%;
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
    .el-input>>>.el-input__inner{
        width: 383px;
    }
    .el-input>>>input:focus {
        border-color: #339999;
    }

</style>
<template>
    <div>
        <div class="header">
            <div class="nav">
                <ul>
                    <li class="nav-li1">创建简历 - 关于你</li>
                    <li class="nav-li2">5/<span class="state">5</span></li>
                </ul>
            </div>
        </div>
        <div class="box"> 
            <div class="main">
                <div class="main-img">
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
                    <div class="head">
                        <img src="../../assets/head.jpg" alt="头像" class="head-img">
                    </div>
                </div>
                <div class="main-form">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <div class="from-top">
                            <el-form-item label="个人签名：" prop="name">
                                <el-input v-model="ruleForm.name" placeholder="一句话描述你自已" class="position"></el-input>
                            </el-form-item>
                        </div>
                        <div class="Line">

                        </div>
                        <el-form-item class="ruleForm">
                            <el-button class="primarya" @click="submitForm('ruleForm')">完成，确认</el-button>
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
                radio: '',
                value1: '',
                value2: '',
                
                // 表单
                ruleForm: {
                    name: '',
                    position:'',
                    desc:'',
                    date1:'',
                    date2:'',
                },
                rules: {
                    name: [
                        { required: true, message: '个人签名不能为空', trigger: 'blur' },
                        // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
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
            // 下一步
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    this.$router.push({ //核心语句
                        path: '/circle', //跳转的路径
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
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .img-limit {
        padding: 49px 0px;
        color: #FFFFFF;
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
        width: 580px;
        margin: 0 auto;
    }
    .position {
        width: 383px;
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
    .from-top {
        margin-left: 38px;
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
    .cascader {
        width: 220px;
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
    .el-input>>>input:focus {
        border-color: #339999;
    }
    .ruleForm{
        margin-left: 36px;
    }
</style>
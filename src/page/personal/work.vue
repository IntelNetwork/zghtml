<template>
    <div>
        <div class="header">
            <div class="nav">
                <ul>
                    <li class="nav-li1">创建简历 - 工作经历</li>
                    <li class="nav-li2">3/<span class="state">5</span></li>
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
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
                        <div class="from-top">
                            <el-form-item label="公司名称：" prop="name">
                                <el-input v-model="ruleForm.name" placeholder="请输入你的公司名称" class="position"></el-input>
                            </el-form-item>
                            <el-form-item label="职位：" prop="position">
                                <el-input v-model="ruleForm.position" placeholder="填写你的所任职位" class="position"></el-input>
                            </el-form-item>
                            <el-form-item label="工作时间：" required>
                                <el-col :span="9">
                                    <el-form-item prop="date1">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 96%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col class="line" :span="1">至</el-col>
                                <el-col :span="9">
                                     <el-form-item prop="date1">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 104%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="工作经历：">
                                <el-input type="textarea" v-model="ruleForm.desc" class="position"></el-input>
                            </el-form-item>
                            <p class="add">添加工作经历</p>
                        </div>
                        <div class="Line">

                        </div>
                        <el-form-item class="ruleForm">
                            <el-button class="primarya" @click="submitForm('ruleForm')">下一步，填写教育经历</el-button>
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
                 options: [{
                    value: 'zhinan',
                    label: '上海',
                    children: [{
                        value: 'shejiyuanze',
                        label: '测试',
                        children: [{
                        value: 'yizhi',
                        label: '测试'
                        }, {
                        value: 'fankui',
                        label: '测试'
                        }, {
                        value: 'xiaolv',
                        label: '测试'
                        }, {
                        value: 'kekong',
                        label: '测试'
                        }]
                    }, {
                        value: 'daohang',
                        label: '测试',
                        children: [{
                        value: 'cexiangdaohang',
                        label: '测试'
                        }, {
                        value: 'dingbudaohang',
                        label: '测试'
                        }]
                    }]
                }, ],
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
                        { required: true, message: '公司不能为空', trigger: 'blur' },
                        // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    position: [
                        { required: true, message: '职位不能为空', trigger: 'blur' },
                    ],
                    desc: [
                        { required: true, message: '工作时间不能为空', trigger: 'blur' },
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
                        path: '/education', //跳转的路径
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
        /* margin: 0 auto; */
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
    .el-input__inner:focus{
        border-color: #339999;
    }
    .el-textarea>>>.el-textarea__inner:focus {
        border-color: #339999;
    }
    .el-cascader .el-input .el-input__inner:focus, .el-cascader .el-input.is-focus .el-input__inner {
        border-color: #339999;
    }
    .ruleForm{
        margin-left: 36px;
    }
</style>
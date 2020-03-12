<template>
    <div>
        <div class="header">
            <div class="nav">
                <ul>
                    <li class="nav-li1">创建简历 - 基本信息</li>
                    <li class="nav-li2">2/<span class="state">5</span></li>
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
                            <el-form-item label="性别：">
                                <el-radio v-model="ruleForm.radio" label="1">男</el-radio>
                                <el-radio v-model="ruleForm.radio" label="2">女</el-radio>
                            </el-form-item>
                            <el-form-item label="出生日期：">
                                <el-date-picker
                                    v-model="value1"
                                    type="date"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>
                                <el-form-item label="参加工作时间：">
                                    <el-date-picker
                                        v-model="value2"
                                        type="date"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </el-form-item>
                            <el-form-item label="当前工作城市：">
                                <el-cascader :options="options" clearable class="cascader"></el-cascader>
                            </el-form-item>
                        </div>
                        <div class="Line">

                        </div>
                        <el-form-item>
                            <el-button class="primarya" @click="submitForm('ruleForm')">下一步，填写工作信息</el-button>
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
                radio: '',
                value1: '',
                value2: '',
                options: [{
                    value: 'zhinan',
                    label: '上海',
                    children: [{
                        value: 'shejiyuanze',
                        label: '浦东新区',
                        children: [{
                            value: 'yizhi',
                            label: '张江'
                        }, {
                            value: 'fankui',
                            label: '北蔡'
                        }, {
                            value: 'xiaolv',
                            label: '唐镇'
                        }, {
                            value: 'kekong',
                            label: '金桥'
                        }]
                    }, {
                        value: 'daohang',
                        label: '青浦区',
                        children: [{
                            value: 'cexiangdaohang',
                            label: '徐泾镇'
                        }, {
                            value: 'dingbudaohang',
                            label: '重固镇'
                        }]
                    }]
                }, ],
                // 表单
                ruleForm: {
                    name: '',
                },
                rules: {
                    radio: [{
                            required: true,
                            message: '真实姓名不能为空',
                            trigger: 'blur'
                        },
                        // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [{
                        required: true,
                        message: '手机号不能为空',
                        trigger: 'blur'
                    }, ],
                    email: [{
                        required: true,
                        message: 'email不能为空',
                        trigger: 'blur'
                    }, ],
                    email: [{
                        required: true,
                        message: '',
                        trigger: 'blur'
                    }, ],
                }
            };
        },
        mounted() {
            // this.getCookie();

        },
        components: {
            fonter
        },
        methods: {

            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('submit!');
                        this.$router.push({ //核心语句
                            path: '/work', //跳转的路径
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
            prev() {
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
        margin-left: 100px;
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
    .el-input>>>input:focus {
        border-color: #339999;
    }
    .el-input__inner:focus{
        border-color: #339999;
    }
    .el-cascader .el-input .el-input__inner:focus, .el-cascader .el-input.is-focus .el-input__inner {
        border-color: #339999;
    }
    .el-cascader >>>.el-input .el-input__inner:focus, .el-cascader >>>.el-input.is-focus .el-input__inner{
        border-color: #339999
    }
</style>
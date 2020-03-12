<template>
    <div>
        <div>
            <headerSelect />
        </div>
        <div class="data">
            <div class="left">
                <personalLeft />
            </div>
            <div class="mian">
                <div class="mian-title">
                    <p>个人资料</p>
                </div>
                <div class="modified-data">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon">
                            <p class="img-limit">请上传小于5M.jpg的图片</p>
                        </i>
                        
                    </el-upload>
                    <div class="modified-from">
                        <p class="modified-name">翁少锋<span>修改</span></p>
                    </div>
                    <div class="modified-el">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="手机号：" prop="name">
                                <p class="phone">150****7099</p>
                            </el-form-item>
                            <el-form-item label="邮箱：" prop="email">
                                <el-input v-model="ruleForm.email" placeholder="qtop.net@qtop.net"></el-input>
                            </el-form-item>
                            <el-form-item label="性别：">
                                <el-radio-group v-model="ruleForm.resource">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="生日：" prop="birthday">
                                <el-input v-model="ruleForm.qq" placeholder="还在职，QQ联系更方便"></el-input>
                            </el-form-item>
                            <el-form-item label="日期：" prop="birthday">
                                <el-date-picker
                                    class="picker"
                                    v-model="value1"
                                    type="date"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="家乡：">
                                <el-cascader :options="options" clearable class="cascader"></el-cascader>
                            </el-form-item>
                            <el-form-item label="现居：">
                                <el-cascader :options="options" clearable class="cascader"></el-cascader>
                            </el-form-item>
                            <el-form-item label="个人签名：" prop="email">
                                <el-input  placeholder="我会成为更好的人"></el-input>
                            </el-form-item>
                            <div class="Line">
                                <el-button type="primary" class="save" @click="onSubmit">保存</el-button>
                            </div>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <fonter />
        </div>
    </div>
</template>
<script>
    import headerSelect from "@/components/headerSelect";
    import personalLeft from "@/components/personalCenter/personalLeft";
    import fonter from "@/components/fonter";
    export default {

        data() {
            return {
                // 头像
                imageUrl: '',
                value1:'',
                // 表单
                ruleForm: {
                    name: '',
                },
                rules: {


                },
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
            };
        },
        mounted() {
            // this.getCookie();
        },
        components: {
            headerSelect,
            personalLeft,
            fonter,
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
             onSubmit() {
                console.log('submit!');
            }
        }
    };
</script>
<style scoped>
    .data {
        width: 1200px;
        min-width: 1200px;
        margin: 0 auto;
        display: flex;
    }
    .left {
        width: 250px;
        margin-top: 30px;
    }
    .mian {
        width:1020px;
        height:850px;
        background:rgba(255,255,255,1);
        box-shadow:0px 6px 12px 0px rgba(8,1,3,0.06);
        border-radius:6px;
        margin: 30px 0px 0px 60px;
    }
    .mian-title {
        width:100%;
        height:40px;
        border-bottom: 1px solid #E8ECEE;
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(64,68,71,1);
        /* line-height:40px; */
    }
    .mian-title p {
        width:68px;
        height:40px;
        line-height:40px;
        border-bottom: 1px solid #339999;
        margin: 15px 0px 0px 27px;
    }
    .modified-data {
        width: 200px;
        margin: 0 auto;
    }
    .avatar-uploader {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-image: url(../../assets/head.jpg);
        background-size: contain;
        color: #ffffff;
    }
    .avatar-uploader i {
        margin-top: 17px;
    }
    .img-limit {
        margin-top: 10px;
        font-size: 12px;
    }
    .modified-from {
        width: 200px;
        margin: 0 auto;
    }
    .modified-name {
        margin-top: 15px;
        font-size: 16px;
    }
    .modified-name span {
        color: #339999;
        font-size: 12px;
        margin-left: 15px;
    }
    .modified-el {
        width: 280px;
        margin: 20px 0px 0px -80px;
    }
    .phone {
        color: #999;
        font-size: 12px;
    }
    .el-input__inner {
        width: 200px;
    }
    .picker>>>input {
        width: 180px;
    }
    .save {
        width:383px;
        height:40px;
        background:#339999;
        border:2px solid #339999;
        border-radius:6px;
        border: none;
    }
</style>
<template>
  <div class="taskRelease">
      <headerSelect />
      <div class="releaseContent">
           <div class="clinchTitle">
                <p>任务大厅-任务发布</p>
                <span></span>
            </div>
            <div>
                <el-form ref="form" :model="form" label-width="180px" :rules="rules" class="releaseForm">
                    <el-form-item label="任务名称：" required prop="name">
                        <el-input v-model="form.name" placeholder="填写你要发布的任务名称"></el-input>
                    </el-form-item>
                    <el-form-item label="上传图片：">
                        <el-upload
                            class="avatar-uploader"
                            :show-file-list="false"
                            :action="uploadAction"
                            :headers="uploadheaders"
                            :on-success="handleSuccess"
                            :before-upload="beforeAvatarUpload"
                            :on-remove="handleRemove">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        <!-- <el-upload
                            class="upload-demo"
                            :action="uploadAction"
                            :headers="uploadheaders"
                            :on-success="handleSuccess"
                            :on-remove="handleRemove"
                            list-type="picture">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload> -->
                    </el-form-item>
                    <el-form-item label="行业类别：" required prop="industryId">
                        <el-select v-model="form.industryId" placeholder="请选择" style="width:380px">
                            <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="是否议价：" required prop="isBargain">
                        <el-select v-model="form.isBargain" placeholder="请选择" style="width:380px">
                            <el-option
                            v-for="item in bargaining"
                            :key="item.id"
                            :label="item.label"
                            :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="任务类型：" required prop="typeName">
                        <el-select v-model="form.typeName" placeholder="请选择" style="width:380px">
                            <el-option
                            v-for="item in type"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                            </el-option>
                        </el-select>
                        <!-- <el-radio-group v-model="form.typeName">
                            <el-radio v-for="(item,index) in type" :key="index"  :label="item.id">{{item.name}} <i></i></el-radio>
                            <el-radio label="佣金任务">佣金任务 <i>（通常情况为个人发布，任务周期短，按完成数量或要求发放酬劳）</i></el-radio>
                            <el-radio label="项目任务">项目任务<i>（有一定的项目周期，一般为1周～1个月不等）</i></el-radio>
                            <el-radio label="包月任务">包月任务<i>（为你分配一对一的技能专项服务方，包月制，薪酬月结）</i></el-radio>
                        </el-radio-group> -->
                    </el-form-item>
                    <el-form-item label="周期：" required prop="period">
                        <el-input type="number" v-model="form.period" placeholder="3个月"></el-input>
                    </el-form-item>
                    <el-form-item label="价格：" required prop="endPrice">
                        <el-input type="number" v-model="form.startPrice" style="width:176px"></el-input>  至  <el-input type="number" v-model="form.endPrice" style="width:176px"></el-input>
                    </el-form-item>
                    <el-form-item label="技能要求：">
                        <el-input v-model="form.skillsRequired" placeholder="技能要求"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="驻场要求：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item> -->
                    <el-form-item label="竞标周期：" required class="bidding" prop="endTime">
                        <el-date-picker
                            v-model="form.endTime"
                            value-format="yyyy-MM-dd"
                            placeholder="选择日期"
                            :picker-options="pickerOptions">
                        </el-date-picker>
                        <p>超过竞标周期，则自动取消该任务</p>
                    </el-form-item>
                    <el-form-item label="服务方要求：" required prop="resource" @change="onSubmitAdd">
                        <el-radio-group v-model="form.resource">
                            <el-radio :label="1">不限</el-radio>
                            <el-radio :label="2">个人</el-radio>
                            <el-radio :label="3">团队</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="指定方手机号：" required v-if="form.resource!=1" class="membeName">
                        <el-input type="text" v-model="form.memberName"></el-input>
                        <el-button type="text" @click="userName" class="stureRelease">搜索</el-button>
                    </el-form-item>
                    <el-form-item label="任务描述：">
                        <el-input type="textarea" v-model="form.des" style="width:380px;"></el-input>
                    </el-form-item>
                    <el-form-item label="上传附件：" >
                        <el-upload
                            class="upload-demo"
                            :action="uploadAction"
                            :headers="uploadheaders"
                            :on-success="handlePreview"
                            :on-remove="handleRemove"
                            :before-upload="handleUpload"
                            multiple
                            >
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传不超过2MB文件</div>
                        </el-upload>
                    </el-form-item>
                    <!-- <el-form-item class="release">
                        <el-button type="text" @click="onSubmit" class="cancelRelease">下载附件</el-button>
                    </el-form-item> -->
                    <el-form-item class="release">
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox  label="1">我已阅读过平台 <i>《项目规则协议》</i>  ，并遵守</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item class="release">
                        <el-button type="text" @click="onSubmitAdd('form')" class="stureRelease">我要发布</el-button>
                        <el-button type="text" @click="onSubmit('form')" class="cancelRelease">取消发布</el-button>
                    </el-form-item>
                </el-form>
            </div>
      </div>
      <div>
          <el-dialog
            title="请确认信息"
            :visible.sync="dialog"
            width="30%"
            >
            <p class="realname">姓名：{{this.realname}}</p>
            <p class="realname">用户名：{{this.form.zgTaskBidDto.memberName}}</p>
            <p class="realname">手机号：{{this.phone}}</p>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialog=false">确 定</el-button>
              <el-button @click="submit">取 消</el-button>
              
            </span>
          </el-dialog>
      </div>
 
      <fonter />
  </div>
</template>

<script>
import headerSelect from "@/components/headerSelect";
import fonter from "@/components/fonter";
import { taskDetails, zgtasktype, order } from "@/api/task/taskList";
import { pay } from '@/api/task/paycenter'
// import QrcodeVue from 'qrcode.vue' 
import QRCode  from "qrcodejs2"
import { login } from "@/api/login";
export default {
  data(){
      var validatePass = (rule, value, callback) => {
            if (this.form.startPrice>this.form.endPrice) {
                callback(new Error('最高价不能低于最低价'));
            } else {
                callback();
            }
            };
      return{
            pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() < Date.now();
                },
            },
            form: {
                name: '',
                resource:1,
                des: '',
                icon:"",
                industryId:"", //行业类别
                isBargain:"", //议价
                typeName:"",//任务类型
                period:"",//time
                startPrice: "",
                endPrice: "",
                skillsRequired:"",//技能要求
                endTime: "",
                memberName:"", //指定方名称
                zgTaskAttachDtos:[],//附件
                zgTaskBidDto:{
                },

                // ZGTaskOrderDto:{//任务订单
                //     actualAmount:'',
                //     taskMemberId:"",
                //     taskMemberName:"",
                //     taskName:"",

                // }
            },
            rules:{
                name: [
                    { required: true, message: '请输入任务名称', trigger: 'blur' },
                    { min: 2, message: '长度知识两个字符', trigger: 'change' }
                ],
                industryId: [
                    { required: true, message: '请选择行业类别', trigger: 'blur' }
                ],
                typeName: [
                    { required: true, message: '请选择任务类型', trigger: 'blur' }
                ],
                period: [
                    { required: true, message: '请输入周期', trigger: 'blur' }
                ],
                endTime: [
                    { required: true, message: '请选择竞标结束日期', trigger: 'blur' }
                ],
                isBargain: [
                    { required: true, message: '请选择是否可议价', trigger: 'blur' }
                ],
                endPrice: [
                    { required: true, message: '价格不能为小于0', trigger: 'blur' },
                    { validator: validatePass, trigger: 'blur' }
                ],
                resource: [
                    { required: true, message: '请选服务要求', trigger: 'blur' }
                ],
                // memberName: [
                //     { required: true, message: '请输入指定方手机号', trigger: 'blur' }
                // ],
                // desc: [
                //     { required: true, message: '请填写活动形式', trigger: 'blur' }
                // ]
            },
            options: [],
            bargaining:[
                {
                    id: '0',
                    label: '可议价'
                },
                {
                    id: '1',
                    label: '不可议价'
                }
            ],
            bargainId:"",
            value: '',
            checkList:[],
            uploadheaders: { "X-Access-Token": sessionStorage.getItem("token") },
            uploadAction: this.baseURL+`/taskcenter/upload/upload`,
            fileList:[],
            restaurants: [],
            state: '',
            filePath:"",
            type:[],
            dialog:false, //确认信息弹框
            realname:"", //姓名
            phone:"",
            username:"",
            imageUrl: ""
      }
  },
  components:{
     headerSelect,
     fonter
   },
  created(){
      this.zgtindtype();
      this.zgtasktype();
  },
  methods:{
      onSubmit(formName) {
          this.$refs[formName].resetFields();
          this.form.skillsRequired = "";
          this.form.startPrice = "";
          this.form.des = "";
          this.imageUrl = "";
          this.$router.push({
              name:"taskHall"
          })
        // console.log('submit!');
        //  window.location.href = `http://fds.interstrangers.com/${this.filePath}`; //下载图片  勿删
      },
    //   添加任务
      onSubmitAdd(formName){
            let url = `${taskDetails.taskAdd}`;
            
           this.$refs[formName].validate((valid) => { //验证表单，带星号的不能为空
                if (valid) {

                    if(this.checkList.length==0){
                        return this.$message.warning("请选择协议")
                    };
                    if(this.form.resource!=1&&this.form.zgTaskBidDto.memberId==""){
                        return this.$message.warning("请搜索指定方信息")
                    }
                    this.axios.post(url,this.form).then(res=>{
                        if(res.data.code==200){
                            this.$message.success(res.data.message);
                            this.$router.push({
                                name: 'published',
                            })
                            this.$refs[formName].resetFields();
                            this.form.skillsRequired = "";
                            this.form.startPrice = "";
                            this.form.des = "";
                            this.imageUrl = ""
                        }else{
                            this.$message.error("服务器繁忙");
                        }
                    })
                } else {
                    return false;
                }
           });
      },
    // 所有行业类型
        zgtindtype(){
            let url = `${zgtasktype.tindtype}`;
            this.axios.get(url).then(res=>{
                if(res.data.code==200){
                    this.options = res.data.result
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        //   任务类型
        zgtasktype(){
            let url = `${zgtasktype.type}`;
            this.axios.get(url).then(res=>{
                if(res.data.code==200){
                    this.type = res.data.result
                }
            }).catch(err=>{
                console.log(err)
            })
        },
      handlePreview(res, file,fileList) {
        if(res.code == 200){
            let array = [];
            let item = {
              content: file.size,
              path: file.name,
              filePath: res.result.filePath,
              cnName: res.result.cnName,
              enName: res.result.enName,
              suffix: res.result.suffix
            };
            this.filePath = item.filePath
            array.push(item);
            this.form.zgTaskAttachDtos = array;
            console.log(this.form.zgTaskAttachDtos)
        }else{
          this.$message.error(res.message);
        }
      },
      handleUpload(file) {
        console.log(file,5555)
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isLt2M;
      },
      handleSuccess(res, file,fileList){
          if(res.code == 200){
            this.form.icon = res.result.filePath;
            this.imageUrl = 'http://fds.interstrangers.com' + res.result.filePath
        }else{
          this.$message.error(res.message);
        }
      },
    //   搜索指对方信息接口
      userName(){
          let url = `${login.userName}`;
          let data = {
              username: this.form.memberName
          }
          this.axios.get(url,{params:data}).then(res=>{
              if(res.data.code==200){
                  this.dialog = true;
                  this.form.zgTaskBidDto.memberId = res.data.result.id;
                  this.form.zgTaskBidDto.memberName = res.data.result.username;
                  this.realname = res.data.result.realname;
                  this.phone = res.data.result.phone;
              }
              
          }).catch(err=>{
              console.log(err);
              this.$message.error("服务器繁忙");
          })
      },
      beforeAvatarUpload(file) {
          console.log(file)
            const isJPG = file.type === 'image/jpeg';
            const isPNG = file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG &&!isPNG) {
             this.$message.error('上传头像图片只能是 JPG或者PNG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG||isPNG && isLt2M;
      },




    // 信息不正确按钮
    submit(){
        // this.form.memberName = "";
        this.dialog = false;
    }
  }
}
</script>
<style scoped>
    .releaseContent{
        width: 1000px;
        margin: 0 auto;
        background: #ffffff;
        margin-top: 30px;
    }
    .releaseForm{
        width: 600px;
        margin: 60px auto;
    }
    .clinchTitle{
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #E8ECEE;
    }
    .clinchTitle p{
        padding-top: 22px;
        padding-left: 20px;
        color: #000000;
        font-size: 16px;
        font-weight: 400;
    }
    .clinchTitle span{
        margin-left: 20px;
        width: 34px;
        height: 2px;
        background: #339999;
        display: inline-block;
        margin-top: 20px
    }
    .el-input{
        width: 380px;
    }
    .el-radio>>>.el-radio__label,.is-checked>>>.el-radio__label{
        color: #000000;
       
    }
    .el-radio{
        margin-top: 10px
    }
    .el-radio>>>.el-radio__label i{
        color: #999;
        font-style: normal;
    }
    .el-form-item >>>.el-form-item__label{
        color: #000000;
    }
    .el-form-item>>>.el-form-item__content{
        color: #999;
    }
    .release{
        margin: 10px auto;
        text-align: center;
    }
    .release i{
        color: #339999;
        font-style: normal;
    }
    .stureRelease{
        width: 102px;
        height: 40px;
        text-align: center;
        color: #ffffff;
        background: #339999;
    }
    .cancelRelease{
        width: 102px;
        color: #339999;
        text-align: center;
        margin-bottom: 60px;
    }
    .el-radio>>>.el-radio__input.is-checked .el-radio__inner {
        border-color: #339999 !important;
        background: #339999 !important;
    }
    .el-input>>>.el-input__inner{
        border: none;
        border-bottom: 1px solid #999;
        border-radius: 0;
    }
    .el-form-item.is-required:not(.is-no-asterisk)>>>.el-form-item__label:before{
        color:#339999 !important;
    }
    .el-checkbox>>>.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox>>>.el-checkbox__input.is-indeterminate .el-checkbox__inner{
        border-radius: 50%;
        color: #339999;
        background: #339999;
    }
    .el-checkbox>>>.el-checkbox__input .el-checkbox__inner{
        border: 1px solid #339999;
        border-radius: 50%;
    }
    .bidding p{
        font-size: 10px;
    }
    .cancel{
        color:#339999;
        border: none;
    }
    .el-button--primary{
        background-color: #339999;
        border: none;
    }
    .membeName >>>.el-form-item__content{
        display: flex;
    }
    .membeName >>>.el-form-item__content  .el-input{
        width: 280px;
    }
    .Container{
        margin-bottom: 20px;
    }
    .realname{
        margin: 10px 20px;
        font-size: 16px;
    }
    .avatar-uploader >>>.el-upload {
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<template>
  <div class="taskRelease">
      <headerSelect />
      <div class="releaseContent">
           <div class="clinchTitle">
                <p>任务大厅-任务发布</p>
                <span></span>
            </div>
            <div>
                <el-form ref="form" label-width="180px" class="releaseForm">
                    <el-form-item label="任务名称：" required>
                        <el-input v-model="form.name" placeholder="填写你要发布的任务名称"></el-input>
                    </el-form-item>
                    <el-form-item label="上传图片：">
                        <el-upload
                            class="upload-demo"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            >
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text"><em>点击上传</em></div>
                            <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="行业类别：" required>
                        <el-select v-model="form.industryId" placeholder="请选择" style="width:380px">
                            <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="是否议价：" required>
                        <el-select v-model="form.isBargain" placeholder="请选择" style="width:380px">
                            <el-option
                            v-for="item in bargaining"
                            :key="item.id"
                            :label="item.label"
                            :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="任务类型：" required>
                        <el-radio-group v-model="form.typeName">
                            <el-radio label="佣金任务">佣金任务 <i>（通常情况为个人发布，任务周期短，按完成数量或要求发放酬劳）</i></el-radio>
                            <el-radio label="项目任务">项目任务<i>（有一定的项目周期，一般为1周～1个月不等）</i></el-radio>
                            <el-radio label="包月任务">包月任务<i>（为你分配一对一的技能专项服务方，包月制，薪酬月结）</i></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="周期：" required>
                        <el-input v-model="form.period" placeholder="3个月"></el-input>
                    </el-form-item>
                    <el-form-item label="薪资：" required>
                        <el-input type="number" v-model="form.startPrice" style="width:176px"></el-input>  至  <el-input type="number" v-model="form.endPrice" style="width:176px"></el-input>
                    </el-form-item>
                    <el-form-item label="技能要求：">
                        <el-input v-model="form.skillsRequired" placeholder="技能要求"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="驻场要求：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item> -->
                    <el-form-item label="竞标周期：" required class="bidding">
                        <el-date-picker
                            v-model="form.endTime"
                            value-format="yyyy-MM-dd"
                            placeholder="选择日期">
                        </el-date-picker>
                        <p>超过竞标周期，则自动取消该任务</p>
                    </el-form-item>
                    <el-form-item label="服务方要求：" required>
                        <el-radio-group v-model="form.resource">
                            <el-radio label="1">不限</el-radio>
                            <el-radio label="2">个人</el-radio>
                            <el-radio label="3">团队</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <!-- <el-form-item label="指定方手机号：" required>
                        <el-input type="text" v-model="form.des"></el-input>
                        <el-button type="text" @click="userName" class="cancelRelease">搜索</el-button>
                    </el-form-item> -->
                    <el-form-item label="任务描述：">
                        <el-input type="textarea" v-model="form.des" style="width:380px;"></el-input>
                    </el-form-item>
                    <el-form-item>
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
                            <div slot="tip" class="el-upload__tip">只能上传不超过500kb文件</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item class="release">
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox  label="1">我已阅读过平台 <i>《项目规则协议》</i>  ，并遵守</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item class="release">
                        <el-button type="text" @click="onSubmitAdd" class="stureRelease">我要发布</el-button>
                        <el-button type="text" @click="onSubmit" class="cancelRelease">取消发布</el-button>
                    </el-form-item>
                </el-form>
            </div>
      </div>
      <fonter />
  </div>
</template>

<script>
import headerSelect from "@/components/headerSelect";
import fonter from "@/components/fonter";
import { taskDetails, zgtasktype } from "@/api/task/taskList"
import { login } from "@/api/login"
export default {
  data(){
      return{
           form: {
                name: '',
                resource:"",
                des: '',
                industryId:"",
                isBargain:"",
                typeName:"",//任务类型
                period:"",//time
                startPrice: 0,
                endPrice: 0,
                skillsRequired:"",//技能要求
                endTime: "",
                memberId:"",
                zgTaskAttachDtos:[],//附件
                ZGTaskBidDto:{
                    memberId:""
                }
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
            uploadAction: this.baseURL + `/taskcenter/upload/upload`,
            fileList:[],
            restaurants: [],
            state: ''
      }
  },
  components:{
     headerSelect,
     fonter
   },
  created(){
      this.zgtindtype();
      this.username = sessionStorage.getItem("username");
      this.form.memberId = sessionStorage.getItem("memberId");
    //   this.userName()
  },
  methods:{
      onSubmit() {
        console.log('submit!');
      },
    //   添加任务
      onSubmitAdd(){
          if(this.checkList.length==0){
                return this.$message.warning("请选择协议")
            };
          let url = `${taskDetails.taskAdd}`;
          this.axios.post(url,this.form).then(res=>{
            //   console.log(res.data)
          })
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
            array.push(item);
            this.form.zgTaskAttachDtos = array;
            console.log(this.form.zgTaskAttachDtos)
        }else{
          this.$message.error(res.message);
        }
      },
      handleUpload(file) {
       console.log(file,5555)
      },
      userName(){
          let url = `${login.userName}`;
          this.axios.get(url,{params:this.state}).then(res=>{
              console.log(res)
          })
      },
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
</style>

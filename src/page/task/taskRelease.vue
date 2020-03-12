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
                    <el-form-item label="任务类别：" required>
                        <el-select v-model="value" placeholder="请选择" style="width:380px">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="是否议价：" required>
                        <el-select v-model="bargainId" placeholder="请选择" style="width:380px">
                            <el-option
                            v-for="item in bargaining"
                            :key="item.id"
                            :label="item.label"
                            :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="任务类型：" required>
                        <el-radio-group v-model="form.resource">
                            <el-radio label="1">佣金任务 <i>（通常情况为个人发布，任务周期短，按完成数量或要求发放酬劳）</i></el-radio>
                            <el-radio label="2">项目任务<i>（有一定的项目周期，一般为1周～1个月不等）</i></el-radio>
                            <el-radio label="3">包月任务<i>（为你分配一对一的技能专项服务方，包月制，薪酬月结）</i></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="周期：" required>
                        <el-input v-model="form.name" placeholder="3个月"></el-input>
                    </el-form-item>
                    <el-form-item label="薪资：" required>
                        <el-input v-model="form.name" style="width:176px"></el-input>  至  <el-input v-model="form.name" style="width:176px"></el-input>
                    </el-form-item>
                    <el-form-item label="技能要求：">
                        <el-input v-model="form.name" placeholder="技能要求"></el-input>
                    </el-form-item>
                    <el-form-item label="驻场要求：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="竞标周期：" required class="bidding">
                        <el-input v-model="form.name" placeholder="例如7天"></el-input>
                        <p>超过竞标周期，则自动取消该任务</p>
                    </el-form-item>
                    <el-form-item label="服务方要求：" required>
                        <el-radio-group v-model="form.resource">
                            <el-radio label="4">不限</el-radio>
                            <el-radio label="5">个人</el-radio>
                            <el-radio label="6">团队</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="任务描述：">
                        <el-input type="textarea" v-model="form.desc" style="width:380px;"></el-input>
                    </el-form-item>
                    <el-form-item class="release">
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox  label="1">我已阅读过平台 <i>《项目规则协议》</i>  ，并遵守</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item class="release">
                        <el-button type="text" @click="onSubmit" class="stureRelease">我要发布</el-button>
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
export default {
  data(){
      return{
           form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            options: [{
                value: '选项1',
                label: '人工智能'
                }, {
                value: '选项2',
                label: '大数据'
                }, {
                value: '选项3',
                label: '物联网'
                }, {
                value: '选项4',
                label: '云计算'
                }, {
                value: '选项5',
                label: '游戏开发'
                }],
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
      }
  },
  components:{
     headerSelect,
     fonter
   },
  created(){

  },
  methods:{
      onSubmit() {
        console.log('submit!');
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
</style>

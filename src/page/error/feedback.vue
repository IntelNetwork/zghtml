<template>
  <div class="loginTop">
    <headerSelect></headerSelect>
    <div class="feedback">
        <div class="clinchTitle">
            <div>
                <p>意见反馈</p>
                <span></span>
            </div>
        </div>
        <div class="feedbackContent">
            <div>
                <p>* 1、你相对网站提出哪些意见：</p>
                <div class="problem">
                    <span class="active">网站功能</span>
                    <span>页面信息</span>
                    <span>操作功能</span>
                    <span>出错</span>
                    <span>其它</span>
                </div>
            </div>
            <div class="text">
                <p>*   2、我们存在那些不足：<i>如有具体页面，可将链接粘贴在下方</i></p>
                <div class="textarea">
                    <el-input type="textarea" v-model="desc" :rows="10" placeholder="请将您的建议或问题详细的告诉我们，我们会认真对待并不断完善和优化"></el-input>
                </div>
            </div>
            <div class="text">
                <p>3、如需图片来说明，请上传：<i>（支持PNG、JPG、JPEG格式)</i></p>
                <div class="textarea">
                    <el-upload
                        action="#"
                        list-type="picture-card"
                        :auto-upload="false">
                            <i slot="default" class="el-icon-plus"></i>
                            <div slot="file" slot-scope="{file}">
                                <img
                                    class="el-upload-list__item-thumbnail"
                                    :src="file.url" alt=""
                                >
                                <span class="el-upload-list__item-actions">
                                    <span
                                    class="el-upload-list__item-preview"
                                    @click="handlePictureCardPreview(file)"
                                    >
                                    <i class="el-icon-zoom-in"></i>
                                    </span>
                                    <span
                                    v-if="!disabled"
                                    class="el-upload-list__item-delete"
                                    @click="handleDownload(file)"
                                    >
                                    <i class="el-icon-download"></i>
                                    </span>
                                    <span
                                    v-if="!disabled"
                                    class="el-upload-list__item-delete"
                                    @click="handleRemove(file)"
                                    >
                                    <i class="el-icon-delete"></i>
                                    </span>
                                </span>
                            </div>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </div>
            </div>
            <div>
                <p>4、请留下您的信息，以便我们回访或及时反馈</p>
                <div class="textarea">
                    <el-input class="input" v-model="input" placeholder="你的手机号"></el-input>
                </div>
            </div>
            <div>
                <el-button type="text" class="submit">提交</el-button>
            </div>
        </div>
    </div>
    <fonter />
  </div>
</template>
<script>
import headerSelect from "@/components/headerSelect";
import fonter from "@/components/fonter";
export default {
  data() {
    return {
        desc:"",
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        input:"",
    };
  },
  components:{
      headerSelect,
      fonter
  },
  mounted() {

  },
  methods: {
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
  }
};
</script>
<style scoped>
    i{
        font-style: normal;
    }
    .feedback{
        width: 1000px;
        margin: 30px auto;
        background: #ffffff;
        margin-bottom: 100px;
    }
    .clinchTitle{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #E8ECEE;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .clinchTitle p{
        /* padding-top: 20px; */
        padding-left: 20px;
        color: #666;
        font-size: 16px;
        font-weight: 400;
    }
    .clinchTitle span{
        margin-left: 20px;
        width: 34px;
        height: 2px;
        background: #339999;
        display: inline-block;
        margin-top: 10px
    }
    .feedbackContent{
        padding: 58px 100px;
        font-size: 14px;
    }
    .problem{
        margin: 20px 0;
    }
    .problem span{
        width:128px;
        height:30px;
        border:1px solid rgba(205,204,205,1);
        border-radius:6px;
        display: inline-block;
        text-align: center;
        line-height: 30px;
        margin-right: 20px;
        cursor: pointer;
    }
    .problem .active{
        border:1px solid rgba(51,153,153,1);
        border-radius:6px;
    }
    .textarea{
        margin: 20px 0;
    }
    .text p i{
        font-size: 12px;
        color: #666666;
    }
    .input{
        width: 384px;
        height: 40px;
    }
    .submit{
        width: 384px;
        color: #ffffff;
        background: #339999;
        margin: 10px 0 50px 0;
    }
</style>
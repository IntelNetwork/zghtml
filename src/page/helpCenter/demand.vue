<template>
  <div>
    <div class="content">
        <div class="banner">
            <span class="cover"></span>
            <h2>帮助中心</h2>
        </div>
        <div class="forgotCenter">
            <helpLeft />
            <div class="forgotRight">
                <div class="password">
                    <h3><i class="el-icon-star-off"></i>需求方指南</h3>
                </div>
                <div class="demand">
                    <div class="demandContent">
                        <div class="demandImg">
                            <img src="../../assets/top.jpg" alt="">
                        </div>
                        <div class="demandtitle">
                            <h4>一、发布项目需求</h4>
                            <p> 
                                注册成为智工网用户即可快速发布您的项目需求，
                                有明确的需求及报价的项目发布成功后即开始接受开发方的报名。
                                此外你还可以通过《自助估价系统》对项目进行报价估算。
                            </p>
                        </div>
                    </div>
                    <div class="demandContent">
                        <div class="demandtitle">
                            <h4>一、发布项目需求</h4>
                            <p> 
                                注册成为智工网用户即可快速发布您的项目需求，
                                有明确的需求及报价的项目发布成功后即开始接受开发方的报名。
                                此外你还可以通过《自助估价系统》对项目进行报价估算。
                            </p>
                        </div>
                        <div class="demandImg">
                            <img src="../../assets/top.jpg" alt="">
                        </div>
                    </div>
                    <div class="demandContent">
                        <div class="demandImg">
                            <img src="../../assets/top.jpg" alt="">
                        </div>
                        <div class="demandtitle">
                            <h4>一、发布项目需求</h4>
                            <p> 
                                注册成为智工网用户即可快速发布您的项目需求，
                                有明确的需求及报价的项目发布成功后即开始接受开发方的报名。
                                此外你还可以通过《自助估价系统》对项目进行报价估算。
                            </p>
                        </div>
                    </div>
                    <div class="demandContent">
                        <div class="demandtitle">
                            <h4>一、发布项目需求</h4>
                            <p> 
                                注册成为智工网用户即可快速发布您的项目需求，
                                有明确的需求及报价的项目发布成功后即开始接受开发方的报名。
                                此外你还可以通过《自助估价系统》对项目进行报价估算。
                            </p>
                        </div>
                        <div class="demandImg">
                            <img src="../../assets/top.jpg" alt="">
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <fonter />
  </div>
</template>
<script>
import helpLeft from "@/components/personalCenter/helpLeft";
import fonter from "@/components/fonter";
export default {
  data() {
    return {
        input4:"",
    };
  },
  components: {
    helpLeft,
    fonter,
  },
  created() {},
  methods: {
      
  }
};
</script>
<style type="text/css" scoped>
.banner {
    background: url(../../assets/banner.png) no-repeat;
    height: 160px;
    width: 100%;
    position: relative;
    color: #ffffff;
    z-index: 10;
    line-height: 160px;
    background-size: 100% 100%;
}
.banner .cover {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
.banner h2{
    text-align: center;
    font-size: 36px;

}
.forgotCenter{
    width: 1000px;
    margin: 16px auto;
    display: flex;
    justify-content: space-between;
}

.forgotRight{
    width: 710px;
    background: #ffffff;
    padding: 0 30px;
}
.password{
    font-size: 18px;
    color: #333333;
    height: 70px;
    border-bottom: 1px solid #EAEAEA;
    line-height: 70px;
}
.password h3 i{
    margin-right: 16px;
}
.demandContent{
    display: flex;
    margin-top: 48px;
}
.demandImg{
    margin-right: 30px;
}
.demandImg img{
    width: 114px;
    height: 104px;
}
.demandtitle{
    /* width: 420px; */
}
.demandtitle h4{
    color: #333333;
    font-size: 18px;
    margin-bottom: 10px;
}
.demandtitle p{
    color: #999999;
    font-size: 14px;
    line-height: 30px;
}
</style>

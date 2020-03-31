<template>
  <div class="teamApply">
      <headerSelect />
        <div class="teamContent">
            <div class="left">
                <membersLeft />
            </div>
            <div class="apply radius">
                <div class="clinchTitle">
                    <p>团队创建</p>
                    <span></span>
                </div>
                <div class="applyContent">
                    <h2>请选择你的团队类型</h2>
                    <p>请认真填写申请资料哦！关爱下我们的审核妹妹吧</p>
                    <div class="personal radius">
                        <img src="../../assets/team/team2.png" alt="">
                        <div>
                            <h3>个人团队<i>1-10人 </i></h3>
                            <p>提供项目协同，进度管理，人人都是创业者</p>
                        </div>
                    </div>
                    <div class="personal radius">
                        <img src="../../assets/team/team3.png" alt="">
                        <div>
                            <h3>企业团队<img src="../../assets/team/team1.png" alt=""></h3>
                            <p>提供项目协同，进度管理，人人都是创业者</p>
                        </div>
                    </div>
                    <el-button type="text" class="stureRelease">创建</el-button>
                </div>
            </div>
        </div>
        <fonter />
  </div>
</template>
<script>
import headerSelect from "@/components/headerSelect";
import fonter from "@/components/fonter";
import membersLeft from "@/components/members/membersLeft";
export default {
    data() {
        return {
            
        };
    },
    components: {
        headerSelect,
        fonter,
        membersLeft
    },
    computed: {
        
    },
    mounted() {
        
    },
    methods: {
        
        

    }
};
</script>
<style scoped>
i{
    font-style: normal;
}
.teamContent{
    width: 1200px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
}
.apply{
    width: 1010px;
    background: #ffffff;
    padding: 0 10px;
    position: relative;
}
.clinchTitle{
    width: 100%;
    height: 42px;
    border-bottom: 1px solid #E8ECEE;
}
.clinchTitle p{
    padding-top: 12px;
    padding-left: 10px;
    color: #333333;
    font-size: 16px;
    font-weight: 400;
}
.clinchTitle span{
    margin-left: 0px;
    width: 100px;
    height: 2px;
    background: #339999;
    display: inline-block;
    /* margin-top: 10px */
}
.applyContent{
    width: 420px;
    position: absolute;
    top: 168px;
    left: 50%;
    transform: translate(-50%);
    line-height: 26px;
}
.applyContent h2{
    color: #333333;
    font-size: 30px;
    font-weight:600;
}
.applyContent p{
    font-size: 14px;
    color: #999999;
}
.applyContent>p{
    margin: 10px 0 30px 0;
}
.personal{
    display: flex;
    border: 1px solid #E6E6E6;
    width: 100%;
    height: 90px;
    padding: 10px;
    align-items: center;
    margin-bottom: 20px;
}
.personal img{
    margin-right: 10px;
}
.stureRelease{
    width: 100%;
    height: 40px;
    color: #ffffff;
    background: #339999;
    border: none;
}
</style>
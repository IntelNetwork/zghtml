<template>
    <div class="withdrawal">
        <headerSelect />
            <div class="banner">
                <img src="../../assets/guest.png" alt="">
            </div>
            <div class="guestHouse">
                <div class="steps">
                    <el-steps :active="active" finish-status="success">
                        <el-step title="步骤 1">
                            <!-- <img slot="icon" src="" alt=""> -->
                            <i slot="icon" class="el-icon-document"></i>
                        </el-step>
                        <el-step title="步骤 2"></el-step>
                        <el-step title="步骤 3"></el-step>
                    </el-steps>
                </div>
                <div class="guestContent">

                </div>
            </div>
        <fonter />
    </div>
</template>
<script>
import headerSelect from "@/components/headerSelect";
// import personalLeft from "@/components/personalCenter/personalLeft";
import fonter from "@/components/fonter";
export default {
  data() {
    return {
       active: 0
    };
  },
  components:{
     headerSelect,
    //  personalLeft,
     fonter
  },
  mounted() {
   
  },
  methods: {
      
  }
};
</script>
<style scoped>
.withdrawal{
    margin: 0 auto;
}
.banner{
    height: 400px;
}
.banner>img{
    width: 100%;
    min-width: 1200px;
    height: 100%;
}
.guestHouse{
    width: 1200px;
    margin: 0 auto;
    padding: 0 90px;
}

</style>

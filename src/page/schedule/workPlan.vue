<template>
  <div class="teamApply">
      <headerSelect />
        <div class="teamContent">
            <div class="left">
                <membersLeft />
            </div>
            <div class="apply radius">
                <div class="applyTop flexBetween">
                    <h3>新的工作计划</h3>
                    <p>返回</p>
                </div>
                <div class="workPlan">
                    <div class="leftPlan"></div>
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
    /* position: relative; */
}
.applyTop{
    height: 50px;
    border-bottom: 1px solid #E9E9E9;
    padding: 0 10px;
    font-size: 12px;
    color: #666666;
}
.applyTop h3{
    color: #333333;
    font-size: 18px;
}
</style>
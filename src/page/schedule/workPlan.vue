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
                    <div class="leftPlan">
                        <div class="formList">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="10px" class="demo-ruleForm">
                                
                                <el-form-item required>
                                     <el-date-picker
                                        v-model="ruleForm.data"
                                        type="datetimerange"
                                        range-separator="-"
                                        :picker-options="pickerOptions"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item prop="name">
                                    <!-- <el-select v-model="ruleForm.num" placeholder="请选择">
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select> -->
                                     <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item prop="name">
                                    <!-- <el-select v-model="ruleForm.num" placeholder="请选择">
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select> -->
                                     <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                            </el-form>
                        </div>
                        <div class="workBotton">
                            <el-button type="success">添加</el-button>
                            <el-button type="success">修改</el-button>
                            <el-button type="success">预览</el-button>
                            <el-button type="success">删除</el-button>
                            <el-button type="success">保存</el-button>
                            <el-button type="success">打印</el-button>
                        </div>
                    </div>
                    <div class="rightPlan">
                        <fullcalendar :events="calendarEvents" @handleDateClick = 'handleDateClick' />
                    </div>
                </div>
            </div>
        </div>
        <fonter />
  </div>
</template>
<script>
import headerSelect from "@/components/headerSelect";
import fullcalendar from "@/components/fullcalendar";
import fonter from "@/components/fonter";
import membersLeft from "@/components/members/membersLeft";
export default {
    data() {
        
        return {
            pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() < Date.now();
                },
            },
            ruleForm:{

            },
            options:[],
            rules:{
            },
            calendarEvents:[],
        };
    },
    components: {
        headerSelect,
        fonter,
        membersLeft,
        fullcalendar
    },
    computed: {
        
    },
    mounted() {
        
    },
    methods: {
       handleDateClick(age){
            console.log(age)
        }

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
.workPlan{
    display: flex;
    margin-top: 20px;
    height: 80%;
    justify-content: space-between;
}
.leftPlan{
    width: 40%;
    position: relative;
}
.rightPlan{
    width: 55%;
}
/* .rightPlan >>> .fc.fc-ltr.fc-unthemed{

} */
.rightPlan >>> .fc.fc-ltr.fc-unthemed .fc-timeGridDay-view >>>.fc-widget-content{
    height:500px !important;
}
.el-input{
    width: 360px;
    
}
.el-input>>>.el-input__inner,.el-input.el-input--suffix>>>.el-input__inner{
    border: none;
    border-bottom: 1px solid #DEE0E3;
    border-radius: 0;
}
/* .el-form-item>>> .el-form-item__content .el-input>>>.el-input__inner{
    border: none;
} */
.el-form-item__content>>>.el-date-editor--datetimerange.el-input, .el-form-item__content>>>.el-date-editor--datetimerange.el-input__inne{
    width: 320px;
}
.el-form >>>.el-range-editor.is-active, .el-form >>>.el-range-editor.is-active:hover{
    border-color: #339999
}
.el-form >>>.el-date-editor--datetimerange.el-input, .el-form >>>.el-date-editor--datetimerange.el-input__inner{
    width:360px
}
.el-form >>>.el-date-editor .el-range-input{
    width: auto;
}
.workBotton{
    position: absolute;
    bottom: 0;
}
.workBotton>>>.el-button--success{
    background: #43C7A5;
    border-color: #43C7A5;
}
.workBotton>>>.el-button{
    padding: 4px 10px;
}
</style>
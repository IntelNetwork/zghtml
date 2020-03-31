<template>
  <div class="teamApply">
      <headerSelect />
        <div class="teamContent">
            <div class="left">
                <membersLeft />
            </div>
            <div class="apply radius">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="日程管理" name="first">
                        <div class="personalSchedule">
                            <div class="scheduleTop flexBetween">
                                <div class="personal flex">
                                    <p class="team" @click="active($event)">个人日程</p>
                                    <p>|</p>
                                    <p @click="active($event)">团队日程</p>
                                </div>
                                <div class="flex time">
                                    <div class="search flex radius">
                                        <i class="el-icon-search"></i>
                                        <el-input v-model="input" placeholder="请输入关键字"></el-input>
                                    </div>
                                    <div>
                                        <p>按时间排序<i class="el-icon-arrow-down"></i></p>
                                    </div>
                                </div>
                            </div>
                            <div class="table">
                                <div class="tableNav flex">
                                    <p>一键全选</p>
                                    <p><span class="el-icon-s-claim"></span> 批量导出</p>
                                    <p><span class="el-icon-s-order"></span> 创建新日程</p>
                                </div>
                                <div>
                                    <el-table
                                        ref="multipleTable"
                                        :data="tableData"
                                        tooltip-effect="dark"
                                        style="width: 100%"
                                        @selection-change="handleSelectionChange">
                                        <el-table-column
                                        label="一键全选"
                                        type="selection"
                                        width="55"
                                        >

                                        </el-table-column>
                                        <el-table-column
                                        prop="address"
                                        width="680">
                                        <template slot-scope="scope">
                                           <h3>{{scope.row.address}}</h3>
                                           <p class="color1">{{scope.row.date}}</p>
                                        </template>
                                        </el-table-column>
                                        <el-table-column width="200">
                                            <template slot-scope="scope">
                                                <el-button size="mini"  type="text"  @click="handle(scope.$index, scope.row)" class="handle">预览</el-button>
                                                <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)" class="handleEdit">编辑</el-button>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </div>
                                <div class="block">
                                    <el-pagination
                                            background
                                            @size-change="handleSizeChange"
                                            @current-change="handleCurrentChange"
                                            :current-page.sync="pageNo"
                                            :page-size="pageSize"
                                            layout="prev, pager, next, total"
                                            :total="total">
                                    </el-pagination>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="项目管理" name="second">项目管理</el-tab-pane>
                    <el-tab-pane label="团队管理" name="third">团队管理</el-tab-pane>
                </el-tabs>
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
            activeName: 'first',
            input:"",
            tableData: [{
                date: '2016-05-03',
                address: '孟嘉靖的工作计划'
            }, {
                date: '2016-05-02',
                address: '孟嘉靖的工作计划'
            }, {
                date: '2016-05-04',
                address: '孟嘉靖的工作计划'
            }, {
                date: '2016-05-01',
                address: '孟嘉靖的工作计划'
            }, {
                date: '2016-05-08',
                address: '孟嘉靖的工作计划'
            }, {
                date: '2016-05-06',
                address: '孟嘉靖的工作计划'
            }, {
                date: '2016-05-07',
                address: '孟嘉靖的工作计划'
            }],
            pageSize:10,
            pageNo:0,
            total:50,

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
        handleClick(){

        },
        active(event){
             let paren = event.currentTarget.parentElement.children;
            for(var i=0;i<paren.length;i++){
                paren[i].className = "";
            }
            event.currentTarget.className = "team";
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        // 编辑
        handleEdit(){

        },
        // 预览
        handle(){

        },
        // 分页
        handleSizeChange(val) {
            this.pageSize = val;
        },
        handleCurrentChange(val) {
            this.pageNo = val;
            
        },
        

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
.el-tabs>>>.el-tabs__header .el-tabs__item:hover{
    color: #333333;
    font-size: 14px;
}
.el-tabs>>>.el-tabs__header .el-tabs__item.is-active{
    color: #333333;
    font-size: 16px;
}
.el-tabs>>>.el-tabs__header .el-tabs__item{
    /* color: #339999; */
    font-size: 14px;
}
/* .el-tabs>>>.el-tabs__nav.is-top{
    padding-left: 10px;
} */
.el-tabs>>>.el-tabs__nav.is-top .el-tabs__active-bar{
    background: #339999;
}
/* .el-tabs__header .el-tabs__item:hover .el-tabs__active-bar{
    background: #339999;
} */
.el-tabs>>>.el-tabs__header .el-tabs__nav-wrap{
    /* width: 50%; */
    border-bottom: 1px solid #E9E9E9;

}
.el-tabs>>>.el-tabs__header .el-tabs__nav-wrap::after {
    background-color: #ffffff;
}
.personalSchedule{
    padding: 0 10px;
}
.scheduleTop{
    /* margin-top: 5px; */
    font-size: 12px;
}
/* .personal .border{
    
} */
.personal p{
    cursor: pointer;
}
.personal p:nth-child(2){
    margin: 0 10px;
    color: #D9D9D9;
}
.team{
    color: #339999;
    background: #F7F7F7;
}
.search{
    width:164px;
    height:24px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(229, 229, 229, 1) !important;
    display: flex;
    align-items: center;
    padding-left: 8px;
    color: #999999;
    margin-right: 16px;
    
}
.search >>>.el-input .el-input__inner {
    border: none;
    height: 20px;
    width: 128px;
    font-size: 12px;
    padding: 0 10px;
}
.time{
    color: #999999;
}
.el-icon-arrow-down{
    margin-left: 4px;
}
.handleEdit{
    color: #339999;
    
}
.handle{
    color: #999999;
    margin-right: 70px;
}
.table{
    position: relative;
}
.tableNav{
    font-size: 12px;
    color: #333333;
    position: absolute;
    top: 16px;
    left: 40px;
    z-index: 200;

}
.tableNav span{
    color: #339999;
}
.tableNav p{
    margin-right: 100px;
    cursor: pointer;
}

.el-pagination.is-background >>> .el-pager li:hover{
    color: #339999;
}
.el-pagination.is-background >>>.el-pager li:not(.disabled).active{
    background: #339999;
    border-radius: 50%;
 
}
.el-pagination.is-background >>> .btn-next, .el-pagination.is-background >>> .btn-prev, .el-pagination.is-background >>> .el-pager li{
    background-color: #ffffff;
    width: 18px;
    height: 20px;
}
.block{
    margin: 40px 0;
    text-align: center;
}
/* .el-checkbox.is-checked>>>.el-checkbox__input.is-checked .el-checkbox__inner{
    background-color: #339999 !important;
    border-color: #339999 !important;
} */
</style>
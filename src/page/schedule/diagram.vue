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
                                    <p @click="active($event)">个人日程</p>
                                    <p>|</p>
                                    <p class="team" @click="active($event)">团队日程</p>
                                </div>
                                <div class="flex time">
                                    <div class="flex">
                                        <p>列表查看</p>
                                        <i class="el-icon-menu"></i>
                                    </div>
                                    <div class="list">
                                        <p>>> 成员列表</p>
                                    </div>
                                </div>
                            </div>
                            <div class="fullcalendar">
                                 <div>
                                     <FullCalendar
                                        ref="fullCalendar"
                                        defaultView="timeGridDay"
                                        locale="zh-cn"
                                        :header="{
                                            left: 'prev,next',
                                            center: 'title',
                                            right: 'timeGridDay,timeGridWeek,dayGridMonth'
                                        }"
                                        :buttonText="buttonText"
                                        :plugins="calendarPlugins"
                                        :weekends="calendarWeekends"
                                        :events="calendarEvents"
                                        :eventLimit="true"
                                        eventLimitText="更多"
                                        @dateClick="handleDateClick"
                                        @eventClick="handleEventClick"
                                        
                                    />
                                 </div>
                                 <div class="membersList">
                                     <div class="">
                                         <div>
                                             <img src="../../assets/top.jpg" alt="">
                                         </div>
                                         <div>
                                             <h3>左轩</h3>
                                             <p>前端开发工程师</p>
                                         </div>
                                         <div>
                                             <i class="el-icon-arrow-down"></i>
                                         </div>
                                     </div>
                                 </div>
                            </div>
                            <!-- <div class="table">
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
                            </div> -->
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
import fullcalendar from "@/components/fullcalendar";
import fonter from "@/components/fonter";
import membersLeft from "@/components/members/membersLeft";

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
export default {
    data() {
        
        return {
            activeName: 'first',
            input:"",
        
             buttonText: {
                // today: '今天',
                month: '月',
                week: '周',
                day: '天',
                list: '列表'
            },
            calendarPlugins: [ // plugins must be defined in the JS
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin // needed for dateClick
            ],
            calendarWeekends: true,
            calendarEvents: [ // initial event data 添加日程
                {
                title: 'Event Now',
                start: new Date(),
                color: '#3EC7A7',
                textColor: '#3EC7A7',
                // eventColor: '#339999',
                // borderColor:"#339999"
                },
                // {
                //     title:'111',
                //     start: new Date()
                // }
            ],
            
            calendarApi: null
        };
    },
    components: {
        headerSelect,
        fonter,
        membersLeft,
        FullCalendar,
    },
    computed: {
        
    },
    mounted () {
      
        this.calendarApi = this.$refs.fullCalendar.getApi()
        console.log(this.calendarApi,"api")
    },
    methods: {
    getCalendarEvents (info, successCallback, failureCallback) {
        
      const events = [
        ...this.calendarEvents,
        {
          title: info.startStr,
          start: info.start.valueOf()
        },
        
      ]
      successCallback(events)
    //   console.log(events)
    },
    toggleWeekends () {
      this.calendarWeekends = !this.calendarWeekends // update a property
    },
    gotoPast () {
      this.calendarApi.gotoDate('2019-08-01') // call a method on the Calendar object
    //   console.log(this.calendarApi)
    },
    handleDateClick (arg) {//添加时间
        // this.times = arg.data
        // console.log(arg)
        // this.calendarEvents.push({ // add new event data
        //   title: '11',
        //   start: arg.date,
        //   color: '#3EC7A7',
        //   allDay: arg.allDay
        // })
        // console.log(this.calendarEvents,5555555)


      if (confirm('您要将事件添加到 ' + arg.dateStr + ' ?')) {
            this.calendarEvents.push({ // add new event data
            title: arg.dateStr,
            start: arg.date,
            allDay: arg.allDay,
            color: '#3EC7A7',
            textColor: '#3EC7A7',
            })
      }
      this.calendarApi.refetchEvents()
    //   this.calendarApi.refetch()
      console.log( this.calendarApi,'pai2')
    },
    handleEventClick (info) {
      alert('Event: ' + info.event.title);
      console.log('已经写好的日程')
    },
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
  },
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
.fc-unthemed >>> th, .fc-unthemed >>> td, .fc-unthemed >>> thead, .fc-unthemed >>> tbody, .fc-unthemed >>> .fc-divider, .fc-unthemed >>> .fc-row, .fc-unthemed >>> .fc-content, .fc-unthemed >>> .fc-popover, .fc-unthemed >>> .fc-list-view, .fc-unthemed >>> .fc-list-heading td{
  background: #ffffff !important;
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
    padding: 4px 10px;
}
.personal p:nth-child(2){
    margin: 0 10px;
    color: #D9D9D9;
    padding: 0;
}
.team{
    color: #339999;
    background: #F7F7F7;
    padding: 4px 10px;
}
.time{
    color: #999999;
}
.fullcalendar{
    margin-top: 20px;
}
.list{
    margin-left: 20px;
}
</style>
<template>
 <div>
     <FullCalendar
      ref="fullCalendar"
      defaultView="timeGridDay"
      locale="zh-cn"
      :header="{
        right: ''
      }"
      :buttonText="buttonText"
      :plugins="calendarPlugins"
      :weekends="calendarWeekends"
      :eventLimit="true"
      eventLimitText="更多"
      @dateClick="handleDateClick"
      @eventClick="handleEventClick"
      
      />
 </div>
 <!-- :events="getCalendarEvents" -->
 <!-- :header="{
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }" -->
 <!-- <div>
     <FullCalendar :buttonText="buttonText" @dateClick="handleDateClick" :plugins="calendarPlugins" locale="zh-cn"  />
 </div> -->
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
export default {
  name: 'fullcalendar_page',
  components: {
    FullCalendar
  },
  data () {
    return {
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
          color: '#3EC7A7'
        },
        {
            title:'111',
            start: new Date()
        }
      ],
      times:"",
      // form:{
      //     title: '测试',
      //     start: '',
      //     color: '#3EC7A7'
      // },
      calendarApi: null
    }
  },
  created(){

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
      console.log(events)
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

    
    //   if (confirm('您要将事件添加到 ' + arg.dateStr + ' ?')) {
    //     this.calendarEvents.push({ // add new event data
    //       title: arg.dateStr,
    //       start: arg.date,
    //       allDay: arg.allDay,
    //       color: '#3EC7A7',
    //     })
    //   }
       this.$emit('handleDateClick',this.calendarEvents)
      // this.calendarApi.refetchEvents()
    },
    handleEventClick (info) {
      alert('Event: ' + info.event.title);
      console.log('已经写好的日程')
    }
  },
  mounted () {
      
    // this.calendarApi = this.$refs.fullCalendar.getApi()
  }
}
</script>
<style scoped>

.fc-content .fc-time-grid-event >>>.fc-time, .fc-content .fc-time-grid-event >>>.fc-title{
  color: #3EC7A7;
}
.fc-time-grid-event>>>.fc-event, .fc-event:hover .fc-title{
  color: #3EC7A7 !important;
}
/* .fc-unthemed >>> th, .fc-unthemed >>> td, .fc-unthemed >>> thead, .fc-unthemed >>> tbody, .fc-unthemed >>> .fc-divider, .fc-unthemed >>> .fc-row, .fc-unthemed >>> .fc-content, .fc-unthemed >>> .fc-popover, .fc-unthemed >>> .fc-list-view, .fc-unthemed >>> .fc-list-heading td{
  background: #ffffff !important;
} */
</style>
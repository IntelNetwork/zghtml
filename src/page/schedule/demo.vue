<template>
 <div>
     <FullCalendar
      ref="fullCalendar"
      defaultView="timeGridDay"
      locale="zh-cn"
      :header="{
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      }"
      :buttonText="buttonText"
      :plugins="calendarPlugins"
      :weekends="calendarWeekends"
      :events="getCalendarEvents"
      :eventLimit="true"
      eventLimitText="更多"
      @dateClick="handleDateClick"
      @eventClick="handleEventClick"
      
      />
 </div>
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
        today: '今天',
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
      form:{
          title: '测试',
          start: '',
          color: '#3EC7A7'
      },
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
        console.log(arg.date)
        // this.calendarEvents.push({ // add new event data
        //   title: 'New Event',
        //   start: arg.date,
        // //   allDay: arg.allDay
        // })



    //   if (confirm('您要将事件添加到 ' + arg.dateStr + ' ?')) {
    //     this.calendarEvents.push({ // add new event data
    //       title: 'New Event',
    //       start: arg.date,
    //       allDay: arg.allDay
    //     })
    //   }
    //   this.calendarApi.refetchEvents()
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
<style rel="stylesheet/scss" lang="scss">
  //用什么插件必须引入相应的样式表，否则不能正常显示
//   @import '~@fullcalendar/core/main.css';
//   @import '~@fullcalendar/daygrid/main.css';
</style>
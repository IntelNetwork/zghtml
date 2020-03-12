<template>
  <div id="insights">
    <div>
      <headerSelect />
    </div>

    <div class="insights">
      <newsNav @handleSelect="handleSelect" />
      <div style="wdith:1200px;padding:40px;background: #ffffff;">
        <div class="insights_content" v-for="(item,index) in news" :key="index">
          <div class="insights_title">
            <span class="time">
              <p style="font-size:24px;">{{item.date}}</p>
              <p>{{item.time}}</p>
            </span>
            <span class="news_border"></span>
          </div>
          <div class="newsTitle">
            <span class="newsTitle_text">
              <h3>{{item.title}}</h3>
            </span>
            <!-- <img src="../../assets/khcfdc.png" alt="" style="width:18px;"> -->
          </div>
        </div>
      </div>
      <div style="margin:10px 0;text-align: center;">
        <!-- <img src="../../assets/new.png" alt="" style="width:1200px;"> -->
      </div>
    </div>
    <div>
      <fonter />
    </div>
  </div>
</template>

<script>
import newsNav from "@/components/newsNav";
import headerSelect from "@/components/headerSelect";
import fonter from "@/components/fonter";
export default {
  data() {
    return {
      news: [
        {
          date: "2019-08-08",
          time: "12:01:45",
          title: "超六成工业行业上半年利润增长"
        }
        //    {
        //        date: "2019-08-08",
        //        time: "12:01:45",
        //        title: "超六成工业行业上半年利润增长"
        //    },
        //    {
        //        date: "2019-08-08",
        //        time: "12:01:45",
        //        title: "超六成工业行业上半年利润增长"
        //    },
      ],
      activeIndex: ""
    };
  },
  components: {
    // 头部挂载
    newsNav,
    fonter,
    headerSelect
  },
  created() {
    // console.log(this.$router.history,555)
  },
  methods: {
    handleSelect() {
      this.activeIndex = 2;
    }
  }
};
</script>

<style scoped>
.insights {
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
}
.insights_content {
  display: flex;
  justify-content: space-around;
  /* height:130px; */
  box-sizing: boder-box;
  border-bottom: 1px dashed #999;
  margin: 20px 0;
  /* padding-top: 10px; */
}
.insights_title {
  display: flex;
  justify-content: space-around;
  width: 180px;
  /* line-height: 40px; */
  /* width: 60%; */
}
.time {
  color: #666;
  font-size: 16px;
  text-align: center;
}
.time p {
  margin-bottom: 20px;
}
.news_border {
  width: 3px;
  height: 43px;
  background: #bfbfbf;
  margin-top: 10px;
}
.newsTitle {
  display: flex;
  justify-content: space-between;
  width: 80%;
  line-height: 60px;
}
.newsTitle img {
  width: 18px;
  height: 18px;
  margin-top: 20px;
}
.newsTitle_text h3 {
  font-size: 24px;
  color: #333;
}
</style>
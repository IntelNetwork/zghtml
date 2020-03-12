<template>
  <div id="information">
      <div>
          <headerSelect />
      </div>
    <div class="information">
      <newsNav />
      <div class="information_content">
        <div class="hotAttention content">
          <div class="hotAttention_img">
            <img src="../../assets/banner1.jpg" alt />
          </div>
          <div>
            <div class="hotAttention_news">
              <span class="hotAttention_title">
                <div></div>
                <h3>热点关注</h3>
                <p>INSTANT NEWS</p>
              </span>
              <span class="more">更多>></span>
            </div>
            <div class="hotAttention_content1 hotAttention_content">
              <span>
                <p>超六成工业行业上半年利润增长</p>
              </span>
              <span>
                <p>预警：化纤市场正式进入资本竞争时代！</p>
              </span>
              <span>
                <p>近十年PTA现货贸易市场最大违约案追踪报道</p>
              </span>
            </div>
          </div>
        </div>
        <div class="content view">
          <div class="information_title">
            <span class="hotAttention_title">
              <div></div>
              <h3>福布观点</h3>
              <p>FUBU INSIGHTS</p>
            </span>
            <span class="more">更多>></span>
          </div>
          <div class="hotAttention">
            <div class="hotAttention_content">
              <p>【每日评述】&nbsp;2019-11-06&nbsp;2019中国纺织企业家年会中国时尚生活方式高峰论坛在宁波召开</p>
              <!-- <span><p>超六成工业行业上半年利润增长</p></span>
                            <span><p>预警：化纤市场正式进入资本竞争时代！</p></span>
              <span><p>近十年PTA现货贸易市场最大违约案追踪报道</p></span>-->
            </div>
            <div class="information_img">
              <img src="../../assets/11.png" alt />
            </div>
          </div>
        </div>
        <div class="content view">
          <div class="information_title">
            <span class="hotAttention_title">
              <div></div>
              <h3>纤厂动态</h3>
              <p>FIBER NEWS</p>
            </span>
            <span class="more">更多>></span>
          </div>
          <div class="hotAttention">
            <div class="hotAttention_content">
              <p>【每日评述】[2019-07-29]近十年PTA现货贸易市场最大违约案追踪报道</p>
              <!-- <span><p>超六成工业行业上半年利润增长</p></span>
                            <span><p>预警：化纤市场正式进入资本竞争时代！</p></span>
              <span><p>近十年PTA现货贸易市场最大违约案追踪报道</p></span>-->
            </div>
            <div class="information_img">
              <img src="../../assets/12.png" alt />
            </div>
          </div>
        </div>
        <div class="content view">
          <div class="information_title">
            <span class="hotAttention_title">
              <div></div>
              <h3>分析报告</h3>
              <p>ANALYSE REPORTS</p>
            </span>
            <span class="more">更多>></span>
          </div>
          <div class="hotAttention">
            <div class="hotAttention_content">
              <p>[2019-10-16]这是一条测试新闻</p>
              <!-- <span><p>超六成工业行业上半年利润增长</p></span>
                            <span><p>预警：化纤市场正式进入资本竞争时代！</p></span>
              <span><p>近十年PTA现货贸易市场最大违约案追踪报道</p></span>-->
            </div>
            <div class="information_img">
              <img src="../../assets/11.png" alt />
            </div>
          </div>
        </div>
        <div class="content view">
          <div class="information_title">
            <span class="hotAttention_title">
              <div></div>
              <h3>指数价格</h3>
              <p>PRICE INDEX</p>
            </span>
            <span class="more">更多>></span>
          </div>
          <div class="hotAttention">
            <div class="hotAttention_content">
              <p>[2019-10-16]这是一条测试新闻</p>
              <!-- <span><p>超六成工业行业上半年利润增长</p></span>
                            <span><p>预警：化纤市场正式进入资本竞争时代！</p></span>
              <span><p>近十年PTA现货贸易市场最大违约案追踪报道</p></span>-->
            </div>
            <div class="information_img">
              <img src="../../assets/12.png" alt />
            </div>
          </div>
        </div>
        <div class="content view">
          <div class="information_title">
            <span class="hotAttention_title">
              <div></div>
              <h3>福布公告</h3>
              <p>FUBU Notice</p>
            </span>
            <span class="more">更多>></span>
          </div>
          <div class="hotAttention">
            <div class="hotAttention_content">
              <span>
                <p>[2019-10-16]测试</p>
              </span>
              <span>
                <p>[2019-10-16]测试公告</p>
              </span>
              <span>
                <p>[2019-10-16]测试公告</p>
              </span>
            </div>
            <div class="information_img">
              <img src="../../assets/11.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div style="margin:10px auto; width:1200px;">
             <img src="../../assets/new.png" alt="">
    </div>-->
    <fonter />
  </div>
</template>

<script>
import newsNav from "@/components/newsNav";
import headerSelect from "@/components/headerSelect";
import fonter from "@/components/fonter";
export default {
  data() {
    return {
      pageNo: "",
      pageSize: "",
      releaseStatus: "",
      title: "",
      typeId: ""
    };
  },
  components: {
    // 头部挂载
    newsNav,
    fonter,
    headerSelect
  },
  created() {
    this.news();
  },
  methods: {
    news() {
      
    }
  }
};
</script>

<style scoped>
.information {
    margin-top: 40px;
}
.information_content {
  background: #ffffff;
  margin: 0 auto;
  width: 1200px;
}
.content {
  width: 1100px;
  margin: 0 auto;
  font-size: 16px;
  color: #333;
  padding: 10px;
}
.hotAttention {
  display: flex;
  justify-content: space-between;
  text-align: left;
}
.hotAttention_img img {
  width: 640px;
  height: 324px;
}
.hotAttention_news {
  width: 380px;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #999999;
  padding-top: 30px;
}
.hotAttention_title {
  /* width: 170px; */
  text-align: left;
}
.hotAttention_title h3 {
  font-size: 26px;
  margin: 20px 0 5px 0;
}
.hotAttention_title p {
  color: #666;
  font-size: 15px;
}
.hotAttention_title div {
  margin-top: -33px;
  width: 170px;
  border: 2px solid #ed1b23;
}
.more {
  margin-top: 10px;
}
.hotAttention_content {
  margin-top: 20px;
  color: #333;
  width: 60%;
}
.hotAttention_content1 {
  margin-top: 20px;
  color: #333;
  width: 100%;
}

.hotAttention_content span p {
  width: 100%;
  height: 40px;
  border-bottom: 1px dashed #999;
  line-height: 40px;
}
.view {
  /* margin-top: 20px; */
  padding-bottom: 50px;
}
.information_title {
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #999;
  padding-top: 30px;
  margin-top: 20px;
}

.information_img img {
  width: 370px;
  height: 280px;
}
</style>
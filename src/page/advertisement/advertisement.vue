<template>
  <div>
    <div>
      <div>
        <headerSelect />
      </div>
      <div class="header">
        <ul class="navscreen">
          <li class="active">全部</li>
          <li @click="news">新闻</li>
          <li>教育</li>
          <li>互联网IT</li>
          <li>人才交流</li>
          <li>金融</li>
          <li>服务</li>
          <li>生活</li>
          <li>零售</li>
          <li>物流</li>
          <li>房地产</li>
          <li>其他</li>
        </ul>
        <div class="main">
          <div class="main-left">
            <div class="APP">
              <p class="APPtltle">新奇网站</p>
              <ul class="APPmain">
                <li v-for="(active,index) in pc" :key="index">
                  <a :href="active.href" target="_blank">{{active.name}}</a>
                </li>
                <li class="more">
                    <a href="#" target="_blank" rel="noopener noreferrer">more <span class="iconfont">&#xe64a;</span></a>
                </li>
              </ul>
            </div>
            <div class="especially">
              <ul class="especially">
                <li>福布云商</li>
                <li>欧讯科技</li>
                <li>久泽电力</li>
                <li>安洁士</li>
                <li>首特华峰</li>
                <li>健佰氏</li>
              </ul>
            </div>
            <div class="APP">
              <p class="APPtltle">新奇APP</p>
              <ul class="APPmain">
                <li v-for="(active,index) in app" :key="index">
                  <a :href="active.href" target="_blank">{{active.appName}}</a>
                </li>
                <li class="more">
                    <a href="#" target="_blank" rel="noopener noreferrer">more <span class="iconfont">&#xe64a;</span></a>
                </li>
              </ul>
            </div>
            <ul class="especially">
              <li>吉邦士</li>
              <li>中亚通茂</li>
              <li>大地园林</li>
              <li>高创特</li>
              <li>精川智能</li>
              <li>大唐种业</li>
            </ul>
            <div class="APP">
              <p class="APPtltle">新奇公众号</p>
              <ul class="APPmain">
                <li v-for="(active,index) in wx" :key="index">
                  <a :href="active.href" target="_blank">{{active.wxName}}</a>
                </li>
                <li class="more">
                    <a href="#" target="_blank" rel="noopener noreferrer">more <span class="iconfont">&#xe64a;</span></a>
                </li>
              </ul>
            </div>
            <!-- <div class="APP">
                            <p class="APPtltle">上升榜</p>
                            <ul class="APPmain">
                                <li v-for="(active,index) in upper" :key="index">{{active}}</li>
                            </ul>
            </div>-->
          </div>
          <div class="ranking-list">
            <div class="rankingtop">
              <p class="ranking-top">排行榜</p>
            </div>
            <div class="rankingmain">
              <div>
                <p class="rankingtltle">
                  <span class="Nos">排名</span>
                  <span class="tName">名字</span>
                  <span class="tRank">一周变化</span>
                </p>
                <ul v-for="(active,index) in rankingtltle" :key="index">
                  <li class="list-three">
                    <span
                      class="BgRed"
                      v-if="active.num==1||active.num==2||active.num==3 "
                    >{{active.num}}</span>
                    <span class="black" v-else>{{active.num}}</span>
                    <span class="tNametwo">
                      <a :href="active.a" target="_blank">{{active.name}}</a>
                    </span>
                    <span class="tNameone">↑ {{active.ranking}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <fonter />
      </div>
    </div>
  </div>
</template>
<script>
import headerSelect from "@/components/headerSelect";
import fonter from "@/components/fonter";
export default {
  data() {
    return {
      rankingtltle: [
        {
          num: "1",
          name: "ZOL热门IT产品排行榜",
          ranking: "1487",
          a: "http://top.zol.com.cn/"
        },
        {
          num: "2",
          name: "百度搜索风云榜",
          ranking: "1455",
          a: "http://top.baidu.com/"
        },
        {
          num: "3",
          name: "豆瓣电影排行榜",
          ranking: "1400",
          a: "https://movie.douban.com/chart"
        },
        {
          num: "4",
          name: "火爆页游排行榜",
          ranking: "1366",
          a:
            "http://bd.soletower.com/baidu_4_xy/22430/index.html?sbd=1&bd_vid=10469664237900575665"
        },
        {
          num: "5",
          name: "2020新歌排行榜",
          ranking: "1365",
          a: "http://www.yue365.com/bang/"
        },
        {
          num: "6",
          name: "财富中文排行榜",
          ranking: "1364",
          a: "http://www.fortunechina.com/rankings/index.htm"
        },
        {
          num: "7",
          name: "实时新闻排行榜",
          ranking: "1300",
          a: "http://news.sina.com.cn/hotnews/"
        },
        {
          num: "8",
          name: "经典有声排行榜",
          ranking: "1000",
          a: "https://www.ximalaya.com/top/"
        },
        {
          num: "9",
          name: "热门网络小说排行榜",
          ranking: "987",
          a: "http://www.jjwxc.net/topten.php?orderstr=5"
        },
        {
          num: "10",
          name: "2020畅销书排行榜",
          ranking: "978",
          a: "http://product.china-pub.com/"
        },
        {
          num: "11",
          name: "中国医院排行榜",
          ranking: "950",
          a: "http://rank.cn-healthcare.com/"
        },
        {
          num: "12",
          name: "网站排行榜",
          ranking: "940",
          a: "https://top.chinaz.com/"
        },
        {
          num: "13",
          name: "漫画排行榜",
          ranking: "930",
          a: "http://comic.u17.com/rank/"
        },
        {
          num: "14",
          name: "开放式基金排行榜",
          ranking: "902",
          a: "http://fund.eastmoney.com/data/fundranking.html"
        },
        {
          num: "15",
          name: "全国空气质量排行榜",
          ranking: "900",
          a: "http://www.pm25.in/rank"
        },
        {
          num: "16",
          name: "2020手机排行榜",
          ranking: "800",
          a: "http://product.cnmo.com/top.html"
        },
        {
          num: "17",
          name: "2020化妆品排行榜",
          ranking: "700",
          a: "https://cosme.pclady.com.cn/products_hot.html"
        },
        {
          num: "18",
          name: "彩票专家排行榜",
          ranking: "690",
          a: "https://www.cjcp.com.cn/sortchannel/"
        },
        {
          num: "19",
          name: "最新网络红人排行榜",
          ranking: "657",
          a: "http://www.ttpaihang.com/vote/rank.php?voteid=621"
        },
        {
          num: "20",
          name: "最新网络红人排行榜",
          ranking: "650",
          a: "https://top.jd.com/"
        }
      ],
      // 1917中文排行https://top.chinaz.com/all/index_1917.html https://top.chinaz.com/all/index_1916.html
      pc: [
        {
          name: "CSDN博客",
          href: "https://blog.csdn.net/"
        },
        {
          name: "晋江文学城",
          href: "http://jjwxc.net/"
        },
        {
          name: "马峰窝",
          href: "http://www.mafengwo.cn/"
        },
        {
          name: "豆丁文库",
          href: "https://www.docin.com/"
        },
        {
          name: "海词词典",
          href: "http://dict.cn/"
        },
        {
          name: "简书",
          href: "https://www.jianshu.com/"
        },
        {
          name: "第一星座",
          href: "https://www.d1xz.net/"
        },
        {
          name: "美食杰",
          href: "https://www.meishij.net/"
        },
        {
          name: "便民查询网",
          href: "https://www.51240.com/"
        },
        {
          name: "有问必答网",
          href: "https://www.120ask.com/"
        },
        {
          name: "豆瓣读书",
          href: "https://book.douban.com/"
        },
        {
          name: "东方财富",
          href: "http://guba.eastmoney.com/"
        },
        {
          name: "沪江网校",
          href: "https://www.hujiang.com/"
        },
        {
          name: "电影网",
          href: "https://www.1905.com/"
        },
        {
          name: "CCTV节目网",
          href: "http://tv.cctv.com/"
        },
        {
          name: "天涯社区",
          href: "http://www.tianya.cn/"
        },
        {
          name: "游民星空",
          href: "https://www.gamersky.com/"
        },
        {
          name: "中国知网",
          href: "https://cnki.net/"
        },
        {
          name: "安居客",
          href: "https://shanghai.anjuke.com/"
        },
        {
          name: "虎牙直播",
          href: "https://www.huya.com/"
        },
        {
          name: "IP地址查询",
          href: "http://ip138.com/"
        },
        {
          name: "PPTV",
          href: "http://www.pptv.com/"
        },
        {
          name: "Mtime时光网",
          href: "http://www.mtime.com/"
        },
        {
          name: "我图网",
          href: "https://www.ooopic.com/"
        },
        {
          name: "凤凰资讯",
          href: "http://news.ifeng.com/"
        },
        {
          name: "雪球",
          href: "https://xueqiu.com/"
        },
        {
          name: "谷歌中国",
          href: "http://www.google.cn/"
        },
        {
          name: "极速漫画",
          href: "http://www.1kkk.com/"
        },
        {
          name: "大众点评",
          href: "http://www.dianping.com/"
        },
        {
          name: "无忧考网",
          href: "https://www.51test.net/"
        },
        {
          name: "逗游网",
          href: "https://www.doyo.cn/"
        },
        {
          name: "时间财务网",
          href: "https://www.680.com/"
        },
        {
          name: "MBA智库",
          href: "https://mbalib.com/"
        },
        {
          name: "穷游网",
          href: "https://www.qyer.com/"
        },
        {
          name: "LOFTER 轻博客",
          href: "http://www.lofter.com/login?urschecked=true"
        },
        {
          name: "虎嗅网",
          href: "https://www.huxiu.com/"
        },
        {
          name: "看准网",
          href: "https://www.kanzhun.com/"
        },
        {
          name: "孔夫子旧书网",
          href: "https://www.kongfz.com/"
        },
        {
          name: "我爱卡",
          href: "https://www.51credit.com/"
        },
        {
          name: "中国广播网",
          href: "http://www.cnr.cn/"
        },
        {
          name: "天级网",
          href: "http://www.yesky.com/"
        },
        {
          name: "网上车市",
          href: "http://www.cheshi.com/"
        },
        {
          name: "土流网",
          href: "https://www.tuliu.com/"
        },
        {
          name: "汉辞网",
          href: "http://www.hydcd.com/"
        },
        {
          name: "西陆网",
          href: "http://www.xilu.com/"
        },
        {
          name: "金投网",
          href: "https://www.cngold.org/"
        },
        {
          name: "领英网",
          href: "https://www.linkedin.com/"
        },
        {
          name: "新东方在线",
          href: "https://www.koolearn.com/"
        },
        {
          name: "电子发烧友",
          href: "http://www.elecfans.com/"
        },
        {
          name: "中国品牌网",
          href: "https://www.chinapp.com/"
        }
      ],
      app: [
        {
          appName: "小小逃生",
          href: "http://www.appchina.com/app/com.cellcrowd.tinyescape.e2"
        },
        {
          appName: "数学宝典",
          href:
            "http://www.appchina.com/app/com.PomegranateApps.MathStudioExpress"
        },
        {
          appName: "偏见",
          href: "http://www.appchina.com/app/com.xuangames.pj"
        },
        {
          appName: "练耳大师",
          href: "http://www.appchina.com/app/com.ggyd.EarPro"
        },
        {
          appName: "123D雕塑",
          href: "http://www.appchina.com/app/com.autodesk.Sculpt"
        },
        {
          appName: "画世界",
          href: "http://www.appchina.com/app/net.huanci.hsj"
        },
        {
          appName: "马云模拟器",
          href: "http://www.appchina.com/app/com.appchina.yugao.2019112201"
        },
        {
          appName: "选择大转盘",
          href: "http://www.appchina.com/app/com.kugou.picker"
        },
        {
          appName: "饥饿派画家",
          href: "http://www.appchina.com/app/com.FlamebaitGames.Passpartout"
        },
        {
          appName: "堆糖",
          href: "http://www.appchina.com/app/com.duitang.main"
        },
        {
          appName: "码字姬",
          href: "http://www.appchina.com/app/cwm.jhy.cwm"
        },
        {
          appName: "配音秀",
          href: "http://www.appchina.com/app/com.happyteam.dubbingshow"
        },
        {
          appName: "番茄TODO",
          href: "http://www.appchina.com/app/com.plan.kot32.tomatotime"
        },
        {
          appName: "物理大师",
          href: "http://www.appchina.com/app/com.physicmaster"
        },
        {
          appName: "小猿搜题",
          href: "http://www.appchina.com/app/com.fenbi.android.solar"
        },
        {
          appName: "Timing",
          href: "http://www.appchina.com/app/com.huiian.timing"
        },
        {
          appName: "流言侦探",
          href: "http://www.appchina.com/app/com.leyo.lyzt"
        },
        {
          appName: "白色之门",
          href: "http://www.appchina.com/app/air.com.RustyLake.WhiteDoor"
        },
        {
          appName: "艾希",
          href: "http://www.appchina.com/app/com.appchina.yugao.2017032903"
        },
        {
          appName: "战地模拟器",
          href: "http://www.appchina.com/app/com.ligames.bf"
        },
        {
          appName: "开心消消乐",
          href: "http://www.appchina.com/app/com.happyelements.AndroidAnimal"
        },
        {
          appName: "植物精灵",
          href: "http://www.appchina.com/app/air.com.amanitadesign.botanicula"
        },
        {
          appName: "模拟化学实验室",
          href: "http://www.appchina.com/app/air.thix.sciencesense.chemist"
        },
        {
          appName: "崩坏学园2",
          href: "http://www.appchina.com/app/com.miHoYo.HSoDv22144.uc"
        },
        {
          appName: "狂热冲击",
          href: "http://www.appchina.com/app/com.wonderplanet.CrashFever"
        },
        {
          appName: "机器迷城",
          href: "http://www.appchina.com/app/air.net.machinarium.Machinarium.GP"
        },
        {
          appName: "幽亭神游",
          href: "http://www.appchina.com/app/com.visiontrick.pavilion.touch"
        },
        {
          appName: "每日瑜伽",
          href: "http://www.appchina.com/app/com.dailyyoga.cn"
        },
        {
          appName: "国家地理每日精选",
          href: "http://www.appchina.com/app/com.bdatu.ngphone"
        },
        {
          appName: "露米记账",
          href: "http://www.appchina.com/app/com.loonme.ui"
        }
      ],
      wx: [
        {
          wxName: "地球知识局",
          href: "https://data.wxb.com/details/postRead?id=gh_a0c22034cce0"
        },
        {
          wxName: "补一刀",
          href: "https://data.wxb.com/details/postRead?id=gh_d017447a7b5d"
        },
        {
          wxName: "笑点研究所",
          href: "https://data.wxb.com/details/postRead?id=gh_f4a522706475"
        },
        {
          wxName: "左右为篮",
          href: "https://data.wxb.com/details/postRead?id=gh_22a36a890116"
        },
        {
          wxName: "新氧",
          href: "https://data.wxb.com/details/postRead?id=gh_a7b43ab0a9c2"
        },
        {
          wxName: "丫丫八卦",
          href: "https://data.wxb.com/details/postRead?id=gh_1f7ba0a0fe5e"
        },
        {
          wxName: "唐唐频道",
          href: "https://data.wxb.com/details/postRead?id=gh_f014862b32a9"
        },
        {
          wxName: "新闻哥",
          href: "https://data.wxb.com/details/postRead?id=gh_faa35168f414"
        },
        {
          wxName: "研报社",
          href: "https://data.wxb.com/details/postRead?id=gh_aad395fc624a"
        },
        {
          wxName: "钱眼",
          href: "https://data.wxb.com/details/postRead?id=gh_ddf1f1f3c26e"
        },
        {
          wxName: "长安街知事",
          href: "https://data.wxb.com/details/postRead?id=gh_4226ad5d721f"
        },
        {
          wxName: "侠客岛",
          href: "https://data.wxb.com/details/postRead?id=gh_572b3506a44f"
        },
        {
          wxName: "差评",
          href: "https://data.wxb.com/details/postRead?id=gh_2ba2404c01c0"
        },
        {
          wxName: "极致客",
          href: "https://data.wxb.com/details/postRead?id=gh_9b41f060e2d0"
        },
        {
          wxName: "夜听",
          href: "https://data.wxb.com/details/postRead?id=gh_ab1ffb2c3464"
        },
        {
          wxName: "汽车之家",
          href: "https://data.wxb.com/details/postRead?id=gh_be467c3d2b93"
        },
        {
          wxName: "30秒懂车",
          href: "https://data.wxb.com/details/postRead?id=gh_6c40d781af1f"
        },
        {
          wxName: "有书",
          href: "https://data.wxb.com/details/postRead?id=gh_d9de5a6b1aa5"
        },
        {
          wxName: "北美留学生日报",
          href: "https://data.wxb.com/details/postRead?id=gh_4002b1765479"
        },
        {
          wxName: "时尚芭莎",
          href: "https://data.wxb.com/details/postRead?id=wxid_0933829338111"
        },
        {
          wxName: "石榴婆报告",
          href: "https://data.wxb.com/details/postRead?id=gh_cae729c1e8c7"
        },
        {
          wxName: "王者荣耀",
          href: "https://data.wxb.com/details/postRead?id=gh_7273a02c7e7e"
        },
        {
          wxName: "明日方舟",
          href: "https://data.wxb.com/details/postRead?id=gh_b117ff9e1849"
        },
        {
          wxName: "讲武堂",
          href: "https://data.wxb.com/details/postRead?id=gh_1a2a82f301d1"
        },
        {
          wxName: "铁血军事",
          href: "https://data.wxb.com/details/postRead?id=gh_14ef0e644b8f"
        },
        {
          wxName: "她刊",
          href: "https://data.wxb.com/details/postRead?id=gh_95d87a6a5865"
        },
        {
          wxName: "旅行攻略",
          href: "https://data.wxb.com/details/postRead?id=gh_4254c7d046d5"
        },
        {
          wxName: "IN京城",
          href: "https://data.wxb.com/details/postRead?id=gh_d83c40d7c2cc"
        },
        {
          wxName: "微上海",
          href: "https://data.wxb.com/details/postRead?id=gh_6aa0534ed2ea"
        },
        {
          wxName: "华尔街学堂",
          href: "https://data.wxb.com/details/postRead?id=gh_665da21f5263"
        }
      ]
      // upper:[
      //     ''
      // ]
    };
  },
  mounted() {
    // this.getCookie();
  },
  components: {
    headerSelect,
    fonter
  },
  methods: {
    news() {
      this.$router.push({
        name: "newsindex"
      });
    }
  }
};
</script>
<style scoped>
.header {
  width: 1200px;
  min-width: 1200px;
  margin: 0 auto;
}
.navscreen {
  width: 1200px;
  height: 45px;
  border: 1px solid #e4e8ee;
  background-color: #ffffff;
  line-height: 45px;
  margin: 0 auto;
  margin-top: 18px;
  padding-left: 14px;
  font-size: 15px;
  /* display: flex; */
  /* justify-content: space-between; */
}
.navscreen li {
  height: 100%;
  float: left;
  display: inline;
  margin: 0 21px 0 21px;
  cursor: pointer;
  overflow: hidden;
}
.navscreen li:hover {
  color: red;
}
.main {
  width: 1200px;
  min-width: 1200px;
  margin: 0 auto;
  /* margin-top: 30px; */
  display: flex;
  justify-content: space-between;
}

/* 左侧 */
.main-left {
  width: 800px;
}
.APP {
  margin-top: 15px;
  background-color: #ffffff;
  border-color: #bdd8fa;
  border: 1px solid #bdd8fa;
}
.APPtltle {
  height: 50px;
  line-height: 50px;
  font-size: 25px;
  padding-left: 30px;
  border-bottom: 1px solid #bdd8fa;
}
.APPmain {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-right: 20px;
  position: relative;
  /* justify-content: space-between; */
}
.APPmain li {
  /* width: 142px; */
  height: 44px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  margin-left: 30px;
}
.APPmain li:hover {
  color: #fe5a5a;
}
/* 特别推荐 */
.especially {
  height: 33px;
  display: flex;
  flex-direction: row;
}
.especially li {
  line-height: 50px;
  margin-left: 15px;
  color: #0c6ad4;
  cursor: pointer;
}
.especially li:hover {
  color: #fe5a5a;
}
/* 排行榜 */
.ranking-list {
  width: 380px;
  background-color: #fff;
  margin-top: 15px;
}
.rankingtop {
  border-bottom: 1px solid #4f9cee;
}
.ranking-top {
  width: 100px;
  height: 32px;
  border: 1px solid #bdd8fa;
  background-color: #4f9cee;
  color: #ffffff;
  text-align: center;
  line-height: 32px;
}
.rankingmain {
  width: 100%;
  /* border: 1px solid #4f9cee; */
}
.rankingmain li {
  width: 100%;
  height: 30px;
  padding: 0px 0px 8px 5px;
  border-bottom: 1px solid #e9e9e9;
}
.rankingtltle {
  height: 30px;
  border-bottom: 1px solid #bdd8fa;
  line-height: 24px;
  color: #999;
  font-size: 14px;
  overflow: hidden;
  margin: 5px 0px 10px 0px;
  display: flex;
  justify-content: space-between;
}
.rankingtltle span {
  /* width: 33%; */
  text-align: center;
  display: block;
  float: left;
}
.Nos {
  width: 60px;
  text-align: center;
  margin: 0px 10px 0px 3px;
}
.tName {
  width: calc(100% - 68px);
  padding: 0px 10px 0px 0px;
  color: #333;
  overflow: hidden;
  height: 24px;
  /* text-align: center; */
}
.tRank {
  width: 90px;
  text-align: center;
}
/* 傍一 */
.list-three {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
.list-three span {
  /* width: 33%; */
  text-align: center;
  display: block;
  float: left;
}
.BgRed {
  width: 17px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  color: #fff;
  font-size: 12px;
  background-color: #fe5a5a;
  margin-left: 17px;
}
.black {
  width: 17px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  color: #fff;
  font-size: 12px;
  margin-left: 17px;
  background-color: #b0b0b0;
}
.tNametwo {
  width: calc(100% - 68px);
  text-align: center;
  padding: 5px 10px 0px 24px;
  color: #333;
  height: 24px;
}
.tNametwo :hover {
  color: red;
}
.tNameone {
  width: 90px;
  text-align: center;
  color: #666;
  height: 24px;
  overflow: hidden;
  white-space: normal;
  word-break: break-all;
  line-height: 24px;
}
.more {
    /* position: absolute;
    right: 38px;
    bottom: 0; */
    /* color: #0c6ad4; */
}
</style>
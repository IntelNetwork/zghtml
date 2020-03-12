<template>
  <div class="box">
    <div>
      <headerSelect />
    </div>
    <div class="main">
      <div class="left">
        <personalLeft />
      </div>
      <div class="right">
        <div class="nav">
          <ul class="nav">
            <li>
              <p class="title">我的圈子</p>
              <p class="underline"></p>
            </li>
            <li class="nav-li1">
              <span class="iconfont">&#xe645;</span>直接搜索相关圈子内容试试
            </li>
            <li class="nav-li2">
              更多圈子
              <span class="iconfont">&#xe63c;</span>
            </li>
          </ul>
        </div>
        <div class="no">
          <span class="iconfont">&#xe633;</span>
          <p class="no-h1">你还没有加入任何部落哦</p>
          <p class="no-ti">快去看看有哪些你喜欢的部落吧！</p>
          <p class="nop">
            <el-button class="found">发现部落</el-button>
          </p>
          <p class="nop">
            <el-button class="addfound" type="text">新建部落</el-button>
          </p>
        </div>
        <div class="recommended">
          <div class="recommended-tltle">
            <p style="margin-left:28px">这些部落非常适合你呢</p>
            <p class="nav-li2">
              查看全部
              <span class="iconfont">&#xe63c;</span>
            </p>
          </div>
          <div class="recommended-main">
            <div class="tribal">
              <img src="../../assets/tribal1.png" class="tribalimg" />
              <ul>
                <li class="triballi1">职场那些事</li>
                <li class="tribal2">话题数：1334</li>
                <li class="tribal3">已有235687人加入部落</li>
                <li class="tribal4">立即加入</li>
              </ul>
            </div>
            <div class="tribal">
              <img src="../../assets/tribal2.png" class="tribalimg" />
              <ul>
                <li class="triballi1">职场那些事</li>
                <li class="tribal2">话题数：1334</li>
                <li class="tribal3">已有235687人加入部落</li>
                <li class="tribal4">立即加入</li>
              </ul>
            </div>
            <div class="tribal">
              <img src="../../assets/tribal3.png" class="tribalimg" />
              <ul>
                <li class="triballi1">职场那些事</li>
                <li class="tribal2">话题数：1334</li>
                <li class="tribal3">已有235687人加入部落</li>
                <li class="tribal4">立即加入</li>
              </ul>
            </div>
          </div>
          <p class="hr"></p>
          <div class="recommended-tltle1">
            <p style="margin-left:28px">最新创建的部落</p>
            <p class="nav-li2">
              查看全部
              <span class="iconfont">&#xe63c;</span>
            </p>
          </div>
          <div class="recommended-main">
            <div class="tribal">
              <img src="../../assets/tribal4.png" class="tribalimg" />
              <ul>
                <li class="triballi1">飞行员的故事</li>
                <li class="tribal2">话题数：1334</li>
                <li class="tribal3">已有235687人加入部落</li>
                <li class="tribal4">立即加入</li>
              </ul>
            </div>
            <div class="tribal">
              <img src="../../assets/tribal2.png" class="tribalimg" />
              <ul>
                <li class="triballi5">生活家居</li>
                <li class="tribal2">话题数：1334</li>
                <li class="tribal3">已有235687人加入部落</li>
                <li class="tribal4">立即加入</li>
              </ul>
            </div>
            <div class="tribal">
              <img src="../../assets/tribal3.png" class="tribalimg" />
              <ul>
                <li class="triballi7">职场那些事</li>
                <li class="tribal2">话题数：1334</li>
                <li class="tribal3">已有235687人加入部落</li>
                <li class="tribal4">立即加入</li>
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
</template>
<script>
import headerSelect from "@/components/headerSelect";
import personalLeft from "@/components/personalCenter/personalLeft";
import fonter from "@/components/fonter";
export default {
  data() {
    return {};
  },
  components: {
    headerSelect,
    fonter,
    personalLeft
  },
  mounted() {
    // this.getCookie();
  },

  methods: {}
};
</script>
<style scoped>
.box {
  background: #f3f3f3;
}
.main {
  width: 1200px;
  margin: 30px auto 59px auto;
  display: flex;
}
.left {
  width: 250px;
}
.right {
  width: 1020px;
  height: 871px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  margin-left: 30px;
  min-width: 1000px;
}
.nav {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 1px solid #e8ecee;
}
.title {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #000000;
  margin: 21px 0px 0px 29px;
}
.underline {
  width: 34px;
  height: 2px;
  background: #339999;
  margin: 11px 0px 0px 29px;
}
.nav li {
  height: 50px;
}
.nav-li1 {
  font-size: 14px;
  line-height: 50px;
  color: #666666;
}
.nav-li1 span {
  margin: 5px 11px 0px 0px;
}
.nav-li2 {
  width: 120px;
  font-size: 14px;
  line-height: 50px;
  color: #666666;
}
.nav-li2 span {
  margin-left: 11px;
  color: #339999;
}
.no {
  width: 100%;
  height: 362px;
  border-bottom: 1px solid #e8ecee;
}
.no .iconfont {
  font-size: 125px;
  color: #ceeaea;
  margin-left: 44%;
}
.no-h1 {
  font-size: 24px;
  color: #333333;
  width: 100%;
  text-align: center;
}
.no-ti {
  font-size: 14px;
  color: #666666;
  width: 100%;
  text-align: center;
  margin-top: 10px;
}
.found {
  width: 99px;
  height: 40px;
  background: #339999;
  border-radius: 6px;
  color: #ffffff;
}
.addfound {
  color: #339999;
  font-size: 14px;
}
.nop {
  width: 100%;
  text-align: center;
  margin-top: 15px;
}
.recommended {
  width: 100%;
}
.recommended-tltle {
  display: flex;
  justify-content: space-between;
  margin-top: 33px;
}
.recommended-tltle1 {
  display: flex;
  justify-content: space-between;
  margin-top: 29px;
}
.recommended-tltle,
.recommended-tltle1 p {
  line-height: 50px;
}
.recommended-main {
  width: 80%;
  margin: 30px 0px 30px 3%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.tribal {
  width: 220px;
  display: flex;
  justify-content: space-between;
}
.tribal li {
  line-height: 20px;
}
.tribalimg {
  width: 80px;
  height: 80px;
  border-radius: 6px;
  overflow: hidden;
}
.triballi1 {
  font-size: 18px;
  color: #333333;
}
.tribal2 {
  font-size: 12px;
  color: #666666;
  line-height: 10px;
}
.tribal3 {
  font-size: 12px;
  color: #666666;
}
.tribal4 {
  color: #339999;
  font-size: 14px;
  cursor: pointer;
}
.hr {
  width: 94%;
  height: 1px;
  background: #e8ecee;
  margin: 0 auto;
}
</style>
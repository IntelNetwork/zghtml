<template>
  <div>
    <div class="content">
      <personal />
      <div class="publishInformation">
        <img src="../../assets/remind.png" alt="">
        <p>抱歉！由于您提供的信息太少 </p>
        <p class="contacts">我们暂时无法找到您想认识的人</p>
        <el-button type="text" class="perfect">完善资料</el-button>
        <div class="friends">
            <p>没有想要认识的人？试试 <a href="">寻找好友</a></p>
        </div>
      </div>
      <div class="potentialContacts">
          <div class="potentialTop">
              <span class="potentialTitle">
                  猜您认识以下 <i>43</i>  位 职场大咖
              </span>
              <span class="potentialRight">
                  查看全部<i class="el-icon-arrow-right right"></i>
              </span>
          </div>
          <div class="potentialContent">
            <div class="contactsinformation" v-for="(item,index) in informations" :key="index">
              <img :src="item.icon" alt="" class="informationIcon">
              <h4 class="name">{{item.name}}</h4>
              <span class="company">
                <p>{{item.company}}</p>
                <p class="position">{{item.position}}</p>
              </span>
              <p><i></i>{{item.num}} 位共同关注的人</p>
              <el-button class="button">关注</el-button>
            </div>
          </div>
          <div class="friends friend">
            <p>没有想要认识的人？试试 <a href="">寻找好友</a></p>
        </div>
      </div>
      <div class="circle">
        <div class="potentialTop ">
              <span class="circleTop">
                  猜您认识以下 <i>43</i>  位 职场大咖
              </span>
              <span class="potentialRight">
                  查看全部<i class="el-icon-arrow-right right"></i>
              </span>
          </div>
          <div class="circleContent">
            <div class="lakeCircle" v-for="(item,index) in circle" :key="index">
              <div class="circleImg">
                <img :src="item.img" alt="">
              </div>
              <div class="circleTitle">
                <h5>{{item.title}}</h5>
                <div class="circleNum">
                  <p>话题数：{{item.num}} </p>
                  <p>已有{{item.people}}人加入部落</p>
                </div>
                <el-button type="text" class="joinCircle">立即加入</el-button>
              </div>
            </div>
          </div>
      </div>
      
    </div>
    <fonter />
  </div>
</template>
<script>
import personal from "@/components/personalCenter/personal";
import fonter from "@/components/fonter";
export default {
  data() {
    return {
      informations:[
        {
          icon: require("../../assets/top.jpg"),
          name: "党开心",
          company: "上海让雷科技有限公司",
          position: "测试工程师",
          num: "12",
        },
        {
          icon: require("../../assets/a14.png"),
          name: "党开心",
          company: "上海让雷科技有限公司",
          position: "测试工程师",
          num: "12",
        },
        {
          icon: require("../../assets/top.jpg"),
          name: "党开心",
          company: "上海让雷科技有限公司",
          position: "测试工程师",
          num: "12",
        },
        {
          icon: require("../../assets/top.jpg"),
          name: "党开心",
          company: "上海让雷科技有限公司",
          position: "测试工程师",
          num: "12",
        },
        {
          icon: require("../../assets/top.jpg"),
          name: "党开心",
          company: "上海让雷科技有限公司",
          position: "测试工程师",
          num: "12",
        },
        {
          icon: require("../../assets/top.jpg"),
          name: "党开心",
          company: "上海让雷科技有限公司",
          position: "测试工程师",
          num: "12",
        },
        {
          icon: require("../../assets/top.jpg"),
          name: "党开心",
          company: "上海让雷科技有限公司",
          position: "测试工程师",
          num: "12",
        },
        {
          icon: require("../../assets/top.jpg"),
          name: "党组织",
          company: "上海让雷科技有限公司",
          position: "测试工程师",
          num: "32",
        },
        {
          icon: require("../../assets/top.jpg"),
          name: "党开心",
          company: "上海让雷科技有限公司",
          position: "测试工程师",
          num: "12",
        },
        {
          icon: require("../../assets/a14.png"),
          name: "党组织",
          company: "上海让雷科技有限公司",
          position: "测试工程师",
          num: "12",
        },
        {
          icon: require("../../assets/a14.png"),
          name: "党开心",
          company: "上海让雷科技有限公司",
          position: "测试工程师",
          num: "12",
        },
        {
          icon: require("../../assets/a14.png"),
          name: "党开心",
          company: "上海让雷科技有限公司",
          position: "测试工程师",
          num: "12",
        },
      ],
      circle:[
        {
          img:require("../../assets/top.jpg"),
          title: "职场那些事",
          num: "1234",
          people: "235687"
        },
        {
          img:require("../../assets/top.jpg"),
          title: "毕业找工作",
          num: "1234",
          people: "235687"
        },
        {
          img:require("../../assets/top.jpg"),
          title: "程序员的小秘密",
          num: "1334",
          people: "235687"
        },
      ]
    };
  },
  components: {
    personal,
    fonter,
  },
  created() {},
  methods: {
    updateRate() {},
    handleSizeChange() {},
    handleCurrentChange() {},
    // 充值
    rcharge() {
        this.$router.push({ //核心语句
            name: 'recharge', //跳转的路径
            query: { //路由传参时push和query搭配使用 ，作用时传递参数
                id: this.id,
            }
        })
    },
    // 提现
    withdrawal() {
        this.$router.push({ //核心语句
            name: 'withdrawal', //跳转的路径
            query: { //路由传参时push和query搭配使用 ，作用时传递参数
                id: this.id,
            }
        })
    },
    wo(){
       this.$router.push({ //核心语句
            name: 'resume', //跳转的路径
            query: { //路由传参时push和query搭配使用 ，作用时传递参数
                id: this.id,
            }
        })
    }
  }
};
</script>
<style type="text/css" scoped>
i{
  font-style: normal;
}

.publishInformation{
  width: 1000px;
  height: 600px;
  margin: 34px auto;
  background: #ffffff;
  text-align: center;
  font-size: 16px;
  display: none;
}
.publishInformation>img{
  margin-top: 106px;
  margin-bottom: 20px;
}
.publishInformation>p{
  color: #666;
  margin: 10px 0;
  font-size: 24px;
}
.publishInformation .el-button{
  color: #ffffff;
  /* font-weight:800 !important; */
  font-size: 16px;
}
.publishInformation .contacts{
    font-size: 14px;
}
.perfect{
    width:99px;
    height:40px;
    background:rgba(51,153,153,1);
    border-radius:6px;
    color: #ffffff;
    margin-top: 30px;
}
.potential{
    color: #339999;
    border-bottom: 2px solid #339999;
}
.friends{
    margin-top: 150px;
    color: #666;
    font-size: 14px;
}
.friend{
    margin-top: 50px;
    text-align: center;
    padding-bottom: 32px;
}
.friends p>a{
    color: #339999;
    font-weight: 500;
    margin-left: 4px;
}
.potentialContacts{
    width: 1000px;
    margin: 0px auto;
    background: #ffffff;
    margin-top: 34px;
}
.potentialTop{
    display: flex;
    justify-content: space-between;
    padding: 30px;
}
.right{
  color: #339999;
  border: 1px solid #339999;
  border-radius: 50%;
  margin-left: 8px;
  font-size: 16px;
}
.potentialRight{
  color: #333333;
  font-size: 14px;
}
.potentialTitle{
  color: #999999;
  font-size: 16px;
}
.potentialTitle>i{
  color: #339999;
}
.potentialContent{
  padding: 0px 10px;
  display: flex;
  /* justify-content:space-between; */
  flex-wrap: wrap;
}
.contactsinformation{
  width: 220px;
  height: 315px;
  border: 1px solid #EBEBEB;
  text-align: center;
  /* line-height: 30px; */
  font-size: 14px;
  color: #666;
  margin: 0 12px 20px 12px;
  border-radius: 6px;
}
.contactsinformation:hover{
  box-shadow:0px 4px 8px 0px rgba(0, 0, 0, 0.1);
}
.name{
  color: #333333;
  font-size: 18px;
  margin-top: 20px;
}
.company{
  display: inline-block;
  padding: 15px 0;
  line-height: 20px;
}
.informationIcon{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 22px;
}

.button{
  color: #339999;
  width:100px;
  height:30px;
  border:2px solid rgba(51, 153, 153, 1);
  border-radius:6px;
  padding: 0;
  margin-top: 20px;
}
.circle{
  width: 1000px;
  margin: 18px auto;
  background: #ffffff;
  height: 210px;
}
.circleTop{
  color: #333333;
  font-size: 18px;
}
.circleContent{
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
}
.lakeCircle{
  display: flex;
}
.circleImg{
  width: 80px;
  height: 80px;
 
  margin-right: 20px;
}
.circleImg img{
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

.circleTitle h5{
  color: #333333;
  font-size: 16px;
}
.circleNum{
  color: #666666;
  font-size: 14px;
  margin-top: 8px;
  line-height: 18px;
}
.joinCircle{
  color: #339999;
  font-size: 14px;
  padding: 8px 0;
}
</style>

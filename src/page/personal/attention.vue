<template>
  <div>
    <div class="content">
      <personal />
      <div class="attention">
          <div class="attentionContent" v-for="(item,index) in attention" :key="index">
              <div class="namePortrait">
                  <div class="headPortrait">
                      <img :src="item.icon" alt="">
                  </div>
                  <div class="name">
                      <h3>{{item.name}}</h3>
                      <span>
                          <p>{{item.position}}</p>
                          <p>最近参与话题：#程序员的小秘密#    {{item.min}}分前 拷贝</p>
                      </span>
                  </div>
              </div>
              <div class="number">
                  <h4>{{item.number}}</h4>
                  <p>发布的</p>
              </div>
              <div>
                  <el-button type="text" class="joinCircle" v-if="item.type == 0">已关注</el-button>
                  <el-button type="text" class="button1" v-if="item.type == 1">关注</el-button>
              </div>
          </div>
          <div class="pagination">
               <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="pageSize"
                    layout="prev, pager, next, total"
                    :total="total">
                </el-pagination>
          </div>
      </div>
      <div class="attentionBottom">
          <img src="../../assets/banner_bottom.png" alt="">
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
        attention: [
            {
                icon: require("../../assets/top.jpg"),
                name: "韩梅梅",
                position: "测试工程师",
                min: "15",
                number: "34",
                type: 0,
            },
            {
                icon: require("../../assets/top.jpg"),
                name: "韩梅梅",
                position: "测试工程师",
                min: "15",
                number: "34",
                type: 1,
            },
            {
                icon: require("../../assets/top.jpg"),
                name: "韩梅梅",
                position: "测试工程师",
                min: "15",
                number: "34",
                type: 0,
            },
            {
                icon: require("../../assets/top.jpg"),
                name: "韩梅梅",
                position: "测试工程师",
                min: "15",
                number: "34",
                type: 1,
            },
            {
                icon: require("../../assets/top.jpg"),
                name: "韩梅梅",
                position: "测试工程师",
                min: "15",
                number: "34",
                type: 0,
            },
            {
                icon: require("../../assets/top.jpg"),
                name: "韩梅梅",
                position: "测试工程师",
                min: "15",
                number: "34",
                type: 0,
            },
            {
                icon: require("../../assets/top.jpg"),
                name: "韩梅梅",
                position: "测试工程师",
                min: "15",
                number: "34",
                type: 1,
            },
        ],
        total: 100,
        currentPage: 0,
        pageSize: 6,
      
    };
  },
  components: {
    personal,
    fonter,
  },
  created() {

  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
};
</script>
<style type="text/css" scoped>
i{
  font-style: normal;
}

.attention{
    width: 1000px;
    background: #ffffff;
    margin: 0 auto;
    margin-top: 34px;
}
.attentionContent{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 30px;
    border-bottom: 1px solid #F1F1F1;
    height: 132px;
}
.namePortrait{
    display: flex;
    align-items: center;
}
.headPortrait{
    width: 100px;
    height: 100px;
    margin-right: 16px;
}
.headPortrait img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
/* .name{
    line-height: 30px;
} */
.name h3{
    color: #333333;
    font-size: 18px;
    margin-bottom: 10px;
}
.name span{
    color: #666666;
    font-size: 14px;
    line-height: 22px;
}
.number{
    line-height:24px;
    text-align: center;
}
.number h4{
    color: #339999;
    font-size: 18px;
}
.number p{
    color: #999999;
    font-size: 14px;
}
.joinCircle{
  width: 100px;
  height: 30px;
  border: 2px solid #339999;
  color: #339999;
  font-size: 16px;
  padding: 0;
}
.button1 {
  width: 100px;
  height: 30px;
  background:rgba(51,153,153,1);
  color: #ffffff;
  padding: 0;
  font-size: 16px;
}
.pagination{
    text-align: center;
    height: 120px;
    padding-top: 40px;
}
.attentionBottom{
    width: 1320px;
    margin: 30px auto;
}
.attentionBottom img{
    width: 100%;
}
</style>

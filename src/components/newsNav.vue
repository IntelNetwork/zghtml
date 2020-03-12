<template>
  <div id="news">
      <div class="main-nav">
          <el-menu 
          :default-active="activeIndex" 
          class="el-menu-demo" 
          mode="horizontal" 
          @select="handleSelect" 
          text-color="#333"
          active-text-color="#fff"
         
          >
                <el-menu-item index="1" class="menu_item" @click="index(1)"><a >资讯首页</a></el-menu-item>
                <el-menu-item index="2" class="menu_item" @click="index(2)"><a>热点关注</a></el-menu-item>
                <el-menu-item index="3" class="menu_item" @click="index(3)"><a>福布观点</a></el-menu-item>
                <el-menu-item index="4" class="menu_item"  @click="index(4)"><a>纤厂动态</a></el-menu-item>
                <el-menu-item index="5" class="menu_item" @click="index(5)"><a>分析报告</a></el-menu-item>
                <el-menu-item index="6" class="menu_item" @click="index(6)"><a>指数价格</a></el-menu-item>
                <el-menu-item index="7" class="menu_item" @click="index(7)"><a>福布公告</a></el-menu-item>
                <!-- <el-menu-item index="8" class="menu_item"><a href="#">智能工厂</a></el-menu-item>-->
                <!-- <el-menu-item index="8" class="menu_item"><a href="#">{{userId}}1</a></el-menu-item>  -->
                 <!-- target="_blank" 在新窗口打开 -->
          </el-menu>
          
      </div>
  </div>
</template>
<script>

import { mapState, mapMutations } from "vuex"
	export default {
		data() {
			return {
                activeIndex:this.$store.state.userId,
			}
		},
		created() {
            
		},
		mounted() {
		   
        },
        
		methods: {
            handleSelect(key){
                // this.setUserId(key);
                // this.activeIndex = userId;
            },
			...mapMutations({
			}),
            index(index){
                if(index == 1){
                        this.$router.push({
                            name: 'information',
                            
                        }); 
                        //   this.setUserId(567) 
                    }else if(index == 2){
                        this.$router.push({
                            name: 'instantNews',
                            
                        });
                    }else if(index == '3'){
                        this.$router.push({
                            name: 'insights',
                            
                        })
                    }else if(index == '4'){
                        this.$router.push({
                            name: 'flberNews',
                            
                        })
                    }else if(index == '5'){
                        this.$router.push({
                            name: 'analyseReports',
                            
                        })
                    }else if(index == '6'){
                        this.$router.push({
                            name: 'insights',
                            
                        })
                    }else if(index == '7'){
                        this.$router.push({
                            name: 'insights',
                            
                        })
                    }

                    // if(index=='0'){
                    //     this.$message.warning('暂未开放！');
                    // }
                }
		},
		computed:{
			...mapState({
                userId:state => state.userId,
                // activeIndex:state => state.activeIndex
			})
		}
	};
</script>

<style scoped>
    #news{
        border-bottom: 2px solid #ed0000;
        background: #ffffff;
        margin-bottom: 15px;
        text-align: center;
    }
    .main-nav{
        font-size: 14px;
        display: flex;
        width: 1200px;
        margin: 0 auto;
        height: 41px;
        background: #ffffff;
        position: relative;
    }
    .el-menu {
        height: 40px;
    }
    .el-menu-item{
        width: 160px;
        height: 40px;
        line-height: 40px;
        border-bottom:none;
        font-size: 16px;
        font-weight: 600;
       
    }
    .el-menu-item:hover{
        color: #ffffff;
        background-color: #ed0000 !important;
    }
    .el-menu-item.menu_item a{
        /* padding-bottom: 5px; */
        width: 100%;
        height: 100%;
      
    }
    .el-menu-item:hover a{
        color: #ffffff;
    }
    .el-menu-demo .index-active:hover + .all-sort-title{
       display: block;
    }
    .el-menu-item.is-active{
        border-bottom:none;
        background-color: #ed0000 !important;
    }
    .el-badge{
        z-index: 100;
        /* background: #ed0000; */
    }
    sup.el-badge__content{
        background: #ed0000;
        width: 200px;
    }
</style>

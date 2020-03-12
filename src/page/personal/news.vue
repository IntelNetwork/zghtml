<template>
    <div>
        <div>
            <headerSelect />
        </div>
        <div class="box">
            <div class="main">
                <div class="left">
                    <personalLeft />
                </div>
                <div class="center">
                    <div class="navigation">
                        <el-tabs class="eltabs" v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="全部消息" name="first" class="whole">
                                <div class="second-level">
                                    <div class="news" v-for="(active,index) in source" :key="index">
                                        <img src="../../assets/head.jpg" class="head">
                                        <ul class="whole">
                                            <li>
                                                <ul class="system">
                                                    <li>{{active.system}}</li>
                                                    <li>{{active.today}}</li>
                                                    <li>{{active.data}}</li>
                                                </ul>
                                            </li>
                                            <li class="content">
                                                <ul class="reason">
                                                    <li>{{active.content}}</li>
                                                    <li>{{active.operation}}</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="关注" name="second">
                                暂无消息
                            </el-tab-pane>
                            <el-tab-pane label="消息" name="third">
                                暂无新消息
                            </el-tab-pane>
                            <el-tab-pane label="公告" name="fourth">
                                <div class="second-level">
                                    <div class="news" v-for="(active,index) in source" :key="index">
                                        <img src="../../assets/head.jpg" class="head">
                                        <ul class="whole">
                                            <li>
                                                <ul class="system">
                                                    <li>{{active.system}}</li>
                                                    <li>{{active.today}}</li>
                                                    <li>{{active.data}}</li>
                                                </ul>
                                            </li>
                                            <li class="content">
                                                <ul class="reason">
                                                    <li>{{active.content}}</li>
                                                    <li>{{active.operation}}</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
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
    import personalLeft from "@/components/personalCenter/personalLeft";
    import fonter from "@/components/fonter";
    export default {

        data() {
            return {
                // tabs标签页
                activeName: 'first',
                // 消息来源
                source:[
                    {
                        system:'系统',
                        today:'今天',
                        data:'8:30',
                        content:'管理员 审核通过 了你发布的原创作品：《11》',
                        operation:'操作原因：感谢在站酷网发布您的原创作品。'
                    },
                    {
                        system:'系统',
                        today:'今天',
                        data:'8:30',
                        content:'管理员 审核通过 了你发布的原创作品：《11》',
                        operation:'操作原因：感谢在站酷网发布您的原创作品。'
                    },
                    {
                        system:'系统',
                        today:'今天',
                        data:'8:30',
                        content:'管理员 审核通过 了你发布的原创作品：《11》',
                        operation:'操作原因：感谢在站酷网发布您的原创作品。'
                    },
                    {
                        system:'系统',
                        today:'今天',
                        data:'8:30',
                        content:'管理员 审核通过 了你发布的原创作品：《11》',
                        operation:'操作原因：感谢在站酷网发布您的原创作品。'
                    },
                ]
            };
        },
        components:{
            headerSelect,
            personalLeft,
            fonter,
        },
        mounted() {
            // this.getCookie();
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>
<style scoped>
    .box {
        width: 1200px;
        min-width: 1200px;
        margin: 0 auto;
    }
    .main {
        width: 1200px;
        display: flex;
    }
    .left {
        width: 250px;
        margin-top: 30px;
    }
    .center {
        width:1020px;
        /* height:850px; */
        background-color: #ffffff;
        border-radius:6px;
        margin: 30px 0px 0px 30px;
    }
    .navigation {
        width: 90%;
        height: 50px;
        margin: 0 auto;
    }
    /* 下划线 */
    .el-tabs__active-bar {
        background-color: #339999;
    }
    .second-level {
        width: 100%;

    }
    .news {
        /* width: 947px; */
        border-bottom: 1px solid #EAEEEF;
        display: flex;
        padding: 0px 0px 20px 0px;
    }
    .head {
        width:40px;
        height:40px;
        border-radius:50%;
        margin-top: 9px;
    }
    .content {
        width: 300px;
        color: #666666;
        font-size: 14px;
    }
    .whole {
        padding-left: 14px;
    }
    .whole>li:nth-child(n+1) {
        line-height: 30px;
    }
    /* 消息来源 */
    .system {
        width: 104px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #999999;
        
    }
    .reason {
        line-height: 20px;
    }
</style>
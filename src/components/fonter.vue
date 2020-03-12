<template>
    <div>
        <div class="fonter">
            <ul class="fonter-ul">
                <li><img src="../assets/logo2.png"></li>
                <li><a href="">用户协议</a></li>
                <li><a href="">隐私政策</a></li>
                <li><a href="">社区准则</a></li>
                <li><a href="">Cookie 政策</a></li>
                <li><a href="">版权政策</a></li>
                <li><a href="">发送意见</a></li>
            </ul>
            <ul class="record">
                <li><a href="http://www.beian.miit.gov.cn" class="for-reference" target="_blank">沪ICP备17024305号-4</a></li>
                <li><a href="" class="for-reference" target="_blank">沪公安安备12441523号</a></li>
                <li><a href="" class="for-reference" target="_blank">电信业务经营许可</a></li>
                <li><a href="" class="for-reference" target="_blank">电子公告服务电信业务审批</a></li>
            </ul>
            <ul class="copyright">
                <li>COPYRIGHT@2020 NTRSTRANGERS.COM，ALL RIGHTS RESERVED. 本站发布的所有内容，未经许可，不得转载，详见《知识产权声明》 《用户使用协议》</li>
            </ul>
        </div>
    </div>
</template>
<script>
    // import { login, islogin } from "@/api/login";
    export default {

        data() {
            return {

            };
        },
        mounted() {
            // this.getCookie();
        },
        methods: {
            
            
        }
    };
</script>
<style scoped>
    .fonter {
        width: 100%;
        min-width: 1200px;
        margin: 0 auto;
        border-top: 1px solid #EDEDED;
        margin-top: 20px;
    }
    .fonter-ul {
        width: 480px;
        height: 48px;
        line-height: 75px;
        color: #999999;
        font-size: 12px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .fonter-ul img {
        margin-top: 24px;
    }
    .record {
        width: 590px;
        height: 50px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        line-height: 50px;
    }
    .for-reference {
        display: block;
        font-size: 12px;
        text-align: center;
        color: #999999;
        /* text-decoration:underline; */
        /* color: blue; */
        cursor: pointer;
    }
    .copyright {
        width: 100%;
        font-size: 14px;
        text-align: center;
        color: #999999;
        margin-bottom: 40px;
    }
</style>
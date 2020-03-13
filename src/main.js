import Vue from 'vue'
// import $ from 'jquery'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import axios from 'axios';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/font/iconfont.css'
import store from './store'
import { mapMutations, mapState } from "vuex";
import i18n from './lang' // Internationalization
// import global from './page/global/global'//引用文件
//   Vue.prototype.global = global//挂载到Vue实例上面
import '@/icons' // icon
import '@/permission' // permission control
import * as  filters from './common/filters/filters'
 
// Vue.use(Element, {
//   size: 'medium', // set element-ui default size
//   i18n: (key, value) => i18n.t(key, value) 
// })
 
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
/* 注入vue全局中，这样我们可以在组件内或者JS内通过使用this.$qs来使用qs库*/
Vue.use(ElementUI)
// axios.defaults.baseURL = "http://122.51.238.114:8863";
// Vue.prototype.baseURL = "http://122.51.238.114:8863";
axios.defaults.baseURL = "http://api.interstrangers.com";
Vue.prototype.baseURL = "http://api.interstrangers.com";

Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
   i18n,
  template: '<App/>',
  components: { App },
  computed: {
    ...mapState(["token"]),
  },
  methods: {
    ...mapMutations(["quits"]),
  },
  created() {
    
    this.axios.interceptors.response.use((response) => { // ①10010 token半小时（30分） ②10011 token无效
        if (response.data.code === 501) {
          this.$message({
            showClose: true,
            message: '用户过期或有其它人在别处登录！',
            type: 'error',
            duration: 2000,
          });
          setTimeout(() => {
            // this.$router.push({
            //   path: '/login'
            // });
            sessionStorage.clear();
          }, 2000);
        } else if (response.data.token) { // 判断token是否存在，如果存在说明需要更新token
          Storage.localSet('token', response.data.token) // 覆盖原来的token(默认一天刷新一次)
        }
        return response

      },
      function (error) {
        console.log(error);
        return Promise.reject(error)

      })
    this.axios.interceptors.request.use(config => {
        let token = sessionStorage.getItem("token");
        if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
          config.headers.common['X-Access-Token'] = `${token}`
        }
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        return config;
      },
      err => {
        return Promise.reject(err);
      }

    )
  }
})

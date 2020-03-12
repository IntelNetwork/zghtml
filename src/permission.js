import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import {asyncRouterMap} from './router/index'

router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth){
    if(sessionStorage.getItem("brand_id")!=null){
           console.log(to.meta.power.indexOf(Number(sessionStorage.getItem('roleid')))>-1,"indexOf")
             console.log(to.meta.power,"to")
              console.log(sessionStorage.getItem('roleid'),"rolid")//null
            if(to.meta.power.indexOf(Number(sessionStorage.getItem('roleid'))) > -1){
              next()
            }else if(from.path=='/login'){
                next()
            }else{
              next(false)
             }
      
    }else{
        next({
        path: '/login',
        })
    }
  }else{
    next()
  }
})


router.afterEach(() => {
  NProgress.done() // 结束Progress
})

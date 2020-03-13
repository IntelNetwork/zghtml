import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login',name: 'login', component: () => import('@/page/login'), hidden: true },
  { path: '/registered',name: 'registered', component: () => import('@/page/registered'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true }, 
  {
      path: '/',
      name: 'index',
      component: () => import('@/page/index'),
      meta: { title: '首页', icon: 'el-icon-caret-right' }
  },
  {
    path: '/recharge',
    name: 'recharge',
    component: () => import('@/page/rechargeWithdrawal/recharge'),
    meta: { title: '充值页面', icon: 'el-icon-caret-right' }
  },
  {
    path: '/withdrawal',
    name: 'withdrawal',
    component: () => import('@/page/rechargeWithdrawal/withdrawal'),
    meta: { title: '提现页面', icon: 'el-icon-caret-right' }
  },
  {
    path: '/workPlan',
    name: 'workPlan',
    component: () => import('@/page/work/workPlan'),
    meta: { title: '工作计划', icon: 'el-icon-caret-right' }
  },
  {
    path: '/applyApproval',
    name: 'applyApproval',
    component: () => import('@/page/apply/applyApproval'),
    meta: { title: '我的申请', icon: 'el-icon-caret-right' }
  },
  {
    path: '/guestHouse',
    name: 'guestHouse',
    component: () => import('@/page/guest/guestHouse'),
    meta: { title: '创客入驻', icon: 'el-icon-caret-right' }
  },
    // 个人资料 
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/page/personal/contact'),
      // meta: { title: '1', icon: 'el-icon-caret-right' }
    },
    {
      path: '/basic',
      name: 'basic',
      component: () => import('@/page/personal/basic'),
      // meta: { title: '2', icon: 'el-icon-caret-right' }
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('@/page/personal/work'),
      // meta: { title: '3', icon: 'el-icon-caret-right' }
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('@/page/personal/education'),
      // meta: { title: '4', icon: 'el-icon-caret-right' }
    },
    {
      path: '/autograph',
      name: 'autograph',
      component: () => import('@/page/personal/autograph'),
      // meta: { title: '5', icon: 'el-icon-caret-right' }
    },
    {
      path: '/data',
      name: 'data',
      component: () => import('@/page/personal/data'),
      // meta: { title: '资料与账号', icon: 'el-icon-caret-right' }
    },
    {
      path: '/potentialContacts',
      name: 'potentialContacts',
      component: () => import('@/page/personal/potentialContacts'),
      // meta: { title: '潜在人脉', icon: 'el-icon-caret-right' }
    },
    {
      path: '/attention',
      name: 'attention',
      component: () => import('@/page/personal/attention'),
      // meta: { title: '我关注的人', icon: 'el-icon-caret-right' }
    },
    {
      path: '/findFriends',
      name: 'findFriends',
      component: () => import('@/page/personal/findFriends'),
      // meta: { title: '我关注的人', icon: 'el-icon-caret-right' }
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('@/page/personal/resume'),
      // meta: { title: '简历预览', icon: 'el-icon-caret-right' }
    },
      {
        path: '/personal',
        name: 'personal',
        component: () => import('@/page/personal/personal'),
        meta: { title: '个人主页', icon: 'el-icon-caret-right' }
    },
    // 简历预览
    {
      path: '/news',
      name: 'news',
      component: () => import('@/page/personal/news'),
      // meta: { title: '我的消息', icon: 'el-icon-caret-right' }
    },
    {
      path: '/circle',
      name: 'circle',
      component: () => import('@/page/circle/circle'),
      // meta: { title: '我的圈子', icon: 'el-icon-caret-right' }
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/page/circle/create'),
      // meta: { title: '创建', icon: 'el-icon-caret-right' }
    },
    {
      path: '/nojoin',
      name: 'nojoin',
      component: () => import('@/page/circle/nojoin'),
      // meta: { title: '未加入', icon: 'el-icon-caret-right' }
    },
    {
      path: '/tribalindex',
      name: 'tribalindex',
      component: () => import('@/page/circle/tribalindex'),
      // meta: { title: '创业集结号', icon: 'el-icon-caret-right' }
    },
    // 我的测评
    {
        path: '/measurement',
        name: 'measurement',
        component: () => import('@/page/measurement/measurement'),
        // meta: { title: '我的测评', icon: 'el-icon-caret-right' }
      },
    // 广告
    {
      path: '/advertisement',
      name: 'advertisement',
      component: () => import('@/page/advertisement/advertisement'),
      meta: { title: '项目链接', icon: 'el-icon-caret-right' }
    },
    // 任务大厅
    {
      path: '/taskHall',
      name: 'taskHall',
      component: () => import('@/page/task/taskHall'),
      meta: { title: '任务大厅', icon: 'el-icon-caret-right' }
    },
    {
      path: '/taskRelease',
      name: 'taskRelease',
      component: () => import('@/page/task/taskRelease'),
      meta: { title: '任务发布', icon: 'el-icon-caret-right' }
    },
    {
      path: '/taskDetails:id',
      name: 'taskDetails',
      component: () => import('@/page/task/taskDetails'),
      meta: { title: '任务详情', icon: 'el-icon-caret-right' }
    },
    {
      path: '/bidder',
      name: 'bidder',
      component: () => import('@/page/task/bidder'),
      meta: { title: '竞标人信息', icon: 'el-icon-caret-right' }
    },
    {
      path: '/ongoing',
      name: 'ongoing',
      component: () => import('@/page/task/ongoing'),
      meta: { title: '已接任务列表', icon: 'el-icon-caret-right' }
    },
    {
      path: '/published',
      name: 'published',
      component: () => import('@/page/task/published'),
      meta: { title: '已发布任务', icon: 'el-icon-caret-right' }
    },
    // 我要入驻
    {
      path: '/enter',
      name: 'enter',
      component: () => import('@/page/stationed/enter'),
      meta: { title: '我要入驻', icon: 'el-icon-caret-right' }
    },
    // 资讯首页
    {
      path: '/information',
      name: 'information',
      component: () => import('@/page/news/informationHome'),
    },
    // 热点关注
    {
      path: '/instantNews',
      name: 'instantNews',
      component: () => import('@/page/news/instantNews')
    },
    // 福布观点
    {
      path: '/insights',
      name: 'insights',
      component: () => import('@/page/news/insights')
    },
    // 热点关注二级页面
    {
      path: '/details',
      name: 'details',
      component: () => import('@/page/news/details')
    },
    {
      path: '/flberNews',
      name: 'flberNews',
      component: () => import('@/page/news/flberNews')
    },
    {
      path: '/analyseReports',
      name: 'analyseReports',
      component: () => import('@/page/news/analyseReports')
    },

    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: () => import('@/page/helpCenter/forgotPassword'),
      meta: { title: '忘记密码怎么办？', icon: 'el-icon-caret-right' }
    },
    {
      path: '/accountProblem',
      name: 'accountProblem',
      component: () => import('@/page/helpCenter/accountProblem'),
      meta: { title: '账户管理常见问题', icon: 'el-icon-caret-right' }
    },
    {
      path: '/demand',
      name: 'demand',
      component: () => import('@/page/helpCenter/demand'),
      meta: { title: '需求方指南', icon: 'el-icon-caret-right' }
    },
    {
      path: '/chanceList',
      name: 'chanceList',
      component: () => import('@/page/recruiting/chanceList'),
      meta: { title: '成员招募机会列表', icon: 'el-icon-caret-right' }
    },
    {
      path: '/chanceDetails',
      name: 'chanceDetails',
      component: () => import('@/page/recruiting/chanceDetails'),
      meta: { title: '成员招募机会详情', icon: 'el-icon-caret-right' }
    },
    // 数据中心
    {
        path: '/assets',
        name: 'assets',
        component: () => import('@/page/data/assets'),
        meta: { title: '数据中心', icon: 'el-icon-caret-right' }
    },
    // 报错反馈页
    {
        path: '/feedback',
        name: 'feedback',
        component: () => import('@/page/error/feedback'),
        meta: { title: '数据中心', icon: 'el-icon-caret-right' }
    },
    { path: '*', redirect: '/404', hidden: true },

]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
export const asyncRouterMap =[]


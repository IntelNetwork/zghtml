let obj = 'taskcenter'
export const task = {
    taskPage: obj + '/api/v1.0/task/list',//分页查询任务
};
export const taskDetails = {
    details: obj + '/api/v1.0/taskdetail/detail', //任务详情
    bidding: obj + '/api/v1.0/bid/bidding', //立即竞标
    taskAdd: obj + '/api/v1.0/task/add', //添加任务
    taskMember: obj + '/api/v1.0/taskmembers/list', //查询任务相关人员
    release: obj + '/api/v1.0/task/get-release', // 已发布
    byBelease: obj + '/api/v1.0/task/get-pass', //已完成
    getCheck: obj + '/api/v1.0/task/get-check', //待审核
    examine: obj + '/api/v1.0/examine/check',  //选标
    start: obj + '/api/v1.0/task/start', //开始任务
    submit: obj + '/api/v1.0/task/submit-accept', //服务方提交验收任务
    confirmAccept: obj + '/api/v1.0/task/confirm-accept',  //需求方确认验收任务
    recommend: obj + '/api/v1.0/recommend/list',  //查询相关任务推荐
};
// 任务类型管理
export const zgtasktype = {
    type: obj + '/api/v1.0/task-type/aggregate' ,//查询所有任务类型
    tindtype: obj + '/api/v1.0/industry/aggregate',//查询所有行业类型
    order: obj + '/api/v1.0/task/order' //最新成交动态
};
// 订单
export const order = {
    select: obj + '/api/v1.0/order/select-order' ,//查询订单详情
    orderAdd: obj + '/api/v1.0/order/add', //任务订单生成
};

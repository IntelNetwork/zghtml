let obj = 'taskcenter'
export const task = {
    taskPage: obj + '/api/v1.0/task/list',//分页查询任务
    
};
export const taskDetails = {
    details: obj + '/api/v1.0/taskdetail/detail', //任务详情
    bidding: obj + '/api/v1.0/bid/bidding', //立即竞标
};
// 任务类型管理
export const zgtasktype = {
    type: obj + '/zgtasktype/lists' ,//查询所有任务类型
    tindtype: obj + '/zgtindtype/lists',//查询所有行业类型
    order: obj + '/api/v1.0/task/order' //最新成交动态
};

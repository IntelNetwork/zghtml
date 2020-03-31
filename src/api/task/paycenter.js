let obj = 'paycenter';
export const pay = {
    channels: obj + '/api/v1.0/pay/channels',//查询所有渠道说明
    paycenter: obj + '/api/v1.0/pay/pay-channels', //获取支付渠道
    create: obj + '/api/v1.0/pay/create-order', //创建支付订单
};
let realnameStatus = value => {
  if (value == 0) {
                return value = "审核中"
            }
            if (value == 1) {
                return value = "已实名"
            }
            if (value == 2) {
                return value = "审核失败"
            }
            if (value == 3) {
                return value = "未提交"
            }
}
export { realnameStatus }
let usershopStatus = value => {
  if (value == 0) {
                return value = "审核中"
            }
            if (value == 1) {
                return value = "已认证"
            }
            if (value == 2) {
                return value = "审核失败"
            }
            if (value == 3) {
                return value = "未提交"
            }
} 
export { usershopStatus }
//时间戳
let time = value => {
  function add0(m) {
      return m < 10 ? '0' + m : m
  }

  var time = new Date(parseInt(value));
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  return y + '-' + add0(m) + '-' + add0(d);
}
export { time }


let carnoend = value =>{
     return value.substring(value.length - 4, value.length)
}
export { carnoend }
let username = value =>{
     return value.substring(value.length - 1, value.length)
}
export { username }

let carnostart = value =>{
       return value.substring(0,4)
}
export { carnostart}
let realname = value =>{
       return value.substring(0,1)
}
export { realname}

let frontdate = value =>{
       return value.substring(5,10)
}
export { frontdate}

let datamonth = value =>{
       return value.substring(6,7)
}
export { datamonth}

let dataday = value =>{
       return value.substring(8,10)
}
export { dataday}

let plantime = value =>{
       return value.substring(0,16)
}
export { plantime}

let postdate = value =>{
     return value.substring(value.length - 8, value.length-3)
}
export { postdate }

let tofixed = value =>{
     return value.toFixed(2)
}
export { tofixed }
//status:0 全部批次，1执行成功，2等待执行，3执行中，4执行失败
let taskstatus = value => {

    if (value == 1) {
        return value = "执行成功"
    }
    if (value == 2) {
        return value = "等待执行"
    }
    if (value == 3) {
        return value = "执行中"
    }
     if (value == 4) {
        return value = "执行失败"
    }
}
export { taskstatus }
// 账单类型
let type = value => {
   if (value == 0) {
        return value = "充值"
    }
    if (value == 1) {
        return value = "支付"
    }
    if (value == 2) {
        return value = "提现"
    }
    if (value == 3) {
        return value = "退款"
    }
     if (value == 7) {
        return value = "信用卡还款"
    }
    if (value == 8) {
        return value = "信用卡还款账户充值"
    }
    if (value == 9) {
        return value = "信用卡管家首笔消费"
    }
    if (value == 10) {
        return value = "新信用卡管家消费"
    }
     if (value == 11) {
        return value = "新信用卡管家还款"
    } 
    if (value == 12) {
        return value = "四要素/银行卡真伪充值"
    }
}
export { type }

let status = value => { //交易状态
     if (value == 0) {
        return value = "待完成"
    }
    if (value == 1) {
        return value = "已成功"
    }
    if (value == 2) {
        return value = "已取消"
    }
    if (value == 3) {
        return value = "待处理"
    }
     if (value == 4) {
        return value = "待结算"
    }
}
export { status }
let tasktype = value => { //还款订单类型

    if (value == 0) {
        return value = "消费"
    }
    if (value == 1) {
        return value = "还款"
    }
}
export { tasktype }

let channelStatus = value => { //通道状态

    if (value == 1) {
        return value = "使用中"
    }
    if (value == 2) {
        return value = "维护中"
    }
}
export { channelStatus }


let operationType = value => { //黑名单权限

    if (value == 0) {
        return value = "登录"
    }
    if (value == 1) {
        return value = "支付"
    }
    if (value == 2) {
        return value = "提现"
    }
}
export { operationType }

let trueFalseBuy = value => { //产品状态

    if (value == 0) {
        return value = "【线上购买】显示价格"
    }
    if (value == 1) {
        return value = "【联系客服】显示价格"
    }
    if (value == 2) {
        return value = "【线上购买】隐藏价格"
    } 
    if (value == 3) {
        return value = "【联系客服】隐藏价格"
    } 
    if (value == 4) {
        return value = "【隐藏产品】"
    }
}
export { trueFalseBuy }
let autostatus = value => { //自动升级设置

    if (value === "") {
        return value = "未启用"
    } 
    if (value === '0') {
        return value = "启用"
    }
    if (value == '1') {
        return value = "未启用"
    }
}
export { autostatus }


let moneyautostatus = value => { //交易自动升级设置

    if (value == '0') {
        return value = "未启用"
    }
    if (value == '1') {
        return value = "启用"
    }
}
export { moneyautostatus }

let codestatus = value => { //激活码状态

    if (value == 0) {
        return value = "未激活"
    }
    if (value == 1) {
        return value = "已激活"
    }
} 
export { codestatus }
let cointype = value => { //积分走向

    if (value == 0) {
        return value = "增加"
    }
    if (value == 1) {
        return value = "减少"
    }
}
export { cointype }

let exchangeType = value => { //积分走向

    if (value == 0) {
        return value = "兑换审核"
    }
    if (value == 1) {
        return value = "返利审核"
    }
}
export { exchangeType }


let orderStatus = value => { //积分走向

    if (value == 0) {
        return value = "审核中"
    }
    if (value == 1) {
        return value = "审核成功"
    }
}
export { orderStatus }

let bankcardType = value => { //银行卡类型

    if (value == 0) {
        return value = "充值卡"
    }
    if (value == 2) {
        return value = "提现卡"
    }
}
export { bankcardType }


let roleid = value => { //积分走向

    if (value == 1) {
        return value = "老板"
    }
    if (value == 2) {
        return value = "贴牌商"
    }
    if (value == 3) {
        return value = "代理商"
    }
    if (value == 4) {
        return value = "客服"
    }
}
export { roleid }

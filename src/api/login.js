import request from '@/utils/request'
import qs from 'qs'

export function mobile(mobile,mobileCode) {
  return request({
    url: '/usercenter/api/v1.0/user/regist-mobile',
    method: 'post',
    data: qs.stringify({
      mobile:mobile,
      mobileCode:mobileCode
    })
  })
}

let obj = 'usercenter'
export const regist = {
   regist: obj + '/api/v1.0/user/regist-mobile',//注册接口
   registVeri: obj + '/api/v1.0/user/veri-code', //发送验证码接口
   check: obj + '/api/v1.0/user/check-regist',//验证是否注册
    
};
export const login = {
  login: obj + '/api/v1.0/user/login',//登录接口
  loginVeri: obj + '/api/v1.0/user/login-veri-code', //发送验证码接口
  userName: obj + '/user/user-by-name',
  loginOut:obj + '/api/v1.0/user/logout'
};

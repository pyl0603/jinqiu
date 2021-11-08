import request from '../request'

/**
 *  账号密码登录
 * @param {*} data
 */
export function login(data) {
  return request({
    url: '/login/account',
    method: 'post',
    data
  })
}

/**
 * 登出
 */
export function loginout() {
  return request({
    url: '/auth/logout',
    method: 'post'
  })
}

/**
 * 获取后台用户列表
 * @param {*} params
 */
export function usersList(params) {
  return request({
    url: '/users',
    method: 'get',
    params
  })
}

/**
 * 新增后台用户
 * @param {*} data
 */
export function addUsers(data) {
  return request({
    url: '/users',
    method: 'post',
    data
  })
}

/**
 * 删除后台用户
 * @param {*} data
 */
export function delUsers(id,data) {
  return request({
    url: `/users/${id}/manager`,
    method: 'patch',
    data
  })
}

/**
 * 修改后台用户信息
 * @param {*} data
 */
export function updateUsers(id,data) {
  return request({
    url: `/users/${id}`,
    method: 'put',
    data
  })
}

/**
 * 发送验证码
 * @param {*} params
 */
export function sms(params) {
  return request({
    url: '/login/sendCode',
    method: 'get',
    params
  })
}

/**
 * 忘记密码
 * @param {*} data 
 */
export function pwdUpdate(data) {
  return request({
    url: '/login/pwdUpdate',
    method: 'post',
    data
  })
}

/**
 * 实名认证
 * @param {*} data 
 */
export function apply(data) {
  return request({
    url: '/login/expert/apply',
    method: 'POST',
    data
  })
}

/**
 * 是否注册
 * @param {*} data 
 */
export function isRegister(data) {
  return request({
    url: '/login/register',
    method: 'POST',
    data
  })
}

/**
 * 专家职业类型
 */
export function professioTypes() {
  return request({
    url: '/login/expert/professionType',
    method: 'get'
  })
}

/**
 * 
 * 获取用户信息
 */
export function userInfo() {
  return request({
    url: '/user-info',
    method: 'get'
  })
}

export function isApply(params) {
  return request({
    url: '/login/isApply',
    method: 'get',
    params
  })
}

import axios from 'axios';
import { Notify } from 'vant';
import qs from 'qs'


axios.defaults.timeout = 30000

// 返回其他状态吗
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500 // 默认的
}
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true


// HTTPrequest拦截
axios.interceptors.request.use(config => {


  const isToken = (config.headers || {}).isToken === false
  //   const token = store.getters.access_token
  if (sessionStorage.getItem('token')) {
    var token = JSON.parse(sessionStorage.getItem('token')).access_token

  }

  if (token && !isToken) {
    config.headers['Authorization'] = 'Bearer' + token // token
  }


  if (config.method === 'get') {
    config.paramsSerializer = function (params) {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    }
  }

  config.headers['VERSION'] = '28';


  return config
}, error => {
  return Promise.reject(error)
})

// HTTPresponse拦截
axios.interceptors.response.use(res => {

  const status = Number(res.status) || 200
  //   const message = res.data.msg || errorCode[status] || errorCode['default']
  if (status === 401) {
    Notify({
      message: message,
      type: 'error'
    })

    return
  }

  if (status !== 200 || res.data.code === 1) {
    Notify({
      message: message,
      type: 'error'
    })
    return Promise.reject(new Error(message))
  }


  return res
}, error => {

  return Promise.reject(new Error(error))
})

export default axios
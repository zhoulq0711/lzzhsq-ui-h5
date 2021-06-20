import request from '../router/axios.js'
import qs from 'qs'

//查询
export function list(query) {
  return request({
    url: '/sqjw/cyry/list',
    method: 'get',
    params: query,
  })
}
//新增
export function insert(obj) {
  return request({
    url: '/sqjw/cyry/insert',
    method: 'post',
    data: obj
  })
}
//修改
export function update(obj) {
  return request({
    url: '/sqjw/cyry/update ',
    method: 'post',
    data: obj
  })
}

//删除
export function cancel(obj) {
  return request({
    url: '/sqjw/cyry/cancel?pk=' + obj,
    method: 'get'
  })
}

//地址选择
export function addrSearch(obj) {

  return request({
    url: '/sqjw/addrSearch',
    method: 'get',
    params: {
      queryStr: obj

    }
  })
}

/*单条详细信息*/
export function detail(obj) {
  return request({
    url: '/sqjw/cyry/detail',
    method: 'get',
    params: { 'pk': obj }
  })
}

/*图片上传*/
export function uploadimg(obj) {

  return request({
    url: '/sqjw/cyry/cyryxp/upload',
    method: 'post',
    data: obj
  })
}

/*图片删除*/
export function cancelpic(obj) {
  return request({
    url: '/sqjw/cyry/cyryxp/cancel?pk='+obj,
    method: 'get'
  })
}

// token
export function getToken(data, query) {

  // let data = qs.stringify({
  //   username: 'admin',
  //   password: 'rKu1/348LvKp0rsVC06eCA==',
  //   scoped: 'server',
  //   grant_type: 'password'
  // })
  return request({
    url: '/auth/oauth/token',
    headers: {
      isToken: false,
      'TENANT-ID': '1',
      'Authorization': 'Basic dGVzdDp0ZXN0'
    },
    method: 'post',
    params: query,
    data: data
  })
}

/**
 * 获取验证码
 * @param query 查询条件
 * @param code 验证码对象
 * @returns {Promise<T>}
 */
export function getCode(query, code) {
  return request({
    url: '/code/num',
    method: 'get',
    params: {
      randomStr: query
    },
    responseType: 'arraybuffer'
  }).then(response => {
    // console.log(response)
    //将从后台获取的图片流进行转换
    return 'data:image/png;base64,' + btoa(
      new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
    )

  })
  // .catch(function (err) {
  //   console.log(err)
  // })
}



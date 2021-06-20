import axios from '../router/axios.js'

// 新增自定义字典接口
export function fetchDictList(query) {
    return axios({
      url: '/admin/dict/zdpage',
      method: 'get',
      params: query
    })
  }
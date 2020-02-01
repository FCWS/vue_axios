/**
 *article模块接口
*/
import axios from './axios'
import base from '../request/api/base'
// import qs from 'qs'

const user = {
  login (params) {
    return axios.post(`${base.url_dev}/user/login`, params)
  }
}

export default user

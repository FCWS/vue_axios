/**
 *article模块接口
*/
import axios from './axios'
import base from '../request/api/base'
// import qs from 'qs'
const article = {

  // 新闻列表
  getAll () {
    return axios.get(`${base.url_dev}/article/getAll`)
  },

  getAllAuth () {
    return axios.post(`${base.url_dev}/article/getAllAuth`)
  }
}
export default article

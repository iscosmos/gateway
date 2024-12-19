import axios from 'axios'
import { MessagePlugin } from 'tdesign-vue-next'

const request = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/gb',
  timeout: 30000,
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error.message)

    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    let message = ''
    const status = error.response.status

    switch (status) {
      case 401:
        message = '请重新登录'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现故障'
        break
      default:
        message = '网络出现错误'
        break
    }

    // 提示错误信息
    MessagePlugin.error({ content: message })

    return Promise.reject(error)
  }
)

export default request

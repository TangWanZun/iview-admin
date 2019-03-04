import HttpRequest from '@/libs/axios'
// import axios from 'axios'

import config from '@/config'
import iView from 'iview'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest(baseUrl)

const request = function (para) {
  const _para = {
    // 数据是否直接在root展示  默认为false
    root: para.root || false
  }
  return new Promise(function (resolve, reject) {
    axios.request(para)
      .then(function (response) {
        // 实际数据
        var resData = response.data
        switch (response.status) {
          // 数据传递正确
          case 200: {
            if (_para.root) {
              resolve(resData)
              break
            }
            if (resData.success) {
              // 后端返回数据正确
              resolve(resData.data)
            } else {
              // 后端返回数据出现错误
              iView.Message.error(resData.msg)
              reject(resData)
            }
            break
          }
          // 后台系统级错误
          default: {
            // 此错误API系列函数无法处理，
            iView.Message.error(resData.msg)
          }
        }
      })
    // axios系统级错误
      .catch(function (error) {
        // 此错误API系列函数无法处理，
        iView.Message.error(error.toString())
      })
  })
}

export default request

/**
 * 这里使用的都是通用接口
 */
import request from '@/libs/api.request'

/**
 * 获取表信息
 */
export const getTableList = ({
  // 表名
  url,
  page=1
}={}) => {
  return request({
    //这里为了测试方便统一使用一个url
    url: 'GetTableList',
    data: {
      //这个是测试属性
      url:url,
      page: page,
      start: 0,
      limit: 25
    },
    method: 'post'
  })
}

/**
 * 获取表信息
 */
export const getDynamicList = ({
  scopeName,
  docName,
  codeName,
  needTotal,
  p1,p2,p3,p4,p5,
  query,page,start,limit=25
}) => {
  return request({
    url: 'GetDynamicList',
    data:{
      scopeName,
      docName,
      codeName,
      needTotal,
      p1,p2,p3,p4,p5,
      query,page,start,limit
    },
    method: 'post'
  })
}

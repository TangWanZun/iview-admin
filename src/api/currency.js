/**
 * 这里使用的都是通用接口
 */
import request from '@/libs/api.request'

/**
 * 获取表信息
 */
export const getTableList = ({
  // 表名
  tableName
}) => {
  return request({
    url: 'GetTableList',
    data: {
      tableName
    },
    method: 'post'
  })
}

import request from '@/libs/api.request'

export const getTableData = () => {
  return request({
    url: 'get_table_data',
    method: 'get'
  })
}

export const getDragList = () => {
  return request({
    url: 'get_drag_list',
    method: 'get'
  })
}

export const errorReq = () => {
  return request({
    url: 'error_url',
    method: 'post'
  })
}

export const saveErrorLogger = info => {
  return request({
    url: 'save_error_logger',
    data: info,
    method: 'post'
  })
}

export const uploadImg = formData => {
  return request({
    url: 'image/upload',
    data: formData
  })
}

export const getOrgData = () => {
  return request({
    url: 'get_org_data',
    method: 'get'
  })
}

export const getTreeSelectData = () => {
  return request({
    url: 'get_tree_select_data',
    method: 'get'
  })
}

import { getParams } from '@/libs/util'
const USER_MAP = {
  super_admin: {
    name: 'super_admin',
    user_id: '1',
    access: ['super_admin', 'admin'],
    token: 'super_admin',
    avator: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
  }
}

const USER_INFO = {
  'data':
  {
    'LoginInfo': { 'Id': 0, 'UserCode': 'admin', 'UserCodeAlias': 'administrator', 'UserName': '系统管理员', 'CmpCode': 'G00033', 'CmpName': '北京鹏龙海依捷汽车销售服务有限公司', 'DeptCode': 'D0000015', 'DeptName': 'BDC', 'BranchCode': '', 'BranchName': '', 'ProfilePhoto': '' },
    'IsBindWeChat': true
  },
  'success': true,
  'msg': '操作已成功完成！'
}

export const login = req => {
  req = JSON.parse(req.body)
  return {
    'data':
    {

    },
    'success': true,
    'msg': '操作已成功完成！'
  }
}

export const getUserInfo = req => {
  // const params = getParams(req.url)
  return USER_INFO
}

export const logout = req => {
  return null
}

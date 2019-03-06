import Mock from 'mockjs'
import { login, logout, getUserInfo } from './login'
// import { getTableData, getDragList, uploadImage, getOrgData, getTreeSelectData, getRouter } from './data'
import { getRouter, getLoginMenus} from './data'
// import { getMessageInit, getContentByMsgId, hasRead, removeReaded, restoreTrash, messageCount } from './user'
import { getTableList } from './data/getTableList.js'
import { getDynamicList } from './data/getDynamicList.js'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 500
})


// Mock.mock(/\/get_table_data/, getTableData)
// Mock.mock(/\/get_drag_list/, getDragList)
// Mock.mock(/\/save_error_logger/, 'success')
// Mock.mock(/\/image\/upload/, uploadImage)
// Mock.mock(/\/message\/init/, getMessageInit)
// Mock.mock(/\/message\/content/, getContentByMsgId)
// Mock.mock(/\/message\/has_read/, hasRead)
// Mock.mock(/\/message\/remove_readed/, removeReaded)
// Mock.mock(/\/message\/restore/, restoreTrash)
// Mock.mock(/\/message\/count/, messageCount)
// Mock.mock(/\/get_org_data/, getOrgData)
// Mock.mock(/\/get_tree_select_data/, getTreeSelectData)

/**
 * 系统接口
 */
// 登录
Mock.mock(/\/login/, login)
//获取用户信息
Mock.mock(/\/get_info/, getUserInfo)
//退出登录
Mock.mock(/\/logout/, logout)
//获取左侧菜单栏
Mock.mock(/\/Home\/GetLoginMenus/, getRouter)
/**
 * 通用接口
 */
//获取用户列表
Mock.mock(/\/GetTableList/, getTableList)
//获取负责下拉框数据
Mock.mock(/\/GetDynamicList/, getDynamicList)
/**
 * 非通用接口
 */
//获取菜单定义
Mock.mock(/\/Home\/GetMenuList/, getLoginMenus)

export default Mock

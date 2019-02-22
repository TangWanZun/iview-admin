export default [
  // 菜单定义
  {
    path: '/sm/Menu',
    name: 'Menu',
    component: r => require.ensure([], () => r(require('@/views/sm/Menu')), 'smMenu')
  },
  // 角色定义
  {
    path: '/sm/Roles',
    name: 'Roles',
    component: r => require.ensure([], () => r(require('@/views/sm/Roles')), 'Roles')
  }
]

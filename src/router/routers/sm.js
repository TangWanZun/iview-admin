import Main from '@/components/main'
/**
 * 系统管理
 */
export default [
  {
    path: '/sm',
    name: "a8b78528734945cca6632800a6f29360",
    component: Main,
    meta:{title:'系统管理'},
    children: [
      {
        path: 'Menu',
        name: 'Menu',
        meta: {
          title: '菜单定义',
          icon: 'md-notifications'
        },
        component: () => import('@/view/sm/Menu')
      },
			{
			  path: 'Roles',
			  name: 'Roles',
			  meta: {
			    title: '角色定义',
			    icon: 'md-notifications'
			  },
			  component: () => import('@/view/sm/Roles')
			},
			{
			  path: 'Ousr',
			  name: 'Ousr',
			  meta: {
			    title: '账号管理',
			    icon: 'md-notifications'
			  },
			  component: () => import('@/view/sm/Ousr')
			}
    ]
  }
]

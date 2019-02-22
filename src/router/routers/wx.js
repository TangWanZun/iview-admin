import Main from '@/components/main'

export default [
  {
    path: '/wx',
    name: '76e9d46113a64846a63b453c1325fd63',
    component: Main,
    children: [
      {
        path: 'wx/WeiXinRegisterUser',
        name: 'WeiXinRegisterUser',
        meta: {
          title: '微信用户',
          icon: 'md-notifications'
        },
        component: () => import('@/view/multilevel/level-2-1.vue')
      }
    ]
  }
]

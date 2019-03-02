import Main from '@/components/main'
/**
 * 基础数据
 */
export default [
  {
    path: '/md',
    name: "5522c8b95c5c4a9d8286c73bb1deb80c",
    component: Main,
    meta:{title:'基础数据'},
    children: [
      {
        path: 'Dept',
        name: 'Dept',
        meta: {
          title: '部门定义',
          icon: 'md-notifications'
        },
        component: () => import('@/view/md/Dept')
      }
    ]
  }
]

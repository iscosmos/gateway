import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/device',
    name: 'Device',
    component: Layout,
    redirect: '/device/list',
    children: [
      {
        path: 'list',
        name: 'DeviceList',
        component: () => import('@/pages/device/list/index.vue'),
      },
      {
        path: 'category',
        name: 'DeviceCategory',
        component: () => import('@/pages/device/category/index.vue'),
      },
    ],
  },
]

export default routes

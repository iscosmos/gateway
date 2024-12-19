import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/maintenance',
    name: 'Maintenance',
    component: Layout,
    redirect: '/maintenance/stream',
    children: [
      {
        path: 'stream',
        name: 'MaintenanceStream',
        component: () => import('@/pages/maintenance/stream/index.vue'),
      },
      {
        path: 'log',
        name: 'MaintenanceLog',
        component: () => import('@/pages/maintenance/log/index.vue'),
      },
    ],
  },
]

export default routes

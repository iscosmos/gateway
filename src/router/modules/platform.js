import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/platform',
    name: 'Platform',
    component: Layout,
    redirect: '/platform/cascade',
    children: [
      {
        path: 'cascade',
        name: 'PlatformCascade',
        component: () => import('@/pages/platform/cascade/index.vue'),
      },
      {
        path: 'current',
        name: 'PlatformCurrent',
        component: () => import('@/pages/platform/current/index.vue'),
      },
    ],
  },
]

export default routes

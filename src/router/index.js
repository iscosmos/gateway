import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import NotFound from '@/pages/404/index.vue'

import deviceRoutes from './modules/device'
import platformRoutes from './modules/platform'
import maintenanceRoutes from './modules/maintenance'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/pages/dashboard/index.vue'),
      },
    ],
  },
  ...deviceRoutes,
  ...platformRoutes,
  ...maintenanceRoutes,
  {
    path: '/login',
    component: 'Login',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/admin',
    name: 'Admin',
    component: ()=> import('../views/Home.vue'),
    children: [
      {
        path: '/admin/users/userAdmin',
        name: 'userAdmin',
        component: () => import('@/components/users.vue'),
        meta: {
          title:'用户管理'
        }
      },
      {
        path: '/admin/users/travel',
        name: 'travel',
        component: () => import('@/components/travel.vue'),
        meta: {
          title:'景点管理'
        }
      }
    ]
  },
  {
    path: '/',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import( '@/views/regist.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

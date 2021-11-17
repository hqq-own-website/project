import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import refresh from '../views/refresh.vue'
import dailyTour from '../views/dailyTour.vue'
import register from '../views/register.vue'
import dailyDetails from '../views/dailyDetails.vue'
import allLists from '../views/allLists.vue'

import allListsDetails from '../views/allListsDetails.vue'
const routes: Array<RouteRecordRaw> = [
  
  // 首页
  {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },

// 榜单详情
  {
    path: '/allListsDetails',
    name: 'allListsDetails',
    component: allListsDetails
  },


  // 一日游详情
  {
    path: '/dailyDetails',
    name: 'dailyDetails',
    component:dailyDetails
  },

  // 全部榜单
  {
    path: '/allLists',
    name: 'allLists',
    component:allLists
  },

  // 加载页面
  {
    path: '/refresh',
    name: 'refresh',
    component: refresh
  },

  // 登录
  {
    path: '/',
    name: 'Login',
    component: Login
  },

  //城市列表
  {
    path: '/cityList',
    name: 'cityList',
    component: () => import(/* webpackChunkName: "about" */ '../views/cityList.vue')
  },

  //一日游
  {
    path: '/dailyTour',
    name: 'dailyTour',
    component: dailyTour
  },

  {
    path: '/register',
    name: 'register',
    component: register
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

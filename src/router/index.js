import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../components/Home') // 路由按需加载
  },
  {
    path: '/use',
    component: () => import('../components/Use') // 路由按需加载
  },
]

export default createRouter({
  // history: createWebHistory() // 使用hsitory路由
  history: createWebHashHistory(), // 使用hash路由
  routes,
})
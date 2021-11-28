import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ResultSearch',
    name: 'ResultSearch',
    component: () => import('../views/ResultSearch.vue')
  },
  {
    path: '/ResultMap/:id',
    name: 'ResultMap',
    component: () => import('../views/ResultMap.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

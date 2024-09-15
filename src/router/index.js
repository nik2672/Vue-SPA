import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/units',
    name: 'units',
    component: () => import(/* webpackChunkName: "about" */ '../views/UnitsView.vue')
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import(/* webpackChunkName: "about" */ '../views/TasksView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

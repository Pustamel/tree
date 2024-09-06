import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/tree",
      meta: { requiresAuth: false },
      name: "-",
    },
    {
      path: '/tree',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: false },
    },
  ]
})

export default router

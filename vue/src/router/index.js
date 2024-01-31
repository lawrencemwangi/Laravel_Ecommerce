import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Contact from '../views/ContactView.vue'
import Shop from '../views/ShopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/CategoryView.vue')
    },
    {
      path:'/about',
      name: 'about',
      component:About,
    },
    {
      path:'/contact',
      name:'contact',
      component:Contact,
    },
    {
      path:'/shop',
      name:'shop',
      component: Shop,
    },
  ]
})

export default router

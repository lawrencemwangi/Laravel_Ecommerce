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
      path: '/admin/category',
      name: 'admin/category',
      component: () => import('../views/admin/products/category/Categoryview.vue')
    },
    {
      path:'/admin/category/update',
      name: 'admin/category/update',
      component: () =>import('../views/admin/products/category/UpdateView.vue')
    },
    {
      path:'/admin/category/add',
      name:'admin/category/add',
      component: () =>import('../views/admin/products/category/AddView.vue')
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

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Contact from '../views/ContactView.vue'
import Shop from '../views/ShopView.vue'
import Login from '../components/LoginComponent.vue'
import Register from '../components/RegisterComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{ public:true },
      component: HomeView
      
    },
    {
      path:'/login',
      name: 'login',
      component: Login,
      meta:{ public:true }
    },
    {
      path:'/register',
      name: 'register',
      component:Register,
      meta:{ public:true }
    },
    {
      path: '/admin/category',
      name: 'admin-category',
      component: () => import('../views/admin/products/category/Categoryview.vue')
    },
    {
      path:'/admin/category/update',
      name: 'admin-category-update',
      component: () =>import('../views/admin/products/category/UpdateView.vue')
    },
    {
      path:'/admin/category/add',
      name:'admin-category-add',
      component: () =>import('../views/admin/products/category/AddView.vue')
    },
    {
      path:'/admin/dashboard',
      name:'admin-dashboard',
      component: () =>import('../views/admin/DashboardView.vue')
    },
    {
      path:'/admin/dashboard',
      name:'admin-dashboard',
      meta: { requiresAuth: true },
      component: () =>import('../views/admin/DashboardView.vue')
    },
    {
      path:'/admin/admins',
      name:'admin-admins',
      component: () =>import('../views/admin/AdminView.vue')
    },
    {
      path:'/admin/users',
      name:'admin-users',
      component: () =>import('../views/admin/UserView.vue')
    },
    {
      path:'/admin/orders',
      name:'admin-orders',
      component: () =>import('../views/admin/OrderView.vue')
    },
    {
      path:'/admin/products',
      name:'admin-products',
      component: () =>import('../views/admin/ProductsView.vue')
    },
    {
      path:'/admin/location',
      name:'admin-location',
      component: () =>import('../views/admin/LocationView.vue')
    },
    {
      path:'/about',
      name: 'about',
      meta:{ public:true },
      component:About,
    },
    {
      path:'/contact',
      name:'contact',
      meta:{ public:true },
      component:Contact,
    },
    {
      path:'/shop',
      name:'shop',
      meta:{ public:true },
      component: Shop,
    },
  ]
})

// router.beforeEach((to,from,next) => {
//   const isAuthenticated = !!localStorage.getItem('token');

//   if(!to.meta.public && !isAuthenticated){
//     next({name: 'login'});
//   }else{
//     next();
//   }
// });

export default router

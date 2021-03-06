import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('../views/PostView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/LoginView.vue")
  },
  {
    path: '/register',
    name: 'register',
    component: () => import("../views/RegisterView.vue")
  },
  {
    path: '/usermanager',
    name: 'usermanager',
    component: () => import('../views/UserManager.vue')
  },
  {
    path: '/personcenter',
    name: 'personcenter',
    component: () => import('../views/PersonCenter.vue')
  },
  {
    path: '/sector',
    name: 'sector',
    component: () => import('../views/SectorView.vue')
  },
  {
    path: '/sector/newpost',
    name: 'newpost',
    component: () => import('../views/NewPostView.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView'),
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, saveTop) {
    return { x: 0, y: 0 };
  }
})

export default router

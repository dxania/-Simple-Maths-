import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/simplemaths',
    name: 'SimpleMaths',
    component: () => import('../components/LandingPage.vue')
  },
  
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import('../components/Calculator.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

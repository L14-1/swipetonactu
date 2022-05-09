import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Actu from '../views/Actu.vue'
import Settings from '../views/Settings.vue'
import Articles from '../views/Articles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/actu',
    name: 'Actu',
    component: Actu
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router

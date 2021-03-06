import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/SplashScreen.vue'
import mainn from '../views/main.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home,
    name: 'FormHome'
  },
  {
    path: '/builder',
    component: mainn,
    name: 'FormBuilder'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

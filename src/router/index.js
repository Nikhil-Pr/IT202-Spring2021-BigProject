import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing'
import CurrentSeason from "../views/CurrentSeason";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:Landing
  },
  {
    path: '/current',
    name: 'Current Season',
    component: CurrentSeason
  }
]

const router = new VueRouter({
  mode: 'abstract',
  base: process.env.BASE_URL,
  routes
})

export default router

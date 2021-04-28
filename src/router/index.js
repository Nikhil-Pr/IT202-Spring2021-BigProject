import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing'
import CurrentSeason from "../views/CurrentSeason";
import HistoricData from "../views/HistoricData";
import ViewFavorites from "@/views/ViewFavorites";
import TrackWeather from "@/views/TrackWeather";
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
  },
  {
    path: '/historic',
    name: 'Historic Data',
    component: HistoricData
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: ViewFavorites
  },
  {
    path: '/upcoming',
    name: 'Upcoming GP info',
    component: TrackWeather
  }

]

const router = new VueRouter({
  mode: 'abstract',
  base: process.env.BASE_URL,
  routes
})

export default router

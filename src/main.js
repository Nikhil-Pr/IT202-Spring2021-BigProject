import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import VueApexCharts from 'vue-apexcharts';
import store from './store'
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  VueApexCharts,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.component('apexchart', VueApexCharts)

router.replace('/')
document.title = 'Formula Stats'

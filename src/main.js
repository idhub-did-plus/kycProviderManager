import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
import store from '../src/store'
import "./stylesheets/main.scss"

Vue.config.productionTip = false

import axios from "axios"
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

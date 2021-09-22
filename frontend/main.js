import './assets/fonts.css'
import './assets/variables.css'
import './assets/app.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router/router'

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import './assets/fonts.css'
import './assets/variables.css'
import './assets/app.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router/router'

Vue.use(VueRouter)
Vue.use(VueMeta)

// Common Components Autoload
const requireComponent = require.context('./components/common/', true, /\.vue$/)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.replace(/^.*[\\/]/, '').replace(/\.\w+$/, '')
  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

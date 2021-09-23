import VueRouter from 'vue-router'
import routeNames from './names.js'

const routes = [
  {
    path: '/',
    name: routeNames.PAGE_HOME,
    component: () => import(/* webpackChunkName: "pages-index" */ '../pages/Index.vue'),
  },
  {
    path: '/bacon',
    name: routeNames.PAGE_BACON,
    component: () => import(/* webpackChunkName: "pages-bacon" */ '../pages/Bacon.vue'),
  },
  {
    path: '/checkout',
    name: routeNames.PAGE_CHECKOUT,
    component: () => import(/* webpackChunkName: "pages-checkout" */ '../pages/Checkout.vue'),
  },
]

export default new VueRouter({
  mode: 'history',
  routes,
})

export { routeNames }

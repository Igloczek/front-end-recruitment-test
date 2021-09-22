import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: () => import(/* webpackChunkName: "pages-index" */ '../pages/Index.vue') },
  { path: '/bacon', component: () => import(/* webpackChunkName: "pages-bacon" */ '../pages/Bacon.vue') },
  { path: '/checkout', component: () => import(/* webpackChunkName: "pages-checkout" */ '../pages/Checkout.vue') },
]

export default new VueRouter({
  mode: 'history',
  routes,
})

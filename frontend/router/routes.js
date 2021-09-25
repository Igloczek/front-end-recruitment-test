import routeNames from './names'

export default [
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

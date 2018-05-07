// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'

import '../sass/main.scss'
import App from './App'
import { routes } from './routes'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter)
// Vue.use(VueResource)

/* eslint-disable no-new */
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

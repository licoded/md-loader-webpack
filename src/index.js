import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router.config'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
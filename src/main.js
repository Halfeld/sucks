import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'

import Home from './components/home.vue'
import Murilo from './components/murilo.vue'
import Witt from './components/witt.vue'
import Ythalo from './components/ythalo.vue'

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/murilo', component: Murilo },
    { path: '/witt', component: Witt },
    { path: '/ythalo', component: Ythalo }
  ]
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')

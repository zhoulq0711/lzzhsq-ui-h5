import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import 'amfe-flexible'
import '../src/permission'

import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/styles/reset.scss'
import './assets/styles/border.scss'


import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/main.css';
Vue.use(Vant);
Vue.use(VueAxios, axios);



Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   // console.log(to)
//   store.commit('gettitle', to.meta.title);
//   store.commit('getlevel', to.meta.level);
//   document.title = to.meta.title
//   next()
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

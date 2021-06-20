import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '',
    show_topnav: ''
  },
  mutations: {
    gettitle: (state, data) => {
      state.title = data
    },
    getlevel: (state, data) => {
      state.show_topnav = data != '1' ? true : false
    },
  },
  actions: {

  }
})

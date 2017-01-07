import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Vue Boilerplate',
  },
  mutations: {
    editMessage(state, message) {
      state.message = message
    }
  }
})
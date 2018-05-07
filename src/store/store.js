import Vue from 'vue'
import Vuex from 'vuex'
import start from './modules/start'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    start
  }
})

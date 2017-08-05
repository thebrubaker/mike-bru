import Vue from 'vue'
import Vuex from 'vuex'
import { bootstrap } from '~/utils/vuex'

import navigation from './modules/navigation'

Vue.use(Vuex)

export default new Vuex.Store(bootstrap({
  state: {
    ready: false
  },
  modules: {
    navigation
  }
}))

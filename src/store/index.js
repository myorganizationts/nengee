import Vue from 'vue'
import Vuex from 'vuex'
import {myState} from './modules/formdata'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

const store = new Vuex.Store({
  // modules: {
  //   formdata
  // },
  state: myState,
  strict: debug
  // plugins: debug ? [createLogger()] : ''
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'

import wallet from './wallet'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      wallet
    },
    plugins: [],
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
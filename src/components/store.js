import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()], 
    state: {
      
      style:"",
    },
    mutations: {
        
        setstyle: (state, style) => state.style = style,
    },
    getters: {
        
        getstyle: (state) =>
        {
            return state.style
        }
    }
  })
  export default store;
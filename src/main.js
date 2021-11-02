import Vue from 'vue'
import App from './components/App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import St from './components/St.vue'
import store from './components/store.js'

const routes = [
    {path: '/', component: St},
    
]
const router = new VueRouter({
    routes
})


    Vue.use(VueAxios, axios)
    Vue.use(VueRouter)


new Vue({
   render: h => h(App),
   el:'#app',
   router,
   store
})

import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-palylist-e6df4.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'afsafsafs'
axios.defaults.headers.get['Accepts'] = 'Application/json'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

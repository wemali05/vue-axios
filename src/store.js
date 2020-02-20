import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {

  },
  actions: {
    signup({commit}, authData){
            axios.post('/accounts:signUp?key=AIzaSyCiRbhYIrhfMKF--K6fzSbNW4cpvmN_EBw', {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(res => console.log(res))
                .catch(err => console.log(err))
    },

    login({commit}, authData) {
              axios.post('/accounts:signInWithPassword?key=AIzaSyCiRbhYIrhfMKF--K6fzSbNW4cpvmN_EBw', {
                      email: authDataemail,
                      password: authData.password,
                      returnSecureToken: true
                  })
                  .then(res => console.log(res))
                  .catch(err => console.log(err))
    }
  },
  getters: {

  }
})
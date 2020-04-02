import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isLoggedIn: true,
    user: null
  },
  getters: {
    
  },
  mutations: {
    setUser(state, payload) {
      this.state.user = payload.userId;
      console.log("mutations");
      this.isLoggedIn = true;
    }

    
  },
  actions: {
    userLogin({ commit }, payload) {
      console.log("actions")
      commit('setUser', payload);
    },
  },
});
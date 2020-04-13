import Vue from 'vue';
import Vuex from 'vuex';

import userInfo from './modules/userInfo.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    userInfo, 
  }
});
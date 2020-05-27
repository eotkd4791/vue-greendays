import Vue from 'vue';
import Vuex from 'vuex';

import userInfo from './userInfo.js';
import products from './products.js';
import brands from './brands.js';
import preorders from './preorders.js';
import myitems from './myitems.js';
import categories from './categories.js';
import signup from './signup.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    userInfo,
    products,
    brands,
    preorders,
    myitems,
    categories,
    signup,
  }
});
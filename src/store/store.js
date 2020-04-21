import Vue from 'vue';
import Vuex from 'vuex';

import userInfo from './modules/userInfo.js';
import products from './modules/products.js';
import brands from './modules/brands.js';
import reviews from './modules/reviews.js';
import preorders from './modules/preorders.js';
import myitems from './modules/myitems.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    userInfo, 
    products,
    brands,
    reviews,
    preorders,
    myitems,
  }
});
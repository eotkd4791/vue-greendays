import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import { router } from './routes/index.js';
import { store } from './store/store.js';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
});

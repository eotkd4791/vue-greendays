import Vue from 'vue'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify';
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

import { router } from '@/routes/index.js';
import { store } from '@/store/store.js';

Vue.use(VueLodash, { name: 'vueLodash' , lodash: lodash });

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
});

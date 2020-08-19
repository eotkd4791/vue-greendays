import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import shopping from './modules/shopping';

Vue.use(Vuex);

import state from './state.js';
import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default new Vuex.Store({
	modules: {
		auth: {
			namespaced: true,
			...auth,
		},
		shopping: {
			namespaced: true,
			...shopping,
		},
	},
	state,
	mutations,
	getters,
	actions,
});

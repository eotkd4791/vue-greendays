import Vue from 'vue';
import App from '@/App.vue';
import router from '@/routes/index.js';
import store from '@/store/store.js';
import vuetify from '@/plugins/vuetify';
import VueChatScroll from 'vue-chat-scroll';

Vue.use(VueChatScroll);

new Vue({
	el: '#app',
	router,
	store,
	vuetify,
	render: h => h(App)
});

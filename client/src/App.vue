<template>
	<main class="main" onselectstart="return false">
		<toolbar-view />
		<div v-if="onSpace" class="space" />
		<sync-loader :loading="isShownSpinner"></sync-loader>
		<router-view />
		<footer-view />
	</main>
</template>

<script>
import ToolbarView from '@/views/ToolbarView.vue';
import FooterView from '@/views/FooterView.vue';
import Bus from '@/utils/bus.js';
import { mapActions } from 'vuex';
import SyncLoader from 'vue-spinner/src/SyncLoader.vue';

export default {
	components: {
		ToolbarView,
		FooterView,
		SyncLoader,
	},
	data() {
		return {
			onSpace: false,
			isShownSpinner: false,
		};
	},
	methods: {
		...mapActions({
			IS_LOGGED_IN: 'auth/IS_LOGGED_IN',
			FETCH_ALL_PRODUCT: 'shopping/FETCH_ALL_PRODUCT',
		}),

		toggleSpace() {
			this.onSpace = !this.onSpace;
		},
		onSpinner() {
			this.isShownSpinner = true;
		},
		offSpinner() {
			this.isShownSpinner = false;
		},
	},
	created() {
		this.FETCH_ALL_PRODUCT();
	},
	mounted() {
		Bus.$on('showUserInfo', this.toggleSpace);
		Bus.$on('on:spinner', this.onSpinner);
		Bus.$on('off:spinner', this.offSpinner);
	},
};
</script>

<style>
@import './style/reset.css';
@font-face {
	font-family: 'Montserrat';
	src: url('./assets/fonts/Montserrat-Light.ttf');
}
.main {
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0 auto;
}
.space {
	width: 100%;
	height: 280px;
}
</style>

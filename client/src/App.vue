<template>
	<main class="main" onselectstart="return false">
		<toolbar-view />
		<div class="space" :class="{ 'space--active': onSpace }" />
		<sync-loader :loading="isShownSpinner" :size="'30px'" :margin="'10px'" />
		<transition name="fade">
			<router-view />
		</transition>
		<footer-view />
	</main>
</template>

<script>
import ToolbarView from '@/views/ToolbarView.vue';
import FooterView from '@/views/FooterView.vue';
import Bus from '@/utils/bus.js';
import { mapActions } from 'vuex';
import SyncLoader from '@/components/common/SyncLoader.vue';

export default {
	components: {
		ToolbarView,
		SyncLoader,
		FooterView,
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
			FETCH_ALL_PRODUCTS: 'shopping/FETCH_ALL_PRODUCTS',
			FETCH_PREORDERS: 'shopping/FETCH_PREORDERS',
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
		this.onSpinner();
		this.FETCH_ALL_PRODUCTS()
			.then(() => this.FETCH_PREORDERS())
			.then(() => this.offSpinner());
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
	height: 150px;
}

.space.space--active {
	height: 280px;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>

<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper" @click.stop="onClickOutside">
				<PickBrandLogIn v-if="userInfo" :pickedBrand="propsBrand.trim()" />
				<PickBrandLogOut v-else />
			</div>
		</div>
	</transition>
</template>

<script>
import PickBrandLogIn from '@/components/PickBrandLogIn.vue';
import PickBrandLogOut from '@/components/PickBrandLogOut.vue';
import { mapState } from 'vuex';

export default {
	components: {
		PickBrandLogIn,
		PickBrandLogOut
	},

	props: ['propsBrand'],

	computed: {
		...mapState('auth', {
			userInfo: state => state.userInfo
		})
	},

	methods: {
		onClickOutside(e) {
			if (e.target.className === 'modal-wrapper')
				this.$emit('close-picked-brands');
		}
	}
};
</script>

<style scoped>
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: table;
	transition: opacity 0.3s ease;
}

.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.modal-enter {
	opacity: 0;
}
.modal-leave-active {
	opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>

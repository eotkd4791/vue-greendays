<template>
	<div class="toolbar-modal">
		<div
			class="toolbar-modal__mask"
			v-if="onToolbar"
			@mouseenter="$emit('mouseEsc')"
		/>
		<transition appear name="rolling">
			<div
				v-if="onToolbar"
				class="toolbar-modal__container"
				:class="{ 'active-userinfo': activeUserInfo }"
				ref="modalContainer"
			>
				<ol class="toolbar-modal__wrapper">
					<li class="toolbar-modal__list" v-if="toolbarToOpen === '프리오더'">
						<toolbar-preorder />
					</li>
					<li
						class="toolbar-modal__list"
						v-else-if="toolbarToOpen === '빠른배송'"
					>
						<toolbar-quick-delivery />
					</li>
					<li class="toolbar-modal__list" v-else-if="toolbarToOpen === ''">
						<toolbar-search-brands />
					</li>
					<li class="toolbar-modal__list" v-else>
						<toolbar-reserve-purchase />
					</li>
				</ol>
			</div>
		</transition>
	</div>
</template>

<script>
import ToolbarReservePurchase from '@/components/ToolbarReservePurchase.vue';
import ToolbarPreorder from '@/components/ToolbarPreorder.vue';
import ToolbarQuickDelivery from '@/components/ToolbarQuickDelivery.vue';
import ToolbarSearchBrands from '@/components/ToolbarSearchBrands.vue';
import Bus from '@/utils/bus.js';

export default {
	components: {
		ToolbarReservePurchase,
		ToolbarPreorder,
		ToolbarQuickDelivery,
		ToolbarSearchBrands,
	},

	props: ['toolbarToOpen', 'onToolbar', 'activeUserInfo'],
};
</script>

<style scoped>
.toolbar-modal {
	width: 100%;
}

.toolbar-modal__mask {
	position: fixed;
	z-index: 1002;
	top: 115px;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
}

.toolbar-modal__container {
	width: 100%;
	height: 410px;
	z-index: 1002;
	margin: 0px auto;
	padding: 20px 30px;
	border: none;
	position: fixed;
	top: 115px;
	background-color: #fff;
}

.toolbar-modal__container.active-userinfo {
	transition: transform 250ms;
	transform: translateY(280px);
}

.toolbar-modal__wrapper {
	max-width: 1100px;
	height: 372px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}

.toolbar-modal__list {
	width: 100%;
}

.rolling-enter-active,
.rolling-leave-active {
	transition: all 0.25s ease;
}

.rolling-enter,
.rolling-leave-to {
	transform: translateY(-115px);
	height: 0;
	opacity: 0;
}
</style>

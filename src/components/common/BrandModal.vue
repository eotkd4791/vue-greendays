<template>
	<transition name="modal">
		<div class="brand-modal__mask">
			<div class="brand-modal__background" @click="onClickOutside">
				<div class="brand-modal">
					<section class="brand-modal__section">
						<header class="brand-modal__header">브랜드 검색</header>
						<button class="brand-modal__btn" @click="$emit('close-brands')">
							<i class="fas fa-times" />
						</button>
					</section>

					<aside class="brand-modal__aside">
						<ul class="brand-modal__ul" ref="brands">
							<li class="brand-modal__menu--active" @click="changeTab">
								인기브랜드
							</li>
							|
							<li @click="changeTab">전체브랜드</li>
						</ul>
						<pick-brand
							v-if="showModal"
							:propsBrand="pickedBrand"
							@close-picked-brands="closePickBrand"
						/>
						<popular-brands
							v-if="isShownPopularBrand"
							@open-alarm-modal="openPickBrand"
						/>
						<alphabet-brands v-else @open-alarm-modal="openPickBrand" />
					</aside>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import PickBrand from './PickBrandModal.vue';
import AlphabetBrands from '../AlphabetBrands.vue';
import PopularBrands from '../PopularBrands.vue';
import Bus from '@/utils/bus.js';

export default {
	components: {
		PickBrand,
		AlphabetBrands,
		PopularBrands
	},

	data() {
		return {
			isShownPopularBrand: true,
			showModal: false,
			pickedBrand: ''
		};
	},

	methods: {
		onClickOutside(e) {
			if (e.target.className === 'brand-modal__background')
				this.$emit('close-brands');
		},

		changeTab() {
			this.isShownPopularBrand = !this.isShownPopularBrand;
			const { children } = this.$refs.brands;
			children[0].classList.toggle('brand-modal__menu--active');
			children[1].classList.toggle('brand-modal__menu--active');
		},

		openPickBrand(payload) {
			this.showModal = true;
			this.pickedBrand = payload;
		},

		closePickBrand() {
			this.showModal = false;
		},

		setScrollLock() {
			scrollTo(0, 0);
		}
	},

	mounted() {
		Bus.$on('off-picked-brands', this.closePickBrand);
		window.addEventListener('scroll', this.setScrollLock);
	},

	beforeDestroy() {
		Bus.$off('off-picked-brands', this.closePickBrand);
		window.removeEventListener('scroll', this.setScrollLock);
	}
};
</script>

<style scoped>
.brand-modal__mask {
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

.brand-modal__background {
	display: table-cell;
	vertical-align: middle;
}

.brand-modal {
	width: 420px;
	height: 612px;
	margin: 0px auto;
	background-color: #f7f7f7;
	border-radius: 10px;
	transition: all 0.3s ease;
}

.brand-modal__section {
	width: 420px;
	height: 80px;
	margin-bottom: 10px;
	padding: 0 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
}

.brand-modal__header {
	font-weight: 800;
	font-size: 18px;
}
.brand-modal__aside {
	height: 520px;
	padding: 0 30px;
	background-color: #fff;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
}

.brand-modal__ul {
	width: 360px;
	height: 60px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 12px;
	font-weight: 600;
	cursor: pointer;
	color: #bbbbbb;
	border-bottom: 1px solid #ededed;
}

.brand-modal__ul li {
	width: 179.5px;
	height: 60px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.brand-modal__menu--active {
	color: #42b883;
}

.brand-modal__btn {
	border-style: none;
	outline: none;
}

.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .brand-modal,
.modal-leave-active .brand-modal {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>

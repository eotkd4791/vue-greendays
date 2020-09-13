<template>
	<transition name="fade">
		<div class="product-detail">
			<pick-brand v-if="showModal" @close-picked-brands="closeModal" :propsBrand="pickedBrand" />

			<section class="product-detail__info">
				<product-detail-photo />
				<product-detail-info @open-alarm-modal="openModal" />
			</section>
			<aside class="product-detail__related-items">
				<product-view :isProductView="false" />
			</aside>
		</div>
	</transition>
</template>

<script>
import ProductDetailPhoto from '@/components/ProductDetailPhoto.vue';
import ProductDetailInfo from '@/components/ProductDetailInfo.vue';
import PickBrand from '@/components/common/PickBrandModal.vue';
import ProductView from '@/views/ProductView.vue';
import { mapGetters, mapActions } from 'vuex';
import Bus from '@/utils/bus.js';

export default {
	components: {
		ProductDetailPhoto,
		ProductDetailInfo,
		ProductView,
		PickBrand,
	},

	data() {
		return {
			showModal: false,
			pickedBrand: {
				type: String,
				default: () => this.getProductDetail.brand,
			},
			paramsWatcher: null,
		};
	},

	computed: {
		...mapGetters({
			getProductDetail: 'shopping/getProductDetail',
		}),
	},

	methods: {
		...mapActions({
			FETCH_PRODUCT_INFO: 'shopping/FETCH_PRODUCT_INFO',
		}),

		async getProductInfo(productId) {
			try {
				Bus.$emit('on-spinner');
				await this.FETCH_PRODUCT_INFO(parseInt(productId));
				Bus.$emit('off-spinner');
			} catch (error) {
				console.error(error);
			}
		},

		openModal(brand) {
			this.showModal = true;
			this.pickedBrand = brand;
		},

		closeModal() {
			this.showModal = false;
		},
	},

	created() {
		this.getProductInfo(this.$route.params.productId);
		this.paramsWatcher = this.$watch('$route.params', function({ productId }) {
			this.getProductInfo(productId);
			Bus.$emit('change-product');
		});
	},

	mounted() {
		Bus.$on('off-picked-brands', this.closeModal);
	},

	beforeDestroy() {
		Bus.$off('off-picked-brands', this.closeModal);
		this.paramsWatcher();
	},
};
</script>

<style scoped>
@import '../style/transitionFade.css';

.product-detail {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	max-width: 1100px;
	width: 100%;
	margin: 0 auto;
}

.product-detail__info {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	height: 820px;
}
</style>

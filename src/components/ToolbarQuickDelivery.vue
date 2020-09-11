<template>
	<div class="quick__delivery-container">
		<section class="quick__delivery-wrapper__products">
			<display-items
				v-for="product in products"
				:key="product.id"
				:sendToday="product.productSendToday"
				:ableToBuy="product.productAbleToBuy"
				:callFrom="callFrom"
				:productId="product.id"
			>
				<template #productInfo-photo>
					<img
						:src="product.photoUrl"
						class="item-container__photo"
						:class="callFrom"
					/>
				</template>
				<template #productInfo-brand>{{ product.brand }}</template>
				<template #productInfo-name>{{ product.name }}</template>
				<template #productInfo-beforePrice>{{
					(product.priceBefore * 1000).toLocaleString()
				}}</template>
				<template #productInfo-discountRate
					>{{ Math.ceil(product.discountRate) * 100 }}% 할인</template
				>
				<template #productInfo-afterPrice>{{
					(product.priceAfter * 1000).toLocaleString()
				}}</template>
			</display-items>
		</section>
		<section class="quick__delivery-wrapper__info">
			<div
				class="quick__delivery-wrapper__info-pic"
				ref="quickDelivery"
				@click="moveToAbout"
			/>
			<div class="quick__delivery-wrapper__info-text">
				<h3>1년 365일 신상품 상시 할인 SALE</h3>
				<p>바로구매와 당일배송이 가능한 그린데이즈 빠른배송 상품!</p>
				<p>
					그린데이즈 빠른배송은 인기 있는 상품을 저렴하고, 신속하게 만나볼 수
					있습니다.
				</p>
			</div>
		</section>
	</div>
</template>

<script>
import DisplayItems from '@/components/common/DisplayItems.vue';
import { mapState } from 'vuex';
import Bus from '@/utils/bus.js';
import busToolbarClose from '@/mixins/busToolbarClose.js';

export default {
	components: {
		DisplayItems,
	},

	mixins: [busToolbarClose],

	data() {
		return {
			products: [],
			callFrom: 'item-container--small',
			imgUrl: 'https://www.dailypop.kr/news/photo/201903/38321_68210_535.png',
		};
	},

	computed: {
		...mapState('shopping', {
			getProducts: state => state.products,
		}),

		getRepresentImgs() {
			return this.getProducts.filter(v => v.productSendToday).slice(0, 3);
		},
	},

	methods: {
		moveToAbout() {
			this.$router
				.push({
					path: '/vue-greendays/products',
					query: {
						keyword: '',
						gender: '',
						category: '',
						brand: '',
						product_id: '',
						deal_id: 'quick-delivery',
						page: 1,
						orderby: 'desc',
						order_std: 'popularity',
					},
				})
				.catch();
			Bus.$emit('off-toolbar-modal');
		},
	},

	created() {
		this.products = this.getRepresentImgs;
	},

	mounted() {
		const quickDeliveryStyle = this.$refs.quickDelivery.style;
		quickDeliveryStyle.setProperty('background-image', `url(${this.imgUrl})`);
		quickDeliveryStyle.setProperty('background-repeat', 'no-repeat');
		quickDeliveryStyle.setProperty('background-position', 'center');
		quickDeliveryStyle.setProperty('background-size', 'contain');
	},
};
</script>

<style scoped>
p {
	font-size: 12px;
	margin: 0 0 5px;
}

h3 {
	margin: 0 0 10px;
	font-size: 14px;
	font-weight: 600;
}

.quick__delivery-container {
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	padding: 20px 0;
	font-size: 16px;
}

.quick__delivery-wrapper__products {
	display: flex;
	width: 609px;
	height: 370px;
}

.item-container__photo {
	width: 200px;
	height: 200px;
}

.quick__delivery-wrapper__info {
	width: 490px;
	height: 370px;
}

.quick__delivery-wrapper__info-pic {
	width: 100%;
	height: 278px;
	cursor: pointer;
}

.quick__delivery-wrapper__info-text {
	text-align: center;
	width: 100%;
	height: 62px;
}
</style>

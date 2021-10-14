<template>
	<div class="product">
		<product-sort v-if="isProductView" />
		<section class="product-nothing" v-if="productsToShow.length === 0" />
		<aside class="product-wrapper" v-else>
			<template v-if="isProductView">
				<div
					class="product__text"
					:class="{ 'product__text--center': isProductView }"
				>
					총 {{ orderedProducts.length }} 개의 상품
				</div>
			</template>
			<template v-else>
				<div class="product__text">연관상품</div>
			</template>
			<display-items
				v-for="product in productsToShow"
				:key="product.id"
				:productId="product.id"
				:sendToday="product.productSendToday"
				:ableToBuy="product.productAbleToBuy"
				:callFrom="''"
			>
				<template #productInfo-photo>
					<img :src="product.photoUrl" class="item-container__photo" />
				</template>
				<template #productInfo-brand>{{ product.brand }}</template>
				<template #productInfo-name>{{ product.name }}</template>
				<template #productInfo-beforePrice>
					{{ (product.priceBefore * 1000).toLocaleString() }}
				</template>
				<template #productInfo-discountRate>
					{{ Math.ceil(product.discountRate * 100) }}% 할인
				</template>
				<template #productInfo-afterPrice>
					{{ (product.priceAfter * 1000).toLocaleString() }}
				</template>
			</display-items>
			<paging-component v-if="isProductView" />
		</aside>
	</div>
</template>

<script>
import DisplayItems from '@/components/common/DisplayItems.vue';
import ProductSort from '@/components/ProductSort.vue';
import PagingComponent from '@/components/common/PagingComponent.vue';
import Bus from '@/utils/bus.js';
import { mapState, mapActions } from 'vuex';

export default {
	components: {
		DisplayItems,
		ProductSort,
		PagingComponent,
	},

	props: {
		isProductView: {
			type: Boolean,
			default: true,
		},
	},

	data() {
		return {
			productsToShow: [],
		};
	},

	computed: {
		...mapState('shopping', {
			orderedProducts: state => state.orderedProducts,
		}),
	},

	methods: {
		...mapActions('shopping', ['FETCH_ORDERED_PRODUCTS']),

		setPage(targetToSlice, pageNumber) {
			const productCountPerPage = this.isProductView ? 48 : 12;
			this.productsToShow = [...targetToSlice].slice(
				(pageNumber - 1) * productCountPerPage,
				pageNumber * productCountPerPage,
			);
		},

		sortProducts(targetToSort, orderKey, orderKind) {
			const target = [...targetToSort];
			target.sort((a, b) =>
				orderKind === 'desc'
					? a[orderKey] > b[orderKey]
						? -1
						: 1
					: a[orderKey] > b[orderKey]
					? 1
					: -1,
			);
			return target;
		},

		setOrderedProducts(query) {
			const { page, order_std, orderby } = query;
			Bus.$emit('on:spinner');
			Bus.$emit('set-pagination', parseInt(page));

			this.FETCH_ORDERED_PRODUCTS(query)
				.then(() => {
					this.setPage(
						this.sortProducts(this.orderedProducts, order_std, orderby),
						page,
					);
					Bus.$emit('off:spinner');
				})
				.catch(console.error);
		},
	},

	created() {
		this.setOrderedProducts(
			this.isProductView
				? this.$route.query
				: { page: 1, order_std: 'popularity', orderby: 'desc' },
		);
	},

	watch: {
		'$route.query': function(newVal, oldVal) {
			this.setOrderedProducts(newVal);
		},
	},
};
</script>

<style scoped>
.product {
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
}

.product-nothing {
	width: 200px;
	height: 200px;
	margin: 100px auto 0;
	background-image: url('../assets/img/nothing-product.png');
	background-repeat: no-repeat;
	background-size: contain;
}

.product-wrapper {
	margin-top: 90px;
}

.product__text {
	display: flex;
	justify-content: flex-start;
	max-width: 1100px;
	width: 100%;
	margin: 40px 0;
	font-size: 14px;
	font-family: 'Montserrat';
	text-align: center;
	border-bottom: 1px solid rgba(70, 70, 70, 0.2);
	padding-bottom: 15px;
}

.item-container__photo {
	width: 260px;
	height: 260px;
}

.product__text.product__text--center {
	justify-content: center;
	border-bottom: 0;
}
</style>
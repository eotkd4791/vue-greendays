<template>
	<div class="product">
		<ProductSort v-if="isProductView" />
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
			<DisplayItems
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
				<template #productInfo-beforePrice>{{
					(product.priceBefore * 1000).toLocaleString()
				}}</template>
				<template #productInfo-discountRate
					>{{ Math.ceil(product.discountRate * 100) }}% 할인</template
				>
				<template #productInfo-afterPrice>{{
					(product.priceAfter * 1000).toLocaleString()
				}}</template>
			</DisplayItems>
			<PagingComponent v-if="isProductView" />
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
		PagingComponent
	},

	props: {
		isProductView: {
			type: Boolean,
			default: true
		}
	},

	data() {
		return {
			productsToShow: []
		};
	},

	computed: {
		...mapState('shopping', {
			orderedProducts: state => state.orderedProducts
		})
	},

	methods: {
		...mapActions('shopping', ['FETCH_ORDERED_PRODUCTS']),

		setPage(targetToSlice, pageNumber) {
			const productCountPerPage = this.isProductView ? 48 : 12;
			this.productsToShow = [...targetToSlice].slice(
				(pageNumber - 1) * productCountPerPage,
				pageNumber * productCountPerPage
			);
		},

		sortProducts(targetToSort, orderKey, orderKind) {
			const target = [...targetToSort];
			target.sort((a, b) => {
				if (orderKind === 'desc') {
					if (a[orderKey] > b[orderKey]) return -1;
					else return 1;
				} else {
					if (a[orderKey] > b[orderKey]) return 1;
					else return -1;
				}
			});

			if (orderKey === 'priceAfter' || orderKey === 'priceBefore') {
				if (orderKind === 'desc') {
					return target.sort(
						(a, b) => parseInt(b[orderKey]) - parseInt(a[orderKey])
					);
				} else {
					return target.sort(
						(a, b) => parseInt(a[orderKey]) - parseInt(b[orderKey])
					);
				}
			}
			return target;
		},

		async setOrderedProducts(query) {
			try {
				const { page, order_std, orderby } = query;
				Bus.$emit('on-spinner');
				Bus.$emit('set-pagination', parseInt(page));
				await this.FETCH_ORDERED_PRODUCTS(query);
				this.setPage(
					this.sortProducts(this.orderedProducts, order_std, orderby),
					page
				);
				Bus.$emit('off-spinner');
			} catch (error) {
				console.error(error);
			}
		}
	},

	created() {
		if (this.isProductView) {
			this.setOrderedProducts(this.$route.query);
		} else {
			this.setOrderedProducts({
				page: 1,
				order_std: 'popularity',
				orderby: 'desc'
			});

			this.$watch('$route.params', function() {
				this.setOrderedProducts({
					page: 1,
					order_std: 'popularity',
					orderby: 'desc'
				});
			});
		}
	},

	watch: {
		'$route.query': function(newVal) {
			this.setOrderedProducts(newVal);
		}
	}
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

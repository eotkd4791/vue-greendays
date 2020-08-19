<template>
	<ol class="info">
		<li class="info__category">
			<router-link
				tag="span"
				:to="{
					path: '/products',
					query: {
						keyword: '',
						gender: '',
						category: '',
						brand: '',
						product_id: '',
						deal_id: getProductDetail.productSendToday
							? 'quick-delivery'
							: 'reserve-purchase',
						page: 1,
						orderby: 'desc',
						order_std: 'popularity',
					},
				}"
			>
				{{ getProductDetail.productSendToday ? '당일발송' : '예약구매' }}
				<i class="fas fa-chevron-right" />
			</router-link>
			<router-link
				tag="span"
				:to="{
					path: '/products',
					query: {
						keyword: '',
						gender: getProductDetail.gender,
						category: '',
						brand: '',
						product_id: '',
						deal_id: getProductDetail.productSendToday
							? 'quick-delivery'
							: 'reserve-purchase',
						page: 1,
						orderby: 'desc',
						order_std: 'popularity',
					},
				}"
			>
				{{ getProductDetail.gender }}
				<i class="fas fa-chevron-right" />
			</router-link>
			<router-link
				tag="span"
				:to="{
					path: '/products',
					query: {
						keyword: '',
						gender: getProductDetail.gender,
						category: '',
						brand: getProductDetail.brand,
						product_id: '',
						deal_id: getProductDetail.productSendToday
							? 'quick-delivery'
							: 'reserve-purchase',
						page: 1,
						orderby: 'desc',
						order_std: 'popularity',
					},
				}"
			>
				{{ getProductDetail.brand }}
				<i class="fas fa-chevron-right" />
			</router-link>
			<router-link
				tag="span"
				:to="{
					path: '/products',
					query: {
						keyword: '',
						gender: getProductDetail.gender,
						category: getProductDetail.category,
						brand: getProductDetail.brand,
						product_id: '',
						deal_id: getProductDetail.productSendToday
							? 'quick-delivery'
							: 'reserve-purchase',
						page: 1,
						orderby: 'desc',
						order_std: 'popularity',
					},
				}"
			>
				{{ getProductDetail.category }}
				<i class="fas fa-chevron-right" />
			</router-link>
			<router-link
				tag="span"
				:to="{
					path: '/products',
					query: {
						keyword: '',
						gender: getProductDetail.gender,
						category: getProductDetail.category,
						category_detail: getProductDetail.categoryDetail,
						brand: getProductDetail.brand,
						product_id: '',
						deal_id: getProductDetail.productSendToday
							? 'quick-delivery'
							: 'reserve-purchase',
						page: 1,
						orderby: 'desc',
						order_std: 'popularity',
					},
				}"
			>{{ getProductDetail.categoryDetail }}</router-link>
		</li>
		<li class="info__brand">
			<h1 class="info__brand__text">
				{{ getProductDetail.brand.toUpperCase() }}
				<i
					class="fas fa-heart"
					:class="{
						'fa-heart--picked':
							userInfo && isPickedBrand(getProductDetail.brand),
					}"
					@click="$emit('openAlarmModal', getProductDetail.brand)"
				/>
			</h1>
			<p class="info__id">상품아이디: {{ getProductDetail.id }}</p>
		</li>
		<li class="info__name">{{ getProductDetail.name }}</li>
		<li class="info__price">
			<h2 class="info__price-after">{{ (getProductDetail.priceAfter * 1000).toLocaleString() }}</h2>
			<span class="info__price-before">
				{{
				(getProductDetail.priceBefore * 1000).toLocaleString()
				}}
			</span>
			|
			<span class="info__price-discount">{{ Math.ceil(getProductDetail.discountRate * 100) }}% 할인</span>
		</li>
		<li class="info__describe-price">해외/국내 배송비 및 관부가세가 모두 포함된 금액입니다.</li>
		<li class="info__btn">
			<div
				class="info__btn__pick-product"
				:class="{ 'info__btn__pick-product--picked': pickedProduct }"
				@click="toggleThisToWishList"
			>
				<i
					:class="{
						'fas fa-heart': pickedProduct,
						'far fa-heart': !pickedProduct,
					}"
				/>
			</div>
			<button class="info__purchase-btn">바로구매</button>
		</li>
		<product-detail-list>
			<template #title>구매 안내</template>
			<template #body>
				{{
				getProductDetail.productSendToday
				? purchaseInfo.quickDeliveryGuide
				: purchaseInfo.preorderGuide
				}}
			</template>
		</product-detail-list>
		<product-detail-list>
			<template #title>상품 상세정보</template>
			<template #body>{{ getProductDetail.material }}</template>
		</product-detail-list>
		<product-detail-list>
			<template #title>배송가이드</template>
			<template #body>{{ purchaseInfo.logiGuide }}</template>
			<template #additional-element>
				<button
					class="info__guide__btn"
					@click="$router.push('/customerservice/logi_guide')"
				>그린데이즈 배송가이드</button>
			</template>
		</product-detail-list>
	</ol>
</template>

<script>
import ProductDetailList from '@/components/common/ProductDetailList.vue';
import purchaseInfo from '@/static/purchaseInfo.js';
import brandPicking from '@/mixins/brandPicking.js';
import { mapState, mapActions } from 'vuex';

export default {
	components: {
		ProductDetailList,
	},

	mixins: [brandPicking],

	data() {
		return {
			purchaseInfo,
			pickedProduct: false,
		};
	},

	computed: {
		...mapState({
			userInfo: state => state.auth.userInfo,
		}),

		getProductDetail() {
			return this.$store.state.shopping.productDetail;
		},
	},

	methods: {
		...mapActions('auth', ['ADD_WISHLIST', 'REMOVE_WISHLIST']),

		isPickedBrand(brand) {
			return this.userInfo.pickedBrands[brand];
		},

		async toggleThisToWishList() {
			if (this.pickedProduct) {
				const removeConfirm = confirm(
					'위시리스트에서 아이템을 삭제하시겠습니까?',
				);
				if (removeConfirm) {
					await this.REMOVE_WISHLIST([this.getProductDetail.id]);
				}
			} else {
				await this.ADD_WISHLIST(this.getProductDetail);
			}
			alert(`해당 아이템을 ${this.pickedProduct ? '삭제' : '추가'}하였습니다.`);
			this.pickedProduct = !this.pickedProduct;
		},
	},

	created() {
		this.pickedProduct = this.userInfo.wishList.find(
			v => v.id === parseInt(this.$route.params.productId),
		);
	},
};
</script>

<style scoped>
@import '../style/pick.css';

.info {
	width: 45%;
}

.info__brand {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.info__brand__text {
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 10px;
}

.info__brand__text > .fa-heart {
	margin: 0;
}

.info__id {
	color: #6a6a6a;
	font-size: 12px;
}

.info__name {
	font-size: 15px;
	color: #393939;
	margin-bottom: 8px;
}

.info__price {
	display: flex;
	align-items: center;
	margin-bottom: 10px;
}

.info__price-after {
	color: #42b883;
	font-size: 20px;
	font-weight: 600;
	margin: 0 30px 0 0;
}

.info__price-before {
	margin: 0 15px 0 0;
	color: #b6b6b6;
	text-decoration-line: line-through;
}
.info__price-discount {
	margin: 0 0 0 15px;
}

.info__describe-price {
	font-size: 11px;
	color: #6a6a6a;
}

.fas.fa-chevron-right {
	margin: 0 12px;
	font-weight: 600;
}

.info__category {
	color: #939393;
	cursor: pointer;
	font-size: 14px;
	margin-bottom: 50px;
}

.info__btn {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 0 30px 0;
	border-bottom: 1px solid #dedede;
	margin: 10px 10px 0 0;
}

.info__btn__pick-product {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	margin: 0 8px 0 0;
	border-radius: 5px;
	background-color: #9aecdb;
}

.info__btn__pick-product--picked {
	background-color: #42b850;
}

.info__btn__pick-product > .fa-heart {
	color: #fff;
	font-size: 28px;
	margin: 0;
}

.info__purchase-btn {
	width: 200px;
	height: 40px;
	background-color: #393939;
	color: #fff;
	border-radius: 5px;
}

.info__guide__btn {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 250px;
	height: 40px;
	margin-top: 20px;
	border: 1px solid #000;
	color: #000;
}
</style>

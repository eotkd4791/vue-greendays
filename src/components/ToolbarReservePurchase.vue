<template>
	<div class="reserve-container">
		<section class="reserve-container__category">
			<header class="reserve-container__category__title">CATEGORIES</header>
			<div class="reserve-container__category__link" ref="tabs">
				<router-link
					v-for="(category, index) in categories"
					:key="index"
					class="reserve-container__link"
					tag="span"
					:to="{
						path: '/vue-greendays/products',
						query: {
							keyword: '',
							gender: '',
							category: index === 0 ? '' : category.name,
							brand: '',
							product_id: '',
							deal_id: 'reserve-purchase',
							page: 1,
							orderby: 'desc',
							order_std: 'popularity',
						},
					}"
					>{{ `${category.name} (${category.productAmount})` }}</router-link
				>
			</div>
		</section>
		<section class="reserve-container__promotion">
			<div class="reserve-container__promotion__img" />
			<div class="reserve-container__promotion__text">
				<h3 class="reserve-container__promotion__title">스마트한 구매의 시작 PICK</h3>
				<p class="reserve-container__promotion__subtitle">그린데이즈가 제안하는 현명하게 하이패션을 즐기는 방법!</p>
			</div>
		</section>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import busToolbarClose from '@/mixins/busToolbarClose.js';

export default {
	mixins: [busToolbarClose],

	data() {
		return {
			activatedTabIndex: 0,
			categories: ['Bags', 'Wallets', 'Clothes', 'Shoes', 'Accessories'],
		};
	},
	computed: {
		...mapState('shopping', {
			products: state => state.products.filter(v => v.productAbleToBuy),
		}),
	},

	methods: {
		getItem(which) {
			return this.products.filter(v => v.category === which).length;
		},
	},

	created() {
		this.categories = this.categories.map(v => ({
			name: v,
			productAmount: this.getItem(v),
		}));

		this.categories.unshift({
			name: 'All Categories',
			productAmount: this.categories.reduce((acc, cur) => acc + cur.productAmount, 0),
		});
	},
};
</script>

<style scoped>
.reserve-container {
	width: 100%;
	height: 355px;
	max-width: 1100px;
	display: flex;
	justify-content: space-between;
	font-family: 'Montserrat';
}

.reserve-container__category {
	width: 200px;
	height: 345px;
}

.reserve-container__category__title {
	font-weight: 700;
}

.reserve-container__category__link {
	margin-top: 20px;
}

.reserve-container__link {
	width: 200px;
	height: 24px;
	display: flex;
	padding: 3px 0 3px 10px;
	margin: 10px 0;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
}

.reserve-container__link.active,
.reserve-container__link:hover {
	font-size: 14px;
	font-weight: 600;
	color: #fff;
	background-color: #42b883;
}

.reserve-container__promotion {
	width: 600px;
	height: 100%;
}

.reserve-container__promotion__img {
	width: 100%;
	height: 250px;
	background-image: url('../assets/img/brands/dior-logo.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	cursor: pointer;
}

.reserve-container__promotion__text {
	width: 100%;
	height: 40px;
	margin: 14px 0 0;
}

.reserve-container__promotion__title {
	font-size: 14px;
	font-weight: 600;
}

.reserve-container__promotion__subtitle {
	font-size: 12px;
	margin-top: 14px;
}
</style>

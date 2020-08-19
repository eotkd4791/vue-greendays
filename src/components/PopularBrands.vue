<template>
	<ol class="popular-brands">
		<li class="popular-brands__list" v-for="(brand, index) in brandsList" :key="index">
			<span class="popular-brands__rank">{{ index + 1 }}</span>
			<i
				class="fas fa-heart"
				:class="{ 'fa-heart--picked': userInfo && isPickedBrand(brand) }"
				@click="openAlarmBrand"
			/>
			<router-link
				:to="{
					path: '/products',
					query: {
						keyword: '',
						gender: '',
						category: '',
						brand,
						product_id: '',
						deal_id: '',
						page: 1,
						orderby: 'desc',
						order_std: 'popularity',
					},
				}"
			>{{ brand }}</router-link>
		</li>
	</ol>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
	data() {
		return {
			brandsList: [],
		};
	},

	computed: {
		...mapState({
			userInfo: state => state.auth.userInfo,
			products: state => state.shopping.products,
			popularBrands: state => state.shopping.brandList,
		}),
	},

	methods: {
		...mapMutations('shopping', ['setBrandList']),

		...mapActions({
			IS_LOGGED_IN: 'auth/IS_LOGGED_IN',
		}),

		openAlarmBrand(e) {
			const { text } = e.target.nextElementSibling;
			this.$emit('openAlarmModal', text);
		},

		// 브랜드별 제품 인기도의 총합으로 브랜드의 인기 순위 나열하는 메소드.
		setPopularBrands() {
			const map = new Map();
			this.products.map(v => {
				const { brand, popularity } = v;
				map.set(
					brand,
					map.has(brand) ? popularity + map.get(brand) : popularity,
				);
			}); //브랜드별 제품의 인기도 총합

			this.brandsList = [...map.entries()]
				.sort((a, b) => (a[1] > b[1] ? -1 : 1))
				.map(v => v[0]);
			// 브랜드 인기도 내림차순으로 정렬하여 brandsList 배열에 삽입

			this.setBrandList(this.brandsList);
			// Vuex Mutations로 State 변경

			this.brandsList.splice(10);
			// 10위 까지의 브랜드 명만 잘라서 보여준다.
		},

		isPickedBrand(brand) {
			return this.userInfo.pickedBrands[brand];
		},
	},

	created() {
		this.popularBrands.length
			? (this.brandsList = this.popularBrands)
			: this.setPopularBrands();
	},
};
</script>

<style scoped>
@import '../style/pick.css';

.popular-brands {
	width: 100%;
	height: 460px;
	display: flex;
	flex-direction: column;
}

.popular-brands__list {
	padding: 13px 0;
	font-size: 11px;
	border-bottom: 1px solid #ededed;
}

.popular-brands__rank {
	margin: 0 10px 0 20px;
	color: #42b883;
	font-weight: 500;
	font-size: 12px;
}

.popular-brands__list:last-child > .popular-brands__rank {
	margin: 0 10px 0 14px;
}
</style>

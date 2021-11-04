<template>
	<li class="brand-item">
		<input type="checkbox" class="brand-item__checkbox" :value="categoryPair[0]" v-model="$parent.checkedBrandsToDelete" />
		<ul class="brand-item__categories">
			<router-link
				class="brand-item__list brand-item__title"
				tag="li"
				:to="{
					path: '/vue-greendays/products',
					query: {
						keyword: '',
						gender: '',
						category: '',
						brand: categoryPair[0],
						product_id: '',
						deal_id: '',
						page: 1,
						orderby: 'desc',
						order_std: 'popularity',
					},
				}"
			>
				{{ categoryPair[0] }}
			</router-link>
			<router-link
				tag="li"
				v-for="(category, index) in Object.keys(categories)"
				:key="category"
				:to="{
					path: '/vue-greendays/products',
					query: {
						keyword: '',
						gender: '',
						category,
						brand: categoryPair[0],
						product_id: '',
						deal_id: '',
						page: 1,
						orderby: 'desc',
						order_std: 'popularity',
					},
				}"
				class="brand-item__list"
			>
				<i class="fas fa-heart" :class="{ 'fa-heart--picked': Object.values(categories)[index] }" @click="updatePickedBrands(categoryPair[0], category)" />
				{{ category }}
			</router-link>
		</ul>
	</li>
</template>

<script>
import brandPicking from '@/mixins/brandPicking.js';

export default {
	mixins: [brandPicking],

	props: {
		categoryPair: Array,
	},

	data() {
		return {
			isChecked: false,
		};
	},

	created() {
		this.categories = this.categoryPair[1];
	},
};
</script>

<style scoped>
@import '../style/pick.css';

.brand-item {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 230px;
	margin: 0 30px 40px 0;
}

.brand-item__checkbox {
	width: 20px;
	height: 20px;
	margin-bottom: 20px;
}

.brand-item__categories {
	width: 250px;
	height: 314px;
	padding: 0 20px;
	border-radius: 10px;
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}

.brand-item__list {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-top: 1px solid #ebebeb;
	font-size: 12px;
	height: 45px;
	cursor: pointer;
}

.brand-item__list.brand-item__title {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	height: 80px;
	font-size: 18px;
	font-weight: 700;
	cursor: pointer;
}
</style>

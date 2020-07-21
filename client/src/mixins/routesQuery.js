import { mapState } from 'vuex';
import RegExp from '@/utils/dynamicRegExp.js';

// keyword: '',
// gender: '',
// category: '',
// brand: '',
// product_id: '',
// deal_id: 'quick-delivery' || 'reserve-purchase,
// orderby: 'desc',
// order_std: '',

// value값이 ''이면 조건이 없는 것을 의미한다.

export default {
	data() {
		return {
			products: [],
		};
	},

	computed: {
		...mapState('shopping', {
			allProducts: state => state.products,
			orderedProducts: state => state.orderedProducts,
		}),
	},

	methods: {
		orderProducts() {
			this.products = this.allProducts;

			const orderConditions = Object.entries(
				({
					keyword,
					brand,
					gender,
					category,
					category_detail,
					product_id,
					deal_id,
				} = this.$route.query),
			).filter(v => v[1].length);

			orderConditions.forEach(entry => {
				switch (entry[0]) {
					case 'keyword':
						this.products = this.products.filter(value => {
							const { brand, category, material, name } = value;
							if (
								RegExp(brand, 'ig').test(entry[1]) ||
								RegExp(category, 'ig').test(entry[1]) ||
								RegExp(material, 'ig').test(entry[1]) ||
								RegExp(name, 'ig').test(entry[1])
							) {
								return value;
							}
						});
						break;

					case 'brand':
						this.products = this.products.filter(value => {
							const { brand } = value;
							if (RegExp(brand, 'ig').test(entry[1])) {
								return value;
							}
						});
						break;

					case 'gender':
						this.products = this.products.filter(value => {
							const { gender } = value;
							if (RegExp(gender, 'ig').test(entry[1])) {
								return value;
							}
						});
						break;

					case 'category':
						this.products = this.products.filter(value => {
							const { category } = value;
							if (RegExp(category, 'ig').test(entry[1])) {
								return value;
							}
						});
						break;

					case 'category_detail':
						this.products = this.products.filter(value => {
							const { categoryDetail } = value;
							if (RegExp(categoryDetail, 'ig').test(entry[1])) {
								return value;
							}
						});
						break;

					case 'deal_id':
						this.products = this.products.filter(value =>
							entry[1] === 'reserve-purchase'
								? value.productAbleToBuy
								: value.productSendToday,
						);
						break;

					case 'product_id':
						this.products = this.products.filter(value => {
							const { id } = value;
							if (RegExp(id, 'ig').test(entry[1])) {
								return value;
							}
						});
						break;
				}
			});

			this.products = this.sortProducts('popularity');
		},

		sortProducts(orderKey) {
			return this.products.sort((a, b) => a[orderKey] - b[orderKey]);
		},
	},
};

import { mapActions } from 'vuex';
import { debounce } from 'lodash';

export default {
	data() {
		return {
			categories: {
				Bags: false,
				Clothes: false,
				Shoes: false,
				Accessories: false,
				Wallets: false,
			},
		};
	},

	methods: {
		...mapActions('auth', ['UPDATE_PICKED_BRANDS']),

		updatePickedBrands(brandName, category) {
			this.categories[category] = !this.categories[category];
			this.lazyUpdateStore(brandName.trim());
		},

		lazyUpdateStore: debounce(function(brandName) {
			this.UPDATE_PICKED_BRANDS({
				key: brandName,
				value: this.categories,
			});
		}, 800),

		openAlarmBrand(e) {
			const { text } = e.target.nextElementSibling;
			this.$emit('open-alarm-modal', text);
		},
	},
};

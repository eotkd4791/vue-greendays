import { getItem, setItem } from '@/utils/storage.js';
import dbProduct from '@/db/product.js';

const actions = {
	FETCH_ALL_PRODUCT({ commit }) {
		const storedProduct = getItem('product');
		if (!storedProduct) {
			setItem('product', storedProduct ? storedProduct : dbProduct);
			commit('setProducts', storedProduct ? storedProduct : dbProduct);
		}
	},

	SET_EXPECTED_KEYWORDS({ state, commit }) {
		const storedProduct = getItem('product');
		const storedKeywords = getItem('totalKeywords');

		if (!storedKeywords) {
			const totalKeywords = [];
			storedProduct.map(v => {
				const { brand, category, material, name } = v;
				totalKeywords = totalKeywords.concat(
					brand,
					material,
					category.split(' '),
					name.split(' '),
				);
			});
			totalKeywords = [...new Set(totalKeywords)].sort();
			setItem('totalKeywords', totalKeywords);
			commit('setTotalKeywords', totalKeywords);
		} else {
			commit('setTotalKeywords', storedKeywords);
		}
	},

	FETCH_RECOMMEND_KEYWORDS({ state, commit }, payload) {
		const storedKeywords = getItem('totalKeywords');
		const storedRecentKeywords = new Map(getItem('recentKeywords'));

		if (!storedRecentKeywords.has(payload)) {
			const croppedKeywords = storedKeywords
				.map(v => v.includes(payload) && v)
				.filter(v => v);

			commit('setRecentKeyword', [payload, croppedKeywords]);
			setItem(
				'recentKeywords',
				storedRecentKeywords.set(payload, croppedKeywords),
			);
		} else {
		}
		//key: 검색어(payload), value: 찾은 결과(croppedKeywords)
		// setItem('recentKeywords', storedRecentKeywords ? croppedKeyword)
	},
};

export default actions;

import { getItem, setItem } from '@/utils/storage.js';
import dbProduct from '@/db/product.js';
import dbPreorder from '@/db/preorder.js';

const actions = {
	// 모든 상품 가져오기
	FETCH_ALL_PRODUCTS({ commit }) {
		const storedProduct = getItem('product');
		setItem('product', storedProduct ? storedProduct : dbProduct);
		commit('setProducts', storedProduct ? storedProduct : dbProduct);
	},

	// 전체 상품의 정보를 가져와 저장한다.
	SET_EXPECTED_KEYWORDS({ commit }) {
		const storedProduct = getItem('product');
		const storedKeywords = getItem('totalKeywords');

		if (!storedKeywords) {
			let totalKeywords = [];
			storedProduct.map(v => {
				const { brand, category, material, name } = v;
				totalKeywords = totalKeywords.concat(
					brand.toUpperCase(),
					material.toUpperCase(),
					category.toUpperCase().split(' '),
					name.toUpperCase().split(' ')
				);
			});
			totalKeywords = [...new Set(totalKeywords)].sort();
			setItem('totalKeywords', totalKeywords);
			setItem('recentKeywords', null);
			commit('setTotalKeywords', totalKeywords);
		} else {
			commit('setTotalKeywords', storedKeywords);
		}
	},

	//검색한 키워드와 연관 키워드 뽑기
	FETCH_RECOMMEND_KEYWORDS({ commit }, payload) {
		const storedKeywords = getItem('totalKeywords');
		const storedRecentKeywords = getItem('recentKeywords');

		const keywordsMap = storedRecentKeywords
			? new Map(Object.entries(storedRecentKeywords))
			: new Map();

		if (!keywordsMap.has(payload)) {
			const croppedKeywords = storedKeywords
				.map(v => v.includes(payload) && v)
				.filter(v => v);

			commit('setRecentKeywords', { key: payload, value: croppedKeywords });
			commit('setRecommendKeywords', croppedKeywords);
			setItem('recentKeywords', keywordsMap.set(payload, croppedKeywords));
		} else {
			commit('setRecentKeywords', keywordsMap.get(payload));
			commit('setRecommendKeywords', keywordsMap.get(payload));
		}
	},

	FETCH_PREORDERS({ commit }) {
		const storedPreorders = getItem('preorder');
		if (storedPreorders) {
			setItem('preorder', storedPreorders);
			commit('setPreorders', storedPreorders);
		} else {
			setItem('preorder', dbPreorder);
			commit('setPreorders', dbPreorder);
		}
	},

	FETCH_ORDERED_PRODUCTS({ state, commit }, query) {
		const orderConditions = Object.entries(query).filter(v => v[1].length > 0);
		let productsAll = [...state.products];

		orderConditions.forEach(entry => {
			switch (entry[0]) {
				case 'keyword':
					productsAll = productsAll.filter(value => {
						const { brand, category, material, name } = value;
						if (
							new RegExp(entry[1], 'ig').test(brand) ||
							new RegExp(entry[1], 'ig').test(category) ||
							new RegExp(entry[1], 'ig').test(material) ||
							new RegExp(entry[1], 'ig').test(name)
						) {
							return value;
						}
					});
					break;

				case 'brand':
					productsAll = productsAll.filter(value => {
						const { brand } = value;
						if (new RegExp(brand, 'ig').test(entry[1])) {
							return value;
						}
					});
					break;

				case 'gender':
					productsAll = productsAll.filter(value => {
						const { gender } = value;
						if (new RegExp(gender, 'ig').test(entry[1])) {
							return value;
						}
					});
					break;

				case 'category':
					productsAll = productsAll.filter(value => {
						const { category } = value;
						if (new RegExp(category, 'ig').test(entry[1])) {
							return value;
						}
					});
					break;

				case 'category_detail':
					productsAll = productsAll.filter(value => {
						const { categoryDetail } = value;
						if (new RegExp(categoryDetail, 'ig').test(entry[1])) {
							return value;
						}
					});
					break;

				case 'deal_id':
					productsAll = productsAll.filter(value => {
						if (entry[1] === 'reserve-purchase') {
							return value.productAbleToBuy;
						} else if (entry[1] === 'quick-delivery') {
							return value.productSendToday;
						} else {
							return true;
						}
					});
					break;

				case 'product_id':
					productsAll = productsAll.filter(value => {
						const { id } = value;
						if (new RegExp(id, 'ig').test(entry[1])) {
							return value;
						}
					});
					break;
			}
		});
		commit('setOrderedProduct', productsAll);
	},

	FETCH_PRODUCT_INFO({ commit }, payload) {
		const storedProducts = getItem('product');
		commit(
			'setProductDetail',
			storedProducts.find(v => v.id === payload)
		);
	}
};

export default actions;

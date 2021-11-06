const getters = {
	getHotSearchItems(state) {
		return state.hotKeywords;
	},
	getRecommendKeywords(state) {
		return state.recommendKeywords;
	},
	getRecentKeywords(state) {
		return [...state.recentKeywords.entries()];
	},
	getTotalKeywords(state) {
		return state.totalKeywords;
	},
	getGuestKeywords(state) {
		return state.guestKeywords;
	},
	getProductDetail(state) {
		return state.productDetail;
	}
};

export default getters;

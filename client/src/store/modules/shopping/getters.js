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
};

export default getters;

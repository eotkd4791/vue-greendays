const mutations = {
	setProducts(state, payload) {
		if (state.products !== payload) {
			state.products = payload;
		}
	},

	setRecommendKeywords(state, payload) {
		state.recommendKeywords = payload;
		if (state.recommendKeywords.length > 6) {
			state.recommendKeywords.splice(6);
		}
	},

	setTotalKeywords(state, payload) {
		if (state.totalKeywords !== payload) {
			state.totalKeywords = payload;
		}
	},

	setRecentKeyword({ recentKeywords }, [searchKeyword, searchResult]) {
		if (!recentKeywords.has(searchKeyword)) {
			recentKeywords.set(searchKeyword, searchResult);
		}
	},
};

export default mutations;

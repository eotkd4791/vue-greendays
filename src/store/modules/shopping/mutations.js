const mutations = {
	// 상품 state
	setProducts(state, payload) {
		if (state.products !== payload) {
			state.products = payload;
		}
	},

	// 추천 검색어
	setRecommendKeywords(state, payload) {
		state.recommendKeywords = payload;
		if (state.recommendKeywords.length > 6) {
			state.recommendKeywords.splice(6);
		}
	},

	// 상품 관련 전체 키워드 추출하기
	setTotalKeywords(state, payload) {
		if (state.totalKeywords !== payload) {
			state.totalKeywords = payload;
		}
	},

	// 최근 검색한 키워드의 연관 키워드 저장
	// Map 내부에 Key: 검색한 키워드, Values: 연관 검색어들
	setRecentKeywords(state, { key, values }) {
		if (!state.recentKeywords.has(key)) {
			state.recentKeywords.set(key, values);
		}
	},

	// 게스트 최근 검색어 추가하기
	setGuestKeywords(state, payload) {
		state.guestKeywords = payload;
	},

	//게스트(로그인 안한) 상태에서 검색어 추가
	addGuestKeyword(state, payload) {
		state.guestKeywords.unshift(payload);
	},

	//게스트(로그인 안한) 상태에서 검색어 전체 삭제
	deleteAllGuestKeywords(state) {
		state.guestKeywords = [];
	},

	setBrandList(state, payload) {
		state.brandList = payload;
	},

	setOrderedProduct(state, payload) {
		state.orderedProducts = payload;
	},

	setPreorders(state, payload) {
		state.preorders = payload;
	},

	setProductDetail(state, payload) {
		state.productDetail = payload;
	}
};

export default mutations;

const mutations = {
	setUser(state, payload) {
		if (state.userInfo !== payload) {
			state.userInfo = payload;
		}
	},

	setUserList(state, payload) {
		state.userList = payload;
	},

	setNewUser(state, payload) {
		state.userList.unshift(payload);
	},

	addShippingAddress(state, payload) {
		state.userInfo.shippingAddressList.push(payload);
	},

	deleteShippingAddress(state, payload) {
		state.userInfo.shippingAddressList.splice(payload, 1);
	},

	setSearchedKeyword(state, payload) {
		const searchedKeyword = state.userInfo.searchedKeyword;
		if (searchedKeyword !== payload) {
			state.userInfo.searchedKeyword = payload;
		}
	},

	// 검색한 키워드 검색 목록에 저장
	addUserKeyword(state, payload) {
		const { searchedKeywords } = state.userInfo;
		searchedKeywords.unshift(payload);
		if (searchedKeywords.length > 6) {
			searchedKeywords.pop();
		}
	},

	//검색 내역 모두 삭제
	deleteAllSearchKeywords(state) {
		state.userInfo.searchedKeywords = [];
	},
};

export default mutations;

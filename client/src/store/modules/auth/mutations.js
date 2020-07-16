const mutations = {
	setUserList(state, payload) {
		state.userList = payload;
	},

	setUser(state, payload) {
		if (state.userInfo !== payload) {
			state.userInfo = payload;
		}
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

	addSearchedKeyword(state, payload) {
		const searchedKeyword = state.userInfo.searchedKeyword;
		if (searchedKeyword.length >= 6) {
			searchedKeyword.pop();
		}
		searchedKeyword.unshift(payload);
	},
};

export default mutations;

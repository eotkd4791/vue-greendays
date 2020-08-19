const getters = {
	getUserInfo(state) {
		return state.userInfo;
	},
	getShippingAddressList(state) {
		return state.userInfo.shippingAddressList;
	},
	getLatelySearchItems(state) {
		return state.userInfo.searchedKeywords;
	},
};

export default getters;

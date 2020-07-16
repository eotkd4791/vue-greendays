const getters = {
	getUserInfo({ userInfo }) {
		return userInfo;
	},
	getShippingAddressList({ userInfo }) {
		return userInfo.shippingAddressList;
	},
	getLatelySearchItems({ userInfo }) {
		return userInfo.searchedKeyword;
	},
};

export default getters;

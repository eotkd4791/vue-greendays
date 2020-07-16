const userInfo = {
	name: '',
	gender: '',
	birthYear: '',
	phoneNum: '',
	promotionCode: '',
	orderDone: [],
	delivering: [],
	changeOrRefund: [],
	pickedBrands: [
		{
			BrandName: '',
			Bags: false,
			Clothes: false,
			Shoes: false,
			Accessories: false,
			Wallets: false,
		},
	],
	shippingAddressList: [
		{
			recipientName: '유대상',
			recipientPhoneNum: '01012345678',
			recipientAddress: '호주 웨스턴 오스트레일리아주 퍼스',
		},
		{
			recipientName: '대상',
			recipientPhoneNum: '01023456789',
			recipientAddress: '미국 샌프란시스코 실리콘 밸리',
		},
	],
	searchedKeyword: [],
};

export default userInfo;

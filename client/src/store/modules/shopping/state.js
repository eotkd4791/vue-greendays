const state = () => ({
	products: null,
	orderedProducts: [],
	hotKeywords: ['발렌시아가', '프라다', '버버리', '지갑', '생로랑', '클러치'],
	recommendKeywords: [],
	totalKeywords: [],
	recentKeywords: new Map(),
	guestKeywords: [],
	brandList: [],
	preorders: [],
	productDetail: {},
});

export default state;

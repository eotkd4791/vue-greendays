const state = () => ({
	products: null,
	orderedProducts: [],
	hotKeywords: ['BACON', 'AWESOME', 'INCREDIBLE', 'HAT', 'SALAD', 'WOODEN'],
	recommendKeywords: [],
	totalKeywords: [],
	recentKeywords: new Map(),
	guestKeywords: [],
	brandList: [],
	preorders: [],
	productDetail: {},
});

export default state;

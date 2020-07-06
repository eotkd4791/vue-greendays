import faker from 'faker';
import searchOrderBy from '@/static/orderby.js';

const gender = searchOrderBy.genders;
const category = searchOrderBy.categories;
const categoryIndex = ['Bags', 'Wallets', 'Clothes', 'Shoes', 'Accessories'];

const getRandomNumber = limit => Math.floor(Math.random() * limit);

const productList = [];

function makeProductData() {
	for (let i = 0; i < 400; i++) {
		const categoryDetail = category[categoryIndex[getRandomNumber(5)]];

		productList.push({
			id: getRandomNumber(20200707),
			name: `${faker.commerce.productName() + i}`,
			brand: faker.commerce.productAdjective(),
			photoUrl: faker.image.avatar(),
			category: categoryDetail[getRandomNumber(categoryDetail.length)],
			gender: gender[getRandomNumber(4) + 1],
			priceBefore: faker.commerce.price(),
			discountRate: parseFloat(Math.random().toFixed(2)),
			priceAfter: Math.floor(
				this.priceBefore - this.priceBefore * this.discountRate,
			).toLocaleString(),
			material: faker.commerce.material(),
			popularity: getRandomNumber(100),
			productSendToday: getRandomNumber(100) % 2 ? true : false,
			productAbleToBuy: getRandomNumber(100) % 2 ? false : true,
		});
	}
}

const storedProduct = JSON.parse(localStorage.getItem('product'));

!storedProduct ? makeProductData() : (productList = storedProduct);

export default productList;

import searchOrderBy from '@/static/orderby.js';
import { Faker, getRandomNumber } from '@/utils/dummy.js';

const gender = searchOrderBy.genders;
const category = searchOrderBy.categories;
const categoryIndex = ['Bags', 'Wallets', 'Clothes', 'Shoes', 'Accessories'];

const productList = [];

function makeProductData() {
	for (let i = 0; i < 400; i++) {
		const categoryDetail = category[categoryIndex[getRandomNumber(5)]];
		const priceBefore = Math.floor(Faker.commerce.price());
		const discountRate = parseFloat(Math.random().toFixed(2));
		productList.push({
			id: getRandomNumber(20200707),
			name: `${Faker.commerce.productName() + i}`,
			brand: Faker.commerce.productAdjective(),
			photoUrl: Faker.image.avatar(),
			category: categoryDetail[getRandomNumber(categoryDetail.length)],
			gender: gender[getRandomNumber(3) + 1],
			priceBefore,
			discountRate,
			priceAfter: Math.floor(
				priceBefore - priceBefore * discountRate,
			).toLocaleString(),
			material: Faker.commerce.productMaterial(),
			popularity: getRandomNumber(100),
			productSendToday: getRandomNumber(100) % 2 ? true : false,
			productAbleToBuy: getRandomNumber(100) % 2 ? false : true,
		});
	}
}

makeProductData();

export default productList;

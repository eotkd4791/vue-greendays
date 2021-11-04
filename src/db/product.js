import searchOrderBy from '@/static/orderby.js';
import { Faker, getRandomNumber } from '@/utils/dummy.js';

const gender = searchOrderBy.genders;
const categoryObj = searchOrderBy.categories;

const categoryIndex = ['Bags', 'Wallets', 'Clothes', 'Shoes', 'Accessories'];

const productList = [];

const fakerFunctions = Object.values(Faker.image);

function createRandomPhotoUrl() {
	const index = getRandomNumber(6);
	const [abstract, city, nature, nightlife, sports, food] = fakerFunctions;
	return [abstract, city, nature, nightlife, sports, food][index](260, 260, undefined, true, true);
}

function makeProductData() {
	for (let i = 0; i < 400; i++) {
		const randomNumber = getRandomNumber(5);
		const category = categoryIndex[randomNumber];

		const categoryDetail = categoryObj[category][getRandomNumber(categoryObj[category].length)];
		const priceBefore = Math.floor(Faker.commerce.price());
		const discountRate = parseFloat(Math.random().toFixed(2));

		const isReservedToBuy = getRandomNumber(100) % 2 ? true : false;

		productList.push({
			id: getRandomNumber(20200707),
			name: `${Faker.commerce.productName() + i}`,
			brand: Faker.commerce.productAdjective(),
			photoUrl: createRandomPhotoUrl(),
			secondImgUrl: createRandomPhotoUrl(),
			thirdImgUrl: createRandomPhotoUrl(),
			fourthImgUrl: createRandomPhotoUrl(),
			category,
			categoryDetail,
			gender: gender[getRandomNumber(3) + 1],
			priceBefore,
			discountRate,
			priceAfter: Math.floor(priceBefore - priceBefore * discountRate).toLocaleString(),
			material: Faker.commerce.productMaterial(),
			popularity: getRandomNumber(100),
			productSendToday: isReservedToBuy,
			productAbleToBuy: !isReservedToBuy,
			registeredTime: Faker.date.recent(),
		});
	}
}

makeProductData();

export default productList;

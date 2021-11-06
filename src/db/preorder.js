import { getItem } from '@/utils/storage.js';
import { Faker, getRandomNumber } from '@/utils/dummy.js';
import dbProduct from '@/db/product.js';

const preorderList = [];
const storedProducts = getItem('product');
const products = (storedProducts ? storedProducts : dbProduct).sort(a =>
	a.productAbleToBuy ? -1 : 1
);

const preorderImgPath = [
	'https://menu.mt.co.kr/moneyweek/thumb/2019/09/27/06/2019092710298098227_1.jpg',
	'https://image.fmkorea.com/files/attach/new/20200107/4477817/5151653/2578465312/abe9caf1dcacaa555a695b5fa39d16a0.jpg',
	'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F190212464FDEB31123',
	'https://t1.daumcdn.net/liveboard/maxim/985c9936d6854c27ab701523395a4fd4.png',
	'https://press.farm/wp-content/uploads/2018/03/fashion-luxury-brands-marketing.jpg'
];

function createPreorders() {
	for (let i = 0; i < 5; i++) {
		preorderList.push({
			title: Faker.lorem.slug(),
			subtitle: Faker.lorem.sentence(),
			description: Faker.lorem.sentence(),
			expiredHour: getRandomNumber(200) + 1,
			expiredMin: 0,
			expiredSec: 0,
			activated: true,
			promoName:
				getRandomNumber(2) % 2 ? '2020 S/S COLLECTION' : '2020 F/W COLLECTION',
			imgUrl: preorderImgPath[i],
			products: products.slice(i * 80, (i + 1) * 80)
		});
	}
}

createPreorders();

export default preorderList;

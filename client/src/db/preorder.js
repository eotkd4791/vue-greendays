import dbProduct from '@/db/product.js';
import { Faker, getRandomNumber } from '@/utils/dummy.js';

let preorderList = [];

function makePreorderData() {
	dbProduct.sort(v => (v.productAbleToBuy ? 1 : -1));
	for (let i = 0; i < 5; i++) {
		preorderList.push({
			title: Faker.lorem.slug(),
			subtitle: Faker.lorem.sentence(),
			description: Faker.lorem.sentence(),
			expiredAt: `${getRandomNumber(200) + 1}:00:00`,
			activated: true,
			promoName:
				getRandomNumber(2) % 2 ? '2020 S/S COLLECTION' : '2020 F/W COLLECTION',
			imgUrl: Faker.image.fashion(),
			products: dbProduct.slice(i * 80, (i + 1) * 80),
		});
	}
	localStorage.setItem('preorders', JSON.stringify(preorderList));
}

const storedPreorder = JSON.parse(localStorage.getItem('preorders'));

!!storedPreorder ? makePreorderData() : (preorderList = storedPreorder);

export default preorderList;

import dbProduct from './product.js';
import { Faker, getRandomNumber } from '@/utils/dummy.js';
import { setItem, getItem } from '@/utils/storage.js';

let reviewList = [];

function makeReviewData() {
	for (let i = 0; i < 400; i++) {
		const { id, name, photoUrl, brand } = dbProduct[getRandomNumber(400)];
		reviewList.push({
			id,
			brand,
			writer: Faker.name.findName(),
			nameOfProduct: name,
			postedTime: Faker.date.recent(),
			content: Faker.lorem.paragraphs(10),
			path: photoUrl,
			satisfaction: Math.floor(Math.random() * 5) + 1,
		});
	}
	reviewList.sort((a, b) => (a.postedTime < b.postedTime ? -1 : 1));
	setItem('reviews', reviewList);
}

const storedReview = getItem('reviews');

storedReview ? (reviewList = storedReview) : makeReviewData();

export default reviewList;

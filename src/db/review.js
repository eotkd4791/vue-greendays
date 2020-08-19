import dbProduct from './product.js';
import { Faker, getRandomNumber } from '@/utils/dummy.js';

let reviewList = [];

function makeReviewData() {
	for (let i = 0; i < 100; i++) {
		const reviewedProduct = dbProduct[getRandomNumber(400)];
		reviewList.push({
			writer: Faker.name.findName(),
			nameOfProduct: reviewedProduct.name,
			postedTime: Faker.date.recent(),
			content: Faker.lorem.sentences(),
			imgPath: reviewedProduct.photoUrl,
		});
	}
	localStorage.setItem('reviews', JSON.stringify(reviewList));
}

const storedReview = JSON.parse(localStorage.getItem('reviews'));

storedReview ? makeReviewData() : (reviewList = storedReview);

export default reviewList;

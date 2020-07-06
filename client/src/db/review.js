import faker from 'faker';
import product from './product.js';

const reviewList = [];

const storedReview = JSON.parse(localStorage.getItem('review'));

if (!storedReview) {
	for (let i = 0; i < 100; i++) {
		const reviewedProduct = product[Math.random() * 400];
		reviewList.push({
			writer: faker.name.findName(),
			nameOfProduct: reviewedProduct.name,
			postedTime: faker.date.recent(),
			content: faker.lorem.sentences(),
			imgPath: reviewedProduct.photoUrl,
		});
	}
} else {
	reviewList = storedReview;
}
export default reviewList;

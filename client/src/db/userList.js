import { Faker, createPromotionCode } from '@/utils/dummy.js';

const userList = [];

for (let i = 0; i < 100; i++) {
	userList.push({
		email: Faker.internet.email(),
		password: Faker.internet.password(),
		promotionCode: createPromotionCode(),
	});
}

export default userList;

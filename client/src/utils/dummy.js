import faker from 'faker';

export const Faker = faker;

export const getRandomNumber = limit => Math.floor(Math.random() * limit);

export const createPromotionCode = () => {
	const limit = 1000000;
	const sixRandomDigit = getRandomNumber(limit) + limit;
	return (sixRandomDigit < limit ? sixRandomDigit : sixRandomDigit - limit)
		.toString(16)
		.toUpperCase();
};

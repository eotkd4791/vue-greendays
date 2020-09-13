import faker from 'faker';

export const Faker = faker;

export const getRandomNumber = limit => Math.floor(Math.random() * limit);

export const createPromotionCode = () => {
	const maximumHex = 16777216; //0xFFFFFF + 1
	const minimumHex = 1048576; //0x100000
	const sixRandomDigit = getRandomNumber(maximumHex) + minimumHex;
	return (sixRandomDigit <= maximumHex ? sixRandomDigit : sixRandomDigit - minimumHex).toString(16).toUpperCase();
};

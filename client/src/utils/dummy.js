import faker from 'faker';

export const Faker = faker;

export const getRandomNumber = limit => Math.floor(Math.random() * limit);

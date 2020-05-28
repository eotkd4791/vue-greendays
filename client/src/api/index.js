import axios from 'axios';

const config = {
	baseUrl: 'http://127.0.0.1:8081'
};

// GET /Main
export const getPromotion = () => axios.get(config.baseUrl);

// POST /auth/login
export const setUser = (email, password) => axios.post(`${config.baseUrl}/auth/login`, {
	email,
	password
});

// POST /auth/email/send
export const getEmailCheckCode = (email) => (
	axios.post(`${config.baseUrl}/auth/email/send`, {
		email
	}));

// POST /auth/email/check
export const getCheckSentCode = (code) => (
	axios.post(`${config.baseUrl}/auth/email/check`, {
		code
	}));

// POST /auth/signup
export const signUp = (userInfo) => (
	axios.post(`${config.baseUrl}/auth/signup`, {
		userInfo
	}));
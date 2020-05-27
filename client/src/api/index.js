import axios from 'axios';

export const config = { baseUrl: 'http://127.0.0.1:8081' };

// GET /Main
export const getPromotion = () => axios.get(config.baseUrl);

// POST /login
export const setUser = (email, password) => axios.post(`${config.baseUrl}/auth/login`, {
    email, password
});

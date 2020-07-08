import LoginView from '@/views/LoginView.vue';
import SignUpView from '@/views/SignUpView.vue';

const authRoutes = [
	{
		path: '/login',
		component: LoginView,
		name: 'login',
	},
	{
		path: '/signup',
		component: SignUpView,
		name: 'signup',
	},
];

export default authRoutes;

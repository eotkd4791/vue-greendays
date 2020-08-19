const authRoutes = [
	{
		path: '/vue-greendays/login',
		name: 'login',
		component: () => import('@/views/LoginView.vue'),
	},
	{
		path: '/vue-greendays/logout',
		name: 'logout',
		component: () => import('@/views/LogoutView.vue'),
	},
	{
		path: '/vue-greendays/signup',
		name: 'signup',
		component: () => import('@/views/SignUpView.vue'),
	},
];

export default authRoutes;

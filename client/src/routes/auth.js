const authRoutes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/LoginView.vue'),
	},
	{
		path: '/logout',
		name: 'logout',
		component: () => import('@/views/LogoutView.vue'),
	},
	{
		path: '/signup',
		name: 'signup',
		component: () => import('@/views/SignUpView.vue'),
	},
];

export default authRoutes;

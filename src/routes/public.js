const publicRoutes = [
	{
		path: '/',
		name: 'main',
		component: () => import('@/views/MainView.vue')
	},
	{
		path: '/introduction',
		name: 'introduction',
		component: () => import('@/views/Introduction.vue')
	},
	{
		path: '/reviews',
		name: 'reviews',
		component: () => import('@/views/Reviews.vue')
	}
];

export default publicRoutes;

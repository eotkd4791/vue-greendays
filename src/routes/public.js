const publicRoutes = [
	{
		path: '/vue-greendays/',
		name: 'main',
		component: () => import('@/views/MainView.vue')
	},
	{
		path: '/vue-greendays/introduction',
		name: 'introduction',
		component: () => import('@/views/Introduction.vue')
	},
	{
		path: '/vue-greendays/reviews',
		name: 'reviews',
		component: () => import('@/views/Reviews.vue')
	}
];

export default publicRoutes;

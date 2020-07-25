import MainView from '@/views/MainView.vue';
import Introduction from '@/views/Introduction.vue';
import Reviews from '@/views/Reviews.vue';

const publicRoutes = [
	{
		path: '/',
		component: MainView,
		name: 'main',
	},
	{
		path: '/introduction',
		component: Introduction,
		name: 'introduction',
	},
	{
		path: '/reviews',
		component: Reviews,
		name: 'reviews',
	},
];

export default publicRoutes;

const userRoutes = {
	path: '/user',
	redirect: '/user/edit/:userId',
	component: () => import('@/views/MyUserInfo.vue'),
	children: [
		{
			path: '/user/edit/:userId',
			name: 'userInfoEdit',
			component: () => import('@/views/UserInfoEdit.vue'),
		},
		{
			path: '/user/total_order_refund/:userId',
			name: 'totalOrderRefund',
			component: () => import('@/views/TotalOrderRefund.vue'),
		},
		{
			path: '/user/point/:userId',
			name: 'pointUsage',
			component: () => import('@/views/PointUsage.vue'),
		},
	],
};

export default userRoutes;

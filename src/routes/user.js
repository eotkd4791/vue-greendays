const userRoutes = {
	path: '/vue-greendays/user',
	redirect: '/vue-greendays/user/edit/:userId',
	component: () => import('@/views/MyUserInfo.vue'),
	children: [
		{
			path: '/vue-greendays/user/edit/:userId',
			name: 'userInfoEdit',
			component: () => import('@/views/UserInfoEdit.vue'),
		},
		{
			path: '/vue-greendays/user/total_order_refund/:userId',
			name: 'totalOrderRefund',
			component: () => import('@/views/TotalOrderRefund.vue'),
		},
		{
			path: '/vue-greendays/user/point/:userId',
			name: 'pointUsage',
			component: () => import('@/views/PointUsage.vue'),
		},
	],
};

export default userRoutes;

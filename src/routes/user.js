const userRoutes = {
	path: '/vue-greendays/user',
	redirect: '/user/edit/:userId',
	component: () => import('@/views/MyUserInfo.vue'),
	children: [
		{
			path: '/vue-greendays/user/edit/:userId',
			name: 'userInfoEdit',
			component: () => import('@/views/UserInfoEdit.vue')
		},
		{
			path: '/vue-greendays/user/total_order_refund/:userId',
			name: 'totalOrderRefund',
			component: () => import('@/views/TotalOrderRefund.vue')
		}
	]
};

export default userRoutes;

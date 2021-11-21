const customerServiceRoutes = {
	path: '/vue-greendays/customerservice',
	redirect: '/customerservice/main',
	component: () => import('@/views/CustomerService.vue'),
	children: [
		{
			path: '/vue-greendays/customerservice/main',
			name: 'customerService',
			component: () => import('@/views/CustomerServiceMain.vue')
		},
		{
			path: '/vue-greendays/customerservice/logi_guide',
			name: 'logiGuide',
			component: () => import('@/views/LogiGuide.vue')
		},
		{
			path: '/vue-greendays/customerservice/notice',
			name: 'notice',
			component: () => import('@/views/NoticeView.vue')
		},
		{
			path: '/vue-greendays/customerservice/faq',
			name: 'faqList',
			component: () => import('@/views/FaqList.vue')
		},
		{
			path: '/vue-greendays/customerservice/terms',
			name: 'terms',
			component: () => import('@/views/Terms.vue')
		},
		{
			path: '/vue-greendays/customerservice/private_info_policy',
			name: 'privateInfoPolicy',
			component: () => import('@/views/PrivateInfoPolicy.vue')
		}
	]
};

export default customerServiceRoutes;

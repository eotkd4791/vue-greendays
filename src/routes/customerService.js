const customerServiceRoutes = {
	path: '/customerservice',
	redirect: '/customerservice/main',
	component: () => import('@/views/CustomerService.vue'),
	children: [
		{
			path: '/customerservice/main',
			name: 'customerService',
			component: () => import('@/views/CustomerServiceMain.vue')
		},
		{
			path: '/customerservice/logi_guide',
			name: 'logiGuide',
			component: () => import('@/views/LogiGuide.vue')
		},
		{
			path: '/customerservice/notice',
			name: 'notice',
			component: () => import('@/views/NoticeView.vue')
		},
		{
			path: '/customerservice/faq',
			name: 'faqList',
			component: () => import('@/views/FaqList.vue')
		},
		{
			path: '/customerservice/terms',
			name: 'terms',
			component: () => import('@/views/Terms.vue')
		},
		{
			path: '/customerservice/private_info_policy',
			name: 'privateInfoPolicy',
			component: () => import('@/views/PrivateInfoPolicy.vue')
		}
	]
};

export default customerServiceRoutes;

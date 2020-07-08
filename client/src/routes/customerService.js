import CustomerService from '@/views/CustomerService.vue';
import CustomerServiceMain from '@/views/CustomerServiceMain.vue';
import LogiGuide from '@/views/LogiGuide.vue';
import Notice from '@/views/NoticeView.vue';
import FaqList from '@/views/FaqList.vue';
import Terms from '@/views/Terms.vue';
import PrivateInfoPolicy from '@/views/PrivateInfoPolicy.vue';

const customerServiceRoutes = {
	path: '/customerservice',
	redirect: '/customerservice/main',
	component: CustomerService,
	children: [
		{
			path: '/customerservice/main',
			name: 'customerService',
			component: CustomerServiceMain,
		},
		{
			path: '/customerservice/logi_guide',
			name: 'logiGuide',
			component: LogiGuide,
		},
		{
			path: '/customerservice/notice',
			name: 'notice',
			component: Notice,
		},
		{
			path: '/customerservice/faq',
			name: 'faqList',
			component: FaqList,
		},
		{
			path: '/customerservice/terms',
			name: 'terms',
			component: Terms,
		},
		{
			path: '/customerservice/private_info_policy',
			name: 'privateInfoPolicy',
			component: PrivateInfoPolicy,
		},
	],
};

export default customerServiceRoutes;

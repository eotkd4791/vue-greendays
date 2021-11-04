export default {
	getCustomerLinks() {
		return [
			{
				routePath: '/vue-greendays/customerservice',
				name: '고객센터',
			},
			{
				routePath: '/vue-greendays/customerservice/logi_guide',
				name: '배송가이드',
			},
			{
				routePath: '/vue-greendays/customerservice/notice',
				name: '공지사항',
			},
			{
				routePath: '/vue-greendays/customerservice/faq',
				name: '자주묻는질문',
			},
			{
				routePath: '/vue-greendays/customerservice/terms',
				name: '이용약관',
			},
			{
				routePath: '/vue-greendays/customerservice/private_info_policy',
				name: '개인정보취급방침',
			},
		];
	},
	getUserInfoLinks() {
		return [
			{
				routePath: '/vue-greendays/user/edit/:userId',
				name: '내 정보 관리',
			},
			{
				routePath: '/vue-greendays/user/total_order_refund/:userId',
				name: '주문 및 반품 내역',
			},
			{
				routePath: '/vue-greendays/user/point/:userId',
				name: '포인트',
			},
		];
	},
};

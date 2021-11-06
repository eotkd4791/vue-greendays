export default {
	getCustomerLinks() {
		return [
			{
				routePath: '/customerservice',
				name: '고객센터'
			},
			{
				routePath: '/customerservice/logi_guide',
				name: '배송가이드'
			},
			{
				routePath: '/customerservice/notice',
				name: '공지사항'
			},
			{
				routePath: '/customerservice/faq',
				name: '자주묻는질문'
			},
			{
				routePath: '/customerservice/terms',
				name: '이용약관'
			},
			{
				routePath: '/customerservice/private_info_policy',
				name: '개인정보취급방침'
			}
		];
	},
	getUserInfoLinks() {
		return [
			{
				routePath: '/user/edit/:userId',
				name: '내 정보 관리'
			},
			{
				routePath: '/user/total_order_refund/:userId',
				name: '주문 및 반품 내역'
			},
			{
				routePath: '/user/point/:userId',
				name: '포인트'
			}
		];
	}
};

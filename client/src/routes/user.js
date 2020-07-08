import MyUserInfo from '@/views/MyUserInfo.vue';
import UserInfoEdit from '@/views/UserInfoEdit.vue';
import TotalOrderRefund from '@/views/TotalOrderRefund.vue';
import PointUsage from '@/views/PointUsage.vue';

const userRoutes = {
	path: '/user/:id',
	redirect: '/user/edit/:userId',
	component: MyUserInfo,
	children: [
		{
			path: '/user/edit/:userId',
			name: 'userInfoEdit',
			component: UserInfoEdit,
		},
		{
			path: '/user/total_order_refund/:userId',
			name: 'totalOrderRefund',
			component: TotalOrderRefund,
		},
		{
			path: '/user/point/:userId',
			name: 'pointUsage',
			component: PointUsage,
		},
	],
};

export default userRoutes;

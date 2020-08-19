<template>
	<section class="user-info-edit">
		<header class="user-info-edit__header">내 정보 관리</header>
		<ul class="user-info-edit__ul">
			<info-list :eachOfListItems="{ title: '내 정보 수정' }">
				<template #edit-user-info>
					<edit-user-info-list />
				</template>
			</info-list>
			<info-list :eachOfListItems="{ title: '배송지 관리' }">
				<template #shipping-address-setting>
					<shipping-address-setting />
				</template>
			</info-list>
			<info-list :eachOfListItems="{ title: '추천코드' }">
				<template #user-promotion-code>
					<user-promotion-code />
				</template>
			</info-list>
			<li class="user-info-edit__li">
				<button class="user-info-edit__btn" @click="deleteMyAccount">
					회원탈퇴
				</button>
			</li>
		</ul>
	</section>
</template>

<script>
import InfoList from '@/components/common/InfoList.vue';
import EditUserInfoList from '@/components/EditUserInfoList.vue';
import ShippingAddressSetting from '@/components/ShippingAddressSetting.vue';
import UserPromotionCode from '@/components/UserPromotionCode.vue';

export default {
	components: {
		InfoList,
		EditUserInfoList,
		ShippingAddressSetting,
		UserPromotionCode,
	},
	methods: {
		deleteMyAccount() {
			const confirmQuitMemberShip = confirm('정말 탈퇴하시겠습니까 ?');
			if (confirmQuitMemberShip) {
				this.$store
					.dispatch('auth/QUIT_MEMBERSHIP')
					.then(() => {
						this.$router.replace('/vue-greendays');
					})
					.catch(error => {
						console.error(error);
					});
			}
		},
	},
};
</script>

<style scoped>
.user-info-edit {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 840px;
	min-height: 433px;
}

.user-info-edit__header {
	font-size: 20px;
	margin: 0 0 36px;
}

.user-info-edit__ul {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
}

.user-info-edit__btn {
	width: 100%;
	margin: 30px 0 0;
	color: #b6b6b6;
	font-size: 14px;
	text-decoration: underline;
	cursor: pointer;
}
</style>

<template>
	<div class="userinfo__modal-container">
		<div class="userinfo__modal-wrapper">
			<section class="userinfo_section">
				<ul @click="routingPage">
					<router-link tag="li" :to="`/user/edit/${getUserInfo.id}`">{{
						getUserInfo.name
					}}</router-link>
					<li>{{ `내 추천 코드 ${getUserInfo.promotionCode}` }}</li>
					<router-link tag="li" :to="`/user/edit/${getUserInfo.id}`"
						>내 정보 관리</router-link
					>
					<router-link
						tag="li"
						:to="`/user/total_order_refund/${getUserInfo.id}`"
						>주문 및 반품 내역</router-link
					>
					<router-link tag="li" :to="`/user/point/${getUserInfo.id}`"
						>포인트</router-link
					>
					<li @click.stop="userLogOut">로그아웃</li>
				</ul>
			</section>
			<aside class="userinfo__aside">
				<i class="fas fa-times" ref="closeBtn" @click="closeUserInfo" />
				<ul>
					<li>
						<em>결제완료</em>
						<strong>{{ getUserInfo.orderDone.length }}</strong>
					</li>
					<li>
						<em>배송중</em>
						<strong>{{ getUserInfo.delivering.length }}</strong>
					</li>
					<li>
						<em>반품/교환</em>
						<strong>{{ getUserInfo.changeOrRefund.length }}</strong>
					</li>
				</ul>
				<router-link
					tag="button"
					:to="`/user/total_order_refund/${getUserInfo.id}`"
					>주문 및 반품 내역</router-link
				>
			</aside>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Bus from '@/utils/bus.js';

export default {
	computed: {
		...mapGetters('auth', ['getUserInfo'])
	},

	methods: {
		...mapActions('auth', ['LOG_OUT']),

		closeUserInfo() {
			Bus.$emit('user-info-toggle');
		},

		async userLogOut() {
			try {
				const confirmLogOut = confirm('로그아웃 하시겠습니까?');
				if (confirmLogOut) {
					this.closeUserInfo();
					this.$router.push('/logout');
					await this.LOG_OUT();
					alert('로그아웃 되었습니다.');
					this.$router.replace('/').catch(() => {});
				}
			} catch (error) {
				console.error(error);
			}
		},
		routingPage() {
			Bus.$emit('off-user-info-modal');
		}
	},
	mounted() {
		Bus.$on('off-user-info-modal', this.closeUserInfo);
	},
	beforeDestroy() {
		Bus.$off('off-user-info-modal', this.closeUserInfo);
	}
};
</script>

<style scoped>
.userinfo__modal-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 280px;
	background-color: #f8f8f8;
	font-size: 14px;
}

.userinfo__modal-wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
}

.fa-times {
	font-size: 33px;
	margin-bottom: 55px;
	border-style: none;
	outline: none;
	cursor: pointer;
}

.userinfo_section {
	width: 810px;
	height: 235px;
	margin-top: 44px;
	font-weight: 500;
}

.userinfo_section li {
	width: 100%;
	margin: 0 0 20px;
	cursor: pointer;
}

.userinfo_section li:first-child {
	font-size: 20px;
}

.userinfo_section li:nth-child(2) {
	color: #42b850;
	cursor: default;
}

.userinfo__aside {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 290px;
	height: 235px;
	margin-top: 44px;
}

.userinfo__aside > ul {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 70px;
}

.userinfo__aside li {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.userinfo__aside li > em {
	display: block;
	font-size: 13px;
}

.userinfo__aside li > strong {
	font-size: 36px;
}

.userinfo__aside > button {
	width: 100%;
	height: 36px;
	background-color: #393939;
	color: #fff;
}
</style>

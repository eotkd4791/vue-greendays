<template>
	<div class="logo" @click="movePage('/')">
		<div
			v-if="isLoggedIn"
			class="user-info-point"
			@click.stop="movePage(`/mypoint/${getUserInfo.id}`)"
		>
			<span class="user-info-text">{{ getUserInfo.point }}</span>
			<span v-show="isLoggedIn" class="point-icon fas fa-coins" />
		</div>
		<span
			class="user-info fas fa-user"
			ref="userInfo"
			@click.stop="isLoggedIn ? toggleUserInfo() : movePage('/login')"
		></span>
		<span
			class="user-info far fa-heart"
			@click.stop="
				isLoggedIn
					? movePage(`/wishlist/${getUserInfo.id}`)
					: movePage('/login')
			"
		></span>
		<span v-if="isLoggedIn" class="user-info-text">
			{{ getUserInfo.wishList }}
		</span>
		<span
			class="user-info fas fa-shopping-basket"
			@click.stop="
				isLoggedIn
					? movePage(`/cartitems/${getUserInfo.id}`)
					: movePage('/login')
			"
		></span>
		<span class="user-info-text">{{ getUserInfo.cartItems }}</span>
	</div>
</template>

<script>
import Bus from '@/utils/bus.js';

export default {
	data() {
		return {
			showUserInfo: false,
		};
	},
	computed: {
		isLoggedIn() {
			return this.$store.state.auth.userInfo !== {};
		},
		getUserInfo() {
			return this.$store.state.auth.userInfo;
		},
	},
	methods: {
		movePage(to) {
			if (to === '#') return;
			if (this.$route.path !== to) {
				const nextPage = { path: to };
				this.$router.push(nextPage);
				window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
			}
		},
		toggleUserInfo() {
			this.$refs.userInfo.classList.toggle('active');
			this.showUserInfo = !this.showUserInfo;
			Bus.$emit('showUserInfo', this.showUserInfo);
		},
	},
	mounted() {
		Bus.$on('userInfoToggle', this.toggleUserInfo);
	},
	beforeDestroy() {
		Bus.$off('userInfoToggle', this.toggleUserInfo);
	},
};
</script>

<style scoped>
.logo {
	max-width: 1100px;
	height: 40px;
	margin: 15px auto;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-image: url('../assets/img/greendays.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	cursor: pointer;
}
.user-info {
	margin-left: 20px;
}
.user-info-point {
	color: #42b883;
}

.fas,
.far {
	padding: 5px 5px;
}

.fa-coins {
	margin-left: 5px;
	margin-right: 10;
}
.fa-heart {
	color: #42b883;
}
.fa-user {
	color: #000;
}
.fa-user.active {
	color: #42b883;
}
.user-info-text {
	margin-left: 5px;
	font-size: 13px;
}
</style>

<template>
	<div class="logo" @click="movePage('/')">
		<div
			v-if="!!getUserInfo"
			class="user-info-point"
			@click.stop="movePage(`/user/mypoint/${getUserInfo.id}`)"
		>
			<span v-if="!!getUserInfo" class="user-info-text">
				{{ !!getUserInfo ? getUserInfo.point : '' }}
			</span>
			<span v-show="!!getUserInfo" class="point-icon fas fa-coins" />
		</div>
		<span
			class="user-info fas fa-user"
			ref="userInfo"
			@click.stop="!!getUserInfo ? toggleUserInfo() : movePage('/login')"
		></span>
		<span
			class="user-info fa-heart"
			:class="{
				fas: !!getUserInfo && getUserInfo.wishList.length > 0,
				far: !getUserInfo || !getUserInfo.wishList.length,
			}"
			@click.stop="
				!!getUserInfo
					? movePage(`/wishlist/${getUserInfo.id}`)
					: movePage('/login')
			"
		/>
		<span v-show="getUserInfo" class="user-info-text">
			{{ !!getUserInfo ? getUserInfo.wishList.length : '' }}
		</span>
		<span
			class="user-info fas fa-shopping-basket"
			@click.stop="
				!!getUserInfo
					? movePage('/login')
					: movePage(`/cartitems/${getUserInfo.id}`)
			"
		/>
		<span class="user-info-text">
			{{ !!getUserInfo ? getUserInfo.cartItems.length : 0 }}
		</span>
	</div>
</template>

<script>
import Bus from '@/utils/bus.js';
import util from '@/mixins/utilMethods.js';

export default {
	mixins: [util],
	data() {
		return {
			showUserInfo: false,
		};
	},
	computed: {
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
	created() {
		this.$store.dispatch('auth/IS_LOGGED_IN');
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

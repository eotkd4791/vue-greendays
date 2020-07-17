<template>
	<ul class="user-info" @click="movePage('/')">
		<li
			class="user-info__point"
			v-if="!!getUserInfo"
			@click.stop="movePage(`/user/mypoint/${getUserInfo.id}`)"
		>
			<span class="user-info__text" v-if="!!getUserInfo">{{ !!getUserInfo ? getUserInfo.point : '' }}</span>
			<span class="fas fa-coins" v-show="!!getUserInfo" />
		</li>
		<li
			class="user-info__list fas fa-user"
			ref="userInfo"
			@click.stop="!!getUserInfo ? toggleUserInfo() : movePage('/login')"
		/>
		<li
			class="user-info__list fa-heart"
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
		<li
			v-show="getUserInfo"
			class="user-info__text"
		>{{ !!getUserInfo ? getUserInfo.wishList.length : '' }}</li>
		<li
			class="user-info__list fas fa-shopping-basket"
			@click.stop="
				!!getUserInfo
					? movePage(`/cartitems/${getUserInfo.id}`)
					: movePage('/login')
			"
		/>
		<li class="user-info__text">{{ !!getUserInfo ? getUserInfo.cartItems.length : 0 }}</li>
	</ul>
</template>

<script>
import Bus from '@/utils/bus.js';
import util from '@/mixins/utilMethods.js';
import { mapActions } from 'vuex';

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
		...mapActions('auth', ['IS_LOGGED_IN']),

		toggleUserInfo() {
			this.$refs.userInfo.classList.toggle('active');
			this.showUserInfo = !this.showUserInfo;
			Bus.$emit('showUserInfo', this.showUserInfo);
		},
	},

	created() {
		this.IS_LOGGED_IN();
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
.user-info {
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

.user-info__list {
	margin-left: 20px;
}

.user-info__point {
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

.user-info__text {
	margin-left: 5px;
	font-size: 13px;
}
</style>

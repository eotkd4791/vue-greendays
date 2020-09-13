<template>
	<v-container class="login">
		<div class="login-wrapper">
			<v-container>
				<v-row class="login-row">
					<v-col cols="8">
						<v-card>
							<v-container>
								<v-container>저는 이미 그린데이즈 멤버입니다.</v-container>
								<v-subheader>본인 확인을 위해 이메일을 입력하세요.</v-subheader>
								<v-form ref="loginForm" @submit.prevent="userLogin">
									<v-text-field label="이메일" :rules="emailRules" v-model.lazy="userEmail" autofocus required />
									<v-text-field v-if="isValidEmail" v-model="userPassword" label="비밀번호" type="password" :rules="passwordRules" required />
									<v-btn type="submit" style="color:#fff" color="#000" block>로그인</v-btn>
								</v-form>
							</v-container>
						</v-card>
					</v-col>
					<v-col cols="8">
						<v-card>
							<v-container>
								<v-container>그린데이즈 멤버가 되고 싶습니다.</v-container>
								<v-subheader>그린데이즈 멤버십에 가입하시면 많은 혜택을 받을 수 있습니다.</v-subheader>
								<v-subheader>
									아직 그린데이즈 멤버가 아니라면 연락처로 간편하게 가입하실 수 있습니다.
								</v-subheader>
							</v-container>
							<v-container>
								<v-btn style="color:#fff" color="#000" block @click="movePage('/vue-greendays/signup')">그린데이즈 멤버십 가입</v-btn>
							</v-container>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</div>
	</v-container>
</template>

<script>
import { mapActions } from 'vuex';
import util from '@/mixins/utilMethods.js';
import rules from '@/mixins/rules.js';

export default {
	mixins: [util, rules],

	data() {
		return {
			userEmail: '',
			userPassword: '',
		};
	},

	computed: {
		isValidEmail() {
			return /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(this.userEmail);
		},
	},

	methods: {
		...mapActions('auth', ['FETCH_USER_LIST', 'LOG_IN']),

		async userLogin() {
			try {
				if (this.$refs.loginForm.validate()) {
					const response = await this.LOG_IN({
						email: this.userEmail,
						password: this.userPassword,
					});
					if (response) throw Error('올바르지 않은 이메일 또는 비밀번호 입니다.');
					else {
						this.$refs.loginForm.reset();
						this.$router.replace('/vue-greendays');
					}
				} else throw new Error('로그인 양식을 확인해주십시오.');
			} catch (error) {
				return alert(error.message);
			}
		},
	},

	created() {
		this.FETCH_USER_LIST();
	},
};
</script>

<style scoped>
.login {
	display: flex;
	justify-content: center;
	width: 100%;
	color: #fff;
	background-color: #fff;
}

.login-wrapper {
	max-width: 1100px;
}

.login-row {
	width: 100%;
	display: flex;
	justify-content: space-around;
	flex-wrap: nowrap;
	margin: 0 auto 330px;
}
</style>

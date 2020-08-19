<template>
	<v-app class="sign-up">
		<v-container class="sign-up__container">
			<v-card>
				<v-container>
					<v-card-title>그린데이즈 멤버십 가입</v-card-title>
				</v-container>
				<v-container>
					<v-row class="sign-up__article">
						<v-col cols="5">
							<v-form class="sign-up__form" ref="email">
								<v-text-field
									type="string"
									label="이메일"
									color="#000"
									@input="checkEmailRules"
									@keypress.enter.prevent="checkEmailRedundancy"
									v-model="userInfo.email"
									:rules="emailRules"
									required
								/>
								<v-btn
									class="sign-up__btn"
									color="#000"
									@click="checkEmailRedundancy"
									:disabled="!isProperEmail"
									>이메일 중복확인</v-btn
								>
							</v-form>
						</v-col>
						<v-col cols="5">
							<v-text-field
								label="휴대폰 번호를 입력하세요."
								v-model="userInfo.phoneNum"
								color="#000"
								required
							/>
						</v-col>
					</v-row>
				</v-container>
				<v-container>
					<v-row class="sign-up__article">
						<v-col cols="5">
							<v-form ref="password">
								<v-text-field
									type="password"
									label="비밀번호"
									color="#000"
									v-model="userInfo.password"
									:rules="passwordRules"
									@input="AllowOnlyEnglish(userInfo.password)"
									required
								/>
							</v-form>
						</v-col>
						<v-col cols="5">
							<v-text-field
								type="password"
								label="비밀번호 확인"
								color="#000"
								v-model="passwordCheck"
								:rules="passwordCheckRules"
								:disabled="isProperPassword"
								required
							/>
						</v-col>
					</v-row>
				</v-container>
				<v-container>
					<v-row class="sign-up__article">
						<v-col cols="5">
							<v-text-field
								type="string"
								label="이름"
								color="#000"
								v-model="userInfo.name"
								required
							/>
						</v-col>
						<v-col cols="5">
							<v-form class="sign-up__form">
								<v-text-field
									type="string"
									label="우편번호"
									ref="postcode"
									color="#000"
									v-model="userInfo.postCode"
									@click="openAddressSearch"
									@keypress.enter.prevent="openAddressSearch"
									readonly
									required
								/>
								<v-btn
									class="sign-up__btn"
									color="#000"
									@click="openAddressSearch"
									>우편번호 찾기</v-btn
								>
							</v-form>
						</v-col>
					</v-row>
				</v-container>
				<v-container>
					<v-row class="sign-up__article">
						<v-col cols="5">
							<v-text-field
								type="string"
								label="주소"
								color="#000"
								v-model="userInfo.address"
								ref="detailAddress"
								readonly
								required
							/>
						</v-col>
						<v-col cols="5">
							<v-text-field
								type="string"
								label="나머지 주소"
								color="#000"
								v-model="userInfo.detailAddress"
								required
							/>
						</v-col>
					</v-row>
				</v-container>
				<v-container>
					<v-row class="sign-up__article">
						<v-col cols="5">
							<v-overflow-btn
								class="sign-up__gender"
								label="성별"
								color="#000"
								v-model="userInfo.selectedGender"
								:items="gender"
								dense
								outlined
								attach=".sign-up__gender"
							></v-overflow-btn>
						</v-col>

						<v-col cols="5">
							<v-overflow-btn
								class="sign-up__birth-year"
								label="출생년도"
								v-model="userInfo.selectedBirthYear"
								:items="years"
								dense
								outlined
								attach=".sign-up__birth-year"
							></v-overflow-btn>
						</v-col>
					</v-row>

					<v-row>
						<v-container class="sign-up__terms">
							<v-list-item>
								<v-list-item-content>
									<v-list-item-title>
										<input
											type="checkbox"
											class="sign-up__checkbox"
											:checked="userInfo.agreeTerms[0]"
											@click="checkAllArticles"
										/>
										<span class="sign-up__label">모든 항목에 체크하기</span>
									</v-list-item-title>
									<v-container>
										<v-list-item-subtitle class="sign-up__check-all">
											전체 동의는 필수 및 선택 정보에 대한 동의도 포함되어
											있으며, 개별적으로도 동의를 선택하실 수 있습니다.
											선택항목에 대한 동의를 거부하시는 경우에도 서비스는 이용이
											가능합니다.
										</v-list-item-subtitle>
									</v-container>
								</v-list-item-content>
							</v-list-item>

							<v-list-item two-line>
								<v-list-item-content>
									<v-list-item-subtitle>
										<input
											type="checkbox"
											class="sign-up__checkbox"
											@click="checkOneArticles"
											:checked="overFourteen"
											required
											disabled
										/>
										<span class="sign-up__label">만 14세 이상입니다.</span>
									</v-list-item-subtitle>

									<v-list-item-subtitle>
										<input
											type="checkbox"
											class="sign-up__checkbox"
											@click="checkOneArticles"
											required
										/>
										<span class="sign-up__label"
											>[필수] 개인 정보의 수집 및 이용에 대한 동의</span
										>
										<router-link to="/vue-greendays/terms" tag="span"
											>자세히 보기</router-link
										>
									</v-list-item-subtitle>

									<v-list-item-subtitle>
										<input
											type="checkbox"
											class="sign-up__checkbox"
											@click="checkOneArticles"
										/>
										<span class="sign-up__label"
											>[선택] 공지사항 / 이벤트 알림</span
										>
									</v-list-item-subtitle>

									<v-list-item-subtitle>
										<span class="sign-up__label">
											고객님께 전달해야 할 소식이 있는 경우 최대 월 1회에 한해
											발송됩니다.
										</span>
									</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>

							<v-container>
								<v-form class="sign-up__recommend-code">
									<input
										placeholder="추천 코드 입력"
										v-model="gotPromotionCode"
									/>
									<span class="sign-up__recommend-code--red"
										>* 추천 코드를 입력하면 2,000포인트 즉시 지급!</span
									>
								</v-form>
							</v-container>
							<v-container>
								<v-btn
									type="submit"
									class="sign-up__btn signup-membership"
									color="#000"
									@click.prevent="signUpMembership"
									>멤버십 가입하기</v-btn
								>
							</v-container>
						</v-container>
					</v-row>
				</v-container>
			</v-card>
		</v-container>
	</v-app>
</template>

<script>
import { mapActions } from 'vuex';
import { createPromotionCode } from '@/utils/dummy.js';
import fillBirthYear from '@/mixins/fillBirthYear.js';
import daumAddressAPI from '@/mixins/daumAddressAPI.js';
import rules from '@/mixins/rules.js';
import staticData from '@/static/orderby.js';
import { debounce } from 'lodash';

export default {
	mixins: [fillBirthYear, daumAddressAPI, rules],
	data() {
		return {
			userInfo: {
				email: '',
				phoneNum: '',
				password: '',
				name: '',
				postCode: '',
				address: '',
				detailAddress: '',
				selectedGender: '',
				selectedBirthYear: '',
				agreeTerms: [],
				promotionCode: '',
				point: 10000,
			},
			isUniqueEmail: false,
			isProperEmail: false,
			isProperPassword: false,
			passwordCheck: '',
			gender: staticData.genderForSignUp,
			checkAll: [],
			formValid: false,
			gotPromotionCode: '',
			passwordCheckRules: [
				v => v || '패스워드를 한번 더 입력하세요',
				v => v === this.userInfo.password || '패스워드가 일치하지 않습니다.',
			],
		};
	},
	computed: {
		overFourteen() {
			const currentYear = new Date().getFullYear();
			return this.userInfo.selectedBirthYear > currentYear - 14 ? false : true;
		},
	},
	methods: {
		...mapActions('auth', [
			'FETCH_USER_LIST',
			'CHECK_EMAIL',
			'COMPARE_PROMOTION_CODE',
			'SIGN_UP',
		]),

		createPromotionCode,

		checkEmailRules: debounce(function() {
			this.isProperEmail = this.$refs.email.validate();
		}, 300),

		checkEmailRedundancy() {
			this.CHECK_EMAIL(this.userInfo.email)
				.then(res => (this.isUniqueEmail = res))
				.catch(err => console.error(err));
		},

		checkPasswordRules: debounce(function() {
			this.isProperPassword = this.$refs.password.validate();
		}, 300),

		AllowOnlyEnglish: debounce(function(value) {
			this.userInfo.password = value.replace(/[ㄱ-힣]/gi, '');
		}, 250),

		checkAllArticles(e) {
			this.checkAll[2].checked = this.checkAll[3].checked = e.target.checked;
		},

		checkOneArticles(e) {
			const checkIdx = Array.prototype.indexOf.call(this.checkAll, e.target);
			this.checkAll[checkIdx].checked = e.target.checked;
			this.checkAll[2].checked === this.checkAll[3].checked
				? (this.checkAll[0].checked = this.checkAll[2].checked)
				: (this.checkAll[0].checked = false);
		},

		signUpValidate() {
			if (
				!this.userInfo.address ||
				!this.userInfo.detailAddress ||
				!this.userInfo.selectedGender ||
				!this.userInfo.selectedBirthYear
			) {
				alert('회원가입 양식을 완성하여 주십시오.');
				return false;
			}
			if (!this.checkAll[2].checked) {
				alert('14세 이상만 가입할 수 있습니다.');
				return false;
			}
			if (!this.checkAll[3].checked) {
				alert('필수 항목에 동의하여야 가입이 가능합니다.');
				return false;
			}
			if (this.userInfo.password !== this.passwordCheck) {
				alert('비밀번호가 일치하지 않습니다.');
				return false;
			}
			return true;
		},

		getCheckedBox() {
			Array.prototype.map.call(this.checkAll, v => {
				this.userInfo.agreeTerms[
					Array.prototype.indexOf.call(this.checkAll, v)
				] = v.checked;
			});
		},

		async comparePromotionCode() {
			try {
				if (!this.gotPromotionCode.length) return 0;
				const response = await this.COMPARE_PROMOTION_CODE(
					this.gotPromotionCode.toUpperCase(),
				);
				if (response) {
					this.$set(this.userInfo, 'point', this.userInfo.point + response);
				} else {
					throw Error('존재하는 추천 코드가 존재하지 않습니다.');
				}
			} catch (error) {
				alert(error.message);
			}
		},

		async signUpMembership() {
			try {
				if (this.signUpValidate()) {
					this.getCheckedBox();
					await this.comparePromotionCode();
					this.userInfo.promotionCode = this.createPromotionCode();
					await this.SIGN_UP({
						...this.userInfo,
						wishList: [],
						cartItems: [],
						orderDone: [],
						delivering: [],
						changeOrRefund: [],
						pickedBrands: {},
						shippingAddressList: [
							{
								recipientName: this.userInfo.name,
								recipientPhoneNum: this.userInfo.phoneNum,
								recipientAddress: this.userInfo.address,
							},
						],
						searchedKeywords: [],
					});
					this.$router.replace('/vue-greendays');
				} else {
					throw Error('회원가입 양식을 확인하여 주십시오.');
				}
			} catch (error) {
				alert(error.message);
			}
		},
	},
	created() {
		this.FETCH_USER_LIST();
	},
	mounted() {
		this.checkAll = document.querySelectorAll('.sign-up__checkbox');
	},
};
</script>

<style scoped>
.sign-up__label {
	margin-left: 5px;
}

.sign-up {
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 150px;
}

.sign-up__container {
	max-width: 1100px;
}

.sign-up__article {
	display: flex;
	justify-content: space-around;
}

.sign-up__form {
	display: flex;
}

.sign-up__btn {
	width: 35%;
	color: #fff;
	margin: 5px 0 0 5px;
	position: relative;
	top: 9px;
}

.sign-up__terms {
	width: 100%;
}

.sign-up__check-all {
	width: 45%;
	white-space: normal;
	padding-bottom: 30px;
	border-bottom: 1px solid #000;
}

.sign-up__recommend-code {
	width: 430px;
	border: 1px solid #000;
	padding: 10px;
	position: relative;
}
.sign-up__recommend-code input {
	outline-style: none;
	border: none;
	font-size: 16px;
}
.sign-up__checkbox {
	width: 20px;
	height: 20px;
}

.sign-up__recommend-code--red {
	color: red;
	position: absolute;
	left: 7rem;
	top: 10px;
}
.sign-up__btn.signup-membership {
	width: 430px;
	padding: 10px;
}
</style>

<template>
	<ul class="modal-container-logout">
		<li class="header-logout">
			💚Pick!
			<button class="modal-close-button" @click="offModal">
				<i class="fas fa-times" />
			</button>
		</li>
		<li class="body-logout">
			<span class="notice-logout">
				입고 알림을 받으실 휴대폰 번호를 입력해주세요.
			</span>
			<form ref="phoneNum">
				<input type="text" placeholder="휴대폰 번호" class="phone-num-input" />
				<button
					@submit.prevent="
						alert('관련 상품 입고 시 해당 번호로 알림이 전송됩니다.')
					"
					class="phone-num-btn"
				>
					확인
				</button>
			</form>
		</li>
	</ul>
</template>

<script>
import Bus from '@/utils/bus.js';

export default {
	methods: {
		offModal() {
			Bus.$emit('off:picked-brands');
		},
	},

	mounted() {
		this.$refs.phoneNum.focus();
	},
};
</script>

<style scoped>
.modal-container-logout {
	position: relative;
	z-index: 9998;
	width: 340px;
	height: 370px;
	margin: 0 auto;
	background-color: #fff;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
}

.header-logout {
	width: 340px;
	height: 48px;
	padding: 0 20px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;
	font-weight: 600;
	color: #4dcf34;
}

.fa-times {
	color: #d9d9d9;
}

.body-logout {
	width: 340px;
	height: 132px;
	padding: 0 30px;
	margin: 44px 0 0;
	font-size: 13px;
}

.phone-num-input {
	width: 280px;
	height: 40px;
	padding: 7px 0;
	margin: 20px 0;
	background-color: #fafafa;
}

.phone-num-input:focus {
	outline: none;
}

.phone-num-btn {
	text-align: center;
	width: 280px;
	height: 40px;
	background-color: #000;
	color: #fff;
	font-weight: 600;
}

.modal-close-button {
	border-style: none;
	outline: none;
}
</style>

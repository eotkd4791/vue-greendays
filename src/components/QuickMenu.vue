<template>
	<div class="quick-menu">
		<header class="quick-menu__title">
			Quick menu
		</header>

		<ol class="quick-menu__btn">
			<li @click="movePage('/customerservice/logi_guide')">
				<i class="fas fa-truck" />
				<p>Free delivery</p>
				<p>배송가이드</p>
			</li>

			<li @click="movePage('/customerservice/faq')">
				<i class="far fa-comments" />
				<p>FAQ</p>
				<p>자주 묻는 질문</p>
			</li>

			<li @click="movePage('/customerservice')">
				<i class="fas fa-phone-alt" />
				<p>Need help?</p>
				<p>고객 센터</p>
			</li>
			<li>
				<i class="far fa-comment-dots" @click="toggleChannelTalk" />
				<p>Channel Talk</p>
				<p>채널톡</p>
			</li>
		</ol>
	</div>
</template>

<script>
import utilMethod from '@/mixins/utilMethods.js';
import Bus from '@/utils/bus.js';

export default {
	mixins: [utilMethod],

	methods: {
		toggleChannelTalk() {
			Bus.$emit('toggle-channel-talk');
		}
	}
};
</script>

<style scoped>
.quick-menu {
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 12px;
	background-color: #fff;
}
.quick-menu__title {
	text-align: center;
	border-top: 1px solid rgb(235, 235, 235);
	padding-top: 100px;
	margin-top: 100px;
	font-weight: 700;
}
.quick-menu__btn {
	display: flex;
	justify-content: space-around;
	text-align: center;
	margin: 100px 0;
	cursor: pointer;
}
.fas,
.far {
	color: #42b883;
	font-size: 25px;
	padding-bottom: 40px;
	margin-bottom: 30px;
	border-bottom: 2px solid #42b883;
}
.quick-menu__btn div p:nth-child(2) {
	margin: 0 0 9px;
}
.quick-menu__btn div p:nth-child(3) {
	color: #8b8b8b;
	font-size: 12px;
}
</style>

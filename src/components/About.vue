<template>
	<footer class="about">
		<section class="about__section">
			<ul class="about__ul about__ul--title">
				<router-link tag="li" class="about__router-li" to="/vue-greendays/customerservice/notice">공지사항</router-link>
				<span class="about__divider">|</span>
				<router-link tag="li" class="about__router-li" to="/vue-greendays/customerservice/faq">자주묻는질문</router-link>
				<span class="about__divider">|</span>
				<router-link tag="li" class="about__router-li" to="/vue-greendays/customerservice/terms">이용약관</router-link>
				<span class="about__divider">|</span>
				<router-link tag="li" class="about__router-li" to="/vue-greendays/customerservice/private_info_policy">개인정보취급방침</router-link>
				<span class="about__divider">|</span>
				<router-link tag="li" class="about__router-li" to="/vue-greendays/introduction">사업자정보확인</router-link>
			</ul>
			<ul class="about__ul about__ul--mid">
				<li class="about__li">(주)그린데이즈</li>
				<span class="about__divider">|</span>
				<li class="about__li">대표이사 유대상</li>
				<span class="about__divider">|</span>
				<li class="about__li">사업자등록번호 123-45-11223</li>
				<span class="about__divider">|</span>
				<li class="about__li">통신판매업신고 2020-인천학익-12345</li>
			</ul>
			<ul class="about__ul">
				<li class="about__li">eotkd4791@gmail.com</li>
				<span class="about__divider">|</span>
				<li class="about__li">032-866-XXXX</li>
				<span class="about__divider">|</span>
				<li class="about__li">인천광역시 미추홀구</li>
				<span class="about__divider">|</span>
				<li class="about__li">개인정보관리책임자 유대상</li>
			</ul>
			<p class="about__p">
				Copyright © 2020 GreenDays Inc. All rights reserved.
			</p>
		</section>
		<aside class="about__aside">
			<ul class="about__ul about__ul--left">
				<li class="about__li about__li--title">CUSTOMER SERVICE</li>
				<router-link tag="li" class="about__router-li" to="/vue-greendays/customerservice">
					무엇을 도와드릴까요?
				</router-link>
				<router-link tag="li" class="about__router-li" to="/vue-greendays/customerservice/logi_guide">
					주문 & 배송
				</router-link>
				<router-link tag="li" class="about__router-li" to="/vue-greendays/customerservice/faq">
					결제 & 가격
				</router-link>
				<router-link tag="li" class="about__router-li" to="/vue-greendays/customerservice/faq">
					반품 & 환불
				</router-link>
			</ul>
			<ul class="about__ul">
				<li class="about__li about__li--title">ABOUT GREENDAYS</li>
				<router-link tag="li" class="about__router-li" to="/vue-greendays/introduction">
					그린데이즈 소개
				</router-link>
			</ul>
		</aside>
	</footer>
</template>

<style scoped>
.about {
	display: flex;
	justify-content: space-between;
	align-self: flex-start;
	max-width: 1100px;
	width: 100%;
	height: 260px;
	margin: 0 auto;
	padding: 44px 0 0 0;
	font-size: 12px;
	color: #b5b5b5;
}

.about__section {
	display: flex;
	flex-direction: column;
	width: 50%;
}

.about__ul {
	display: flex;
}

.about__ul.about__ul--mid {
	margin: 0 0 13px;
}

.about__router-li {
	cursor: pointer;
}

.about__ul.about__ul--title {
	margin-bottom: 20px;
	color: #767676;
}

.about__p {
	margin-top: 30px;
	font-size: 11px;
}

.about__aside {
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	width: 50%;
}

.about__aside .about__ul {
	display: flex;
	flex-direction: column;
}

.about__ul.about__ul--left {
	margin-right: 50px;
}

.about__li.about__li--title {
	margin: 0 0 20px;
	font-size: 14px;
	font-weight: 600;
	color: #767676;
}

.about__aside .about__router-li {
	margin-bottom: 10px;
	font-weight: 800;
}

.about__divider {
	margin: 0 3px;
}
</style>

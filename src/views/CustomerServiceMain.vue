<template>
	<section class="customer-service">
		<header class="customer-service__header">고객센터</header>
		<ul class="customer-service__ul">
			<li class="customer-service__li">
				<a class="customer-service__a" href="tel:010-1234-5678">
					<div class="customer-service__div">
						<i class="fas fa-phone-volume" />
						<h1 class="customer-service__title">전화하기</h1>
					</div>
					<article class="customer-service__article">
						<h3 class="customer-service-h3">010-1234-5678</h3>
						<h3 class="customer-service-h3">언제든지 무엇이든 물어보세요</h3>
					</article>
				</a>
			</li>
			<router-link
				tag="li"
				to="/customerservice/logi_guide"
				class="customer-service__li"
			>
				<div class="customer-service__div">
					<i class="fas fa-truck" />
					<h1 class="customer-service__title">배송가이드</h1>
				</div>
				<article class="customer-service__article">
					<h3 class="customer-service-h3">[배송가이드] 페이지에서 배송관련</h3>
					<h3 class="customer-service-h3">주의사항을 참고하세요.</h3>
				</article>
			</router-link>
			<router-link
				tag="li"
				to="/customerservice/notice"
				class="customer-service__li"
			>
				<div class="customer-service__div">
					<i class="fas fa-bullhorn" />
					<h1 class="customer-service__title">공지사항</h1>
				</div>
				<article class="customer-service__article">
					<h3 class="customer-service-h3">[공지사항] 페이지에서</h3>
					<h3 class="customer-service-h3">그린데이즈 소식을 확인하세요.</h3>
				</article>
			</router-link>
			<router-link
				tag="li"
				to="/customerservice/faq"
				class="customer-service__li"
			>
				<div class="customer-service__div">
					<i class="far fa-question-circle" />
					<h1 class="customer-service__title">자주묻는질문</h1>
				</div>
				<article class="customer-service__article">
					<h3 class="customer-service-h3">[자주묻는질문] 페이지에서 원하는</h3>
					<h3 class="customer-service-h3">질문에 대한 답을 찾아보세요.</h3>
				</article>
			</router-link>
			<router-link
				tag="li"
				to="/customerservice/terms"
				class="customer-service__li"
			>
				<div class="customer-service__div">
					<i class="fas fa-scroll" />
					<h1 class="customer-service__title">이용약관</h1>
				</div>
				<article class="customer-service__article">
					<h3 class="customer-service-h3">서비스 이용의 조건 및 절차 등을</h3>
					<h3 class="customer-service-h3">확인하세요.</h3>
				</article>
			</router-link>
			<router-link
				tag="li"
				to="/customerservice/private_info_policy"
				class="customer-service__li"
			>
				<div class="customer-service__div">
					<i class="fas fa-tasks" />
					<h1 class="customer-service__title">개인정보취급방침</h1>
				</div>
				<article class="customer-service__article">
					<h3 class="customer-service-h3">
						고객님의 소중한 개인정보 취급 방법을
					</h3>
					<h3 class="customer-service-h3">확인하세요.</h3>
				</article>
			</router-link>
		</ul>
	</section>
</template>

<style scoped>
.customer-service {
	display: flex;
	flex-direction: column;
	width: 840px;
	height: 532px;
	margin: 0 auto;
}
.customer-service__header {
	font-size: 20px;
	margin: 0 0 36px;
}
.customer-service__ul {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}

.customer-service__li {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 260px;
	height: 187px;
	padding: 30px 0;
	margin: 0 20px 20px 0;
	border: 1px solid #dedede;
	cursor: pointer;
}

.customer-service__li:first-child {
	padding: 0;
}

.customer-service__a {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 30px 0;
}

.customer-service__li:hover,
.customer-service__a:hover {
	color: white;
	font-weight: 500;
	background-color: #393939;
}

.far,
.fas {
	font-size: 30px;
}

.customer-service__div {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
}

.customer-service__title {
	font-size: 15px;
	margin: 10px 0 20px;
}

.customer-service__article {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 13px;
}
</style>

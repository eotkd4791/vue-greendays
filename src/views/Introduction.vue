<template>
	<ul class="introduction">
		<li class="introduction__li">
			<img
				src="@/assets/img/green-present.png"
				alt="green-present"
				class="introduction__img"
			/>
		</li>
		<li class="introduction__li">신입 웹 프론트엔드 개발자 포트폴리오</li>
		<li class="introduction__li">
			<a href="https://www.reddays.kr/" class="introduction__a">레드데이즈</a>
			웹사이트를 클론코딩하였습니다.
		</li>
	</ul>
</template>

<style scoped>
.introduction {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 650px;
	margin-top: 115px;
}
.introduction__li {
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 20px;
}

.introduction__img {
	width: 70px;
	height: 70px;
	animation-name: img-moving;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in;
	animation-direction: alternate;
}

.introduction__a {
	text-decoration-line: underline;
}

@keyframes img-moving {
	from {
		transform: skew(-10deg, -10deg) translate(60px, -60px);
	}
	to {
		transform: skew(10deg, 10deg) translate(-60px, -60px);
	}
}
</style>

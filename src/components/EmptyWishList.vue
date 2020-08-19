<template>
	<ul class="wish__empty">
		<li class="wish__empty__title">PICK한 상품이 없습니다 :(</li>
		<li class="wish__empty__subtitle">
			원하는 상품을 PICK 해두시면, 상품이 입고되는 즉시 알려드리겠습니다.
		</li>
		<li class="wish__empty__picture">
			<span class="wish__empty__text">Pick!</span>
		</li>
		<router-link to="/products" tag="li" class="wish__empty__link">
			원하는 상품 PICK! 하러 가기 >
		</router-link>
	</ul>
</template>

<style scoped>
.wish__empty {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin: 100px auto 40px;
}

.wish__empty__title {
	margin-bottom: 20px;
	font-size: 22px;
	font-weight: 500;
	color: #909090;
}

.wish__empty__subtitle {
	margin-bottom: 35px;
	font-size: 12px;
	color: #909090;
}

.wish__empty__text {
	display: block;
	width: 100%;
	margin: 0 auto;
	font-size: 12px;
	font-weight: bold;
	text-align: center;
	color: #42b883;
}

.wish__empty__picture {
	width: 100px;
	height: 100px;
	margin-bottom: 30px;
	background-image: url('../assets/img/nothing-picked.png');
	background-repeat: no-repeat;
	background-size: contain;
}

.wish__empty__link {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	color: #9aecb0;
	font-size: 13px;
	font-weight: bold;
	cursor: pointer;
}
</style>

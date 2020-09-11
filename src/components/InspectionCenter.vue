<template>
	<section class="inspection">
		<header class="inspection__header">검수센터</header>
		<article class="inspection__article">
			<p class="inspection__p">
				그린데이즈 검수센터는 상품포장 및 검수 전 과정을 CCTV로 촬영하고
				있습니다.
			</p>
			<p class="inspection__p">
				배송 시 오배송, 누락이 발생하지 않도록 노력하고 있으며, 부득이하게
				문제가 생긴다면 수령 직후 바로 고객센터를 통해
			</p>
			<p class="inspection__p">연락주셔야 확인 후 빠른 처리가 가능합니다. 참고 부탁드립니다. :)</p>
		</article>
		<div class="inspection__carousel">
			<button class="inspection__prev" @click="getPrevious">
				<i class="fas fa-chevron-left" />
			</button>
			<ul class="inspection__ul" ref="listContainer">
				<li v-for="(item, index) in photoList" :key="item.id" class="inspection__li">
					<div class="inspection__wrapper">
						<div class="inspection__mask" />
						<img :src="item.path" :alt="`InspectionImage${index + 1}`" class="inspection__img" />
					</div>
					<h3 class="inspection__h3">상품 아이디: {{ item.id }}</h3>
				</li>
			</ul>
			<button class="inspection__next" @click="getNext">
				<i class="fas fa-chevron-right" />
			</button>
		</div>
	</section>
</template>

<script>
import carousel from '@/mixins/carouselBtn.js';

export default {
	mixins: [carousel],

	data() {
		return {
			componentName: 'inspectionCenter',
		};
	},
};
</script>

<style scoped>
.inspection {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 960px;
	margin: 40px auto 130px auto;
}

.inspection__header {
	margin: 0 0 20px;
	font-size: 22px;
	font-weight: 600;
}

.inspection__article {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	padding: 0 0 20px;
	border-bottom: 1px solid #dedede;
	font-size: 12px;
}

.inspection__p {
	margin: 0 0 10px;
}

.inspection__carousel {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	overflow: hidden;
}

.inspection__ul {
	display: flex;
	align-items: center;
	width: 100%;
	height: 244px;
	position: relative;
}

.inspection__li {
	margin-right: 20px;
}

.inspection__wrapper {
	width: 180px;
	height: 180px;
	border: 1px solid #d9d9d9;
	cursor: pointer;
	position: relative;
}

.inspection__mask {
	position: absolute;
	top: 0;
	left: 0;
	width: 180px;
	height: 180px;
	z-index: 1;
}

.inspection__mask:hover {
	background-color: rgba(0, 0, 0, 0.5);
}

.inspection__img {
	width: 100%;
	height: 100%;
}

.inspection__h3 {
	margin: 10px 0 0;
	font-size: 12px;
}

.inspection__prev,
.inspection__next {
	position: absolute;
	width: 20px;
	height: 20px;
	background-color: rgba(0, 0, 0, 0.5);
	opacity: 0.7;
	border-radius: 50%;
	z-index: 1000;
	cursor: pointer;
}

.inspection__prev {
	top: 100px;
	left: 3px;
}

.inspection__next {
	top: 100px;
	right: 3px;
}

.inspection__prev.inspection__prev--passive,
.inspection__next.inspection__next--passive {
	background-color: rgba(255, 255, 255, 0.5);
	cursor: not-allowed;
}

.fas {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20px;
	height: 20px;
	font-size: 13px;
	color: rgba(255, 255, 255, 0.5);
}
</style>

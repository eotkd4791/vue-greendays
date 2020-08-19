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
			<p class="inspection__p">
				연락주셔야 확인 후 빠른 처리가 가능합니다. 참고 부탁드립니다. :)
			</p>
		</article>
		<div class="inspection__carousel">
			<button class="inspection__prev">
				<i class="fas fa-chevron-left" />
			</button>
			<ul class="inspection__ul">
				<li
					v-for="(item, index) in inspectedItems"
					:key="item.id"
					class="inspection__li"
				>
					<div class="inspection__wrapper">
						<div class="inspection__mask" />
						<img
							:src="item.path"
							:alt="`InspectionImage${index + 1}`"
							class="inspection__img"
						/>
					</div>
					<h3 class="inspection__h3">상품 아이디: {{ item.id }}</h3>
				</li>
			</ul>
			<button class="inspection__next">
				<i class="fas fa-chevron-right" />
			</button>
		</div>
	</section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
	data() {
		return {
			inspectedItems: [
				{
					id: '0',
					path:
						'data:image/jpeg;base64,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',
				},
				{
					id: '1',
					path:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIFdQ0dNEOrGQUu25TNkyiE4Ry8IVwUHyE57o12EtYlMWZXqbz&usqp=CAU',
				},
				{
					id: '2',
					path:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTe1f1uGTtWwTfj77gJxRiK1TT1kz-CgH9Fia7X7-vUlYAZ2xXn&usqp=CAU',
				},
				{
					id: '3',
					path:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9lTyWaveOUhXI4B1mjnNmnVMYsocjYTK08AcMNOy3zpXh6ccG&usqp=CAU',
				},
				{
					id: '4',
					path:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4eiptIRNHZSnXYlToD13jVjB4lVXKyQqhKRv2DMnBOaTeAAsa&usqp=CAU',
				},
			],
		};
	},
	// computed: {
	//   ...mapState([

	//   ]),
	// },
	// methods: {
	//   ...mapActions([

	//   ]),
	// },
	created() {},
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
}

.inspection__ul {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 244px;
	position: relative;
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

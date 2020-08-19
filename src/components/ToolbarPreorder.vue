<template>
	<div class="preorder-container">
		<section class="preorder-container__category">
			<header class="preorder-container__category__title">PRE ORDER</header>
			<div class="preorder-container__category__link" ref="tabs">
				<router-link class="active" to="/vue-greendays/about" tag="span"
					>#프리오더가 뭐에요?</router-link
				>

				<span
					v-for="preorder in preorders"
					:key="preorder.title"
					@mouseover="activatingTab"
				>
					{{ preorder.title }}
					<i>></i>
				</span>
			</div>
		</section>
		<section class="preorder-container__promotion">
			<div class="preorder-container__promotion__img" />
			<div class="preorder-container__promotion__text">
				<h3 class="preorder-container__promotion__title">
					한정된 기간동안만 열리는 특별한 타임세일!
				</h3>
				<p class="preorder-container__promotion__subtitle">
					프리오더를 통해 낮은 금액으로 명품을 즉시 구매해보세요!
				</p>
				<p class="preorder-container__promotion__subtitle">
					단, 한정된 시간 동안만 구매할 수 있으니 서둘러주세요
				</p>
			</div>
		</section>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			activatedTabIndex: 0,
		};
	},

	computed: {
		...mapState('shopping', {
			preorders: state => state.preorders,
		}),
	},

	methods: {
		activatingTab() {
			if (!this.$refs.tabs) return;
			this.$refs.tabs.childNodes[this.activatedTabIndex].classList.remove(
				'active',
			);
		},
	},
};
</script>

<style scoped>
.preorder-container {
	width: 100%;
	height: 355px;
	max-width: 1100px;
	display: flex;
	justify-content: space-between;
	font-family: 'Montserrat';
}

.preorder-container__category {
	width: 218px;
	height: 345px;
}

.preorder-container__category__title {
	font-weight: 700;
}

.preorder-container__category__link {
	margin-top: 20px;
}

.preorder-container__category__link > span {
	display: flex;
	width: 220px;
	height: 24px;
	flex-wrap: nowrap;
	justify-content: space-between;
	padding: 3px 0 3px 10px;
	margin: 10px 0;
	font-size: 14px;
	overflow: hidden;
	cursor: pointer;
}

.preorder-container__category__link i {
	margin-right: 10px;
}

.preorder-container__category__link > span:hover {
	font-size: 14px;
	font-weight: 600;
	color: #fff;
	background-color: #42b883;
}
.active {
	font-size: 14px;
	font-weight: 600;
	color: #fff;
	background-color: #42b883;
}

.preorder-container__promotion {
	width: 600px;
	height: 100%;
}

.preorder-container__promotion__img {
	width: 100%;
	height: 250px;
	background-image: url('../assets/img/brands/gucci-logo.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	cursor: pointer;
}

.preorder-container__promotion__text {
	width: 100%;
	height: 40px;
	margin: 14px 0 0;
}

.preorder-container__promotion__title {
	font-size: 14px;
	font-weight: 600;
}

.preorder-container__promotion__subtitle {
	font-size: 12px;
	margin-top: 14px;
}
</style>

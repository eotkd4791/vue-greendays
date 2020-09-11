<template>
	<div class="pick-brand-login">
		<section class="pick-brand-login__section">
			<header class="pick-brand-login__header">
				<h1 class="pick-brand-login__title">
					브랜드
					<h1 class="pick-brand-login__title--emphasis">Pick!</h1>
				</h1>
				<button class="pick-brand-login__close-btn" @click="offModal">
					<i class="fas fa-times" />
				</button>
			</header>
			<p class="pick-brand-login__p">관심있는 카테고리를 PICK! 해주세요</p>
			<p class="pick-brand-login__p">관련 상품 입고 시 알림을 보내드릴게요:)</p>
		</section>
		<aside class="pick-brand-login__aside">
			<div class="pick-brand-login__brand-name">{{ pickedBrand }}</div>
			<ul>
				<li
					v-for="(category, index) in Object.keys(categories)"
					:key="index"
					@click="updatePickedBrands(pickedBrand, category)"
				>
					<i
						class="fas fa-heart"
						:class="{ 'fa-heart--picked': Object.values(categories)[index] }"
					/>
					{{ category }}
				</li>
			</ul>
		</aside>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Bus from '@/utils/bus.js';
import brandPicking from '@/mixins/brandPicking.js';

export default {
	mixins: [brandPicking],

	props: ['pickedBrand'],

	computed: {
		...mapState({
			userInfo: state => state.auth.userInfo,
		}),
	},

	methods: {
		offModal() {
			Bus.$emit('off-picked-brands');
		},
	},

	created() {
		const pickedBrandsEntries = Object.entries(this.userInfo.pickedBrands);
		const pickedBrandPair = pickedBrandsEntries.find(v =>
			v[0] === this.pickedBrand ? v : null,
		);
		if (pickedBrandPair) {
			this.categories = pickedBrandPair[1];
		}
	},
};
</script>

<style scoped>
@import '../style/pick.css';

.pick-brand-login {
	position: relative;
	z-index: 9998;
	width: 320px;
	height: 454px;
	margin: 0px auto;
	border-radius: 10px;
	padding: 40px;
	background-color: #fff;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
	font-family: Helvetica, Arial, sans-serif;
}

.pick-brand-login__section {
	width: 240px;
	height: 88px;
	padding: 0 0 16px;
}

.pick-brand-login__header {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}

.pick-brand-login__title {
	display: flex;
	font-size: 20px;
	margin: 0 0 20px;
}

.pick-brand-login__title--emphasis {
	font-weight: 600;
	margin-left: 10px;
}

.pick-brand-login__close-btn {
	border-style: none;
	outline: none;
}

.pick-brand-login__p {
	font-size: 11px;
}

.pick-brand-login__aside {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 240px;
	height: 290px;
	margin: 20px 0;
	border-top: 1px solid #42b883;
	border-bottom: 1px solid #42b883;
}

.pick-brand-login__brand-name {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 240px;
	height: 60px;
	font-size: 16px;
	padding: 0 40px;
}

.pick-brand-login__aside li {
	list-style-type: none;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 240px;
	height: 45px;
	border-top: 1px solid #ededed;
	font-size: 12px;
	cursor: pointer;
}
</style>

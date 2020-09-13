<template>
	<aside class="user-reviews">
		<header class="user-reviews__header">
			<h1 class="user-reviews__h1">
				<h2 class="user-reviews__h2">REVIEW ({{ dataStore.length }})</h2>
				<ol class="user-reviews__star">
					<li class="user-reviews__li">
						<star-point :satisfaction="5" />
					</li>
				</ol>
			</h1>
			<div class="user-reviews__point-index">
				리뷰 작성 시 최대 5,000 포인트 적립!
			</div>
		</header>
		<div class="user-reviews__carousel">
			<button class="user-reviews__prev" @click="getPrevious">
				<i class="fas fa-chevron-left" />
			</button>
			<ul class="user-reviews__ul" ref="listContainer">
				<li v-for="(item, index) in photoList" :key="index" class="user-reviews__li">
					<div class="user-reviews__wrapper">
						<div class="user-reviews__mask" />
						<img :src="item.path" class="user-reviews__img" />
					</div>
				</li>
			</ul>
			<button class="user-reviews__next" @click="getNext">
				<i class="fas fa-chevron-right" />
			</button>
		</div>
		<ol class="user-reviews__ol">
			<review-list v-for="(review, index) in reviewList" :key="index" :eachOfReview="review" @set-review-index="onShowDetailHandler" />
		</ol>
	</aside>
</template>

<script>
import carousel from '@/mixins/carouselBtn.js';

export default {
	mixins: [carousel],

	components: {
		ReviewList: () => import('@/components/ReviewList.vue'),
		StarPoint: () => import('@/components/common/StarPoint.vue'),
	},

	data() {
		return {
			componentName: 'userReviews',
			reviewIndex: 0,
			reviewList: [],
			showDetail: false,
		};
	},

	methods: {
		scrollEventHandler() {
			if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 1500) {
				if (this.dataStore.length - this.reviewList.length > 0) {
					const newReviews = this.dataStore.slice(this.reviewIndex, (this.reviewIndex += 3));

					this.reviewList.push(...newReviews);
				}
			}
		},

		onShowDetailHandler(value) {
			const reviewIndex = this.reviewList.indexOf(value);

			reviewIndex === this.showDetail ? (this.showDetail = false) : (this.showDetail = reviewIndex);
		},
	},

	created() {
		this.reviewList = this.dataStore.slice(this.reviewIndex, (this.reviewIndex += 20));
	},

	mounted() {
		window.addEventListener('scroll', this.scrollEventHandler);
	},

	beforeDestroy() {
		window.removeEventListener('scroll', this.scrollEventHandler);
	},
};
</script>

<style scoped>
.user-reviews {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 960px;
}

.user-reviews__header {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0 0 20px;
	margin: 0 0 20px;
	border-bottom: 1px solid #d9d9d9;
}

.user-reviews__h1 {
	display: flex;
	justify-content: center;
	align-items: center;
}

.user-reviews__h2 {
	margin: 0 14px 0 0;
	font-size: 22px;
	font-weight: 700;
}

.user-reviews__point-index {
	width: 240px;
	height: 30px;
	padding-top: 8px;
	font-size: 13px;
	color: #5a5a5a;
	text-align: center;
	border: 1px solid #d9d9d9;
}

.user-reviews__carousel {
	width: 100%;
	padding: 0 0 20px 0;
	margin-bottom: 20px;
	border-bottom: 1px solid #d9d9d9;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	z-index: 1000;
	overflow: hidden;
}

.user-reviews__ul {
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding-left: 50px;
}

.user-reviews__wrapper {
	width: 180px;
	height: 180px;
	margin-right: 10px;
	border: 1px solid #d9d9d9;
	cursor: pointer;
	position: relative;
}

.user-reviews__mask {
	position: absolute;
	top: 0;
	left: 0;
	width: 180px;
	height: 180px;
	z-index: 1;
}

.user-reviews__mask:hover {
	background-color: rgba(0, 0, 0, 0.5);
}

.user-reviews__li {
	margin-right: 10px;
}

.user-reviews__img {
	width: 100%;
	height: 100%;
}

.user-reviews__prev,
.user-reviews__next {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 36px;
	height: 180px;
	position: absolute;
	z-index: 1000;
	background-color: #f4f4f4;
	cursor: pointer;
}

.user-reviews__prev {
	margin-right: 10px;
	left: 0;
}

.user-reviews__next {
	margin-left: 10px;
	right: 0;
}

.user-reviews__ol {
	width: 100%;
}

.fa-chevron-left,
.fa-chevron-right {
	padding: 80px 13px;
	font-size: 13px;
	color: #bdbdbd;
}
</style>

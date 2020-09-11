<template>
	<li class="review-list" @click="setIndexToShowDetail">
		<section class="review-list__section">
			<div class="review-list__user-point">
				<star-point
					:satisfaction="eachOfReview.satisfaction"
					starSize="small"
				/>
				<p class="review-list__writer">{{ eachOfReview.writer }}</p>
			</div>
			<p class="review-list__date">
				{{ croppedDate }}
			</p>
		</section>
		<aside class="review-list__aside">
			<h3
				class="review-list__product"
				:class="{ 'review-list__product--active': isShownReviewList }"
			>
				{{ `${eachOfReview.brand} ${eachOfReview.nameOfProduct}` }}
			</h3>
			<article
				class="review-list__content"
				:class="{ 'review-list__content--passive': !isShownReviewList }"
			>
				{{ eachOfReview.content }}
			</article>
		</aside>
		<item-link :productInfo="eachOfReview" v-if="isShownReviewList" />
	</li>
</template>

<script>
export default {
	props: ['eachOfReview'],

	components: {
		ItemLink: () => import('@/components/ItemLink.vue'),
		StarPoint: () => import('@/components/common/StarPoint.vue'),
	},

	data() {
		return {};
	},

	computed: {
		isShownReviewList() {
			return (
				this.$parent.$data.reviewList.indexOf(this.eachOfReview) ===
				this.$parent.$data.showDetail
			);
		},

		croppedDate() {
			return this.eachOfReview.postedTime.substr(0, 10);
		},
	},

	methods: {
		setIndexToShowDetail() {
			this.$emit('set-review-index', this.eachOfReview);
		},
	},
};
</script>

<style scoped>
.review-list {
	width: 100%;
	padding: 20px;
	margin-bottom: 20px;
	border-top: 1px solid #dedede;
	border-bottom: 1px solid #dedede;
}

.review-list__section {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
}

.review-list__user-point {
	display: flex;
}

.review-list__writer {
	margin-left: 10px;
}

.review-list__aside {
}

.review-list__product {
	color: #dedede;
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 20px;
}

.review-list__product--active {
	color: #000;
}

.review-list__content {
	margin-bottom: 20px;
}
.review-list__content.review-list__content--passive {
	display: -webkit-box;
	width: 100%;
	height: 3.6em;
	margin-bottom: 20px;
	overflow: hidden;
	word-wrap: break-word;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	line-height: 1.2em;
	text-overflow: ellipsis;
}
</style>

<template>
	<ol class="pagination">
		<li class="pagination__list" v-show="!isInRangeOfBeginning(currentPage)" @click="onClickPageNumber(1)">
			1
		</li>
		<li class="pagination__prev" :class="{ 'pagination__btn--disabled': currentPage === 1 }" @click="prevPageRange">
			<i class="fas fa-caret-left" :class="{ 'fas--not-allowed': currentPage === 1 }" />
		</li>
		<li v-for="(pageNumber, index) in paginationList" :key="index" @click="onClickPageNumber(pageNumber)" class="pagination__list" :class="{ 'pagination__list--active': isActivatedPage(pageNumber) }">
			{{ pageNumber }}
		</li>
		<li class="pagination__next" :class="{ 'pagination__btn--disabled': currentPage === totalPage }" @click="nextPageRange">
			<i class="fas fa-caret-right" :class="{ 'fas--not-allowed': currentPage === totalPage }" />
		</li>
		<li class="pagination__list" :class="{ 'pagination__list--active': isActivatedPage(currentPage) }" v-show="!isInRangeOfBeginning(totalPage)" @click="onClickPageNumber(totalPage)">
			{{ totalPage }}
		</li>
	</ol>
</template>

<script>
import Bus from '@/utils/bus.js';
import { mapState } from 'vuex';
import { debounce } from 'lodash';

export default {
	data() {
		return {
			currentPage: 1,
			totalPage: Number,
			paginationList: [],
		};
	},

	computed: {
		...mapState('shopping', {
			orderedProducts: state => state.orderedProducts,
		}),
	},

	methods: {
		isActivatedPage(pageNumber) {
			return this.currentPage === pageNumber;
		},

		isInRangeOfBeginning(target) {
			return 1 <= target && target <= 9;
		},

		isInRangeOfEnd(target) {
			return this.totalPage - 8 <= target && target <= this.totalPage;
		},

		isInMiddleOfBeginningRange(target) {
			return 1 < target - 4;
		},

		isInMiddleOfEndRange(target) {
			return target + 4 < this.totalPage;
		},

		fillPaginationList() {
			const tempPaginationList = [];
			if (this.isInMiddleOfBeginningRange(this.currentPage)) {
				if (this.isInMiddleOfEndRange(this.currentPage)) {
					//true true
					for (let i = this.currentPage - 4; i <= this.currentPage + 4; i++) tempPaginationList.push(i);
				} else {
					//true false
					for (let i = this.currentPage; i <= this.totalPage; i++) tempPaginationList.push(i);

					for (let i = this.currentPage - 1; tempPaginationList.length < 9 && i >= 1; i--) tempPaginationList.unshift(i);
				}
			} else {
				if (this.isInMiddleOfEndRange(this.currentPage)) {
					//false true
					for (let i = this.currentPage; i >= 1; i--) tempPaginationList.unshift(i);

					for (let i = this.currentPage + 1; tempPaginationList.length < 9 && i <= this.totalPage; i++) tempPaginationList.push(i);
				} else {
					//false false
					for (let i = this.currentPage; i <= this.totalPage; i++) tempPaginationList.push(i);

					for (let i = this.currentPage - 1; i >= 1; i--) tempPaginationList.unshift(i);
				}
			}
			this.paginationList = tempPaginationList;
		},

		onClickPageNumber: debounce(function(pageNumber) {
			if (this.currentPage === pageNumber) return;

			this.currentPage = pageNumber;
			this.fillPaginationList();
			const currentQuery = this.$route.query;

			this.$router
				.push({
					path: '/vue-greendays/products',
					query: { ...currentQuery, page: pageNumber },
				})
				.catch(() => {});
			scrollTo(0, 0);
		}, 500),

		prevPageRange() {
			if (this.currentPage === 1) return;
			if (this.isInMiddleOfBeginningRange(this.currentPage - 1) && this.isInMiddleOfEndRange(this.currentPage)) {
				this.paginationList.pop();
				this.paginationList.unshift(this.currentPage - 1);
			}
			this.currentPage--;
		},

		nextPageRange() {
			if (this.currentPage === this.totalPage) return;

			if (this.isInMiddleOfBeginningRange(this.currentPage) && this.isInMiddleOfEndRange(this.currentPage + 1)) {
				this.paginationList.shift();
				this.paginationList.push(this.currentPage + 1);
			}

			this.currentPage++;
		},
	},

	created() {
		this.totalPage = Math.ceil(this.orderedProducts.length / 48);
		this.currentPage = 1;
		this.fillPaginationList();
	},

	mounted() {
		Bus.$on('set-pagination', this.onClickPageNumber);
	},

	beforeDestroy() {
		Bus.$off('set-pagination', this.onClickPageNumber);
	},
};
</script>

<style scoped>
.pagination {
	display: flex;
	justify-content: flex-end;
	align-self: center;
	max-width: 1100px;
	width: 100%;
	margin: 0 0 60px;
	font-size: 11px;
}

.pagination__list {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4px 8px;
	border: 1px solid #d9d9d9;
	margin: 0 5px 0;
	cursor: pointer;
}

.pagination__list--active {
	cursor: not-allowed;
	background-color: #f8f8f8;
}

.pagination__prev,
.pagination__next {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 24px;
	cursor: pointer;
}

.pagination__btn--disabled {
	cursor: not-allowed;
	color: #a5a5a5;
}

.pagination:first-child {
	margin-right: 10px;
}

.pagination:last-child {
	margin-left: 10px;
}

.fas {
	font-size: 16px;
}
</style>

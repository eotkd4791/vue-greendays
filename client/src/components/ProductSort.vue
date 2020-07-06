<template>
	<transition name="slide-fade">
		<div
			v-show="active"
			class="sort__bar-container"
			:class="{ 'active-userinfo': onUserInfo }"
			ref="sortBar"
			@mouseleave="sortModalClose"
		>
			<div class="sort__bar-wrapper">
				<div class="sort__bar-row-left">
					<div class="sort__bar-keyword" ref="keyword">
						<div
							class="sort__bar-keyword-pick"
							@mouseover="sortModalOpen('gender')"
						>
							성별
							<i class="fas fa-chevron-down" />
							<sort-modal
								v-if="showModal && sortByGender"
								:whichModal="getGenders"
								@pickedGender="createChips"
								@pickedFirst="sortModalClose"
							/>
						</div>

						<div class="sort__bar-keyword-pick" @mouseover="sortCategoryOpen">
							카테고리
							<i class="fas fa-chevron-down" />
							<sort-category
								v-if="showModal && sortByCategory"
								@pickedCategory="createChips"
							/>
						</div>
						<div class="sort__bar-keyword-pick" @click="pickBrandModalOpen">
							브랜드
							<i class="fas fa-chevron-down" />
						</div>
					</div>
					<sort-index-chips
						v-for="index in sortChips"
						:key="index"
						:sortindex="index"
						@remove-chips="removeChips"
					/>
					<div
						class="sort__bar-chips-clear"
						@click="removeAll"
						v-if="this.sortChips.length > 0"
					>
						초기화
					</div>
				</div>
				<div
					class="sort__bar-row-right"
					@mouseover="sortModalOpen('orderby')"
					@mouseleave="sortModalClose"
				>
					<div class="sort__bar-keyword-pick orderby">
						{{ getOrderBy[orderByIndex] }}
						<i class="fas fa-chevron-down" />
						<sort-modal
							v-if="showModal && rulesOrderBy"
							:whichModal="getOrderBy"
							@pickedOrderBy="setOrderBy"
						/>
					</div>
				</div>
			</div>
			<sort-brands
				v-if="showModal && sortByBrand"
				@closeBrandSearchModal="sortModalClose"
			/>
		</div>
	</transition>
</template>

<script>
import SortModal from '@/components/common/SortModal.vue';
import SortCategory from '@/components/common/SortCategory.vue';
import SortBrands from '@/components/common/SortBrands.vue';
import SortIndexChips from '@/components/SortIndexChips.vue';
import searchOrderBy from '@/static/orderby.js';
import Bus from '@/utils/bus.js';

export default {
	components: {
		SortModal,
		SortIndexChips,
		SortCategory,
		SortBrands,
	},
	data() {
		return {
			active: true,
			showModal: false,
			sortByGender: false,
			rulesOrderBy: false,
			sortByCategory: false,
			sortByBrand: false,
			onUserInfo: false,
			sortChips: [],
			copyChips: [],
			orderByIndex: 0,
		};
	},
	computed: {
		getGenders() {
			return searchOrderBy.genders;
		},
		getOrderBy() {
			return searchOrderBy.orderBy;
		},
		getCategories() {
			return searchOrderBy.categories;
		},
	},
	methods: {
		sortModalOpen(modalToOpen) {
			this.sortModalClose();
			this.showModal = true;
			if (modalToOpen === 'gender') {
				this.sortByGender = true;
			} else if (modalToOpen === 'orderby') {
				this.rulesOrderBy = true;
			}
		},
		sortCategoryOpen() {
			this.sortModalClose();
			this.showModal = true;
			this.sortByCategory = true;
		},
		sortModalClose() {
			this.showModal = false;
			this.sortByGender = false;
			this.rulesOrderBy = false;
			this.sortByCategory = false;
			this.sortByBrand = false;
		},
		pickBrandModalOpen() {
			this.sortModalClose();
			this.showModal = true;
			this.sortByBrand = true;
		},
		onScroll(e) {
			if (e.deltaY < 0) {
				return (this.active = true);
			}
			if (e.pageY > 1460) {
				return (this.active = false);
			}
		},
		createChips(payload) {
			const genderIndex = this.getGenders.indexOf(payload.value);
			const categoryIndex = Array.prototype.indexOf.call(
				Object.keys(this.getCategories),
				payload.value,
			);
			const sortKeywords = this.$refs.keyword.childNodes;

			this.sortChips = this.copyChips;

			if (genderIndex !== -1) {
				sortKeywords[0].classList.add('active');
				this.sortChips[0] = payload.value;
			}

			if (categoryIndex !== -1) {
				sortKeywords[1].classList.add('active');
				this.sortChips[1] = payload.value;
				if (payload.detail) {
					this.sortChips[2] = payload.detail;
				} else {
					this.sortChips[2] = '';
				}
			}
			this.copyChips = [...this.sortChips];
			this.sortChips = this.sortChips.filter(v => !!v);
			this.sortModalClose();
			// 라우터 쿼리 스트링 전송
		},
		setOrderBy(payload) {
			const newIdx = this.getOrderBy.indexOf(payload);
			if (this.orderByIndex !== newIdx) {
				this.orderByIndex = newIdx;
				// 정렬 클라이언트쪽에서 이벤트 버스 태워서 라우터url의 쿼리스트링을 이용해서 정렬하기
			}
			this.sortModalClose();
		},
		removeChips(payload) {
			if (this.sortChips.length === 1) {
				return this.removeAll();
			}
			this.sortChips.splice(this.sortChips.indexOf(payload), 1);
		},
		removeAll() {
			const keywords = this.$refs.keyword.childNodes;
			for (let keyword of keywords) {
				if (keyword.classList.contains('active')) {
					keyword.classList.remove('active');
				}
			}
			this.sortChips = [];
		},
		toggleUserInfo(payload) {
			this.onUserInfo = payload;
			this.$refs.sortBar.classList.toggle('active-userinfo');
		},
	},
	mounted() {
		window.addEventListener('wheel', this.onScroll);
		Bus.$on('showUserInfo', this.toggleUserInfo);
	},
	beforeDestroy() {
		window.removeEventListener('wheel', this.onScroll);
		Bus.$off('showUserInfo', this.toggleUserInfo);
	},
};
</script>

<style scoped>
.sort__bar-container {
	max-width: 1100px;
	width: 100%;
	font-size: 13px;
	font-weight: 600;
	border-bottom: 1px solid #d9d9d9;
	background-color: #fff;
	position: fixed;
	top: 115px;
}
.sort__bar-container.active-userinfo {
	transition: transform 250ms;
	transform: translateY(280px);
}

.sort__bar-wrapper {
	display: flex;
	position: relative;
	z-index: 9000;
	justify-content: space-between;
}

.sort__bar-row-left {
	display: flex;
	align-items: center;
}

.sort__bar-keyword {
	display: flex;
	height: 38px;
}

.sort__bar-keyword-pick {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 10px 30px 0;
	border-radius: 5px;
	padding: 15px;
	background-color: #f8f8f8;
	cursor: pointer;
}
.sort__bar-keyword-pick:hover {
	color: #fff;
	font-weight: 600;
	background-color: #42b883;
}

.active {
	color: #fff;
	font-weight: 600;
	background-color: #42b883;
}

.sort__bar-keyword-pick.orderby {
	margin: 15px 10px 15px 0;
	color: #000;
	background-color: #fff;
}

.sort__bar-chips-clear {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60px;
	height: 30px;
	padding: 0 0 10px 0;
	color: #42b883;
	cursor: pointer;
}

.fas {
	margin-left: 10px;
}

.slide-fade-enter-active {
	transition: all 0.3s ease;
}

.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
	transform: translateX(10px);
	opacity: 0;
}
</style>

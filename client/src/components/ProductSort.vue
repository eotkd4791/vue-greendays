<template>
	<transition name="slide-fade">
		<div
			v-show="active"
			class="sort__bar"
			:class="{ 'active-userinfo': onUserInfo }"
			ref="sortBar"
			@mouseleave="sortModalClose"
		>
			<div class="sort__bar-wrapper">
				<section class="sort__bar-row-left">
					<ul class="sort__bar-keyword" ref="keyword">
						<li
							class="sort__bar-keyword-pick"
							:class="{ 'sort__bar-keyword-pick--active': !!copyChips[0] }"
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
						</li>

						<li
							class="sort__bar-keyword-pick"
							:class="{ 'sort__bar-keyword-pick--active': !!copyChips[1] }"
							@mouseover="sortCategoryOpen"
						>
							카테고리
							<i class="fas fa-chevron-down" />
							<sort-category v-if="showModal && sortByCategory" @pickedCategory="createChips" />
						</li>
						<li
							class="sort__bar-keyword-pick"
							@click="pickBrandModalOpen"
							:class="{ 'sort__bar-keyword-pick--active': sortByBrand }"
						>
							브랜드
							<i class="fas fa-chevron-down" />
						</li>
					</ul>
					<sort-index-chips
						v-for="index in sortChips"
						:key="index"
						:sortindex="index"
						@remove-chips="removeChips"
					/>
					<div class="sort__bar-chips-clear" @click="removeAll" v-if="sortChips.length > 0">초기화</div>
				</section>
				<aside
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
				</aside>
			</div>
			<sort-brands v-if="showModal && sortByBrand" @closeBrandSearchModal="sortModalClose" />
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
import { debounce } from 'lodash';

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
			copyChips: new Array(3).fill(),
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
			this.sortChips = this.copyChips;

			if (genderIndex !== -1) {
				this.sortChips[0] = payload.value;
			}

			if (categoryIndex !== -1) {
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
			const sortChipIndex = this.sortChips.indexOf(payload);
			const copyChipIndex = this.copyChips.indexOf(payload);

			if (this.sortChips.length === 1) {
				return this.removeAll();
			}

			if (copyChipIndex === 1) {
				this.sortChips.splice(sortChipIndex, 2);
				this.$set(this.copyChips, copyChipIndex, null);
				this.$set(this.copyChips, copyChipIndex + 1, null);
			} else {
				this.sortChips.splice(sortChipIndex, 1);
				this.$set(this.copyChips, copyChipIndex, null);
			}
		},

		removeAll() {
			this.sortChips = [];
			this.copyChips = new Array(3).fill();
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

	watch: {
		copyChips: debounce(function (newVal) {
			this.$router
				.push({
					path: '/products',
					query: {
						...this.$route.query,
						gender: !!newVal[0] ? newVal[0] : '',
						category: !!newVal[1] ? newVal[1] : '',
						category_detail: !!newVal[2] ? newVal[2] : '',
					},
				})
				.catch(() => {});
		}, 500),

		orderByIndex: debounce(function (newVal) {
			let orderStd, orderBy;
			switch (newVal) {
				case 0:
					orderStd = 'popularity';
					break;
				case 1:
					orderStd = 'registeredTime';
					break;
				case 2:
				case 3:
					orderStd = 'priceAfter';
					orderBy = newVal === 2 ? 'desc' : 'asc';
					break;
				default:
					orderStd = 'discountRate';
					orderBy = newVal === 4 ? 'desc' : 'asc';
					break;
			}
			this.$router
				.push({
					path: '/products',
					query: {
						...this.$route.query,
						orderby: !!orderBy ? orderBy : 'desc',
						order_std: orderStd,
					},
				})
				.catch(() => {});
		}, 500),
	},
};
</script>

<style scoped>
@import '../style/transitionFade.css';

.sort__bar {
	max-width: 1100px;
	width: 100%;
	font-size: 12px;
	border-bottom: 1px solid #d9d9d9;
	background-color: #fff;
	position: fixed;
	top: 115px;
}

.sort__bar.active-userinfo {
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
	background-color: #42b883;
}

.sort__bar-keyword-pick--active {
	color: #fff;
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
</style>

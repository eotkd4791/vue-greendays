<template>
	<div class="modal-container">
		<div class="modal-mask" />
		<div class="brand__search-container">
			<section class="brand__search-orderby">
				<div
					class="brand__search-btn"
					:class="{
						'brand__search-btn--active': currentPickedAlphabet === 0,
					}"
					@click="onClickAlphabetBtn(0)"
				>
					전체
				</div>
				<div class="brand__search-mid">
					<div
						v-for="(letter, index) in letters"
						:key="index"
						class="brand__search-btn"
						:class="{
							'brand__search-btn--active': currentPickedAlphabet === index + 1,
							'brand__search-btn--passive': !initialLetterOfBrands.includes(
								letter,
							),
						}"
						@click="onClickAlphabetBtn(index + 1)"
					>
						{{ letter }}
					</div>
					<div class="brand__search-form">
						<form @submit.prevent>
							<input
								type="text"
								placeholder="브랜드 검색하기"
								v-model="searchBrands"
								@input="onTypeKeyword"
							/>
							<i class="fas fa-search" />
						</form>
					</div>
				</div>
				<button
					class="brand__search-close"
					@click="$emit('close-brand-search-modal')"
				>
					창닫기
				</button>
			</section>
			<section class="brand__search-result">
				<div class="brand__search-wrapper">
					<span
						class="brand__search-brand"
						v-for="brand in brandsList"
						:key="brand"
					>
						<i
							class="fas fa-heart"
							:class="{
								'fa-heart--picked': isPickedBrand(brand),
							}"
							@click="openModal(brand)"
						/>
						{{ brand }}
					</span>
					<pick-brand
						v-if="showModal"
						:propsBrand="brandInModal"
						@close-picked-brands="closeModal"
						@close-brands-picking-modal="closeModal"
					></pick-brand>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import PickBrand from '@/components/common/PickBrandModal.vue';
import orderBy from '@/static/orderby.js';
import { mapState, mapMutations } from 'vuex';
import { debounce } from 'lodash';
import Bus from '@/utils/bus.js';

export default {
	components: {
		PickBrand,
	},

	data() {
		return {
			userInfo: {},
			letters: orderBy.alphabets,
			brandsList: [],
			initialLetterOfBrands: [],
			searchBrands: '',
			showModal: false,
			brandInModal: '',
			currentPickedAlphabet: 0,
		};
	},

	computed: {
		...mapState({
			getUserInfo: state => state.auth.userInfo,
			getBrandList: state => state.shopping.brandList,
			getProducts: state => state.shopping.products,
		}),
	},

	methods: {
		...mapMutations('shopping', ['setBrandList']),

		openModal(brandName) {
			this.brandInModal = brandName;
			this.showModal = true;
		},

		closeModal() {
			this.showModal = false;
		},

		setScrollLock() {
			scrollTo(0, 0);
		},

		isPickedBrand(brand) {
			return this.getUserInfo.pickedBrands[brand];
		},

		getTotalBrands() {
			return this.getBrandList.length
				? this.getBrandList
				: [...new Set(this.getProducts.map(v => v.brand))];
		},

		onClickAlphabetBtn(index) {
			const pickedLetter = this.letters[index - 1];
			if (this.initialLetterOfBrands.includes(pickedLetter)) {
				this.currentPickedAlphabet = index;
				this.brandsList = this.getTotalBrands().filter(
					v => v[0] === this.letters[this.currentPickedAlphabet - 1],
				);
			} else if (index === 0) {
				this.currentPickedAlphabet = index;
				this.brandsList = this.getTotalBrands();
			}
		},

		onTypeKeyword: debounce(function() {
			const regExp = new RegExp(this.searchBrands, 'ig');
			this.brandsList = this.getTotalBrands().filter(v => regExp.test(v));
		}, 300),
	},

	created() {
		this.brandsList = this.getTotalBrands();

		this.initialLetterOfBrands = [
			...new Set(this.brandsList.map(v => v[0].toUpperCase()).sort()),
		];
	},

	mounted() {
		Bus.$on('off-picked-brands', this.closeModal);
		window.addEventListener('scroll', this.setScrollLock);
	},

	beforeDestroy() {
		window.removeEventListener('scroll', this.setScrollLock);
	},
};
</script>

<style scoped>
@import '../../style/pick.css';

.modal-container {
	width: 100%;
	height: 100%;
	font-size: 12px;
	font-weight: 400;
}

.modal-mask {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 100%;
	height: 100%;
	background-color: #fff;
	opacity: 0.9;
	transition: opacity 0.3s ease;
}

.brand__search-container {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	max-width: 1100px;
	height: 400px;
	position: relative;
	z-index: 1004;
}

.brand__search-orderby {
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	width: 1020px;
	height: 52px;
	margin: 30px 0 0 0;
}

.brand__search-orderby > div {
	cursor: pointer;
}

.brand__search-mid {
	display: flex;
	flex-wrap: wrap;
	width: 840px;
	height: 52px;
}

.brand__search-btn {
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #a5a5a5;
}

.brand__search-btn:first-child {
	width: 55px;
	height: 52px;
	cursor: pointer;
}

.brand__search-mid > .brand__search-btn {
	width: 25px;
	height: 24px;
	margin: 0 0 0 5px;
	border-color: #a5a5a5;
}

.brand__search-btn.brand__search-btn--active {
	color: #000;
	background-color: #fff;
	cursor: pointer;
	border: 1px solid #000;
}

.brand__search-btn.brand__search-btn--passive {
	color: #a5a5a5;
	background-color: #f7f7f7;
	cursor: not-allowed;
}

.brand__search-mid > .brand__search-btn:nth-child(1) {
	width: 48px;
}

.brand__search-form {
	width: 235px;
	height: 24px;
	border: 1px solid #a5a5a5;
	margin: 4px 0 0 5px;
}

.brand__search-form > form {
	height: 100%;
}

.brand__search-form input {
	width: 100%;
	height: 100%;
	text-align: center;
	font-size: 13px;
	border-style: none;
	outline-style: none;
	padding-left: 10px;
}

.fa-search {
	color: #8b8b8b;
	font-size: 14px;
	font-weight: 600;
	margin-right: 10px;
	position: relative;
	top: -18px;
	left: 210px;
}

.brand__search-form input[placeholder] {
	text-align: left;
}

.brand__search-close {
	width: 55px;
	height: 24px;
	background-color: #393939;
	color: #fff;
	outline-style: none;
}

.brand__search-result {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	margin: 30px 0 0 0;
}

.brand__search-wrapper {
	width: 1020px;
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
}

.brand__search-brand {
	width: 190px;
	margin: 0 0 17px 0;
	cursor: pointer;
}

.brands__picking__modal-align {
	position: absolute;
	top: 0;
	left: 320px;
	vertical-align: middle;
}
</style>

<template>
	<aside class="alphabet-brands">
		<ol class="alphabet-brands__letters" ref="btnLetter">
			<li
				class="alphabet-brands__btn"
				v-for="(letter, index) in alphabetBtn"
				:key="index"
				@click="pickAlphabet(letter, index)"
				:class="{ 'alphabet-brands__btn--passive': !alphabetSet.has(letter) }"
			>
				{{ letter }}
			</li>
		</ol>

		<ul class="alphabet-brands__ul">
			<li
				class="alphabet-brands__li"
				v-for="(brand, index) in getRelatedBrands"
				:key="index"
			>
				<i
					class="fas fa-heart"
					:class="{
						'fa-heart--picked': userInfo && isPickedBrand(brand)
					}"
					@click="openAlarmBrand"
				/>
				<router-link
					:to="{
						path: '/products',
						query: {
							keyword: '',
							gender: '',
							category: '',
							brand,
							product_id: '',
							deal_id: '',
							page: 1,
							orderby: 'desc',
							order_std: 'popularity'
						}
					}"
				>
					{{ brand }}
				</router-link>
			</li>
		</ul>
	</aside>
</template>

<script>
import orderBy from '@/static/orderby.js';
import brandPicking from '@/mixins/brandPicking.js';
import { mapState } from 'vuex';

export default {
	mixins: [brandPicking],

	data() {
		return {
			currentAlphabetIndex: null,
			alphabetBtn: orderBy.alphabets,
			alphabetSet: Object
		};
	},

	computed: {
		...mapState({
			brandsInitialAlphabet: state => state.shopping.brandList,
			userInfo: state => state.auth.userInfo
		}),

		getRelatedBrands() {
			const initialRegExp = new RegExp(
				`[${this.alphabetBtn[this.currentAlphabetIndex]}]`,
				'i'
			);
			return this.brandsInitialAlphabet
				.filter(v => initialRegExp.test(v[0]))
				.sort();
		}
	},

	methods: {
		pickAlphabet(letter, index) {
			if (!this.alphabetSet.has(letter)) {
				return;
			}
			this.currentAlphabetIndex = index;
		},

		toggleAlphabet(index) {
			if (index) {
				const { classList } = this.$refs.btnLetter.children[index];
				classList.toggle('alphabet-brands__btn--active');
			}
		},

		isPickedBrand(brand) {
			return this.userInfo.pickedBrands[brand];
		}
	},

	created() {
		this.alphabetSet = new Set(this.brandsInitialAlphabet.map(v => v[0]));
	},

	mounted() {
		// 모달창 Vue 인스턴스가 부착되면 존재하는 브랜드 이니셜 중 알파벳 순서가 가장 빠른 브랜드를 보여준다.
		this.alphabetBtn.some((value, index) => {
			if (this.alphabetSet.has(value)) {
				this.currentAlphabetIndex = index;
				return true;
			}
		});
	},
	watch: {
		currentAlphabetIndex(newVal, oldVal) {
			this.toggleAlphabet(oldVal);
			this.toggleAlphabet(newVal);
		}
	}
};
</script>

<style scoped>
.alphabet-brands__letters {
	width: 360px;
	height: 122px;
	margin: 22px 0 0;
	padding: 0 0 22px 5px;
	font-size: 16px;
	display: flex;
	flex-wrap: wrap;
	border-bottom: 1px solid #ededed;
}

.alphabet-brands__btn {
	width: 27px;
	height: 28px;
	font-size: 13px;
	font-weight: 600;
	margin: 3px;
	background-color: #f7f7f7;
	color: #888888;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}

.alphabet-brands__btn:first-child {
	width: 62px;
}

.alphabet-brands__btn.alphabet-brands__btn--active {
	color: #fff;
	background-color: #42b883;
	font-weight: 600;
}
.alphabet-brands__btn.alphabet-brands__btn--passive {
	color: #dddddd;
	cursor: not-allowed;
}

.alphabet-brands__li {
	list-style-type: none;
	height: 42px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #ededed;
	font-size: 13px;
	font-weight: 500;
}

.fa-heart {
	color: #d9d9d9;
	margin: 0 20px 0 24px;
	cursor: pointer;
}

.fa-heart.fa-heart--picked {
	animation-name: rotating;
	animation-iteration-count: 2;
	animation-direction: alternate;
	animation-duration: 0.5s;
	color: #42b850;
}

@keyframes rotating {
	from {
		transform: rotateY(0turn);
	}
	to {
		transform: rotateY(0.5turn);
	}
}
</style>

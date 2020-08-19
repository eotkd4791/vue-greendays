<template>
	<div class="toolbar-menu">
		<div class="toolbar-menu__menus">
			<ul class="toolbar-menu__active">
				<li
					class="toolbar-menu__active__li"
					@mouseover="mouseOverOnMenu"
					@click="$emit('offToolbarModal')"
				>
					<router-link
						:to="{
							path: '/vue-greendays/products',
							query: {
								keyword: '',
								gender: '',
								category: '',
								brand: '',
								product_id: '',
								deal_id: 'reserve-purchase',
								page: 1,
								orderby: 'desc',
								order_std: 'popularity',
							},
						}"
					>
						예약구매
						<span class="toolbar-menu__green-heart">💚</span>
					</router-link>
				</li>
				<li class="toolbar-menu__active__li" @mouseover="mouseOverOnMenu">
					프리오더
				</li>
				<li
					class="toolbar-menu__active__li"
					@mouseover="mouseOverOnMenu"
					@click="$emit('offToolbarModal')"
				>
					<router-link
						:to="{
							path: '/vue-greendays/products',
							query: {
								keyword: '',
								gender: '',
								category: '',
								brand: '',
								product_id: '',
								deal_id: 'quick-delivery',
								page: 1,
								orderby: 'desc',
								order_std: 'popularity',
							},
						}"
					>
						빠른배송
					</router-link>
				</li>
			</ul>
			<ul class="toolbar-menu__passive" @mouseover="mouseLeaveFromMenu">
				<router-link tag="li" to="/reviews">리뷰</router-link>
				<router-link tag="li" to="/customerservice">고객센터</router-link>
			</ul>
		</div>
		<ul class="toolbar-menu__right">
			<li class="toolbar-menu__brand-modal" @click="onClickSearchBrands">
				<span class="toolbar-menu__present">🎁</span>
				<span>브랜드 검색</span>
			</li>
			<li class="toolbar-menu__brand-search" @click="mouseOverOnMenu">
				<form class="toolbar-menu__form">
					<input
						type="text"
						placeholder="검색어를 입력해 주세요"
						class="toolbar-menu__input"
						v-model="keyword"
						@input="searchKeyword"
						@keypress.enter.prevent="onSubmitKeyword"
					/>
					<i class="fas fa-search" />
				</form>
			</li>
		</ul>
	</div>
</template>

<script>
import util from '@/mixins/utilMethods.js';
import Bus from '@/utils/bus.js';
import { mapActions } from 'vuex';
import { debounce, throttle } from 'lodash';

export default {
	mixins: [util],

	data() {
		return {
			keyword: '',
		};
	},

	methods: {
		...mapActions({
			ADD_SEARCH_KEYWORD: 'auth/ADD_SEARCH_KEYWORD',
			IS_LOGGED_IN: 'auth/IS_LOGGED_IN',
			SET_EXPECTED_KEYWORDS: 'shopping/SET_EXPECTED_KEYWORDS',
		}),

		mouseLeaveFromMenu() {
			this.$emit('offToolbarModal');
		},

		onClickSearchBrands() {
			this.$emit('onSearchBrands');
		},

		mouseOverOnMenu: throttle(function(e) {
			const whichMenu = e.target.textContent;
			this.$emit('onToolbarModal', whichMenu.trim());
		}, 250),

		searchKeyword: debounce(function() {
			const trimmedKeyword = this.keyword.replace(/ /g, '').toUpperCase();
			Bus.$emit(
				trimmedKeyword.length === 0
					? 'offRecommendKeywords'
					: 'onRecommendKeywords',
				trimmedKeyword,
			);
		}, 800),

		onSubmitKeyword() {
			const trimmedKeyword = this.keyword.replace(/ /g, '').toUpperCase();
			if (trimmedKeyword.length <= 2) {
				return alert('3글자 이상 입력해주세요.');
			} else {
				this.ADD_SEARCH_KEYWORD(trimmedKeyword)
					.then(() => {
						Bus.$emit('offRecommendKeywords');
						this.mouseLeaveFromMenu();
						this.$router
							.push({
								path: '/vue-greendays/products',
								query: {
									keyword: trimmedKeyword,
									gender: '',
									category: '',
									brand: '',
									product_id: '',
									deal_id: '',
									page: 1,
									order_std: 'popularity',
									orderby: 'desc',
								},
							})
							.catch(() => {});
						this.keyword = '';
					})
					.catch(console.error);
			}
		},
	},

	created() {
		this.SET_EXPECTED_KEYWORDS();
	},
};
</script>

<style scoped>
.toolbar-menu {
	max-width: 1100px;
	height: 36px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}

.toolbar-menu__menus {
	display: flex;
}

.toolbar-menu__menus li {
	margin-right: 20px;
	font-size: 13px;
	cursor: pointer;
}

.toolbar-menu__active,
.toolbar-menu__passive {
	display: flex;
	align-items: center;
}

.toolbar-menu__menus li:hover {
	border-bottom: 3px solid #42b883;
}

.toolbar-menu__green-heart {
	font-size: 10px;
}

.toolbar-menu__right {
	display: flex;
	align-items: center;
}

.toolbar-menu__brand-modal {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 114px;
	height: 36px;
	margin-right: 10px;
	border: 1px solid #dedede;
	position: relative;
}

.toolbar-menu__brand-modal span {
	font-size: 13px;
	font-weight: 500;
}

.toolbar-menu__brand-search {
	width: 232px;
	height: 36px;
	border: 1px solid #dedede;
}

.toolbar-menu__present {
	font-size: 12px;
	filter: drop-shadow(2px 2px 2px #000);
	position: absolute;
	top: 0;
	left: 0;
	margin-left: -6px;
	margin-top: -8px;
}

.toolbar-menu__form {
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
}

.toolbar-menu__input {
	width: 100%;
	height: 33px;
	text-align: center;
	font-size: 13px;
	border-style: none;
	outline-style: none;
}

.fa-search {
	color: #8b8b8b;
	font-size: 14px;
	font-weight: 600;
	position: absolute;
	right: 0;
	margin-right: 10px;
}

.toolbar-menu__brand-modal {
	cursor: pointer;
}
</style>

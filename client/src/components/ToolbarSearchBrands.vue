<template>
	<div class="search-brand">
		<div class="search-brand__wrapper">
			<section
				class="search-brand__list"
				:class="{ 'search-brand__list--viewer': isShownRecommendKeywords }"
			>
				<ol v-show="!isShownRecommendKeywords" class="search-brand__lately">
					<li>최근 검색어</li>
					<router-link
						tag="li"
						v-for="(item, index) in getUserInfo ? getLatelySearchItems : getGuestKeywords"
						:key="index"
						to="/"
					>{{ item }}</router-link>
				</ol>
				<ul class="search-brand__hot">
					<li>인기 검색어</li>
					<router-link
						tag="li"
						v-for="(item, index) in isShownRecommendKeywords
							? getRecommendKeywordsList
							: getHotSearchItems"
						:key="index"
						to="/"
						v-html="isShownRecommendKeywords ? keywordsHighlighter(item) : item"
					></router-link>
				</ul>
			</section>
			<button
				v-show="!isShownRecommendKeywords"
				@click="Bus.$emit('deleteAllKeywords')"
				class="search-brand__btn"
			>검색 기록 삭제</button>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Bus from '@/utils/bus.js';

export default {
	data() {
		return {
			isShownRecommendKeywords: false,
			searchKeyword: '',
		};
	},
	computed: {
		...mapGetters({
			getUserInfo: 'auth/getUserInfo',
			getLatelySearchItems: 'auth/getLatelySearchItems',
			getHotSearchItems: 'shopping/getHotSearchItems',
			getRecommendKeywordsList: 'shopping/getRecommendKeywords',
			getGuestKeywords: 'shopping/getGuestKeywords',
		}),
	},
	methods: {
		...mapActions({
			FETCH_SEARCHED_KEYWORD: 'auth/FETCH_SEARCHED_KEYWORD',
			DELETE_ALL_SEARCH_KEYWORD: 'auth/DELETE_ALL_SEARCH_KEYWORD',
			FETCH_RECOMMEND_KEYWORDS: 'shopping/FETCH_RECOMMEND_KEYWORDS',
			SET_EXPECTED_KEYWORDS: 'shopping/SET_EXPECTED_KEYWORDS',
		}),

		onRecommendKeywordsView() {
			this.isShownRecommendKeywords = true;
		},

		offRecommendKeywordsView() {
			this.isShownRecommendKeywords = false;
		},

		getRecommendKeywords(payload) {
			Bus.$emit('on:spinner');
			this.searchKeyword = payload;
			this.FETCH_RECOMMEND_KEYWORDS(payload)
				.then(() => {
					this.onRecommendKeywordsView();
					Bus.$emit('off:spinner');
				})
				.catch(console.error);
		},

		keywordsHighlighter(keyword) {
			const targetKeyword = this.searchKeyword;
			const regex = new RegExp(targetKeyword, 'gi');
			return keyword.replace(
				regex,
				`<span style="color: #42b850">${targetKeyword}</span>`,
			);
		},
	},
	created() {
		this.FETCH_SEARCHED_KEYWORD();
	},
	mounted() {
		Bus.$on('onRecommendKeywords', this.getRecommendKeywords);
		Bus.$on('offRecommendKeywords', this.offRecommendKeywordsView);
	},
	beforeDestroy() {
		Bus.$off('onRecommendKeywords', this.getRecommendKeywords);
		Bus.$off('offRecommendKeywords', this.offRecommendKeywordsView);
	},
};
</script>

<style scoped>
.search-brand {
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	padding: 20px 0;
}

.search-brand__wrapper {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 430px;
	height: 250px;
}

.search-brand__list {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	padding: 0 15px;
	font-size: 15px;
}

.search-brand__list.search-brand__list--viewer {
	justify-content: flex-end;
}

.search-brand__lately,
.search-brand__hot {
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow: hidden;
}

.search-brand__lately {
	margin-right: 20px;
}

.search-brand__list li {
	width: 100%;
	height: 100%;
	font-weight: 500;
	margin: 0 0 15px;
}

.search-brand__list li:nth-child(n + 2) {
	cursor: pointer;
}

.search-brand__router-link {
	cursor: pointer;
}

.search-brand__btn {
	outline-style: none;
	width: 100%;
	font-size: 13px;
	text-align: left;
	color: #787878;
}

.search-brand__lately > li:first-child {
	font-size: 14px;
}

.search-brand__hot > li:first-child {
	font-size: 14px;
}
</style>

<template>
	<div class="wish">
		<section class="wish__header">
			<ul class="wish__menu">
				<li
					class="wish__list"
					:class="{ 'wish__list--active': onProductTab }"
					@click="onProductTab = !onProductTab"
				>
					PICK! 상품
				</li>
				<li
					class="wish__list"
					:class="{ 'wish__list--active': !onProductTab }"
					@click="onProductTab = !onProductTab"
				>
					PICK! 브랜드
				</li>
			</ul>
			<button
				class="wish__delete-btn"
				v-if="
					onProductTab
						? userInfo.wishList.length > 0
						: Object.keys(userInfo.pickedBrands).length > 0
				"
				@click="deleteSelectedItems"
			>
				선택삭제
			</button>
		</section>

		<aside class="wish-content" v-if="onProductTab">
			<ol class="wish__content__list" v-if="userInfo.wishList.length > 0">
				<wish-list-item
					v-for="(product, index) in userInfo.wishList"
					:key="index"
					:productInfo="product"
				>
				</wish-list-item>
			</ol>
			<empty-wish-list v-else />
		</aside>

		<aside class="wish-content" v-else>
			<ol class="wish__content__list">
				<pick-brand-item
					v-for="(array, index) in Object.entries(userInfo.pickedBrands)"
					:key="index"
					:categoryPair="array"
				/>
			</ol>
		</aside>
	</div>
</template>

<script>
import WishListItem from '@/components/WishListItem.vue';
import PickBrandItem from '@/components/PickBrandItem.vue';
import EmptyWishList from '@/components/EmptyWishList.vue';
import { mapState, mapActions } from 'vuex';

export default {
	components: {
		WishListItem,
		PickBrandItem,
		EmptyWishList,
	},

	data() {
		return {
			onProductTab: true,
			checkedBrandsToDelete: [],
			checkedProductsToDelete: [],
		};
	},

	computed: {
		...mapState('auth', {
			userInfo: state => state.userInfo,
		}),
	},

	methods: {
		...mapActions('auth', ['DELETE_WISHLIST', 'DELETE_PICKED_BRANDS']),

		deleteSelectedItems() {
			this.onProductTab
				? this.DELETE_WISHLIST(this.checkedProductsToDelete)
				: this.DELETE_PICKED_BRANDS(this.checkedBrandsToDelete);
		},
	},

	watch: {
		onProductTab() {
			this.checkedBrandsToDelete = [];
			this.checkedProductsToDelete = [];
		},
	},
};
</script>

<style scoped>
.wish {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	max-width: 1100px;
	width: 100%;
	margin: 0 auto;
}

.wish__header {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	margin: 0 auto;
}

.wish__delete-btn {
	width: 88px;
	height: 30px;
	margin: 30px 0;
	border-radius: 5px;
	background-color: #f7f7f7;
	font-size: 14px;
}

.wish__menu {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	margin: 0 auto;
	border-bottom: 1px solid #ebebeb;
	font-size: 18px;
}

.wish__list {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	padding: 0 0 10px;
	font-weight: 500;
	cursor: pointer;
}

.wish__list.wish__list--active {
	padding: 0 0 6px;
	border-bottom: 4px solid #42b850;
	color: #42b850;
}

.wish-content {
	width: 100%;
}

.wish__content__list {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
}
</style>

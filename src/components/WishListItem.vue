<template>
	<div>
		<input
			type="checkbox"
			class="wish-item__checkbox"
			:value="productInfo.id"
			v-model="$parent.checkedProductsToDelete"
		/>

		<RouterLink
			:to="`/products/show/${productInfo.id}`"
			tag="li"
			class="wish-item"
		>
			<div class="space" />
			<DisplayItems
				:productId="productInfo.id"
				:sendToday="productInfo.productSendToday"
				:ableToBuy="productInfo.productAbleToBuy"
				:callFrom="'item-container--small'"
			>
				<template #productInfo-photo>
					<img
						:src="productInfo.photoUrl"
						width="210px"
						height="210px"
						class="item-container__photo"
					/>
					<div class="space" />
				</template>
				<template #productInfo-brand>{{ productInfo.brand }}</template>
				<template #productInfo-name>{{ productInfo.name }}</template>
				<template #productInfo-beforePrice>
					{{ (productInfo.priceBefore * 1000).toLocaleString() }}
				</template>
				<template #productInfo-discountRate>
					{{ Math.ceil(productInfo.discountRate * 100) }}% 할인
				</template>
				<template #productInfo-afterPrice>
					{{ (productInfo.priceAfter * 1000).toLocaleString() }}
				</template>
			</DisplayItems>
		</RouterLink>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import DisplayItems from '@/components/common/DisplayItems.vue';

export default {
	components: {
		DisplayItems
	},

	props: {
		productInfo: Object
	},

	computed: {
		...mapState('auth', {
			userInfo: state => state.userInfo
		})
	}
};
</script>

<style scoped>
.wish-item__checkbox {
	width: 20px;
	height: 20px;
	margin-bottom: 20px;
}

.wish-item {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 230px;
	height: 400px;
	margin: 20px 20px 20px 0;
	border: 1px solid #ebebeb;
	border-radius: 10px;
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}

.space {
	width: 100%;
	height: 20px;
}
</style>

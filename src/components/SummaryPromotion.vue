<template>
	<div class="promo__info-container">
		<div class="promo__info-container-title-wrapper">
			<slot name="promoInfo-name" />
		</div>
		<div class="promo__info-container-overview-wrapper">
			<section class="promo__info-container-overview" ref="promo">
				<div class="wrap-opacity" />
				<div class="promo__info-container-overview-text">
					<slot name="promoInfo-timer" />
					<slot name="promoInfo-overview" />
				</div>
			</section>
			<section class="promo__info-container-items">
				<display-items
					v-for="i in 4"
					:key="product[i-1].id"
					:sendToday="product[i-1].productSendToday"
					:ableToBuy="product[i-1].productAbleToBuy"
					:callFrom="callfrom"
				>
					<template #productInfo-photo>
						<img
							:src="product[i-1].photoUrl"
							width="220px"
							height="220px"
							class="item-container__photo"
							:class="callfrom"
						/>
					</template>
					<template #productInfo-brand>{{ product[i-1].brand }}</template>
					<template #productInfo-name>{{ product[i-1].name }}</template>
					<template #productInfo-beforePrice>{{ (product[i-1].priceBefore * 1000).toLocaleString() }}</template>
					<template #productInfo-discountRate>{{ Math.ceil(product[i-1].discountRate) * 100 }}% 할인</template>
					<template #productInfo-afterPrice>{{ (product[i-1].priceAfter * 1000).toLocaleString() }}</template>
				</display-items>
			</section>
		</div>
	</div>
</template>

<script>
import DisplayItems from '@/components/common/DisplayItems.vue';

export default {
	components: {
		DisplayItems,
	},
	props: ['imgUrl', 'productOfPreorder'],
	data() {
		return {
			product: [],
			callfrom: 'main__view',
			intervalTimer: {
				type: Object,
			},
		};
	},

	created() {
		this.product = this.productOfPreorder;
	},

	mounted() {
		const promoStyle = this.$refs.promo.style;
		promoStyle.setProperty('background-image', `url(${this.imgUrl})`);
		promoStyle.setProperty('background-repeat', 'no-repeat');
		promoStyle.setProperty('background-position', 'center');
		promoStyle.setProperty('background-size', 'cover');
	},
};
</script>

<style scoped>
.promo__info-container {
	width: 540px;
	height: 1444px;
	margin: 30px 0;
}

.promo__info-container-title-wrapper {
	display: flex;
	align-items: center;
	width: 100%;
	text-align: center;
}

.promo__info-container-title {
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 540px;
	height: 74px;
	font-size: 14px;
	color: #000;
}

.promo__info-container-overview-wrapper {
	width: 540px;
	height: 1370px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.16);
}

.promo__info-container-overview {
	display: flex;
	position: relative;
	width: 540px;
	height: 333.417px;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	color: #fff;
	cursor: pointer;
}

.wrap-opacity {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	z-index: 1000;
	background-color: rgba(0, 0, 0, 0.44);
}
.promo__info-container-overview-text {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	cursor: pointer;
}

.promo__info-container-timer {
	color: #9aecdb;
	font-size: 14px;
	font-weight: 600;
}

.promo__info-container-timer.clock {
	width: 100%;
	height: 30px;
	font-size: 30px;
	color: #9aecdb;
	font-weight: bold;
	line-height: 1;
	text-align: center;
}

.promo__info-container-overview-sub {
	color: #fff;
	font-size: 15px;
	font-weight: 700;
}

.promo__info-container-overview-title {
	font-size: 25px;
	font-weight: bold;
	margin: 24px 0 0;
	text-align: center;
}

.promo__info-container-overview-subtitle,
.promo__info-container-overview-description {
	text-align: center;
}

.promo__info-container-items {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	height: 973.58px;
	padding: 20px;
}
</style>
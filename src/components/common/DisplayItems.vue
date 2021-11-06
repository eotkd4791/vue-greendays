<template>
	<intersect @enter="visible = true" @leave="visible = false">
		<ul
			:class="`item-container ${callFrom} ${!visible ? 'item--invisible' : ''}`"
			@click.stop="$router.push(`/products/show/${productId}`)"
		>
			<li
				class="item-container__img"
				:class="{ callFrom: callFrom.length > 0 }"
			>
				<slot name="productInfo-photo" />
			</li>
			<li :class="`item-container__info ${callFrom}`">
				<div class="item-container__space" v-if="callFrom === ''" />
				<ol>
					<li :class="`item-container__brand ${callFrom}`">
						<slot name="productInfo-brand" />
					</li>
					<li :class="`item-container__name ${callFrom}`">
						<slot name="productInfo-name" />
					</li>
					<li :class="`item-container__price ${callFrom}`">
						<span :class="`item-container__before-price ${callFrom}`">
							<slot name="productInfo-beforePrice" />
						</span>
						|
						<span :class="`item-container__discount-rate ${callFrom}`">
							<slot name="productInfo-discountRate" />
						</span>
					</li>
					<li :class="`item-container__after-price ${callFrom}`">
						<slot name="productInfo-afterPrice" />
					</li>
				</ol>
			</li>
			<li :class="`item-container__chips-wrapper ${callFrom}`">
				<div v-if="sendToday" class="item-container__chips send-today">
					<p class="item-container__chips__send-today__text">당일발송</p>
				</div>
				<div v-if="ableToBuy" class="item-container__chips able-to-buy">
					<p class="item-container__chips__able-to-buy__text">구매가능</p>
				</div>
			</li>
		</ul>
	</intersect>
</template>

<script>
import util from '@/mixins/utilMethods.js';
import Intersect from 'vue-intersect';
export default {
	components: {
		Intersect
	},

	mixins: [util],

	props: ['imgPath', 'productId', 'sendToday', 'ableToBuy', 'callFrom'],

	data() {
		return {
			visible: true
		};
	}
};
</script>
<style scoped>
.item-container {
	display: inline-block;
	width: 260px;
	height: 400px;
	margin-right: 10px;
	margin-bottom: 100px;
	cursor: pointer;
	font-family: 'Montsarret';
	font-size: 13px;
	line-height: 1.06;
}

.item-container.item--invisible {
	visibility: hidden;
}

.item-container.main__view {
	width: 220px;
	height: 425px;
	margin: 5px 5px 32px;
}

.item-container__photo {
	width: 260px;
	height: 260px;
	outline-style: none;
}

.item-container__photo.main__view {
	width: 220px;
	height: 220px;
}

.item-container__space {
	height: 32px;
}

.item-container__brand {
	font-size: 12px;
	margin: 0 0 6px;
	text-align: center;
	font-weight: bold;
}

.item-container__brand.main__view {
	font-size: 12px;
}

.item-container__name {
	width: 100%;
	font-size: 13px;
	margin-bottom: 24px;
	text-align: center;
	text-overflow: ellipsis;
}

.item-container__price {
	font-size: 12px;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.item-container__before-price {
	text-decoration-line: line-through;
	text-decoration-style: solid;
	color: #b6b6b6;
	margin-right: 10px;
}

.item-container__discount-rate {
	margin-left: 10px;
}

.item-container__discount-rate.item-container--small {
	font-size: 12px;
}

.item-container__after-price {
	color: #4dcf34;
	font-size: 12px;
	font-weight: 600;
	text-align: center;
}

.item-container__after-price.item-container--small {
	font-size: 12px;
	margin: 15px 0 0;
}

/* chips */
.item-container__chips-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 260px;
	height: 20px;
	margin: 10px 0 0;
	font-size: 12px;
}

.item-container__chips-wrapper.item-container--small {
	width: 190px;
	margin: 20px 0 0;
}

.item-container__chips-wrapper.main__view {
	width: 220px;
}

.item-container__chips {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60px;
	height: 20px;
	margin: 0 7px 0 0;
	padding: 0 0 1px;
	border-radius: 10px;
	font-size: 11px;
}

.item-container__chips-wrapper::after {
	content: '';
	height: 7px;
}

.item-container__chips.send-today {
	background-color: rgba(57, 57, 57, 0.08);
}

.item-container__chips__send-today__text {
	color: #393939;
}

.item-container__chips.able-to-buy {
	background-color: #42b850;
}

.item-container__chips__able-to-buy__text {
	color: white;
	font-weight: 700;
}

.item-container.item-container--small {
	width: 190px;
	height: 331px;
	margin: 0 13px 0 0;
}

.item-container__photo.item-container--small {
	width: 190px;
	height: 190px;
}

.item-container__brand.item-container--small {
	font-size: 12px;
}

.item-container__name.item-container--small {
	font-size: 12px;
	margin: 7px 0 0;
}

.item-container__price.item-container--small {
	font-size: 12px;
	margin: 15px 0 0;
}

.item-container__before-price.item-container--small {
	font-size: 12px;
}

.item-container__chips.item-container--small {
	height: 18px;
}
</style>

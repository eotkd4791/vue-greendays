<template>
	<div class="promotion">
		<section class="promotion__wrapper">
			<summary-promotion
				v-for="promotion in promotions"
				:key="promotion.title"
				:imgUrl="promotion.imgUrl"
				:productOfPreorder="promotion.products"
			>
				<template #promoInfo-name>
					<p class="promo__info-container-title">{{ promotion.promoName }}</p>
				</template>
				<template #promoInfo-timer>
					<p class="promo__info-container-timer">TIMER</p>
					<p class="promo__info-container-timer clock" ref="timer">
						{{
							`${addZero(promotion.expiredHour)} : ${addZero(
								promotion.expiredMin
							)} : ${addZero(promotion.expiredSec)}`
						}}
					</p>
				</template>
				<template #promoInfo-overview>
					<div class="promo__info-container-overview-sub">
						<p class="promo__info-container-overview-title">
							{{ promotion.title }}
						</p>
						<p class="promo__info-container-overview-subtitle">
							{{ promotion.subtitle }}
						</p>
						<p class="promo__info-container-overview-description">
							{{ promotion.description }}
						</p>
					</div>
				</template>
			</summary-promotion>
		</section>
	</div>
</template>

<script>
import SummaryPromotion from '@/components/SummaryPromotion.vue';
import { mapState } from 'vuex';
import addZero from '@/utils/setTwoDigit.js';

export default {
	components: {
		SummaryPromotion
	},

	data() {
		return {
			promotions: [],
			quickDelivery: {},
			timers: []
		};
	},

	computed: {
		...mapState('shopping', {
			preorders: state => state.preorders
		})
	},

	methods: {
		addZero
	},

	created() {
		this.promotions = this.preorders;
	},

	mounted() {
		this.promotions.forEach(p => {
			const timer = setInterval(() => {
				if (p.expiredHour === 0 && p.expiredMin === 0 && p.expiredSec === 0) {
					p.activated = false;
					clearInterval(timer);
				}
				if (p.expiredSec === 0) {
					if (p.expiredMin > 0) {
						p.expiredSec = 59;
						p.expiredMin--;
					} else {
						p.expiredSec = 59;
						p.expiredMin = 59;
						p.expiredHour--;
					}
				} else {
					p.expiredSec--;
				}
			}, 1000);
			this.timers.push(timer);
		});
	},

	beforeDestroy() {
		this.timers.forEach(timer => {
			clearInterval(timer);
		});
	}
};
</script>

<style scoped>
.promotion {
	max-width: 1100px;
	margin: 0 auto;
}

.promotion__wrapper {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
</style>

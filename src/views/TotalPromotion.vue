<template>
  <div class="promotion-container">
    <section class="promotion-container-wrapper">
      <summary-promotion
        v-for="promotion in promotions"
        :key="promotion.title"
        :imgUrl="promotion.imgUrl"
      >
        <template #promoInfo-name>
          <p class="promo__info-container-title">
            {{ promotion.promoName }}
          </p>
        </template>
        <template #promoInfo-timer>
          <p class="promo__info-container-timer">TIMER</p>
          <p class="promo__info-container-timer clock">
            {{ promotion.hour }} : {{ promotion.min }} : {{ promotion.sec }}
          </p>
        </template>
        <template #promoInfo-overview>
          <div class="promo__info-container-overview-sub">
            <p class="promo__info-container-overview-title">
              {{ promotion.title }}
            </p>
            <p v-if="promotion.expireAt !== undefined" 
              class="promo__info-container-overview-subtitle"
            >
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

export default {
  components: {
    SummaryPromotion,
  },
  data() {
    return {
      promotions:[],
      quickDelivery: {},
    };
  },
  created() {
    this.promotions = this.$store.state.preorders.preorders;
    console.log("total", this.promotions);
    // this.quickDelivery = this.$store.state
    // this.preorders.push(this.quickDelivery);
  },
}
</script>

<style scoped>
.promotion-container {
  max-width: 1100px;
  margin: 0 auto;
}
.promotion-container-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
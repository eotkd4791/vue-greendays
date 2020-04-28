<template>
  <div class="promotion-container">
    <section class="promotion-container-wrapper">
      <summary-promotion
        v-for="promotion in promotions"
        :key="promotion.title"
      >
        <template #promoInfo-name>
          <span class="promo__info-container-title">
            {{ promotion.promoName }}
          </span>
        </template>
        <template #promoInfo-timer>
          <div v-if="promotion.expireAt !== null">
            <p class="promo__info-container-timer">TIMER</p>
            <p class="promo__info-container-timer clock">
              {{ promotion.expireAt }}
            </p>
          </div>
        </template>
        <template #promoInfo-overview>
          <div class="promo__info-container-overview-sub">
            <p class="promo__info-container-overview-title">
              {{ promotion.title }}
            </p>
            <p v-if="promotion.expireAt !== null" 
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
  width: 100%;
  margin: 0 auto;
}
.promotion-container-wrapper {
  display: flex;
}
</style>
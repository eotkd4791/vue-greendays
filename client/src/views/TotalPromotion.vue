<template>
  <div class="promotion-container">
    <section class="promotion-container-wrapper">
      <summary-promotion
        v-for="promotion in promotions"
        :key="promotion.title"
        :imgUrl="promotion.imgUrl"
      >
        <template #promoInfo-name>
          <p class="promo__info-container-title">{{ promotion.promoName }}</p>
        </template>
        <template #promoInfo-timer>
          <p class="promo__info-container-timer">TIMER</p>
          <p
            class="promo__info-container-timer clock"
            ref="timer"
          >{{ promotion.hour }} : {{ promotion.min }} : {{ promotion.sec }}</p>
        </template>
        <template #promoInfo-overview>
          <div class="promo__info-container-overview-sub">
            <p class="promo__info-container-overview-title">{{ promotion.title }}</p>
            <p
              v-if="!!promotion.expireAt"
              class="promo__info-container-overview-subtitle"
            >{{ promotion.subtitle }}</p>
            <p class="promo__info-container-overview-description">{{ promotion.description }}</p>
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
      Timers: [],
    };
  },
  methods: {},
  created() {
    this.promotions = this.$store.state.preorders;
    // this.quickDelivery = this.$store.state
    // this.preorders.push(this.quickDelivery);
    // 진행중인 모든 프리오더 행사 뒤에 빠른배송 넣기
  },
  mounted() {
    this.promotions.forEach((p)=> {
      // const hour = p.hour;
      // const min = p.min;
      // let sec = p.sec;
      const Timer = window.setInterval(() => {
        if(p.hour === 0 && p.min === 0 && p.sec === 0) {
          p.activated = false;
          clearInterval(Timer);
        }
        if(p.sec === 0) {
          if(p.min > 0) { p.sec = 59; }
          if(p.min === 0) {
            if(p.hour > 0) { p.min = 59; }
          } else { p.min -= 1; }
        } else { p.sec -= 1; }
      }, 1000);
      this.Timers.push(Timer);
    });
  },
  beforeDestroy() {
    this.Timers.forEach((t) => clearInterval(t));
  }
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
<template>
  <div class="promo__info-container">
    <div class="promo__info-container-title-wrapper">
      <slot name="promo__info-container-title" />
    </div>
    <div class="promo__info-container-overview-wrapper">
      <section class="promo__info-container-overview" ref="expire-timer">
        <slot name="promoInfo-timer" />
        <slot name="promoInfo-overview" />
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
              class="item-container__photo" 
            />
          </template>
          <template #productInfo-brand>
            {{ product[i-1].brand }}
          </template>
          <template #productInfo-name>
            {{ product[i-1].name }}
          </template>
          <template #productInfo-beforePrice>
            {{ product[i-1].priceBefore.toLocaleString() }}
          </template>
          <template #productInfo-discountRate>
            {{ product[i-1].discountRate }}% 할인
          </template>
          <template #productInfo-afterPrice>
            {{ product[i-1].priceAfter.toLocaleString() }}
          </template>
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
  props: ['imgUrl'],
  data() {
    return {
      product: [],
      callfrom: 'main__view',
      intervalTimer: {
        type: Object,
      }
    };
  },
  created() {
    this.product = this.$store.state.products.products;
  },
  mounted() {
    console.log('Summary');
    // this.intervalTimer = setInterval(()=> {
    //   new Date();
    // });
  },
  beforeDestroy() {
    // clearInterval(this.intervalTimer);
  },
}
</script>

<style scoped>
.promo__info-container {
  width: 540px;
  height: 1444px;
  margin: 60px 20px 0 0;
}
.promo__info-container-title-wrapper {
  width: 100%;
  text-align: center;
  margin-bottom: 60px;
}
.promo__info-container-title {
  font-size: 14px;
}
.promo__info-container-overview-wrapper {
  width: 100%;
  height: 1370px;
  border-radius: 10px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.16);
}

.promo__info-container-overview {
  display: flex;
  width: 540px;
  height: 333.417px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.promo__info-container-timer {
  color: #fff;
  font-size: 14px;
}
.promo__info-container-timer.clock {
  font-size: 25px;
  color: #fff;
  font-weight: bold;
  line-height: 1;
}
.promo__info-container-overview-sub {
  color: #fff;
  font-size: 15px;
}
.promo__info-container-overview-title {
  font-size: 25px;
  margin: 24px 0 0;
}
.promo__info-container-items {
  display: inline-block;
  width: 100%;
  height: 973.58px;
  padding : 20px;
}
</style>
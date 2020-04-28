<template>
  <div class="product-container">
    <div class="product-wrapper">
      <div class="product-container__text">총 {{ totalCountProducts }} 개의 상품</div>
      <display-items 
        v-for="product in products" 
        :key="product.id"
        :productId="product.id"
        :sendToday="product.productSendToday"
        :ableToBuy="product.productAbleToBuy"
      >
        <template #productInfo-photo>
          <img :src="product.photoUrl" class="item-container__photo" />
        </template>
        <template #productInfo-brand>{{ product.brand }}</template>
        <template #productInfo-name>{{ product.name }}</template>
        <template #productInfo-beforePrice>{{ product.priceBefore.toLocaleString() }}</template>
        <template #productInfo-discountRate>{{ product.discountRate }}% 할인</template>
        <template #productInfo-afterPrice>{{ product.priceAfter.toLocaleString() }}</template>
      </display-items>
    </div>
  </div>
</template>

<script>
import DisplayItems from '@/components/common/DisplayItems.vue';

export default {
  components: {
    DisplayItems,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    totalCountProducts() {
      return this.products.length;
    },
  },
  methods: {},
  created() {
    // 상품정보 받아오기
    this.products = this.$store.state.products.products;
  },
}
</script>

<style scoped>
.product-container {
  width: 100%;
  margin-top: 200px;
}
.product-wrapper {
  max-width: 1100px;
  margin: 0 auto;
}

.product-container__text {
  max-width: 1100px;
  width: 100%;
  margin: 40px 0;
  font-size: 14px;
  font-family: 'Montserrat';
  text-align: center;
}
</style>
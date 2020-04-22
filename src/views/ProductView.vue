<template>
  <div class="product-container">
    <div class="product-wrapper">
      <div class="product-container__text">총 {{ totalCountProducts }} 개의 상품</div>
      <display-items 
        v-for="product in products" 
        :key="product.name" 
      >
        <template #productInfo-photo>
          <img :src="product.photoUrl" width="262px" height="262px" />
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
  created() {
    // 상품정보 받아오기
    this.products = this.$store.state.products.products;
  },
  mounted() {
    // 상품 배경이미지 적용
  }
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

.item-container__photo {
  width: 262px;
  height: 262px;
  outline-style: none;
}
</style>
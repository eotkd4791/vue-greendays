<template>
  <div>
    <div v-if="tabToShow==='toolbar-reserve-buying'">
      <div>
        <header>CATEGORIES</header>
        <div>
          <span @click="movePage()">All Categories ({{ totalProductsNum }})</span>
          <span @click="movePage()">Bags ({{ totalProducts.bags.length }})</span>
          <span @click="movePage()">Wallets ({{ totalProducts.wallets.length }})</span>
          <span @click="movePage()">Clothes ({{ totalProducts.clothes.length }})</span>
          <span @click="movePage()">Shoes ({{ totalProducts.shoes.length }})</span>
          <span @click="movePage()">Accessories ({{ totalProducts.accessories.length }})</span>
        </div>
      </div>
      <div>
        <img src="" />
        <p></p>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  props: ['tabToShow'],
  data() {
    return {
      totalProducts: {
        bags: [],
        wallets: [],
        clothes:[],
        shoes: [],
        accessories: [],
      },
      preorderItems: {

      },
    };
  },
  computed: {
    totalProductsNum() {
      return this.totalProducts.bags.length + this.totalProducts.wallets.length + this.totalProducts.clothes.length + this.totalProducts.shoes.length + this.totalProducts.accessories.length;
    },
  },
  methods: {
    movePage(to) {
      const nextPage = { path: to };
      this.$router.push(nextPage);
    },
  }
}
</script>

<style scoped>

</style>
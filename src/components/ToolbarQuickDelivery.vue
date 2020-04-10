<template>
  <div>
    <div>
      <header>CATEGORIES</header>
      <div>
        <span>All Categories ({{ totalProductsNum }})</span>
        <span>Bags ({{ totalProducts.bags.length }})</span>
        <span>Wallets ({{ totalProducts.wallets.length }})</span>
        <span>Clothes ({{ totalProducts.clothes.length }})</span>
        <span>Shoes ({{ totalProducts.shoes.length }})</span>
        <span>Accessories ({{ totalProducts.accessories.length }})</span>
      </div>
    </div>
    <div>
      <img src="`${}`" />
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgPath: '',

    };
  },
}
</script>

<style>

</style>
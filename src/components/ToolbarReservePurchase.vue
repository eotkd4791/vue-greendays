<template>
  <div class="reserve-container">
    <section class="reserve-container__category">
      <header class="reserve-container__category__title">CATEGORIES</header>
      <div class="reserve-container__category__link" ref="tabs">
        <span 
          class="active" 
          @click="movePage('/')" 
          @mouseover="activatingTab"
        >All Categories ({{ totalProductsNum }})</span>

        <span 
          @click="movePage('/')" 
          @mouseover="activatingTab"
        >Bags ({{ totalProducts.bags.length }})</span>

        <span 
          @click="movePage('/')" 
          @mouseover="activatingTab"
        >Wallets ({{ totalProducts.wallets.length }})</span>

        <span 
          @click="movePage('/')" 
          @mouseover="activatingTab"
        >Clothes ({{ totalProducts.clothes.length }})</span>

        <span 
          @click="movePage('/')" 
          @mouseover="activatingTab"
        >Shoes ({{ totalProducts.shoes.length }})</span>

        <span 
          @click="movePage('/')" 
          @mouseover="activatingTab"
        >Accessories ({{ totalProducts.accessories.length }})</span>
      </div>
    </section>
    <section class="reserve-container__promotion">
      <div class="reserve-container__promotion__img" />
      <div class="reserve-container__promotion__text">
        <h3 class="reserve-container__promotion__title">
          스마트한 구매의 시작 PICK
        </h3>
        <p class="reserve-container__promotion__subtitle">
          그린데이즈가 제안하는 현명하게 하이패션을 즐기는 방법!
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
      activatedTabIndex: 0,
      
    };
  },
  computed: {
    totalProductsNum() {
      return this.totalProducts.bags.length + this.totalProducts.wallets.length + this.totalProducts.clothes.length + this.totalProducts.shoes.length + this.totalProducts.accessories.length;
    },
  },
  methods: {
    movePage(to) {
      if(to ==='#') return;
      if(this.$route.path !== to) {
        const nextPage = { path: to };
        this.$router.push(nextPage);
      }
    },
    activatingTab(e) {

      const tabToActivate = e.target;
      this.$refs.tabs.childNodes[this.activatedTabIndex].classList.remove('active');
      tabToActivate.classList.add('active');

      const tabLists = tabToActivate.parentNode.children;
      this.activatedTabIndex = [...tabLists].indexOf(tabToActivate);
      
      // Array.prototype.slice.call(foo);
      // Array.from(foo);
      // [...foo];

      //Array.isArray(name);
    }
  },
}
</script>

<style scoped>
.reserve-container { width: 100%; height: 355px; max-width: 1100px; display: flex; justify-content: space-between; font-family: 'Montserrat'; }
.reserve-container__category { width: 200px; height: 345px; }
.reserve-container__category__title { font-weight: 700; }
.reserve-container__category__link { margin-top: 20px; }
.reserve-container__category__link>span { width: 200px; height: 24px; display: flex; padding: 3px 0 3px 10px; margin: 10px 0; font-size: 14px; font-weight: 600; cursor: pointer; }
.active { font-size: 14px; font-weight: 600; color: #fff; background-color: #42b883; }

.reserve-container__promotion { width: 600px; height: 100%; }
.reserve-container__promotion__img { width: 100%; height: 250px; background-image: url("../assets/img/brands/dior-logo.jpg"); background-repeat: no-repeat; background-size: cover; background-position: center; cursor: pointer; }
.reserve-container__promotion__text { width: 100%; height: 40px; margin: 14px 0 0; }
.reserve-container__promotion__title { font-size: 14px; font-weight: 600; }
.reserve-container__promotion__subtitle { font-size: 12px; margin-top: 14px; }
</style>
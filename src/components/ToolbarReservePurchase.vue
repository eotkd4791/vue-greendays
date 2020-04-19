<template>
  <div class="reserve__container">
    <section class="reserve__container-category">
      <header class="reserve__container-category-title">CATEGORIES</header>
      <div class="reserve__container-category-link" ref="tabs">
        <span @click="movePage('/')" class="active" @mouseover="activatingTab">All Categories ({{ totalProductsNum }})</span>
        <span @click="movePage('/')" @mouseover="activatingTab">Bags ({{ totalProducts.bags.length }})</span>
        <span @click="movePage('/')" @mouseover="activatingTab">Wallets ({{ totalProducts.wallets.length }})</span>
        <span @click="movePage('/')" @mouseover="activatingTab">Clothes ({{ totalProducts.clothes.length }})</span>
        <span @click="movePage('/')" @mouseover="activatingTab">Shoes ({{ totalProducts.shoes.length }})</span>
        <span @click="movePage('/')" @mouseover="activatingTab">Accessories ({{ totalProducts.accessories.length }})</span>
      </div>
    </section>
    <section class="reserve__container-promotion">
      <div class="reserve__container-promotion-img" />
      <div class="reserve__container-promotion-text">
        <h3 class="reserve__container-promotion-title">스마트한 구매의 시작 PICK</h3>
        <p class="reserve__container-promotion-subtitle">그린데이즈가 제안하는 현명하게 하이패션을 즐기는 방법!</p>
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
  created() {
    //이미지 통신을 불러오기
  }
}
</script>

<style scoped>
.reserve__container {
  width: 100%;
  height: 355px;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  font-family: 'Montserrat';
}
.reserve__container-category {
  width: 200px;
  height: 345px;
}
.reserve__container-category-title {
  font-weight: 700;
}
.reserve__container-category-link {
  margin-top: 20px;
}
.reserve__container-category-link>span {
  width: 200px;
  height: 24px;
  display: flex;
  padding: 3px 0 3px 10px;
  margin: 10px 0;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
.active {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: #42b883;  
}


.reserve__container-promotion {
  width: 600px;
  height: 100%;
}
.reserve__container-promotion-img {
  width: 100%;
  height: 250px;
  background-image: url("../assets/img/brands/dior-logo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.reserve__container-promotion-text {
  width: 100%;
  height: 40px;
  margin: 14px 0 0;
}
.reserve__container-promotion-title {
  font-size: 14px;
  font-weight: 600;
}
.reserve__container-promotion-subtitle {
  font-size: 12px;
  margin-top: 14px;;
}
</style>
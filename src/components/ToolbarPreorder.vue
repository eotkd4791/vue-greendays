<template>
  <div class="preorder-container">
    <section class="preorder-container__category">
      <header class="preorder-container__category__title">PRE ORDER</header>
      <div class="preorder-container__category__link" ref="tabs">
        <span 
          class="active"
          @click="movePage('/')" 
        >#프리오더가 뭐에요?</span>
        
        <span 
          v-for="preorder in preOrders"
          :key="preorder.name"
          @click="movePage('/')"
          @mouseover="activatingTab"
        >{{ preorder.name }}<i>></i>
        </span>
      </div>
    </section>
    <section class="preorder-container__promotion">
      <div class="preorder-container__promotion__img" />
      <div class="preorder-container__promotion__text">
        <h3 class="preorder-container__promotion__title">
          한정된 기간동안만 열리는 특별한 타임세일!
        </h3>
        <p class="preorder-container__promotion__subtitle">
          프리오더를 통해 낮은 금액으로 명품을 즉시 구매해보세요!
        </p>
        <p class="preorder-container__promotion__subtitle">
          단, 한정된 시간 동안만 구매할 수 있으니 서둘러주세요
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preOrders:[
        { name: '코로나야 물럿거라!' },
        { name: '개발왕이 되고 싶습니다!' },
        { name: '긍정적인 마인드 탑재' },
        { name: 'eotkd4791.github.io' },
        { name: 'github.com/eotkd4791' },
        { name: 'Vue.js' },
        { name: 'Node.js' }
      ],
      activatedTabIndex: 0,
    };
  },
  methods: {
    movePage(to) {
      if(to ==='#') return;
      if(this.$route.path !== to) {
        const nextPage = { path: to };
        this.$router.push(nextPage);
      }
    },
    activatingTab() {
      this.$refs.tabs.childNodes[this.activatedTabIndex].classList.remove('active');
      
      // const tabToActivate = e.target;
      // const tabLists = tabToActivate.parentNode.children;
      // this.activatedTabIndex = [...tabLists].indexOf(tabToActivate);
    }
  },
  created() {


    // 프리오더 행사 가져오기 Vuex에서
  },
}
</script>

<style scoped>
.preorder-container { width: 100%; height: 355px; max-width: 1100px; display: flex; justify-content: space-between; font-family: 'Montserrat'; }
.preorder-container__category { width: 218px; height: 345px; }
.preorder-container__category__title { font-weight: 700; }
.preorder-container__category__link { margin-top: 20px; }
.preorder-container__category__link>span { display: flex; width: 220px; height: 24px; flex-wrap: nowrap; justify-content: space-between; padding: 3px 0 3px 10px; margin: 10px 0; font-size: 14px; font-weight: 600; cursor: pointer; }
.preorder-container__category__link i { margin-right: 10px; }
.preorder-container__category__link>span:hover  { font-size: 14px; font-weight: 600; color: #fff; background-color: #42b883; }
.active { font-size: 14px; font-weight: 600; color: #fff; background-color: #42b883; }

.preorder-container__promotion { width: 600px; height: 100%; }
.preorder-container__promotion__img { width: 100%; height: 250px; background-image: url('../assets/img/brands/gucci-logo.png'); background-repeat: no-repeat; background-size: cover; background-position: center; cursor: pointer; }
.preorder-container__promotion__text { width: 100%; height: 40px; margin: 14px 0 0; }
.preorder-container__promotion__title { font-size: 14px; font-weight: 600; }
.preorder-container__promotion__subtitle { font-size: 12px; margin-top: 14px; }
</style>
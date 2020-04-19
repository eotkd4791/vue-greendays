<template>
  <div>
    <section>
      <header>PRE ORDER</header>
      <span @click="movePage('/')">#프리오더가 뭐에요?</span>
      <span @click="movePage('/')">{{ preOrder.name }}</span>
      <!-- 프리오더 행사 갯수만큼 뿌리기 -->
    </section>
    <section>
      <div>
        <!-- 이미지 -->
      </div>
      <h3>한정된 기간동안만 열리는 특별한 타임세일!</h3>
      <p>프리오더를 통해 낮은 금액으로 명품을 즉시 구매해보세요!</p>
      <p>단, 한정된 시간 동안만 구매할 수 있으니 서둘러주세요</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preOrder:[],
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
  },
  created() {
    // 프리오더 행사 가져오기 Vuex에서
  },
}
</script>

<style scoped>

</style>
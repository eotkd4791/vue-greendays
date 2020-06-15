<template>
  <div class="quick-container">
    <div class="quick-container__title">
      <span>Quick menu</span>
    </div>

    <div class="quick-container__btn">
      <div @click="movePage('/')">
        <i class="fas fa-truck" />
        <p>Free delivery</p>
        <p>배송가이드</p>
      </div>

      <div @click="movePage('/')">
        <i class="far fa-comments" />
        <p>FAQ</p>
        <p>자주 묻는 질문</p>
      </div>

      <div @click="movePage('/')">
        <i class="fas fa-phone-alt" />
        <p>Need help?</p>
        <p>고객 센터</p>
      </div>
      <div>
        <i class="far fa-comment-dots" />
        <p>Channel Talk</p>
        <p>채널톡</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    movePage(to) {
      if(to ==='#') return;
      if(this.$route.path !== to) {
        const nextPage = { path: to };
        this.$router.push(nextPage);
      }
    },
  }
}
</script>

<style scoped>
.quick-container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  font-family: 'Montserrat';
  background-color: #fff;
}
.quick-container__title {
  text-align: center;  
  border-top: 1px solid rgb(235,235,235);
  padding-top: 100px;
  margin-top: 100px;
  font-weight: 700;
}
.quick-container__btn {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 100px 0;
  cursor: pointer;
}
.quick-container__btn div>i {
  color: #42b883;
  font-size: 25px;
  padding-bottom: 40px;
  margin-bottom:  30px;
  border-bottom: 2px solid #42b883;
}
.quick-container__btn div p:nth-child(2) { margin: 0 0 9px; }
.quick-container__btn div p:nth-child(3) { color: #8b8b8b; font-size: 12px; }
</style>
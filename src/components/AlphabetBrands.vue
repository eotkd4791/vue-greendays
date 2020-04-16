<template>
  <div class="whole-brands">
    <div class=alphabet-container>
      <div class="alphabet-wrapper" ref="btnLetter">
        <div class="btn-alphabet" v-for="letter in alphabetBtn" :key="letter" @click="pickBrandsInitial">{{ letter }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alphabetBtn:['0-9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      brandsInitialAlphabet:[],
      currentPicked: 1,
    };
  },
  methods: {
    pickBrandsInitial(e) {
      console.log(e);
      //선택된 알파벳으로 시작하는 브랜드를 http통신을 불러오기
      this.$refs.btnLetter.children[this.currentPicked].classList.remove('alphabet-active');
      this.currentPicked = this.alphabetBtn.indexOf(e.target.textContent);
      this.$refs.btnLetter.children[this.currentPicked].classList.add('alphabet-active');
    },
  },
  mounted() {
    this.$refs.btnLetter.children[1].classList.add('alphabet-active');
  }
}
</script>

<style scoped>
.alphabet-wrapper {
  width: 360px;
  height: 122px;
  margin: 22px 0 0;
  padding: 0 0 22px 5px;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #EDEDED;
}
.btn-alphabet {
  width: 27px;
  height: 28px;
  font-size: 12px;
  font-weight: 500;
  margin: 3px;
  background-color: #f7f7f7;
  color: #888888;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.btn-alphabet:first-child {
  width: 62px;
}
.btn-alphabet.alphabet-active {
  color: #000;
  background-color: #42b883;
}
</style>
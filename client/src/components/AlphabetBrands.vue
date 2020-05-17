<template>
  <div class="whole-brands">
    <div class=alphabet-container>
      <div class="alphabet-wrapper" ref="btnLetter">
        <div class="btn-alphabet" v-for="letter in alphabetBtn" :key="letter" @click="pickBrandsInitial">{{ letter }}</div>
      </div>

      <div class="search-result">
        <ul class="brand-name">
          <li v-for="brandName in brandsResult" :key="brandName">
            <i class="fas fa-heart" @click="openAlarmBrand" />
            <router-link to="/">
              {{ brandName }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alphabetBtn:['0-9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      brandsInitialAlphabet: ["GUCCI", "BURBERRY", "BALENCIAGA", "PRADA", "VALENTINO", "SAINT LAURENT", "MAISION MARGIELA", "GOLDEN GOOSE","CELINE"," FENDI"],
      brandsResult: [],
      currentPicked: 1,
    };
  },
  methods: {
    pickBrandsInitial(e) {
      this.$refs.btnLetter.children[this.currentPicked].classList.remove('alphabet-active');
      this.currentPicked = this.alphabetBtn.indexOf(e.target.textContent);
      this.$refs.btnLetter.children[this.currentPicked].classList.add('alphabet-active');
      this.sortBrands();
    },
    sortBrands() {
      const emptyArr=[];
      this.brandsResult=emptyArr;
      for(let i=0; i<this.brandsInitialAlphabet.length; i++) {
        if(this.brandsInitialAlphabet[i][0]===this.alphabetBtn[this.currentPicked]) {
          this.brandsResult.push(this.brandsInitialAlphabet[i]);
        }
      }
    },
    openAlarmBrand(e) {
      const onClickBrand = e.target.nextElementSibling.text;
      this.$emit('openAlarmModal', onClickBrand);
    },
  },
  created() {
    //선택된 알파벳으로 시작하는 브랜드를 http통신을 불러와서
    //this.brandsInitialAlphabet에 넣기
    //alphabet-passive 클래스 추가하는 로직 구현하기 
    
    for(let i=0; i<this.brandsInitialAlphabet.length; i++) {
      if(this.brandsInitialAlphabet[i].slice(1)===this.alphabetBtn[this.currentPicked]) {
        this.brandsResult.push(this.brandsInitialAlphabet[i]);
      }
    }
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
  font-weight: 600;
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
.btn-alphabet.alphabet-passive {
  color: #dddddd;
  cursor:not-allowed;
}

.search-result {
  width:360px;
  height: 336px;
}
.brand-name>li {
  list-style-type: none;
  height:42px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #EDEDED;
  font-size: 12px;
  font-weight: 500;
}
.fa-heart {
  color:#d9d9d9;
  margin: 0 20px 0 24px;
  cursor:pointer;
}


</style>
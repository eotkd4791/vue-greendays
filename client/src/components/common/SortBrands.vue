<template>
  <transition name="modal">
    <div class="modal-container">
      <div class="modal-mask" />
      <div class="brand__search-container">
        <section class="brand__search-orderby">
          <div class="brand__search-btn">전체</div>
          <div class="brand__search-mid">
            <div
              class="brand__search-btn active"
              v-for="letter in letters"
              :key="letter"
            >{{ letter }}</div>
            <div class="brand__search-form">
              <form>
                <input type="text" placeholder="브랜드 검색하기" v-model="searchBrands" />
                <i class="fas fa-search" />
              </form>
            </div>
          </div>
          <button class="brand__search-close" @click="closeModal">창닫기</button>
        </section>
        <section class="brand__search-result">
          <div class="brand__search-wrapper">
            <span class="brand__search-brand" v-for="brand in brands" :key="brand">
              <i class="fas fa-heart picked" @click="openModal(brand)" />
              {{ brand }}
            </span>
            <!-- <div v-if="showModal" id="dark" /> -->
            <pick-brand-log-in
              class="brands__picking__modal-align"
              v-if="showModal && userInfo.name"
              @closeBrandsPickingModal="closeModal"
            >{{ brandInModal }}</pick-brand-log-in>
            <pick-brand-log-out
              class="brands__picking__modal-align"
              v-else-if="showModal"
              @closeBrandsPickingModal="closeModal"
            />
          </div>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import PickBrandLogIn from '@/components/PickBrandLogIn.vue';
import PickBrandLogOut from '@/components/PickBrandLogOut.vue';
import Bus from '@/utils/bus.js';

export default {
  components: {
    PickBrandLogIn,
    PickBrandLogOut
  },
  data() {
    return {
      userInfo: {},
      letters: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0-9','ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅋ','ㅌ','ㅊ','ㅎ','기타'],
      brands: ['ACNE', 'GUCCI', 'HALAL','sdfasdf','eeerrrr','qqqqqqqwqwq','fkldsjkl'],
      searchBrands: '',
      showModal: false,
      brandInModal:'',
    };
  },
  methods: {
    openModal(brandName) {
      this.brandInModal = brandName;
      this.showModal = true;
    },
    closeModal() {
      this.showModal=false;
      this.$emit('closeBrandSearchModal');
    },
    setScrollLock() {
      window.scrollTo(0,0);
    },
  },
  created() {
    this.userInfo = this.$store.state.userInfo;
    console.log(this.userInfo);
  },
  mounted() {
    window.addEventListener('scroll', this.setScrollLock);
    // 데이터에 특정 알파벳으로 시작하는 브랜드명이 없을 때 passive 클래스 있을 때 active
    // 고른 브랜드가 있으면 picked 클래스를 넣어준다.
  },
  beforeDestroy() {
    console.log('modal open');
    window.removeEventListener('scroll', this.setScrollLock);
  }
}
</script>

<style scoped>
.disable-scroll {
  width: 100%;
  height:100%;
  overflow: hidden;
  position: fixed;
}
.modal-container {
  width: 100%;
  height: 100%;
  font-size: 12px;
  font-weight: 400;
}

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8999;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: .9;
  transition: opacity 0.3s ease;
}

.brand__search-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1100px;
  height: 400px;
  position: relative;
  z-index: 9000;
}

.brand__search-orderby {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 1020px;
  height: 52px;
  margin: 30px 0 0 0;
  
}
.brand__search-mid {
  display: flex;
  flex-wrap: wrap;
  width: 840px;
  height: 52px;
}
.active {
  color: #000;
  background-color: #fff;
  cursor: pointer;
}
.passive {
  color: #a5a5a5;
  background-color: #f7f7f7;
  cursor: not-allowed;
}

.brand__search-btn:first-child {
  width: 55px;
  height: 52px;
  border-color: #000;
}
.brand__search-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #a5a5a5;
}

.brand__search-mid>.brand__search-btn {
  width: 25px;
  height: 24px;
  margin: 0 0 0 5px;
  border-color: #a5a5a5;
}
.brand__search-mid>.brand__search-btn:nth-child(46) {
  width: 48px;
}
.brand__search-mid>.brand__search-btn:nth-child(27) { width: 48px; margin: 0 0 0 5px; }
.brand__search-mid>.brand__search-btn:nth-child(n+28) { margin-top: 4px; }
.brand__search-form {
  width: 235px;
  height: 24px;
  border: 1px solid #a5a5a5;
  margin: 4px 0 0 5px;
}
.brand__search-form>form { height: 100%; }
.brand__search-form input {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 13px;
  border-style: none;
  outline-style: none;
  padding-left: 10px;
}

.fa-search {
  color: #8b8b8b;
  font-size: 14px;
  font-weight: 600;
  margin-right: 10px;
  position: relative;
  top: -18px;
  left: 210px;
}
.brand__search-form input[placeholder] { text-align: left; }
.brand__search-close {
  width: 55px;
  height: 24px;
  background-color: #393939;
  color: #fff;
  outline-style: none;
}
.brand__search-result {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin: 30px 0 0 0;
}
.brand__search-wrapper {
  width: 1020px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;  
}

.brand__search-brand {
  width: 190px;
  margin: 0 0 17px 0;
  cursor: pointer;
}
.fa-heart {
  color: #d8d8d8;
  margin: 0 8px 0 0;
}
.picked {
  color: #4dcf34;
}

.modal-enter { opacity: 0; }
.modal-leave-active { opacity: 0; }
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.brands__picking__modal-align {
  position: absolute;
  top: 0;
  left: 320px;
  vertical-align: middle;
}
</style>
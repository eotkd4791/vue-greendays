<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click.stop="onClickOutside">
        <div class="modal-container">
          <div class="modal-header">
            <header class="brand-modal-title">브랜드 검색</header>
            <button class="modal-default-button" @click="$emit('closeBrands')">
              <i class="fas fa-times" />
            </button>
          </div>

          <div class="modal-body">
            <div class="custom-pick-menu" ref="brands">
              <div class="brands-active" @click="changeTab">인기브랜드</div>|
              <div @click="changeTab">전체브랜드</div>
            </div>
            <pick-brand
              v-if="showModal"
              :propsBrand="pickedBrand"
              @closePickedBrands="closePickBrand"
            />
            <popular-brands v-if="pickBrands" @openAlarmModal="openPickBrand" />
            <alphabet-brands v-else @openAlarmModal="openPickBrand" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import PickBrand from './PickBrandModal.vue';
import AlphabetBrands from '../AlphabetBrands.vue';
import PopularBrands from '../PopularBrands.vue';

export default {
  components: {
    PickBrand,
    AlphabetBrands,
    PopularBrands,
  },
  data() {
    return {
      user: {},
      pickBrands: true,
      showModal: false,
      pickedBrand: ''
    };
  },
  methods: {
    onClickOutside(e) {
      if(e.target.className ==='modal-wrapper') {
        this.$emit('closeBrands');
      }
    },
    changeTab() {
      this.pickBrands = !this.pickBrands;
      this.$refs.brands.children[0].classList.toggle('brands-active');
      this.$refs.brands.children[1].classList.toggle('brands-active');
    },
    openPickBrand(payload) {
      this.showModal = true;
      this.pickedBrand = payload;
    },
    closePickBrand() {
      this.showModal = false;
    },
  },
  created() {
    this.pickBrands = true;
    this.user = this.$store.state.userInfo;
    // 생성되자마자 로그인 여부로 화면에 보여줄 모달 선택하는 로직 구현하기

    //알파벳 선택하는 로직 -> 디비에서 불러온 브랜드 이름이 하나도 없으면 passive라는 클래스를 추가한다.(cursor: not-allowed)
    //
  },

}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 420px;
  height: 612px;
  margin: 0px auto;
  background-color: #F7F7F7;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  width: 420px;
  height: 80px;
  margin-bottom: 10px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.modal-header>header{
  font-weight: 800;
  font-size: 18px;
}
.modal-body {
  height: 520px;
  padding: 0 30px;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.custom-pick-menu {
  width: 360px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  color: #bbbbbb;
  border-bottom: 1px solid #EDEDED;
}
.custom-pick-menu div {
  width: 179.5px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.brands-active {
  color: #42b883;
}

.modal-default-button {
  float: right;
  border-style: none;
  outline: none;
}
.modal-enter { opacity: 0; }
.modal-leave-active { opacity: 0; }
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
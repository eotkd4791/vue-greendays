<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="onClickOutside">
        <div class="modal-container">
          
          <div class="modal-header">
            <header class="brand-modal-title">브랜드 검색</header>
            <button class="modal-default-button" @click="$emit('close')">
              <i class="fas fa-times" />
            </button>
          </div>

          <div class="modal-body">
            <div class="custom-pick-menu" ref="brands">
              <div class="brands-active" @click="changeTab">
                인기브랜드
              </div> |
              <div @click="changeTab">
                전체브랜드
              </div>
            </div>

            <pick-brand v-if="showModal" @close="closePickBrand" />

            <div class="popular-brands" v-if="pickBrands">
              <div class="list-brands" v-for="brand in brandsList" :key="brand">
                <span class="brands-ranks">{{ brandsList.indexOf(brand) + 1 }}</span>
                <i class="fas fa-heart" @click="openPickBrand" />
                <router-link to="/">{{ brand }}</router-link>
              </div>
            </div>
            <div v-else>
              <div class="alphabet-container">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import PickBrand from './PickBrandModal.vue';

export default {
  components: {
    PickBrand,
  },
  data() {
    return {
      pickBrands: true,
      brandsList: ["GUCCI", "BURBERRY", "BALENCIAGA", "PRADA", "VALENTINO", "SAINT LAURENT", "MAISION MARGIELA", "GOLDEN GOOSE","CELINE"," FENDI"],
      showPickBrand: false,
      showModal: false,
    };
  },
  methods: {
    onClickOutside(e) {
      if(e.target.className ==='modal-wrapper') {
        this.$emit('close');
      }
    },
    changeTab() {
      this.pickBrands = !this.pickBrands;
      this.$refs.brands.children[0].classList.toggle('brands-active');
      this.$refs.brands.children[1].classList.toggle('brands-active');
    },
    openPickBrand() {
      this.showModal = true;
    },
    closePickBrand() {
      this.showModal = false;
    }
  },
  created() {
    this.pickBrands = true;
    
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

.popular-brands {
  width: 100%;
  height: 460px;
  display: flex;
  flex-direction: column;
}
.list-brands {
  padding: 15px 0;
  font-size: 11px;
  border-bottom: 1px solid #EDEDED;
}
.brands-ranks {
  margin: 0 10px 0 20px;
  color: #42b883;
  font-weight: 500;
  font-size: 12px;
}
.list-brands:last-child .brands-ranks {
  margin: 0 10px 0 14px;
}
.fas.fa-heart {
  margin: 0 20px 0 24px;
  color: #d9d9d9;
  cursor: pointer;
}


.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
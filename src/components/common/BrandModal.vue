<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="onClickOutside">
        <div class="modal-container">
          
          <div class="modal-header">
            <header class="brand-modal-title">브랜드 검색</header>
            <button class="modal-default-button" @click="$emit('close')">
              <i class="fas fa-times"></i>
            </button>
          </div>

          <div class="modal-body">
            <div>
              <div v-if="pickBrands" class="custom-pick-menu" ref="brands">
                <div class="brands-active" @click="changeTab">
                  인기브랜드
                </div> |
                <div @click="changeTab">
                  전체브랜드
                </div>
                <div class="list-brands" v-for="brand in brandsList" :key="brand">
                  <span>{{ brand.rank }}</span>
                  <i class="fas fa-heart"></i>
                  <span>{{ brand.name }}</span>
                </div>
              </div>

              <div v-else>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      pickBrands: true,
      brandsList: [],
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
        // <!-- v-if절의 조건이 잘못됨 !!!!!!!!! -->
      this.$refs.brands.children[0].classList.toggle('brands-active');
      this.$refs.brands.children[1].classList.toggle('brands-active');
    },
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
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click.stop="onClickOutside">
        <div class="modal-container-login" v-if="user.id!==''">
          <div class="header">
            <div class="title-button">
              <span class="title">
                브랜드 
                <span class="emphasis-title">Pick!</span>
                <button class="modal-close-button" @click="$emit('closePickedBrands')">
                  <i class="fas fa-times" />
                </button>
              </span>
            </div>

            <p>관심있는 카테고리를 PICK! 해주세요</p>
            <p>관련 상품 입고 시 알림을 보내드릴게요:)</p>
          </div>

          <div class="body">
            <div class="brand-name">{{ propsBrand }}</div>
            <ul>
              <li><i class="fas fa-heart" />Bags</li>
              <li><i class="fas fa-heart" />Clothes</li>
              <li><i class="fas fa-heart" />Shoes</li>
              <li><i class="fas fa-heart" />Accessories</li>
              <li><i class="fas fa-heart" />Wallets</li>
            </ul>
          </div>
        </div>

        <div class="modal-container-logout" v-if="user.id===''"></div>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props:['propsBrand'],
  data() {
    return {
      user: {},
      brandName:'',
    };
  },
  methods: {
    onClickOutside(e) {
      console.log(e);
      if(e.target.className === 'modal-wrapper') {
        this.$emit('closePickedBrands');
      }
    }
  },
  mounted() {
    this.user = this.$store.state.userInfo;
    console.log(this.user);
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

.modal-container-login {
  width: 320px;
  height: 454px;
  margin: 0px auto;
  border-radius: 10px;
  padding: 40px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.header  {
  width:240px;
  height:88px;
  padding: 0 0 16px;
}
.title {
  display: block;
  font-size: 20px;
  margin: 0 0 20px;
}
.emphasis-title {
  font-weight: 600;
}

.header p {
  font-size: 10px;
}

.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: 290px;
  margin: 20px 0;
  border-top: 1px solid #42b883;
  border-bottom: 1px solid #42b883;
}

.brand-name {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 60px;
  font-size: 16px;
  padding: 0 40px;
}

.body li {
  list-style-type: none;  
  display: flex;
  justify-content: flex-begin;
  align-items: center;
  width: 240px;
  height: 45px;
  border-top: 1px solid #EDEDED;
  font-size: 12px;
}

.fa-heart {
  margin: 18px;
  color: #d9d9d9
}





.modal-close-button {
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
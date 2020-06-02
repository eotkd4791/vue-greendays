<template>
  <div class="logo" @click="movePage('/')">
    <div v-if="userInfo" class="user-info-point" @click.stop="movePage('/mypoint')">
      <span class="user-info-text">{{ points }}</span>
      <span class="point-icon fas fa-coins" />
    </div>
    <span
      class="user-info fas fa-user"
      ref="userInfo"
      @click.stop="userInfo.name ? toggleUserInfo() : movePage('/login')"
    ></span>
    <span
      class="user-info far fa-heart"
      @click.stop="userInfo.name ? movePage('/wishlist') : movePage('/login')"
      style="color: #42b883"
    ></span>
    <span v-if="userInfo.name" class="user-info-text">{{ pickedProducts }}</span>
    <span
      class="user-info fas fa-shopping-basket"
      @click.stop="userInfo.name ? movePage('/cartitems') : movePage('/login')"
    ></span>
    <span class="user-info-text">{{ cartItems }}</span>
  </div>
</template>

<script>

export default {
  data() {
    return {
      points: 11000,
      pickedProducts: 0,
      productsInBasket: 0,
      menuHover: false,
      cartItems: 0,
      showUserInfo: false,
      userInfo: {},
    };
  },
  methods: {
    movePage(to) {
      if(to ==='#') return;
      if(this.$route.path !== to) {
        const nextPage = { path: to };
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        this.$router.push(nextPage);
      }
    },
    toggleUserInfo() {
      if(this.showUserInfo) { //열려진 상태에서 닫기
        this.$emit('userInfoClose');
        this.$refs.userInfo.style.setProperty('color','#000');
      } else {
        this.$emit('userInfoOpen'); // 닫혀진 상태에서 열기
        this.$refs.userInfo.style.setProperty('color','#42b883');
      }
      this.showUserInfo = !this.showUserInfo;
    },
  },
  created() {
    this.userInfo = this.$store.state.userInfo;
  }
}
</script>

<style scoped>
.logo {
  max-width: 1100px;
  height: 40px;
  margin: 15px auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-image: url("../assets/img/greendays.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}
.user-info {
  margin-left: 20px;
}
.user-info-point {
  color: #42b883;
}
.fas.fa-coins {
  margin-left: 5px;
  margin-right: 10px;
}
.fa-user {
  color: #000;
}
.active {
  color: #42b883;
}
.user-info-text {
  margin-left: 5px;
  font-size: 13px;
}
</style>
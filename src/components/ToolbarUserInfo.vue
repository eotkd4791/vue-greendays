<template>
  <div class="logo" @click="movePage('/')">
    <div v-if="userLoggedIn" class="user-info-point" @click.stop="movePage('/mypoint')">
      <span class="user-info-text">{{ points }}</span>
      <span class="point-icon fas fa-coins" />
    </div>
    <span class="user-info fas fa-user" @click.stop="userLoggedIn ? toggleUserInfo : movePage('/login')"></span>
    <span class="user-info far fa-heart" @click.stop="userLoggedIn ? movePage('/wishlist') : movePage('/login')" style="color: #42b883"></span>
    <span v-if="userLoggedIn" class="user-info-text">{{ pickedProducts }}</span>
    <span class="user-info fas fa-shopping-basket" @click.stop="userLoggedIn ? movePage('/cartitems') : movePage('/login')"></span>
    <span class="user-info-text">{{ cartItems }}</span>
  </div>
</template>

<script>
export default {
  props:['userLoggedIn'],
  data() {
    return {
      points: 11000,
      pickedProducts: 0,
      productsInBasket: 0,
      menuHover: false,
      cartItems: 0,
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
    toggleUserInfo() {
      this.showUserInfo = !this.showUserInfo;
    },
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

.user-info-text {
  margin-left: 5px;
  font-size: 13px;
}
</style>
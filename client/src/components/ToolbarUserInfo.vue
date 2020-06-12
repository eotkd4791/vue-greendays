<template>
  <div class="logo" @click="movePage('/')">
    <div v-if="getUserInfo.name" class="user-info-point" @click.stop="movePage('/mypoint')">
      <span class="user-info-text">{{ points }}</span>
      <span class="point-icon fas fa-coins" />
    </div>
    <span
      class="user-info fas fa-user"
      ref="userInfo"
      @click.stop="getUserInfo.name ? toggleUserInfo() : movePage('/login')"
    ></span>
    <span
      class="user-info far fa-heart"
      @click.stop="getUserInfo.name ? movePage('/wishlist') : movePage('/login')"
    ></span>
    <span v-if="getUserInfo.name" class="user-info-text">{{ pickedProducts }}</span>
    <span
      class="user-info fas fa-shopping-basket"
      @click.stop="getUserInfo.name ? movePage('/cartitems') : movePage('/login')"
    ></span>
    <span class="user-info-text">{{ cartItems }}</span>
  </div>
</template>

<script>
import Bus from '@/utils/bus.js';

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
  computed: {
    getUserInfo() {
      return this.$store.state.userInfo;
    }
  },
  methods: {
    movePage(to) {
      if(to ==='#') return;
      if(this.$route.path !== to) {
        const nextPage = { path: to };
        this.$router.push(nextPage);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    },
    toggleUserInfo() {
      this.$refs.userInfo.classList.toggle('active');
      this.showUserInfo = !this.showUserInfo;
      Bus.$emit('showUserInfo', this.showUserInfo);
    },
  },
  mounted() {
    Bus.$on('userInfoToggle', this.toggleUserInfo);
  },
  beforeDestroy() {
    Bus.$off('userInfoToggle', this.toggleUserInfo);
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

.fas, .far {
  padding: 5px 5px;
}

.fa-coins {
  margin-left: 5px;
  margin-right: 10
}
.fa-heart {
  color: #42b883
}
.fa-user {
  color: #000;
}
.fa-user.active {
  color: #42b883;
}
.user-info-text {
  margin-left: 5px;
  font-size: 13px;
}
</style>
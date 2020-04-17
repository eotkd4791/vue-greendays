<template>
  <div>  
    <header id="header">
      <div class="container-logo">
        <div class="logo" @click="movePage('/')">
          <div v-if="user.isLoggedIn" class="user-info-point" @click.stop="movePage('/mypoint')">
            <span class="user-info-text">{{ points }}</span>
            <span class="point-icon fas fa-coins" />
          </div>
          <span v-if="user.isLoggedIn" class="far fa-calendar-check" @click.stop="movePage('/monthlypromotion')"></span>
          <span class="user-info fas fa-user" @click.stop="user.isLoggedIn ? toggleUserInfo : movePage('/login')"></span>
          <span class="user-info far fa-heart" @click.stop="user.isLoggedIn ? movePage('/wishlist') : movePage('/login')" style="color: #42b883"></span>
          <span v-if="user.isLoggedIn" class="user-info-text">{{ pickedProducts }}</span>
          <span class="user-info fas fa-shopping-basket" @click.stop="user.isLoggedIn ? movePage('/cartitems') : movePage('/login')"></span>
          <span class="user-info-text">{{ cartItems }}</span>
        </div>
        <toolbar-menu 
          @onToolbarModal="openToolbarModal"
          @onSearchBrands="openSearchBrands"
          @offToolbarModal="closeToolbarModal"
        ></toolbar-menu>
      </div>
  </header>
  <toolbar-modal v-if="showModal && showToolbarModal" @mouseEsc="closeToolbarModal"></toolbar-modal>
  <brand-modal v-if="showModal && SearchBrandsModal" @closeBrands="closeSearchBrands"></brand-modal>
</div>
</template>
 
<script>
import ToolbarModal from '../components/common/ToolbarModal.vue';
import BrandModal from '../components/common/BrandModal.vue';
import ToolbarMenu from '../components/ToolbarMenu.vue';

export default {
  components: {
    ToolbarModal,
    BrandModal,
    ToolbarMenu,
  },
  data() {
    return {
      user:{},
      points: 11000,
      pickedProducts: 0,
      productsInBasket: 0,
      menuHover: false,
      showUserInfo: false,
      cartItems: 0,

      showModal: false,
      showToolbarModal: false,
      SearchBrandsModal: false,
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
    openToolbarModal() {
      this.showToolbarModal = true;
      this.showModal = true;
    },
    closeToolbarModal() {
      this.showToolbarModal = false;
      this.showModal = false;
    },
    openSearchBrands() {
      this.showModal = true;
      this.SearchBrandsModal = true;
    },
    closeSearchBrands() {
      this.showModal = false;
      this.SearchBrandsModal = false;
    },
  },
  created() {
    this.user = this.$store.state.userInfo;
  }
}
</script>

<style>
#header {
  width: 100%;
  height: 115px;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 9000;
}

.container-logo {
  max-width: 1100px;
  height: 70px;
  margin: auto;
}
.logo {
  height: 40px;
  width: 100%;
  margin: 15px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-image: url("../assets/img/greendays.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}
.logo .user-info {
  margin-left: 20px;
}
.user-info-point {
  color: #42b883;
}

.fas.fa-coins {
  margin-left: 5px;
  margin-right: 20px;
}
.container-menu {
  height: 36px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.user-info-text {
  margin-left: 5px;
}

/* 툴바 왼쪽 하단 메뉴 */

</style>
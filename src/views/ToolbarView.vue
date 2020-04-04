<template>
  <header id="header">
    <div class="container-logo">
      <div class="logo" @click="movePage('/')">
        <div v-if="isLoggedIn" class="user-info-point" @click.stop="movePage('/mypoint')">
            <span class="user-info-text">{{ points }}</span>
            <span class="point-icon fas fa-coins"></span>
        </div>
        <span v-if="isLoggedIn" class="far fa-calendar-check" @click.stop="movePage('/monthlypromotion')"></span>
        <span class="user-info fas fa-user" @click.stop="isLoggedIn ? toggleUserInfo : movePage('/login')"></span>
        <span class="user-info far fa-heart" @click.stop="isLoggedIn ? movePage('/wishlist') : movePage('/login')" style="color: #42b883"></span>
        <span v-if="isLoggedIn" class="user-info-text">{{ pickedProducts }}</span>
        <span class="user-info fas fa-shopping-basket" @click.stop="isLoggedIn ? movePage('/cartitems') : movePage('/login')"></span>
        <span class="user-info-text">{{ cartItems }}</span>
      </div>
      <!-- 메뉴 구분 -->
      <div class="container-menu">
        <div class="menus">
          <router-link to="/products">예약구매<span id="purchase-reserve">💚</span></router-link>
          <router-link to="#">프리오더</router-link>
          <router-link to="/products">빠른배송</router-link>
          <router-link to="/reviews">리뷰</router-link>
          <router-link to="/customerservice">고객센터</router-link>
        </div>
        <div class="row-right-menu">
          <div class="search-brand-modal" @click="toggleSearchBrands">
            <span class="new-released-item">🎁</span>
            <span>브랜드 검색</span>
          </div>
          <div class="search-brand-form">
            <form>
              <input type="text" placeholder="검색어를 입력해 주세요"/>
              <i class="fas fa-search"></i>
            </form>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      points: 11000,
      pickedProducts: 0,
      productsInBasket: 0,
      menuHover: false,
      showUserInfo: false,
      cartItems: 0,

      SearchBrandsModal: false,
    };
  },
  methods: {
    movePage(to) {
      const nextPage = { path: to };
      this.$router.push(nextPage);
    },
    toggleUserInfo() {
      this.showUserInfo = !this.showUserInfo;
    },
    toggleSearchBrands() {
      this.SearchBrandsModal = !this.SearchBrandsModal; 
    }
  },
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
  justify-content: space-between;
  align-items: center;
}
.user-info-text {
  margin-left: 5px;
}

/* 툴바 왼쪽 하단 메뉴 */
.menus>a {
  margin-right: 16px;
  font-size: 13px;
  padding: 5px 4px;
}
.menus>a:first-child {
  margin-left: 10px;
}
.menus>a:hover {
  border-bottom: 3px solid #42b883;
}
/* ------------------- */


#purchase-reserve {
  font-size: 10px;
}
.row-right-menu {
  display: flex;
  align-items: center;
}
.search-brand-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 114px;
  height: 36px;
  margin-right: 10px;
  border: 1px solid #000;
  position: relative;
}
.search-brand-modal span {
  font-size: 13px;
  font-weight: 500;
}
input {
  border-style: none;
}
.search-brand-form {
  width: 232px;
  height: 36px;
  border: 1px solid #000;
}
.new-released-item {
  font-size: 12px;
  filter: drop-shadow(2px 2px 2px #000);
  position: absolute;
  top: 0;
  left: 0;
  margin-left: -6px;
  margin-top: -8px;
}
.search-brand-form form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.search-brand-form input {
  width: 100%;
  height: 33px;
  text-align: center;
}
.fa-search {
  color: #8b8b8b;
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  right: 0;
  margin-right: 10px;
}

/* 브랜드 검색 영역 */
.search-brand-modal {
  cursor: pointer;
}
</style>
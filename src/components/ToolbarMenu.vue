<template>
  <div class="container-menu">
    <div class="menus">
      <div class="modal-active">
        <span class="anchor-wrapper" @mouseover="mouseOverOnMenu">
          <router-link to="/products">
            예약구매
            <span id="purchase-reserve">💚</span>
          </router-link>
        </span>
        <span class="anchor-wrapper" @mouseover="mouseOverOnMenu">
          <a @click="movePage('#')">프리오더</a>       
        </span>
        <span class="anchor-wrapper" @mouseover="mouseOverOnMenu">
          <router-link to="/products">빠른배송</router-link>
        </span>
      </div>
      <div class="modal-passive" @mouseover="mouseLeaveFromMenu">
        <router-link to="/reviews">리뷰</router-link>
        <router-link to="/customerservice">고객센터</router-link>
      </div>
    </div>
    <div class="row-right-menu">
      <div class="search-brand-modal" @click="onClickSearchBrands">
        <span class="new-released-item">🎁</span>
        <span>브랜드 검색</span>
      </div>
      <div class="search-brand-form" @click="mouseOverOnMenu">
        <form>
          <input type="text" placeholder="검색어를 입력해 주세요" v-model="searchBrands" />
          <i class="fas fa-search" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchBrands: '',
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
    mouseOverOnMenu(e) {
      const whichMenu = e.target.textContent;
      this.$emit('onToolbarModal', whichMenu);
    },
    mouseLeaveFromMenu() {
      this.$emit('offToolbarModal');
    },
    onClickSearchBrands() {
      this.$emit('onSearchBrands');
    },
  }, 
}
</script>

<style scoped>
.container-menu {
  max-width: 1100px;
  height: 36px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.menus {
  display: flex;
}
.menus a {
  margin-right: 20px;
  font-size: 13px;
  padding: 5px 0;
  cursor: pointer;
}
.anchor-wrapper {
  padding: 10px 0;
}
.menus a:hover {
  border-bottom: 3px solid #42b883;
}
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
  font-size: 13px;
  outline-style: none;
}
.fa-search {
  color: #8b8b8b;
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  right: 0;
  margin-right: 10px;
}
.search-brand-modal {
  cursor: pointer;
}
</style>
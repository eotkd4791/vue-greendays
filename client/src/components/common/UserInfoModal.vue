<template>
  <div class="userinfo__modal-container">
    <div class="userinfo__modal-wrapper">
      <section class="userinfo_section">
        <ul>
          <router-link tag="li" to="/user">{{ userInfo.name }}</router-link>
          <li>{{ `내 추천 코드 ${userInfo.promotionCode}` }}</li>
          <router-link tag="li" to="/user">내 정보 관리</router-link>
          <router-link tag="li" to="/user">주문 및 반품 내역</router-link>
          <router-link tag="li" to="/user">포인트</router-link>
          <router-link tag="li" to="/logout">로그아웃</router-link>
        </ul>
      </section>
      <aside class="userinfo__aside">
        <i class="fas fa-times" ref="closeBtn" @click="closeUserInfo" />
        <ul>
          <li>
            <em>결제완료</em>
            <strong>{{ userInfo.orderDone.length }}</strong>
          </li>
          <li>
            <em>배송중</em>
            <strong>{{ userInfo.delivering.length }}</strong>
          </li>
          <li>
            <em>반품/교환</em>
            <strong>{{ userInfo.changeOrRefund.length }}</strong>
          </li>
        </ul>
        <button>주문 및 반품 내역</button>
      </aside>
    </div>
  </div>
</template>

<script>
import Bus from '@/utils/bus.js';

export default {
  props: ['userInfo'],
  methods: {
    closeUserInfo() {
      this.$refs.closeBtn.classList.add('rotation');
      const timer = setTimeout(() => {
        clearTimeout(timer);  
        Bus.$emit('userInfoToggle');
      }, 1000);
    }
  },
}
</script>

<style scoped>
.userinfo__modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 280px;
  background-color: #f8f8f8;
  font-size: 14px;
}

.userinfo__modal-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
}

.fa-times {
  font-size: 33px;
  margin-bottom: 55px;
  border-style: none;
  outline: none;
  cursor: pointer;
  
}
.fa-times.rotation {
  animation-name: rotating;
  animation-duration: .6s;
  animation-iteration-count: 1;
}

.userinfo_section {
  width: 810px;
  height: 235px;
  margin-top: 44px;
  font-weight: 500;
}

.userinfo_section li {
  width: 100%;
  margin: 0 0 20px;
  cursor: pointer;
}

.userinfo_section li:first-child {
  font-size: 20px;  
}

.userinfo_section li:nth-child(2) {
  color: #42b850;
  cursor: default;
}

.userinfo__aside {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 290px;
  height: 235px;
  margin-top: 44px;
}

.userinfo__aside>ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
}

.userinfo__aside li {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo__aside li>em {
  display: block;
  font-size: 13px;
}

.userinfo__aside li>strong{
  font-size: 36px;
}

.userinfo__aside>button {
  width: 100%;
  height: 36px;
  background-color: #393939;
  color: #fff;
}

@keyframes rotating {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(2turn);
  }
}
</style>
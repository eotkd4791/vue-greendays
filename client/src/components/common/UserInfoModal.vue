<template>
  <div class="userinfo__modal-container">
    <div class="userinfo__modal-wrapper">
      <section class="userinfo__modal-list">
        <ul>
          <li>
            <router-link to="/user">{{ userInfo.name }}</router-link>
          </li>
          <li>{{ `내 추천 코드 ${userInfo.promotionCode}` }}</li>
          <li>
            <router-link to="/user">내 정보 관리</router-link>
          </li>
          <li>
            <router-link to="/user">주문 및 반품 내역</router-link>
          </li>
          <li>
            <router-link to="/user">포인트</router-link>
          </li>
          <li>
            <router-link to="/logout">로그아웃</router-link>
          </li>
        </ul>
      </section>
      <aside class="userinfo__modal-order">
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
ul {
  list-style-type: none;
}
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

@keyframes rotating {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(2turn);
  }
}

.userinfo__modal-list {
  width: 810px;
  height: 235px;
  margin-top: 44px;
  font-weight: 500;
}

.userinfo__modal-list li {
  width: 100%;
  margin: 0 0 20px;
}

.userinfo__modal-list li:first-child {
  font-size: 20px;  
}

.userinfo__modal-list li:nth-child(2) {
  color: #42b850;
}

.userinfo__modal-order {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 290px;
  height: 235px;
  margin-top: 44px;
}

.userinfo__modal-order>ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
}

.userinfo__modal-order li {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo__modal-order li>em {
  display: block;
  font-size: 13px;
}
.userinfo__modal-order li>strong{
  font-size: 36px;
}

.userinfo__modal-order>button {
  width: 100%;
  height: 36px;
  background-color: #393939;
  color: #fff;
}
</style>
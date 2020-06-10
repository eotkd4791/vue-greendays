<template>
  <transition name="modal">
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
            <router-link to="/logout">
              <li>로그아웃</li>
            </router-link>
          </ul>
        </section>
        <section class="userinfo__modal-order">
          <i class="fas fa-times" @click="closeUserInfo" />
          <div>
            <div>
              <span>결제완료</span>
              <span>{{ userInfo.orderDone.length }}</span>
            </div>
            <div>
              <span>배송중</span>
              <span>{{ userInfo.delivering.length }}</span>
            </div>
            <div>
              <span>반품/교환</span>
              <span>{{ userInfo.changeOrRefund.length }}</span>
            </div>
          </div>
          <button>주문 및 반품 내역</button>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import Bus from '@/utils/bus.js';

export default {
  props: ['userInfo'],
  methods: {
    closeUserInfo() {
      Bus.$emit('userInfoToggle');
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
}
.userinfo__modal-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
}

.fa-times {
  border-style: none;
  outline: none;
  cursor: pointer;
}
.modal-enter { opacity: 0; }
.modal-leave-active { opacity: 0; }
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
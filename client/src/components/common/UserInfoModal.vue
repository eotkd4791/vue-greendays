<template>
  <transition name="modal">
    <div class="userinfo__modal-container">
      <div class="userinfo__modal-wrapper">
        <section class="userinfo__modal-list">
          <ul>
            <router-link to="/user">
              <li>{{ userInfo.name }}</li>
            </router-link>
            <router-link to="/user">
              <li>{{ `내 추천 코드 ${userInfo.promotionCode}` }}</li>
            </router-link>
            <user-info-list></user-info-list>
            <router-link to="/logout">
              <li>로그아웃</li>
            </router-link>
          </ul>
        </section>
        <section class="userinfo__modal-order">
          <i class="fas fa-times" @click="$emit('closeUserInfo')" />
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
import UserInfoList from '@/components/common/UserInfoList.vue';

export default {
  components: { UserInfoList },
  props: ['userInfo'],
}
</script>

<style scoped>
.userinfo__modal-container {
  display: flex;
  
  width:100%;
  height: 280px;
}
.modal-default-button {
  float: right;
  border-style: none;
  outline: none;
}
.modal-enter { opacity: 0; }
.modal-leave-active { opacity: 0; }
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
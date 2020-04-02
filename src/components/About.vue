<template>
  <footer class="container">
    <section class="info-greendays">
      <div>
        <router-link to="/notice">공지사항</router-link>|
        <router-link to="/notice">자주묻는질문</router-link>|  
        <router-link to="/notice">이용약관</router-link>|  
        <router-link to="/notice">개인정보취급방침</router-link>|
        <router-link to="/notice">사업자정보확인</router-link>
      </div>
      <p>
        <span>(주)그린데이즈</span>|
        <span>대표이사 유대상</span>|
        <span>사업자등록번호 123-45-11223</span>|
        <span>통신판매업신고 2020-인천학익-12345</span>
      </p>
      <p>
        <span>eotkd4791@gmail.com</span>|
        <span>032-866-XXXX</span>|
        <span>인천시 미추홀구 학익소로61번길 132</span>|
        <span>개인정보관리책임자 유대상</span>
      </p>      
      <p>Copyright © 2020 GreenDays Inc. All rights reserved.</p>
    </section>
    <section class="menu-footer">
      <div class="cs-menu">
        <p>CUSTOMER SERVICE</p>
        <router-link to="/customer">무엇을 도와드릴까요?</router-link>
        <router-link to="/faq">주문 & 배송</router-link>
        <router-link to="/faq">결제 & 가격</router-link>
        <router-link to="/faq">반품 & 환불</router-link>
      </div>
      <div class="about-gdays">
        <p>ABOUT GREENDAYS</p>
        <router-link to="/introduction">그린데이즈 소개</router-link>
      </div>
    </section>
  </footer>
</template>

<script>
import { router } from '../routes/index.js';

export default {
  router,
}
</script>

<style scoped>
p {
  margin: 0 0 14px 0;
}
/* section 1 */
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0 150px;
  padding: 50px 0;
}
a {
  text-decoration: none;
  color: #767676;
  font-size: 13px;
  padding: 0 5px;
}
.info-greendays {
  font-size: 12px;
  font-weight: 500;
  color: #B8B8B8;
}
.info-greendays p:nth-child(4) {
  padding: 10px 5px;
}
.info-greendays div {
  padding: 0 0 20px 0;
}
.info-greendays p span {
  padding: 0 5px;
}

/* section 2 */
.menu-footer div p{
  color: #464646;
  font-size: 14px;
}
.cs-menu {
  float: left;
  padding-right: 50px;
}
.about-gdays {
  float: left;
}
.menu-footer::after {
  content:'';
  clear: left; 
}
.cs-menu a, .about-gdays a {
  display: block;
  padding: 0 0 7px 0;
  color: #B8B8B8;
}


</style>
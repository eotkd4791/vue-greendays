<template>
  <div class="container">
    <section class="contact-detail">
      <div>무엇이든 물어보세요!</div>
      <div>
        <i class="fas fa-info"></i>
        <span class="contact-chat">1 : 1 실시간 문의</span>
        <i class="fas fa-chevron-right"></i>
      </div>
      
      <p>Tel. 032-866-XXXX</p>
      <p>AM 09:30 ~ PM 18:00</p>
      <p>CLOSED (SAT, SUN HOLIDAY)</p>
     
    </section>
    <section class="bank-detail">
      <div class="bank-header">BANK ACCOUNT</div>
      <p>신한은행 110-359-XXXXXX</p>
      <p>예금주:(주)그린데이즈</p>
    </section>
    <aside>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-github"></i>
    </aside>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* section */
  .container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: #F8F8F8;
    height: 260px;
    color: #8b8b8b;
    font-size: 14px;
    position: relative;
    top: 10;
  }
  section {
    margin: 40px 0 0 150px ;
  }
  section div {
    margin-bottom: 40px;
  }
  .contact-detail div:nth-child(2) {
    margin: 30px 0;
  }
  p {
    margin: 10px 0;
  }
  .fa-info {
    font-size: 20px;
    margin-right: 5px;
  }
  .fa-chevron-right {
    font-size: 5px;
    margin-left: 2px;
  }
  .contact-chat {
    color: #464646;
    font-size: 13px;
  }
  .bank-header {
    font-size: 14px;
    font-weight: 500;
  }

  /* aside */
  aside {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    margin-left: 500px;
  }
  aside i {
    font-size: 30px;
    margin: 0 0 19px 14px;
  }
</style>
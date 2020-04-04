<template>
  <div class="container">
    <div class="container-title">
      <span>Quick menu</span>
    </div>

    <div class="container-btn">
      <div>
        <i class="fas fa-truck"></i>
        <p>Free delivery</p>
        <p>배송가이드</p>
      </div>

      <div>
        <i class="far fa-comments" />
        <p>FAQ</p>
        <p>자주 묻는 질문</p>
      </div>

      <div>
        <i class="fas fa-phone-alt" />
        <p>Need help?</p>
        <p>고객 센터</p>
      </div>
      <div> <!--채널톡 -->
        <i class="far fa-comment-dots" />
        <p>Channel Talk</p>
        <p>채널톡</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 150px 150px 0 150px;
  position: relative;

  bottom: 500;
}
.container .container-title {
  text-align: center;  
  border-top: 1px solid rgb(235,235,235);
  padding-top: 100px;
  margin: 40px 0px 0px;
}
.container-btn {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  text-align: center;
  margin: 100px 0;
}

.container-btn div>i {
  color: #42b883;
  font-size: 25px;
  padding-bottom: 40px;
  margin-bottom:  30px;
  border-bottom: 2px solid #42b883;
}
.container-btn div p:nth-child(2) {
  margin: 0 0 9px;
}
.container-btn div p:nth-child(3) {
  color: #8b8b8b;
  font-size: 12px;
}
</style>
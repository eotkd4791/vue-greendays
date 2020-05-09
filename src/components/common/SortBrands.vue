<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-container">
        <!-- 모달 마스크에 정렬 툴바 가려지는 문제 해결하기 -->
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {

    };
  },
}
</script>

<style scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-enter { opacity: 0; }
.modal-leave-active { opacity: 0; }
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
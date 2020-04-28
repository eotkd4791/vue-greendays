<template>
  <div class="footer-container">
    <quick-menu />
    <contact-info />
    <about-greendays />
    <img src="../assets/img/green-present.png" />
  </div>
</template>

<script>
import QuickMenu from '../components/QuickMenu.vue';
import ContactInfo from '../components/ContactInfo.vue';
import AboutGreendays from '../components/About.vue';

export default {
  components: {
    QuickMenu,
    ContactInfo,
    AboutGreendays
  }
}
</script>

<style scoped>
img {
  display: block;
  width: 70px;
  height: 70px;
  filter: drop-shadow(5px 5px 5px #000);
  position: fixed;
  bottom: 30px; 
  right: 30px;
  z-index: 9999;
  cursor: pointer;
}
</style>
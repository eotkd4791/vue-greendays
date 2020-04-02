<template>
  <div>
    <quick-menu></quick-menu>     
    <contact-info></contact-info>
    <about-view></about-view>
    <img id="channel-talk" src="../assets/green-present.png" width="70px" height="70px" />
  </div>
</template>

<script>
import QuickMenu from '../components/QuickMenu';
import ContactInfo from '../components/ContactInfo';
import AboutView from '../components/About'
export default {
  components: {
    QuickMenu,
    ContactInfo,
    AboutView
  }
}
</script>

<style>
  #channel-talk {
     filter: drop-shadow(5px 5px 5px #000);
     position: fixed;
     bottom: 30px; 
     right: 30px;
     cursor: pointer;
  }
</style>
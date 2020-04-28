<template>
  <main>
    <toolbar-view />
    <router-view />
    <footer-view />
  </main>
</template>

<script>
import ToolbarView from '@/views/ToolbarView.vue';
import FooterView from '@/views/FooterView.vue';

export default { 
  components: {
    ToolbarView,
    FooterView,
  },
}
</script>

<style scoped>
@import './style/reset.css';
@font-face { font-family: 'Montserrat'; src: url('./assets/fonts/Montserrat-Light.ttf'); } 
main { 
  display: flex; 
  flex-direction: column; 
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}
</style>
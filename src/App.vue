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
@import './plugins/reset.css';
@font-face { font-family: 'Montserrat'; src: url('./assets/fonts/Montserrat-Light.ttf'); } 
main { display: flex; flex-direction: column; }
</style>
<template>
  <main onselectstart="return false">
    <toolbar-view />
    <div v-if="onSpace" class="space" />
    <router-view />
    <footer-view />
  </main>
</template>

<script>
import ToolbarView from '@/views/ToolbarView.vue';
import FooterView from '@/views/FooterView.vue';
import Bus from '@/utils/bus.js';

export default { 
  components: {
    ToolbarView,
    FooterView,
  },
  data() {
    return {
      onSpace: false,
    };
  },
  mounted() {
    Bus.$on('showUserInfo', () => {
      this.onSpace = !this.onSpace;
    });
  },
}
</script>

<style>
@import './style/reset.css';
@font-face { font-family: 'Montserrat'; src: url('./assets/fonts/Montserrat-Light.ttf'); } 
main { 
  display: flex; 
  flex-direction: column; 
  width: 100%;
  margin: 0 auto;
}
.space {
  width: 100%;
  height: 280px;
}
</style>
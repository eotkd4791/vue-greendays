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
/*---------------------------
      > color table <

    brightgray:     #F7F7F7
    gray:           #f8f8f8
    gray:           #EDEDED
    darkgray:       #8b8b8b
    neon-off:       #7C7C7C
    midgray:        #757575
    gray:           #D9D9D9

    neon-on:        #8bc34a
    neon-shadow:    #4dcf34
    green:          #42b883
    dark-green:     #42b850
    mint:           #9AECDB
    dark-mint:      #9AECB0
-----------------------------*/

@import "./plugins/reset.css";
@font-face { font-family: 'Montserrat'; src: url('./assets/fonts/Montserrat-Light.ttf'); } 
main { display: flex; flex-direction: column; }
</style>
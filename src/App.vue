<template>
  <main>
    <toolbar-view></toolbar-view>
    <router-view></router-view>
    <footer-view></footer-view>
  </main>
</template>

<script>
import ToolbarView from './views/ToolbarView.vue';
import FooterView from './views/FooterView.vue';

export default { 
  components: {
    ToolbarView,
    FooterView,
  },
}
</script>

<style>
/*---------------------------
      > color table <

    green:          #42b883
    gray:           #f8f8f8
    midgray:        #757575
    darkgray:       #8b8b8b

    mint:           #9AECDB

    neon-off:       #7C7C7C
    neon-on:        #8bc34a
    neon-shadow:    #4dcf34
-----------------------------*/

  @import "./plugins/reset.css";
  body {
    width: 100%;
  }
</style>
<template>
  <main>
    <toolbar-view></toolbar-view>
    <!-- <transition name="fade"> -->
    <router-view></router-view>
    <!-- </transition> -->
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

    brightgray:     #F7F7F7
    gray:           #f8f8f8
    gray:           #EDEDED
    darkgray:       #8b8b8b
    neon-off:       #7C7C7C
    midgray:        #757575

    neon-on:        #8bc34a
    neon-shadow:    #4dcf34
    green:          #42b883
    mint:           #9AECDB
-----------------------------*/

  @import "./plugins/reset.css";
  body {
    width: 100%;
  }
</style>
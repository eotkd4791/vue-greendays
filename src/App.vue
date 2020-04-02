<template>
  <div>
    <toolbar-view></toolbar-view>
    <router-view></router-view>
    <footer-view></footer-view>
  </div>
</template>

<script>
import ToolbarView from './views/ToolbarView.vue';
import FooterView from './views/FooterView.vue';
// import { router } from './routes/index.js';
export default { 
  components: {
    ToolbarView,
    FooterView,
  },
  // router,
}
</script>

<style>
/*---------------------------
        > color table <

    green:          #42b883
    gray:           #f8f8f8
    midgray:        #757575
    darkgray:       #8b8b8b
-----------------------------*/

  @import "./plugins/reset.css";
  body {
    width: 100%;
  }
</style>
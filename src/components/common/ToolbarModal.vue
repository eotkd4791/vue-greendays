<template>
  <transition name="toolbar-modal">
    <div class="modal-mask">
      <div class="modal-container" @mouseleave="mouseEscape">
        <div class="modal-wrapper">
          
        </div>
      </div>
    </div> 
  </transition>
</template>

<script>


export default {
  components: {

  },
  data() {
    return {
      user: {
        
      }
    };
  },
  methods: {
    mouseEscape() {
      this.$emit("mouseEsc");
    },
  },
  created() {

  },
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 8999;
  top: 115px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  /* transition:  .3s ease; */
}

.modal-container {
  width: 100%;
  height:410px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border: none;
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  position: fixed;
  top: 115px;
}

.modal-wrapper {
  max-width: 1100px;
  height: 372px;
  margin: 0 auto;

  background-color: #fff;
  display: flex;
  justify-content: space-between;
}





.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
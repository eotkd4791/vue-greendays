<template>
  <transition name="toolbar-modal">
    <div class="modal-mask">
      <div class="modal-container" @mouseleave="mouseEscape">
        <div class="modal-wrapper">
          <toolbar-preorder v-if="onToolbar==='프리오더'" />
          <toolbar-quick-delivery  v-else-if="onToolbar==='빠른배송'" />
          <toolbar-reserve-purchase v-else />
        </div>
      </div>
    </div> 
  </transition>
</template>

<script>
import ToolbarReservePurchase from '../ToolbarReservePurchase.vue';
import ToolbarPreorder from '../ToolbarPreorder.vue';
import ToolbarQuickDelivery from '../ToolbarQuickDelivery.vue';

export default {
  components: {
    ToolbarReservePurchase,
    ToolbarPreorder,
    ToolbarQuickDelivery,
  },
  props:['onToolbar'],
  data() {
    return {
      user: {},
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

</style>
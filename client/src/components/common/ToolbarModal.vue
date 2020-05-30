<template>
  <transition name="fade">
    <div class="modal-mask">
      <div class="modal-container" @mouseleave="mouseEscape">
        <div class="modal-wrapper">
          <toolbar-preorder v-if="onToolbar==='프리오더'" />
          <toolbar-quick-delivery v-else-if="onToolbar==='빠른배송'" />
          <toolbar-search-brands v-else-if="onToolbar===''" />
          <toolbar-reserve-purchase v-else />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ToolbarReservePurchase from '@/components/ToolbarReservePurchase.vue';
import ToolbarPreorder from '@/components/ToolbarPreorder.vue';
import ToolbarQuickDelivery from '@/components/ToolbarQuickDelivery.vue';
import ToolbarSearchBrands from '@/components/ToolbarSearchBrands.vue';

export default {
  components: {
    ToolbarReservePurchase,
    ToolbarPreorder,
    ToolbarQuickDelivery,
    ToolbarSearchBrands,
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
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9000;
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
.fade-enter-active, .fade-leave-active { transition: opacity .5s; }
.fade-enter, .fade-leave-to { opacity: 0; }
</style>
<template>
  <div class="toolbar__modal-container">
    <div class="modal-mask" v-if="onToolbar" />
    <transition appear name="rolling">
      <div
        v-if="onToolbar"
        class="modal-container"
        :class="{ 'active-userinfo': activeUserInfo }"
        ref="modalContainer"
        @mouseleave="$emit('mouseEsc')"
      >
        <div class="modal-wrapper">
          <toolbar-preorder v-if="toolbarToOpen==='프리오더'" />
          <toolbar-quick-delivery v-else-if="toolbarToOpen==='빠른배송'" />
          <toolbar-search-brands v-else-if="toolbarToOpen===''" />
          <toolbar-reserve-purchase v-else />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ToolbarReservePurchase from '@/components/ToolbarReservePurchase.vue';
import ToolbarPreorder from '@/components/ToolbarPreorder.vue';
import ToolbarQuickDelivery from '@/components/ToolbarQuickDelivery.vue';
import ToolbarSearchBrands from '@/components/ToolbarSearchBrands.vue';
import Bus from '@/utils/bus.js';

export default {
  components: {
    ToolbarReservePurchase,
    ToolbarPreorder,
    ToolbarQuickDelivery,
    ToolbarSearchBrands,
  },
  props:['toolbarToOpen', 'onToolbar', 'activeUserInfo'],
  data() {
    return {
      user: {},
      onUserInfo: false,
    };
  },
}
</script>

<style scoped>
.toolbar__modal-container {
  width:100%;
}

.modal-mask {
  position: fixed;
  z-index: 100;
  top: 115px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}

.modal-container {
  width: 100%;
  height:410px;
  z-index: 1002;
  margin: 0px auto;
  padding: 20px 30px;
  border: none;
  position: fixed;
  top: 115px;
  background-color: #fff;
}

.modal-container.active-userinfo {
  transition: all 250ms;
  transform: translateY(280px);
}

.modal-wrapper {
  max-width: 1100px;
  height: 372px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}

.rolling-enter-active, .rolling-leave-active {
  transition: all .6s ease-in-out;
}

.rolling-enter, .rolling-leave-to {
  transform: translateY(-115px);
  z-index: 1001;
}
</style>
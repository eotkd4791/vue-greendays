<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click.stop="onClickOutside">
        
        <pick-brand-log-in 
          v-if="user.isLoggedIn"
          @closeBrandsPickingModal="$emit('closePickedBrands')"
        >{{ propsBrand }}</pick-brand-log-in>
          
        <pick-brand-log-out 
          v-else 
          @closeBrandsPickingModal="$emit('closePickedBrands')"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import PickBrandLogIn from '@/components/PickBrandLogIn.vue';
import PickBrandLogOut from '@/components/PickBrandLogOut.vue';

export default {
  components: {
    PickBrandLogIn,
    PickBrandLogOut,
  },
  props: ['propsBrand'],
  data() {
    return {
      user: {},
      brandName:'',
    };
  },
  methods: {
    onClickOutside(e) {
      if(e.target.className === 'modal-wrapper') {
        this.$emit('closePickedBrands');
      }
    }
  },
  created() {
    this.user = this.$store.state.userInfo;
  },
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-enter { opacity: 0; }
.modal-leave-active { opacity: 0; }
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
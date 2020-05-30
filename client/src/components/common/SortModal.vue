<template>
  <div class="modal-container" ref="modal">
    <div
      class="modal-list"
      v-for="val in whichModal"
      :key="val"
      @click="pickedOrderBy(val)"
      @mouseover="activatingTab"
    >
      <div class="modal-text" v-text="val" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['whichModal'],
  data() {
    return {
      activatedTabIndex: 0,
    };
  },
  methods: {
    pickedOrderBy(val) {
      if(this.whichModal.length === 4) {
        if(this.whichModal.indexOf(val) === 0) {
          return this.$emit('pickedFirst');
        }
        this.$emit('pickedGender', val);
      } else {
        this.$emit('pickedOrderBy', val);
      }
    },
    activatingTab() {
      if(!this.$refs.modal) return;
      this.$refs.modal.childNodes[this.activatedTabIndex].classList.remove('active');
    },
  },
  mounted() {
    this.$refs.modal.firstChild.classList.add('active');
    if(this.whichModal.length > 4) {
      this.$refs.modal.setAttribute('style', 'width: 150px');
    } else {
      this.$refs.modal.setAttribute('style', 'width: 72px');
    }
  }
}
</script>

<style scoped>
.modal-container {
  position: absolute;
  top: 60px;
  z-index: 9000;
  color: #000;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.16);
}
.modal-list {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  cursor: pointer;
}
.active {
  color: #fff;
  background-color: #42b883;
}
.modal-list:hover {
  color: #fff;
  background-color: #42b883;
}
.modal-list:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.modal-list:last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
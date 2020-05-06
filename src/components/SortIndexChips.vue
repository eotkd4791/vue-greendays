<template>
  <div class="chip-container">
    {{ sortindex }}
    <i class="fas fa-times-circle" @click="remove(sortindex)" />
  </div>
</template>

<script>
export default {
  props: ['sortindex'],
  methods: {
    remove(payload) {
      this.$emit('remove-chips', payload);
    }
  }
}
</script>

<style scoped>
.chip-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width */
  height: 30px;
  border-radius: 15px;
  padding: 0 7px 0 15px;
  margin: 0 8px 0 0;
  background-color: #42b883;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}
.fas { margin-left: 10px; color: #fff; cursor: pointer; }
</style>
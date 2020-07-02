<template>
  <div class="user-info">
    <left-link />
    <router-view />
  </div>
</template>

<script>
import LeftLink from '@/components/common/LeftLink.vue';

export default {
  components: {
    LeftLink
  },
}
</script>

<style scoped>
.user-info {
  display:flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1100px;
  margin: 150px auto 0;
  z-index: 1001;
}
</style>
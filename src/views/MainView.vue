<template>
  <div>
    <preorder-neon />
    <total-promotion />
  </div>
</template>

<script>
import PreorderNeon from '@/components/PreorderNeon.vue';
import TotalPromotion from '@/views/TotalPromotion.vue';

export default {
  components: {
    PreorderNeon,
    TotalPromotion,
  },
  
  mounted() {
  },
}
</script>

<style scoped>

</style>
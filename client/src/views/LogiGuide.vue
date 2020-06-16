<template>
  <section class="logi-guide">
    <header class="logi-guide__header">배송가이드</header>
    <info-list></info-list>
  </section>
</template>

<script>
import InfoList from '@/components/common/InfoList.vue';
export default {
  components: {
    InfoList,
  },
  data() {
    return {
      
    };
  }
}
</script>

<style scoped>
.logi-guide {
  width: 840px;
  height: 100%;
}
.logi-guide__header {
  font-size: 20px;
  margin: 0 0 36px;
}


</style>
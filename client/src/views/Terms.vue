<template>
  <section class="terms" v-once>
    <header class="terms__header">이용약관</header>
    <blockquote class="terms__blockquote" v-html="customerService.terms" />
  </section>
</template>

<script>
import customerService from '@/static/customerService.js';

export default {
  data() {
    return {
      customerService,
    };
  },
}
</script>

<style scoped>
.terms {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 840px;
  min-height: 532px;
  font-size: 14px;
}
.terms__header {
  font-size: 20px;
  margin: 0 0 36px;
}
.terms__blockquote {
  padding: 30px 50px;
  border: 1px solid #dedede;
  white-space: normal;
}
</style>
<template>
  <section class="logi-guide" v-once>
    <header class="logi-guide__header">배송가이드</header>
    <ul class="info-list__ul">
      <info-list v-for="item in listItems" :key="item.title" :eachOfListItems="item" />
    </ul>
  </section>
</template>

<script>
import InfoList from '@/components/common/InfoList.vue';
import customerService from '@/static/customerService.js';

export default {
  components: {
    InfoList,
  },
  data() {
    return {
      listItems: [],
    };
  },
  created() {
    this.listItems = customerService.logiGuide;
  }
}
</script>

<style scoped>
.logi-guide {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 840px;
  min-height: 532px;
}
.logi-guide__header {
  font-size: 20px;
  margin: 0 0 36px;
}
.info-list__ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.logi-list__indent {
  list-style-type: symbols('▶︎');
  text-indent: 20px;
}
.logi-guide__none {
  list-style-type: none;
}
</style>
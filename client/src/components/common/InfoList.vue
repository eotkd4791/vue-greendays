<template>
  <li class="info-list__li">
    <section class="info-list__section">
      <h1
        class="info-list__title"
        :class="{ 'info-list__title--modifier': isShownDetail }"
      >{{ eachOfListItems.title }}</h1>
      <i class="info-list__btn" v-text="isShownDetail ? '-' : '+'" @click="toggleShowDetail" />
    </section>
    <aside
      class="info-list__aside"
      v-if="isShownDetail && !isUserInfoView"
      v-html="eachOfListItems.detail"
    />
    <aside class="info-list__aside" v-else-if="isShownDetail && isUserInfoView">
      <slot name="edit-user-info" />
      <slot name="shipping-address-setting" />
      <slot name="user-promotion-code" />
    </aside>
  </li>
</template>

<script>
export default {
  props: ['eachOfListItems'],
  data() {
    return {
      isShownDetail: false,
      isUserInfoView: false,
    };
  },
  methods: {
    toggleShowDetail() {
      this.isShownDetail = !this.isShownDetail;
    }
  },
  created() {
    this.isUserInfoView = this.$route.path.includes('user');
  },
}
</script>

<style scoped>
.info-list__li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0 50px;
  margin-bottom: 10px;
  border: 1px solid #dedede;
  font-size: 15px;
  font-weight: 500;
}

.info-list__section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.info-list__title--modifier {
  color: #42b850;
  font-weight: 600;
}

.info-list__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #42b850;
  font-size: 40px;
  cursor: pointer;
}

.info-list__aside {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 0;
  white-space: normal;
}
</style>
<template>
  <ul class="info-list" ref="ul">
    <li class="info-list__li">
      <section class="info-list__section">
        <h1
          class="info-list__title"
          :class="{'info-list__title--modified': showDetail[index] }"
        >{{ item.title }}</h1>
        <i class="info-list__btn" v-text="showDetail[index] ? '-' : '+'" @click="toggleShowDetail" />
      </section>
      <aside class="info-list__aside" v-html="item.detail"></aside>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      listItems: [
        {
          title: '배송가이드 1',
          detail: 'loreamsdafjslkdjflkasdjfklasjdlfkjasldkjflaksdjfklasjdfklasjdflkjasldkfjaskldjfaksdljfklasd'
        },
        {
          title: '배송가이드 2',
          detail: 'ewqioruewiourweiouroieuqoiwioeuqwoiueqwioueiowqueoiwqueoiqwueoiqwueiouqwioeuqwioeuqwioeuqwoqwejlkqwjeklqwjeklqwjelkqwjklieuqowiueoiq'
        }
      ],
      showDetail: [],
    };
  },
  methods: {
    toggleShowDetail(e) {
      const targetList = e.target.parentElement.parentElement;
      const indexToShow = Array.prototype.indexOf.call(this.$refs.ul.children, targetList);
      if(indexToShow !== -1) {
        this.showDetail[indexToShow] = !this.showDetail[indexToShow];
      }
      console.log(this.showDetail);
    }
  },
  created() {
    this.showDetail = new Array(this.listItems.length).fill(false);
    const NameOfCurrentView = this.$route.name;
  },
}
</script>

<style scoped>
.info-list {
  width: 100%;
}
.info-list__ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.info-list__li {
  display: flex;
  padding: 0 50px;
  margin-bottom: 10px;
  border: 1px solid #dedede;
}
.info-list__section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
/* .info-list__title {

} */

.info-list__title--modified {
  color: #42b850;
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
  width: 100%;
  height: 100%;
}
</style>
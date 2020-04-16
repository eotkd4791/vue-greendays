<template>
  <div class="popular-brands">
    <div class="list-brands" v-for="brand in brandsList" :key="brand">
      <span class="brands-ranks">{{ brandsList.indexOf(brand) + 1 }}</span>
      <i class="fas fa-heart" @click="openAlarmBrand" />
      <router-link to="/">{{ brand }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandsList: ["GUCCI", "BURBERRY", "BALENCIAGA", "PRADA", "VALENTINO", "SAINT LAURENT", "MAISION MARGIELA", "GOLDEN GOOSE","CELINE"," FENDI"],
      pickedBrand:'',
    };
  },
  methods: {
    openAlarmBrand(e) {
      this.pickedBrand = e.target.nextElementSibling.text;
      this.$emit('openAlarmModal', this.pickedBrand);
    },
  },
}
</script>

<style scoped>
.popular-brands {
  width: 100%;
  height: 460px;
  display: flex;
  flex-direction: column;
}
.list-brands {
  padding: 15px 0;
  font-size: 11px;
  border-bottom: 1px solid #EDEDED;
}
.brands-ranks {
  margin: 0 10px 0 20px;
  color: #42b883;
  font-weight: 500;
  font-size: 12px;
}
.list-brands:last-child .brands-ranks {
  margin: 0 10px 0 14px;
}
.fas.fa-heart {
  margin: 0 20px 0 24px;
  color: #d9d9d9;
  cursor: pointer;
}
</style>
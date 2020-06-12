<template>
  <div class="search__brand-container">
    <div class="search__brand-wrapper">
      <section class="search__brand-list">
        <ol class="search__brand-lately">
          <li>최근 검색어</li>
          <li v-for="item in getLatelySearchItems" :key="item">
            <router-link to="/">{{ item }}</router-link>
          </li>
        </ol>
        <ul class="search__brand-hot">
          <li>인기 검색어</li>
          <li v-for="item in getHotSearchItems" :key="item">
            <router-link to="/">{{ item }}</router-link>
          </li>
        </ul>
      </section>
      <button>검색 기록 삭제</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getLatelySearchItems() {
      return this.$store.state.userInfo.searchKeyword.lately;
    },
    getHotSearchItems() {
      return this.$store.state.userInfo.searchKeyword.hot;
    }
  },
  created() {
    //검색어 로직
  }
}
</script>

<style scoped>
ul, ol {
  list-style: none;
}
.search__brand-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px 0;
}

.search__brand-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 430px;
  height: 250px;
}
.search__brand-list {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  font-size: 15px;
}

.search__brand-lately, .search__brand-hot {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
}
.search__brand-lately {
  margin-right: 20px
}
.search__brand-list li {
  width: 100%;
  height: 100%;
  font-weight: 500;
  margin: 0 0 15px;
}

ol>li:first-child {
  font-size: 14px;
}

ul>li:first-child {
  font-size: 14px;
}

button {
  width: 100%;
  font-size: 13px;
  text-align: left;
  color: #787878;
}
</style>
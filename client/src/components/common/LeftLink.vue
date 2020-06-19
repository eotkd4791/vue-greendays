<template>
  <aside class="left-link">
    <ul class="left-link__ul" ref="lists">
      <li class="left-link__li" v-for="link in linkList" :key="link.name">
        <router-link :to="link.routePath">{{ link.name }}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      linkList: [],
    };
  },
  computed: {
    ...mapGetters([
        'getCustomerLinks',
        'getUserInfoLinks',
      ]), 
  },
  created() {
    this.linkList = this.$route.path.includes('customerservice') ? this.getCustomerLinks : this.getUserInfoLinks;
  },
  mounted() {
    // this.$refs.lists.firstChild.firstChild.classList.add('left-link__li-modifier');
  }
}
</script>


<style scoped>
.left-link {
  width: 260px;
  height: 532px;
}

.left-link__ul {
  width: 100%;
  list-style: none;
}

.left-link__li {
  font-size: 14px;
  font-weight: 400;
  margin: 0 0 20px;
  color: #000;
}

/* .left-link__li-modifier {
  color: #42b850;
} 
활성화된 router link에 표시하는 클래스로 처리하기
*/
.router-link-active.router-link-exact-active {
  color:#42b850;
  font-weight: 500;
}
</style>
<template>
  <transition name="slide-fade">
    <div v-if="active" class="sort__bar-container" ref="sortBar">
      <div class="sort__bar-wrapper">
        <div class="sort__bar-row-left">
          <div class="sort__bar-keyword">
            <div class="sort__bar-keyword-pick">
              성별
              <i class="fas fa-chevron-down" />
            </div>
            <div class="sort__bar-keyword-pick">
              카테고리
              <i class="fas fa-chevron-down" />
            </div>
            <div class="sort__bar-keyword-pick">
              브랜드
              <i class="fas fa-chevron-down" />
            </div>
            <sort-modal v-if="showModal"></sort-modal>
          </div>
          <sort-index-chips
            v-for="index in sortIndex"
            :key="index"
            :sortindex="index"
            @remove-chips="removeChips"
          />
          <div 
            class="sort__bar-chips-clear" 
            @click="removeAll"
            v-if="hasSortIndex"
          >
          초기화
          </div>
        </div>
        <div class="sort__bar-row-right">
          <div class="sort__bar-keyword-pick orderby">
              {{ sortOrderBy[sortOrderByIndex] }}
              <i class="fas fa-chevron-down" />
            </div>
        </div>
      </div>
      <div class="sort__bar-space" />
    </div>
  </transition>
</template>

<script>
import SortModal from '@/components/common/SortModal.vue';
import SortIndexChips from '@/components/SortIndexChips.vue';

export default {
  components: {
    SortModal,
    SortIndexChips,
  },
  data () {
      return {
        active: true,
        showModal: false,
        sortIndex: ['asdfasdf','sfasdf','sadfas'],
        sortOrderBy: ['인기순','최신순','높은 가격순','낮은 가격순','높은 할인율순','낮은 할인율순'],
        sortOrderByIndex: 0,
        scrollListener: Object,
      }
    },
  computed: {
    hasSortIndex() {
      return this.sortIndex.length; 
    }
  },
  methods: {
    removeChips(payload) {
      this.sortIndex.splice(this.sortIndex.indexOf(payload), 1);
    },
    removeAll() {
      this.sortIndex = [];
    },
    onScroll(e) {
      if(this.active) {
        if(window.scrollY > 0) {
           this.$refs.sortBar.classList.toggle('isfixed') 
        } else {
          this.$refs.sortBar.classList.toggle('isfixed');
        }
      }
      if(e.deltaY < 0) {
        this.active = true;
        return;
      }
      if(e.pageY > 1460) {
        this.active = false;
        return;
      }
    }
  },
  created() {},
  mounted() {
    window.addEventListener('wheel', (e) => this.onScroll(e));
  },
  beforeDestroy() {
    window.removeEventListener('wheel', (e) => this.onScroll(e));
  }
}
</script>

<style scoped>
.sort__bar-container {
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  border-bottom: 1px solid #d9d9d9;
  background-color: #fff;
  position:fixed;
  z-index: 8999;
  top: 115px;
}

.sort__bar-wrapper {
  display: flex;
  justify-content: space-between;
}
.sort__bar-space { height: 1px; padding: 0 0 20px; }
.sort__bar-row-left { display: flex; align-items: center; }
.sort__bar-keyword { display: flex; height: 38px; }
.sort__bar-keyword-pick {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 5px;
  padding: 15px;
  background-color: #f8f8f8;
  cursor: pointer;
}
.sort__bar-keyword-pick:hover { background-color: #9AECDB; }
.sort__bar-keyword-pick.orderby { background-color: #fff; }
.sort__bar-chips-clear { color: #42b883; cursor: pointer; }
.fas { font-size: 10px; margin-left: 10px; }

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>
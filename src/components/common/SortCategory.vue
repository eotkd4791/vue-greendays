<template>
  <div class="modal-container">
    <div class="modal-row-left" ref="tabs">
      <div
        class="modal-categories"
        v-for="val in categories"
        :key="val"
        @mouseover="activatingMenu"
      >{{ val }}</div>
    </div>
    <div class="modal-row-right">
      <ul>
        <li 
          class="category__detail" 
          v-for="kind in kinds" 
          :key="kind"
        >{{ kind }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ['Bags','Wallets','Clothes','Shoes','Accessories'],
      kinds: [],
      arr: ['asdf','asdfasd','asdfasfas','asfasf','asfasdf','asdfasfasdfa','sdafasf','sdfhhjjgh','uyiyui yt','fghdgfgjhd','dfghdfghtjty','ytuityuiyuityui','uyityuityityu'],
      switch: ['aaaa','ssssssss','ddddd','eeeeeee'],
      activatedTabIndex: 0,
    };
  },
  methods: {
    activatingMenu() {
      this.kinds = this.switch;
      if(!this.$refs.tabs) return;
      this.$refs.tabs.childNodes[this.activatedTabIndex].classList.remove('left-active');
      
    },
  },
  mounted() {
    this.kinds = this.arr;
    this.$refs.tabs.firstChild.classList.add('left-active');
  },
}
</script>

<style scoped>
ul {
  list-style: none;
}
.modal-container {
  display: flex;
  width: 270px;
  height: 380px;
  position: absolute;
  top: 60px;
  left: 82px;
  border-radius: 5px;
  box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.16);
  font-size: 14px;
}
.modal-row-left {
  width: 110px;
  height: 100%;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: #000;
}
.modal-row-right {
  width: 160px;
  height: 100%;
  background-color: #42b883;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;
  overflow: scroll;
}
.category__detail, .modal-categories {
  display: flex;
  padding: 0 0 0 10px;
  align-items: center;
  width: 100%;
  height: 40px;
}
.category__detail:hover {
  background-color: #fff;
  color: #42b883;
}
.left-active {
  background-color: #42b883;
  color: #fff;
}
.right-active {
  background-color: #fff;
  color: #42b883;
}
.modal-categories:hover {
  background-color: #42b883;
  color: #fff;
}
</style>
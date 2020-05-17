<template>
  <div class="modal-container">
    <div class="modal-row-left" ref="tabs">
      <div
        class="modal-categories"
        v-for="val in Object.keys(categories)"
        :key="val"
        @mouseover="activatingMenu(val)"
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
      categories: {
        Bags: [
          'Shoulder Bags',
          'Clutch Bags',
          'Tote Bags',
          'Backpacks',
          'Belt Bags',
          'Cross Bags',
          'Travel Bags'
        ],
        Wallets: [
          'Wallets',
          'Small Wallets',
          'Strap Wallets',
          'Card Cases',
          'Pouches'
        ],
        Clothes: [
          'Cardigans',
          'Shirts',
          'Dresses',
          'Skirts',
          'Knits',
          'Blouse',
          'Long Sleeves',
          'Short Sleeves',
          'Hoodie',
          'Coats',
          'Jackets',
          'Jumpers',
          'Denim Pants',
          'Pants',
          'Slacks',
          'Traning Wear',
          'Swimwear',
          'Vests',
          'Jump Suit'
        ],
        Shoes: [
          'Sandals',
          'Espadrilles',
          'Sneackers',
          'Slippers',
          'Moccasins',
          'Pumps',
          'Boots',
          'Flats',
          'Wedges',
          'Mules',
          'Loafers'
        ],
        Accessories: [
          'Jewelry',
          'Belts',
          'Scarfs',
          'Hats',
          'Keyrings',
          'Eyewear',
          'Socks',
          'Ties',
          'Gloves',
          'Keycases',
          'Tights',
          'Fancy',
          'Bag Straps'
        ],
      },
      kinds:[],
      activatedTabIndex: 0,
    };
  },
  methods: {
    //chip 생성하는 로직 추가하기 
    activatingMenu(menu) {
      this.kinds = this.categories[menu];
      if(!this.$refs.tabs) return;
      this.$refs.tabs.childNodes[this.activatedTabIndex].classList.remove('left-active');
      this.activatedTabIndex = Object.keys(this.categories).indexOf(menu);
      this.$refs.tabs.childNodes[this.activatedTabIndex].classList.add('left-active');
    },
  },
  mounted() {
    this.kinds = this.categories.Bags;
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
<template>
  <div class="item-container" ref="item" @click="movePage('`products/show?product_id=${productId}`')">
    <div class="item-container__photo">
      <slot name="productInfo-photo" />
    </div>
    <div class="item-container__info">
      <div class="item-container__space" />
      <p class="item-container__brand">
        <slot name="productInfo-brand" />
      </p>
      <p class="item-container__name">
        <slot name="productInfo-name" />
      </p>

      <div class="item-container__price">
        <span class="item-container__before-price">
          <slot name="productInfo-beforePrice" />
        </span> |
        <span class="item-container__discount-rate">
          <slot name="productInfo-discountRate" />
        </span> 
      </div>
      <p class="item-container__after-price">
        <slot name="productInfo-afterPrice" />
      </p>
    </div>
    <div class="item-container__chips-wrapper">
      <div v-if="sendToday" class="item-container__chips send-today">
        <p class="item-container__chips__send-today__text">당일발송</p>
      </div>
      <div v-if="ableToBuy" class="item-container__chips able-to-buy">
        <p class="item-container__chips__able-to-buy__text">구매가능</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgPath','productId','sendToday', 'ableToBuy'],
  data() {
    return {

    };
  },
  methods: {
    movePage(to) {
      if(to ==='#') return;
      if(this.$route.path !== to) {
        const nextPage = { path: to };
        this.$router.push(nextPage);
      }
    },
  },
  created() {

  },
  mounted() {
    console.dir(this.$refs.item.style);

    // const currentUrl = this.$route.path;
    // if(currentUrl === '/') {
    //   // this.$refs.item.style
    // } else if (currentUrl === '/products') {

    // }

  }
}
</script>

<style scoped>
.item-container {
  display: inline-block;
  width: 262px;
  height: 444px;
  margin-right: 10px;
  margin-bottom: 100px;
  cursor: pointer;
  font-family: 'Montsarret';
  font-size: 16px;
  line-height: 1.06;
}
.item-container__wrapper {
  width: 262px;
  height: 262px;
}
.item-container__photo {
  width: 262px;
  height: 262px;
  outline-style: none;
}

.item-container__space { height: 32px; }
.item-container__brand {
  font-size: 13px;
  margin-bottom: 6px;
  text-align: center;
  font-weight: bold;
}
.item-container__name {
  width:100%;
  font-size: 15px;
  margin-bottom: 24px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.item-container__price {
  font-size: 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-container__before-price {
  text-decoration-line: line-through;
  text-decoration-style: solid;
  text-decoration-color: currentColor;
  text-decoration-thickness: auto;
  color: #b6b6b6;
  margin-right: 10px;
}
.item-container__discount-rate { margin-left: 10px; }
.item-container__after-price {
  color: #4dcf34;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

/* chips */
.item-container__chips-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 262px;
  height: 20px;
  margin: 30px 0 0;
  font-size: 16px;  
}
.item-container__chips {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 20px;
  margin: 0 7px 0 0;
  padding: 0 0 1px;
  border-radius: 10px;
  font-size: 11px;
}
.item-container__chips-wrapper::after {
  content: '';
  height: 20px;
}
.item-container__chips.send-today {
  background-color: rgba(57, 57, 57, 0.08);
}
.item-container__chips__send-today__text {
  color: #393939;
}
.item-container__chips.able-to-buy {
  background-color: #42b850;
}
.item-container__chips__able-to-buy__text {
  color: white;
  font-weight: 700;
}
</style>
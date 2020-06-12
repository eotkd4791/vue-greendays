<template>
  <div
    class="item-container"
    :class="`${callFrom}`"
    @click="movePage(`/products/show?product_id=${productId}`)"
  >
    <slot name="productInfo-photo" />
    <div class="item-container__info" :class="`${callFrom}`">
      <div class="item-container__space" :class="`${callFrom}`" />
      <p class="item-container__brand" :class="`${callFrom}`">
        <slot name="productInfo-brand" />
      </p>
      <p class="item-container__name" :class="`${callFrom}`">
        <slot name="productInfo-name" />
      </p>
      <div class="item-container__price" :class="`${callFrom}`">
        <span class="item-container__before-price" :class="`${callFrom}`">
          <slot name="productInfo-beforePrice" />
        </span> |
        <span class="item-container__discount-rate" :class="`${callFrom}`">
          <slot name="productInfo-discountRate" />
        </span>
      </div>
      <p class="item-container__after-price" :class="`${callFrom}`">
        <slot name="productInfo-afterPrice" />
      </p>
    </div>
    <div class="item-container__chips-wrapper" :class="`${callFrom}`">
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
  props: [
    'imgPath',
    'productId',
    'sendToday',
    'ableToBuy',
    'callFrom'
  ],
  data() {
    return {};
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
}
</script>

<style scoped>
.item-container {
  display: inline-block;
  width: 260px;
  height: 444px;
  margin-right: 10px;
  margin-bottom: 100px;
  cursor: pointer;
  font-family: 'Montsarret';
  font-size: 16px;
  line-height: 1.06;
}

.item-container.main__view { 
  width: 220px; 
  height: 425px; 
  margin: 5px 5px 32px; 
}

.item-container.toolbar__quick { 
  width: 190px; 
  height: 331px; 
  margin: 0 13px 0 0; 
}

.item-container__photo { 
  width: 260px; 
  height: 260px; 
  outline-style: none; 
}

.item-container__photo.main__view { 
  width: 220px; 
  height: 220px; 
}

.item-container__photo.toolbar__quick { 
  width: 190px;
  height: 190px; 
}

.item-container__space { 
  height: 32px; 
}

.item-container__space.toolbar__quick { 
  height: 0; 
}

.item-container__brand {
  font-size: 13px;
  margin: 0 0 6px;
  text-align: center;
  font-weight: bold;
}
.item-container__brand.main__view { 
  font-size: 13px; 
}
.item-container__brand.toolbar__quick { 
  font-size: 12px; 
}
.item-container__name {
  width:100%;
  font-size: 15px;
  margin-bottom: 24px;
  text-align: center;
  text-overflow: ellipsis;
}
.item-container__name.toolbar__quick { 
  font-size: 12px; 
margin: 7px 0 0; 
}
.item-container__price {
  font-size: 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-container__price.toolbar__quick { 
  font-size: 12px; 
margin: 15px 0 0; 
}

.item-container__before-price {
  text-decoration-line: line-through;
  text-decoration-style: solid;
  color: #b6b6b6;
  margin-right: 10px;
}

.item-container__before-price.toolbar__quick { 
  font-size:12px; 
}

.item-container__discount-rate { 
  margin-left: 10px; 
}

.item-container__discount-rate.toolbar__quick { 
  font-size: 12px; 
}

.item-container__after-price {
  color: #4dcf34;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}
.item-container__after-price.toolbar__quick { 
  font-size: 12px;
  margin: 15px 0 0; 
}
/* chips */
.item-container__chips-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 20px;
  margin: 30px 0 0;
  font-size: 16px;  
}

.item-container__chips-wrapper.toolbar__quick {
  width: 190px; 
  margin: 20px 0 0; 
}
.item-container__chips-wrapper.main__view { 
  width:220px; 
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
  height: 7px; 
}

.item-container__chips.toolbar__quick { 
  height: 18px; 
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
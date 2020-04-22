<template>
  <div class="item-container" ref="item">
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
  </div>
</template>

<script>
export default {
  props: ['imgPath'],
  data() {
    return {

    };
  },
  created() {

  },
  mounted() {

  },
}
</script>

<style scoped>
.item-container {
  display: inline-block;
  width: 262px;
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
  color: #e80000;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}
</style>
const state = () => ({
  products:[
    {
      photoUrl: '../../assets/img/brands/hermes-bags.jpg',
      imgElement: `<div style="
                    width: 262px; 
                    height: 262px;
                    background-image: url('../../assets/img/brands/hermes-bags.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    outline-style: none;"
                  />`,
      brand: 'HERMES',
      name: '홀랄리롤랄리 핸드백',
      priceBefore: 1000000,
      discountRate: 20,
      priceAfter: 800000
    },
    {
      photoUrl: '../../assets/img/brands/hermes-bags.jpg',
      imgElement: `<img src="../../assets/img/brands/hermes-bags.jpg" class="item-container__photo" />`,
      brand: 'HERMES',
      name: '하랄랄 핸드백',
      priceBefore: 1000000,
      discountRate: 10,
      priceAfter: 900000
    },
    {
      photoUrl: '../../assets/img/brands/hermes-bags.jpg',
      imgElement: `<img src="../../assets/img/brands/hermes-bags.jpg" class="item-container__photo" />`,
      brand: 'HERMES',
      name: '하랄랄 토드백',
      priceBefore: 1000000,
      discountRate: 30,
      priceAfter: 700000
    },
    {
      photoUrl: '../../assets/img/brands/hermes-bags.jpg',
      imgElement: `<img src="../../assets/img/brands/hermes-bags.jpg" class="item-container__photo" />`,
      brand: 'HERMES',
      name: '하랄똘끼호랄똘끼 크로뜨백',
      priceBefore: 1000000,
      discountRate: 40,
      priceAfter: 600000
    },
    {
      photoUrl: '../../assets/img/brands/hermes-bags.jpg',
      imgElement: `<img src="../../assets/img/brands/hermes-bags.jpg" class="item-container__photo" />`,
      brand: 'HERMES',
      name: '홀랄리띨랄리 핸드백',
      priceBefore: 1000000,
      discountRate: 100,
      priceAfter: 0
    },
  ],
});

const mutations = () => ({

});

const getters = () => ({

});

const actions = () => ({

});

export default {
  state,
  mutations,
  getters,
  actions
};
const state = () => ({
  preorders: [
    {
      title: '[연장] 주목할만한 스테디셀러 아이템',
      subtitle: '해당 프리오더는 뜨거운 성원을 받아 연장되었습니다.',
      description: '어떤 스타일링에도 자연스럽게 어울리는 남녀 키즈 스테디 셀러 아이템을 만나보세요',
      expiredAt: new Date('2020/06/01 23:59:59'),
      activated: true,
      promoName: '2020 S/S COLLECTION',
      products: [
        {
          photoUrl: 'https://ilyo.co.kr/contents/article/images/2018/0824/1535094319815497.png',
          brand: 'HERMES',
          name: '홀랄리롤랄리 핸드백',
          id: 20200000,
          priceBefore: 1000000,
          discountRate: 20,
          priceAfter: 800000,
          productSendToday: true,
          productAbleToBuy: false,
        },
        {
          photoUrl: 'https://img015.feelway.com/2601/bd13pd2601404260ed1.jpg',
          brand: 'HERMES',
          name: '하랄랄 핸드백',
          id: 20200001,
          priceBefore: 1000000,
          discountRate: 10,
          priceAfter: 900000,
          productSendToday: false,
          productAbleToBuy: true,
        },
        {
          photoUrl: 'https://img.insight.co.kr/static/2017/08/22/700/33h72b3420n0c9067zym.jpg',
          brand: 'HERMES',
          name: '하랄랄 토드백',
          id: 20200002,
          priceBefore: 1000000,
          discountRate: 30,
          priceAfter: 700000,
          productSendToday: true,
          productAbleToBuy: true,
        },
        {
          photoUrl: 'https://i.pinimg.com/originals/cc/96/e9/cc96e99b53ee44b3f9fb3f3c874aaeef.jpg',
          brand: 'HERMES',
          name: '하랄똘끼호랄똘끼 크로뜨백',
          id: 20200003,
          priceBefore: 1000000,
          discountRate: 40,
          priceAfter: 600000,
          productSendToday: false,
          productAbleToBuy: false,
        },
        {
          photoUrl: 'https://cdn-images.farfetch-contents.com/13/40/78/17/13407817_15449691_600.jpg',
          brand: 'HERMES',
          name: '홀랄리띨랄리 핸드백',
          id: 20200004,
          priceBefore: 1000000,
          discountRate: 100,
          priceAfter: 0,
          productSendToday: true,
          productAbleToBuy: true,
        },
        {
          photoUrl: 'https://cdn-images.farfetch-contents.com/13/40/78/17/13407817_15449691_600.jpg',
          brand: 'HERMES',
          name: '홀랄리띨랄리 핸드백',
          id: 20200005,
          priceBefore: 1000000,
          discountRate: 100,
          priceAfter: 0,
          productSendToday: true,
          productAbleToBuy: true,
        },
        {
          photoUrl: 'https://cdn-images.farfetch-contents.com/13/40/78/17/13407817_15449691_600.jpg',
          brand: 'HERMES',
          name: '홀랄리띨랄리 핸드백',
          id: 20200006,
          priceBefore: 1000000,
          discountRate: 100,
          priceAfter: 0,
          productSendToday: true,
          productAbleToBuy: true,
        },    
      ],
    },
    {
      title: '[연장] 포인트가 필요하다면 스니커즈',
      subtitle: '해당 프리오더는 뜨거운 성원을 받아 연장되었습니다.',
      description: '스타일링에 포인트가 필요한 당신을 위해 봄과 어울리는 스니커즈를 소개합니다.',
      products: [
        {
          photoUrl: 'https://cdn-images.farfetch-contents.com/13/40/78/17/13407817_15449691_600.jpg',
          brand: 'HERMES',
          name: '홀랄리띨랄리 핸드백',
          id: 20200007,
          priceBefore: 1000000,
          discountRate: 100,
          priceAfter: 0,
          productSendToday: true,
          productAbleToBuy: true,
        },
        {
          photoUrl: 'https://cdn-images.farfetch-contents.com/13/40/78/17/13407817_15449691_600.jpg',
          brand: 'HERMES',
          name: '홀랄리띨랄리 핸드백',
          id: 20200008,
          priceBefore: 1000000,
          discountRate: 100,
          priceAfter: 0,
          productSendToday: true,
          productAbleToBuy: true,
        },
        {
          photoUrl: 'https://cdn-images.farfetch-contents.com/13/40/78/17/13407817_15449691_600.jpg',
          brand: 'HERMES',
          name: '홀랄리띨랄리 핸드백',
          id: 20200009,
          priceBefore: 1000000,
          discountRate: 100,
          priceAfter: 0,
          productSendToday: true,
          productAbleToBuy: true,
        },
        {
          photoUrl: 'https://cdn-images.farfetch-contents.com/13/40/78/17/13407817_15449691_600.jpg',
          brand: 'HERMES',
          name: '홀랄리띨랄리 핸드백',
          id: 20200010,
          priceBefore: 1000000,
          discountRate: 100,
          priceAfter: 0,
          productSendToday: true,
          productAbleToBuy: true,
        },
      ],
      expiredAt: new Date('2020/05/23 16:59:59'),
      activated: true,
      promoName: '2020 S/S COLLECTION'
    }
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
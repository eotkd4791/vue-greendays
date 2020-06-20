import Vue from 'vue';
import VueRouter from 'vue-router';



import CustomerService from '@/views/CustomerService.vue';
import CustomerServiceMain from '@/views/CustomerServiceMain.vue';
import LogiGuide from '@/views/LogiGuide.vue';
import Notice from '@/views/NoticeView.vue';
import FaqList from '@/views/FaqList.vue';
import Terms from '@/views/Terms.vue';
import PrivateInfoPolicy from '@/views/PrivateInfoPolicy.vue';


import MyUserInfo from '@/views/MyUserInfo.vue';
import UserInfoEdit from '@/views/UserInfoEdit.vue';
import TotalOrderRefund from '@/views/TotalOrderRefund.vue';
import PointUsage from '@/views/PointUsage.vue';


import LoginView from '@/views/LoginView.vue';
import SignUpView from '@/views/SignUpView.vue';


import Introduction from '@/views/Introduction.vue';
import Reviews from '@/views/Reviews.vue';
import ProductView from '@/views/ProductView.vue';
import WishList from '@/views/WishList.vue';
import CartItems from '@/views/CartItems.vue';

import MainView from '@/views/MainView.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
    },
    {
      path: '/customerservice',
      redirect: '/customerservice/main',
      component: CustomerService,
      children: [
        {
          path: '/customerservice/main',
          name: 'customerService',
          component: CustomerServiceMain,
        },
        {
          path: '/customerservice/logi_guide',
          name: 'logiGuide',
          component: LogiGuide,
        },
        {
          path: '/customerservice/notice',
          name: 'notice',
          component: Notice,
        },
        {
          path: '/customerservice/faq',
          name: 'faqList',
          component: FaqList,
        },
        {
          path: '/customerservice/terms',
          name: 'terms',
          component: Terms,
        },
        {
          path: '/customerservice/private_info_policy',
          name: 'privateInfoPolicy',
          component: PrivateInfoPolicy,
        },
      ]
    },
    {
      path: '/user',
      alias: '/user/edit',
      component: MyUserInfo,
      children: [
        {
          path: '/user/edit',
          name: 'UserInfoEdit',
          component: UserInfoEdit
        },
        {
          path: '/user/point',
          name: 'PointUsage',
          component: PointUsage
        },
        {
          path: 'user/total_order_refund',
          name: 'TotalOrderRefund',
          component: TotalOrderRefund
        }
      ]
    },
    {
      path: '/introduction',
      component: Introduction,
      name: 'introduction'
    },
    {
      path: '/reviews',
      component: Reviews,
      name: 'review'
    },
    {
      path: '/products',
      component: ProductView,
      name: 'products'
    },
    {
      path: '/login',
      component: LoginView,
      name: 'login'
    },
    {
      path: '/signup',
      component: SignUpView,
      name: 'signup'
    },
    {
      path: '/wishlist',
      component: WishList,
      name: 'wishlist'
    },
    {
      path: '/cartitems',
      component: CartItems,
      name: 'cartItems'
    },
  ],

  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return {
  //       x: 0,
  //       y: 0
  //     };
  //   }
  // }
});
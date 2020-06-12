import Vue from 'vue';
import VueRouter from 'vue-router';

import Notice from '../components/Notice.vue';


import FaqList from '../views/FaqList.vue';
import LogiGuide from '../views/LogiGuide.vue';

import Introduction from '../views/Introduction.vue';
import CustomerService from '../views/CustomerService.vue';
import Reviews from '../views/Reviews.vue';
import ProductView from '../views/ProductView.vue';
import MyPoint from '../views/MyPoint.vue';
import LoginView from '../views/LoginView.vue';
import SignUpView from '../views/SignUpView.vue';
import WishList from '../views/WishList.vue';
import CartItems from '../views/CartItems.vue';

import MainView from '../views/MainView.vue';
import Terms from '../views/Terms.vue';
import PrivateInfo from '../views/PrivateInfo.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [{
      path: '/',
      component: MainView,
      name: 'main',
    },
    {
      path: '/notice',
      component: Notice,
      name: 'notice'
    },
    {
      path: '/faq',
      component: FaqList,
      name: 'faq'
    },
    {
      path: '/customerservice',
      component: CustomerService,
      name: 'customerService'
    },
    {
      path: '/logi_guide',
      component: LogiGuide,
      name: 'logiGuide'
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
      path: '/terms',
      component: Terms,
      name: 'terms'
    },
    {
      path: '/privateinfo',
      component: PrivateInfo,
    },
    {
      path: '/mypoint',
      component: MyPoint,
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});
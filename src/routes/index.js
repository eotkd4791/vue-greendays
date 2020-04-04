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
import MonthlyPromotion from '../views/MonthlyPromotion.vue';
import LoginView from '../views/LoginView.vue';
import SignUpView from '../views/SignUpView.vue';
import WishList from '../views/WishList.vue';
import CartItems from '../views/CartItems.vue';

import MainView from '../views/MainView.vue';
import Terms from '../views/Terms.vue';
import PrivateInfo from '../views/PrivateInfo.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { 
      path: '/',
      component: MainView,
    },
    { 
      path: '/notice',
      component: Notice,
    },
    {
      path: '/faq',
      component: FaqList,
    },
    {
      path: '/customerservice',
      component: CustomerService,
    },
    {
      path: '/logi_guide',
      component: LogiGuide,
    },
    {
      path: '/introduction',
      component: Introduction,
    },
    {
      path: '/reviews',
      component: Reviews,
    },
    {
      path: '/products',
      component: ProductView,
    },
    {
      path: '/terms',
      component: Terms,
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
      path: '/monthlypromotion',
      component: MonthlyPromotion,
    },
    {
      path: '/login',
      component: LoginView,
    },
    {
      path: '/signup',
      component: SignUpView,
    },
    {
      path: '/wishlist',
      component: WishList,
    },
    {
      path: '/cartitems',
      component: CartItems,
    },
  ]
});

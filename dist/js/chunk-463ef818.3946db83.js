(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-463ef818"],{"0521":function(e,t,n){},"5e08":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"customer-service__container"},[n("left-link"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},s=[],i=n("ec36"),a={components:{LeftLink:i["a"]}},u=a,c=(n("a1eb"),n("2877")),o=Object(c["a"])(u,r,s,!1,null,"df2ec9d6",null);t["default"]=o.exports},a130:function(e,t,n){"use strict";var r=n("0521"),s=n.n(r);s.a},a1eb:function(e,t,n){"use strict";var r=n("a706"),s=n.n(r);s.a},a706:function(e,t,n){},ec36:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"left-link"},[n("ul",{ref:"lists",staticClass:"left-link__ul",on:{click:e.activatedRouterLink}},e._l(e.linkList,(function(t){return n("router-link",{key:t.name,staticClass:"left-link__li",attrs:{tag:"li",to:t.routePath}},[e._v(" "+e._s(t.name)+" ")])})),1)])},s=[],i=(n("caad"),n("2532"),{getCustomerLinks:function(){return[{routePath:"/vue-greendays/customerservice",name:"고객센터"},{routePath:"/vue-greendays/customerservice/logi_guide",name:"배송가이드"},{routePath:"/vue-greendays/customerservice/notice",name:"공지사항"},{routePath:"/vue-greendays/customerservice/faq",name:"자주묻는질문"},{routePath:"/vue-greendays/customerservice/terms",name:"이용약관"},{routePath:"/vue-greendays/customerservice/private_info_policy",name:"개인정보취급방침"}]},getUserInfoLinks:function(){return[{routePath:"/vue-greendays/user/edit/:userId",name:"내 정보 관리"},{routePath:"/vue-greendays/user/total_order_refund/:userId",name:"주문 및 반품 내역"},{routePath:"/vue-greendays/user/point/:userId",name:"포인트"}]}}),a={data:function(){return{linkList:[]}},computed:{getCustomerLinks:i.getCustomerLinks,getUserInfoLinks:i.getUserInfoLinks},methods:{activatedRouterLink:function(e){var t=this.$refs.lists.firstChild,n=t.classList,r=Array.prototype.includes;t===e.target?r.call(n,"router-link-exact-active")||n.add("router-link-exact-active"):r.call(n,"router-link-exact-active")&&n.remove("router-link-exact-active")}},created:function(){this.linkList=this.$route.path.includes("customerservice")?this.getCustomerLinks:this.getUserInfoLinks},mounted:function(){this.$refs.lists.firstChild.classList.add("router-link-exact-active")}},u=a,c=(n("a130"),n("2877")),o=Object(c["a"])(u,r,s,!1,null,"396db3b0",null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-463ef818.3946db83.js.map
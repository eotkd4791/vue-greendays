(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cfc46e54"],{"0521":function(e,t,r){},"6dae":function(e,t,r){"use strict";var n=r("f562"),s=r.n(n);s.a},a130:function(e,t,r){"use strict";var n=r("0521"),s=r.n(n);s.a},b9e0:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-info"},[r("left-link"),r("router-view")],1)},s=[],i=r("ec36"),a={components:{LeftLink:i["a"]}},u=a,c=(r("6dae"),r("2877")),o=Object(c["a"])(u,n,s,!1,null,"0033858a",null);t["default"]=o.exports},ec36:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("aside",{staticClass:"left-link"},[r("ul",{ref:"lists",staticClass:"left-link__ul",on:{click:e.activatedRouterLink}},e._l(e.linkList,(function(t){return r("router-link",{key:t.name,staticClass:"left-link__li",attrs:{tag:"li",to:t.routePath}},[e._v(" "+e._s(t.name)+" ")])})),1)])},s=[],i=(r("caad"),r("2532"),{getCustomerLinks:function(){return[{routePath:"/vue-greendays/customerservice",name:"고객센터"},{routePath:"/vue-greendays/customerservice/logi_guide",name:"배송가이드"},{routePath:"/vue-greendays/customerservice/notice",name:"공지사항"},{routePath:"/vue-greendays/customerservice/faq",name:"자주묻는질문"},{routePath:"/vue-greendays/customerservice/terms",name:"이용약관"},{routePath:"/vue-greendays/customerservice/private_info_policy",name:"개인정보취급방침"}]},getUserInfoLinks:function(){return[{routePath:"/vue-greendays/user/edit/:userId",name:"내 정보 관리"},{routePath:"/vue-greendays/user/total_order_refund/:userId",name:"주문 및 반품 내역"},{routePath:"/vue-greendays/user/point/:userId",name:"포인트"}]}}),a={data:function(){return{linkList:[]}},computed:{getCustomerLinks:i.getCustomerLinks,getUserInfoLinks:i.getUserInfoLinks},methods:{activatedRouterLink:function(e){var t=this.$refs.lists.firstChild,r=t.classList,n=Array.prototype.includes;t===e.target?n.call(r,"router-link-exact-active")||r.add("router-link-exact-active"):n.call(r,"router-link-exact-active")&&r.remove("router-link-exact-active")}},created:function(){this.linkList=this.$route.path.includes("customerservice")?this.getCustomerLinks:this.getUserInfoLinks},mounted:function(){this.$refs.lists.firstChild.classList.add("router-link-exact-active")}},u=a,c=(r("a130"),r("2877")),o=Object(c["a"])(u,n,s,!1,null,"396db3b0",null);t["a"]=o.exports},f562:function(e,t,r){}}]);
//# sourceMappingURL=chunk-cfc46e54.fb2c385e.js.map
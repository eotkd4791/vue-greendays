const shoppingRoutes = [
	{
		path: '/vue-greendays/products',
		name: 'products',
		component: () => import('@/views/ProductView.vue')
	},
	{
		path: '/vue-greendays/products/show/:productId',
		name: 'productDetail',
		component: () => import('@/views/ProductDetailView.vue')
	},
	{
		path: '/vue-greendays/wishlist/:userId',
		name: 'wishList',
		component: () => import('@/views/WishListView.vue')
	},
	{
		path: '/vue-greendays/cartitems/:userId',
		name: 'cartItems',
		component: () => import('@/views/CartItems.vue')
	}
];

export default shoppingRoutes;

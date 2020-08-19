const shoppingRoutes = [
	{
		path: '/products',
		name: 'products',
		component: () => import('@/views/ProductView.vue'),
	},
	{
		path: '/products/show/:productId',
		name: 'productDetail',
		component: () => import('@/views/ProductDetailView.vue'),
	},
	{
		path: '/wishlist/:userId',
		name: 'wishList',
		component: () => import('@/views/WishListView.vue'),
	},
	{
		path: '/cartitems/:userId',
		name: 'cartItems',
		component: () => import('@/views/CartItems.vue'),
	},
];

export default shoppingRoutes;

import MainView from '@/views/MainView.vue';
import Introduction from '@/views/Introduction.vue';
import Reviews from '@/views/Reviews.vue';
import ProductView from '@/views/ProductView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';
import WishList from '@/views/WishList.vue';
import CartItems from '@/views/CartItems.vue';

const shoppingRoutes = [
	{
		path: '/',
		name: 'main',
		component: MainView,
	},
	{
		path: '/introduction',
		component: Introduction,
		name: 'introduction',
	},
	{
		path: '/reviews',
		component: Reviews,
		name: 'reviews',
	},
	{
		path: '/products',
		component: ProductView,
		name: 'products',
	},
	{
		path: '/products/:productId',
		component: ProductDetailView,
		name: 'productDetail',
	},
	{
		path: '/wishlist/:userId',
		component: WishList,
		name: 'wishList',
	},
	{
		path: '/cartitems/:userId',
		component: CartItems,
		name: 'cartItems',
	},
];

export default shoppingRoutes;

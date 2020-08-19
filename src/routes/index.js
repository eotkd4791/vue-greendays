import Vue from 'vue';
import VueRouter from 'vue-router';

import userRoutes from '@/routes/user.js';
import authRoutes from '@/routes/auth.js';
import shoppingRoutes from '@/routes/shopping.js';
import customerServiceRoutes from '@/routes/customerService.js';
import publicRoutes from '@/routes/public.js';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	// scrollBehavior,
	routes: [
		userRoutes,
		customerServiceRoutes,
		...authRoutes,
		...shoppingRoutes,
		...publicRoutes,
	],

	scrollBehavior() {
		return { x: 0, y: 0 };
	},
});

export default router;

export default {
	methods: {
		movePage(to) {
			if (to === '#' || this.$route.path === to) return;
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
			const nextPage = { path: to };
			this.$router.push(nextPage);
		}
	}
};

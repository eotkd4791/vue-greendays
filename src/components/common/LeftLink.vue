<template>
	<aside class="left-link">
		<ul class="left-link__ul" ref="lists" @click="activatedRouterLink">
			<RouterLink
				tag="li"
				:to="link.routePath"
				v-for="link in linkList"
				:key="link.name"
				class="left-link__li"
			>
				{{ link.name }}
			</RouterLink>
		</ul>
	</aside>
</template>

<script>
import getLinkList from '@/static/links.js';

export default {
	data() {
		return {
			linkList: []
		};
	},

	computed: {
		getCustomerLinks: getLinkList.getCustomerLinks,
		getUserInfoLinks: getLinkList.getUserInfoLinks
	},

	methods: {
		activatedRouterLink(e) {
			const firstList = this.$refs.lists.firstChild;
			const classList = firstList.classList;
			const includes = Array.prototype.includes;

			if (firstList === e.target) {
				if (!includes.call(classList, 'RouterLink-exact-active'))
					classList.add('RouterLink-exact-active');
			} else {
				if (includes.call(classList, 'RouterLink-exact-active'))
					classList.remove('RouterLink-exact-active');
			}
		}
	},

	created() {
		this.linkList = this.$route.path.includes('customerservice')
			? this.getCustomerLinks
			: this.getUserInfoLinks;
	},

	mounted() {
		this.$refs.lists.firstChild.classList.add('RouterLink-exact-active');
	}
};
</script>

<style scoped>
.left-link {
	width: 260px;
	height: 532px;
}

.left-link__ul {
	width: 100%;
	list-style: none;
}

.left-link__li {
	font-size: 14px;
	font-weight: 400;
	margin: 0 0 20px;
	color: #000;
	cursor: pointer;
}

.RouterLink-active.RouterLink-exact-active {
	color: #42b850;
	font-weight: 500;
}
</style>

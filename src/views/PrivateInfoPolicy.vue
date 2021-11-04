<template>
	<section class="private-info-policy" v-once>
		<header class="private-info-policy__header">개인정보취급방침</header>
		<blockquote class="private-info-policy__blockquote" v-html="customerService.privateInfoPolicy" />
	</section>
</template>

<script>
import customerService from '@/static/customerService.js';

export default {
	data() {
		return {
			customerService,
		};
	},
};
</script>

<style scoped>
.private-info-policy {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 840px;
	min-height: 532px;
	font-size: 14px;
}

.private-info-policy__header {
	font-size: 20px;
	margin: 0 0 36px;
}

.private-info-policy__blockquote {
	padding: 30px 50px;
	border: 1px solid #dedede;
	white-space: normal;
}
</style>

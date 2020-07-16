<template>
	<section class="customer-service__container">
		<left-link />
		<router-view />
	</section>
</template>

<script>
import LeftLink from '@/components/common/LeftLink.vue';

export default {
	components: {
		LeftLink,
	},
};
</script>

<style scoped>
.customer-service__container {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	max-width: 1100px;
	min-height: 532px;
	margin: 150px auto 0;
}
</style>

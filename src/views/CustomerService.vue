<template>
	<section class="customer-service__container">
		<left-link />
		<transition name="fade" mode="out-in">
			<router-view />
		</transition>
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
@import '../style/transitionFade.css';

.customer-service__container {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	max-width: 1100px;
	min-height: 532px;
	margin: 0 auto;
}
</style>

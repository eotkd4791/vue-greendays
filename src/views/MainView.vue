<template>
	<div class="main-view">
		<PreorderNeon />
		<TotalPromotion />
	</div>
</template>

<script>
import PreorderNeon from '@/components/PreorderNeon.vue';
import TotalPromotion from '@/views/TotalPromotion.vue';

export default {
	components: {
		PreorderNeon,
		TotalPromotion
	}
};
</script>

<style scoped>
.main-view {
	width: 100%;
}
</style>

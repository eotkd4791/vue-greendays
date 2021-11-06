<template>
	<section class="logi-guide" v-once>
		<header class="logi-guide__header">배송가이드</header>
		<ul class="logi-guide__ul">
			<info-list
				v-for="item in listItems"
				:key="item.title"
				:eachOfListItems="item"
			/>
		</ul>
	</section>
</template>

<script>
import InfoList from '@/components/common/InfoList.vue';
import customerServiceList from '@/mixins/customerServiceList.js';

export default {
	components: {
		InfoList
	},
	mixins: [customerServiceList]
};
</script>

<style scoped>
.logi-guide {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 840px;
	min-height: 532px;
}
.logi-guide__header {
	font-size: 20px;
	margin: 0 0 36px;
}
.logi-guide__ul {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
}
</style>

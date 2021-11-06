<template>
	<section class="faq-list" v-once>
		<header class="faq-list__header">자주묻는질문</header>
		<ul class="faq-list__ul">
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
.faq-list {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 840px;
	min-height: 532px;
}
.faq-list__header {
	font-size: 20px;
	margin: 0 0 36px;
}
.faq-list__ul {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
}
</style>

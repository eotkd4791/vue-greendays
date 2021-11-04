<template>
	<li class="description-list">
		<h3 class="description-list__title" @click="showDetail = !showDetail">
			<p class="description-list__title__text">
				<slot name="title" />
			</p>
			<i class="fas" :class="{ 'fa-angle-right': !showDetail, 'fa-angle-down': showDetail }" />
		</h3>
		<aside class="description-list__body" v-if="showDetail">
			<slot name="body" />
			<slot name="additional-element" />
		</aside>
	</li>
</template>

<script>
export default {
	data() {
		return {
			showDetail: false,
		};
	},
};
</script>

<style scoped>
.description-list {
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 17px 0;
	font-size: 16px;
	border-bottom: 1px solid #dedede;
}

.description-list__title {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.description-list__body {
	margin-top: 20px;
}

.fa-angle-right,
.fa-angle-down {
	font-size: 24px;
	color: #dedede;
}
</style>

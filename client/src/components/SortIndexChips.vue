<template>
	<div class="chip">
		{{ sortindex }}
		<i class="fas fa-times-circle" @click="removeOne(sortindex)" />
	</div>
</template>

<script>
export default {
	props: ['sortindex'],
	methods: {
		removeOne(payload) {
			this.$emit('remove-chips', payload);
		},
	},
};
</script>

<style scoped>
.chip {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 30px;
	border-radius: 15px;
	margin: 0 10px 8px 0;
	padding: 0 7px 0 15px;
	background-color: #42b883;
	color: #fff;
	font-size: 16px;
	font-weight: 600;
}
.fas {
	margin-left: 10px;
	color: #fff;
	cursor: pointer;
}
</style>

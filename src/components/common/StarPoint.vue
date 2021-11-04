<template>
	<div class="star-point">
		<i
			v-for="index in 5"
			:key="index"
			class="fas fa-star"
			:class="{
				'star-point--active': satisfaction >= index,
				'star-point--small': starSize === 'small',
			}"
		/>
	</div>
</template>

<script>
export default { props: ['satisfaction', 'starSize'] };
</script>

<style scoped>
.fas.fa-star {
	font-size: 22px;
	color: #dedede;
}

.fas.fa-star.star-point--small {
	font-size: 16px;
}

.fas.fa-star.star-point--active {
	color: #42b850;
}
</style>

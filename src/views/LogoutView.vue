<template>
	<div class="log-out" />
</template>

<script>
export default {
	mounted() {
		this.$router.replace('/vue-greendays');
	}
};
</script>

<style scoped>
.log-out {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 9999;
	background-color: #fff;
}
</style>

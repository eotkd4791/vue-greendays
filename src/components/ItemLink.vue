<template>
	<ul class="item-link" @click="goToProductInfo">
		<li class="item-link__img">
			<img :src="`${productInfo.path}`" width="120" height="120" />
		</li>
		<li class="item-link__info">
			<ol class="item-link__ol">
				<li>{{ productInfo.brand }}</li>
				<li>{{ productInfo.nameOfProduct }}</li>
				<li>{{ `아이템번호 ${productInfo.id}` }}</li>
			</ol>
		</li>
	</ul>
</template>

<script>
export default {
	props: ['productInfo'],

	methods: {
		goToProductInfo() {
			this.$router.push(`/vue-greendays/products/show/${this.productInfo.id}`);
		},
	},
};
</script>

<style scoped>
.item-link {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	max-width: 1100px;
	width: 100%;
	height: 180px;
	padding: 20px;
	margin-bottom: 20px;
	border: 1px solid #dedede;
}

.item-link__img {
	width: 120px;
	height: 120px;
	margin-right: 20px;
}

.item-link__ol > li:nth-child(3) {
	margin-top: 20px;
	color: #dedede;
}
</style>

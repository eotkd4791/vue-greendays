<template>
	<div class="zoom-modal">
		<div class="zoom-modal__mask" @click="closeZoomModal" />
		<header class="zoom-modal__header">
			{{ `${currentIndex} / 4` }}
			<button class="zoom-modal__close" @click="closeZoomModal">
				<i class="fas fa-times" />
			</button>
		</header>
		<button class="zoom-modal__prev" @click="prevPhoto">
			<i class="fas fa-arrow-left" />
		</button>
		<section>
			<img :src="whichImage.photoUrl" alt="상품 사진" />
		</section>
		<button class="zoom-modal__next" @click="nextPhoto">
			<i class="fas fa-arrow-right" />
		</button>
	</div>
</template>

<script>
export default {
	props: ['whichImage'],

	data() {
		return {
			photosUrl: [],
			currentIndex: 1,
		};
	},

	computed: {},

	methods: {
		closeZoomModal() {
			this.$emit('off:zoom-modal');
		},

		prevPhoto() {},

		nextPhoto() {},
	},

	created() {
		// const { photosUrl, currentIndex } = { ...this.imgObj };
		// this.photo;
	},
};
</script>

<style scoped>

</style>

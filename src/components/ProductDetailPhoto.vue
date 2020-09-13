<template>
	<div class="photo">
		<product-photo-zoom v-if="showModal" :whichImage="{ photoUrls, index: photoUrls.indexOf(mainPhotoUrl) }" />
		<section class="photo__main">
			<img :src="mainPhotoUrl" alt="사진이 로딩중입니다." class="photo__img" @click="toggleModal" />
		</section>
		<ol class="photo__ol">
			<li v-for="(photoUrl, index) in photoUrls" :key="index" class="photo__sub" :class="{ 'photo__sub--picked': mainPhotoUrl === photoUrl }" @click="swapMainPhoto(index)">
				<img :src="photoUrl" alt="사진이 로딩중입니다." class="photo__img" />
			</li>
		</ol>
	</div>
</template>

<script>
import ProductPhotoZoom from '@/components/common/ProductPhotoZoom.vue';
import Bus from '@/utils/bus.js';
import { mapGetters } from 'vuex';

export default {
	components: {
		ProductPhotoZoom,
	},

	data() {
		return {
			showModal: false,
			mainPhotoUrl: '',
			photoUrls: [],
		};
	},

	computed: {
		...mapGetters({
			getProductDetail: 'shopping/getProductDetail',
		}),
	},

	methods: {
		swapMainPhoto(index) {
			this.mainPhotoUrl = this.photoUrls[index];
		},

		toggleModal() {
			this.showModal = !this.showModal;
		},

		setPhotos() {
			const { photoUrl, secondImgUrl, thirdImgUrl, fourthImgUrl } = this.getProductDetail;

			this.photoUrls = [...new Set([photoUrl, secondImgUrl, thirdImgUrl, fourthImgUrl])];
			this.mainPhotoUrl = this.photoUrls[0];
		},
	},

	created() {
		this.setPhotos();
	},

	mounted() {
		this.$on('off-zoom-modal', this.toggleModal);
		Bus.$on('change-product', this.setPhotos);
	},

	beforeDestroy() {
		Bus.$off('change-product', this.setPhotos);
	},
};
</script>

<style scoped>
.photo__main {
	width: 580px;
	height: 580px;
	margin-bottom: 30px;
	cursor: pointer;
}

.photo__ol {
	width: 580px;
}

.photo__sub {
	display: inline-block;
	margin: 0 10px 0 0;
	width: 70px;
	height: 70px;
	cursor: pointer;
}

.photo__sub.photo__sub--picked {
	border: 3px solid #42b883;
}

.photo__img {
	width: 100%;
	height: 100%;
}
</style>

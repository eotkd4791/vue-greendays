<template>
	<div class="photo">
		<ProductPhotoZoom
			v-if="showModal"
			:whichImage="{ photoUrls, index: photoUrls.indexOf(mainPhotoUrl) }"
		/>
		<section class="photo__main">
			<img :src="mainPhotoUrl" @click="toggleModal" />
		</section>
		<ol class="photo__ol">
			<li
				v-for="(photoUrl, index) in photoUrls"
				:key="index"
				class="photo__sub"
				:class="{ 'photo__sub--picked': mainPhotoUrl === photoUrl }"
				@click="swapMainPhoto(index)"
			>
				<img :src="photoUrl" class="photo__img" />
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
		ProductPhotoZoom
	},

	data() {
		return {
			showModal: false,
			mainPhotoUrl: '',
			photoUrls: []
		};
	},

	computed: {
		...mapGetters({
			getProductDetail: 'shopping/getProductDetail'
		})
	},

	methods: {
		swapMainPhoto(index) {
			this.mainPhotoUrl = this.photoUrls[index];
		},

		toggleModal() {
			this.showModal = !this.showModal;
		},

		setPhotos() {
			const {
				photoUrl,
				secondImgUrl,
				thirdImgUrl,
				fourthImgUrl
			} = this.getProductDetail;

			this.photoUrls = [
				...new Set([photoUrl, secondImgUrl, thirdImgUrl, fourthImgUrl])
			];
			this.mainPhotoUrl = this.photoUrls[0];
		}
	},

	mounted() {
		this.setPhotos();
		this.$on('off-zoom-modal', this.toggleModal);
		Bus.$on('change-product', this.setPhotos);
	},

	beforeDestroy() {
		Bus.$off('change-product', this.setPhotos);
	}
};
</script>

<style scoped>
.photo__main {
	width: 580px;
	height: 580px;
	margin-bottom: 30px;
	cursor: pointer;
	background-image: url('../assets/img/vans-slipon.jpeg');
	background-size: 580px;
	background-position: center;
	background-repeat: no-repeat;
}

.photo__main img {
	width: 100%;
	height: 100%;
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
	background-image: url('../assets/img/vans-slipon.jpeg');
	background-size: 70px;
	background-position: center;
	background-repeat: no-repeat;
}

.photo__sub.photo__sub--picked {
	border: 3px solid #42b883;
}

.photo__img {
	width: 100%;
	height: 100%;
}
</style>

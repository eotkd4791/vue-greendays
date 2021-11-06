<template>
	<ol>
		<li>
			<header class="toolbar__header" ref="header">
				<div class="toolbar__container">
					<transition name="rolling">
						<user-info-modal v-if="showUserInfo" />
					</transition>
					<toolbar-user-info />
					<toolbar-menu
						@on-toolbar-modal="openToolbarModal"
						@on-search-brands="openSearchBrands"
						@off-toolbar-modal="closeToolbarModal"
					/>
				</div>
			</header>
		</li>
		<li>
			<toolbar-modal
				:onToolbar="showToolbarModal"
				:toolbarToOpen="toolbarToOpen"
				:activeUserInfo="showUserInfo"
				@mouse-esc="closeToolbarModal"
			/>
		</li>
		<li>
			<brand-modal
				v-if="showModal && SearchBrandsModal"
				@close-brands="closeSearchBrands"
			/>
		</li>
	</ol>
</template>

<script>
import ToolbarUserInfo from '@/components/ToolbarUserInfo.vue';
import ToolbarMenu from '@/components/ToolbarMenu.vue';
import ToolbarModal from '@/components/common/ToolbarModal.vue';
import BrandModal from '@/components/common/BrandModal.vue';
import UserInfoModal from '@/components/common/UserInfoModal.vue';
import Bus from '@/utils/bus.js';

export default {
	components: {
		ToolbarModal,
		BrandModal,
		ToolbarMenu,
		ToolbarUserInfo,
		UserInfoModal
	},

	data() {
		return {
			user: {},
			showModal: false,
			showToolbarModal: false,
			SearchBrandsModal: false,
			toolbarToOpen: '',
			showUserInfo: false
		};
	},

	computed: {
		getUserInfo() {
			return this.$store.state.auth.userInfo;
		}
	},

	methods: {
		openToolbarModal(menuToOpen) {
			this.showToolbarModal = true;
			this.showModal = true;
			this.toolbarToOpen = menuToOpen;
		},

		openSearchBrands() {
			this.showModal = true;
			this.SearchBrandsModal = true;
		},

		closeToolbarModal() {
			this.showToolbarModal = false;
			this.showModal = false;
		},

		closeSearchBrands() {
			this.showModal = false;
			this.SearchBrandsModal = false;
		},

		toggleUserInfo() {
			!this.showUserInfo
				? this.$refs.header.style.setProperty('top', '280px')
				: this.$refs.header.style.setProperty('top', '0');

			this.showUserInfo = !this.showUserInfo;
		}
	},

	mounted() {
		Bus.$on('show-user-info', this.toggleUserInfo);
		Bus.$on('off-toolbar-modal', this.closeToolbarModal);
	}
};
</script>

<style scoped>
.toolbar__header {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 115px;
	position: fixed;
	top: 0;
	left: 0;
	background-color: white;
	z-index: 1003;
}
.toolbar__container {
	width: 100%;
	margin: 0 auto;
	height: 70px;
}

.rolling-enter-active,
.rolling-leave-active {
	transition: all 0.3s ease;
}

.rolling-enter,
.rolling-leave-to {
	transform: translateY(-280px);
	z-index: 0;
}
</style>

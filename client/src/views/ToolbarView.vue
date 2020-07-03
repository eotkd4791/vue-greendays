<template>
	<div>
		<header id="header" ref="header">
			<div class="container-logo">
				<transition name="rolling">
					<user-info-modal v-if="showUserInfo" :userInfo="user" />
				</transition>
				<toolbar-user-info :userLoggedIn="user.name" />
				<toolbar-menu
					@onToolbarModal="openToolbarModal"
					@onSearchBrands="openSearchBrands"
					@offToolbarModal="closeToolbarModal"
				/>
			</div>
		</header>
		<toolbar-modal
			:onToolbar="showToolbarModal"
			:toolbarToOpen="toolbarToOpen"
			:activeUserInfo="showUserInfo"
			@mouseEsc="closeToolbarModal"
		/>
		<brand-modal v-if="showModal && SearchBrandsModal" @closeBrands="closeSearchBrands" />
	</div>
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
		UserInfoModal,
	},
	data() {
		return {
			user: {},
			showModal: false,
			showToolbarModal: false,
			SearchBrandsModal: false,
			toolbarToOpen: '',
			showUserInfo: false,
		};
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
			if (!this.showUserInfo) {
				this.$refs.header.style.setProperty('top', '280px');
			} else {
				this.$refs.header.style.setProperty('top', '0');
			}
			this.showUserInfo = !this.showUserInfo;
		},
	},
	created() {
		this.user = this.$store.state.userInfo;
	},
	mounted() {
		Bus.$on('showUserInfo', this.toggleUserInfo);
	},
	beforeDestroy() {
		Bus.$off('showUserInfo', this.toggleUserInfo);
	},
};
</script>

<style scoped>
#header {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 115px;
	position: fixed;
	top: 0;
	left: 0;
	background-color: white;
	z-index: 1002;
}
.container-logo {
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
<template>
  <div>
    <header id="header">
      <user-info-modal v-if="showUserInfo" :userInfo="user" @closeUserInfo="toggleUserInfo"></user-info-modal>
      <div class="container-logo">
        <toolbar-user-info @userInfoOpen="toggleUserInfo" :userLoggedIn="user.name" />
        <toolbar-menu
          @onToolbarModal="openToolbarModal"
          @onSearchBrands="openSearchBrands"
          @offToolbarModal="closeToolbarModal"
        />
      </div>
    </header>
    <toolbar-modal
      v-if="showModal && showToolbarModal"
      :onToolbar="toolbarToOpen"
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
      user:{},
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
      this.showUserInfo = !this.showUserInfo;
    },
  },
  created() {
    this.user = this.$store.state.userInfo;
  },
}
</script>

<style scoped>
#header {
  width: 100%;
  height: 115px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 1002;
  overflow: hidden;
  transition: height 0.6s;
}
.container-logo {
  max-width: 1100px;
  height: 70px;
  margin: 0 auto;
}
</style>
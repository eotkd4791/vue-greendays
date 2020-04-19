<template>
  <div>  
    <header id="header">
      <div class="container-logo">
        <toolbar-user-info 
          :userLoggedIn="user.isLoggedIn"
        />
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
    <brand-modal
      v-if="showModal && SearchBrandsModal"
      @closeBrands="closeSearchBrands" 
    />
  </div>
</template>
 
<script>
import ToolbarUserInfo from '../components/ToolbarUserInfo.vue';
import ToolbarMenu from '../components/ToolbarMenu.vue';
import ToolbarModal from '../components/common/ToolbarModal.vue';
import BrandModal from '../components/common/BrandModal.vue';

export default {
  components: {
    ToolbarModal,
    BrandModal,
    ToolbarMenu,
    ToolbarUserInfo,
  },
  data() {
    return {
      user:{},
      showModal: false,
      showToolbarModal: false,
      SearchBrandsModal: false,
      toolbarToOpen: '',
    };
  },
  methods: {
    openToolbarModal(menuToOpen) {
      this.showToolbarModal = true;
      this.showModal = true;
      this.toolbarToOpen = menuToOpen;
    },
    closeToolbarModal() {
      this.showToolbarModal = false;
      this.showModal = false;
    },
    openSearchBrands() {
      this.showModal = true;
      this.SearchBrandsModal = true;
    },
    closeSearchBrands() {
      this.showModal = false;
      this.SearchBrandsModal = false;
    },
  },
  created() {
    this.user = this.$store.state.userInfo;
  }
}
</script>

<style scoped>
#header {
  width: 100%;
  height: 115px;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 9000;
}
.container-logo {
  max-width: 1100px;
  height: 70px;
  margin: 0 auto;
}
</style>
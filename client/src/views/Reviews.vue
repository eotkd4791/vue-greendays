<template>
  <div class="reviews">
    <inspection-center></inspection-center>
    <user-reviews></user-reviews>
  </div>
</template>

<script>
import InspectionCenter from "@/components/InspectionCenter.vue";
import UserReviews from "@/components/UserReviews.vue";

export default {
  components: {
    InspectionCenter,
    UserReviews
  }
};
</script>

<style scoped>
.reviews {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 960px;
  margin: 150px auto 0;
}
</style>

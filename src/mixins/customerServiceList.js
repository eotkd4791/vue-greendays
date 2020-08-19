import customerService from '@/static/customerService.js';

export default {
  data() {
    return {
      listItems: [],
    };
  },
  created() {
    const currentLocation = this.$route.name;
    this.listItems = customerService[currentLocation];
  },
}
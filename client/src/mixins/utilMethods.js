export default {
  methods: {
    movePage(to) {
      if (to === '#') return;
      if (this.$route.path !== to) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        const nextPage = {
          path: to
        };
        this.$router.push(nextPage);
      }
    },
  }
}
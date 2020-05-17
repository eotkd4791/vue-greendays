export const movePage = (to) => {
  if(to ==='#') return;
  if(this.$route.path !== to) {
    console.log("scroll");
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    const nextPage = { path: to };
    this.$router.push(nextPage);
  }
};
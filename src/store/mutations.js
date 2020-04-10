export const mutations = () => ({
  SET_USER(state, payload) {
    this.state.user = payload.userId;
    console.log("mutations");
    this.isLoggedIn = true;
  },
});
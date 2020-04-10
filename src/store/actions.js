export const actions = () => ({
  USER_LOGIN({ commit }, payload) {
    console.log("actions")
    commit('SET_USER', payload);
  },
});
const state = () => ({
  isLoggedIn: false,
  userId: '',
});

const mutations = () => ({
  SET_USER(state, payload) {
    state.userId = payload.userId;
    state.isLoggedIn = true;
  },
});

const getters = () => ({

});

const actions = () => ({
  USER_LOGIN({ commit }, payload) {
    console.log("actions")
    commit('SET_USER', payload);
  },
});

export default {
  state,
  mutations,
  getters,
  actions
};
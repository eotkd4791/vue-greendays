const state = {
  isLoggedIn: false,
  userId: "daesang",
};

const mutations = {
  SET_USER(state, payload) {
    this.state.user = payload.userId;
    console.log("mutations");
    this.isLoggedIn = true;
  },
};

const getters = {

};

const actions = {
  USER_LOGIN({ commit }, payload) {
    console.log("actions")
    commit('SET_USER', payload);
  },
};

export default {
  state,
  mutations,
  getters,
  actions
};
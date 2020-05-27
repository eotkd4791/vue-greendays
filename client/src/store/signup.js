import { getEmailCheckCode } from '@/api/index';

const namespaced = true;

const state = () => ({

});

const mutations = () => ({
  SET_EMAIL(state, payload) {
    console.log("SET_EMAIL");
  }
});

const getters = () => ({

});

const actions = () => ({
  CHECK_EMAIL({ commit }, payload) {
    console.log("CHECK_EMAIL")
    getEmailCheckCode(payload)
      .then(res => {
        console.log(res);
        commit('SET_EMAIL',payload);
      })
      .catch(error => {
        console.error(error);
      });
  },
});

export default {
  state,
  mutations,
  getters,
  actions
};
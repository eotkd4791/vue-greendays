const USER_LOGIN = ({ commit }, payload) => {
  console.log("actions")
  commit('SET_USER', payload);
};

const CHECK_EMAIL = ({ commit }, payload) => {
  console.log("CHECK_EMAIL")
  getEmailCheckCode(payload)
    .then(res => {
      console.log(res);
      commit('SET_EMAIL',payload);
    })
    .catch(error => {
      console.error(error);
    });
};

export default {
  USER_LOGIN,
  CHECK_EMAIL,
}
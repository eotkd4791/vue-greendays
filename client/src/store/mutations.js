const SET_USER = (state, payload) => {
  state.userId = payload.userId;
  state.isLoggedIn = true;
};

export default {
  SET_USER,

}
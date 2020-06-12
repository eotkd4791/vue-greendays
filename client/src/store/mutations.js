const SET_USER = (state, payload) => {
  state.userId = payload.userId;
  state.isLoggedIn = true;
};

const SET_SEARCH_KEYWORD = (state, payload) => {
  state.userInfo.searchKeyword.currentSearch = payload;
};

export default {
  SET_USER,
  SET_SEARCH_KEYWORD,
}
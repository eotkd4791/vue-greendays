const mutations = {
	setUserChat(state, payload) {
		state.userChat = payload;
	},

	setGuestChat(state, payload) {
		state.guestChat = payload;
	}
};

export default mutations;

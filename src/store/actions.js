import { getItem, setItem } from '@/utils/storage.js';

const actions = {
	UPDATE_CHAT({ commit }, payload) {
		const storedUserInfo = getItem('userInfo');
		if (storedUserInfo) {
			storedUserInfo.chat.push(payload);
			setItem('userInfo', storedUserInfo);
			commit('setUserChat', storedUserInfo.chat);
		} else {
			let storedGuestChat = getItem('guestChat') || [];
			storedGuestChat.push(payload);
			setItem('guestChat', storedGuestChat);
			commit('setGuestChat', storedGuestChat);
		}
	},
};

export default actions;

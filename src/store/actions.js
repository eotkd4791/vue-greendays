import { getItem, setItem } from '@/utils/storage.js';
import addZero from '@/utils/setTwoDigit.js';

const actions = {
	FETCH_CHAT({ commit }) {
		const storedUserInfo = getItem('userInfo');
		if (storedUserInfo) {
			commit('setUserChat', storedUserInfo.chat);
		} else {
			const storedGuestChat = getItem('guestChat') || [
				{
					sender: 'GreenDays',
					sentTime: `${addZero(new Date().getHours())}:${addZero(
						new Date().getMinutes(),
					)}`,
					content: '그린데이즈에 오신 것을 환영합니다 :)',
				},
			];
			setItem('guestChat', storedGuestChat);
			commit('setGuestChat', storedGuestChat);
		}
	},

	UPDATE_CHAT({ commit }, payload) {
		const storedUserInfo = getItem('userInfo');
		if (storedUserInfo) {
			storedUserInfo.chat.push(payload);
			setItem('userInfo', storedUserInfo);
			commit('setUserChat', storedUserInfo.chat);
		} else {
			let storedGuestChat = getItem('guestChat');
			storedGuestChat.push(payload);
			setItem('guestChat', storedGuestChat);
			commit('setGuestChat', storedGuestChat);
		}
	},
};

export default actions;

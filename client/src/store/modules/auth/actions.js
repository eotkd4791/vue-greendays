import { getItem, setItem } from '@/utils/storage.js';
import dbUserList from '@/db/userList.js';

const actions = {
	FETCH_USER_LIST({ state, commit }) {
		//유저목록 가져오기
		try {
			const storedUserList = getItem('userList');
			if (storedUserList) {
				if (state.userList !== storedUserList) {
					commit('setUserList', storedUserList);
				}
			} else {
				setItem('userList', dbUserList);
				commit('setUserList', dbUserList);
			}
		} catch (error) {
			console.log(error);
		}
	},

	CHECK_EMAIL({ state, commit }, payload) {
		try {
			const existSameEmail = state.userList.find(
				user => user.email === payload,
			);
			if (existSameEmail) {
				throw new Error('이미 가입된 이메일입니다.');
			} else {
				alert('가입 가능한 이메일입니다.');
				return true;
			}
		} catch (error) {
			console.error(error);
			alert(error.message);
			return false;
		}
	},

	COMPARE_PROMOTION_CODE({ state, commit }, payload) {
		try {
			const additionalPoint = 2000;
			const payloadToCompare = payload.toUpperCase();
			const existSamePromotionCode = state.userList.find(
				user => user.promotionCode === payloadToCompare,
			);
			if (existSamePromotionCode) {
				alert(`${additionalPoint} 포인트를 성공적으로 지급하였습니다.`);
				return additionalPoint;
			} else {
				throw new Error('존재하지 않는 추천코드입니다.');
			}
		} catch (error) {
			console.error(error);
			alert(error.message);
			return false;
		}
	},

	SIGN_UP({ commit }, payload) {
		try {
			const storedUserList = getItem('userList');
			payload.id = storedUserList.length + 1;
			storedUserList.unshift(payload);
			setItem('userList', storedUserList);
			setItem('userInfo', payload);
			commit('setNewUser', payload);
			commit('setUser', payload);
		} catch (error) {
			console.error(error);
		}
	},

	LOG_IN({ state, commit }, payload) {
		try {
			const existUser = state.userList.find(
				user =>
					user.email === payload.email && user.password === payload.password,
			);
			if (existUser) {
				setItem('userInfo', existUser);
				commit('setUser', existUser);
			} else {
				throw new Error('이메일 혹은 비밀번호를 확인해주십시오.');
			}
		} catch (error) {
			return error;
		}
	},

	LOG_OUT({ commit }) {
		try {
			setItem('userInfo', null);
			commit('setUser', null);
		} catch (error) {
			console.error(error);
		}
	},

	IS_LOGGED_IN({ commit }) {
		try {
			const storedUserInfo = getItem('userInfo');
			const storedUserList = getItem('userList');
			setItem('userInfo', storedUserInfo);
			setItem('userList', storedUserList);
			commit('setUser', storedUserInfo ? storedUserInfo : null);
			commit('setUserList', storedUserList ? storedUserList : null);
			return !!storedUserInfo;
		} catch (error) {
			console.error(error);
		}
	},

	QUIT_MEMBERSHIP({ commit }) {
		const storedUserInfo = getItem('userInfo');
		const storedUserList = getItem('userList');
		const indexToDelete = storedUserList.indexOf(storedUserInfo);
		storedUserList.splice(indexToDelete, 1);
		setItem('userInfo', {});
		setItem('userList', storedUserInfo);
		commit('setUser', {});
		commit('setUserList', storedUserList);
	},

	ADD_NEW_SHIPPING_ADDRESS({ commit }, payload) {
		const storedUserInfo = getItem('userInfo');
		storedUserInfo.shippingAddressList.push(payload);
		setItem('userInfo', storedUserInfo);
		commit('addShippingAddress', payload);
	},

	DELETE_SHIPPING_ADDRESS({ commit }, payload) {
		const storedUserInfo = getItem('userInfo');
		storedUserInfo.shippingAddressList.splice(payload, 1);
		setItem('userInfo', storedUserInfo);
		commit('deleteShippingAddress', payload);
	},

	FETCH_SEARCH_KEYWORD({ commit }) {
		const storedUserInfo = getItem('userInfo');
		commit('setSearchedKeyword', storedUserInfo.searchedKeyword);
	},

	ADD_SEARCH_KEYWORD({ commit }, payload) {
		const storedUserInfo = getItem('userInfo');
		const isUnique = storedUserInfo.searchedKeyword.find(v => v === payload);
		if (isUnique) {
			storedUserInfo.searchedKeyword.unshift(payload);
			setItem('userInfo', storedUserInfo);
			commit('addSearchKeyword', payload);
		}
	},

	DELETE_ALL_SEARCH_KEYWORD({ commit }) {
		const storedUserInfo = getItem('userInfo');
		storedUserInfo.searchedKeyword = [];
		setItem('userInfo', storedUserInfo);
		commit('deleteAllSearchKeyword');
	},
};

export default actions;

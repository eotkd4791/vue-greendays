import { getItem, setItem } from '@/utils/storage.js';
import dbUserList from '@/db/userList.js';
import { isEmpty } from 'lodash';

const actions = {
	//유저목록 가져오기
	FETCH_USER_LIST({ state, commit }) {
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

	//이메일 중복확인
	CHECK_EMAIL({ state }, payload) {
		try {
			const existSameEmail = state.userList.find(user => user.email === payload);
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

	// 추천 코드 비교
	COMPARE_PROMOTION_CODE({ state }, payload) {
		try {
			const additionalPoint = 2000;
			const payloadToCompare = payload.toUpperCase();
			const existSamePromotionCode = state.userList.find(user => user.promotionCode === payloadToCompare);
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

	//회원가입
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

	//로그인
	LOG_IN({ state, commit }, payload) {
		try {
			const existUser = state.userList.find(user => user.email === payload.email && user.password === payload.password);
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

	// 로그아웃
	LOG_OUT({ commit }) {
		try {
			setItem('userInfo', null);
			commit('setUser', null);
		} catch (error) {
			console.error(error);
		}
	},

	//로그인 여부 확인
	IS_LOGGED_IN({ commit }) {
		try {
			const storedUserInfo = getItem('userInfo');
			const storedUserList = getItem('userList');
			setItem('userInfo', storedUserInfo);
			setItem('userList', storedUserList);
			commit('setUser', storedUserInfo ? storedUserInfo : null);
			commit('setUserList', storedUserList ? storedUserList : null);
			return storedUserInfo;
		} catch (error) {
			console.error(error);
		}
	},

	//회원 탈퇴
	QUIT_MEMBERSHIP({ commit }) {
		const storedUserInfo = getItem('userInfo');
		const storedUserList = getItem('userList');
		const indexToDelete = storedUserList.indexOf(storedUserInfo);
		storedUserList.splice(indexToDelete, 1);
		setItem('userInfo', null);
		setItem('userList', storedUserInfo);
		commit('setUser', null);
		commit('setUserList', storedUserList);
	},

	// 배송지 추가
	ADD_NEW_SHIPPING_ADDRESS({ commit }, payload) {
		const storedUserInfo = getItem('userInfo');
		storedUserInfo.shippingAddressList.push(payload);
		setItem('userInfo', storedUserInfo);
		commit('addShippingAddress', payload);
	},

	// 배송지 삭제
	DELETE_SHIPPING_ADDRESS({ commit }, payload) {
		const storedUserInfo = getItem('userInfo');
		storedUserInfo.shippingAddressList.splice(payload, 1);
		setItem('userInfo', storedUserInfo);
		commit('deleteShippingAddress', payload);
	},

	// 최근 검색어 이력 가져오기
	FETCH_SEARCHED_KEYWORD({ state, commit }) {
		const { userInfo } = state;
		if (userInfo) {
			commit('setSearchedKeyword', userInfo.searchedKeyword);
		} else {
			const storedGuestKeyword = getItem('guestKeywords');
			if (storedGuestKeyword) {
				commit('shopping/setGuestKeywords', storedGuestKeyword, { root: true });
			} else {
				setItem('guestKeywords', []);
			}
		}
	},

	ADD_SEARCH_KEYWORD({ state, commit, rootState }, payload) {
		try {
			const { userInfo } = state;
			const { shopping } = rootState;
			const isLoggedIn = !isEmpty(userInfo);
			const isUnique = isLoggedIn ? userInfo.searchedKeywords.find(v => v === payload) : shopping.guestKeywords.find(v => v === payload);

			if (!isUnique) {
				if (isLoggedIn) {
					const storedUserKeywords = getItem('userInfo');
					storedUserKeywords.searchedKeywords.unshift(payload);
					setItem('userInfo', storedUserKeywords);
					commit('addUserKeyword', payload);
				} else {
					const storedGuestKeywords = getItem('guestKeywords');
					storedGuestKeywords.unshift(payload);
					setItem('guestKeywords', storedGuestKeywords);
					commit('shopping/addGuestKeyword', payload, { root: true });
				}
			}
		} catch (error) {
			console.error(error);
		}
	},

	DELETE_ALL_SEARCH_KEYWORDS({ commit }) {
		const storedUserInfo = getItem('userInfo');
		if (!isEmpty(storedUserInfo)) {
			storedUserInfo.searchedKeywords = [];
			setItem('userInfo', storedUserInfo);
			commit('deleteAllSearchKeywords');
		} else {
			setItem('guestKeywords', null);
			commit('shopping/deleteAllGuestKeywords', null, { root: true });
		}
	},

	UPDATE_PICKED_BRANDS({ commit }, { key, value }) {
		const storedUserInfo = getItem('userInfo');
		const existPickedCategory = Object.values(value).filter(v => v).length > 0 ? true : false;

		existPickedCategory ? (storedUserInfo.pickedBrands[key] = value) : delete storedUserInfo.pickedBrands[key];

		setItem('userInfo', storedUserInfo);
		commit('setUser', storedUserInfo);
	},

	DELETE_PICKED_BRANDS({ commit }, payload) {
		const storedUserInfo = getItem('userInfo');

		payload.forEach(v => {
			delete storedUserInfo.pickedBrands[v];
		});

		setItem('userInfo', storedUserInfo);
		commit('setUser', storedUserInfo);
	},

	ADD_WISHLIST({ commit }, payload) {
		const storedUserInfo = getItem('userInfo');
		storedUserInfo.wishList.push(payload);
		setItem('userInfo', storedUserInfo);
		commit('setUser', storedUserInfo);
	},

	DELETE_WISHLIST({ commit }, payload) {
		const storedUserInfo = getItem('userInfo');
		payload.forEach(v => {
			const indexToDelete = storedUserInfo.wishList.findIndex(o => o.id === v);
			storedUserInfo.wishList.splice(indexToDelete, 1);
		});
		setItem('userInfo', storedUserInfo);
		commit('setUser', storedUserInfo);
	},
};

export default actions;

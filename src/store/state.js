import addZero from '@/utils/setTwoDigit.js';

const state = () => ({
	userChat: [],
	guestChat: [
		{
			sender: 'GreenDays',
			sentTime: `${addZero(new Date().getHours())}:${addZero(
				new Date().getMinutes(),
			)}`,
			content: '그린데이즈에 오신 것을 환영합니다 :)',
		},
	],
});

export default state;

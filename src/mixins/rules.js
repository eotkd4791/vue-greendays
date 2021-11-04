export default {
	data() {
		return {
			emailRules: [v => !!v || '이메일 입력하세요.', v => /[\S]+@[\S\D]+\.[\S\D]+/gi.test(v) || '이메일 형식이 올바르지 않습니다.'],
			passwordRules: [
				v => !!v || '패스워드를 입력하세요.',
				v => /[0-9]/g.test(v) || '숫자가 존재하지 않습니다.',
				v => /[a-z]/gi.test(v) || '영어 알파벳이 존재하지 않습니다.',
				v => /[~!@#$%^&*/?]/g.test(v) || '특수문자가 존재하지 않습니다.',
				v => !(v.length < 8 || v.length > 20) || '비밀번호 자릿수를 확인해 주세요.',
				v => /[^ㄱ-힣]/gi.test(v) || '한글 작성이 불가능합니다. 한영키를 눌러주세요.',
			],
		};
	},
};

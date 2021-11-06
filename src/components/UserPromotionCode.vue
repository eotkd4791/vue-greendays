<template>
	<div class="user-promotion-code">
		<h1 class="user-promotion-code__h1">
			{{ promotionCode }}
		</h1>
		<ul class="user-promotion-code__ul">
			<li class="user-promotion-code__li">
				*추천코드 입력 후 가입 시 2,000포인트 즉시 지급! (횟수 제한 없음)
			</li>
			<li class="user-promotion-code__li">
				*적립대상 : 신규 회원, 추천 회원 (전부 지급)
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState('auth', {
			promotionCode: state => state.userInfo.promotionCode
		})
	}
};
</script>

<style scoped>
.user-promotion-code__h1 {
	margin: 0 0 16px;
}

.user-promotion-code__li {
	font-size: 13px;
	color: #b6b6b6;
}
</style>

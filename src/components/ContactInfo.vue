<template>
	<div class="info-wrapper">
		<div class="info-container">
			<section class="info-container__contact">
				<div class="info-container__contact__title">무엇이든 물어보세요!</div>
				<span class="info-container__contact__ask">
					<i class="fas fa-info" />
					<span
						class="info-container__contact__ask__text"
						@click="onChannelTalk"
						>1 : 1 실시간 문의</span
					>
					<i class="fas fa-chevron-right" />
				</span>
				<ul class="info-container__contact__subtitle">
					<li>Tel. 032-123-4567</li>
					<li>AM 09:30 ~ PM 18:00</li>
					<li>CLOSED (SAT, SUN, HOLIDAY)</li>
				</ul>
			</section>

			<section class="info-container__bank">
				<span class="info-container__bank__title">BANK ACCOUNT</span>
				<p class="info-container__bank__subtitle">신한은행 110-359-XXXXXX</p>
				<p class="info-container__bank__subtitle">예금주:(주)그린데이즈</p>
			</section>

			<aside class="info__link">
				<a href="https://www.instagram.com/st2f_you/">
					<i class="fab fa-instagram" />
				</a>
				<a href="https://www.facebook.com/profile.php?id=100049844413064">
					<i class="fab fa-facebook" />
				</a>
				<a href="https://www.github.com/eotkd4791">
					<i class="fab fa-github" />
				</a>
			</aside>
		</div>
	</div>
</template>

<script>
import Bus from '@/utils/bus.js';
export default {
	methods: {
		onChannelTalk() {
			Bus.$emit('toggle-channel-talk');
		}
	}
};
</script>

<style scoped>
.info-wrapper {
	width: 100%;
	height: 260px;
	background-color: #f8f8f8;
	color: #8b8b8b;
	font-size: 14px;
	font-family: 'Montserrat';
}

.info-container {
	max-width: 1100px;
	display: flex;
	height: 100%;
	margin: 0 auto;
}

.info-container__contact {
	width: 200px;
	height: 100%;
	font-size: 16px;
	margin: 0 120px 0 0;
}

.info-container__contact__title {
	font-size: 14px;
	margin: 50px 0 36px;
}

.info-container__contact__ask {
	display: block;
	font-size: 13px;
	margin: 0 0 36px;
	cursor: pointer;
}

.fa-info {
	margin: 0 12px 0 0;
}

.info-container__contact__ask__text {
	font-size: 13px;
	margin: 0 12px 0 0;
	color: #252525;
}

.info-container__contact__subtitle > li {
	font-size: 12px;
	margin: 0 0 15px;
}

.info-container__bank {
	margin: 50px auto 0 0;
}

.info-container__bank__title {
	display: block;
	font-size: 14px;
	margin: 0 0 36px;
}

.info-container__bank__subtitle {
	font-size: 12px;
	margin: 0 0 9px;
}

.info__link {
	font-size: 30px;
	display: flex;
	align-items: flex-end;
	margin: 0 0 20px;
}

.fab {
	color: #8b8b8b;
	margin: 0 20px 0 0;
	cursor: pointer;
}
</style>

<template>
	<div class="channel-talk">
		<transition name="zoom-in">
			<img
				src="@/assets/img/green-present.png"
				alt="Greendays"
				class="channel-talk__off"
				v-if="!onChannelTalk"
				@click="onChannelTalk = true"
			/>
		</transition>
		<transition name="zoom-in">
			<aside class="channel-talk__on" v-if="onChannelTalk">
				<header class="channel-talk__header">
					<h1 class="channel-talk__h1">그린데이즈</h1>
					<i class="fas fa-times" @click="onChannelTalk = false" />
				</header>
				<ol class="channel-talk__message">
					<li
						class="channel-talk__list"
						:class="{ 'channel-talk__list--fromMe': item.sender!=='GreenDays' }"
						v-for="(item, index) in messages"
						:key="index"
					>
						<ol class="channel-talk__info">
							<li class="channel-talk__info-list" v-if="item.sender==='GreenDays'">
								<img src="@/assets/img/green-present.png" alt="Greendays" class="channel-talk__info-img" />
							</li>
							<li class="channel-talk__info-list">
								<h2 class="channel-talk__sender">{{ item.sender }}</h2>
							</li>
							<li class="channel-talk__info-list">
								<h3 class="channel-talk__sentedTime">{{ item.sentedTime }}</h3>
							</li>
						</ol>
						<article
							class="channel-talk__content"
							:class="{ 'channel-talk__content--fromMe': item.sender!=='GreenDays' }"
						>{{ item.content }}</article>
					</li>
				</ol>
				<footer class="channel-talk__footer">
					<input
						type="text"
						v-model.trim="newMessage"
						class="channel-talk__input"
						placeholder="메시지를 입력해주세요."
						required
						@keypress.enter="onSubmitMessage"
					/>
					<button class="channel-talk__btn" @click="onSubmitMessage">
						<i class="far fa-paper-plane" />
					</button>
				</footer>
			</aside>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			onChannelTalk: false,
			newMessage: '',
			messages: [
				{
					sender: 'GreenDays',
					sentedTime: '18:27',
					content: '할랄랄롤랄랄',
				},
				{
					sender: 'Daesang',
					sentedTime: '18:27',
					content: '호롤똘끼 하랄똘끼',
				},
				{
					sender: 'Daesang',
					sentedTime: '18:27',
					content:
						'호롤똘끼 하랄똘끼호롤똘끼 하랄똘끼호롤똘끼 하랄똘끼호롤똘끼 하랄똘끼호롤똘끼 하랄똘끼호롤똘끼 하랄똘끼호롤똘끼 하랄똘끼',
				},
				{
					sender: 'Daesang',
					sentedTime: '18:27',
					content: '호롤똘끼 하랄똘끼',
				},
				{
					sender: 'Daesang',
					sentedTime: '18:27',
					content: '호롤똘끼 하랄똘끼',
				},
				{
					sender: 'Daesang',
					sentedTime: '18:27',
					content: '호롤똘끼 하랄똘끼',
				},
				{
					sender: 'Daesang',
					sentedTime: '18:27',
					content: '호롤똘끼 하랄똘끼',
				},
				{
					sender: 'GreenDays',
					sentedTime: '18:27',
					content: '할랄랄롤랄랄',
				},
				{
					sender: 'GreenDays',
					sentedTime: '18:27',
					content: '할랄랄롤랄랄',
				},
				{
					sender: 'GreenDays',
					sentedTime: '18:27',
					content: '할랄랄롤랄랄',
				},
				{
					sender: 'GreenDays',
					sentedTime: '18:27',
					content: '할랄랄롤랄랄',
				},
				{
					sender: 'GreenDays',
					sentedTime: '18:27',
					content: '할랄랄롤랄랄',
				},
			],
		};
	},
	methods: {
		onSubmitMessage() {
			const messageRemovedSpace = this.newMessage.replace(/ /g, '');
			if (messageRemovedSpace.length === 0 || !this.newMessage) return;
			const currentTime = new Date();
			this.messages.push({
				sender: 'GreenDays',
				sentedTime: `${currentTime.getHours()} ${currentTime.getMinutes()}`,
				content: this.newMessage,
			});
			this.newMessage = null;
		},
	},
	created() {
		// localStorage.getItem();
	},
};
</script>

<style scoped>
.channel-talk {
	position: fixed;
	bottom: 30px;
	right: 30px;
	z-index: 9000;
}

.channel-talk__off {
	display: block;
	width: 70px;
	height: 70px;
	filter: drop-shadow(5px 5px 5px #000);
	cursor: pointer;
	position: fixed;
	bottom: 30px;
	right: 30px;
}

.channel-talk__on {
	width: 320px;
	height: 610px;
	background-color: #fff;
	border-radius: 15px;
	box-shadow: 0 10px 10px 0 #444;
}

.channel-talk__header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 60px;
	padding: 0 20px;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	color: #fff;
	background-color: #42b858;
	font-weight: 700;
}

.fa-times {
	cursor: pointer;
}

.channel-talk__message {
	width: 100%;
	height: 500px;
	padding: 0 20px;
	overflow-y: scroll;
}

.channel-talk__list {
	width: 130px;
	padding: 10px;
	position: relative;
	left: 0;
}
.channel-talk__list.channel-talk__list--fromMe {
	position: relative;
	left: 160px;
}

.channel-talk__info {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 20px;
	font-size: 12px;
	font-weight: 600;
}

.channel-talk__info-img {
	width: 15px;
	height: 15px;
}

.channel-talk__content {
	max-width: 250px;
	padding: 10px;
	border-radius: 20px;
	background-color: #dedede;
	color: #000;
	font-size: 13px;
}

.channel-talk__content.channel-talk__content--fromMe {
	color: #fff;
	font-weight: 700;
	background-color: #42b858;
}

.channel-talk__footer {
	position: absolute;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid #dedede;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	z-index: 9002;
	background-color: #fff;
}

.channel-talk__input {
	width: 250px;
	height: 100%;
	padding: 20px;
}

.channel-talk__btn {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 70px;
	height: 100%;
	border-left: 1px solid #dedede;
	border-bottom-right-radius: 15px;
	background-color: #42b858;
}

.fa-paper-plane {
	cursor: pointer;
	color: #fff;
	font-size: 20px;
}

.channel-talk__ .zoom-in-enter-active,
.zoom-in-leave-active {
	transition: transform 0.25s;
}
.zoom-in-enter,
.zoom-in-leave-to {
	transform: scale(0, 0);
}
</style>
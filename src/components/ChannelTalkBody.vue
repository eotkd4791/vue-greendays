<template>
	<transition name="zoom-in">
		<aside class="channel-talk__on">
			<header class="channel-talk__header">
				<h1 class="channel-talk__h1">그린데이즈</h1>
				<i class="fas fa-times" @click="closeChannelTalk" />
			</header>
			<ol
				class="channel-talk__message"
				ref="message"
				v-chat-scroll="{ smooth: true, notSmoothOnInit: true }"
			>
				<li
					class="channel-talk__list"
					:class="{ 'channel-talk__list--fromMe': item.sender !== 'GreenDays' }"
					v-for="(item, index) in messages"
					:key="index"
				>
					<ol class="channel-talk__info">
						<li class="channel-talk__info-list" v-if="item.sender === 'GreenDays'">
							<img src="@/assets/img/green-present.png" alt="Greendays" class="channel-talk__info-img" />
						</li>
						<li class="channel-talk__info-list">
							<h2 class="channel-talk__sender">{{ item.sender }}</h2>
						</li>
						<li class="channel-talk__info-list">
							<h3 class="channel-talk__sentTime">{{ item.sentTime }}</h3>
						</li>
					</ol>
					<article
						class="channel-talk__content"
						:class="{
							'channel-talk__content--fromMe': item.sender !== 'GreenDays',
						}"
					>{{ item.content }}</article>
				</li>
			</ol>
			<footer class="channel-talk__footer">
				<input
					type="text"
					v-model.trim="newMessage"
					ref="input"
					class="channel-talk__input"
					placeholder="메시지를 입력해주세요."
					required
					@keyup.enter="onSubmitMessage"
				/>
				<button class="channel-talk__btn" @click="onSubmitMessage">
					<i class="far fa-paper-plane" />
				</button>
			</footer>
		</aside>
	</transition>
</template>

<script>
import Bus from '@/utils/bus.js';
import addZero from '@/utils/setTwoDigit.js';
import { mapState, mapActions } from 'vuex';

export default {
	data() {
		return {
			newMessage: '',
			messages: [],
		};
	},

	computed: {
		...mapState({
			userChat: state => state.userChat,
			guestChat: state => state.guestChat,
			isLoggedIn: state => Boolean(state.auth.userInfo),
		}),
	},

	methods: {
		...mapActions(['UPDATE_CHAT']),

		async onSubmitMessage() {
			try {
				const messageRemovedSpace =
					this.newMessage !== null ? this.newMessage.replace(/ /g, '') : '';
				if (messageRemovedSpace.length === 0 || !this.newMessage) {
					this.newMessage = '';
					return;
				}
				const currentHour = new Date().getHours();
				const currentMinute = new Date().getMinutes();
				const newMessageObj = {
					sender: 'Me',
					sentTime: `${addZero(currentHour)}:${addZero(currentMinute)}`,
					content: this.newMessage,
				};
				this.messages.push(newMessageObj);

				await this.UPDATE_CHAT(this.messages);

				this.newMessage = null;
				this.$refs.input.focus();
			} catch (error) {
				console.error(error);
				alert(error.message);
			}
		},

		closeChannelTalk() {
			Bus.$emit('toggle-channel-talk');
		},
	},

	created() {
		this.messages = this.isLoggedIn ? this.userChat : this.guestChat;
	},

	mounted() {
		this.$refs.input.focus();
	},
};
</script>

<style scoped>
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
	word-break: break-all;
	max-width: 250px;
	padding: 15px;
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
	border-bottom-left-radius: 15px;
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

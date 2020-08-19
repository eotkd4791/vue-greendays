<template>
	<keep-alive>
		<div class="neon">
			<section class="neon__container">
				<header class="neon__header">
					한정된 기간동안만 열리는 특별한 타임세일!
				</header>
				<ol class="neon__letters" ref="switch">
					<li class="neon__light--off neon__first-group">P</li>
					<li class="neon__light--off neon__first-group">R</li>
					<li class="neon__light--off neon__first-group neon__letters--space">
						E
					</li>
					<li class="neon__light--off neon__second-group">O</li>
					<li class="neon__light--off neon__second-group">R</li>
					<li class="neon__light--off neon__second-group">D</li>
					<li class="neon__light--off neon__second-group">E</li>
					<li class="neon__light--off neon__second-group">R</li>
				</ol>
				<footer class="neon__footer">
					<span class="preorder__text">
						지금
						<span class="preorder__text--highlighter">
							{{ howManyPreorders }}
						</span>
						개의 프리오더 진행 중
					</span>
				</footer>
			</section>
		</div>
	</keep-alive>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			intervalsId: '',
		};
	},
	computed: {
		...mapState('shopping', {
			howManyPreorders: state => state.preorders.length,
		}),
	},

	mounted() {
		const neonSwitch = this.$refs.switch.childNodes;

		const interval = setInterval(() => {
			for (let i = 0; i < neonSwitch.length; i++) {
				setTimeout(() => {
					neonSwitch[i].classList.remove('neon__light--off');
					neonSwitch[i].classList.add('neon-light-on');
				}, 500 * (i + 1));
			}
			setTimeout(() => {
				for (let i = 0; i < neonSwitch.length; i++) {
					setTimeout(() => {
						neonSwitch[i].classList.toggle('neon__light--off');
						neonSwitch[i].classList.toggle('neon-light-on');
					}, 5200);
				}
			}, 2500);
		}, 1000);
		this.intervalsId = interval;
	},

	beforeDestroy() {
		clearInterval(this.intervalsId);
	},
};
</script>

<style scoped>
.neon {
	width: 100%;
	height: 280px;
	cursor: default;
}

.neon__container {
	max-width: 1100px;
	height: 100%;
	margin: 0 auto;
	background-image: url('../assets/img/preorder_background.png');
	border-radius: 10px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	color: #fff;
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-around;
	align-items: center;
}

.neon__header {
	font-size: 22px;
	font-weight: 800;
	margin-top: 30px;
}

.neon__letters {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 100px;
}

.neon__letters > li {
	font-family: 'Monoton', cursive;
}

.neon__letters--space {
	margin-right: 50px;
}

.neon-light-on {
	color: #8bc34a;
	filter: drop-shadow(0 0 25px #4dcf34);
}

.neon__light--off {
	color: #7c7c7c;
}

.neon__footer {
	margin-bottom: 30px;
	font-weight: 700;
}
.preorder__text--highlighter {
	color: #9aecdb;
	font-size: 18px;
}
</style>

<template>
	<ol class="modal-container" ref="modal">
		<li
			v-for="value in whichModal"
			:key="value"
			tag="li"
			class="modal-list"
			@click="pickedOrderBy({ value, detail: null })"
			@mouseover="activatingTab"
		>
			<span class="modal-text" v-text="value" />
		</li>
	</ol>
</template>

<script>
export default {
	props: ['whichModal'],

	data() {
		return {
			activatedTabIndex: 0,
		};
	},

	methods: {
		pickedOrderBy(value) {
			if (this.whichModal.length === 4) {
				if (this.whichModal.indexOf(value) === 0) {
					return this.$emit('pickedFirst');
				}
				this.$emit('pickedGender', value);
			} else {
				this.$emit('pickedOrderBy', value.value);
			}
		},

		activatingTab() {
			if (!this.$refs.modal) return;
			this.$refs.modal.childNodes[this.activatedTabIndex].classList.remove(
				'active',
			);
		},

		initializingTab() {
			this.$refs.modal.firstChild.classList.add('active');
			if (this.whichModal.length > 4) {
				this.$refs.modal.setAttribute('style', 'width: 150px');
			} else {
				this.$refs.modal.setAttribute('style', 'width: 72px');
			}
		},
	},

	mounted() {
		this.initializingTab();
	},
};
</script>

<style scoped>
.modal-container {
	position: absolute;
	top: 60px;
	z-index: 9000;
	color: #000;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.16);
}

.modal-list {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	cursor: pointer;
}

.active {
	color: #fff;
	background-color: #42b883;
}

.modal-list:hover {
	color: #fff;
	background-color: #42b883;
}

.modal-list:first-child {
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}

.modal-list:last-child {
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
}
</style>

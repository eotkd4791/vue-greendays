<template>
	<ol class="modal-container">
		<li class="modal-row-left" ref="tabs">
			<p v-for="value in Object.keys(getCategories)" :key="value" class="modal-categories" @mouseover="activatingMenu(value)" @click="pickedCategory({ value, detail: null })">
				{{ value }}
			</p>
		</li>
		<li class="modal-row-right">
			<ul>
				<li class="category__detail" v-for="kind in kinds" :key="kind" @click="pickedCategory({ value: tempCategory, detail: kind })">
					{{ kind }}
				</li>
			</ul>
		</li>
	</ol>
</template>

<script>
import searchOrderBy from '@/static/orderby.js';

export default {
	data() {
		return {
			kinds: [],
			tempCategory: '',
			activatedTabIndex: 0,
		};
	},

	computed: {
		getCategories() {
			return searchOrderBy.categories;
		},
	},

	methods: {
		activatingMenu(menu) {
			this.tempCategory = menu;
			this.kinds = this.getCategories[menu];
			if (!this.$refs.tabs) return;
			this.$refs.tabs.childNodes[this.activatedTabIndex].classList.remove('left-active');
			this.activatedTabIndex = Object.keys(this.getCategories).indexOf(menu);
			this.$refs.tabs.childNodes[this.activatedTabIndex].classList.add('left-active');
		},

		pickedCategory(payload) {
			this.$emit('picked-category', payload);
		},
	},

	mounted() {
		this.kinds = this.getCategories.Bags;
		this.$refs.tabs.firstChild.classList.add('left-active');
	},
};
</script>

<style scoped>
.modal-container {
	display: flex;
	width: 270px;
	height: 380px;
	position: absolute;
	top: 60px;
	left: 82px;
	border-radius: 5px;
	box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.16);
	font-size: 12px;
}

.modal-row-left {
	width: 110px;
	height: 100%;
	background-color: #fff;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	color: #000;
}

.modal-row-right {
	width: 160px;
	height: 100%;
	background-color: #42b883;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	color: #fff;
	overflow: scroll;
}

.category__detail,
.modal-categories {
	display: flex;
	padding: 0 0 0 10px;
	align-items: center;
	width: 100%;
	height: 40px;
}

.category__detail:hover {
	background-color: #fff;
	color: #42b883;
}

.left-active:first-child {
	border-top-left-radius: 5px;
}

.left-active {
	background-color: #42b883;
	color: #fff;
}

.right-active {
	background-color: #fff;
	color: #42b883;
}

.modal-categories:hover {
	background-color: #42b883;
	color: #fff;
}
</style>

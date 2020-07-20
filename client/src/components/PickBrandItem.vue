<template>
	<li class="brand-item">
		<input type="checkbox" class="brand-item__checkbox" v-model="isChecked" />
		<ul class="brand-item__categories">
			<router-link
				class="brand-item__title"
				tag="li"
				:to="`/product/${categoryPair[0]}`"
			>
				{{ categoryPair[0] }}
			</router-link>
			<li
				class="brand-item__list"
				v-for="(category, index) in Object.keys(categories)"
				:key="category"
			>
				<i
					class="fas fa-heart"
					:class="{ 'fa-heart--picked': Object.values(categories)[index] }"
				/>
				{{ category }}
			</li>
		</ul>
	</li>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	props: {
		categoryPair: Array,
	},

	data() {
		return {
			isChecked: false,
			categories: {
				Bags: false,
				Clothes: false,
				Shoes: false,
				Accessories: false,
				Wallets: false,
			},
		};
	},

	methods: {
		// ...mapActions('auth',[]),
	},

	created() {
		this.categories = this.categoryPair[1];
	},
};
</script>

<style scoped>
.brand-item {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	width: 230px;
	margin: 0 30px 40px 0;
}

.brand-item__checkbox {
	width: 20px;
	height: 20px;
	margin-bottom: 20px;
}

.brand-item__categories {
	width: 250px;
	height: 314px;
	padding: 0 20px;
	border-radius: 10px;
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}

.brand-item__list {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-top: 1px solid #ebebeb;
	font-size: 12px;
	height: 45px;
}

.brand-item__title {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	height: 80px;
	font-size: 18px;
	font-weight: 700;
}

.fa-heart {
	margin: 0 18px;
	color: #d9d9d9;
	cursor: pointer;
}

.fa-heart.fa-heart--picked {
	animation-name: rotating;
	animation-iteration-count: 2;
	animation-direction: alternate;
	animation-duration: 0.5s;
	color: #42b850;
}

@keyframes rotating {
	from {
		transform: rotateY(0turn);
	}
	to {
		transform: rotateY(0.5turn);
	}
}
</style>

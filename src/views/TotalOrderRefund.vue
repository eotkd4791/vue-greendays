<template>
	<section class="total-order-refund">
		<header class="total-order-refund__header">주문 및 반품 내역</header>
		<ul class="total-order-refund__ul">
			<li class="total-order-refund__li">
				<h3 class="total-order-refund__h3">결제완료</h3>
				<h2 class="total-order-refund__h2 total-order-refund__gray">
					{{ getUserInfo.orderDone.length }}
				</h2>
			</li>
			<li class="total-order-refund__li total-order-refund__li--border">
				<h3 class="total-order-refund__h3">배송중</h3>
				<h2 class="total-order-refund__h2 total-order-refund__green">
					{{ getUserInfo.delivering.length }}
				</h2>
			</li>
			<li class="total-order-refund__li">
				<h3 class="total-order-refund__h3">반품/교환</h3>
				<h2 class="total-order-refund__h2 total-order-refund__red">
					{{ getUserInfo.changeOrRefund.length }}
				</h2>
			</li>
		</ul>
	</section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters('auth', ['getUserInfo']),
	},
};
</script>

<style scoped>
.total-order-refund {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 840px;
}

.total-order-refund__header {
	font-size: 20px;
	margin: 0 0 36px;
}
.total-order-refund__ul {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 820px;
	height: 140px;
	border-top: 1px solid #dedede;
	border-bottom: 1px solid #dedede;
}

.total-order-refund__li {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 156px;
	height: 80px;
}

.total-order-refund__li--border {
	border-left: 1px solid #e0e0e0;
	border-right: 1px solid #e0e0e0;
}
.total-order-refund__h3 {
	font-size: 13px;
}

.total-order-refund__h2 {
	margin: 11px 0 0;
	font-size: 36px;
	font-weight: bold;
}
.total-order-refund__h2.total-order-refund__gray {
	color: #939393;
}
.total-order-refund__h2.total-order-refund__green {
	color: #29b100;
}
.total-order-refund__h2.total-order-refund__red {
	color: #e80000;
}
</style>

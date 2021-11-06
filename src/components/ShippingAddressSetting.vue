<template>
	<div class="shipping-address">
		<ol class="shipping-address__ol">
			<li
				class="shipping-address__li"
				v-for="(item, index) in getShippingAddressList"
				:key="index"
			>
				<ul class="shipping-address__ul">
					<li class="shipping-address__ul__li">{{ item.recipientName }}</li>
					<li class="shipping-address__ul__li">{{ item.recipientPhoneNum }}</li>
					<li class="shipping-address__ul__li">{{ item.recipientAddress }}</li>
				</ul>
				<button
					class="shipping-address__btn"
					@click="deleteShippingAddress(index)"
				>
					배송지 삭제
				</button>
			</li>
		</ol>
		<section class="shipping-address__add">
			<h1 class="shipping-address__add__h1">배송지 추가</h1>
			<form v-if="isShownNewAddress" class="shipping-address__add__form">
				<ul class="shipping-address__add__ul">
					<li class="shipping-address__add__li">
						<h3 class="shipping-address__add__subheader">받는분 이름</h3>
						<input
							type="text"
							class="shipping-address__add__input"
							required
							v-model="newShippingAddress.recipientName"
						/>
					</li>
					<li class="shipping-address__add__li">
						<h3 class="shipping-address__add__subheader">연락처</h3>
						<input
							type="text"
							class="shipping-address__add__input"
							placeholder=" - 제외하고 숫자만 입력"
							v-model="newShippingAddress.recipientPhoneNum"
							@input="isOnlyNumber"
							required
						/>
					</li>
					<li class="shipping-address__add__li">
						<h3 class="shipping-address__add__subheader">주소검색</h3>
						<input
							type="text"
							class="shipping-address__add__input shipping-address__add__input--margin"
							placeholder=" - 도로명, 지번주소 검색가능"
							v-model="userInfo.address"
							@click="openAddressSearch"
							readonly
							required
						/>
						<input
							type="text"
							class="shipping-address__add__input"
							placeholder=" - 상세주소 입력"
							required
							v-model="newShippingAddress.recipientDetailAddress"
						/>
					</li>
					<li class="shipping-address__add__li">
						<h3 class="shipping-address__add__subheader">
							배송 메시지
							<i class="fas fa-sort" />
						</h3>
						<select
							class="shipping-address__add__select"
							v-model="selectedShippingMessage"
						>
							<option
								value
								class="shipping-address__add__option"
								disabled
								selected
								>배송메시지를 선택해주세요.</option
							>
							<option
								class="shipping-address__add__option"
								:value="message"
								v-for="message in shippingMessages"
								:key="message"
								>{{ message }}</option
							>
						</select>
						<input
							type="text"
							class="shipping-address__add__input"
							placeholder="배송메시지 입력"
							v-if="isTypingInPerson"
							v-model="typeInPerson"
						/>
					</li>
				</ul>
			</form>
			<div class="shipping-address__add__div">
				<button
					@click="toggleAddShippingAddress"
					class="shipping-address__add__btn"
				>
					배송지 추가 +
				</button>
			</div>
		</section>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import daumAddressAPI from '@/mixins/daumAddressAPI.js';
import { debounce } from 'lodash';
import userInfo from '@/static/userInfo.js';

export default {
	mixins: [daumAddressAPI],
	data() {
		return {
			userInfo: {
				postCode: '',
				address: ''
			},
			newShippingAddress: {
				recipientName: '',
				recipientPhoneNum: '',
				recipientAddress: '',
				recipientDetailAddress: ''
			},
			shippingMessages: [],
			selectedShippingMessage: '',
			typeInPerson: '',
			isShownNewAddress: false
		};
	},

	computed: {
		...mapGetters('auth', ['getShippingAddressList']),
		isTypingInPerson() {
			return this.shippingMessages.indexOf(this.selectedShippingMessage) === 4;
		}
	},

	methods: {
		...mapActions('auth', [
			'ADD_NEW_SHIPPING_ADDRESS',
			'DELETE_SHIPPING_ADDRESS'
		]),

		validateForm() {
			const isUndefined = Object.values(this.newShippingAddress).find(v => v);
			return isUndefined && this.selectedShippingMessage.length > 0;
		},

		isOnlyNumber: debounce(function() {
			this.$set(
				this.newShippingAddress,
				'recipientPhoneNum',
				this.newShippingAddress.recipientPhoneNum.replace(/[^0-9]/gi, '')
			);
			alert('숫자만 입력가능합니다.');
		}, 250),

		resetForm() {
			this.userInfo = {};
			this.newShippingAddress = {};
			this.selectedShippingMessage = '';
			this.typeInPerson = '';
		},

		async toggleAddShippingAddress() {
			if (this.isShownNewAddress) {
				this.$set(
					this.newShippingAddress,
					'recipientAddress',
					this.userInfo.address
				);
				if (this.validateForm()) {
					await this.ADD_NEW_SHIPPING_ADDRESS({
						...this.newShippingAddress,
						shippingMessage:
							this.shippingMessages.indexOf(this.selectedShippingMessage) === 4
								? this.typeInPerson
								: this.selectedShippingMessage
					});
					this.resetForm();
				} else {
					return alert('양식을 완성하여 주십시오.');
				}
			}
			this.isShownNewAddress = !this.isShownNewAddress;
		},

		deleteShippingAddress(index) {
			this.DELETE_SHIPPING_ADDRESS(index);
		}
	},

	created() {
		this.shippingMessages = userInfo.shippingMessage;
	}
};
</script>

<style scoped>
.shipping-address,
.shipping-address__ol {
	width: 100%;
}

.shipping-address__li {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-size: 14px;
	font-weight: 400;
	padding: 20px 20px;
	margin: 0 0 20px;
	border: 1px solid #dedede;
	color: #393939;
}

.shipping-address__ul {
	height: 100%;
}
.shipping-address__ul__li {
	margin: 0 0 10px;
}

.shipping-address__btn {
	width: 90px;
	height: 70px;
	color: #848484;
	text-decoration: underline;
	background-color: #fff;
}

.shipping-address__add__h1 {
	width: 100%;
	margin: 0 0 20px;
	font-size: 15px;
	font-weight: 600;
	color: #42b850;
}

.shipping-address__add__form {
	padding: 20px 30px;
	border: 1px solid #dedede;
}

.shipping-address__add__li {
	margin: 0 0 22px;
}

.shipping-address__add__subheader {
	font-size: 11px;
	margin: 0 0 10px;
	position: relative;
}
.shipping-address__add__input,
.shipping-address__add__select {
	width: 400px;
	height: 30px;
	padding: 0 0 0 15px;
	border: 1px solid #dedede;
	font-size: 13px;
}

.shipping-address__add__select {
	outline-style: none;
}

.fa-sort {
	position: absolute;
	top: 30px;
	left: 382px;
	font-size: 16px;
	color: #393939;
}
.shipping-address__add__input.shipping-address__add__input--margin {
	margin: 0 0 10px;
}

.shipping-address__add__div {
	display: flex;
	justify-content: flex-end;
	width: 100%;
	margin: 10px 30px 0 0;
}

.shipping-address__add__btn {
	width: 280px;
	height: 40px;
	background-color: #393939;
	color: #fff;
	font-size: 15px;
}
</style>

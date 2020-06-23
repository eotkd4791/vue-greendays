<template>
  <div class="shipping-address">
    <ol class="shipping-address__ol">
      <li
        class="shipping-address__li"
        v-for="list in shippingAddressList"
        :key="list.recipientAddress"
      >
        <ul class="shipping-address__ul">
          <li class="shipping-address__ul__li">{{ list.recipientName }}</li>
          <li class="shipping-address__ul__li">{{ list.recipientPhoneNum }}</li>
          <li class="shipping-address__ul__li">{{ list.recipientAddress }}</li>
        </ul>
        <button class="shipping-address__btn">배송지 삭제</button>
      </li>
    </ol>
    <section class="shipping-address__add">
      <h1 class="shipping-address__add__h1">배송지 추가</h1>
      <form v-if="isShownNewAddress" class="shipping-address__add__form">
        <ul class="shipping-address__add__ul" ref="form">
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
              required
              v-model="newShippingAddress.recipientPhoneNum"
            />
          </li>
          <li class="shipping-address__add__li">
            <h3 class="shipping-address__add__subheader">주소검색</h3>
            <input
              type="text"
              class="shipping-address__add__input shipping-address__add__input--margin"
              placeholder=" - 도로명, 지번주소 검색가능"
              required
              v-model="newShippingAddress.recipientAddress"
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
            <select class="shipping-address__add__select" v-model="selectedShippingMessage">
              <option value class="shipping-address__add__option" disabled selected>배송메시지를 선택해주세요.</option>
              <option
                class="shipping-address__add__option"
                :value="message"
                v-for="message in shippingMessage"
                :key="message"
              >{{ message }}</option>
            </select>
            <input
              type="text"
              class="shipping-address__add__input"
              placeholder="배송메시지 입력"
              v-if="isTypingInPerson"
            />
          </li>
        </ul>
      </form>
      <div class="shipping-address__add__div">
        <button
          @click.prevent="toggleAddShippingAddress"
          class="shipping-address__add__btn"
        >배송지 추가 +</button>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import daumAddressAPI from '@/mixins/daumAddressAPI.js';
import userInfo from '@/static/userInfo.js';

export default {
  data() {
    return {
      userInfo: {
        postCode: '',
        address: '',
      },
      newShippingAddress: {
        recipientName: '',
        recipientPhoneNum: '',
        recipientAddress: '',
        recipientDetailAddress: ''
      },
      shippingMessage: [],
      selectedShippingMessage: '',
      isShownNewAddress: false,
    };
  },
  computed: {
    isTypingInPerson() {
      return this.shippingMessage.indexOf(this.selectedShippingMessage) === 4;
    },
    ...mapState({
      shippingAddressList: state => state.userInfo.shippingAddressList
    }),
  },
  methods: {
    toggleAddShippingAddress() {
      if(this.isShownNewAddress) {
        if(this.$refs.form.validate()) {
          // actions호출, 새로운 주소 등록
        } else {
          return alert('양식을 완성하여 주십시오.');
        }
      }
      this.isShownNewAddress = !this.isShownNewAddress;
    },
    ...mapActions([
    
    ]),
  },
  mixins: [daumAddressAPI],
  created() {
    this.shippingMessage = userInfo.shippingMessage;
    // this.$store.dispatch(); 배송지 목록 가져오기
  }
}
</script>

<style scoped>
.shipping-address, .shipping-address__ol {
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
.shipping-address__btn {
  width: 90px;
  height: 70px;
  color: #848484;
  text-decoration: underline;
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
.shipping-address__add__input, .shipping-address__add__select {
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
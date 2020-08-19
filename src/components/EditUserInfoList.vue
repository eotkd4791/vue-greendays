<template>
  <ul class="edit-list">
    <li class="edit-list__ul__li">
      <ol class="edit-list__ol">
        <li class="edit-list__ol__li">
          <span class="edit-list__subheader">이름</span>
          <input type="text" class="edit-list__input" :value="userInfo.name" />
        </li>
        <li class="edit-list__ol__li">
          <span class="edit-list__subheader">연락처</span>
          <input
            type="text"
            class="edit-list__input edit-list__input--inline"
            :value="userInfo.phoneNum"
          />
          <button class="edit-list__btn edit-list__btn--inline" @click="updatePhoneNumber">수정하기</button>
        </li>
      </ol>
    </li>
    <li class="edit-list__ul__li">
      <button
        class="edit-list__btn"
        :class="{ 'edit-list__btn--modifier': !isShownPasswordUpdate }"
        @click="toggleUpdatePassword"
      >비밀번호 변경</button>
      <ol class="edit-list__ol" v-if="isShownPasswordUpdate">
        <li class="edit-list__ol__li">
          <span class="edit-list__subheader">기존 비밀번호</span>
          <input type="text" class="edit-list__input" v-model="originPassword" />
        </li>
        <li class="edit-list__ol__li">
          <span class="edit-list__subheader">새로운 비밀번호</span>
          <input type="text" class="edit-list__input" v-model="newPassword" />
        </li>
        <li class="edit-list__ol__li">
          <span class="edit-list__subheader">비밀번호 확인</span>
          <input
            type="text"
            class="edit-list__input"
            v-model="newPasswordConfirm"
            placeholder="비밀번호를 한번 더 입력해 주세요"
          />
        </li>
      </ol>
    </li>
    <li class="edit-list__ul__li">
      <ol class="edit-list__ol">
        <li class="edit-list__ol__li">
          <input type="text" class="edit-list__input" :value="this.userInfo.gender" disabled />
        </li>
        <li class="edit-list__ol__li">
          <input type="text" class="edit-list__input" :value="this.userInfo.birthYear" disabled />
        </li>
      </ol>
    </li>
    <li class="edit-list__ul__li">
      <button class="edit-list__btn edit-list__btn--bold" @click.prevent="onSubmitNewUserInfo">정보 변경</button>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
import fillBirthYear from '@/mixins/fillBirthYear.js';

export default {
  data() {
    return {
      isShownPasswordUpdate: false,
      originPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
    };
  },
  methods: {
    toggleUpdatePassword() {
      this.isShownPasswordUpdate = !this.isShownPasswordUpdate;
    },
    onSubmitNewUserInfo() {

    },
    updatePhoneNumber() {
      
    },
  },
  computed: {
    ...mapState([
      'userInfo',
    ]),
  },
  mixins: [fillBirthYear],
}
</script>

<style scoped>
.edit-list__ul__li {
  width: 100%;
  margin: 0 0 22px;
}

.edit-list__ol__li {
  margin: 0 0 22px;
}

.edit-list__subheader {
  display: block;
  color: #393939;
  font-size: 11px;
  margin: 0 0 10px;
}

.edit-list__input {
  width: 400px;
  height: 30px;
  padding: 0 0 0 15px;
  border: 1px  solid #dedede;
}

.edit-list__input--inline {
  width: 294px;
  margin: 0 5px 0 0;
}

.edit-list__btn {
  width: 100%;
  height: 30px;
  color: #fff;
  background-color: #393939;
  text-align: center;
  margin-bottom: 22px;
}

.edit-list__btn--inline {
  width: 100px;
}

.edit-list__btn.edit-list__btn--modifier {
  width: 100%;
  height: 30px;
  color: #fff;
  background-color: #a5a5a5;
}

.edit-list__btn--bold {
  height: 40px;
}
</style>
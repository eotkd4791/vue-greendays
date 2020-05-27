<template>
  <v-container id="container-signup">
    <v-container class="section-signup">
      <v-card>
        <v-container>
          <v-card-title>그린데이즈 멤버십 가입</v-card-title>
        </v-container>

        <v-container>
          <v-row class="article-signup">
            <v-col cols="5">
              <div class="form-with-btn">
                <v-text-field
                  v-model="userInfo.email"
                  label="이메일"
                  type="string"
                  :rules="emailRules"
                  required
                />
                <v-btn id="btn-signup" @click="sendEmailCheckCode">이메일 인증</v-btn>
              </div>
            </v-col>

            <v-col cols="5">
              <div class="form-with-btn">
                <v-text-field v-model="authCodeEmail" label="인증코드 입력" required />
                <v-btn id="btn-signup" @click="checkSentCode">인증코드 확인</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row class="article-signup">
            <v-col cols="5">
              <v-text-field
                v-model="userInfo.password"
                label="비밀번호"
                :rules="passwordRules"
                required
              />
            </v-col>
            <v-col cols="5">
              <v-text-field
                v-model="passwordCheck"
                label="비밀번호 확인"
                type="password"
                :rules="passwordCheckRules"
                required
              />
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row class="article-signup">
            <v-col cols="5">
              <v-text-field v-model="userInfo.userName" label="이름" type="string" required />
            </v-col>
            <v-col cols="5">
              <div class="form-with-btn">
                <v-text-field v-model="userInfo.postCode" label="우편번호" type="string" required />
                <v-btn id="btn-signup" @click="openAddressSearch">우편번호 찾기</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row class="article-signup">
            <v-col cols="5">
              <v-text-field v-model="userInfo.userAddress" label="주소" type="string" required />
            </v-col>
            <v-col cols="5">
              <v-text-field
                v-model="userInfo.userDetailAddress"
                label="나머지 주소"
                type="string"
                required
              />
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row class="article-signup">
            <v-col cols="5">
              <v-overflow-btn
                class="dropdown-gender"
                v-model="userInfo.selectedGender"
                :items="gender"
                label="성별"
                dense
                outlined
                attach=".dropdown-gender"
              ></v-overflow-btn>
            </v-col>

            <v-col cols="5">
              <v-overflow-btn
                class="dropdown-birth-year"
                v-model="userInfo.selectedBirthYear"
                :items="years"
                label="출생년도"
                dense
                outlined
                attach=".dropdown-birth-year"
              ></v-overflow-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-container class="container-agreement">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <input
                      type="checkbox"
                      id="checkbox-terms"
                      :checked="userInfo.agreeTerms[0]"
                      @click="checkAllArticles"
                    />
                    <span>모든 항목에 체크하기</span>
                  </v-list-item-title>
                  <v-container>
                    <v-list-item-subtitle class="check-all">
                      전체 동의는 필수 및 선택 정보에 대한 동의도 포함되어
                      있으며, 개별적으로도 동의를 선택하실 수 있습니다.
                      선택항목에 대한 동의를 거부하시는 경우에도 서비스는 이용이
                      가능합니다.
                    </v-list-item-subtitle>
                  </v-container>
                </v-list-item-content>
              </v-list-item>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    <input
                      type="checkbox"
                      required
                      disabled
                      :checked="overFourteen"
                      id="checkbox-terms"
                      @click="checkOneArticles"
                    />
                    <span>만 14세 이상입니다.</span>
                  </v-list-item-subtitle>

                  <v-list-item-subtitle>
                    <input type="checkbox" required id="checkbox-terms" @click="checkOneArticles" />
                    <span>[필수] 개인 정보의 수집 및 이용에 대한 동의</span>
                    <router-link to="/terms">자세히 보기</router-link>
                  </v-list-item-subtitle>

                  <v-list-item-subtitle>
                    <input type="checkbox" id="checkbox-terms" @click="checkOneArticles" />
                    <span>[선택] 공지사항 / 이벤트 알림</span>
                  </v-list-item-subtitle>

                  <v-list-item-subtitle>
                    <span>
                      고객님께 전달해야 할 소식이 있는 경우 최대 월 1회에 한해
                      발송됩니다.
                    </span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-container>
                <div class="recommendation-code">
                  <form>
                    <input placeholder="추천 코드 입력" v-model="userInfo.recommendCode" />
                    <span id="red">* 추천 코드를 입력하면 2,000포인트 즉시 지급!</span>
                  </form>
                </div>
              </v-container>
              <v-container>
                <v-btn
                  id="btn-signup"
                  class="signup-membership"
                  type="submit"
                  @click="signUpMembership"
                >멤버십 가입하기</v-btn>
              </v-container>
            </v-container>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";
import { config } from "@/api/index.js";

export default {
  data() {
    return {
      userInfo: {
        email: "",
        password: "",
        userName: "",
        postCode: "",
        userAddress: "",
        userDetailAddress: "",
        selectedGender: "",
        selectedBirthYear: "",
        agreeTerms: [],
        recommendCode: "",
      },
      gender: ["남", "여", "해당없음"],
      years: [],
      authCodeEmail: "",
      passwordCheck: "",
      checkAll: {},
      emailRules: [
        v => !!v || "이메일 입력하세요.",
        v => /[\S]+@[\S\D]+\.[\S\D]+/gi.test(v) || "이메일 형식이 올바르지 않습니다.",
      ],
      passwordRules: [
        v => !!v || "패스워드를 입력하세요.",
        v => /[0-9]/g.test(v) || "숫자가 존재하지 않습니다.",
        v => /[a-z]/gi.test(v) || "영어 알파벳이 존재하지 않습니다.",
        v => /[~!@#$%^&*/?]/g.test(v) || "특수문자가 존재하지 않습니다.",
        v => !(v.length < 8 || v.length > 20) || "비밀번호 자릿수를 확인해 주세요.",
      ],
      passwordCheckRules: [
        v => !!v || "패스워드를 한번 더 입력하세요",
        v => v === this.userInfo.password,
      ],
    };
  },
  methods: {
    sendEmailCheckCode() {
      axios.post(`${config.baseUrl}/auth/email/send`, { email: this.userInfo.email })
        .then((res) => {
          console.log(res);
          return alert(res.message);
        })
        .catch((error) => {
          console.error(error);
          return alert(error.message);
        });
    },
    checkSentCode() {
      axios.post(`${config.baseUrl}/auth/email/check`, { code: this.authCodeEmail })
        .then((res) => {
          console.log(res);
          return alert(res.data.message);
        })
        .catch((error) => {
          return alert(error.message);
        });
    },
    openAddressSearch() {
      new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
        }
    }).open();
    },
    checkAllArticles(e) {
      this.checkAll[2].checked = this.checkAll[3].checked = e.target.checked;
    },
    checkOneArticles(e) {
      const checkIdx = Array.prototype.indexOf.call(this.checkAll, e.target);
      this.checkAll[checkIdx].checked = e.target.checked;

      if (this.checkAll[2].checked === this.checkAll[3].checked) {
        this.checkAll[0].checked = this.checkAll[2].checked;
      } else {
        this.checkAll[0].checked = false;
      }
    },
    signUpMembership() {
      console.log("회원가입요청!");
    },
  },
  computed: {
    overFourteen() {
      const currentYear = new Date().getFullYear();
      return this.userInfo.selectedBirthYear > currentYear - 14 ? false : true;
    },
  },
  created() {
    const yearArr = [];
    for (let i = 2020; i >= 1920; i--) {
      yearArr.push(i);
    }
    this.years = yearArr;
  },
  mounted() {
    this.checkAll = document.querySelectorAll("#checkbox-terms");
  },
};
</script>

<style scoped>
#container-signup {
  width: 100%;
  height: 1138px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 115px;
  margin-bottom: 150px;
}
.section-signup {
  max-width: 1100px;
}
.article-signup {
  display: flex;
  justify-content: space-around;
}
.form-with-btn {
  display: flex;
}
#btn-signup {
  width: 30%;
  color: #fff;
  background-color: #000;
  margin: 5px 0 0 5px;
  position: relative;
  top: 9px;
}
.container-agreement {
  width: 100%;
}
.check-all {
  width: 45%;
  white-space: normal;
  padding-bottom: 30px;
  border-bottom: 1px solid #000;
}

.recommendation-code {
  width: 430px;
  border: 1px solid #000;
  padding: 10px;
  position: relative;
}
.recommendation-code input {
  outline-style: none;
  border: none;
  font-size: 16px;
}

#red {
  color: red;
  position: absolute;
  left: 7rem;
  top: 10px;
}
#btn-signup.signup-membership {
  width: 430px;
  padding: 10px;
  color: #fff;
  background-color: #000;
}
</style>

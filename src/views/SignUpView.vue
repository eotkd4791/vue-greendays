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
                    label="연락처"
                    type="string"
                    required
                  />
                  <v-btn id="btn-signup">연락처 인증</v-btn>
                </div>
              </v-col>
              <v-col cols="5">
                <div class="form-with-btn">
                  <v-text-field 
                    label="인증코드 입력"
                    type="string"
                    required
                  />
                  <v-btn id="btn-signup">인증코드 확인</v-btn>
                </div>
              </v-col>
          </v-row>
        </v-container>
        <v-container>    
          <v-row class="article-signup">
            <v-col cols="5">
              <v-text-field 
                label="비밀번호"
                type="string"
                required
              />
              </v-col>
            <v-col cols="5">
                <v-text-field 
                  label="비밀번호를 한 번 더 입력해 주세요."
                  type="string"
                  required
                />
            </v-col>
          </v-row>
        </v-container>
            
        <v-container>
          <v-row class="article-signup">
            <v-col cols="5">
              <v-text-field 
                label="이름"
                type="string"
                required
              />
              </v-col>
               <v-col cols="5">
                <div class="form-with-btn">
                  <v-text-field 
                    label="우편번호"
                    type="string"
                    required
                  />
                  <v-btn id="btn-signup">우편번호 찾기</v-btn>
                </div>
              </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row class="article-signup">
            <v-col cols="5">
              <v-text-field 
                label="주소"
                type="string"
                required
              />
              </v-col>
            <v-col cols="5">
                <v-text-field 
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
                v-model="selectedGender"
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
                v-model="selectedBirthYear"
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
                  <v-list-item-title><input type="checkbox" id="checkbox-terms" @click="checkAllArticles" /> 모든 항목에 체크하기</v-list-item-title>
                  <v-container>
                    <v-list-item-subtitle>전체 동의는 필수 및 선택 정보에 대한 동의도 포함되어 있으며, 개별적으로도 동의를 선택하실 수 있습니다. 선택항목에 대한 동의를 거부하시는 경우에도 서비스는 이용이 가능합니다.</v-list-item-subtitle>
                  </v-container>
                </v-list-item-content>
              </v-list-item>
                <hr>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle><input type="checkbox" disabled id="checkbox-terms" @click="checkOneArticles" /> 만 14세 이상입니다.</v-list-item-subtitle>
                  <v-list-item-subtitle><input type="checkbox" id="checkbox-terms" @click="checkOneArticles" /> [필수] 개인 정보의 수집 및 이용에 대한 동의 <router-link to="/terms">자세히 보기</router-link></v-list-item-subtitle>
                  <v-list-item-subtitle><input type="checkbox" id="checkbox-terms" @click="checkOneArticles" /> [선택] 공지사항 / 이벤트 알림</v-list-item-subtitle>
                  <v-list-item-subtitle>고객님께 전달해야 할 소식이 있는 경우 최대 월 1회에 한해 발송됩니다.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-container>
                <v-btn>추천 코드 입력 <span id="red">* 추천 코드를 입력하면 2,000포인트 즉시 지급!</span></v-btn>
              </v-container>
              <v-container>
                <v-btn>멤버십 가입하기</v-btn>
              </v-container>
            </v-container>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      gender:['남', '여', '해당없음'],
      years:[],
      selectedGender: '',
      selectedBirthYear: '',
      agreeTerms:[],
      checkAll: [],
    };
  },
  methods: {
    checkAllArticles() {
      console.log(this.checkAll)
      
      for(let i=0; i<this.checkAll.length; i++) {
        this.checkAll[i].checked = this.checkAll[0].checked;
      }
      // this.checkAll[1].checked = true;
    },
    checkOneArticles(e) {
      console.log(e);
    }
  },
  created() {
    const yearArr = [];
    for(let i=2020; i>=1920; i--) { yearArr.push(i); }
    this.years = yearArr;

    /* ------------------------------------------------ */
  },
  mounted() {
    this.checkAll = document.querySelectorAll('#checkbox-terms');

  }
}
</script>

<style scoped>
  #container-signup {
    width: 100%;
    height: 1138px;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 115px;
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
  }
</style>
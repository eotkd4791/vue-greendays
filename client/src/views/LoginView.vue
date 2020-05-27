<template>
  <v-container id="container-membership">
    <div class="section-membership">
      <v-container>
        <v-row class="row-membership">
          <v-col cols="8">
            <v-card>
              <v-container>
                <v-container>저는 이미 그린데이즈 멤버입니다.</v-container>
                <v-subheader>본인 확인을 위해 연락처를 입력하세요.</v-subheader>
                <v-form ref="form" v-model="valid">
                  <v-text-field
                    label="이메일"
                    :rules="emailRules"
                    required
                  />
                <v-text-field
                    v-if="activatedPw"
                    v-model="userPassword"
                    label="비밀번호"
                    type="password"
                    :rules="passwordRules"
                    required
                  />
                  <v-btn type="submit" :disabled="!valid" style="width: 50%; background-color: #000; color: #fff;" @click="userLogin">로그인</v-btn>
                </v-form>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="8">
            <v-card>
              <v-container>
                <v-container>그린데이즈 멤버가 되고 싶습니다.</v-container>
                <v-subheader>그린데이즈 멤버십에 가입하시면 많은 혜택을 받을 수 있습니다.</v-subheader>
                <v-subheader>아직 그린데이즈 멤버가 아니라면 연락처로 간편하게 가입하실 수 있습니다.</v-subheader>
              </v-container>
              <v-container>
                <v-btn style="width: 50%; background-color: #000; color: #fff;" @click="movePage('/signup')">그린데이즈 멤버십 가입</v-btn>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      valid: false,
      activatedPw: false,
      tmpPN:'01075014791',
      tmpPW:'daesang1974',
      userPhoneNum: '',
      userPassword: '',
      emailRules: [
        v => !!v || '이메일 입력하세요.',
        v => /[\S]+@[\S\D]+\.[\S\D]+/ig.test(v) || '이메일 형식이 올바르지 않습니다.'
      ],
      passwordRules: [
        v => !!v || '패스워드를 입력하세요.',
        v => /[0-9]/g.test(v) || '숫자가 존재하지 않습니다.',
        v => /[a-z]/ig.test(v) || '영어 알파벳이 존재하지 않습니다.',
        v => /[~!@#$%^&*/?]/g.test(v) || '특수문자가 존재하지 않습니다.',
        v => !(v.length < 8 || v.length > 20) || '비밀번호 자릿수를 확인해 주세요.'
      ]
    };
  },
  methods: {
    userLogin() {
      console.log("userLogin 호출!!");
      console.log(typeof this.userPhoneNum, typeof this.tmpPN);


        // Vuex actions 처리 하기
      const userId = this.userPhoneNum;
      const userPw = this.userPassword;
      
      console.log(typeof userId);
      if(this.tmpPN === userId && this.tmpPW === userPw) {
        console.log(this.valid===true ? '입력이 잘됨' : '입력이 잘못됨');

        const userInfo = {userId, userPw};
        this.$store.dispatch("userLogin", userInfo);

      } else {
        return alert("올바르지 않은 연락처 또는 비밀번호 입니다.");
      }
    }, 
    movePage(to) {
      if(this.$route.path !== to) {
        const nextPage = { path: to };
        this.$router.push(nextPage);
      }
    },
  }
}
</script>

<style scoped>
#container-membership {
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  top: 115px;
  background-color: #fff;
}

.section-membership {
  max-width: 1100px;
}

.row-membership {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  margin: 90px auto 330px;
}
</style>
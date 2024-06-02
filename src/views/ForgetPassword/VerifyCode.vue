<template>
  <div class="container">
    <div class="image-section">
      <img alt="Not displaying" src="../../assets/image/Slang-Logo.jpeg" />
    </div>

    <div class="form-section">
      <section class="verifyCode" v-if="!CodeVerified">
        <h1>VERIFY CODE</h1>
        <p>A verification code has been sent {{  }}</p>
        <form @submit.prevent="ConfirmVerificationCode">
          <label>Code</label>
          <input
            placeholder="Write Code"
            v-model="theCode"
            required
          />
          <div v-if="errorCode" class="formError">
          {{ errorCode }}
        </div>
          <div class="submitBox"><button>
            <span style="background: none" v-if="!loading">SUBMIT</span>
            <Loading style="margin: 0 auto" v-if="loading"/>
          </button></div>
        </form>
        <span @click="ResendVerificationCode">Resend Code</span>
        </form>
      </section>

      <section class="check-section" v-if="CodeVerified">
        <img alt="Not displaying" src="../../assets/image/checkoutImg.png"/>
        <button @click="VERIFYUSER">DONE</button>
      </section>
    </div>
  </div>
</template>

<script>
import Loading from "../../components/Loading.vue";
import { mapState } from "vuex";
export default {
  name: "VerifyCode",
  components: { Loading },
  data() {
    return {
      theCode: "",
      email: null,
      loading: false,
      CodeVerified: false,
      errorCode: null
    }
  },
  mounted() {
    const changeEmail = () => {
      this.email = this.user.email
    }
  },
  methods: {
    async ResendVerificationCode() {
      try {
        const response = await this.$store.dispatch("sendCodeEmail", {email: 'cjjjf'});
        console.log(response)
      } catch (error) {
        throw error
      }
    },
    async ConfirmVerificationCode() {
      try {
        console.log(this.token)
        console.log(this.theCode)
        const data = {code: this.theCode}
        const response = await this.$store.dispatch("verifyCode", data);
        console.log(response)
        if(response) {
          this.CodeVerified = true
        }
      } catch (error) {
        if(error = 'invalid code'){
          this.errorCode = error
        }
        throw error
      }
    },
    async VERIFYUSER () {
      try {
        const response = await this.$store.dispatch("verifyUser")
        console.log(response)
        if(response) {
          this.$router.push({
            name: "home"
          })
        }
      } catch (error) {
        throw error
      }
    } 
  },
  computed: {
    ...mapState(["user", "token"]),
  },
};
</script>

<style scoped>
.container {
  background: #096a09;
  display: flex;
  height: 100vh;
}
.image-section {
  flex: 1;
}
.image-section img {
  width: 100%;
  height: 100%;
}
.form-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.verifyCode {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.formError {
  color: #ff0050;
  font-size: 0.8em;
  font-weight: bold;
  margin-top: 10px;
  font-family: sans-serif;
}
.check-section {
  display: flex;
  flex-direction: column
}
.check-section img {
  border-radius: 100%
}
.check-section button {
  border-radius: 5px;
  background-color: #586;
  color: white;
  border: none;
  padding: 10px 100px ;
  cursor: pointer;
  margin-top: 20px;
  font-family: sans-serif;
}
.submitBox {
  text-align: center;
}
.form-section h1 {
  font-family: sans-serif;
  color: white;
}
.form-section p {
  font-family: sans-serif;
  color: #fff;
  font-size: 14px;
  line-height: 2;
  letter-spacing: 1px;
}
.form-section form label {
  color: #fff;
  display: inline-block;
  margin: 20px 0 10px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  display: block;
  text-align: left;
}
.form-section form input {
  display: block;
  padding: 10px 6px;
  width: 400px;
  border-radius: 5px;
  border: 1px solid #b4b4b8;
  outline: none;
  color: #283D3F;
  background: #e0e0e4;
}
.form-section form button{
  border-radius: 5px;
  background-color: #586;
  color: white;
  border: none;
  padding: 10px 100px ;
  cursor: pointer;
  margin-top: 20px;
  font-family: sans-serif;
}
.form-section span {
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  margin-top: 20px;
  text-align: end;
}
@media only screen and (max-width: 1025px) {
  .container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px
  }
  .image-section {
    flex: 0;
    margin-bottom: 20px;
  }
  .image-section img {
    height: 70px;
    width: 70px;
    border-radius: 100%
  }
  .form-section {
    flex: 0;
  }
  .form-section h1 {
    font-size: 28px
  }
  .form-section form input {
    width: 100%;
    box-sizing: border-box
  }
}
</style>

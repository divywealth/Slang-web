<template>
  <div class="container">
    <div class="image-section">
      <img alt="Not displaying" src="../../assets/image/Slang-Logo.jpeg" />
    </div>
    <div class="form-section">
      <h1>Welcome back</h1>
      <form @submit.prevent="SIGNINUSER">
        <label>Email</label>
        <input type="email" v-model="email" required />
        <div v-if="errors.email" class="formError">
          {{ errors.email }}
        </div>

        <label>Password</label>
        <input type="password" v-model="password" required />
        <div v-if="errors.password" class="formError">
          {{ errors.password }}
        </div>

        <div id="checkbox">
          <section>
            <input type="checkbox" />
            <label>Remember Me</label>
          </section>

          <router-link to="/getverificationcode" id="Password"
            ><span>Forgot Password</span></router-link
          >
        </div>

        <div class="submitBox">
          <button class="submit">
            <span style="background: none" v-if="!loading">Sign In</span>
            <Loading style="margin: 0 auto" v-if="loading" />
          </button>
        </div>

        <div class="signUp">
          Dont have an account?
          <router-link to="/signup" class="signUp">Sign up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { SET_BEARER_HTTP } from "@/apis/axiosClient";
import Loading from "../../components/Loading.vue";
import { mapState } from "vuex";
export default {
  name: "LoginView",
  components: { Loading },
  data() {
    return {
      loading: false,
      email: "",
      password: "",
      errors: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    async SIGNINUSER() {
      try {
        this.loading = true;
        const data = {
          email: this.email,
          password: this.password,
        };
        SET_BEARER_HTTP();
        const response = await this.$store.dispatch("loginUser", data);
        if (this.user == null) {
          this.loading = false;
          this.$router.push({
            name: "VerifyCode",
          });
        } else {
          this.$router.push({
            name: "home",
          });
        }
      } catch (error) {
        this.errors.email = null;
        this.errors.password = null;
        if (error == "email dosent have an account try signing up") {
          this.loading = false;
          this.errors.email = error;
        } else if (error == "Wrong Password") {
          this.loading = false;
          this.errors.password = error;
        }
        this.loading = false;
      }
    },
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
  align-items: center;
  justify-content: center;
}
.form-section h1 {
  font-family: sans-serif;
  color: white;
}
.form-section form {
}
.form-section form label {
  color: white;
  display: inline-block;
  margin: 20px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
.form-section form input {
  display: block;
  padding: 10px 6px;
  width: 400px;
  border-radius: 5px;
  border: 1px solid #b4b4b8;
  outline: none;
  color: #283d3f;
  background: #e0e0e4;
}
.formError {
  color: #ff0050;
  font-size: 0.8em;
  font-weight: bold;
  margin-top: 10px;
  font-family: sans-serif;
}
#checkbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.form-section form input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
#Password {
  text-decoration: none;
  color: #fff9;
  font-size: 14px;
  letter-spacing: 1px;
}
.submitBox {
  text-align: center;
}
.submit {
  border-radius: 5px;
  background-color: #586;
  color: white;
  border: none;
  text-align: center;
  width: 250px;
  padding: 10px 0;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  font-family: sans-serif;
  white-space: nowrap;
}
.signUp {
  text-decoration: none;
  color: #fff;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  letter-spacing: 1px;
}
@media only screen and (max-width: 1025px) {
  .container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .image-section {
    flex: 0;
    margin-bottom: 20px;
  }
  .image-section img {
    height: 70px;
    width: 70px;
    border-radius: 100%;
  }
  .form-section {
    flex: 0;
  }
  .form-section form input {
    width: 100%;
    box-sizing: border-box;
  }
  .submit {
    width: 350px
  }
}
</style>

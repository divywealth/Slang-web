<template>
  <div class="container">
    <div class="image-section">
      <img alt="Not displaying" src="../../assets/image/Slang-Logo.jpeg" />
    </div>
    <div class="form-section">
      <h1>Create an account</h1>
      <form @submit.prevent="CREATEUSER">
        <label class="label">Firstname</label>
        <input class="input" type="text" v-model="firstname" required />

        <label>Lastname</label>
        <input class="input" type="text" v-model="lastname" required />

        <label>Username</label>
        <input class="input" type="text" v-model="username" required />

        <label>email</label>
        <input class="input" type="email" v-model="email" required />
        <div v-if="emailError" class="formError">
          {{ emailError }}
        </div>

        <label>Password</label>
        <input class="input" type="password" v-model="password" required />
        <div v-if="errors.password" class="formError">
          {{ errors.password }}
        </div>

        <label>Confirm Password</label>
        <input
          class="input"
          type="password"
          v-model="confirmPassword"
          required
        />
        <div v-if="errors.confirmPassword" class="formError">
          {{ errors.confirmPassword }}
        </div>

        <div class="submitBox">
          <button class="submit">
            <span style="background: none" v-if="!loading"
              >Create an Account</span
            >
            <Loading style="margin: 0 auto" v-if="loading" />
          </button>
        </div>

        <div class="signin">
          Already have an account?<router-link to="/signin" class="signin"
            >Sign in</router-link
          >
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
  name: "Registration",
  components: { Loading },
  data() {
    return {
      loading: false,
      firstname: "",
      lastname: "",
      email: "",
      emailError: null,
      username: "",
      password: "",
      confirmPassword: "",
      errors: {
        password: null,
        confirmPassword: null,
      },
    };
  },
  methods: {
    async CREATEUSER() {
      try {
        this.errors.password = null;
        this.errors.confirmPassword = null;
        if (this.password.length < 5) {
          this.errors.password = "Password must be atleast 6 chars long";
          this.loading = false;
          return;
        } else if (this.password !== this.confirmPassword) {
          this.errors.confirmPassword =
            "Confirm password must be same as password";
          this.loading = false;
          return;
        }
        this.loading = true;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(this.email)) {
          this.emailError = "Invalid Email";
          return;
        }
        const data = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          username: this.username,
          password: this.password,
        };
        const response = await this.$store.dispatch("createUser", data);
        if (response) {
          this.loading = false;
          SET_BEARER_HTTP();
          this.$router.push({
            name: "VerifyCode",
          });
        }
      } catch (error) {
        if (error) {
          this.$toast.open({
            message: error,
            type: "error", // You can use 'success', 'info', 'error', or 'warning'
            // Additional options
            duration: 5000, // Duration in milliseconds
            dismissible: true, // Whether the toast can be dismissed
            position: "top", // Position of the toast
          });
        }
        throw error;
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
.input {
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
.signin {
  text-decoration: none;
  color: #fff;
  text-align: center;
  margin: 10px 0;
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
    padding: 20px;
  }
  .form-section form input {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>

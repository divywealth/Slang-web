<template>
  <div class="container">
    <div class="image-section">
      <img alt="Not displaying" src="../../assets/image/Slang-Logo.jpeg" />
    </div>
    <div class="form-section">
      <h1>Create an account</h1>
      <form>
        <label class="label">Firstname</label>
        <input class="input" type="text" />

        <label>Lastname</label>
        <input class="input" type="text" />

        <label>Username</label>
        <input class="input" type="text" />

        <label>email</label>
        <input class="input" type="email" />

        <label>Password</label>
        <input class="input" type="password" />
        <div v-if="errors.password" class="formError">
          {{ errors.password }}
        </div>

        <label>Confirm Password</label>
        <input class="input" type="password" />
        <div v-if="errors.confirmPassword" class="formError">
          {{ errors.confirmPassword }}
        </div>

        <div class="submitBox">
          <button class="submit">Create an Account</button>
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
export default {
  name: "Registration",
  components: {},
  data() {
    return {
      errors: {
        password: null,
        confirmPassword: null,
      },
    };
  },
};
</script>

<style scoped>
.container {
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
  padding: 10px 100px;
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
@media only screen and (max-width: 900px) {
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
    padding: 20px;
  }
  .form-section form input {
    width: 100%;
    box-sizing: border-box
  }
}
</style>

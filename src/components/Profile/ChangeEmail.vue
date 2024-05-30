<template>
  <main>
    <!--For Web-->
    <section class="backdrop" @click.self="CLOSEMODAL">
      <div class="modal">
        <div class="icon-container">
          <font-awesome-icon
            icon="fa-solid fa-arrow-left"
            style="cursor: pointer"
            @click="GOTOEDIT"
          />
        </div>
        <div><h1>CHANGE EMAIL</h1></div>
        <div class="form-container">
          <section :class="{ 'show-email': showSection }">
            <form @submit.prevent="SENDCODE">
              <div class="input-container">
                <label> New Email </label>
                <input type="email" v-model="email" :disabled="showSection" />
              </div>

              <div class="submitBox">
                <button class="submit" :disabled="showSection">
                  Send Code
                </button>
              </div>
            </form>
          </section>

          <section :class="{ 'show-email': !showSection }" class="code-section">
            <div><h1>VERIFY CODE</h1></div>
            <form @submit.prevent="VERIFYCODE">
              <div class="input-container" style="margin-top: 30px">
                <label> Code</label>
                <input type="text" v-model="code" :disabled="!showSection" />
              </div>

              <span class="links" v-if="showSection" @click="VERIFYCODE"
                >Send code again</span
              >
              <div class="submitBox">
                <button class="submit" :disabled="!showSection">Done</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </section>

    <!--For Android-->
    <section class="android-section">
      <div class="icon-container">
        <font-awesome-icon
          icon="fa-solid fa-arrow-left"
          style="cursor: pointer"
          @click="GOTOEDIT"
        />
      </div>

      <section class="android-body">
        <div class="form-container">
          <section :class="{ 'show-email': showSection }" class="email-section">
            <div><h1>CHANGE EMAIL</h1></div>
            <form @submit.prevent="SENDCODE">
              <div class="input-container" style="margin-top: 30px">
                >
                <label> New Email </label>
                <input type="email" v-model="email" :disabled="showSection" />
              </div>

              <div class="submitBox">
                <button class="submit" :disabled="showSection">
                  Send Code
                </button>
              </div>
            </form>
          </section>

          <section class="code-section" :class="{ 'show-email': !showSection }">
            <div><h1>VERIFY CODE</h1></div>
            <form @submit.prevent="VERIFYCODE">
              <div class="input-container" style="margin-top: 30px">
                <label> Code</label>
                <input type="text" v-model="code" :disabled="!showSection" />
              </div>

              <span class="links" v-if="showSection" @click="VERIFYCODE"
                >Send code again</span
              >
              <div class="submitBox">
                <button class="submit" :disabled="!showSection">Done</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: "ChangeEmail",
  data() {
    return {
      showSection: false,
      email: "",
      code: "",
    };
  },
  methods: {
    GOTOEDIT() {
      this.$store.state.ChangeEmail = false;
      this.$store.state.EditDetails = true;
    },
    CLOSEMODAL() {
      this.$store.state.ChangeEmail = false;
    },
    SENDCODE() {
      this.showSection = !this.showSection;
    },
    VERIFYCODE() {
      this.showSection = !this.showSection;
      console.log("hi");
    },
  },
};
</script>

<style scoped>
* {
  background: #fff;
  font-family: sans-serif;
}
.backdrop {
  position: fixed;
  background: rgb(0, 0, 0, 0.5);
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%; /* Set max-width as a percentage of viewport width */
  max-height: 80%; /* Set max-height as a percentage of viewport height */
  overflow-y: auto;
  width: 600px;
  padding-bottom: 60px;
}
.icon-container {
  width: calc(100% - 20px);
  padding: 10px 20px;
}
.form-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}
.form-container form label {
  color: #000;
  display: inline-block;
  margin: 20px 30px 15px 0;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  flex: 1;
}
.form-container form input {
  padding: 10px 6px;
  width: 250px;
  border-radius: 5px;
  border: 1px solid #b4b4b8;
  outline: none;
  color: #283d3f;
  background: #e0e0e4;
  flex: 3;
}
.submitBox {
  text-align: center;
}
.submit {
  border-radius: 5px;
  background-color: #586;
  color: white;
  border: none;
  width: 300px;
  padding: 10px 0;
  cursor: pointer;
  margin-top: 20px;
  font-family: sans-serif;
  box-sizing: border-box;
}
.show-code {
  opacity: 0.5;
}
.show-email {
  opacity: 0.5;
}
.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.links {
  text-decoration: none;
  color: #000;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 1px;
  color: blue;
}
.android-section {
  display: none;
}
.code-section {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.email-section {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 900px) {
  .backdrop {
    display: none;
  }
  .android-section {
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
  }
  .form-container {
    margin-top: 0;
  }
  .android-body {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .android-body div h1 {
    font-size: 30px;
  }
  .form-container form input {
    width: 200px;
  }
  .submit {
    width: 200px;
    margin-top: 40px;
  }
  .code-section {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>

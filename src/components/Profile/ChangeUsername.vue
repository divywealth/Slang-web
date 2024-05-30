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
        <div><h1>Change Username</h1></div>
        <div class="form-container">
          <form>
            <label> Username </label>
            <input type="text" v-model="username" />

            <div class="submitBox">
              <button class="submit">Done</button>
            </div>
          </form>
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
        <div><h1>CHANGE USERNAME</h1></div>
        <div class="form-container">
          <form>
            <label> Username </label>
            <input type="text" v-model="username" />

            <div class="submitBox">
              <button class="submit">Done</button>
            </div>
          </form>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: "ChangeUsername",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    GOTOEDIT() {
      this.$store.state.ChangeUsername = false;
      this.$store.state.EditDetails = true;
    },
    CLOSEMODAL() {
      this.$store.state.showProfileModal = false;
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
}
.form-container form input {
  padding: 10px 6px;
  width: 250px;
  border-radius: 5px;
  border: 1px solid #b4b4b8;
  outline: none;
  color: #283d3f;
  background: #e0e0e4;
}
.submitBox {
  text-align: center;
}
.submit {
  border-radius: 5px;
  background-color: #586;
  color: white;
  border: none;
  padding: 10px 110px;
  cursor: pointer;
  margin-top: 40px;
  font-family: sans-serif;
}
.android-section {
  display: none;
}
@media only screen and (max-width: 900px) {
  .backdrop {
    display: none;
  }
  .icon-container {
    padding: 20px 20px
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
  .android-body {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  .android-body div h1 {
    font-size: 30px;
  }
  .form-container form label {
  }
  .form-container form input {
    width: 200px;
  }
  .submit {
    padding: 10px 90px;
  }
}
</style>

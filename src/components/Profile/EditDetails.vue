<template>
  <main>
    <!--For Web-->
    <section class="backdrop" @click.self="CLOSEMODAL">
      <div class="modal">
        <div class="icon-container">
          <font-awesome-icon
            icon="fa-solid fa-arrow-left"
            style="cursor: pointer"
            @click="GOTOPROFILE"
          />
        </div>
        <div class="header"><h1>Edit Details</h1></div>
        <div class="list-container">
          <ul>
            <li @click="SHOWMODAL('ChangeUsername')">Change Username</li>
            <li @click="SHOWMODAL('ChangeEmail')">Change Email</li>
            <li @click="SHOWMODAL('ChangePhoneNo')">Change PhoneNo</li>
            <li @click="SHOWMODAL('ChangePassword')">Change Password</li>
          </ul>
        </div>
      </div>
    </section>

    <!--For Android-->
    <section class="android-section">
      <div class="icon-container">
        <font-awesome-icon
          icon="fa-solid fa-arrow-left"
          style="cursor: pointer"
          @click="GOTOPROFILE"
        />
      </div>
      <div class="header"><h1>Edit Details</h1></div>
        <div class="list-container">
          <ul>
            <li @click="SHOWMODAL('ChangeUsername')">Change Username</li>
            <li @click="SHOWMODAL('ChangeEmail')">Change Email</li>
            <li @click="SHOWMODAL('ChangePhoneNo')">Change PhoneNo</li>
            <li @click="SHOWMODAL('ChangePassword')">Change Password</li>
          </ul>
        </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "EditDetails",
  data() {
    return {
      
    }
  },
  methods: {
    GOTOPROFILE() {
      this.$store.state.EditDetails = false;
      this.$store.state.showProfileModal = true;
    },
    CLOSEMODAL() {
      this.$store.state.showProfileModal = false;
    },
    SHOWMODAL(payload) {
      this.$store.state.EditDetails = false;
      this.$store.state[payload] = true;
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
}
.header {
  width: 100%;
  text-align: center;
  padding: 10px 0;
}
.list-container {
  width: 100%;
}
.list-container ul {
  list-style: none;
}
.list-container ul li {
  padding: 20px;
  border: 1px solid #000;
  border-bottom: none;
  cursor: pointer;
}
.list-container ul li:hover {
  background: grey;
}
.icon-container {
  width: calc(100% - 20px);
  padding: 10px 20px;
}
.android-section {
  display: none;
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
  .icon-container {
    width: 100%;
    padding: 10px 20px;
  }
}
</style>

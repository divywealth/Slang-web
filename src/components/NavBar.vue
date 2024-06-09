<template>
  <div class="navbar-main">
    <div class="navbar-logo">
      <img alt="Not displaying" src="../assets/image/Slang-Logo.jpeg" />
    </div>
    <div class="navbar-right">
      <div class="navbar-github">
        <a href="https://github.com/divywealth/Slang-web"
          ><img alt="Not displaying" src="../assets/image/Github-Logo.png"
        /></a>
      </div>
      <router-link to="/signin" class="signin-button" v-if="!user">
        <div>Signin</div>
      </router-link>
      <img
        src="../assets/user-profile1.jpg"
        class="user-profile"
        @click="GOTOPROFILE"
        v-if="user"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {
    GOTOPROFILE() {
      if (user) {
        if (window.innerWidth > 1025) {
          this.$emit("CHANGEPROFILE");
        } else {
          this.$router.push({
            name: "Profile",
          });
        }
      } else {
        this.$toast.open({
          message: "Sign in before you can see a profile",
          type: "warning", // You can use 'success', 'info', 'error', or 'warning'
          // Additional options
          duration: 5000, // Duration in milliseconds
          dismissible: true, // Whether the toast can be dismissed
          position: "top", // Position of the toast
        });
      }
    },
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style scoped>
.navbar-main {
  background-color: #096a09;
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 1rem 2rem 1rem 2rem;
}
.navbar-right {
  display: flex;
  align-items: center;
}
.signin-button {
  text-decoration: none;
}
.navbar-logo {
}
.navbar-logo img {
  height: 80px;
  border-radius: 100%;
  width: 80px;
}
.navbar-github {
}
.navbar-github img {
  height: 50px;
  cursor: pointer;
  border-radius: 100%;
  width: 50px;
}
.signin-button {
  border: 1px solid #a6e3a6;
  margin: 0 0 0 20px;
  width: 110px;
  font-family: sans-serif;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  color: #a6e3a6;
}
.user-profile {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-left: 20px;
  cursor: pointer;
}
@media only screen and (max-width: 1025px) {
  .navbar-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .navbar-logo img {
    height: 50px;
    width: 50px;
  }
  .navbar-main {
    border-bottom: 2px solid grey;
    padding: 1rem 1.9rem 0.5rem 1.9rem;
  }
  .signin-button {
    height: 35px;
    width: 80px;
    border-radius: 20px;
  }
  .navbar-github {
    display: none;
  }
}
</style>

<template>
  <div class="home">
    <NavBar />
    <Body />
    <Footer />
    <NewSlangModal
      v-if="this.$store.state.showAddSlangModal"
      class="new-slang-modal"
    />
    <ProfileModal
      v-if="this.$store.state.showProfileModal"
    />
    <EditDetails v-if="this.$store.state.EditDetails" />
    <ChangeUsername v-if="this.$store.state.ChangeUsername" />
    <ChangeEmail v-if="this.$store.state.ChangeEmail" />
    <ChangePassword v-if="this.$store.state.ChangePassword" />
    <ChangePhoneNo v-if="this.$store.state.ChangePhoneNo" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import Body from "../components/Body.vue";
import Footer from "../components/Footer.vue";
import NewSlangModal from "../components/NewSlangModal";
import ProfileModal from "../components/Profile/ProfileModal";
import EditDetails from "../components/Profile/EditDetails";
import ChangeUsername from "../components/Profile/ChangeUsername";
import ChangeEmail from "../components/Profile/ChangeEmail";
import ChangePassword from "../components/Profile/ChangePassword";
import ChangePhoneNo from "../components/Profile/ChangePhoneNo";
export default {
  name: "HomeView",
  components: {
    NavBar,
    Body,
    Footer,
    NewSlangModal,
    ProfileModal,
    EditDetails,
    ChangeUsername,
    ChangeEmail,
    ChangePassword,
    ChangePhoneNo,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.home {
  padding: 0;
  top: 0;
  bottom: 0;
}
@media only screen and (max-width: 900px) {
  .new-slang-modal {
    display: none;
  }
}
</style>

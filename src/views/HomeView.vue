<template>
  <div class="home">
    <NavBar @CHANGEPROFILE="TOGGLEPROFILE"/>
    <Body @CHANGESLANGMODAL="TOGGLESLANGMODAL"/>
    <NewSlangModal
      v-if="showAddSlangModal"
      class="new-slang-modal"
      @CLOSESLANGMODAL="TOGGLESLANGMODAL"
    />
    <ProfileModal v-if="showProfileModal" @CLOSEMODAL="TOGGLEPROFILE"/>
    <!-- <EditDetails v-if="this.$store.state.EditDetails" />
    <ChangeUsername v-if="this.$store.state.ChangeUsername" />
    <ChangeEmail v-if="this.$store.state.ChangeEmail" />
    <ChangePassword v-if="this.$store.state.ChangePassword" />
    <ChangePhoneNo v-if="this.$store.state.ChangePhoneNo" /> -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from "../components/Loading.vue";
import { mapState } from "vuex";
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
    Loading,
  },
  data() {
    return {
      showAddSlangModal: false,
      showProfileModal: false,
    };
  },
  methods: {
    TOGGLEPROFILE() {
      this.showProfileModal = !this.showProfileModal;
    },
    TOGGLESLANGMODAL() {
      this.showAddSlangModal = !this.showAddSlangModal
    }
  },
  computed: {
    ...mapState(["user", "token"]),
  },
};
</script>

<style scoped>
.home {
  background: #096a09;
  padding: 0;
  top: 0;
  bottom: 0;
}
@media only screen and (max-width: 1025px) {
  .home {
    height: 100vh;
  }
  .new-slang-modal {
    display: none;
  }
}
@media only screen and (max-width: 500px) {
  .home {
  }
  .new-slang-modal {
    display: none;
  }
}
</style>

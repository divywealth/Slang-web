<template>
  <div class="home">
    <NavBar />
    <Body />
    <Footer />
    <NewSlangModal v-if="this.$store.state.showAddSlangModal" class="new-slang-modal"/>
    <ProfileModal v-if="this.$store.state.showProfileModal" class="new-slang-modal"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import Body from '../components/Body.vue'
import Footer from '../components/Footer.vue'
import NewSlangModal from '../components/NewSlangModal'
import ProfileModal from '../components/ProfileModal'
export default {
  name: 'HomeView',
  components: { NavBar, Body, Footer, NewSlangModal, ProfileModal},
  data() {
    return {
      
    }
  }
}
</script>

<style scoped> 
.home {
  padding: 0;
  top: 0;
  bottom: 0;
}
@media only screen and (max-width: 900px) {
  .new-slang-modal {
    display: none
  }
}

</style>

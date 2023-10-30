<template>
  <div class="home">
    <NavBar />
    <Body />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import Body from '../components/Body.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'HomeView',
  components: { NavBar, Body, Footer}
}
</script>

<style scoped> 
.home {
  padding: 0;
  top: 0;
  bottom: 0;
}

</style>

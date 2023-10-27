<template>
  <div class="home">
    <NavBar />
    <Body />
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

</style>

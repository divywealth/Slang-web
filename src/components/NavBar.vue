<template>
   <div class="navbar-main">
      <div class="navbar-logo"><img alt="Not displaying" src="../assets/image/Slang-Logo.jpeg"/></div>
      <div class="navbar-github"><a href="https://github.com/divywealth/Slang-web"><img alt="Not displaying" src="../assets/image/Github-Logo.png"/></a></div>
   </div>
</template>

<style scoped>
.navbar-main {
  background-color: #096a09;
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 1rem 2rem 1rem 2rem
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
.navbar-github img{
  height: 50px;
  cursor: pointer;
  border-radius: 100%;
  width: 50px;
}
@media only screen and (max-width: 900px) {
  .navbar-logo img {
    height: 50px;
    width: 50px;
  }
  .navbar-main {
    border-bottom: 2px solid grey;
    padding: 1rem 1.9rem
  }
} 
</style>


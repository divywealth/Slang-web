<template>
  <div class="main-footer-container">
    <span>COPYRIGHTED 2023. ALL RIGHTS RESERVED</span>
    <span>divywealth1@gmail.com</span>
  </div>
</template>

<style scoped>
.main-footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #5d945d;
  padding: 50px 0;
  color: #a6e3a6;
  font-family: sans-serif;
}
.main-footer-container span {
  background: none;
}
@media only screen and (max-width: 1025px) {
  .main-footer-container {
    background: #096a09;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 30px 0;
  }
}
@media only screen and (max-width: 900px) {
  .main-footer-container span {
    font-size: 13px;
  }
  .main-footer-container {
    background: #096a09;
    position: static;
    bottom: 0;
    width: 100%;
    padding: 30px 0;
  }
}

</style>

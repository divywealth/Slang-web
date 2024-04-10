<template>
  <div class="backdrop">
    <div class="modal">
      <div class="cover-photo"></div>
      <div class="user-details">
        <img src="../assets/user-profile1.jpg" class="user-icon" />
        <span>Onuora Divine</span>
        <span>Divy-kiss</span>
        <hr style="width: 100%; margin-top: 15px" />
        <div class="phone-section">
          <span>Phone</span>
          <span>+2349018317817</span>
        </div>
        <div class="phone-section">
          <span>Email</span>
          <span>divywealth1@gmail.com</span>
        </div>
        <hr style="width: 100%; margin-top: 15px" />
      </div>
      <div class="slang-section">
        <button>Pending slangs</button>
        <button>All Slangs</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileModal",
};
</script>

<style scoped>
* {
  background: #fff;
  font-family: sans-serif
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
.cover-photo {
  height: 100px;
  background: #808080;
  width: 100%;
}
.user-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 70px);
  padding: 0 35px;
}
.user-icon {
  width: 140px;
  height: 140px;
  border-radius: 100%;
  margin-top: -50px;
}
.phone-section {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.slang-section {
  width: calc(100% - 70px);
  display: flex;
  justify-content: space-between;
  margin: 30px 0
}
.slang-section button {
  background-color: #48bb48;
  width: 40%;
  border: none;
  margin-left: 20px;
  color: white;
  cursor: pointer;
  padding: 20px 45px;
  border-radius: 10px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

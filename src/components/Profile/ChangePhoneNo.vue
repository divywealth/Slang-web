<template>
  <div class="backdrop">
    <div class="modal">
        ChangePhoneNo
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePhoneNo",
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
</style>

<template>
  <div class="backdrop">
    <div class="modal">
      <div class="cancel-container">
        <font-awesome-icon
          icon="fa-solid fa-times"
          style="cursor: pointer; color: white"
          @click="CLOSEMODAL"
        />
      </div>
      <div class="form-modal">
        <h1>Add Slang</h1>
        <form @submit.prevent="ADDTOSLANG">
          <div>
            <label>Slang</label>
            <input type="text" required />
          </div>

          <div>
            <label>Meaning</label>
            <textarea rows="10" required />
          </div>

          <p class="note">
            NOTE: Slangs take a while before it gets public, The meaning has to
            <br />
            be confirmed correct by the review team before it gets public, if
            wrong <br />
            it gets declined
          </p>

          <div class="submitBox">
            <button class="submit">Done</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewSlangModal",
  data() {
    return {
      isScrollable: false,
    };
  },
  methods: {
    ADDTOSLANG() {
      this.$store.state.showAddSlangModal = false;
    },
    CLOSEMODAL() {
      this.$emit("CLOSESLANGMODAL")
    }
  },
};
</script>

<style scoped>
* {
  background: #808080;
}
.backdrop {
  position: fixed;
  background: rgb(0, 0, 0, 0.5);
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;/* Enable scrolling */
}
.modal {
  background: #808080;
  border-radius: 10px;
  padding: 10px 20px 40px 40px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 80%; /* Set max-width as a percentage of viewport width */
  max-height: 80%; /* Set max-height as a percentage of viewport height */
  overflow-y: auto;
}
.form-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}
.form-modal h1 {
  color: white;
  font-family: sans-serif;
}
.form-modal form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-modal form label {
  color: white;
  display: inline-block;
  margin: 20px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
.form-modal form input,
.form-modal form textarea {
  display: block;
  padding: 10px 6px;
  width: 400px;
  border-radius: 5px;
  border: 1px solid #b4b4b8;
  outline: none;
  color: #283d3f;
  background: #e0e0e4;
}
.submitBox {
  text-align: center;
}
.submit {
  border-radius: 5px;
  background-color: #096a09;
  color: white;
  border: none;
  padding: 10px 150px;
  cursor: pointer;
  margin-top: 20px;
  font-family: sans-serif;
}
.note {
  color: #fff;
  font-family: sans-serif;
  background: none;
  font-size: 15px;
  margin-top: 25px;
}
.cancel-container {
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-bottom: 30px;
}
</style>

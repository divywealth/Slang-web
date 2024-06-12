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
            <input type="text" v-model="slang" required />
          </div>

          <div>
            <label>Meaning</label>
            <textarea rows="10" v-model="meaning" required />
          </div>

          <p class="note">
            NOTE: Slangs take a while before it gets public, The meaning has to
            <br />
            be confirmed correct by the review team before it gets public, if
            wrong <br />
            it gets declined
          </p>

          <div class="submitBox">
            <button class="submit">
              <span style="background: none" v-if="!isLoading">SUBMIT</span>
              <Loading style="margin: 0 auto" v-if="isLoading" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "../components/Loading.vue";
export default {
  name: "NewSlangModal",
  components: { Loading },
  data() {
    return {
      isScrollable: false,
      isLoading: false,
      slang: "",
      meaning: "",
    };
  },
  methods: {
    async ADDTOSLANG() {
      try {
        this.isLoading = true;
        const convertedSlang = this.slang.toUpperCase();
        const data = {
          slang: convertedSlang,
          meaning: this.meaning,
        };
        const response = await this.$store.dispatch("createSlang", data);
        this.isLoading = false;
        if (response) {
          this.$emit("CLOSESLANGMODALSUCESS");
          return response;
        }
      } catch (error) {
        if (error) {
          this.$toast.open({
            message: error,
            type: "error", // You can use 'success', 'info', 'error', or 'warning'
            // Additional options
            duration: 5000, // Duration in milliseconds
            dismissible: true, // Whether the toast can be dismissed
            position: "top", // Position of the toast
          });
        }
        this.isLoading = false;
        throw error;
      }
    },
    CLOSEMODAL() {
      this.$emit("CLOSESLANGMODAL");
    },
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
  justify-content: center; /* Enable scrolling */
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
  text-align: center;
  width: 250px;
  padding: 10px 0;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  font-family: sans-serif;
  white-space: nowrap;
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

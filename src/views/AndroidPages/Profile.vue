<template>
  <main>
    <section class="android-section">
      <div class="android-modal">
        <div class="cover-photo"></div>
        <div class="user-details">
          <div class="image-container">
            <img src="../../assets/user-profile1.jpg" class="user-icon" />
            <div class="camera-container" @click="chooseFile">
              <font-awesome-icon
                icon="fa-solid fa-camera"
                style="background: #48bb48"
              /><input
                type="file"
                name="file"
                ref="fileInput"
                @change="handleFileChange"
                accept="image/*"
                style="display: none"
              />
            </div>
          </div>
          <span>{{ user.firstname }} {{ user.lastname }}</span>
          <span>{{ user.username }}</span>
          <hr style="width: 100%; margin-top: 15px" />
          <div class="phone-section">
            <span>Phone</span>
            <span>+2349018317817</span>
          </div>
          <div class="phone-section">
            <span>Email</span>
            <span>{{ user.email }}</span>
          </div>
          <hr style="width: 100%; margin-top: 15px" />
        </div>
        <div class="settings-container" @click="SHOWEDITDETAILS">
          <font-awesome-icon icon="fa-solid fa-gear" />
          <span>Edit Details</span>
        </div>
        <div class="slang-section">
          <button @click="TOGGLEPENDINGSLANGS">
            <span>Pending Slangs</span>
            <font-awesome-icon :icon="iconName2" class="arrow-down" />
          </button>
          <button @click="TOGGLEALLSLANGS">
            <span>All Slangs</span>
            <font-awesome-icon :icon="iconName" class="arrow-down" />
          </button>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
import { mapState } from "vuex";
import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
export default {
  name: "Profile",
  components: { NavBar, Footer },
  data() {
    return {
      filename: "",
      allSlangs: false,
      pendingSlangs: false,
    };
  },
  methods: {
    chooseFile() {
      try {
        this.$refs.fileInput.click();
      } catch (error) {
        console.error("Error occurred while choosing file:", error);
      }
    },
    handleFileChange(event) {
      this.filename = event.target.files[0].name;
      console.log(this.filename);
    },
  },
  computed: {
    iconName2() {
      return this.pendingSlangs ? faCaretDown : faCaretUp;
    },
    iconName() {
      return this.allSlangs ? faCaretDown : faCaretUp;
    },
    ...mapState(["user"]),
  },
};
</script>

<style>
.image-container {
  position: relative;
}
.camera-container {
  position: absolute;
  background: #48bb48;
  border-radius: 100%;
  padding: 10px;
  top: 50%;
  left: 70%;
  cursor: pointer;
}
.camera-container:hover + .add-photo {
  display: block;
}
.add-photo {
  position: absolute;
  top: 50%;
  left: 110%;
  display: none;
  background: #48bb48;
  white-space: nowrap;
  padding: 2px 10px;
  border-radius: 20px;
}
.add-photo span {
  background: #48bb48;
  color: white;
  font-size: 10px;
}
.cover-photo {
  height: 100px;
  background: #096a09;
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
.settings-container {
  padding: 5px;
  cursor: pointer;
}
.settings-container:hover {
  color: #48bb48;
}
.settings-container span {
  margin-left: 5px;
}
.slang-section {
  width: calc(100% - 70px);
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
}
.slang-section button {
  background-color: #48bb48;
  width: 40%;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  padding: 20px 45px;
  border-radius: 10px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slang-section button span {
  color: black;
  background: none;
  margin-right: 10px;
}
.arrow-down {
  color: black;
  background: none;
}
.android-section {
  display: none;
}
.android-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media only screen and (max-width: 1025px) {
  .android-section {
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
  }
  .slang-section {
    width: calc(100% - 70px);
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
  }
  .slang-section button {
    background-color: #48bb48;
    width: 40%;
    white-space: nowrap;
    border: none;
    margin-left: 20px;
    cursor: pointer;
    padding: 20px 0;
    border-radius: 10px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slang-section button span {
    color: black;
    background: none;
    margin-right: 10px;
  }
}
@media only screen and (max-width: 900px) {
  .android-section {
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
  }
  .slang-section {
    width: calc(100% - 70px);
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
  }
  .slang-section button {
    background-color: #48bb48;
    width: 40%;
    white-space: nowrap;
    border: none;
    margin-left: 20px;
    cursor: pointer;
    padding: 20px 0;
    border-radius: 10px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slang-section button span {
    color: black;
    background: none;
    margin-right: 10px;
  }
}
</style>

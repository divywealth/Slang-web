<template>
  <main>
    <section class="backdrop" @click.self="CLOSEMODAL">
      <div class="modal">
        <!--Profile-->
        <div class="cover-photo"></div>
        <div class="user-details">
          <div class="image-container">
            <img :src="user.profilepic" class="user-icon" v-if="user.profilepic" />
            <img src="../../assets/user-profile1.jpg" class="user-icon" v-if="!user.profilepic"/>
            <div class="camera-container">
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
            <div class="add-photo">
              <ul>
                <li @click="chooseFile">Change Photo</li>
                <li>Delete Photo</li>
              </ul>
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
        <!-- <div class="settings-container" @click="SHOWEDITDETAILS">
          <font-awesome-icon icon="fa-solid fa-gear" />
          <span>Edit Details</span>
        </div> -->
        <div class="settings-container" @click="LOGOUT">
          <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
          <span>Log out</span>
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

        <!--Pending SLangs-->
        <section v-if="pendingSlangs" class="pendingSection">
          <table class="slang-table" v-if="!noPendingSlang">
            <thead>
              <tr>
                <th>Slang</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(userPendingSlang, index) in userPendingSlangs"
                :key="index"
              >
                <td>{{ userPendingSlang.slang }}</td>
                <td>{{ userPendingSlang.meaning }}</td>
              </tr>
            </tbody>
          </table>
          <div v-if="noPendingSlang">NO PENDING SLANGS</div>
        </section>

        <!--All SLangs-->
        <section v-if="allSlangs" class="pendingSection">
          <table class="slang-table" v-if="!noApprovedSlang">
            <thead>
              <tr>
                <th>Slang</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(userApprovedSlang, index) in userApprovedSlangs"
                :key="index"
              >
                <td>{{ userApprovedSlang.slang }}</td>
                <td>{{ userApprovedSlang.meaning }}</td>
              </tr>
            </tbody>
          </table>
          <div v-if="noApprovedSlang">USER HASN'T CREATED ANY SLANG</div>
        </section>
      </div>
    </section>

    <!--Android Section-->
    <!-- <section class="android-section">
      <font-awesome-icon
        icon="fa-solid fa-times"
        style="margin: 10px 10px 20px 10px"
        @click="CLOSEMODAL"
      />
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
        <!-- <div class="settings-container" @click="SHOWEDITDETAILS">
          <font-awesome-icon icon="fa-solid fa-gear" />
          <span>Edit Details</span>
        </div> -->
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
    </section> -->
  </main>
</template>

<script>
import { mapState } from "vuex";
import { SET_BEARER_HTTP } from "@/apis/axiosClient";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
export default {
  name: "ProfileModal",
  data() {
    return {
      fileName: null,
      allSlangs: false,
      pendingSlangs: false,
      noApprovedSlang: false,
      noPendingSlang: false,
    };
  },
  mounted() {
    SET_BEARER_HTTP()
    this.GETUSERAPPROVEDSLANGS()
    this.GETUSERPENDINGSLANGS()
  },
  methods: {
    chooseFile() {
      try {
        this.$refs.fileInput.click();
      } catch (error) {
        console.error("Error occurred while choosing file:", error);
      }
    },
    async handleFileChange(event) {
      const files = event.target.files;
      if (files && files.length > 0) {
        this.fileName = files[0];
      }
      const formData = new FormData();
      formData.append('file', this.fileName);
      try {
        const response = await this.$store.dispatch("updateProfilePic", formData)
      } catch (error) {
        throw error;
      }
    },
    CLOSEMODAL() {
      this.$emit("CLOSEMODAL");
    },
    // SHOWEDITDETAILS() {
    //   this.$store.state.showProfileModal = false;
    //   this.$store.state.EditDetails = true;
    // },
    TOGGLEPENDINGSLANGS() {
      if (this.allSlangs == true) {
        this.allSlangs = false;
        this.pendingSlangs = !this.pendingSlangs;
      } else {
        this.pendingSlangs = !this.pendingSlangs;
      }
    },
    TOGGLEALLSLANGS() {
      if (this.pendingSlangs == true) {
        this.pendingSlangs = false;
        this.allSlangs = !this.allSlangs;
      } else {
        this.allSlangs = !this.allSlangs;
      }
    },
    async GETUSERAPPROVEDSLANGS() {
      try {
        const response = await this.$store.dispatch("getUserApprovedSlangs");
        if (response == "User has not added any slang yet") {
          this.noApprovedSlang = true;
        }
      } catch (error) {
        throw error;
      }
    },
    async GETUSERPENDINGSLANGS() {
      try {
        const response = await this.$store.dispatch("getUserPendingSlangs");
        if (response == "User has no pending slang") {
          this.noPendingSlang = true;
        }
      } catch (error) {
        throw error;
      }
    },
    async LOGOUT() {
      await this.$store.dispatch("handleLogOut");
      this.$emit("CLOSEMODAL");
    },
  },
  computed: {
    iconName2() {
      return this.pendingSlangs ? faCaretDown : faCaretUp;
    },
    iconName() {
      return this.allSlangs ? faCaretDown : faCaretUp;
    },
    ...mapState(["user", "userPendingSlangs", "userApprovedSlangs"]),
  },
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
  opacity: 1
}
.add-photo:hover {
  display: block
}
.add-photo {
  position: absolute;
  top: 50%;
  left: 97%;
  display: none;
  white-space: nowrap;
  border-radius: 5px;
  box-shadow: 0px 0px 1px 0px;
  transition: opacity 0.5s
}
.add-photo span {
  background: #48bb48;
  color: white;
  font-size: 10px;
}
.add-photo ul {
  list-style: none;
}
.add-photo ul li {
  border-bottom: 1px solid grey;
  padding: 5px 20px;
  transition: opacity 0.5s;
  cursor: pointer;
}
.add-photo ul li:hover {
  background: grey
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
.pendingSection {
  padding: 10px 20px;
}
.slang-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}
.slang-table tbody {
}
.slang-table tbody tr {
}
.slang-table tbody tr td {
  border: 1px solid #d6dbd5;
  padding: 10px 5px;
  font-family: sans-serif;
  color: #606063;
  overflow-wrap: break-word;
  word-break: break-all;
  text-overflow: ellipsis;
}
.slang-table thead tr th {
  border: 1px solid #d6dbd5;
}
@media only screen and (max-width: 1025px) {
  .backdrop {
    display: none;
  }
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

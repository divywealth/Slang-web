<template>
  <main class="main-body">
    <div class="padded-section">
      <header class="header">
        <h1 class="statement-one">Understanding Nigeria slangs</h1>
        <h1 class="statement-two">is changing. Naso</h1>
      </header>

      <div class="slang-display-section">
        <div class="slang-display-box" id="chise"><span>chise</span></div>
        <div class="slang-display-box" id="kpk"><span>kpk</span></div>
        <div class="slang-display-box" id="opk"><span>opk</span></div>
        <div class="slang-display-box" id="otilo"><span>otilo</span></div>
        <div class="slang-display-box" id="omo"><span>omo</span></div>
      </div>

      <div class="slangInput-section">
        <div class="slanginput-writing">
          <p class="top-writing">
            <span>Start by entering a slang,</span> and our dictionary will spit
            out an abbreviation.
          </p>
          <p class="note">
            *For now slang are one way. For example a slang can only translate
            to its meaning and not the other way round
          </p>
          <p class="note">
            Note: Sorry if you cant see added slangs instantly, Slangs added wont be displayed till it 
            is reviewed and approved 
          </p>
          <p class="note">
            -To add slang you have to sign in then your added slang will be
            reveiwed and approved. You can add multiple slangs
          </p>
        </div>
        <div class="slang-input-container">
          <div class="slanginput">
            <div>
              <div class="input-section">
                <font-awesome-icon
                  icon="fa-solid fa-search"
                  class="search-icon"
                />
                <input
                  placeholder="Search slang full meaning..."
                  class="input"
                  v-model="slang"
                />
              </div>
              <div v-if="slangError" class="formError">
                {{ slangError }}
              </div>
            </div>
            <div class="button" @click="HANDLEGETSLANGMEANING">
              <span v-if="!show_spinner">Search</span>
              <div class="load_spinner" v-if="show_spinner"></div>
            </div>
          </div>
          <div class="meaning-container" v-if="gottenSlangDetails">
            <span>{{ slangDetails.meaning }}</span>
            <span class="authur">-{{ slangDetails.user.username }}</span>
            <section class="reaction-section">
              <div>
                <font-awesome-icon
                  :icon="
                    liked ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up'
                  "
                  class="icon"
                  @click="REACTTOSLANG('Like')"
                />
                <span>{{ likes }}</span>
              </div>
              <div>
                <font-awesome-icon
                  :icon="
                    disliked
                      ? 'fa-solid fa-thumbs-down'
                      : 'fa-regular fa-thumbs-down'
                  "
                  class="icon"
                  @click="REACTTOSLANG('Dislike')"
                />
                <span>{{ dislikes }}</span>
              </div>
              <!-- <div>
                <font-awesome-icon icon="fa-solid fa-flag" class="icon" />
              </div> -->
            </section>
          </div>
          <div class="add-slang" @click="TOGGLEADDSLANGMODAL">Add Slang</div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Body",
  data() {
    return {
      slang: "",
      show_spinner: false,
      gotData: false,
      meaning: null,
      slangDetails: null,
      gottenSlangDetails: false,
      slangError: null,
      liked: false,
      disliked: false,
      likes: 0,
      dislikes: 0,
      userSlangReaction: null
    };
  },
  methods: {
    async GETSLANGREACTIONS() {
      try {
        const likes = await this.$store.dispatch(
          "getSlangLikes",
          this.slangDetails._id
        );
        this.likes = likes.length;
        const dislikes = await this.$store.dispatch(
          "getSlangDislikes",
          this.slangDetails._id
        );
        this.dislikes = dislikes.length;
      } catch (error) {
        throw error;
      }
    },
    async GETUSERSLANGREACTION() {
      try {
        this.liked = false;
        this.disliked = false;
        const reaction = await this.$store.dispatch(
          "getUserSlangReaction",
          this.slangDetails._id
        );
        this.userSlangReaction = reaction
        if (typeof reaction !== "string") {
          if (reaction.react == "Like") {
            this.liked = true;
          } else {
            this.disliked = true;
          }
        } else {
          this.liked = false;
          this.disliked = false;
        }
      } catch (error) {
        throw error;
      }
    },
    async HANDLEGETSLANGMEANING() {
      try {
        this.gottenSlangDetails = false;
        this.show_spinner = true;
        this.slangError = null;
        const convertedSlang = this.slang.toUpperCase();
        const data = {
          slang: convertedSlang,
        };
        const response = this.$store.dispatch("getSlang", data);
        const slangResponse = await response;
        this.slangDetails = slangResponse;
        const reactionsPromise = this.GETSLANGREACTIONS();
        const userReactionPromise = this.GETUSERSLANGREACTION();
        await Promise.all([reactionsPromise, userReactionPromise]);
        this.show_spinner = false;
        this.gottenSlangDetails = true;
      } catch (error) {
        if (
          error
        ) {
          this.slangError = error;
        }
        this.show_spinner = false;
        throw error;
      }
    },
    TOGGLEADDSLANGMODAL() {
      if (this.user) {
        if (window.innerWidth > 1025) {
          this.$emit("CHANGESLANGMODAL");
        } else {
          this.$router.push({
            name: "AddSlang",
          });
        }
      } else {
        this.$toast.open({
          message: "You need to Sign in before adding a slang",
          type: "info", // You can use 'success', 'info', 'error', or 'warning'
          // Additional options
          duration: 5000, // Duration in milliseconds
          dismissible: true, // Whether the toast can be dismissed
          position: "top", // Position of the toast
        });
      }
    },
    async REACTTOSLANG(reaction) {
      try {
        if (this.liked == true || this.disliked == true) {
          const deleteReactionPromise = this.DELETEUSERREACTION();
          const reactionsPromise = this.GETSLANGREACTIONS();
          const userReactionPromise = this.GETUSERSLANGREACTION();
          await Promise.all([
            reactionsPromise,
            userReactionPromise,
            deleteReactionPromise,
          ]);
          if(deleteReactionPromise) {
            console.log(deleteReactionPromise)
            this.liked = false,
            this.disliked = false
          }
        } else {
          const data = {
            slang: this.slangDetails._id,
            react: reaction,
          };
          const response = await this.$store.dispatch("createReaction", data);
          console.log(response);
          if (response) {
            await this.GETSLANGREACTIONS();
            await this.GETUSERSLANGREACTION();
          }
        }
      } catch (error) {
        throw error;
      }
    },
    async DELETEUSERREACTION() {
      try {
        const response = await this.$store.dispatch(
          "deleteUserSlangReaction",
          this.userSlangReaction._id
        );
        return response;
      } catch (error) {
        throw error;
      }
    },
    // async GETSLANGDISLIKES() {
    //   try {
    //     const response = await this.$store.dispatch("getSlangDislikes");
    //     console.log(response, response.length)
    //     this.dislikes = response.length
    //   } catch (error) {
    //     throw error
    //   }
    // }
  },
  computed: {
    ...mapState(["user", "token"]),
  },
};
</script>
<style scoped>
* {
  background: none;
}
.main-body {
  padding: 2rem 2rem;
}
.padded-section {
  padding-top: 3rem;
  padding-bottom: 2rem;
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.statement-one {
  text-align: center;
  font-weight: 800;
  font-size: 4rem;
  font-family: sans-serif;
  color: #a6e3a6;
}
.statement-two {
  color: white;
  text-align: center;
  font-weight: 800;
  margin-top: 0.5rem;
  font-size: 3.8rem;
  font-family: sans-serif;
}
.slang-display-section {
  display: flex;
  justify-content: center;
}
.formError {
  color: #ff0050;
  font-size: 0.8em;
  font-weight: bold;
  margin-top: 10px;
  font-family: sans-serif;
}
.slang-display-box {
  border: 3px solid #a6e3a6;
  margin: 25px 20px;
  width: 140px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: #a6e3a6;
}
.slang-display-box span {
  font-weight: 400;
  font-family: sans-serif;
  font-size: 29px;
}
.slangInput-section {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.slanginput-writing {
  width: 40%;
  margin-right: 10%;
}
.top-writing {
  font-family: sans-serif;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: #a6e3a6;
  margin-bottom: 27px;
}
.note {
  color: #7b87a1;
  font-family: sans-serif;
  font-size: 15px;
}
.slanginput-writing span {
  color: white;
  line-height: 0;
}
.slanginput {
  padding-top: 20px;
  display: flex;
}
.slang-input-container {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.meaning-container {
  background: white;
  margin-top: 20px;
  border-radius: 20px;
  border: 4px solid green;
  font-family: sans-serif;
  padding: 20px 10px;
  display: flex;
  width: 500px;
  flex-direction: column;
}
.meaning-container span {
  background: none;
}
.authur {
  margin-top: 15px;
  text-align: end;
}
.search-icon {
  background: white;
  color: green;
}
.input {
  border: none;
  background-color: white;
  padding: 0 10px;
  margin: 7px 15px;
  font-size: 17px;
  width: 235px;
  height: 30px;
  border-radius: 20px;
}
.input:focus {
  outline: none;
}
.input-section {
  background-color: white;
  border: 2px solid #a6e3a6;
  border-radius: 50px;
  padding-left: 10px;
  display: flex;
  align-items: center;
}
.add-slang {
  background-color: #48bb48;
  box-sizing: border-box;
  border: none;
  width: 67%;
  margin-top: 70px;
  cursor: pointer;
  padding: 15px 45px;
  border-radius: 10px;
  height: 53px;
  display: flex;
  color: white;
  font-size: 15px;
  font-family: sans-serif;
  align-items: center;
  justify-content: center;
}
.add-slang span {
  color: white;
  font-size: 15px;
  font-family: sans-serif;
  background: none;
}
.button {
  background-color: #48bb48;
  width: 50%;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  padding: 15px 45px;
  border-radius: 10px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button span {
  color: white;
  font-size: 15px;
  font-family: sans-serif;
  background: none;
}
.reaction-section {
  display: flex;
}
.reaction-section div {
  cursor: pointer;
  margin: 0 20px 0 0;
}
.icon {
  padding: 0 10px;
}
#chise {
  transform: rotate(2deg);
  animation: left-to-right1 8s linear both infinite alternate;
}
#kpk {
  transform: rotate(-4deg);
  animation: left-to-right2 8s linear both infinite alternate;
}
#opk {
  transform: rotate(4deg);
  animation: left-to-right3 8s linear both infinite alternate;
}
#otilo {
  transform: rotate(5deg);
  animation: left-to-right4 8s linear both infinite alternate;
}
#omo {
  transform: rotate(-5deg);
  animation: left-to-right5 8s linear both infinite alternate;
}
.load_spinner {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid #0d0d0d;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(350deg);
  }
}
@keyframes left-to-right1 {
  to {
    transform: rotate(2deg) translateX(20%);
  }
  from {
    transform: rotate(0deg) translateX(-15%);
  }
}
@keyframes left-to-right2 {
  to {
    transform: rotate(-4deg) translateX(20%);
  }
  from {
    transform: rotate(-2deg) translateX(-15%);
  }
}
@keyframes left-to-right3 {
  to {
    transform: rotate(4deg) translateX(20%);
  }
  from {
    transform: rotate(2deg) translateX(-15%);
  }
}
@keyframes left-to-right4 {
  to {
    transform: rotate(5deg) translateX(20%);
  }
  from {
    transform: rotate(3deg) translateX(-15%);
  }
}
@keyframes left-to-right5 {
  to {
    transform: rotate(-5deg) translateX(20%);
  }
  from {
    transform: rotate(-3deg) translateX(-15%);
  }
}
@media only screen and (max-width: 1030px) {
  .main-body {
    padding: 2.5rem 2.5rem;
  }
  .statement-one {
    font-size: 3rem;
  }
  .statement-two {
    font-size: 3rem;
  }
  .slangInput-section {
    display: block;
    justify-content: center;
    margin-top: 50px;
  }
  .slanginput-writing {
    width: 100%;
    text-align: center;
    margin-right: 10%;
  }
  .slang-input-container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .note {
    font-size: 18px;
  }
}
@media only screen and (max-width: 900px) {
  .main-body {
    padding: 10px 10px;
  }
  .slang-display-section {
    display: none;
  }
  .statement-one {
    font-size: 40px;
  }
  .statement-two {
    margin-top: 10px;
    font-size: 40px;
  }
  .meaning-container {
    width: 300px;
  }
  .top-writing {
    font-size: 25px;
    line-height: 2rem;
  }
  .slanginput {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .input {
  }
  .add-slang {
  }
  .button {
    margin-top: 20px;
    margin-left: 0;
  }
  .meaning-container {
    padding: 10px 10px;
  }
}
</style>

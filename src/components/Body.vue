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
            Note: Slangs searched should start with capital letter so you get
            the meaning
          </p>
        </div>
        <div class="slang-input-container">
          <div class="slanginput">
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
            <div class="button" @click="HANDLEGETSLANGMEANING">
              <span v-if="!show_spinner">Search</span>
              <div class="load_spinner" v-if="show_spinner"></div>
            </div>
          </div>
          <div class="meaning-container" v-if="meaning">
            {{ meaning }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import db from "../firebase-config";
import {
  where,
  doc,
  collection,
  addDoc,
  getDocs,
  query,
} from "firebase/firestore";
export default {
  name: "Body",
  data() {
    return {
      slang: "",
      show_spinner: false,
      meaning: null,
    };
  },
  methods: {
    async HANDLEGETSLANGMEANING() {
      if (this.slang !== "") {
        this.show_spinner = !this.show_spinner;
        this.meaning = null;
        const convertedSlang = this.slang.toUpperCase();
        console.log(convertedSlang)
        const collection_ref = collection(db, "convertedSlang");
        const data = await getDocs(
          query(collection_ref, where("slang", "==", convertedSlang))
        );
        const datas = data.docs.map((doc) => {
          this.meaning = doc.data().meaning;
          return doc.data().meaning;
        });
        if (this.meaning === null) {
          this.meaning =
            "Sorry no meaning for this slang yet or check the note guidelines for any wrong way of search";
        }
        this.show_spinner = !this.show_spinner;
      }
    },
  },
};
</script>
<style scoped>
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
}
.meaning-container {
  background: white;
  margin-top: 20px;
  border-radius: 20px;
  border: 4px solid green;
  font-family: sans-serif;
  padding: 20px 10px;
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
}
.button {
  background-color: #48bb48;
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
  .top-writing {
    font-size: 25px;
    line-height: 2rem;
  }
  .slanginput {
    display: block;
  }
  .input {
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

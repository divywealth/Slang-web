<template>
  <main>
    <div class="no-pending">No Pending Slangs</div>
    <div class="main-container" v-for="(pendingSlang, index) in pendingSlangs" :key="index">
      <div class="slang-section">
        <p class="slang">{{pendingSlang.slang}}</p>
        <div v-if="pendingSlang.meaning.length > maxLength">
            <p style="margin-top: 10px; overflow-wrap: anywhere" v-if="showAll">
                {{pendingSlang.meaning}}
                <span @click="toggleShowAll" style="color: blue; cursor: pointer">Collapse</span>
            </p>
            <p style="margin-top: 10px; overflow-wrap: anywhere" v-else>
                {{pendingSlang.meaning.length > maxLength ? pendingSlang.meaning.slice(0, maxLength) + "..." : pendingSlang.meaning}}
                <span @click="toggleShowAll" style="color: blue; cursor: pointer">Read more</span>
            </p>
        </div>
        <div v-else>
            <p style="margin-top: 10px; overflow-wrap: anywhere">
            {{pendingSlang.meaning}}
            </p>
        </div>
      </div>
      <div class="button-section">
        <button @click="APPROVESLANG(pendingSlang._id)">Approve</button>
        <button @click="DICLINESLANG(pendingSlang._id)">Refuse</button>
      </div>
    </div>
  </main>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";
export default {
  name: "Approve",
  components: { Footer, NavBar },
  data() {
    return {
        slang: 'hdhfhhhffhgfhghghhghghffhfhfhfdnbndndnsnsnnssjjdjdhhdhdhnsnsnsjdhhdjsjsnsnsnjjdhhdhdnsnsnsnsjjsjhdjjhhhh',
      pendingSlangs: null,
      showAll: false,
      maxLength: 100,
    };
  },
  mounted() {
    this.GETPENDINGSLANG()
  },
  methods: {
    toggleShowAll() {
        this.showAll = !this.showAll
    },
    async GETPENDINGSLANG() {
      try {
        const response = await this.$store.dispatch("getPendingSlangs")
        this.pendingSlangs = response
      } catch (error) {
        throw error;
      }
    },
    async APPROVESLANG(id) {
      try {
        const response = await this.$store.dispatch("approveSlang", id)
        console.log(response)
        await this.GETPENDINGSLANG()
      } catch (error) {
        throw error;
      }
    },
    async DICLINESLANG(id) {
      try {
        const response = await this.$store.dispatch("deleteSlang", id)
        console.log(response)
        await this.GETPENDINGSLANG()
      } catch (error) {
        throw error;
      }
    },
  },
};
</script>

<style>
main {
  padding: 10px 20px;
}
.main-container {
  width: 100%;
  box-shadow: 0px 0px 4px 0px;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;
  overflow-wrap: break-word;
}
.slang-section {
    flex: 1
}
.button-section {
}
.no-pending {
    font-size: 30px;
    display: flex;
    font-weight: bold;
    align-items: center;
    justify-content: center
}
.button-section button {
  border-radius: 5px;
  background-color: #586;
  color: white;
  border: none;
  text-align: center;
  padding: 10px 30px;
  cursor: pointer;
  margin: 0 20px;
  font-family: sans-serif;
  white-space: nowrap;
}
.slang {
    font-family: sans-serif;
    font-weight: bold
}
@media only screen and (max-width: 1025px) {
  .main-container {
    width: 100%;
    box-shadow: 0px 0px 4px 0px;
    box-sizing: border-box;
    border-radius: 15px;
    padding: 10px;
    display: block;
  }
  .button-section {
    margin-top: 30px;
  }
  .button-section button {
    border-radius: 5px;
    background-color: #586;
    color: white;
    border: none;
    text-align: center;
    padding: 5px 30px;
    cursor: pointer;
    margin: 0 20px;
    font-family: sans-serif;
    white-space: nowrap;
  }
}
</style>

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showAddSlangModal: false,
    showProfileModal: false,
    EditDetails: false,
    ChangeUsername: false,
    ChangeEmail: false,
    ChangePassword: false,
    ChangePhoneNo: false,
  },
  getters: {},
  mutations: {
    CLOSEMODAL(state, payload) {
      console.log(state[payload])
      state[payload] = false;
    }
  },
  actions: {},
  modules: {},
});

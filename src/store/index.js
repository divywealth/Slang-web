import Vue from "vue";
import Vuex from "vuex";
import { userActions } from "./actions/useractions";
import { slangActions } from "./actions/slangactions";
import createPersistedState from "vuex-persistedstate";
import { codeActions } from "./actions/codeactions";
import { reactionActions } from "./actions/reactionactions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    tempUser: null,
    userPendingSlangs: null,
    userApprovedSlangs: null,
    setArrivedViaForgetPassword: false,
    setArrivedViaSignup: false,
    // showAddSlangModal: false,
    // showProfileModal: false,
    // EditDetails: false,
    // ChangeUsername: false,
    // ChangeEmail: false,
    // ChangePassword: false,
    // ChangePhoneNo: false,
  },
  getters: {},
  mutations: {
    CLOSEMODAL(state, payload) {
      state[payload] = false;
    },
    SETUSER(state, payload) {
      Vue.set(state, "user", payload);
    },
    SETTOKEN(state, payload) {
      Vue.set(state, "token", payload);
    },
    SETTEMPUSER(state, payload) {
      Vue.set(state, "tempUser", payload);
    },
    SETUSERPENDINGSLANGS(state, payload) {
      Vue.set(state, "userPendingSlangs", payload);
    },
    SETUSERAPPROVEDSLANGS(state, payload) {
      Vue.set(state, "userApprovedSlangs", payload);
    },
    SETARRIVEDVIASIGNUP(state) {
      Vue.set(state, "setArrivedViaSignup", true);
    },
    SETARRIVEDVIAFORGETPASSWORD(state) {
      Vue.set(state, "setArrivedViaForgetPassword", true);
    },
    RESETARRIVEDSTATE(state) {
      Vue.set(state, "setArrivedViaSignup", false);
      Vue.set(state, "setArrivedViaForgetPassword", false);
    },
  },
  actions: {
    ...userActions,
    ...slangActions,
    ...codeActions,
    ...reactionActions,
  },
  modules: {},
  plugins: [
    createPersistedState({
      key: "slang",
    }),
  ],
});

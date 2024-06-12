import Vue from "vue";
import Vuex from "vuex";
import { userActions } from "./actions/useractions";
import { slangActions } from "./actions/slangactions";
import createPersistedState from "vuex-persistedstate";
import { codeActions } from "./actions/codeactions";
import { reactionActions } from "./actions/reactionactions";
import VueJwtDecode from "vue-jwt-decode";
import { format, isBefore, isAfter, parseISO, parseJSON } from "date-fns";

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
    AUTO_LOGOUT(state) {
      if (state.token != null) {
        const decodedToken = VueJwtDecode.decode(state.token);
        const exp = decodedToken.exp;
        const tokenExpDate = new Date(exp * 1000);
        console.log(`this is tokenDate ${tokenExpDate}`);
        const currentDate = new Date();
        console.log(`this is currentDate ${currentDate}`);
        const isTokenExpired = isAfter(currentDate, tokenExpDate);
        console.log(isTokenExpired);
        if (isTokenExpired === true) {
          Vue.set(state, "user", null);
          Vue.set(state, "token", null);
        }
      }
    },
    handleLogOut(state) {
      state.user = null;
      state.token = null;
    },
  },
  actions: {
    ...userActions,
    ...slangActions,
    ...codeActions,
    ...reactionActions,
    async AUTO_LOGOUT ({ commit }) {
      commit("AUTO_LOGOUT");
      localStorage.clear();
    },
    async handleLogOut({ commit }) {
      commit("handleLogOut")
      localStorage.clear();
    },
  },
  modules: {},
  plugins: [
    createPersistedState({
      key: "slang",
    }),
  ],
});

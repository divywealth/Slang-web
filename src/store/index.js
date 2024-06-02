import Vue from "vue";
import Vuex from "vuex";
import { userActions } from "./actions/useractions";
import { slangActions } from "./actions/slangactions";
import createPersistedState from "vuex-persistedstate";
import { codeActions } from "./actions/codeactions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    verifiedUser: null,
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
      state[payload] = false;
    },
    SETUSER(state, payload) {
      Vue.set(state, "user", payload)
    },
    SETTOKEN(state, payload) {
      Vue.set(state, "token", payload)
    },
    SETVERIFIEDUSER(state, payload) {
      Vue.set(state, "verifiedUser", payload)
    },
  },
  actions: {
    ...userActions,
    ...slangActions,
    ...codeActions,
  },
  modules: {},
  plugins: [
    createPersistedState({
      key: "slang",
    }),
  ],
});

import { createUserApi, loginUserApi, verifyUserApi } from "@/apis/authApis";

export const userActions = {
  async createUser({ commit }, data) {
    try {
      const response = await createUserApi(data);
      commit("SETUSER", response.user);
      commit("SETTOKEN", response.access_token);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async verifyUser({ commit }) {
    try {
      const response = await verifyUserApi();
      commit("SETVERIFIEDUSER", response);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async loginUser({ commit }, data) {
    try {
      const response = await loginUserApi(data);
      commit("SETUSER", response.user);
      commit("SETTOKEN", response.access_token);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

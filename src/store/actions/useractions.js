import {
  createUserApi,
  loginUserApi,
  updateProfilepicApi,
  verifyUserApi,
} from "@/apis/authApis";

export const userActions = {
  async createUser({ commit }, data) {
    try {
      const response = await createUserApi(data);
      commit("SETTEMPUSER", response.user)
      commit("SETTOKEN", response.access_token);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async verifyUser({ commit }) {
    try {
      const response = await verifyUserApi();
      commit("SETUSER", response);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async loginUser({ commit }, data) {
    try {
      const response = await loginUserApi(data);
      commit("SETTOKEN", response.access_token);
      if (response.user.status == "Verified") {
        commit("SETUSER", response.user);
      }else {
        commit("SETTEMPUSER", response.user)
      }
      return response;
    } catch (error) {
      throw error;
    }
  },

  async updateProfilePic({ commit }, data) {
    try {
      const response = await updateProfilepicApi(data);
      commit("SETUSER", response);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async resetPassword({ commit }, data) {
    try {
      const response = await resetPasswordApi(data)
      return response;
    } catch (error) {
      throw error
    }
  }
};

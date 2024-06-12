import { sendCodeEmailApi, sendCodePasswordApi, verifyCodeApi } from "@/apis/codeApis";

export const codeActions = {
  async verifyCode({ commit }, data) {
    try {
      const response = await verifyCodeApi(data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async sendCodeEmail({ commit }, data) {
    try {
      const response = await sendCodeEmailApi(data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async sendCodePassword({ commit }, data) {
    try {
      const response = await sendCodePasswordApi(data);
      commit("SETTEMPUSER", response.user)
      return response
    } catch (error) {
      throw error;
    }
  },
};

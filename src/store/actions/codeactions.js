import { sendCodeEmailApi, verifyCodeApi } from "@/apis/codeApis";

export const codeActions = {
  async verifyCode({ commit }, data) {
    try {
      console.log(data);
      const response = await verifyCodeApi(data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async sendCodeEmail({ commit }, data) {
    try {
      console.log(data);
      const response = await sendCodeEmailApi(data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async sendCodePassword() {
    try {
    } catch (error) {
      throw error;
    }
  },
};

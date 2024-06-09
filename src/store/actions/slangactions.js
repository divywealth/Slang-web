import {
  createSlangApi,
  getSlangApi,
  getUserApprovedSlangApi,
  getUserPendingSlangApi,
  updateSlangApi,
} from "@/apis/slangApis";

export const slangActions = {
  async createSlang({ commit }, data) {
    try {
      console.log(data);
      const response = await createSlangApi(data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async getSlang({ commit }, data) {
    try {
      console.log(data);
      const response = await getSlangApi(data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async updateSlang(data) {
    try {
      const response = await updateSlangApi(data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async getUserApprovedSlangs({ commit }) {
    try {
      const response = await getUserApprovedSlangApi();
      if (typeof response != String) {
        commit("SETUSERAPPROVEDSLANGS", response);
      }
      return response;
    } catch (error) {
      throw error;
    }
  },

  async getUserPendingSlangs({ commit }) {
    try {
      const response = await getUserPendingSlangApi();
      if (typeof response != String) {
        commit("SETUSERPENDINGSLANGS", response);
      }
      return response;
    } catch (error) {
      throw error;
    }
  },
};

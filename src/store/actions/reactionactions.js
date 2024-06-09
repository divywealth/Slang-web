import {
  createReactionApi,
  getSlangDislikesApi,
  getSlangLikesApi,
} from "@/apis/reactionApis";

export const reactionActions = {
  async createReaction({ commit }, data) {
    try {
      const response = await createReactionApi(data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async getSlangLikes({ commit }) {
    try {
      const response = await getSlangLikesApi();
      return response;
    } catch (error) {
      throw error;
    }
  },

  async getSlangDislikes({ commit }) {
    try {
      const response = await getSlangDislikesApi();
      return response;
    } catch (error) {
      throw error;
    }
  },
};

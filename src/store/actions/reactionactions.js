import {
  createReactionApi,
  deleteSlangReactionApi,
  getSlangDislikesApi,
  getSlangLikesApi,
  userSlangReactionApi,
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

  async getSlangLikes({ commit }, data) {
    try {
      const response = await getSlangLikesApi(data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async getSlangDislikes({ commit }, data) {
    try {
      const response = await getSlangDislikesApi(data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async getUserSlangReaction({ commit }, data) {
    try {
        const response = await userSlangReactionApi(data);
        return response;
    } catch (error) {
        throw error;
    }
  },

  async deleteUserSlangReaction({ commit }, id) {
    try {
        const response = await deleteSlangReactionApi(id);
        return response;
    } catch (error) {
        throw error
    }
  }
};

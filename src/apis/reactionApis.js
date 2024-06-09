import { BASIC_HTTP, BEARER_HTTP } from "./axiosClient";

export const createReactionApi = async (data) => {
  try {
    const response = await BEARER_HTTP.post("v1/reaction", data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const getSlangLikesApi = async () => {
  try {
    const response = await BASIC_HTTP.get("v1/slang/:slangId/likes");
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const getSlangDislikesApi = async () => {
  try {
    const response = await BASIC_HTTP.get("v1/slang/:slangId/dislikes");
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};



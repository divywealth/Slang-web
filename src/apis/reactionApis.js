import { BASIC_HTTP, BEARER_HTTP } from "./axiosClient";

export const createReaction = async (data) => {
  try {
    const response = await BEARER_HTTP.post("v1/reaction", data);
    return response.data;
  } catch (error) {
    throw error.message;
  }
};

export const getSlangLikes = async () => {
  try {
    const response = await BASIC_HTTP.get("v1/slang/:slangId/likes");
    return response.data;
  } catch (error) {
    throw error.message;
  }
};

export const getSlangDislikes = async () => {
  try {
    const response = await BASIC_HTTP.get("v1/slang/:slangId/dislikes");
    return response.data;
  } catch (error) {
    throw error.message;
  }
};



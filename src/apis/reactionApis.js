import { BASIC_HTTP, BEARER_HTTP } from "./axiosClient";

export const createReactionApi = async (data) => {
  try {
    const response = await BEARER_HTTP.post("v1/reaction", data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const getSlangLikesApi = async (data) => {
  try {
    const response = await BASIC_HTTP.get(`v1/slang/${data}/likes`);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const getSlangDislikesApi = async (data) => {
  try {
    const response = await BASIC_HTTP.get(`v1/slang/${data}/dislikes`);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const userSlangReactionApi = async (data) => {
  try {
    const response = await BEARER_HTTP.get(`v1/user/${data}/reaction`);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const deleteSlangReactionApi = async (id) => {
  try {
    const response = await BASIC_HTTP.delete(`v1/reaction/${id}`);
    return response.data
  } catch (error) {
    throw error.response.data.message
  }
}

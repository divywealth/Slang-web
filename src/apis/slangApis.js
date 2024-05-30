import { BASIC_HTTP, BEARER_HTTP } from "./axiosClient";

export const createSlang = async (data) => {
  try {
    const response = await BEARER_HTTP.post("v1/slang", data);
    return response.data;
  } catch (error) {
    throw error.message;
  }
};

export const updateSlang = async (data) => {
    try {
      const response = await BASIC_HTTP.patch("v1/slang/:id", data);
      return response.data;
    } catch (error) {
      throw error.message;
    }
  };

export const getUserApprovedSlang = async () => {
  try {
    const response = await BEARER_HTTP.get("v1/users/:userId/approvedslangs");
    return response.data;
  } catch (error) {
    throw error.message;
  }
};

export const getUserPendingSlang = async () => {
  try {
    const response = await BEARER_HTTP.get("v1/users/:userId/pendingslangs");
    return response.data;
  } catch (error) {
    throw error.message;
  }
};

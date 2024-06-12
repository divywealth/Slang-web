import { BASIC_HTTP, BEARER_HTTP } from "./axiosClient";

export const createSlangApi = async (data) => {
  try {
    const response = await BEARER_HTTP.post("v1/slang", data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const updateSlangApi = async (data) => {
  try {
    const response = await BASIC_HTTP.patch("v1/slang/:id", data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const getSlangApi = async (data) => {
  try {
    const response = await BASIC_HTTP.post("v1/getslang", data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
}

export const getUserApprovedSlangApi = async () => {
  try {
    const response = await BEARER_HTTP.get("v1/users/:userId/approvedslangs");
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const getUserPendingSlangApi = async () => {
  try {
    const response = await BEARER_HTTP.get("v1/users/:userId/pendingslangs");
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const approveSlangApi =  async (id) => {
  try {
    const response = await BASIC_HTTP.patch(`v1/approve/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data.message
  }
}

export const deleteSlangApi =  async (id) => {
  try {
    const response = await BASIC_HTTP.delete(`v1/slang/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data.message
  }
}

export const getPendingSlangsApi =  async () => {
  try {
    const response = await BASIC_HTTP.get(`v1/pendingslangs`);
    return response.data;
  } catch (error) {
    throw error.response.data.message
  }
}

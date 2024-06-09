import { BASIC_HTTP, BEARER_HTTP } from "./axiosClient";

export const createUserApi = async (data) => {
  try {
    const response = await BASIC_HTTP.post("v1/user", data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const verifyUserApi = async () => {
  try {
    const response = await BEARER_HTTP.patch("v1/verify-user");
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const loginUserApi = async (data) => {
  try {
    const response = await BASIC_HTTP.post("v1/login", data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const updatePasswordApi = async (data) => {
  try {
    const response = await BEARER_HTTP.put("/v1/update-password", data);
    return response.data
  } catch (error) {
    throw error.response.data.message;
  }
};

export const updateEmailApi = async (data) => {
  try {
    const response = await BEARER_HTTP.put("/v1/update-email", data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const updateProfilepicApi = async (data) => {
  try {
    const response = await BEARER_HTTP.patch("/v1/update-profilepic", data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const updateUsernameApi = async (data) => {
  try {
    let response = await BEARER_HTTP.put("/v1/update-username", data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const resetPasswordApi = async (data) => {
  try {
    let response = await BASIC_HTTP.put("/v1/reset-password", data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

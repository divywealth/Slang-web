import { BASIC_HTTP, BEARER_HTTP } from "./axiosClient";

export const verifyCodeApi = async (data) => {
  try {
    const response = await BEARER_HTTP.post("/v1/verify-code", data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const sendCodeEmailApi = async (data) => {
  try {
    const response = await BEARER_HTTP.post("/v1/email-code", data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const sendCodePasswordApi = async (data) => {
  try {
    const response = await BASIC_HTTP.post("/v1/password-code", data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

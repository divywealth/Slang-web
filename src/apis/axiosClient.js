import axios from "axios";
import store from "../store/index.js";

export const BASIC_HTTP = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
});

export let BEARER_HTTP = axios.create({
  baseURL: "",
  timeout: 10000,
  headers: { Authorization: `Bearer` },
});
export const SET_BEARER_HTTP = () => {
  BEARER_HTTP = axios.create({
    baseURL: "",
    timeout: 10000,
    headers: { Authorization: `Bearer ${store.state.token}` },
  });
};

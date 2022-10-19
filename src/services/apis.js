import axios from "axios";

export const apiUser = axios.create({
  baseURL: "https://app-user-services.herokuapp.com",
});

export const apiProduct = axios.create({
  baseURL: "https://app-user-services.herokuapp.com",
});

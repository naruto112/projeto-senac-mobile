import axios from "axios";

export const apiUser = axios.create({
  baseURL: "https://app-user-services.herokuapp.com",
});

export const apiProduct = axios.create({
  baseURL: "https://app-product-services.herokuapp.com",
});

export const apiCustomer = axios.create({
  baseURL: "https://app-customer-services.herokuapp.com",
});

export const apiOrder = axios.create({
  baseURL: "https://app-order-services.herokuapp.com",
});

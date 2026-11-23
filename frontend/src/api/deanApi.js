import { request } from "./httpClient";

export const registerDean = (formData) =>
  request("/dean/", { method: "POST", body: formData, auth: false });

export const loginDean = (formData) =>
  request("/dean/login", { method: "POST", body: formData, auth: false });
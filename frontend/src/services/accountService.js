import api from "./api";

/* PROFILE */

export const getProfile = () => api.get("/account/profile/");
export const updateProfile = (data) => api.put("/account/profile/", data);

/* PASSWORD */

export const changePassword = (data) =>
  api.post("/account/change-password/", data);

/* ORDERS */

export const getOrders = () => api.get("/orders/");

export const getOrderDetail = (id) => api.get(`/orders/${id}/`);

/* ADDRESS */

export const getAddresses = () => api.get("/orders/addresses/");

export const createAddress = (data) =>
  api.post("/orders/address/", data);

export const updateAddress = (id, data) =>
  api.put(`/orders/address/${id}/update/`, data);

export const deleteAddress = (id) =>
  api.delete(`/orders/address/${id}/delete/`);
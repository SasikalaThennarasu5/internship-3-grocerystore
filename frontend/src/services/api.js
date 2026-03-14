import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

// PRODUCTS
export const getProducts = async () => {
  const res = await api.get("/product");
  return res.data;
};

// CATEGORIES
export const getCategories = async () => {
  const res = await api.get("/products/categories/");
  return res.data;
};

export const getFeaturedProducts = async () => {
  const res = await api.get("/products/featured");
  return res.data;
};

export const getBestSellerProducts = async () => {
  const res = await api.get("/products/best-sellers");
  return res.data;
};

export default api;
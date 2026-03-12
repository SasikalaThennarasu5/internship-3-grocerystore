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
  const res = await api.get("/categories");
  return res.data;
};

export const getFeaturedProducts = async () => {
  const res = await api.get("/product/featured");
  return res.data;
};

export const getBestSellerProducts = async () => {
  const res = await api.get("/product/best-sellers");
  return res.data;
};
import axios from "axios";

const api = axios.create({
  baseURL: "https://internship-3-grocerystore-2.onrender.com/api",
});

// PRODUCTS
export const getProducts = async () => {
  const res = await api.get("/products/");
  return res.data;
};

// CATEGORIES
export const getCategories = async () => {
  const res = await api.get("/products/categories/");
  return res.data;
};

export const getFeaturedProducts = async () => {
  const res = await api.get("/products/featured/");
  return res.data;
};

export const getBestSellerProducts = async () => {
  const res = await api.get("/products/best-sellers/");
  return res.data;
};

export default api;
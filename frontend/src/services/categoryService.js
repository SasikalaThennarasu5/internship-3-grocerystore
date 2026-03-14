import axios from "axios";

export const getCategories = async () => {

  const res = await axios.get("/api/products/categories/");

  return res.data.results || [];

};
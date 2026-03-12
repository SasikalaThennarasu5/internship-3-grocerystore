import axios from "axios";

export const getProducts = async () => {

  const res = await axios.get("/api/products/");

  return res.data.results;

};
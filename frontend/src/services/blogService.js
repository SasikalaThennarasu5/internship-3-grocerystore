import api from "./api";

export const getBlogs = async () => {
  const res = await fetch("http://localhost:8000/api/blogs/");
  return res.json();
};
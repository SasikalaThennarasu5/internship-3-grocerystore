import api from "./api";

export const getBlogs = async () => {
  const res = await fetch("https://internship-3-grocerystore-2.onrender.com/api/blogs/");
  return res.json();
};
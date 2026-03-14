import api from "./api";

export const getTestimonials = async () => {
  const res = await fetch("https://internship-3-grocerystore-2.onrender.com/api/testimonials/");
  return res.json();
};
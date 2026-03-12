import api from "./api";

export const getTestimonials = async () => {
  const res = await fetch("http://localhost:8000/api/testimonials/");
  return res.json();
};
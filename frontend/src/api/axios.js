import axios from "axios";

const api = axios.create({
  baseURL: "https://internship-3-grocerystore-2.onrender.com/api",
});

// ADD ACCESS TOKEN TO REQUEST
api.interceptors.request.use((config) => {

  const token = localStorage.getItem("access");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;

});


// HANDLE TOKEN EXPIRE
api.interceptors.response.use(

  (response) => response,

  async (error) => {

    const originalRequest = error.config;

    // if access token expired
    if (error.response && error.response.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true;

      try {

        const refresh = localStorage.getItem("refresh");

        const res = await axios.post(
          "https://internship-3-grocerystore-2.onrender.com/api/token/refresh/",
          { refresh }
        );

        const newAccess = res.data.access;

        localStorage.setItem("access", newAccess);

        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        return api(originalRequest);

      } catch (err) {

        // refresh token also expired → logout
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        window.location.href = "/login";

      }

    }

    return Promise.reject(error);
  }

);

export default api;
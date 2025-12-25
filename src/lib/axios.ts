import axios from "axios";
import Cookies from "js-cookie";

const base_url = import.meta.env.VITE_BASE_URL || "http://127.0.0.1:3333";
const http = axios.create({
  baseURL: base_url,
});

http.interceptors.request.use((config) => {
  const token = Cookies.get("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { http };

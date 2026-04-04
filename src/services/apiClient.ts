import type { AxiosInstance } from "axios";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

addInterceptors(apiClient);

function addInterceptors(apiClient: AxiosInstance) {
  // Add an interceptor for handling requests and errors
  apiClient.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      console.error("Request error:", error);
      return Promise.reject(error);
    },
  );

  // Add an interceptor for handling responses and errors
  apiClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.error("API Error:", error);
      return Promise.reject(error);
    },
  );
}

export default addInterceptors;

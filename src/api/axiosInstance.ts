import axios from "axios";
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "sonner";
import { TokenStorage } from "./tokenStorage";
import type { ApiError, ApiResponse } from "@/types/api.types";
import type { User } from "@/types/user.types";

const BASE_URL = (import.meta.env.VITE_API_URL as string) || "http://localhost:5000/v1";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 120000,
  withCredentials: true, // ✅ Essential: transmits HttpOnly cookies (refreshToken) across requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Refresh token queue handling to prevent race conditions
let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const subscribeTokenRefresh = (callback: (token: string) => void): void => {
  refreshSubscribers.push(callback);
};

const onTokenRefreshed = (token: string): void => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

// ----- Request Interceptor -----
axiosInstance.interceptors.request.use(
  (config): any => {
    const accessToken = TokenStorage.getAccessToken();
    config.headers = config.headers || {};

    if (accessToken && !config.headers["Authorization"]) {
      (config.headers as any)["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// ----- Response Interceptor -----
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError<ApiError>) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

    const isAuthRoute =
      originalRequest?.url?.includes("/auth/login") ||
      originalRequest?.url?.includes("/auth/register") ||
      originalRequest?.url?.includes("/auth/refresh") ||
      originalRequest?.url?.includes("/auth/logout");

    // Attempt token refresh on 401 for non-auth requests
    if (error.response?.status === 401 && !originalRequest._retry && !isAuthRoute) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          subscribeTokenRefresh((token) => {
            if (originalRequest.headers) {
              originalRequest.headers["Authorization"] = `Bearer ${token}`;
            }
            resolve(axiosInstance(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Backend /auth/refresh inspects the HttpOnly cookie automatically
        const response = await axios.post<ApiResponse<{ accessToken: string; user: User }>>(
          `${BASE_URL}/auth/refresh`,
          {},
          { withCredentials: true }
        );

        const { accessToken } = response.data.data;
        TokenStorage.setAccessToken(accessToken);
        onTokenRefreshed(accessToken);

        if (originalRequest.headers) {
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        }

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        TokenStorage.clearTokens();
        refreshSubscribers = [];
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // Suppress error toast for silent background refresh checks
    const isSilentRefresh = originalRequest?.url?.includes("/auth/refresh");
    if (!isSilentRefresh) {
      if (error.response) {
        const message = error.response.data?.message || "Something went wrong!";
        toast.error(message);
      } else if (error.request) {
        toast.error("Network error. Please verify the server is running.");
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

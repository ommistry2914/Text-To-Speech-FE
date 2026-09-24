import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import axiosInstance from "@/api/axiosInstance";
import { TokenStorage } from "@/api/tokenStorage";
import type {
  AuthState,
  LoginCredentials,
  RegisterCredentials,
  AuthSuccessPayload,
} from "@/types/auth.types";
import type { ApiResponse } from "@/types/api.types";
import type { User } from "@/types/user.types";

/**
 * Register a new account.
 * Server issues HttpOnly refresh cookie and returns user + accessToken.
 */
export const register = createAsyncThunk<
  AuthSuccessPayload,
  RegisterCredentials,
  { rejectValue: string }
>("auth/register", async (data, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post<ApiResponse<AuthSuccessPayload>>(
      "/auth/register",
      data
    );
    const { accessToken, user } = response.data.data;
    TokenStorage.setAccessToken(accessToken);
    return { accessToken, user };
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Registration failed. Please try again."
    );
  }
});

/**
 * Login with email and password.
 * Transmits credentials directly over HTTPS/API without saving password locally.
 * Server issues HttpOnly refresh cookie and returns user + accessToken.
 */
export const login = createAsyncThunk<
  AuthSuccessPayload,
  LoginCredentials,
  { rejectValue: string }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post<ApiResponse<AuthSuccessPayload>>(
      "/auth/login",
      credentials
    );
    const { accessToken, user } = response.data.data;
    TokenStorage.setAccessToken(accessToken);
    return { accessToken, user };
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Login failed. Please try again."
    );
  }
});

/**
 * Silent session check on initial application load / refresh.
 * Calls /auth/refresh with HttpOnly cookie credentials to restore state seamlessly.
 */
export const checkAuth = createAsyncThunk<
  AuthSuccessPayload,
  void,
  { rejectValue: string }
>("auth/checkAuth", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post<ApiResponse<{ accessToken: string; user: User }>>(
      "/auth/refresh"
    );
    const { accessToken, user } = response.data.data;
    TokenStorage.setAccessToken(accessToken);
    return { accessToken, user };
  } catch (error: any) {
    TokenStorage.clearTokens();
    return rejectWithValue(
      error.response?.data?.message || "Session not found or expired"
    );
  }
});

/**
 * Logout: clears server-side refresh token and cookie, and clears in-memory state.
 */
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axiosInstance.post("/auth/logout");
  } catch {
    // Ignore network error on logout to always log out locally
  } finally {
    TokenStorage.clearTokens();
  }
  return true;
});

const initialState: AuthState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
  isInitialized: false, // true once initial checkAuth completes
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<AuthSuccessPayload>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
        state.isInitialized = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Registration failed";
      })

      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<AuthSuccessPayload>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
        state.isInitialized = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })

      // Check Auth (silent refresh on load)
      .addCase(checkAuth.fulfilled, (state, action: PayloadAction<AuthSuccessPayload>) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
        state.isInitialized = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.user = null;
        state.accessToken = null;
        state.isAuthenticated = false;
        state.isInitialized = true;
      })

      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.accessToken = null;
        state.isAuthenticated = false;
        state.isInitialized = true;
      });
  },
});

export const { resetError } = authSlice.actions;
export default authSlice.reducer;

// Selector
export const selectAuth = (state: RootState) => state.auth;

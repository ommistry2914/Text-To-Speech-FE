import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from "./store";
import axiosInstance from "@/api/axiosInstance";
import { TokenStorage } from "@/api/tokenStorage";
import type { AuthState, LoginCredentials, LoginResponse } from "@/types/auth.types";


export const login = createAsyncThunk<
  LoginResponse,
  LoginCredentials,
  { rejectValue: string }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post<LoginResponse>(
      "/auth/login",
      credentials
    );

    const { accessToken, refreshToken, user } = response.data;

    TokenStorage.setAccessToken(accessToken);
    TokenStorage.setRefreshToken(refreshToken);
    TokenStorage.setUser(user);

    return { accessToken, refreshToken, user };
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Login failed. Please try again."
    );
  }
});

export const refreshTokens = createAsyncThunk<
  LoginResponse,
  void,
  { rejectValue: string }
>("auth/refreshTokens", async (_, { rejectWithValue }) => {
  try {
    const refreshToken = TokenStorage.getRefreshToken();
    if (!refreshToken) throw new Error("No refresh token available");

    const response = await axiosInstance.post<LoginResponse>(
      "/auth/refresh-token",
      { refreshToken }
    );

    const { accessToken, refreshToken: newRefreshToken, user } = response.data;

    TokenStorage.setAccessToken(accessToken);
    TokenStorage.setRefreshToken(newRefreshToken);
    TokenStorage.setUser(user);

    return { accessToken, refreshToken: newRefreshToken, user };
  } catch (error: any) {
    TokenStorage.clearTokens();
    return rejectWithValue(
      error.response?.data?.message || "Session expired. Please log in again."
    );
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  TokenStorage.clearTokens();
  return true;
});


const initialState: AuthState = {
  user: TokenStorage.getUser() || null,
  accessToken: TokenStorage.getAccessToken() || null,
  refreshToken: TokenStorage.getRefreshToken() || null,
  isAuthenticated: !!TokenStorage.getAccessToken(),
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
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })

      .addCase(
        refreshTokens.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.user = action.payload.user;
          state.accessToken = action.payload.accessToken;
          state.refreshToken = action.payload.refreshToken;
          state.isAuthenticated = true;
        }
      )
      .addCase(refreshTokens.rejected, (state) => {
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.isAuthenticated = false;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.isAuthenticated = false;
      });
  },
});

export const { resetError } = authSlice.actions;
export default authSlice.reducer;

// Selector
export const selectAuth = (state: RootState) => state.auth;

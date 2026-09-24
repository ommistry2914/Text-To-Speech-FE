// User and Auth Interfaces
import type { User } from "@/types/user.types";

export interface RegisterCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthSuccessPayload {
  accessToken: string;
  user: User;
}

// Redux State - purely in memory, no sensitive tokens in localStorage
export interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
  loading: boolean;
  error: string | null;
}

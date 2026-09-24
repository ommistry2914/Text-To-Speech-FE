// src/types/user.types.ts
export interface User {
  id: string | number;
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  role: "user" | "superAdmin" | string;
  schoolId?: number;
  [key: string]: any;
}

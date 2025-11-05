// src/types/user.types.ts
export interface User {
  id: number; // mandatory
  name: string;
  email: string;
  "school.id"?: number;
  [key: string]: any;
}

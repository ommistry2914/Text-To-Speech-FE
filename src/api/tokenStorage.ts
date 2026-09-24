/**
 * In-memory token storage.
 * In accordance with strict industry security standards (OWASP), tokens,
 * passwords, and credentials are NEVER stored in localStorage or sessionStorage.
 * This completely eliminates vulnerability to cross-site scripting (XSS) token theft.
 * 
 * The long-lived refresh token is managed exclusively by the browser as an HttpOnly,
 * SameSite cookie.
 */
let inMemoryAccessToken: string | null = null;

export const TokenStorage = {
  getAccessToken: (): string | null => inMemoryAccessToken,

  setAccessToken: (token: string | null): void => {
    inMemoryAccessToken = token;
  },

  clearTokens: (): void => {
    inMemoryAccessToken = null;
  },
};

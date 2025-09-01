// src/auth/token.js

// Save token and user data in localStorage
export function saveAuth(token, user) {
  localStorage.setItem("authToken", token);
  localStorage.setItem("authUser", JSON.stringify(user));
}

// Get token from localStorage
export function getToken() {
  return localStorage.getItem("authToken");
}

// Get user info (parsed from JSON) from localStorage
export function getUser() {
  const user = localStorage.getItem("authUser");
  return user ? JSON.parse(user) : null;
}

// Remove token and user info (logout)
export function clearAuth() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("authUser");
}

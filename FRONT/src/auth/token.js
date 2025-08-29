// src/auth/token.js

// Guardar token y datos del usuario en localStorage
export function saveAuth(token, user) {
  localStorage.setItem("authToken", token);
  localStorage.setItem("authUser", JSON.stringify(user));
}

// Obtener token
export function getToken() {
  return localStorage.getItem("authToken");
}

// Obtener info del usuario (parseado desde JSON)
export function getUser() {
  const user = localStorage.getItem("authUser");
  return user ? JSON.parse(user) : null;
}

// Eliminar token y usuario (logout)
export function clearAuth() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("authUser");
}

// Guarda la sesión del usuario tras login
export function setupUserSession({ id, role, token }) {
    localStorage.setItem('user_id', id);
    localStorage.setItem('user_role', role);
    if (token) localStorage.setItem('user_token', token);
}

// Obtiene el id del usuario autenticado
export function getUserId() {
    return localStorage.getItem('user_id');
}

// Obtiene el rol del usuario autenticado
export function getUserRole() {
    return localStorage.getItem('user_role');
}

// Obtiene el token JWT (si existe)
export function getUserToken() {
    return localStorage.getItem('user_token');
}

// Elimina la sesión (logout)
export function clearUserSession() {
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_token');
}

export default setupLocalStorage;


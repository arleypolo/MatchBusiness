// Save the session from user after login
export function setupUserSession({ id, role, token }) {
    localStorage.setItem('user_id', id);
    localStorage.setItem('user_role', role);
    if (token) localStorage.setItem('user_token', token);
}

// get a id from user auth
export function getUserId() {
    return localStorage.getItem('user_id');
}

// get a role from user auth
export function getUserRole() {
    return localStorage.getItem('user_role');
}

// get token JWT (if exists)
export function getUserToken() {
    return localStorage.getItem('user_token');
}

// delete the session (logout)
export function clearUserSession() {
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_token');
}

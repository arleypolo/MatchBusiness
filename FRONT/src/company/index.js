import { router } from "./router.js";
import { clearAuth } from "../auth/token.js";

document.getElementById('logout-btn').addEventListener('click', () => {
    clearAuth();
    window.location.href = 'index.html'; // Redirect to login or home page after logout
});

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
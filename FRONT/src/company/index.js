import { router } from "./router.js";
import { clearAuth } from "../auth/token.js";
import { matchIdea } from "./views/ideas.js";

// Logout and navigation setup for company dashboard
document.getElementById("logout-btn").addEventListener("click", () => {
  clearAuth();
  window.location.href = "index.html"; // Redirect to login or home page after logout
});

document.addEventListener("click", (event) => {
  if (event.target.id === "match-button")
    matchIdea(event.target.dataset.id); // click for post
});

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
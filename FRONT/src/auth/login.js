import { saveAuth } from "./token.js";

function logIn() {
    document.getElementById("login-btn").addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById("login-modal-overlay").classList.remove("hidden");
        document.getElementById("login-modal-overlay").classList.add("flex");

        // Open login modal
        document.getElementById("login-close-btn").addEventListener("click", () => {
            document.getElementById("login-modal-overlay").classList.remove("flex");
            document.getElementById("login-modal-overlay").classList.add("hidden");
        });

        // Login
        document.getElementById("login-form").addEventListener("submit", async (e) => {
            e.preventDefault();
            const id_user = document.getElementById("login-user").value;
            const password = document.getElementById("login-password").value;

            try {
                const res = await fetch("http://localhost:3000/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id_user, password }),
                });

                if (!res.ok) {
                    throw new Error("Credenciales inválidas");
                }
                const { token, user } = await res.json();

                saveAuth(token, user);

                if (user.role === "coder") {
                    window.location.href = "/coder.html";
                } else if (user.role === "company") {
                    window.location.href = "/company.html";
                }

            } catch (error) {
                console.error("Error during login:", error);
                alert("Error during login. Please try again.");
                return;
            }
        });
    });
}

logIn();
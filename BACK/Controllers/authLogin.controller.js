import jwt from "jsonwebtoken"; // Import JWT for token generation
import { findUserByUsername } from "../Models/userModel.js"; // Import user lookup function

const secretKey = process.env.JWT_SECRET; // Get JWT secret from environment variables

// Login controller function
export const login = async (req, res) => {
    try {
        const { id_user, password } = req.body; // Extract user ID and password from request body

        const user = await findUserByUsername(id_user); // Find user by username

        if (!user) {
            // If user not found, send 401 response
            return res.status(401).json({ message: "Usuario no encontrado" });
        }

        if (user.password !== password) {
            // If password does not match, send 401 response
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        // Map role number to string value
        const role = user.id_role === 1 ? 'coder' : 'company';

        // Generate JWT token with user ID and role, expires in 1 hour
        const token = jwt.sign(
            { id: user.id_user, role }, 
            secretKey, 
            { expiresIn: "1h" }
        );

        // Send token and user info in response
        res.json({
            token,
            user: {
                id: user.id_user,
                role
            }
        });
    } catch (error) {
        // Handle server errors
        console.error(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
}
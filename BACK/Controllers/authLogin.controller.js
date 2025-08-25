import jwt from "jsonwebtoken";
import { findUserByUsername } from "../Models/userModel.js";

const secretKey = process.env.JWT_SECRET;

export const login = async (req, res) => {
    try {
        const { id_user, password } = req.body;

        const user = await findUserByUsername(id_user);

        if (!user) {
            return res.status(401).json({ message: "Usuario no encontrado" });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        // Mapear rol si viene en números
        const role = user.id_role === 1 ? 'coder' : 'company';

        const token = jwt.sign(
            { id: user.id_user, role }, 
            secretKey, 
            { expiresIn: "1h" }
        );

        res.json({
            token,
            user: {
                id: user.id_user,
                role
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
};

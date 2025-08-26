// Permite acceso a ambos roles: coder o company
export const authorizeCompanyOrCoder = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: "Usuario no autenticado" });
    }
    if (req.user.role !== "coder" && req.user.role !== "company") {
        return res.status(403).json({ message: "Acceso solo para CODERS o COMPANIES" });
    }
    next();
};
import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;

// Middleware que autentica el token
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Formato: "Bearer TOKEN"

    if (!token) {
        return res.status(403).json({ message: "Token requerido" });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; // Guarda los datos del payload (id, role) en req.user
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido o expirado" });
    }
};

// Middleware para Coder
export const authorizeCoder = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: "Usuario no autenticado" });
    }
    if (req.user.role !== "coder") {
        return res.status(403).json({ message: "Acceso solo para CODERS" });
    }
    next();
};

// Middleware para Company
export const authorizeCompany = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: "Usuario no autenticado" });
    }
    if (req.user.role !== "company") {
        return res.status(403).json({ message: "Acceso solo para COMPANIES" });
    }
    next();
};

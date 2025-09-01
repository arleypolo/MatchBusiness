// Allows access to both roles: coder or company
export const authorizeCompanyOrCoder = (req, res, next) => {
    if (!req.user) {
        // If user is not authenticated
        return res.status(401).json({ message: "Usuario no autenticado" });
    }
    if (req.user.role !== "coder" && req.user.role !== "company") {
        // If user role is not coder or company
        return res.status(403).json({ message: "Acceso solo para CODERS o COMPANIES" });
    }
    next();
};

import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;

// Middleware to authenticate the token
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Format: "Bearer TOKEN"

    if (!token) {
        // If token is missing
        return res.status(403).json({ message: "Token requerido" });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; // Save payload data (id, role) in req.user
        next();
    } catch (error) {
        // If token is invalid or expired
        return res.status(401).json({ message: "Token inválido o expirado" });
    }
};

// Middleware for Coder role
export const authorizeCoder = (req, res, next) => {
    if (!req.user) {
        // If user is not authenticated
        return res.status(401).json({ message: "Usuario no autenticado" });
    }
    if (req.user.role !== "coder") {
        // If user role is not coder
        return res.status(403).json({ message: "Acceso solo para CODERS" });
    }
    next();
};

// Middleware for Company role
export const authorizeCompany = (req, res, next) => {
    if (!req.user) {
        // If user is not authenticated
        return res.status(401).json({ message: "Usuario no autenticado" });
    }
    if (req.user.role !== "company") {
        // If user role is not company
        return res.status(403).json({ message: "Acceso solo para COMPANIES" });
    }
    next();
};

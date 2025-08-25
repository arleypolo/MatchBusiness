import db from "../config/db.js";

// Buscar usuario por username
export const findUserByUsername = async (id_user) => {
    const query = "SELECT * FROM users WHERE id_user = $1";
    const values = [id_user];
    const { rows } = await db.query(query, values);
    return rows[0]; 
};
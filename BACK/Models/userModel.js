import db from "../config/db.js";

// Find user by username (id_user)
export const findUserByUsername = async (id_user) => {
    const query = "SELECT * FROM users WHERE id_user = $1";
    const values = [id_user];
    const { rows } = await db.query(query, values);
    return rows[0]; 
};
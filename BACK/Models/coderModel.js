import db from '../config/db.js';

// Get all coders from the database
export const getAllCoders = async () => {
    const result = await db.query('SELECT * FROM coders');
    return result.rows;
};

// Get a coder by ID
export const getCoderById = async (id) => {
    const result = await db.query('SELECT * FROM coders WHERE id_coder = $1', [id]);
    return result.rows[0];
};

// Create a new coder and user in a transaction
export const createCoder = async ({ id, first_name, last_name, phone, cohort, description, password }) => {
    const client = await db.connect();
    try {
        await client.query('BEGIN');

        // Insert into users table
        const queryUsers = `INSERT INTO users (id_user, password, id_role) VALUES ($1, $2, $3) RETURNING *`;
        await client.query(queryUsers, [id, password, 1]);

        // Insert into coders table
        const queryCoders = `INSERT INTO coders (id_coder, first_name, last_name, phone, cohort, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        const coderResult = await client.query(queryCoders, [id, first_name, last_name, phone, cohort, description]);

        await client.query('COMMIT');
        return coderResult.rows[0];
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
};

// Update an existing coder by ID
export const updateCoder = async (id, { first_name, last_name, phone, cohort, description }) => {
    const query = `UPDATE coders 
                SET first_name = $1, last_name = $2, phone = $3, cohort = $4, description = $5 
                WHERE id_coder = $6 RETURNING *`;
    const result = await db.query(query, [first_name, last_name, phone, cohort, description, id]);
    return result.rows[0];
};

// Delete a coder (and user) by ID
export const deleteCoder = async (id) => {
    const queryCoder = `DELETE FROM users WHERE id_user = $1 RETURNING *`;
    const result = await db.query(queryCoder,[id]);
    return result.rows[0];
};

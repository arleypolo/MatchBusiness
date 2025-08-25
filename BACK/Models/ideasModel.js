import db from '../config/db.js';

export const sendIdea = async ({ id_coder, id_company, title, description }) => {
    const queryIdea = `INSERT INTO ideas (id_coder, id_company, title, description)
    VALUES ($1, $2, $3, $4)`
    await db.query(queryIdea, [id_coder, id_company, title, description]);
};
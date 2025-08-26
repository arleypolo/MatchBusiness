import db from '../config/db.js';

export const getMyMatches = async (id) => {
    const queryMatches = `SELECT title, i.description, company_name as company, created_at, match_status, match_date FROM matches m
    JOIN ideas i ON m.id_idea = i.id_idea
    JOIN companies c ON c.id_company = i.id_company
    WHERE i.id_coder = $1 OR i.id_company = $1`
    const result = await db.query(queryMatches, [id]);
    return result.rows;
} 